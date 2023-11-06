import { React, useState, useEffect } from 'react';
import { scrollToTop, updateCountdown } from '../utils/layout';
import { buttonGoTop, navbar, VisibleElement, LoadingImage } from '../elements/general';
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
    const [programmeVisible, setProgrammeVisible] = useState(false);
    const [accesVisible, setAccesVisible] = useState(false);
    const [hotelVisible, setHotelVisible] = useState(false);
    const [reponseVisible, setReponseVisible] = useState(false);
    const [dressCodeVisible, setDressCodeVisible] = useState(false);
    const [infoPratiquesVisible, setInfoPratiquesVisible] = useState(false);
    const [photosVisible, setPhotosVisible] = useState(false);

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
            timeout = setTimeout(handleResize, 1000);
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
            // All on admin
            setAdminMdpOk(true);
            // setMdpOk(true);
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
    }, [carTextClicked, planeTextClicked, trainTextClicked, lastClicked])


    return (
        <div>
            {mdpOk === false && adminMdpOk === false ?
                <div>
                    {mdpSection(verifyMdp, setMdp, passwordWrong)}
                </div>
                :
                mdpOk || adminMdpOk ?
                    <div>
                        {LoadingImage('images/background-image', "background-image",
                            { height: dimensions.width < 800 ? "100vh" : "", width: dimensions.width < 800 ? "100vw" : "" },
                            null, "background-image")}

                        {navbar(toggleClicked, dimensions.width, onToggleClick)}

                        {titles(timeRemaining, dimensions.width)}

                        {VisibleElement(programmeVisible, setProgrammeVisible, programme(dimensions.width, adminMdpOk))}

                        {VisibleElement(accesVisible, setAccesVisible, acces(carTextClicked, setCarTextClicked, planeTextClicked, setPlaneTextClicked, trainTextClicked, setTrainTextClicked, lastClicked))}

                        {VisibleElement(hotelVisible, setHotelVisible, hotel(dimensions.width))}

                        {VisibleElement(reponseVisible, setReponseVisible, reponse(adminMdpOk))}

                        {VisibleElement(dressCodeVisible, setDressCodeVisible, dressCode(dimensions.width))}

                        {VisibleElement(infoPratiquesVisible, setInfoPratiquesVisible, infoPratiques(dimensions.width))}

                        {VisibleElement(photosVisible, setPhotosVisible, photos())}

                        {footer()}

                        {buttonGoTop(scrollToTop, showButton, dimensions.width)}
                    </div >
                    :
                    {}
            }
        </div >
    )
}


export default Accueil;