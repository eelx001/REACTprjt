import'./index.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import Nav from './components/nav'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
function App() {
  return (
        <div className="App" >
        
        <Nav/>
        
        <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home"  Component={Page1}/>
        <Route path="/project"  Component={Page2}/>
        <Route path="/alt"  Component={Page3}/>
        </Routes>
        
    </div>
  );
}

export default App;
