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
        <Route path="/page2"  Component={Page2}/>
        <Route path="/page3"  Component={Page3}/>
        <Route path="/dashboard"  Component={""}/>
        </Routes>
        
    </div>
  );
}

export default App;
