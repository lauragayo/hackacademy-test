import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/features/userSlice.js";
import { Provider } from "react-redux";
import Login from "../src/components/Login.jsx";

//Suite que contiene los tests
describe("Componente Login", () => {
  //Inicializo la store que se va a utilizar para definir los estados necesarios para cada test
  let store;

  //Antes de cada test, configuro la store de redux con los valores iniciales para el usuario
  beforeEach(() => {
    store = configureStore({
      reducer: {
        user: userReducer,
      },
    });
  });

  //Defino la función renderWithRedux para rendizar el componente utilizando la store definida en el hook beforeEach
  const renderWithRedux = (component) => {
    return render(<Provider store={store}>{component}</Provider>);
  };

  //Test unitario para verificar el funcionamiento del componente Login cuando el usuario no está logueado
  test("Renderiza el componente Login sin un usuario logueado", () => {
    //Utilizo la función renderWithRedux para renderizar el componente Login
    renderWithRedux(<Login />);

    //Verifico que el elemento con el texto 'Por favor, inicie sesión' se encuentre en el componente
    expect(screen.getByText("Por favor, inicie sesión")).toBeInTheDocument();

    //Verifico que el elemento con el texto 'Iniciar Sesión' se encuentre en el componente
    expect(screen.getByText("Iniciar Sesión")).toBeInTheDocument();
  });

  //Test unitario para verificar el funcionamiento del componente Login cuando el usuario está logueado
  test("Renderiza el componente Login con un usuario logueado", () => {
    //Defino el estado del usuario a logueado en la store anted de renderizar el componente
    store = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: { isLoggedIn: true },
      },
    });

    //Utilizo la función renderWithRedux para renderizar el componente Login
    renderWithRedux(<Login />);

    //Verifico que el elemento con el texto 'Bienvenido!' se encuentre en el componente
    expect(screen.getByText("Bienvenido!")).toBeInTheDocument();

    //Verifico que el elemento con el texto 'Cerrar Sesión' se encuentre en el componente
    expect(screen.getByText("Cerrar Sesión")).toBeInTheDocument();
  });
});
