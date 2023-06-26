import { NavBar } from './NavBar';
import { BoxComp } from './BoxComp';
import './App.css';

import { BodyComp } from './BodyComp';
import { FooterComp } from './FooterComp';


function App() {
  return (
    <div className="App">
     <NavBar />
    <BoxComp/>
    
    <BodyComp/>
    <FooterComp/>
    </div>
  );
}

export default App;
