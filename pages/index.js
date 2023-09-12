import Head from "next/head"
import Navbar from "@/components/Navbar"
import Main from "@/components/Main"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joel | Full-Stack Developer</title>
        <meta name="description" content="content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}
