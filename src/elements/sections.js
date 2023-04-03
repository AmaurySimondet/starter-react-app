import { colorGreen, colorLightOrange, colorOrange } from '../config';
import { div5050 } from './general';
import { NavigationButtons } from './navbuttons';

function titles(timeRemaining, width) {
    return (
        <div id="titles" className='basic-page'>

            <div className='basic-margin-updown' style={width < 400 ? { marginTop: "40%" } : {}}>
                <img src={require('../images/images/branche.png')} className='branche' />

                <div>
                    <h2>Le mariage de</h2>
                    <h1 className='dactyl'>Floriane et Antoine</h1>
                </div>

                <img src={require('../images/images/branche.png')} className='branche inverted' />
            </div>

            <div>
                <h3>Compte à rebours</h3>
                <h2>{timeRemaining}</h2>
            </div>
        </div>
    )
}

function programme(width) {
    return (
        <div id="programme" className="basic-page section-header smallest-padding-bottom"
            style={
                width < 400 ?
                    { marginTop: "90%" } :
                    width < 600 ?
                        { marginTop: "60%" } :
                        width < 800 ?
                            { marginTop: "30%" }
                            :
                            {}}>
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Programme</h1>
                <img src={require('../images/images/branche.png')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-top'>
                    <h2 style={{ color: colorGreen }}>RENDEZ-VOUS LE</h2>
                    <h1 style={{ color: colorOrange }} className='dactyl'>Samedi</h1>
                    <h3>8 JUIN 2024</h3>
                    <p style={{ color: colorLightOrange }} >Les horaires peuvent être soumis à modifications</p>
                </div>

                <div className='basic-margin-top'>
                    {div5050("15h30", "Pot d'accueil", "accueil.png", true)}
                    {div5050("16h30", "Cérémonie d'engagement", "ceremonie.gif", false, { width: "85%" })}
                    {div5050("17h30", "Vin d'honneur", "apero.svg", true)}
                    {div5050("20h00", "Dîner", "diner.svg", false, { width: "45%" })}
                    {div5050("23h30", "Ouverture du bal", "soiree.svg", true)}

                </div>

            </div>

        </div>
    )
}

function mdpSection(verifyMdp, setMdp) {
    return (
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
    )
}

function _carDiv(carTextClicked, setCarTextClicked, style = {}) {
    return (
        <div className='flexed-3-blocks transition' style={style}>
            <img
                src={require('../images/images/car.png')}
                className={carTextClicked ? 'block-img transition full-rotation' : 'block-img transition'}
                onClick={() => setCarTextClicked(!carTextClicked)} />
            <div className={carTextClicked ? 'block-text heighted transition' : 'block-text no-height transition'}>
                <p>
                    Le château est à 1h15 de Lyon,
                    1h de Saint-Etienne, ou encore 1h de Vichy
                </p>
                <p>
                    Le plus simple est de passer par l'A89 et de sortir à Perreux/Thizy (échangeur 33).
                    Attention ! Si vous ratez la sortie la prochaine est à 20 min
                </p>
                <p>
                    Aussi, soyez vigilants aux restrictions pollution qui peuvent ralentir le trafic depuis Lyon
                </p>
            </div>
        </div>
    )
}

function _planeDiv(planeTextClicked, setPlaneTextClicked, style = {}) {
    return (
        <div className='flexed-3-blocks transition' style={style}>
            <img
                src={require('../images/images/plane.png')}
                className={planeTextClicked ? 'block-img transition full-rotation' : 'block-img transition'}
                onClick={() => setPlaneTextClicked(!planeTextClicked)} />
            <div className={planeTextClicked ? 'block-text heighted transition' : 'block-text no-height transition'}>
                <p>
                    Le château est à 1h30 de l'aéroport de Lyon-Saint Exupéry, et à
                    50 min de l'aéroport de Saint-Etienne Boutheon
                </p>
                <p>
                    Ensuite, nous vous recommandons de louer une voiture !
                </p>
            </div>
        </div>
    )
}

function _trainDiv(trainTextClicked, setTrainTextClicked, style = {}) {
    return (
        <div className='flexed-3-blocks transition' style={style}>
            <img
                src={require('../images/images/train.png')}
                className={trainTextClicked ? 'block-img transition full-rotation' : 'block-img transition'}
                style={{ width: "22%" }}
                onClick={() => setTrainTextClicked(!trainTextClicked)} />
            <div className={trainTextClicked ? 'block-text heighted transition' : 'block-text no-height transition'}>
                <p>
                    Le château est à 10 min de la gare TER de Roanne (accessible en 1h15 depuis Lyon ou Clermont-Ferrand)
                    Une agence Rent-A-Car se trouve à proximité.
                </p>
                <p>
                    Les applis de chauffeurs ne fonctionnent pas sur Roanne. Vous pouvez contacter un taxi (tel que Robert DUFOURT
                    04 77 69 60 00
                    taxidufourt@wanadoo.fr)
                    ou organiser un covoiturage avec nos témoins !
                </p>
            </div>
        </div>
    )
}

function acces(carTextClicked, setCarTextClicked,
    planeTextClicked, setPlaneTextClicked,
    trainTextClicked, setTrainTextClicked, lastClicked) {
    return (
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

                <br />
                <i>
                    Cliquez sur votre moyen de transport préféré
                    <br />pour obtenir les informations de trajet
                </i>
                <br />
                <br />


                {!carTextClicked && !planeTextClicked && !trainTextClicked ?
                    <div className='flex-3-blocks'>
                        {_carDiv(carTextClicked, setCarTextClicked)}
                        <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                        {_planeDiv(planeTextClicked, setPlaneTextClicked)}
                        <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                        {_trainDiv(trainTextClicked, setTrainTextClicked)}
                    </div>

                    : lastClicked === 'car' ?
                        <div className='flex-3-blocks'>
                            {_carDiv(carTextClicked, setCarTextClicked, { width: "60%" })}
                            <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                            {_planeDiv(planeTextClicked, setPlaneTextClicked, { width: "15%" })}
                            <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                            {_trainDiv(trainTextClicked, setTrainTextClicked, { width: "15%" })}
                        </div>
                        : lastClicked === 'plane' ?
                            <div className='flex-3-blocks'>
                                {_carDiv(carTextClicked, setCarTextClicked, { width: "15%" })}
                                <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                                {_planeDiv(planeTextClicked, setPlaneTextClicked, { width: "60%" })}
                                <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                                {_trainDiv(trainTextClicked, setTrainTextClicked, { width: "15%" })}
                            </div>
                            : lastClicked === 'train' ?
                                <div className='flex-3-blocks'>
                                    {_carDiv(carTextClicked, setCarTextClicked, { width: "15%" })}
                                    <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                                    {_planeDiv(planeTextClicked, setPlaneTextClicked, { width: "15%" })}
                                    <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                                    {_trainDiv(trainTextClicked, setTrainTextClicked, { width: "60%" })}
                                </div>
                                :
                                <div className='flex-3-blocks'>
                                    {_carDiv(carTextClicked, setCarTextClicked)}
                                    <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                                    {_planeDiv(planeTextClicked, setPlaneTextClicked)}
                                    <img src={require('../images/images/green-heart.png')} className='flexed-separator ' />
                                    {_trainDiv(trainTextClicked, setTrainTextClicked)}
                                </div>
                }

                <img src={require('../images/images/plan.png')} alt="plan" className='full-width' />

                {NavigationButtons({ lat: 46.046883, lng: 4.122677 })}

            </div>
        </div>
    )
}

function footer() {
    return (
        <div>
            <div className="basic-page section-header smallest-padding-bottom" style={{ marginTop: "0" }}>
                <div className='basic-padding-updown'>
                </div>
            </div>

            <div className="basic-page section-header smallest-padding-bottom" style={{ marginTop: "0" }}>
                <img src={require('../images/images/branche.png')} className='branche' />
                <div className='basic-padding-updown'>
                </div>
            </div>

            <div className="basic-page white-page">
                <i style={{ alignSelf: "center" }}>
                    Site réalisé par <a href="mailto:amaury.simondet@hotmail.com">Amaury Simondet</a> - 2023
                </i>
            </div>
        </div>
    )
}

function hotel() {
    return (
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


        </div>
    )
}

function rsvp() {
    return (
        <div id="rsvp" className="basic-page smallest-padding-bottom">
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>RSVP</h1>
                <img src={require('../images/images/branche.png')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-updown'>
                    <p>Cliquez ci-dessous pour compléter le formulaire de réponse :</p>
                    <a href="https://forms.gle/bXF6xAeHF97PzTo99" style={{ color: colorGreen }} >
                        <h2 className='dactyl transition hovered'> Google Form </h2>
                    </a>
                </div>
            </div>

        </div>
    )
}

function dressCode(width) {
    return (
        <div id="dress-code" className="basic-page smallest-padding-bottom">
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Dress Code</h1>
                <img src={require('../images/images/branche.png')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-updown' style={{ padding: "5%" }}>
                    <div className='basic-flex basic-margin-bottom'>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#8d7268" } : { width: "50px", height: "50px", backgroundColor: "#8d7268" }}></div>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#c5856d" } : { width: "50px", height: "50px", backgroundColor: "#c5856d" }}></div>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#d0b084" } : { width: "50px", height: "50px", backgroundColor: "#d0b084" }}></div>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#689d71" } : { width: "50px", height: "50px", backgroundColor: "#689d71" }}></div>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#89cd95" } : { width: "50px", height: "50px", backgroundColor: "#89cd95" }}></div>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#cfa89b" } : { width: "50px", height: "50px", backgroundColor: "#cfa89b" }}></div>
                        <div className="circle transition big-hovered" style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#c56c87" } : { width: "50px", height: "50px", backgroundColor: "#c56c87" }}></div>
                    </div>

                    <p>
                        Nous vous proposons de venir en <u>tenue de soirée printanière.</u>
                    </p>
                    <p>
                        Mesdames, veillez à bannir le blanc et ses déclinaisons ! Aussi, les robes/shorts trop courts sont à éviter.
                        Prenez également en compte, dans le choix de vos souliers, que la cérémonie aura lieu sur l'herbe.
                    </p>
                    <p>
                        Messieurs, privilégiez un look cravate ou nœud-papillon, et cachez vos mollets que nous ne saurions voir !
                    </p>
                    <p>
                        Selon votre teint, la palette des couleurs printanières est plutôt naturelle : taupe, vert sauge, rose...
                        Rien d'obligatoire mais en total look ou en détail coloré, nous apprécierons le clin d'oeil !
                    </p>

                    <img src={require('../images/images/green-heart.png')} className='heart-separator basic-margin-updown' />
                </div>
            </div>

        </div>
    )
}

export { titles, programme, mdpSection, acces, footer, hotel, rsvp, dressCode }