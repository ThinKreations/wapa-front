import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Component.module.css"
import logo from "@/src/logo.png"
import { useRouter } from "next/router";

export default function Header({props}){
    const router = useRouter();
    return(
        <div className={styles.header}>
            <Link href={'/dashboard/'}><Image src={logo} width={150} style={{filter: "invert()"}}/></Link>
            <div key="user" className={styles.header_controls}>
                <select className={styles.header_select}>
                    <option disabled selected>Seleccionar secuencia | No hay secuencias disponibles.</option>
                    <option >Aquí se mostrarán las secuencias</option>
                </select>
                <div>
                    <button className={`material-icons`}>
                        settings
                    </button>
                    <button className={`material-icons`} onClick={()=>{router.push('/')}}>
                        exit_to_app
                    </button>
                </div>
            </div>
        </div>
    )
}