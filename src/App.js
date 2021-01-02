import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/dist/button';
import Home from "./Home";
import Navigationbar from './Navigationbar';
import Footer from "./Footer";
import MenShirt from "./MenShirt";
import MenPant from "./MenPant";
import MenTshirt from "./MenTshirt";
import MenShoes from "./MenShoes";
import WomenSaree from "./WomenSaree";
import WomenTop from "./WomenTop";
import WomenPant from "./WomenPant";
import WomenFootwear from "./WomenFootwear";
import KidShirt from "./KidShirt";
import KidTshirt from "./KidTshirt";
import KidFootwear from "./KidFootwear";
import KidPant from "./KidPant"
function App() {
  return (
    <>
  
     <Navigationbar/>
   
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route exact path='/menshirt' component={MenShirt}/>
        <Route exact path='/menpant' component={MenPant}/>
        <Route exact path='/mentshirt' component={MenTshirt}/>
        <Route exact path='/menshoes' component={MenShoes}/>
        <Route exact path='/womensaree' component={WomenSaree}/>
        <Route exact path='/womentop' component={WomenTop}/>
        <Route exact path='/womenpant' component={WomenPant}/>
        <Route exact path='/womenfootwear' component={WomenFootwear}/>
        <Route exact path='/kidshirt' component={KidShirt}/>
        <Route exact path='/kidtshirt' component={KidTshirt}/>
        <Route exact path='/kidfootwear' component={KidFootwear}/>
        <Route exact path='/kidpant' component={KidPant}/>

        
        <Redirect to='/'/>
      </Switch>

      <Footer/>

    </>
  );
}

export default App;
