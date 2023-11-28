import About from "./components/About";
import Contact from "./components/Contact";

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
        <section id="projects" style={{ height: '100vh' }}>
          <h2>Moje projekty</h2>
        </section>
        <Contact />
      </body>
      <footer>
        Wszystkie prawa zastrzeżone &copy;
      </footer>
    </>
  );
}

export default App;
