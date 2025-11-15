import MainHead from "@/components/MainHead";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MainHead title="Assistence.io"/>
      <div className={styles.container}>
        <div className={styles.landing_block}>
          <center>
            <h1>Assistance.io</h1>
            <p>Sistema para Registro de Asistencias</p>
          </center>
        </div>
        <div className={styles.auth_block}>
          <form className={styles.login_form}>
            <h2>Inicia Sesión</h2>
            <div className={styles.login_inputContainer}>
              <input className={styles.login_input} type="text" required/>
              <label className={styles.login_label}>No. Empleado</label>
              <div className={styles.underline}></div>
            </div>
            <div className={styles.login_inputContainer}>
              <input className={styles.login_input} type="password" required/>
              <label className={styles.login_label}>Contraseña</label>
              <div className={styles.underline}></div>
            </div>
            <Link href={'/sesion/recuperar'} className={styles.login_link_recover}>Olvidé mi contraseña</Link>
            <div className={styles.login_checkbox}><input type="checkbox" name="recordar"/><label>Recuerdame</label></div>
            <button className={styles.login_button}><font size="5">A c c e d e r</font></button>
            <br/><br/>
            <p>
            <Link href={'/sesion/recuperar'} className={styles.login_link_options}>Registrate aquí</Link>
            <br/>o<br/>
            <Link href={'/sesion/recuperar'} className={styles.login_link_options}>Accede como invitado</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
