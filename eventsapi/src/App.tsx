import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventList } from './components/EventList';
import { Header } from './components/Header';


function App() {

  return (
    <div className="App">
      <EventList />
    </div>
  );
  }
  
export default App;