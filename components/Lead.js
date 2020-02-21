import { useEffect } from 'react';
import SeeMore from '../components/SeeMore';

const typingAnimation = (el, toRotate, period) => {
    let loopNum = 0;
    period = parseInt(period, 10) || 2000;
    let txt = '';
    tick(el, toRotate, period, loopNum, txt, isDeleting);
    let isDeleting = false;
}

const tick = (el, toRotate, period, loopNum, txt, isDeleting, props) => {
    var i = loopNum;
    var fullTxt = toRotate[i];
    var keepTyping = true;
 
    if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
    } else if (loopNum < toRotate.length) {
        txt = fullTxt.substring(0, txt.length + 1);
    }

    el.innerHTML = '<span class="wrap">'+txt+'</span>';
    
    var delta = 200 - Math.random() * 100;
    if (isDeleting) { delta /= 2; }

    if (!isDeleting && txt === fullTxt && loopNum + 1 < toRotate.length) {
        delta = period;
        isDeleting = true;
    } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
    }
    else if(!isDeleting && txt === fullTxt) {
        keepTyping = (loopNum < toRotate.length - 1)    
    }
    if (keepTyping) {  
        setTimeout(function() {              
            tick(el, toRotate, period, loopNum, txt, isDeleting);
        }, delta);     
    }
    else{
        console.log("Done Typing, no more loops")
    }
}

const Lead = (props) => {
    useEffect(() => {
        let element = document.getElementById('typewrite')
        let toRotate = JSON.parse(element.getAttribute('data-type'))
        let period = element.getAttribute('data-period')
        typingAnimation(element, toRotate, period)
        console.log("useEffect() typingAnimation Started")
        return 
    }, [])

    return (
        <div className="lead">
            <div id="lead-content">
                <h1>ADRIAN PARDO</h1>
                <h2 id="typewrite" className="typewrite" data-period="2000" data-type='[ "FullStack Developer", "Software Engineer", "FullStack Developer | Software Engineer" ]'>
                    <span className="wrap"></span>
                </h2>
                <a href="#projects" className="lead-download-btn">
                    Check out my work
                    <i className="fa fa-arrow-right" id="lead-arrow"></i>
                </a>
            </div>
            {/*  End #lead-content */}  
            <SeeMore href="#about" />
            <div id="lead-overlay"></div>
            <style jsx>{`
                .lead {
                    background: url("/assets/images/lead-bg.jpg");
                    background-size: cover;
                }
            `}</style>
        </div>
    )
}

export default Lead;