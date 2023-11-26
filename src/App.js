import { React } from "react";

import Accueil from "./pages/Accueil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

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