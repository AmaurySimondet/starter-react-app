import React from 'react';

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
                <img src={require('../images/icons/maps.png')} alt='Google Maps' className='full-width' />
            </button>
            <button onClick={() => openWaze(lat, lng)} className='btn btn-light navbtn basic-margin'>
                <img src={require('../images/icons/waze.png')} alt='Waze' className='full-width' />
            </button>
            <button onClick={() => openAppleMaps(lat, lng)} className='btn btn-light navbtn basic-margin '>
                <img src={require('../images/icons/apple-maps.png')} alt='Apple Maps' className='full-width' />
            </button >
        </div>
    );
};


export { NavigationButtons };
