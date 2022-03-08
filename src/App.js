import React from 'react';
import Flipcoin from './components/Flipcoin';
import Pxtoemconv from './components/Pxtoemconv';
import Dictionary from './components/Dictionary';
import AspectRationCalc from './components/AspectRationCalc';
import RGb2Hex from './components/RGb2Hex';
import TipCalc from './components/TipCalc';
import GradientGen from './components/GradientGen';
import QuoteGen from './components/QuoteGen';
import JokeGen from './components/JokeGen';
import AgeCalc from './components/AgeCalc';
import PwdGen from './components/PwdGen';
import BMICalc from './components/BMICalc';
import RPS from './components/RPS';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CurCnvtr from './components/CurCnvtr';



function App() {
  return(
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/"  exact component={Home} />
      <Route path="/bmicalc"   component={BMICalc} />
      <Route path="/agecalc"   component={AgeCalc} />
      <Route path="/pwdgen"   component={PwdGen} />
      <Route path="/jokegen"   component={JokeGen} />
      <Route path="/quotegen"   component={QuoteGen} />
      <Route path="/gradientgen"   component={GradientGen} />
      <Route path="/rgbgex"   component={RGb2Hex} />
      <Route path="/aspectratiocalc"   component={AspectRationCalc} />
      <Route path="/dictionary"   component={Dictionary} />
      <Route path="/pxtoemconv"   component={Pxtoemconv} />
      <Route path="/rps"   component={RPS} />
      <Route path="/flipcoin"   component={Flipcoin} />
      <Route path="/tipcalc"   component={TipCalc} />
      <Route path="/currencyconv"   component={CurCnvtr} />
     </Switch>
     
    </Router>
    
    </>

  );
}

export default App;
