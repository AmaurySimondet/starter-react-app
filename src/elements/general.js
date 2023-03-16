import { scrollTo } from '../utils/layout';

{/* BOUTON GO TO TOP */ }
function buttonGoTop(scrollToTop, showButton) {
    return (
        <button onClick={scrollToTop} className={showButton ? "btn btn-dark btn-to-top opacity-transition not-hidden" : "btn btn-dark btn-to-top hidden opacity-transition hidden"}>
            <img src={require("../images/icons/arrow-up.webp")}
                style={{ width: "100%", height: "100%", filter: "invert(1)" }} />
        </button>
    );
}

function navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light inscription-navbar">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <img className="logo-navbar" alt="logo" src={require('../images/icons/logo.png')} onClick={scrollTo("titles")} />

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-elements basic-flex">
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("programme")}>PROGRAMME</p>
                    </li>
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("accès")}>ACCÈS</p>
                    </li>
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("hôtel")}>HÔTEL</p>
                    </li>
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("rsvp")}>RSVP</p>
                    </li>
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("DRESS-CODE")}>DRESS-CODE</p>
                    </li>
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("info-pratiques")}>INFO PRATIQUES</p>
                    </li>
                    <li className="nav-item active">
                        <p className="navigbar-link text-navbar" onClick={scrollTo("photos")}>PHOTOS</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


function titles(timeRemaining) {
    return (
        <div id="titles" className='basic-page'>

            <div className='large-margin-updown'>
                <img src={require('../images/images/branche.png')} className='branche' />

                <div>
                    <h2>Le mariage de</h2>
                    <h1 className='dactyl'>Floriane et Antoine</h1>
                </div>

                <img src={require('../images/images/branche.png')} className='branche' />
            </div>

            <div>
                <h2>Compte à rebours</h2>
                <h2>{timeRemaining}</h2>
            </div>
        </div>
    )
}

export { buttonGoTop, navbar, titles };