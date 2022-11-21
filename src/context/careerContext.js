import React from "react"

const CareerContext = React.createContext();

const CareerProvider = ({children})=>{
    const [carrierOpen,setCarrierOpen]=React.useState(false);
    const handleCarrier=()=>setCarrierOpen(true)
    const handleCarrierClose =()=> setCarrierOpen(false)
    return <CareerContext.Provider value={{carrierOpen,handleCarrier,handleCarrierClose}}>{children}</CareerContext.Provider>
}

export {CareerContext ,CareerProvider}