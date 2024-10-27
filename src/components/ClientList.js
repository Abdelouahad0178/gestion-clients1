// src/components/ClientList.js
import React, { useState } from 'react';
import './ClientList.css';

function ClientList({ clients, deleteClient, editClient }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Fonction pour gérer les changements dans le champ de recherche
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  // Filtrer les clients en fonction du terme de recherche
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="client-list">
      <h2>Liste des Clients</h2>
      
      {/* Zone de recherche */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredClients.length === 0 ? (
        <p>Aucun client correspondant à la recherche.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button onClick={() => editClient(client)}>Éditer</button>
                  <button onClick={() => deleteClient(client.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClientList;
