import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";
import Cart from './Cart';

function Login() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div>
            <h2>Bienvenido!</h2>
            <button onClick={() => dispatch(logout())}>Cerrar Sesión</button>
          </div>
        </>
      ) : (
        <div>
          <h2>Por favor, inicie sesión</h2>
          <button onClick={() => dispatch(login())}>Iniciar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default Login;
