import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar } from '../elements/general';
import { titles, programme } from '../elements/sections';
import { colorGreen, colorOrange } from '../config.js';

function Accueil() {
    const [showButton, setShowButton] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState('');
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [toggleClicked, setToggleClicked] = useState(false);
    const [mdpOk, setMdpOk] = useState(false);
    const [mdp, setMdp] = useState('');

    // resize
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        var timeout = false;
        window.addEventListener('resize', function () {
            clearTimeout(timeout);;
            timeout = setTimeout(handleResize, 200);
        });
    })

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

    function onNavbarClick() {
        return () => { }
    }

    function onToggleClick(setToggleClicked) {
        return () => setToggleClicked(!toggleClicked);
    }

    function verifyMdp() {
        if (mdp === process.env.REACT_APP_MDP) {
            setMdpOk(true);
        }
    }

    return (
        <div>
            {mdpOk === false ?
                <div id="mdp">
                    <div className="basic-page section-header smallest-padding-bottom" style={{ margin: "auto", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ textAlign: "center", alignSelf: "center" }}>
                            <img src={require('../images/images/branche.png')} className='branche' />

                            <h1> Mot de passe </h1>
                            <input type="password" id="mdp" name="mdp" onChange={(e) => setMdp(e.target.value)} className="form-control" style={{ width: "200px", margin: "auto" }} />
                            <button onClick={verifyMdp} className="btn btn-light" style={{ marginTop: "10px" }}>
                                Valider
                            </button>
                            <br />

                            <img src={require('../images/images/branche.png')} className='branche inverted' />
                        </div>
                    </div>
                </div>
                :
                <div>
                    <img className="background-image" src={require('../images/images/background-image.png')} />

                    {navbar(toggleClicked, dimensions.width, onNavbarClick, onToggleClick(setToggleClicked))}

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
            }
        </div >
    );
}

export default Accueil;