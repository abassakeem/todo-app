import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './components/Homepage';
import To from './components/To-do';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App bg-dark">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/to-do" element={<To/>}></Route>
        </Routes>
      </Router>
     
    
     
    </div>
  );
}

export default App;
