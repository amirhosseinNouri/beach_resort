import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <>
    <Home></Home>
    <Rooms></Rooms>
    <SingleRoom></SingleRoom>
    <Error></Error>
    </>
  );
}

export default App;
