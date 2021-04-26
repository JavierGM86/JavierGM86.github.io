import { Route } from 'react-router-dom';

import React, { useState, useEffect } from 'react';


import { Form } from 'react-bootstrap';
import About from './About';
import Projects from './Projects';
import Links from './Links';
import './Main.css';

function Main() {

    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    };

    const [headerHeight, setHeaderHeight] = useState("0px")
    useEffect(() => {
        setHeaderHeight(document.querySelector("nav").clientHeight + "px");
    }, [])

    return (
        <main style={{ "marginTop": headerHeight }}>
            <Route exact path="/">
                <Form.Group id="textoIntroductorio">


                    <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
                    <h1>Welcome    
  <span
                            class="txt-rotate"
                            data-period="2000"
                            data-rotate='[ " to the portfolio", " of Javier García Martínez." ]'></span>
                    </h1>
                    <h2>Come take a &lt;look&gt; at my projects.</h2>


                </Form.Group>



            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/Projects">
                <Projects />
            </Route>
            <Route exact path="/Links">
                <Links />
            </Route>
            
        </main>
    )
} export default Main;