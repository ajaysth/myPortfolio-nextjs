'use client'
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Project from "@/app/components/Project";
import Contact from "@/app/components/Contact";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Project />
    <Contact />
    </>
  );
}
