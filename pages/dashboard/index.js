import logo from "@/src/logo.png"
import MainHead from "@/components/MainHead";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";


export default function Dashboard(/*{data}*/){

  

  return(
    <>
      <MainHead title="WAPA" />
      <Header /* prop={aquí va a ir lo que sea necesario} */ />
      <div className={styles.dashboard_container}>
        <div className={styles.dashboard_controls}>
          <button className={styles.btnAgregar}>
          + Agregar
          </button>
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