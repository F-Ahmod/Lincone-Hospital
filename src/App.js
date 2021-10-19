
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';
import HedBanner from './Components/HedBanner/HedBanner';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import FindDoctor from './Components/FindDoctor/FindDoctor';
import VisitorPolicy from './Components/VisitorPolicy/VisitorPolicy';
import Login from './Components/Login/Login';

import SingUp from './Components/SingUp/Singup';
import AboutUs from './Components/AboutUs/AboutUs';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import SeeDetails from './Components/SeeDetails/SeeDetails';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import NotFound from './Components/NotFound/NotFound';
import Covid from './Components/Covid/Covid';



function App() {
  return (
    
<BrowserRouter>
    <Header></Header>
    <HedBanner></HedBanner>
    <Switch>
      <Route exact path="/">
      <Service></Service>
      <FindDoctor></FindDoctor>
      
        <Home></Home>

      </Route>
      <Route exact path="/home">
      <Service></Service>
      <FindDoctor></FindDoctor>
      <Covid></Covid>
      <AboutUs></AboutUs>
      
        <Home></Home>

      </Route>
      <Route  path="/service">
        <Service></Service>
      </Route>
      <Route path="/seedetails/:serviceid">
        <SeeDetails></SeeDetails>
      </Route>
      <Route path="/doctordetails/:doctorid">
        <DoctorDetails></DoctorDetails>
      </Route>

      <Route  path="/covid">
      <Covid></Covid>
      </Route>
      <Route  path="/finddoctor">
       <FindDoctor></FindDoctor>
      </Route>

      <PrivetRoute  path="/visitorPolicy">
       <VisitorPolicy></VisitorPolicy>
      </PrivetRoute>
      <Route exact path="/aboutus">
      <AboutUs></AboutUs>
      </Route>

      <Route exact path="/login">
       <Login></Login>
      </Route>
      <Route  path="/singup">
       <SingUp></SingUp>
      </Route>
      <Route path="*">
      <NotFound></NotFound>
      </Route>

    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    
      
   
  );
}

export default App;
