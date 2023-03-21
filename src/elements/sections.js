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

export { titles, programme, mdpSection };