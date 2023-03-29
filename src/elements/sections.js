import { colorGreen, colorLightOrange, colorOrange } from '../config';
import { div5050 } from './general';

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
                    { marginTop: "60%" } :
                    width < 600 ?
                        { marginTop: "40%" } :
                        width < 800 ?
                            { marginTop: "15%" }
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

function mdpSection(verifyMdp, mdp, setMdp) {
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

function acces(carTextClicked, setCarTextClicked, planeTextClicked, setPlaneTextClicked, trainTextClicked, setTrainTextClicked) {
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

                <div className='flex-3-blocks'>
                    <div className='flexed-3-blocks  transition'>
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
                    <img src={require('../images/images/green-heart.png')} className='flexed-separator heart-separator' />
                    <div className='flexed-3-blocks transition'>
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
                    <img src={require('../images/images/green-heart.png')} className='flexed-separator heart-separator' />
                    <div className='flexed-3-blocks transition'>
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
                </div>




            </div>

        </div>
    )
}

export { titles, programme, mdpSection, acces }