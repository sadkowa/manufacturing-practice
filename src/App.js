import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header style={{ height: '100vh' }}>
        <h1>Joanna Sadkiewicz</h1>
        <img src="" alt="not_found" />
        <nav>
          <ul><li><a href="#about">O mnie</a></li></ul>
          <ul><li><a href="#projects">Projekty</a></li></ul>
          <ul><li><a href="#contact">Kontakt</a></li></ul>
        </nav>
      </header>
      <body>
        <About />
        <Projects />
        <Contact />
      </body>
      <footer>
        Wszystkie prawa zastrzeżone &copy;
      </footer>
    </>
  );
}

export default App;
