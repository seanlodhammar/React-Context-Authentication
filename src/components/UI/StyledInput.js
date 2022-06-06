import styled from 'styled-components';

const FormInput = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    border-color: gray;
    border-bottom: 1px solid;
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    background-color: transparent;
    width: 400px;
    font-size: medium;

    &:focus {
        border-color: #c12870;
    }
`

export default FormInput;