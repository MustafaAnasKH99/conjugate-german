import React, { useState, useEffect } from 'react';
import './App.css';
import Verb from './Verb'
import CommonVerbs from './CommonVerbs'
import InputVerb from './InputVerb'
import CollapseHowTo from './CollapseHowTo';
import SideBar from './slide'
import './slide.css'

import { Container, Row, Col } from "shards-react";
import ReactGA from 'react-ga';

const trackingId = "UA-168104349-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);


function App() {
  const [passed_verb, setVerb] = useState("tanzen");
  const [passed_tense, setTense] = useState("Präsens");

  return (
      <div id="App">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}>
            <CommonVerbs setVerb={setVerb} />
          </SideBar>
          <Container>
          <div id="page-wrap">
          <Row>

          <Col sm='12' lg='12'>
            <h1 className="app-title">Conjugate German 🇩🇪</h1>
          </Col>
          </Row>
            <Row>
              
              <Col sm='12' md='4' lg='3'></Col>
              <Col sm='12' md='4' lg='6'>
              <Row>
                <CollapseHowTo />
              </Row>

              <Row>
                <InputVerb passed_tense={passed_tense} setTense={setTense} passed_verb={passed_verb} setVerb={setVerb} />
              </Row>
              
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="main-content">
                  
                  { console.log('passed_verb') }
                  { console.log(passed_verb) }
                  {/* <Examples passed_verb={passed_verb} /> */}
                  <Verb passed_verb={passed_verb} passed_tense={passed_tense} />
                </div>
              </Col>
            </Row>
            
            <Col sm='12' md='4' lg='3'></Col>
          </div>
            </Container>
            <div className="sticky-footer">
                <a target="__blank" href="https://twitter.com/MustafaAnas99">© 2020 Mustafa Anas</a> 
            </div>
      </div>
  );
}

export default App;
