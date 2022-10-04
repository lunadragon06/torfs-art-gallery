import './sass/style.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact"; 
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
          <Route path="/contact">
						<Contact />
					</Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
