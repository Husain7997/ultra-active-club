import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Container } from 'react-bootstrap';
import Types from './Components/Types/Types';
import Aside from './Components/Aside/Aside';
import Cart from './Components/Cart/Cart';
import AandQ from './Components/Aside/A&Q/AandQ';

function App() {
  return (

    <div>
      <Header></Header>
      <Types></Types>
      <AandQ></AandQ>
    </div>


  )
};
export default App;
