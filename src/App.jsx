import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavShared from '../pages/NavShared';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Plantations from '../pages/Plantations';
import SinglePlant from '../pages/SinglePlant';

import Ressources from '../pages/Ressources';
import Error from '../pages/Error';

const App = () => {
  const [alert, setAlert] = useState({ msg: '', type: '', show: false });
  const showAlert = (msg = '', type = '', show = false) => {
    setAlert({
      msg,
      type,
      show,
    });
  };

  return (
    <Router>
      <h1>Autour des jardins de Chéreng</h1>
      <Routes>
        <Route path='/' element={<NavShared />}>
          <Route index element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/plantations' element={<Plantations />}></Route>
          <Route path='/plantations/:id' element={<SinglePlant />} />
          <Route
            path='/contact'
            element={<Contact alert={alert} showAlert={showAlert} />}
          ></Route>
          <Route
            path='/ressources'
            element={<Ressources alert={alert} showAlert={showAlert} />}
          ></Route>
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
