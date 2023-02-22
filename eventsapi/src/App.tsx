import React, { Children } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EventList } from './components/EventList';
import { Header } from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import EventContextProvider from './context/EventContextProvider';
import { BucketListRoute } from "./components/BucketListRoute";


function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <EventContextProvider>
            <Routes>
              <Route path="/eventlist" element={<EventList />} />
              <Route path="/bucketlist" element={<BucketListRoute />} />
            </Routes>
          </EventContextProvider>
        </div>
      </BrowserRouter>
    );
  }
  
export default App;