import React from 'react';

import './ModeChange.scss'

const ModeChange = ({theme, setTheme}) => {
    return (
        <input type="checkbox" className="switch" id="switch-1" onChange={() => setTheme(!theme)} value={theme}
               checked={theme}/>
    );
};

export default ModeChange;
