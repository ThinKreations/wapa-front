import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Component.module.css"
import logo from "@/src/logo.png"

export default function Header(props){
    return(
        <div className={styles.header}>
            <Link href={'/dashboard/'}><Image src={logo} width={150} style={{filter: "invert()"}}/></Link>
            <div key="user" className={styles.header_options}>
                <button className={`${styles.btnConfig} material-icons`}>
                        settings
                </button>
                <button className={`${styles.btnConfig} material-icons`}>
                        exit_to_app
                </button>
            </div>
        </div>
    )
}