import { render, screen, fireEvent } from "@testing-library/react";
import ParentComponent from "../src/components/ParentComponent";

//Suite que contiene los tests
describe("Prueba de componente padre", () => {
  //Test de integración para verificar el funcionamiento del componente padre en interacción con el componente hijo
  test("Debería mostrar el texto ingresado en el componente hijo", () => {
    //Renderizo el componente padre (que al contener el componente hijo también lo renderiza)
    render(<ParentComponent />);

    //Obtengo el elemento input de texto del componente hijo para luego poder interactuar con él
    const inputTexto = screen.getByRole("textbox");

    //Obtengo el elemento botón Submit del componente hijo para luego poder interactuar con él
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    //Cambio el valor del input
    fireEvent.change(inputTexto, { target: { value: "Hola clase Jueves" } });

    //Hago click en el botón Submit
    fireEvent.click(submitButton);

    //Verifico que el texto que se ingresó en el input se muestre en el componente
    expect(screen.getByText(/Text: Hola clase Jueves/i)).toBeInTheDocument();
  });
});
