import MainHead from "@/components/MainHead";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <MainHead title="Recuperar"/>
        <Link href={'/'}>Volver</Link>
    </>
    )
}