import styles from "@/styles/Home.module.css"
import Link from "next/link"
import { useState } from "react";

export default function LogIn(){
    const [login, setLogin] = useState(true);
    const [show, setShow] = useState(true);
    
    function toSignUp(){
        setLogin(!login);
    }
    
    function toShowPass(){
        setShow(!show);
    }
    
    return(
        <>
            
        </>
    )
}