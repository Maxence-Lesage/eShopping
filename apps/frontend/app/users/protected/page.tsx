"use client"
import styles from "../../page.module.css";
import { useEffect, useState } from "react"
import { tabi } from "../../server";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    tabi().then(res => setData(res));
  }, [])

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>
          {data}
        </p>
      </main>
    </div>
  )
}