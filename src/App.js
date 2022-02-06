import React, { useState } from "react";
import "./index.css";
import TareaForm from "./components/Tarea/TareaForm";
import Tarea from "./components/Tarea/Tarea";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles} from "./components/themes"
import { ImContrast } from "react-icons/im"

function App() {

  //themes
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  //tareas
  const [listaTareas, setListaTareas] = useState([]);

  //crear
  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };
  //borrar
  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  };

  //editar
  const actualizarTarea = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index) => {
      if (index === id) {
        e = tarea;
      }
      return e;
    });
    setListaTareas(listaActualizada);
  };

  return (
    <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <div className="App">
      <Navbar></Navbar>

      <TareaForm nuevaTarea={nuevaTarea} />

      {listaTareas.map((e, index) => 
      <Tarea tarea={e} borrar={borrar} id={index} editar={actualizarTarea} />
      )
      
      }
      <ImContrast className="btnFlotante" onClick={() => themeToggler()}></ImContrast>
    </div>
    </ThemeProvider>
   
  );
}

export default App;
