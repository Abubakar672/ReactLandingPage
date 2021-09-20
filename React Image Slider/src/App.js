import React from 'react';
// import { Dropdown } from 'react-bootstrap';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';
import Dropdown from './components/Dropdown';
import {useState} from 'react';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import {FooterContainer} from './container/footer';
import Footer from './components/footer';
function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  
return (
<>
<GlobalStyle/>  
<Navbar toggle={toggle}/>
<Dropdown isOpen={isOpen} toggle={toggle}/>
<Hero slides={SliderData}/>
<InfoSection {...InfoData}/>
<FooterContainer/>
</>
  );
}

export default App;