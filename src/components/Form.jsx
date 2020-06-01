import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ({ search, setSearch, setConsult }) => {
  const [error, setError] = useState(false);

  // Extraer ciudad y pais
  const { city, country } = search;

  // Función que agrega los elementos en el state
  const handleChange = (event) => {
    // Actualizar state
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  // Cuando el usuario da submit al form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar
    if (city.trim() === '' || country.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    //Enviar a componente principal
    setConsult(true);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {error ? <Error message="All fields are required" /> : null}
      <div className="input-field col s12">
        <input type="text" name="city" id="city" value={city} onChange={handleChange} />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select name="country" id="country" value={country} onChange={handleChange}>
          <option value="">-- Select a country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>

      <div className="input-field col s12">
        <button type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12">
          Check weather
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setConsult: PropTypes.func.isRequired,
};

export default Form;
