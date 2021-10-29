import { useEffect, useState } from "react"
import Navbar from "../Navbar"
import ButtonBottomNavigators from "../navigators/ButtonBottomNavigators"

const Layout =({bottomNavigators,children})=>{

   return <>
        <Navbar/>
    
        {children}
   </>


}


export default  Layout