import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3500/${nombre}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.ok) {
        setMensaje(data.mensaje);
      } else {
        setMensaje(data.error);
      }
    } catch (error) {
      setMensaje("Error de red");
    }
    if (nombre.trim()) {
      navigate(`/${nombre}`);
    }
  };

  return (
    <div className="formName">
      <h1>Ingrese su nombre</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <button className="btn" type="submit">
          Enviar
        </button>
      </form>
      {mensaje && <p>{mensaje}</p>}

      <img
        src="https://es.web.img3.acsta.net/r_654_368/newsv7/16/02/16/10/16/364318.jpg"
        alt=""
      />
    </div>
  );
};

export default Formulario;
