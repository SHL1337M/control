import React, { useState } from 'react';
import Autocomplete from './Autocomplete';
import axios from 'axios';

const InscriptionForm = () => {
  const [ville, setVille] = useState('');
  const [option, setOption] = useState('');

  const handleSubmit = () => {
    // Construisez l'objet de données à envoyer
    const dataToSend = {
      ville: ville,
      option: option,
    };

    // Envoyez une requête POST à votre API en utilisant Axios
    axios
      .post('URL_DE_VOTRE_API', dataToSend)
      .then((response) => {
        // Réponse réussie
        alert('Inscription soumise avec succès.');
      })
      .catch((error) => {
        // Gérez les erreurs ici
        alert('Erreur lors de la soumission de l\'inscription.');
        console.error('Erreur:', error);
      });
  };

  return (
    <>
      <div>
        <label>Ville:</label>
        <Autocomplete
          values={['Casa', 'Rabat', 'Kenitra', 'Marrakech', 'Meknes']}
          selectedValue={ville}
          onInputChange={(value) => setVille(value)}
        />
      </div>
      <div>
        <label>Option:</label>
        <Autocomplete
          values={['Dev Digital', 'Dev Mobile', 'Infra Digitale']}
          selectedValue={option}
          onInputChange={(value) => setOption(value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default InscriptionForm;
