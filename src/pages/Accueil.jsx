import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar, titles } from '../elements/general';
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


            <div id="programme" className="basic-page">
                <div className='basic-padding-updown' style={{ marginTop: '35%', backgroundColor: "#7f8aa3" }}>
                    <h1 className='dactyl'>Programme</h1>
                    <img src={require('../images/images/branche.png')} className='branche' />
                </div>

                <div className='basic-margin-top white-page'>
                    <div>
                        <h2 style={{ color: colorGreen }}>RENDEZ-VOUS LE</h2>
                        <h1 style={{ color: colorOrange }} className='dactyl'>Samedi</h1>
                        <h2>8 JUIN 2024</h2>
                        <p style={{ color: colorLightOrange }} >Les horaires peuvent être soumis à modifications</p>
                    </div>

                    <div className='basic-margin-top'>
                        <div className='flex-50-50'>
                            <div className='flexed-50-50'>
                                <h2 style={{ color: colorGreen }} className="dactyl">15h30</h2>
                                <h3>Pot d'accueil</h3>
                            </div>
                            <div className='flexed-50-50'>
                                <img className="branche" src={require('../images/images/accueil.png')} />
                            </div>
                        </div>


                    </div>

                </div>


                {buttonGoTop(scrollToTop, showButton)}

            </div>
        </div>
    );
}

export default Accueil;