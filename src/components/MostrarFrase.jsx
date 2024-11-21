import { useState } from "react";
import axios from "axios";
function MostrarFrase() {
  const [quote, setQuote] = useState("");
  //'http://api.quotable.io/random'

  const fetchQuote = async () => {
    await axios
      .get("http://api.quotable.io/random")
      .then((response) => {
        const data = response.data;
        setQuote(data.content);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={fetchQuote}>Cargar Frase</button>
      <p>Frase: {quote}</p>
    </div>
  );
}

export default MostrarFrase;
