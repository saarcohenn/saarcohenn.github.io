import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";

// Components
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* Nav */}
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.pathname}>
        {/* About */}
        <Route exact path="/">
          <About />
        </Route>
        {/* Projects */}
        <Route exact path="/projects">
          <Projects />
        </Route>
        {/* Skills */}
        <Route exact path="/skills">
          <Skills />
        </Route>
        {/* Footer */}
        <Route exact path="/footer">
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
