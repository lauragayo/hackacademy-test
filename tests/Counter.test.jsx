import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../src/components/Counter";

//Suite que contiene los tests
describe("<Counter />", () => {
  //Test unitario para verificar el funcionamiento del componente contador
  test("Renders the Counter component", () => {
    //Renderizo el componente
    render(<Counter />);

    //Obtengo el elemento que muestra el texto contador para luego poder interactuar con él
    const countElement = screen.getByText(/Count: 0/i);

    //Obtengo el elemento botón incrementar para luego poder interactuar con él
    const buttonIncrementar = screen.getByText(/Increment/i);

    //Verifico que el elemento que muestra el texto contador esté en el documento
    expect(countElement).toBeInTheDocument();

    //Verifico que el elemento botón incrementar esté en el documento
    expect(buttonIncrementar).toBeInTheDocument();

    //Hago click en el botón incrementar
    fireEvent.click(buttonIncrementar);

    //Verifico que el elemento que contiene el texto contador esté en el documento con el conteo 1
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });
});
