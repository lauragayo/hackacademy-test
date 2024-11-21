import React from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login.jsx";
import Cart from "./components/Cart.jsx";
import Counter from "./components/Counter.jsx";
import MostrarFrase from "./components/MostrarFrase.jsx";
import ParentComponent from "./components/ParentComponent.jsx";
function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <h1>Contador</h1>
      <Counter />
      <br></br>
      <h1>Tienda</h1>
      <Login />
      {/* si el usuario está logueado, se muestra el componente Cart */}
      {isLoggedIn && <Cart />}
      <br></br>
      <h1>Frase</h1>
      <MostrarFrase />
      <br></br>
      <h1>Cmponente padre</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
