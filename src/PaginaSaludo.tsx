import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Saludo = () => {
  const { nombre } = useParams();
  const [mensaje, setMensaje] = useState("");
  const [encontrado, setEncontrado] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const obtenerSaludo = async () => {
      try {
        const res = await fetch(`http://localhost:3500/${nombre}`);
        const data = await res.json();

        if (!res.ok || !data.encontrado) {
          throw new Error("Nombre no válido");
        }

        setMensaje(data.msg);
        setEncontrado(data.encontrado);
        setError(false);
      } catch (err) {
        setMensaje("Error al obtener el saludo");
        setEncontrado(null);
        setError(true);
      }
    };

    if (nombre) {
      obtenerSaludo();
    }
  }, [nombre]);

  return (
    <div className="name">
      {error ? (
        <>
          <h2>{mensaje}</h2>
          <img
            src="https://external-preview.redd.it/_f6S5lSMhShC4h5WH16TKEgXHIi16bBaEa4FJ56EFAo.jpg?auto=webp&s=72543c48b3e53b8dd7046d13096122057a93b513"
            alt="Error"
            style={{ width: "350px" }}
          />
        </>
      ) : (
        <>
          <p>Holis {encontrado}</p>
          <img
            src="https://goweho.com/wp-content/uploads/2018/05/Deadpool-2.png"
            alt="Éxito"
            style={{ width: "350px" }}
          />
        </>
      )}
    </div>
  );
};

export default Saludo;
