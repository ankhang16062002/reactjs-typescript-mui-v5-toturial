import styled from "@emotion/styled"
import { Box, Button, Input, Modal} from "@mui/material"
import { useContext, useState } from "react"
import {ChangeEvent} from 'react'
import { AuthContext } from "../context/AuthProvider"

interface LoginProps {
    open: boolean
    handleClose: () => void
}

const BoxLogin = styled(Box)(({theme}) => ({
    width: '400px', 
    background: '#fff', 
    position: 'absolute', 
    top: '50%', 
    'left': '50%', 
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '3px',
    textAlign: 'right'
}))

const Login = ({open, handleClose} : LoginProps) => {
    const [value, setValue] = useState<string>("")
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }
    const {authInfo, loginUser} = useContext(AuthContext)
    console.log(authInfo)

    console.log(1)

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <BoxLogin>
            <Box>
                <Input 
                    placeholder="Username*"
                    value={value} 
                    onChange={handleChange}
                    sx={{
                        marginBottom: '10px', 
                        width: '100%',
                        "&::before": {
                            borderColor: 'blue'
                        },
                        "&:hover::before": {
                            borderColor: 'blue !important'
                        }
                    }}
                />
            </Box>
            <Button variant="contained" onClick = {() => loginUser(value)}>Login</Button>
        </BoxLogin>
    </Modal>
  )
}

export default Login