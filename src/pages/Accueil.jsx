import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar, div5050 } from '../elements/general';
import { titles, programme } from '../elements/sections';
import { colorGreen, colorOrange, colorLightOrange } from '../config.js';

function Accueil() {
    const [showButton, setShowButton] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState('');

    // scroll to top
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);


    // countdown
    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setTimeRemaining(updateCountdown());
        }, 1000);
        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div>
            <img className="background-image" src={require('../images/images/background-image.png')} />

            {navbar()}

            {titles(timeRemaining)}

            {programme()}

            <div id="acces" className="basic-page section-header smallest-padding-bottom" style={{ marginTop: "0" }}>
                <div className='basic-padding-updown'>
                    <h1 className='dactyl'>Accès</h1>
                    <img src={require('../images/images/branche.png')} className='branche' />
                </div>

                <div className='white-page'>
                    <div className='basic-padding-top'>
                        <h2 style={{ color: colorGreen }}>RENDEZ-VOUS AU</h2>
                        <h1 style={{ color: colorOrange }} className='dactyl'>Château du Bourg</h1>
                        <h3>1552 chemin du Bourg</h3>
                        <h3>42120 Perreux</h3>
                    </div>



                </div>

            </div>


            {buttonGoTop(scrollToTop, showButton)}
        </div>
    );
}

export default Accueil;