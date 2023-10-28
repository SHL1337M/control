import React, { useState } from 'react';


function Produit() {
  const [produits, setProduits] = useState([]); 
  const [nouveauProduit, setNouveauProduit] = useState({
    nom: '',
    code: '',
    
  });

  const ajouterProduit = () => {
    
    if (nouveauProduit.nom && nouveauProduit.code) {
      setProduits([...produits, nouveauProduit]);
      setNouveauProduit({
        nom: '',
        code: '',
        
      });
    } else {
      alert('You didn t get all the informa');
    }
  };

  return (
    <div className="Produit">
      
      <>
        
        <input
          type="text"
          placeholder="Nom du produit"
          value={nouveauProduit.nom}
          onChange={(e) => setNouveauProduit({ ...nouveauProduit, nom: e.target.value })}
        />
        <input
          type="text"
          placeholder="Code du produit"
          value={nouveauProduit.code}
          onChange={(e) => setNouveauProduit({ ...nouveauProduit, code: e.target.value })}
        />
        <button onClick={ajouterProduit}>Ajouter</button>
      </>
      <>
        <h2>Liste des produits</h2>
        <ul>
          {produits.map((produit, index) => (
            <li key={index}>
              <strong>Nom:</strong> {produit.nom}, <strong>Code:</strong> {produit.code}
              
            </li>
          ))}
        </ul>
      </>
    </div>
  );
}

export default Produit;
