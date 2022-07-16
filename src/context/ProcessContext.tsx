import { createContext, ReactNode} from "react";

interface ProcessForm {
    time: string
    status: string
}

interface ProcessProps {
    children: ReactNode
}

const initialProcess = {
    time: '16/07/2022',
    status: 'In Process'
}

export const ProcessContext = createContext<ProcessForm>(initialProcess)

const ProcessProvier = ({children}: ProcessProps) => {
    
    return <ProcessContext.Provider value={initialProcess}>
        {children}
    </ProcessContext.Provider>
}

export default ProcessProvier