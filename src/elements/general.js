{/* BOUTON GO TO TOP */ }
function buttonGoTop(scrollToTop, showButton) {
    return (
        <button onClick={scrollToTop} className={showButton ? "btn btn-dark btn-to-top opacity-transition not-hidden" : "btn btn-dark btn-to-top hidden opacity-transition hidden"}>
            <img src={require("../images/icons/arrow-up.webp")}
                style={{ width: "100%", height: "100%", filter: "invert(1)" }} />
        </button>
    );
}

export { buttonGoTop }