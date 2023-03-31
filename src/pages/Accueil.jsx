import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar } from '../elements/general';
import { titles, programme, mdpSection, acces, footer } from '../elements/sections';
import { colorOrange, colorGreen } from '../config';

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
    const [carTextClicked, setCarTextClicked] = useState(false);
    const [planeTextClicked, setPlaneTextClicked] = useState(false);
    const [trainTextClicked, setTrainTextClicked] = useState(false);
    const [lastClicked, setLastClicked] = useState('');

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

    // password
    function onToggleClick() {
        setToggleClicked(!toggleClicked);
    }
    function verifyMdp() {
        if (mdp === process.env.REACT_APP_MDP) {
            setMdpOk(true);
        }
    }

    useEffect(() => {
        if (carTextClicked && lastClicked !== 'car') {
            setLastClicked('car');
            setPlaneTextClicked(false);
            setTrainTextClicked(false);
        } else if (planeTextClicked && lastClicked !== 'plane') {
            setLastClicked('plane');
            setCarTextClicked(false);
            setTrainTextClicked(false);
        } else if (trainTextClicked && lastClicked !== 'train') {
            setLastClicked('train');
            setCarTextClicked(false);
            setPlaneTextClicked(false);
        }
        console.log(lastClicked, carTextClicked, planeTextClicked, trainTextClicked);
    }, [carTextClicked, planeTextClicked, trainTextClicked]);


    return (
        <div>
            {mdpOk === false ?
                <div>
                    {mdpSection(verifyMdp, setMdp)}
                </div>
                :
                <div>
                    <img className="background-image" src={require('../images/images/background-image.png')}
                        style={dimensions.width < 800 ? { height: "100vh", width: "100vw" } : {}} />

                    {navbar(toggleClicked, dimensions.width, onToggleClick)}

                    {titles(timeRemaining, dimensions.width)}

                    {programme(dimensions.width)}

                    {acces(carTextClicked, setCarTextClicked, planeTextClicked, setPlaneTextClicked, trainTextClicked, setTrainTextClicked, lastClicked)}

                    {buttonGoTop(scrollToTop, showButton)}

                    <div id="hotel" className="basic-page section-header smallest-padding-bottom" style={{ marginTop: "0" }}>
                        <div className='basic-padding-updown'>
                            <h1 className='dactyl'>Hôtel</h1>
                            <img src={require('../images/images/branche.png')} className='branche' />
                        </div>

                        <div className='white-page'>
                            <div className='basic-padding'>
                                <p>Il y a environ 250 chambres d'hôtels, gîtes et chambres d'hôtes dans un rayon de 10 min en voiture du Château</p>

                                <img src={require('../images/images/hotels.png')} className='full-width' />

                                <div className='flex-50-50 basic-margin'>
                                    <a href="https://vu.fr/aBcR" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                                        <h2>Booking.com </h2>
                                    </a>

                                    <a href="https://vu.fr/mJhx" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                                        <h2>Hotels.com </h2>
                                    </a>
                                </div>

                                <img src={require('../images/images/airbnb.png')} className='full-width' />

                                <div className='flex-50-50 basic-margin'>
                                    <a href="https://vu.fr/ULAE" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                                        <h2>Airbnb.com </h2>
                                    </a>
                                </div>

                                <img src={require('../images/images/green-heart.png')} className='heart-separator basic-margin-bottom' />

                                <div className='flex-50-50 basic-margin'>
                                    <img src={require('../images/images/tente.png')} className='flexed-50-50' />
                                    <p className='flexed-50-50'>
                                        Le Château du Bourg propose un espace pour les tentes et un parking dédié pour les camping-cars en cas de besoin. N'hésitez pas à nous faire part de votre désir d'en profiter, le cas échéant.
                                    </p>
                                </div>

                                <img src={require('../images/images/green-heart.png')} className='heart-separator basic-margin-bottom' />

                                <h2 style={{ color: colorGreen }} className='dactyl'>
                                    Et si vous en profitiez pour découvrir Roanne ?
                                </h2>


                                <img src={require('../images/images/roanne.png')} style={{ width: "50%" }} className='basic-margin-bottom' />

                                <p>
                                    Visiter Roanne et ses halles gourmandes, flâner sur les bords de Loire, s'extasier dans les villages de caractère de Saint-Jean-Saint-Maurice-sur Loire et de Saint-Haon-le-Châtel, se prendre pour des seigneurs au Château de l'Aubépin à Fourneaux et profiter des expositions gratuites au Château de Beaulieu à Riorges, voici de quoi passer de bons moments pour ceux qui souhaitent rester sur un week-end prolongé !
                                </p>

                                <div className='flex-50-50 basic-margin'>
                                    <a href="www.roannais-tourisme.com" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                                        <h2>roannais-tourisme.com </h2>
                                    </a>

                                    <a href="www.instagram.com/villederoanne" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                                        <h2>Instagram</h2>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {footer()}
                    </div>

                </div >
            }
        </div>
    )
}


export default Accueil;