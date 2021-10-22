import TopBar from "./components/Topbar/TopBar";
import Login from "./pages/Authen/Login/Login";
import Register from "./pages/Authen/Register/Register";
import Content from "./pages/Content/Content";
import Home from "./pages/HomePage/Home";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/content">{user ? <Content /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
