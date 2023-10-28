import React, { useEffect, useState } from 'react';

function StagiaireApp() {
  const [stagiaires, setStagiaires] = useState([]);
  const [filiere, setFiliere] = useState('');
  const [conter, setConter] = useState(0);
  const [erreur, setErreur] = useState('');

  const ajouterStagiaire = () => {
    if (stagiaires.some((stagiaire) => stagiaire.filiere === filiere)) {
      setErreur('La filière rah kayna');
    } else {
      setStagiaires([...stagiaires, { filiere }]);
      setFiliere('');
      setConter(conter + 1);
      setErreur('');
    }
  };

  return (
    <div>
      <div>Vous avez Ajouté {conter} filière(s)</div>
      {erreur && <div style={{ color: 'red' }}>{erreur}</div>}
      <input
        type="text"
        placeholder="Filière"
        value={filiere}
        onChange={(e) => setFiliere(e.target.value)}
      />
      <button onClick={ajouterStagiaire}>Ajouter</button>
      <select>
        {stagiaires.map((stagiaire, index) => (
          <option key={index} value={stagiaire}>
            {stagiaire.filiere}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StagiaireApp;
