import { React } from "react";

import Accueil from "./pages/Accueil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import eruda from "eruda";

function App() {

    // //console
    // let el = document.createElement('div');
    // document.body.appendChild(el);

    // eruda.init({
    //     container: el,
    //     tool: ['console', 'elements']
    // });

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />}>
                    {/* <Route path="blogs" element={<Blogs />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;