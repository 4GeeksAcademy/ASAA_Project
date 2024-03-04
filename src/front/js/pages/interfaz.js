import React, { useState } from "react";

export const Interfaz = () => {
  const [mesasEstado, setMesasEstado] = useState({
    "Mesa 1": "libre",
    "Mesa 2": "libre",
    "Mesa 3": "libre",
    "Mesa 4": "libre"
  });

  // Función para manejar el cambio de estado de la mesa
  const handleChange = (event, mesa) => {
    const newState = { ...mesasEstado, [mesa]: event.target.value };
    setMesasEstado(newState);
  };

  // Función para generar dinámicamente los dropdowns de estado para cada mesa
  const renderDropdowns = () => {
    const mesas = ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4"];
    return mesas.map((mesa, index) => (
      <select
        key={index}
        className={`form-select my-1 ${mesasEstado[mesa] === 'ocupada' ? 'bg-danger' : 'bg-success'}`}
        aria-label={`Estado de ${mesa}`}
        value={mesasEstado[mesa]}
        onChange={(event) => handleChange(event, mesa)}
      >
        <option value="libre">Libre</option>
        <option value="ocupada">Ocupada</option>
      </select>
    ));
  };

  return (
    <div className="container border text-white">
      <div className="row">
        <div className="col-md-6">
          <h4 className="ms-4">Mesa</h4>
          <ul>
            <li className="my-3">Mesa 1</li>
            <li className="my-3">Mesa 2</li>
            <li className="my-3">Mesa 3</li>
            <li className="my-3">Mesa 4</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h4>Estado</h4>
          {renderDropdowns()}
        </div>
      </div>
    </div>
  );
};

export default Interfaz;
