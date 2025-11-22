import logo from "@/src/logo.png"
import MainHead from "@/components/MainHead";
import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function Dashboard(/*{data}*/){
  const router = useRouter();

  const [view, setView] = useState(1);

  const changeView = (value) => {
    //state 0 = tablero, state 1 = lista
    setView(value)
  }

  return(
    <>
      <MainHead title="WAPA" />
      <Header />
      <div className={styles.dash_container}>
        <div className={styles.dash_ctrl}>
          <div>
            <form className={styles.dash_ctrl_srch}>
              <input className={styles.dash_ctrl_srch_input} placeholder="Buscar clase o secuencia"/>
              <button className={`${styles.dash_ctrl_srch_btn} material-icons`} type="button">search</button>
            </form>
          </div>
          <div className={styles.dash_ctrl_view}>
            <span>Mostrar:</span>
            <button className={`${styles.dash_ctrl_view_btn} material-icons`} onClick={()=>changeView(0)}>dashboard</button>
            <button className={`${styles.dash_ctrl_view_btn} material-icons`} onClick={()=>changeView(1)}>view_list</button>
            <button className={styles.btn_agregar}>+ Agregar</button>
          </div>
        </div>
        <div className={styles.dash_card_container}>
        {view==0?(
          <>
            <div className={styles.dash_card}>
                <h2>Unidad de Aprendizaje</h2>
                <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                  <h3>5CM51</h3>
                  <h3>2026-1</h3>
                </div>
            </div>
          </>
        ):(
          <div className={styles.dash_table_container}>
            <table className={styles.dash_table}>
              <thead>
                <tr>
                  <th onClick={()=>{console.log("Orenar por U.A.")}}>Clase</th>
                  <th style={{width:"20%"}} onClick={()=>{console.log("Orenar por Secuencia.")}}>Secuencia</th>
                  <th style={{width:"20%"}}>Periodo</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.dash_table_class} onClick={()=>{router.push('/dashboard/clases/0')}}>
                  <td className={styles.dash_table_class_name} style={{textAlign:"left"}}><p style={{borderRight:"1px solid var(--input-border)"}}>Unidad de Aprendizaje</p></td>
                  <td style={{width:"25%"}}><p style={{borderRight:"1px solid var(--input-border)"}}>5CM51</p></td>
                  <td style={{width:"20%"}}><p>2026-1</p></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        </div>
      </div>
    </>
  );
}

// Esto obtiene los datos y renderiza del lado del servidor.
/**
 * export async function getServerSideProps(){
 * 
 *  const res = await fetch("http://url.xd", {
 *  headers: Autenticación, cookies, tokens, tipo de contenido y así, ej.
 *  "Content-Type": "application/json"
 *  }};
 * 
 *  const data = await res.json();
 * 
 *  return {
 *    props: {data}
 *  }
 * }
 */


/**
 * 
 * Esta página recibirá todas las clases registradas con ese profesor, con .map vamos a renderizar una card con los datos básicos de la clase: Secuencia, UA, Alumnos
 * 
 */