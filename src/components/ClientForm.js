// src/components/ClientForm.js
import React, { useState, useEffect } from 'react';
import './ClientForm.css';

function ClientForm({ addClient, editingClient, updateClient }) {
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    if (editingClient) {
      setClient(editingClient);
    } else {
      setClient({ name: '', email: '', phone: '' });
    }
  }, [editingClient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!client.name || !client.email || !client.phone) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    if (editingClient) {
      updateClient(client);
    } else {
      addClient(client);
    }
    setClient({ name: '', email: '', phone: '' });
  };

  return (
    <div className="client-form">
      <h2>{editingClient ? 'Modifier le Client' : 'Ajouter un Client'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom:</label>
          <input
            type="text"
            name="name"
            value={client.name}
            onChange={handleChange}
            placeholder="Entrez le nom"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={client.email}
            onChange={handleChange}
            placeholder="Entrez l'email"
          />
        </div>
        <div className="form-group">
          <label>Téléphone:</label>
          <input
            type="text"
            name="phone"
            value={client.phone}
            onChange={handleChange}
            placeholder="Entrez le numéro de téléphone"
          />
        </div>
        <button type="submit">{editingClient ? 'Mettre à Jour' : 'Ajouter'}</button>
      </form>
    </div>
  );
}

export default ClientForm;
