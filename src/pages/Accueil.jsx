import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar } from '../elements/general';
import { titles, programme, mdpSection, acces, footer, hotel, reponse, dressCode, infoPratiques, photos } from '../elements/sections';

function Accueil() {
    const [showButton, setShowButton] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState('');
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [toggleClicked, setToggleClicked] = useState(false);
    const [mdpOk, setMdpOk] = useState(false);
    const [adminMdpOk, setAdminMdpOk] = useState(false);
    const [mdp, setMdp] = useState('');
    const [carTextClicked, setCarTextClicked] = useState(false);
    const [planeTextClicked, setPlaneTextClicked] = useState(false);
    const [trainTextClicked, setTrainTextClicked] = useState(false);
    const [lastClicked, setLastClicked] = useState('');
    const [passwordWrong, setPasswordWrong] = useState(false);

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
    function verifyMdp() {
        if (mdp === process.env.REACT_APP_MDP) {
            setMdpOk(true);
        }
        if (mdp === process.env.REACT_APP_ADMIN_MDP) {
            setAdminMdpOk(true);
        }
        else {
            setPasswordWrong(true);
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }

    //navbar
    function onToggleClick() {
        setToggleClicked(!toggleClicked);
    }

    //acces text on element click
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
    }, [carTextClicked, planeTextClicked, trainTextClicked]);


    return (
        <div>
            {mdpOk === false && adminMdpOk === false ?
                <div>
                    {mdpSection(verifyMdp, setMdp, passwordWrong)}
                </div>
                :
                mdpOk || adminMdpOk ?
                    <div>
                        <img className="background-image" src={require('../images/images/background-image.webp')}
                            style={dimensions.width < 800 ? { height: "100vh", width: "100vw" } : {}} />

                        {navbar(toggleClicked, dimensions.width, onToggleClick)}

                        {titles(timeRemaining, dimensions.width)}

                        {programme(dimensions.width, adminMdpOk)}

                        {acces(carTextClicked, setCarTextClicked, planeTextClicked, setPlaneTextClicked, trainTextClicked, setTrainTextClicked, lastClicked)}

                        {buttonGoTop(scrollToTop, showButton)}

                        {hotel()}

                        {reponse(adminMdpOk)}

                        {dressCode(dimensions.width)}

                        {infoPratiques()}

                        {photos()}

                        {footer()}
                    </div >
                    :
                    {}
            }
        </div >
    )
}


export default Accueil;