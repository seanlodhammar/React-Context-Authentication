import React from 'react';
import OrOption from '../OrOption';
import StyledAltFormLink from '../StyledAltFormLink';
import './AltLink.css';

const AltLink = (props) => {
    return (
        <div className={props.divClass}>
            <OrOption textColor="black" id="orText">or</OrOption>
            <StyledAltFormLink textColor='#c12870' id={props.altId} href={props.hrefVal}>{props.linkText}</StyledAltFormLink>
        </div>
    )
}

export default AltLink;