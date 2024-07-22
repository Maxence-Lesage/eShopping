"use client"

import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { deleteUs, getFnc } from "../app/server"

export default function Home() {
  const [data, setData] = useState() as any;
  const [dataImg, setDataImg] = useState() as any;

  function deleteU() {
    const res = deleteUs()
    setData(res)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/users');
        console.log(response);
        setDataImg(response);
      } catch (error) { console.log("error"); }
    }

    fetchData();
    // return await fetch('http://localhost:3001/users', { method: 'GET' }).then(res => { return res })
  }, [])


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={() => deleteU()} className="size-[100px] bg-green-300/70">DELETE</button>
        <p>{data}</p>
        <img src="http://localhost:3001/users" />
      </main>
    </div>
  );
}
