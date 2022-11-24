import React from "react"

const InternshipContext = React.createContext();

const InternshipProvider = ({children})=>{
    const [internshipOpen, setInternshipOpen] = React.useState(false);
    const handleinternship = () => setInternshipOpen(true);
    const handleInternshipClose = () => setInternshipOpen(false);
    return <InternshipContext.Provider value={{internshipOpen,handleinternship,handleInternshipClose}}>{children}</InternshipContext.Provider>
}

export {InternshipContext ,InternshipProvider}