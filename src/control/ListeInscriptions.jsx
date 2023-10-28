import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Effectuer une requête GET à votre API pour obtenir la liste d'inscriptions
    axios.get('URL_DE_VOTRE_API')
      .then((response) => {
        // Mettez à jour l'état 'inscriptions' avec les données de la réponse
        setInscriptions(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des inscriptions:', error);
      });
  }, []); // Le tableau vide [] signifie que cela ne s'exécute qu'une fois après le montage initial

  const filteredInscriptions = inscriptions.filter((inscription) =>
    inscription.ville.includes(searchTerm)
  );

  return (
    <>
      <input
        type="text"
        placeholder="Rechercher par ville"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredInscriptions.map((inscription) => (
          <li key={inscription.id}>
            {inscription.ville} - {inscription.option}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListeInscriptions;
