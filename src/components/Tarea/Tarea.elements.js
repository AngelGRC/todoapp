import styled from "styled-components";

export const TareaContainer = styled.div`
width: 100%;
height: 100%;
background-color: white;
padding: 4rem;
`;

export const ItemGridForm = styled.div`
display: flex;
justify-content: center;
padding: 1rem;`;

export const GridForm = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 3rem;
grid-gap: 1rem;
padding: 1rem;
align-items: center;
justify-items: center;
justify-content: center;
box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.4);
-webkit-box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.4);
-moz-box-shadow: 1px 1px 9px 2px rgba(0,0,0,0.4);`;

export const Form = styled.form`
width: 50%;
margin: auto;
border-radius: 4px;
@media (max-width: 471px) {
    width: auto;
};


`;

export const FormInput = styled.input`
font-size: 1rem;
padding: 0.8rem;
border: none;
border-bottom: 2px solid #c7c7c7;
::-webkit-input-placeholder{
    text-align:center;
}
`;

export const FormButton = styled.button`
border: none;
border-radius: 4px;
padding: 1rem;
font-size: 1rem;
background-color: #723AC0;
color: white;
`;

export const ListaContainer = styled.div`
width: 100%;
height: 100%;
background-color: blue;
padding: 2rem;
`;

export const ItemGridTareas = styled.div`
display: flex;
justify-content: center;
padding: 1rem;`;

export const TareasGrid = styled.div`
font-size: 1rem;
display: grid;
grid-gap: 1em;
grid-template-columns: 4fr 1fr 1fr;
justify-items: left;`;

export const Valido = styled.div`
color: red;`;




