import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      backgroundColor: darkMode ? "#363434" : "white",
      color: darkMode && "white"
    }}>
      <Intro />
      <ProjectList />
      <Contact />
      <Toggle />
    </div>

  );
};

export default App;