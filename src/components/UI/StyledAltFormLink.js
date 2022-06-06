import styled from 'styled-components';

const StyledAltFormLink = styled.a`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    text-decoration: none;
    color: ${props => props.textColor};
    font-family: 'Roboto', sans-serif;

    &:hover {
        text-decoration: underline;    
        cursor: pointer;
    }

`

export default StyledAltFormLink;