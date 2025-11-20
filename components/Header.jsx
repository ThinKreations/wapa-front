import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Component.module.css"
import logo from "@/src/logo.png"

export default function Header(props){
    return(
        <div className={styles.header}>
            <Link href={'/dashboard/'}><Image src={logo} width={120}/></Link>
            <div key="user" className={styles.header_options}>
                <button className={styles.btnConfig}>
                    <span className="material-icons">
                        settings
                    </span>
                </button>
                <button className={styles.btnConfig}>
                    <span className="material-icons">
                        exit_to_app
                    </span>
                </button>
            </div>
        </div>
    )
}