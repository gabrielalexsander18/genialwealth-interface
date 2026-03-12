import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const ContainerInput = styled.div`
    
.field {
  position: relative;
  width: 300px;
}

.field input {
  width: 100%;
  padding: 16px 1px 5px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  background: transparent;
}

/* Label padrão (dentro do input) */
.field label {
  position: absolute;
  left: 1px;
  top: 70%;
  transform: translateY(-50%);
  color: #777;
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  pointer-events: none;
  background: none;
  padding: 0 3px;
  transition: 0.25s ease;
}

/* Quando foca ou tem valor */
.field input:focus + label,
.field input:not(:placeholder-shown) + label {
  top: 0;
  font-size: 12px;
  
  /* color: #1E5EFF; */
}

.field .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${theme.gray};
  overflow: hidden;
}

.field .underline::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #1E5EFF;
  transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-50%);
}

/* ATIVA A LINHA */
.field input:focus ~ .underline::after {
  width: 100%;
}

.eye-button {
	position: absolute;
	right: 10px;
	top: 65%;
	transform: translateY(-50%);
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	color: #666;
}
`
