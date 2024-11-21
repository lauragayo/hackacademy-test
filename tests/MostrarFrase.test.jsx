import { render, fireEvent } from "@testing-library/react";
import { expect, jest } from "@jest/globals";
import axios from "axios";
import MostrarFrase from "../src/components/MostrarFrase";

//Suite que contiene los tests
describe("Mostrar frase tests", () => {
  //Test unitario para verificar el funcionamiento del botón Cargar frase
  test("Debería mostrar una frase", async () => {
    //Creo el mock de manera que axios.get responda "Hola clase"
    const responseMock = { data: { content: "Hola clase" } };
    axios.get = jest.fn().mockResolvedValue(responseMock);

    //Renderizo el componente
    const { getByText, findByText } = render(<MostrarFrase />);

    //Obtengo el elemento para luego poder interactuar con él
    const buttonCargarFrase = getByText(/Cargar Frase/i);

    //Hago click en el elemento botón Cargar frase
    fireEvent.click(buttonCargarFrase);

    //Obtengo el elemento que contiene la frase
    const quoteElement = await findByText(/Hola clase/i);

    //Verifico que el elemento que contiene la frase esté en el documento
    expect(quoteElement).toBeInTheDocument();
  });
});
