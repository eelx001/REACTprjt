import'./index.css';
import {Route, Routes, Navigate} from 'react-router-dom';
import Nav from './components/nav'
import Home from './components/page1'
import Projects from './components/page2'
import Comments from './components/page3'
function App() {
  return (
        <div className="App" >
        
        <Nav/>
        
        <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home"  Component={Home}/>
        <Route path="/project"  Component={Projects}/>
        <Route path="/comments"  Component={Comments}/>
        </Routes>
        
    </div>
  );
}

export default App;
