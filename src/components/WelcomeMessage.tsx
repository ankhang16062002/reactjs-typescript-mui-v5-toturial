import { Box } from "@mui/material"

interface TypographyProps {
    name: string,
    position: string
}

const WelcomeMessage = ({name, position}: TypographyProps) => {
  return (
    <Box sx={{fontSize:'14px'}}>
        {`Welcome ${name} - ${position} from VietNam`}
    </Box>
  )
}

export default WelcomeMessage