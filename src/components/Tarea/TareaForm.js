import React, { useState } from "react";
// import { Form, FormButton, FormInput, GridForm, ItemGridForm, Valido} from "./Tarea.elements";
import { Input, Form, Button, Container, Card, CardBody } from "reactstrap";

const TareaForm = (props) => {
  const [inputText, setInputText] = useState("");
  //validar si hay algo escrito
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setInputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    //validacion
    if (inputText.trim() !== "") {
      props.nuevaTarea(inputText);
      setInputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <Container className="padding">
      <Card className="sombra">
        <CardBody>
          <Form onSubmit={submit}>
            <Input maxLength={40} className="dark"
              placeholder="Enter Title"
              value={inputText}
              onChange={manejarFormulario}
            ></Input>
        <Container className="centro">
            <Button className="margen__arriba boton">ADD</Button>
        </Container>
            {!validacion && <span className="validacion">blank space</span>}
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default TareaForm;
