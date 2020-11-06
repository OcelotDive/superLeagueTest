import React from 'react';
import styled from 'styled-components'


const StyledComponent = styled.button`
${props => props.$style ?? {}}
margin-top: 20px;
display: inline-block;
padding: 6px 12px;
font-size: 16px;
font-family: Arial, sans-serif;
line-height: 1.5;
color: white;

border: none;
outline: none;
border-radius: 4px;
:not(:disabled) {
  cursor: pointer;
}
:hover {
  background-color: #5a6268;
}
`;


export default StyledComponent;