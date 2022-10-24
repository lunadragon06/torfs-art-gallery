// import { AuthProvider } from "./context/authContext";
import './sass/style.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact"; 
import Login from "./components/pages/Login"; 
import Dashboard from "./components/pages/admin/subpages/Dashboard"; 
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import PaintingDetail from "./components/gallery/PaintingDetail"; 
import PaintingList from "./components/gallery/PaintingList";

function App() {  
  return (
    /* <AuthProvider> */
    <Router>
      <Nav />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
						<Home />
					</Route>
					<Route path="/gallery">
						<PaintingList />
					</Route>
          <Route path="/painting/:id">
	          <PaintingDetail />
          </Route>
          <Route path="/about">
						<About />
					</Route>
          <Route path="/contact">
						<Contact />
					</Route>
          <Route path="/login">
						<Login />
					</Route>
          <Route path="/dashboard">
						<Dashboard />
					</Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    /* </AuthProvider> */
  );
}

export default App;
