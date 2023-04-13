import React from 'react';
import { LoadingImage } from './general';

const openMaps = (lat, lng) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url);
};

const openWaze = (lat, lng) => {
    const url = `https://waze.com/ul?ll=${lat},${lng}&navigate=yes`;
    window.open(url);
};

const openAppleMaps = (lat, lng) => {
    const url = `http://maps.apple.com/maps?daddr=${lat},${lng}&dirflg=d`;
    window.open(url);
};

const NavigationButtons = ({ lat, lng }) => {
    return (
        <div>
            <button onClick={() => openMaps(lat, lng)} className='btn btn-light navbtn basic-margin '>
                {LoadingImage('icons/maps', 'full-width', null, null, "Google Maps")}
            </button>
            <button onClick={() => openWaze(lat, lng)} className='btn btn-light navbtn basic-margin'>
                {LoadingImage('icons/waze', 'full-width', null, null, "Waze")}
            </button>
            <button onClick={() => openAppleMaps(lat, lng)} className='btn btn-light navbtn basic-margin '>
                {LoadingImage('icons/apple-maps', 'full-width', null, null, "Apple Maps")}
            </button >
        </div>
    );
};


export { NavigationButtons };
