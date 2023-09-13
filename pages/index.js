import Head from "next/head"
import Navbar from "@/components/Navbar"
import Main from "@/components/Main"
import About from "@/components/About"

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
      <About />
    </div>
  )
}
