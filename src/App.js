
import { BrowserRouter ,Switch,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';
import HedBanner from './Components/HedBanner/HedBanner';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import FindDoctor from './Components/FindDoctor/FindDoctor';
import VisitorPolicy from './Components/VisitorPolicy/VisitorPolicy';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <HedBanner></HedBanner>
    <Switch>
      <Route exact path="/">
      <Service></Service>
        <Home></Home>

      </Route>
      <Route exact path="/home">
      <Service></Service>
        <Home></Home>

      </Route>
      <Route  path="/service">
        <Service></Service>

      </Route>
      <Route  path="/finddoctor">
       <FindDoctor></FindDoctor>

      </Route>
      <Route  path="/visitorPolicy">
       <VisitorPolicy></VisitorPolicy>

      </Route>

    </Switch>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
