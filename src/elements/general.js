import { scrollTo } from '../utils/layout';
import { colorGreen, backgroundBlue } from '../config';

{/* BOUTON GO TO TOP */ }
function buttonGoTop(scrollToTop, showButton) {
    return (
        <button onClick={scrollToTop} className={showButton ? "btn btn-dark btn-to-top transition not-hidden" : "btn btn-dark btn-to-top hidden transition hidden"}>
            <img src={require("../images/icons/arrow-up.webp")}
                style={{ width: "100%", height: "100%", filter: "invert(1)" }} />
        </button>
    );
}

function navbarElements(styleUl = {}, styleP = {}) {
    return (
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-elements basic-flex" style={styleUl}>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("programme")} style={styleP}>
                    PROGRAMME</h3>
            </li>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("acces")} style={styleP}>
                    ACCÈS</h3>
            </li>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("hotel")} style={styleP}>
                    HÔTEL</h3>
            </li>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("rsvp")} style={styleP}>
                    RSVP</h3>
            </li>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("dress-code")} style={styleP}>
                    DRESS-CODE</h3>
            </li>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("info-pratiques")} style={styleP}>
                    INFO PRATIQUES</h3>
            </li>
            <li className="nav-item active">
                <h3 className="navigbar-link text-navbar" onClick={scrollTo("photos")} style={styleP}>
                    PHOTOS</h3>
            </li>
        </ul>
    )
}

function navbar(toggleClicked, width, onToggleClick) {
    return (
        <nav className="navbar navbar-expand navbar-light inscription-navbar">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <img className="logo-navbar transition" alt="logo" src={require('../images/icons/logo.png')} onClick={scrollTo("titles")} />

            {width > 800 ?
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    {navbarElements()}
                </div>
                :
                <div>
                    <img
                        src={require('../images/icons/toggle-navbar.png')}
                        className={toggleClicked ? "toggle-navbar transition rotated" : "toggle-navbar transition not-rotated"}
                        onClick={onToggleClick}
                    />

                    <div>
                        <div
                            className={toggleClicked ? "navbar-elements-container transition" : "navbar-elements-container transition hidden"}
                            style={{ position: "absolute", top: "100%", left: "0", width: "100%", backgroundColor: backgroundBlue, zIndex: "100", textAlign: "center", borderRadius: "0 0 40px 40px", padding: "5%" }}
                        >
                            <img src={require('../images/images/branche.png')} className='branche' />

                            {navbarElements({ display: "grid" }, { padding: "5px" })}

                            <img src={require('../images/images/branche.png')} className='branche inverted' />
                        </div>
                    </div>
                </div>
            }
        </nav >
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