import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const [newItem, setNewItem] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(removeItem(item))}>Eliminar</button>
            {/* Dar clase */}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Agregar producto"
      />
      <button onClick={() => dispatch(addItem(newItem))}>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Cart;
