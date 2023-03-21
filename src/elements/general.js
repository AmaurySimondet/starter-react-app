import { scrollTo } from '../utils/layout';
import { colorGreen } from '../config';

{/* BOUTON GO TO TOP */ }
function buttonGoTop(scrollToTop, showButton) {
    return (
        <button onClick={scrollToTop} className={showButton ? "btn btn-dark btn-to-top transition not-hidden" : "btn btn-dark btn-to-top hidden transition hidden"}>
            <img src={require("../images/icons/arrow-up.webp")}
                style={{ width: "100%", height: "100%", filter: "invert(1)" }} />
        </button>
    );
}

function navbar(toggleClicked, width, onNavbarClick, onToggleClick) {
    return (
        <nav className="navbar navbar-expand navbar-light inscription-navbar">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <img className="logo-navbar" alt="logo" src={require('../images/icons/logo.png')} onClick={scrollTo("titles")} />

            {width > 800 ?
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-elements basic-flex">
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("programme")}>PROGRAMME</p>
                        </li>
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("acces")}>ACCÈS</p>
                        </li>
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("hotel")}>HÔTEL</p>
                        </li>
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("rsvp")}>RSVP</p>
                        </li>
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("dress-code")}>DRESS-CODE</p>
                        </li>
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("info-pratiques")}>INFO PRATIQUES</p>
                        </li>
                        <li className="nav-item active">
                            <p className="navigbar-link text-navbar" onClick={scrollTo("photos")}>PHOTOS</p>
                        </li>
                    </ul>
                </div>
                :
                <div>
                    <img src={require('../images/icons/toggle-navbar.png')} className="toggle-navbar" onClick={onToggleClick} style={{ transform: "rotate(-4deg)" }} />
                </div>
            }
        </nav>
    )
}

function div5050(hour, event, imageUrl, naturalOrder, imageStyle) {
    if (naturalOrder) {
        return (
            <div className='flex-50-50 basic-padding-bottom'>
                <div className='flexed-50-50'>
                    <h2 style={{ color: colorGreen }} className="dactyl">{hour}</h2>
                    <h3>{event}</h3>
                </div>
                <div className='flexed-50-50'>
                    <img className="event-image" style={imageStyle} src={require('../images/images/' + imageUrl)} />
                </div>
            </div>
        )
    } else {
        return (
            <div className='flex-50-50 basic-padding-bottom'>
                <div className='flexed-50-50'>
                    <img className="event-image" style={imageStyle} src={require('../images/images/' + imageUrl)} />
                </div>
                <div className='flexed-50-50'>
                    <h2 style={{ color: colorGreen }} className="dactyl">{hour}</h2>
                    <h3>{event}</h3>
                </div>
            </div>
        )
    }
}

export { buttonGoTop, navbar, div5050 };