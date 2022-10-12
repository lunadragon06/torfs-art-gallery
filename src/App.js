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
import Dashboard from "./components/pages/admin/Dashboard"; 
import Add from "./components/pages/admin/subpages/Add";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
//import PaintingDetail from "./components/gallery/PaintingDetail"; 
//import PaintingList from "./components/gallery/PaintingList";

/* 
<Route path="/gallery">
	<PaintingList />
</Route>
<Route path="/detail/:id">
	<PaintingDetail />
</Route>
*/

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
          <Route path="/login">
						<Login />
					</Route>
          <Route path="/dashboard">
						<Dashboard />
					</Route>
          <Route path="/add">
						<Add />
					</Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
