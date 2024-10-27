// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ClientList from './components/ClientList';
import ClientForm from './components/ClientForm';
import './App.css';

function App() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  // Charger les clients depuis localStorage au démarrage
  useEffect(() => {
    const storedClients = localStorage.getItem('clients');
    if (storedClients) {
      setClients(JSON.parse(storedClients));
    }
  }, []);

  // Sauvegarder les clients dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const addClient = (client) => {
    setClients([...clients, { id: Date.now(), ...client }]);
  };

  const updateClient = (updatedClient) => {
    setClients(clients.map(client => client.id === updatedClient.id ? updatedClient : client));
    setEditingClient(null);
  };

  const deleteClient = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  const editClient = (client) => {
    setEditingClient(client);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <ClientForm addClient={addClient} editingClient={editingClient} updateClient={updateClient} />
        <ClientList clients={clients} deleteClient={deleteClient} editClient={editClient} />
      </div>
    </div>
  );
}

export default App;
