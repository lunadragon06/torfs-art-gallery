import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { AuthProvider } from "./context/AuthContext";
import './sass/style.scss';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import Home from "./components/pages/Home"; 
import About from "./components/pages/About"; 
import Contact from "./components/pages/Contact"; 
import Login from "./components/pages/admin/Login"; 
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import PaintingDetail from "./components/gallery/PaintingDetail"; 
import PaintingList from "./components/gallery/PaintingList";
import Dashboard from './components/pages/admin/Dashboard';
import Add from "./components/pages/admin/subpages/Add";
import Enquiries from "./components/pages/admin/subpages/Enquiries";
import Inbox from "./components/pages/admin/subpages/Inbox";

function App() {  
  return (
    <AuthProvider>
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
          {/* ADMIN MENU - will be visible when logged in */}
          <Route path="/dashboard">
						<Dashboard />
					</Route>
          <Route path="/inbox">
						<Inbox />
					</Route>
          <Route path="/enquiries">
						<Enquiries />
					</Route>
          <Route path="/add">
						<Add />
					</Route>
        </Switch>
      </div>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
