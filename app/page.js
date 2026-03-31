import About from "./about/page";
import Header from "./components/Header";
import Skills from "./skills/page";
import Project from "./project/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <div id="home"><Header /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
