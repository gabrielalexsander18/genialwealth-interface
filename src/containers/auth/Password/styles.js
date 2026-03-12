import styled from 'styled-components'
import { theme } from '../../../styles/theme'
// import px2vw from '../../utils/px2vw'

export const Main = styled.div`
    /* background-color: ${theme.gray};
    min-height: 100dvh; */
    /* display: flex;
    gap: 10rem; */
`

export const Container = styled.div`
    background-color: rgba(225, 227, 238, .8);
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    padding: 2rem;
    border-radius: .4rem;

    a {
      font-weight: 300;
      font-size: 13px;
      margin-top: -3rem;
    }

    #container_button {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding-right: 3rem;
    }

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
`

export const LogoGenialComplet = styled.img``

export const Titulo = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;
    color: ${theme.clearMode.blue};
`

export const ContainerOpenAccount = styled.div`
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
