import React, { useState } from "react";
import { Button, Container, InputGroup, Form, Input } from "reactstrap";
import {ImBin, ImPencil } from "react-icons/im";

const Tarea = (props) => {
  //editar tarea
  const [modoEdit, setModoEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const editar = () => {
    setModoEdit(true);
  };

  const manejarEdit = (event) => {
    setEditText(event.target.value);
  };

  //boton de guardar al editar
  const submitEdit = (event) => {
    event.preventDefault();
    props.editar(props.id, editText);
    setEditText("");
    setModoEdit(false);
  };

  //borrar tarea
  const borrarTarea = () => {
    props.borrar(props.id);
  };
  return (
    <Container className="lineaTareas">
      {!modoEdit ? (
        <div className="gridTareas">

          <div className="gridTareasTexto">
             <span> {props.tarea} </span>
          </div>

          <div className="gridTareasItem derecha">
            <ImPencil className="margen__derecha" onClick={editar}>Edit</ImPencil>
         

          
            <ImBin onClick={borrarTarea}>Delete</ImBin>
            </div>

        </div>
      ) : (
        <Form className="formEdit" onSubmit={submitEdit}>
          <InputGroup>
            <Input value={editText} onChange={manejarEdit} />
            <Button className="colorPrincipal boton">Save</Button>
          </InputGroup>
        </Form>
      )}
    </Container>
  );
};

export default Tarea;
