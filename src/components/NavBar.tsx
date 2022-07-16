import { AppBar, Toolbar, Typography, Box, Chip, Select, MenuItem, FormControl, SelectChangeEvent, Button} from "@mui/material"
import { useContext, useEffect, useState } from "react"
import WelcomeMessage from "./WelcomeMessage"
import {ProcessContext} from "../context/ProcessContext"
import { ThemeContext } from "../context/ThemeContext"
import Login from "./Login"

const NavBar = () => {
    const [position, setPosition] = useState<string>("Front-end developer")
    const [currentTime, setCurrentTime] = useState<Date>(() => new Date(Date.now()))
    const handleChagePosition = (e: SelectChangeEvent<string>) => {
        setPosition(e.target.value)
    }
    const {time, status} = useContext(ProcessContext)
    const {theme} = useContext(ThemeContext)

    const [open, setOpen] = useState<boolean>(false)

    const handleClose = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date(Date.now()))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

  return (
    <AppBar position="static" color={theme}>
        <Toolbar sx={{display:'flex', alignItems: 'center', justifyContent: 'space-between', pt: '15px', pb: '15px'}}>
            <Typography component="a" href="#" sx={{textDecoration: 'none', color: '#ffffff'}}>My Movies</Typography>
            <Box sx={{textAlign: 'center'}}>
                <WelcomeMessage name="An Khang" position={position}/>
                <Chip label={`Last time working on project: ${time} - Status: ${status}`} sx={{background: '#ffffff', mt: '10px'}}/>
                <Box>
                    <FormControl variant="standard">
                        <Select
                            value={position}
                            onChange={handleChagePosition}
                            sx={{color: '#ffffff', mt: '10px'}}
                            
                        >
                            <MenuItem value={'Front-end developer'}>Front-end developer</MenuItem>
                            <MenuItem value={'Back-end developer'}>Back-end developer</MenuItem>
                            <MenuItem value={'Fullstack developer'}>Fullstack developer</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box sx={{textAlign: 'center'}}>
                <Typography>{currentTime.toUTCString()}</Typography>
                <Button 
                    variant="contained" 
                    sx={{marginTop: '20px', color: '#000000', background: '#ffffff'}}
                    onClick = {() => setOpen(true)}
                >Login</Button>
            </Box>
            <Login open={open} handleClose={handleClose}/>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar