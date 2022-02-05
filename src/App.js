import React, { useState } from "react";
import "./index.css";
import TareaForm from "./components/Tarea/TareaForm";
import Tarea from "./components/Tarea/Tarea";
import Navbar from "./components/Navbar/Navbar";

function App() {
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
    <div className="App">
      <Navbar />

      <TareaForm nuevaTarea={nuevaTarea} />

      {listaTareas.map((e, index) => 
      <Tarea tarea={e} borrar={borrar} id={index} editar={actualizarTarea} />
      )
      
      }
    </div>
  );
}

export default App;
