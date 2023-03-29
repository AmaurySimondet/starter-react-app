import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar } from '../elements/general';
import { titles, programme, mdpSection, acces } from '../elements/sections';

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

    return (
        <div>
            {mdpOk === false ?
                <div>
                    {mdpSection(verifyMdp, mdp, setMdp)}
                </div>
                :
                <div>
                    <img className="background-image" src={require('../images/images/background-image.png')}
                        style={dimensions.width < 800 ? { height: "100vh", width: "100vw" } : {}} />

                    {navbar(toggleClicked, dimensions.width, onToggleClick)}

                    {titles(timeRemaining, dimensions.width)}

                    {programme(dimensions.width)}

                    {acces(carTextClicked, setCarTextClicked, planeTextClicked, setPlaneTextClicked, trainTextClicked, setTrainTextClicked)}

                    {buttonGoTop(scrollToTop, showButton)}
                </div>
            }
        </div >
    );
}

export default Accueil;