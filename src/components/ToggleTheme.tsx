import { Button } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ToggleTheme = () => {
    const {toggleTheme} = useContext(ThemeContext)
  return (
    <Button 
        variant="contained" 
        sx={{position: 'fixed', right: '40px', bottom: '40px'}}
        onClick={toggleTheme}
    >Toggle Theme</Button>
  )
}

export default ToggleTheme