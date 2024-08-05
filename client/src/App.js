import { useSelector } from 'react-redux';
import './App.css';
import Notebook from './component/Notebook/Notebook';
import Signup from './component/Signup/Signup';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  const user = useSelector((state)=>state.auth.value)
  console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={user? <Navigate to="/home"/> : <Navigate to="/auth"/>}/>
          <Route path='/home' element={user? <Notebook/> : <Navigate to='.../auth'/>}/>
          <Route path='/auth' element={user? <Navigate to='/home'/> : <Signup/>}/>
        </Routes>
         {/* <Signup/>  */}
        {/* <Notebook/> */}
      </header>
    </div>
  );
}

export default App;
