import logo from './logo.svg';
import  {Navbar, NavbarBrand}  from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
/* sita reikia pakeisti


  constructor(props){
    super(props);

    this.state={
      dishes:DISHES
    };
  }


*/
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />   
    </div>
  );
}
/*
<Menu dishes={this.state.dishes} /> (line 28) irgi nezinau ar yra gerai
*/

export default App;
