import Head from "next/head"
import Main from "@/components/Main"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joel | Full-Stack Developer</title>
        <meta name="description" content="content description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
