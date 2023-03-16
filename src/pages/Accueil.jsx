import { React, useState, useEffect } from 'react';
import { scrollToTop } from '../utils/layout';
import { buttonGoTop } from '../elements/general';

function Accueil() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);


    return (
        <div>
            <img className="background-image" src={require('../images/background-image.png')} />

            <nav className="navbar navbar-expand navbar-light inscription-navbar">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/inscription">
                    <img className="logo-navbar" alt="logo" src={require('../images/icons/logo.png')} />
                </a>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-elements basic-flex">
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/connexion">PROGRAMME</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/cgu">ACCES</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/cgu">HOTEL</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/cgu">RSVP</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/cgu">DRESS-CODE</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/cgu">INFO PRATIQUES</a>
                        </li>
                        <li className="nav-item active">
                            <a className="navigbar-link text-navbar" href="/cgu">PHOTOS</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <div className='bacic-page'>

                <div id="titles">
                    <h1>Le mariage de</h1>
                    <h1 className='dactyl'>Floriane et Antoine</h1>
                </div>
            </div>

            {buttonGoTop(scrollToTop, showButton)}

        </div>
    );
}

export default Accueil;