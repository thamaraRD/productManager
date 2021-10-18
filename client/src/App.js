import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
     <Switch>
          <Route exact path="/create">
            <Create />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
