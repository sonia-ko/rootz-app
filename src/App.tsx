import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import Places from './pages/Places/Places';
import Apply from './pages/Apply/Apply';
import OurMission from './pages/OurMission/OurMission';
import PageNotFound from './pages/404/PageNotFound';
import Footer from './components/general/Footer/Footer';
import Header from './components/general/Header/Header';
import MobileMenu from './components/general/MobileMenu/MobileMenu';
import { useState } from 'react';

import './App.scss';

function App() {
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);
  return (
    <div className='App'>
      <Header
        menuMobileOpen={menuMobileOpen}
        onMenuClick={() => setMenuMobileOpen(!menuMobileOpen)}
      />
      {menuMobileOpen && (
        <MobileMenu handleClick={() => setMenuMobileOpen(false)} />
      )}
      {!menuMobileOpen && (
        <>
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/team' element={<Team />} />
              <Route path='/places' element={<Places />} />
              <Route path='/apply' element={<Apply />} />
              <Route path='/our-mission' element={<OurMission />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
