import { colorGreen, colorLightOrange, colorOrange } from '../config';
import { div5050 } from './general';
import { NavigationButtons } from './navbuttons';

function titles(timeRemaining, width) {
    return (
        <div id="titles" className='basic-page' style={
            width < 200 ?
                { marginTop: "80%" } :
                width < 300 ?
                    { marginTop: "60%" } :
                    width < 400 ?
                        { marginTop: "40%" } :
                        width < 500 ?
                            { marginTop: "20%" } :
                            width >= 600 ?
                                { marginTop: "10%" }
                                :
                                {}
        }>

            <div className='basic-margin-updown' style={width < 400 ? { marginTop: "40%" } : {}}>
                <img src={require('../images/images/branche.webp')} className='branche' />

                <div>
                    <h2>Le mariage de</h2>
                    <h1 className='dactyl'>Floriane et Antoine</h1>
                </div>

                <img src={require('../images/images/branche.webp')} className='branche inverted' />
            </div>

            <div>
                <h3>Compte à rebours</h3>
                <h2>{timeRemaining}</h2>
            </div>
        </div>
    )
}

function programme(width, adminMdpOk) {
    return (
        <div id="programme" className="basic-page section-header smallest-padding-bottom"
            style={
                width < 200 ?
                    { marginTop: "310%" } :
                    width < 300 ?
                        { marginTop: "210%" } :
                        width < 400 ?
                            { marginTop: "130%" } :
                            width < 500 ?
                                { marginTop: "110%" } :
                                width < 600 ?
                                    { marginTop: "70%" }
                                    :
                                    width < 700 ?
                                        { marginTop: "50%" }
                                        :
                                        width < 800 ?
                                            { marginTop: "40%" }
                                            :
                                            width >= 800 ?
                                                { marginTop: "60%" }
                                                :
                                                {}
            }>
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Programme</h1>
                <img src={require('../images/images/branche.webp')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-top'>
                    <h2 style={{ color: colorGreen }}>RENDEZ-VOUS LE</h2>
                    <h1 style={{ color: colorOrange }} className='dactyl'>Samedi</h1>
                    <h3>8 JUIN 2024</h3>
                    {adminMdpOk ?
                        <p style={{ color: colorLightOrange }} >Les horaires peuvent être soumis à modifications</p>
                        :
                        null
                    }
                </div>

                {adminMdpOk ?
                    <div className='basic-margin-top'>
                        {div5050("15h30", "Pot d'accueil", "accueil.webp", true)}
                        {div5050("16h30", "Cérémonie d'engagement", "ceremonie.gif", false, { width: "85%" })}
                        {div5050("17h30", "Vin d'honneur", "apero.webp", true)}
                        {div5050("20h00", "Dîner", "diner.webp", false, { width: "45%" })}
                        {div5050("23h30", "Ouverture du bal", "soiree.webp", true)}

                    </div>
                    :
                    <div className='basic-margin-top basic-padding-bottom'>
                        <p>
                            Rendez vous dans l'après-midi, programme à venir...
                        </p>
                    </div>
                }

            </div>

        </div >
    )
}

function mdpSection(verifyMdp, setMdp, passwordWrong) {
    return (
        <div id="mdp">
            <div className="basic-page section-header smallest-padding-bottom" style={{ margin: "auto", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center", alignSelf: "center" }}>
                    <img src={require('../images/images/branche.webp')} className='branche' />

                    <h1> Mot de passe </h1>
                    <input type="password" id="mdp" name="mdp" onChange={(e) => setMdp(e.target.value)} className="form-control" style={{ width: "200px", margin: "auto" }} />
                    <button onClick={verifyMdp} className="btn btn-light" style={{ marginTop: "10px" }}>
                        Valider
                    </button>
                    {passwordWrong ?
                        <div className="wrong-password">
                            Mot de passe incorrect
                        </div>
                        :
                        null
                    }
                    <br />

                    <img src={require('../images/images/branche.webp')} className='branche inverted' />
                </div>
            </div>
        </div>
    )
}

function _carDiv(carTextClicked, setCarTextClicked, style = {}) {
    return (
        <div className='flexed-3-blocks transition' style={style}>
            <img
                src={require('../images/images/car.webp')}
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
                src={require('../images/images/plane.webp')}
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
                src={require('../images/images/train.webp')}
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
                <img src={require('../images/images/branche.webp')} className='branche' />
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
                        <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                        {_planeDiv(planeTextClicked, setPlaneTextClicked)}
                        <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                        {_trainDiv(trainTextClicked, setTrainTextClicked)}
                    </div>

                    : lastClicked === 'car' ?
                        <div className='flex-3-blocks'>
                            {_carDiv(carTextClicked, setCarTextClicked, { width: "60%" })}
                            <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                            {_planeDiv(planeTextClicked, setPlaneTextClicked, { width: "15%" })}
                            <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                            {_trainDiv(trainTextClicked, setTrainTextClicked, { width: "15%" })}
                        </div>
                        : lastClicked === 'plane' ?
                            <div className='flex-3-blocks'>
                                {_carDiv(carTextClicked, setCarTextClicked, { width: "15%" })}
                                <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                                {_planeDiv(planeTextClicked, setPlaneTextClicked, { width: "60%" })}
                                <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                                {_trainDiv(trainTextClicked, setTrainTextClicked, { width: "15%" })}
                            </div>
                            : lastClicked === 'train' ?
                                <div className='flex-3-blocks'>
                                    {_carDiv(carTextClicked, setCarTextClicked, { width: "15%" })}
                                    <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                                    {_planeDiv(planeTextClicked, setPlaneTextClicked, { width: "15%" })}
                                    <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                                    {_trainDiv(trainTextClicked, setTrainTextClicked, { width: "60%" })}
                                </div>
                                :
                                <div className='flex-3-blocks'>
                                    {_carDiv(carTextClicked, setCarTextClicked)}
                                    <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                                    {_planeDiv(planeTextClicked, setPlaneTextClicked)}
                                    <img src={require('../images/images/green-heart.webp')} className='flexed-separator ' />
                                    {_trainDiv(trainTextClicked, setTrainTextClicked)}
                                </div>
                }

                <img src={require('../images/images/plan.webp')} alt="plan" className='full-width' />

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
                <img src={require('../images/images/branche.webp')} className='branche' />
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
                <img src={require('../images/images/branche.webp')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding'>
                    <p>Il y a environ 250 chambres d'hôtels, gîtes et chambres d'hôtes dans un rayon de 10 min en voiture du Château</p>

                    <img src={require('../images/images/hotels.webp')} className='full-width' />

                    <div className='flex-50-50 basic-margin'>
                        <a href="https://vu.fr/aBcR" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                            <h2>Booking.com </h2>
                        </a>

                        <a href="https://vu.fr/mJhx" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                            <h2>Hotels.com </h2>
                        </a>
                    </div>

                    <img src={require('../images/images/airbnb.webp')} className='full-width' />

                    <div className='flex-50-50 basic-margin'>
                        <a href="https://vu.fr/ULAE" style={{ color: colorOrange }} className='dactyl flexed-50-50 transition hovered'>
                            <h2>Airbnb.com </h2>
                        </a>
                    </div>

                    <img src={require('../images/images/green-heart.webp')} className='heart-separator basic-margin-bottom' />

                    <div className='flex-50-50 basic-margin'>
                        <img src={require('../images/images/tente.webp')} className='flexed-50-50' />
                        <p className='flexed-50-50'>
                            Le Château du Bourg propose un espace pour les tentes et un parking dédié pour les camping-cars en cas de besoin. N'hésitez pas à nous faire part de votre désir d'en profiter, le cas échéant.
                        </p>
                    </div>

                    <img src={require('../images/images/green-heart.webp')} className='heart-separator basic-margin-bottom' />

                    <h2 style={{ color: colorGreen }} className='dactyl'>
                        Et si vous en profitiez pour découvrir Roanne ?
                    </h2>


                    <img src={require('../images/images/roanne.webp')} style={{ width: "50%" }} className='basic-margin-bottom' />

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

function reponse(adminMdpOk) {
    return (
        <div id="reponse" className="basic-page smallest-padding-bottom">
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Réponse</h1>
                <img src={require('../images/images/branche.webp')} className='branche' />
            </div>

            <div className='white-page'>
                {
                    adminMdpOk ?
                        <div className='basic-padding-updown'>
                            <p>Cliquez ci-dessous pour compléter le formulaire de réponse :</p>
                            <a href="https://forms.gle/bXF6xAeHF97PzTo99" style={{ color: colorGreen }} >
                                <h2 className='dactyl transition hovered'> Google Form </h2>
                            </a>
                        </div>
                        :
                        <div style={{ padding: "5%" }}>
                            <p>
                                En attendant le faire part, nous vous invitons dès maintenant à penser à réserver une baby-sitter : notre mariage est sans enfants.
                            </p>
                            <p>
                                Dans cette section, vous pourrez bientôt compléter ici le formulaire de réponse à notre invitation
                            </p>
                        </div>
                }

            </div>
        </div>
    )
}

function dressCode(width) {
    return (
        <div id="dress-code" className="basic-page smallest-padding-bottom">
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Dress Code</h1>
                <img src={require('../images/images/branche.webp')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-updown' style={{ padding: "5%" }}>
                    <div className='basic-flex basic-margin-bottom'>
                        <div
                            className="circle transition big-hovered"
                            onClick={() => document.body.style.backgroundColor = "#8d7268"}
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#8d7268" } : { width: "50px", height: "50px", backgroundColor: "#8d7268" }}></div>
                        <div
                            onClick={() => document.body.style.backgroundColor = "#c5856d"}
                            className="circle transition big-hovered"
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#c5856d" } : { width: "50px", height: "50px", backgroundColor: "#c5856d" }}></div>
                        <div
                            className="circle transition big-hovered"
                            onClick={() => document.body.style.backgroundColor = "#d0b084"}
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#d0b084" } : { width: "50px", height: "50px", backgroundColor: "#d0b084" }}></div>
                        <div
                            className="circle transition big-hovered"
                            onClick={() => document.body.style.backgroundColor = "#689d71"}
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#689d71" } : { width: "50px", height: "50px", backgroundColor: "#689d71" }}></div>
                        <div
                            className="circle transition big-hovered"
                            onClick={() => document.body.style.backgroundColor = "#89cd95"}
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#89cd95" } : { width: "50px", height: "50px", backgroundColor: "#89cd95" }}></div>
                        <div
                            className="circle transition big-hovered"
                            onClick={() => document.body.style.backgroundColor = "#cfa89b"}
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#cfa89b" } : { width: "50px", height: "50px", backgroundColor: "#cfa89b" }}></div>
                        <div
                            className="circle transition big-hovered"
                            onClick={() => document.body.style.backgroundColor = "#c56c87"}
                            style={width < 600 ? { width: "25px", height: "25px", backgroundColor: "#c56c87" } : { width: "50px", height: "50px", backgroundColor: "#c56c87" }}></div>
                    </div>

                    <p>
                        Nous vous proposons de venir en <u>tenue de soirée printanière.</u>
                    </p>
                    <p>
                        Pour mesdames : évitez le blanc et ses déclinaisons.
                        Prenez également en compte, dans le choix de vos souliers, que la cérémonie aura lieu sur l'herbe.

                    </p>
                    <p>
                        Pour messieurs : la cravate ou le nœud-papillon seront appréciés.
                        Les shorts, moins.
                    </p>
                    <p>
                        En inspiration totale de votre tenue ou en détail coloré, nous apprécierons un clin d’œil à la palette des couleurs printanières de notre mariage : taupe, vert sauge, vieux rose...
                    </p>

                    <img src={require('../images/images/green-heart.webp')} className='heart-separator basic-margin-updown' />
                </div>
            </div>

        </div>
    )
}

function infoPratiques() {
    return (
        <div id="info-pratiques" className="basic-page smallest-padding-bottom">
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Informations pratiques</h1>
                <img src={require('../images/images/branche.webp')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-top basic-padding-leftright'>
                    <h3 style={{ color: colorGreen }}>
                        COORDONNÉES DES FUTURS MARIÉS
                    </h3>
                    <div className='flex-50-50'>
                        <div className='flexed-50-50'>
                            <strong>Floriane SIMONDET</strong>
                            <p>floriane.simondet@gmail.com</p>
                        </div>
                        <div className='flexed-50-50'>
                            <strong>Antoine LEOST</strong>
                            <p>leost.antoine@gmail.com</p>
                        </div>
                    </div>
                </div>

                <img src={require('../images/images/green-heart.webp')} className='heart-separator basic-margin-updown' />

                <div className='basic-padding-top basic-padding-leftright'>
                    <h3 style={{ color: colorGreen }}>
                        COORDONNÉES DE NOS TÉMOINS
                    </h3>
                    <p>
                        Pour la planification de surprises, un covoiturage ou la récolte d'informations complémentaires, vous pouvez contacter nos témoins.
                    </p>
                    <div className='flex-50-50'>
                        <div className='flexed-50-50'>
                            <strong>Emeline SIMONDET</strong>
                            <p>emeline.s@ntymail.com</p>
                        </div>
                        <div className='flexed-50-50'>
                            <strong>Rémi DODIER</strong>
                            <p>dodier.remi@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex-50-50'>
                        <div className='flexed-50-50'>
                            <strong>Alexandra SCLAUNICK</strong>
                            <p>sclaunicka@gmail.com</p>
                        </div>
                        <div className='flexed-50-50'>
                            <strong>Alexandre MONACO</strong>
                            <p>alexandremonaco@hotmail.fr</p>
                        </div>
                    </div>
                </div>

                <img src={require('../images/images/green-heart.webp')} className='heart-separator basic-margin-updown' />

                <div className='basic-padding-top basic-padding-leftright'>
                    <h3 style={{ color: colorGreen }}>
                        LISTE DE MARIAGE
                    </h3>
                    <p>Nous n'avons pas créé de liste de mariage.</p>
                    <p style={{ marginBottom: 0 }}>En revanche, si vous souhaitez nous faire un cadeau, vous pouvez participer à la cagnotte qui nous aidera à partir en voyages de noces :</p>
                    <img src={require('../images/images/cagnotte.webp')} className='event-image transition hovered basic-margin-updown' onClick={() => window.open('https://app.lyf.eu/pot/fr/b9b5ab65-b5b1-4c86-8957-0ae7906d954f')} />
                    <p>Notre rêve : partir en Islande voir les aurores boréales !</p>
                </div>

                <img className='full-width' src={require('../images/images/islande.webp')} />
            </div>
        </div>
    )
}

function photos() {
    return (
        <div id="photos" className="basic-page smallest-padding-bottom">
            <div className='basic-padding-updown'>
                <h1 className='dactyl'>Photos</h1>
                <img src={require('../images/images/branche.webp')} className='branche' />
            </div>

            <div className='white-page'>
                <div className='basic-padding-updown'>
                    <h3 style={{ color: colorGreen }}>
                        PARTAGE DE PHOTOS
                    </h3>
                    <p>
                        Section à venir
                    </p>
                </div>
            </div>
        </div>
    )
}

export { titles, programme, mdpSection, acces, footer, hotel, reponse, dressCode, infoPratiques, photos }