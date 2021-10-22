import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from './components/Create';
import Products from './components/Products';
import Detail from './components/Detail';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul className="color-ul">
            <li>
              <Link to="/create">Crear Producto</Link>
            </li>
            <li>
              <Link to="/products">Lista de Productos</Link>
            </li>
          </ul>
        </nav>
    <Switch>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:id">
          <Detail />
          </Route>
          <Route exact path="/update-product/:id">
            <UpdateProduct/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
