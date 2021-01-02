import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Main from "./containers/Main";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/main" component={Main} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
