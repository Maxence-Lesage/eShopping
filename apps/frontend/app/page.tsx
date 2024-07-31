"use client"

import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { deleteUs } from "../app/server"

export default function Home() {
  const [data, setData] = useState() as any;
  const [dataImg, setDataImg] = useState() as any;

  // function deleteU() {
  //   const res = deleteUs()
  //   setData(res)
  // }
  const json = { email: 'nanami@yahoo.com', password: 'magicwaysmyfriend' };

  useEffect(() => {
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      credentials: 'include', // inclure les cookies
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }).then(response => {
      if (response.ok) {
        console.log('Cookie should be set');
        setData("COOKIES");
      }
    }).catch(error => {
      console.error('Error:', error);
    });
  }, [])


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <button onClick={() => deleteU()} className="size-[100px] bg-green-300/70">DELETE</button> */}
        <p>{data}</p>
        {/* <img src="http://localhost:3001/users" /> */}
      </main>
    </div>
  );
}
