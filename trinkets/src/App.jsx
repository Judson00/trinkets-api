import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import ItemsList from './components/ItemsList';
import Item from './components/Item';
import ItemForm from './components/ItemForm';
import UpdateForm from './components/UpdateForm';

const App = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3333/items')
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3333/items')
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Dustin's Trinkets</h1>
        <div className="nav-links">
          <NavLink exact to="/item-form">
            Add Item
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/item-list">Shop</NavLink>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/item-list"
        render={props => <ItemsList {...props} items={items} />}
      />
      <Route
        path="/item-list/:id"
        render={props => <Item {...props} items={items} />}
      />
      <Route path="/item-form" component={ItemForm} />
      <Route
        path="/update-form/:id"
        render={props => (
          <UpdateForm {...props} items={items} setItems={setItems} />
        )}
      />
    </div>
  );
}

export default App;