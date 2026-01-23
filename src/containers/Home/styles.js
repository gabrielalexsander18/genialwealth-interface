import styled from 'styled-components'
import { theme } from '../../styles/theme'
// import px2vw from '../../utils/px2vw'

export const Container = styled.div`
    background-color: ${theme.gray};
    min-height: 100dvh;
`

export const Header = styled.div`
    color: ${theme.clearMode.whiteBlue};
    /* font-size: 300px; */
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-top: 1rem;

    a {
        text-decoration: none;
        color: ${theme.clearMode.whiteBlue};
        position: relative;
    }

    a::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px; /* distância da linha em relação ao texto */
        width: 100%;
        height: 2px;
        background-color: currentColor;

        transform: scaleX(0);
        transform-origin: center;

        transition: transform 0.35s ease;
    }

    a:hover::after {
        transform: scaleX(.5);
    }
`

export const LogoProjetoEdit = styled.img`
    /* width: 10rem; */
`

export const Main = styled.div`
    width: 100%;
    height: 90dvh;
    padding: 1.5rem;
    /* background-color: ${theme.white}; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    #texts_container {
        display: flex;
        flex-direction: column;
        padding: 2rem;
        background-color: ${theme.gray};
        width: 70%;
    }

    #arrow_bold_down {
        position: absolute;
        bottom: 0px;
        width: 1.5rem;
        height: 5%;
        fill: #e1e3ee;

        animation: subirDescer 2.5s ease-in-out infinite;

        @keyframes subirDescer {
            0% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-20px); /* sobe */
            }
            100% {
                transform: translateY(0); /* desce */
            }
        }
    }
`

export const LogoProjectStringsEdit = styled.img`
    width: 20rem;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    right: 25rem;
    top: 15rem;
`

export const Titulo = styled.h1`
    font-size: 4rem;
    font-weight: 900;
    color: ${theme.white};

    #wordWealth {
        margin-left: 1.5rem;
    }
`

export const Slogan = styled.p`
    font-size: 1.75rem;
    font-weight: 400;
    color: ${theme.clearMode.whiteBlue};
`

export const ContainerTwo = styled.div`
    background-color: rgba(255, 255, 255, .75);
    width: 100%;
    margin-top: 2rem;
    padding: 2rem;
    border-radius: 1.5rem;
    display: flex;
    /* min-height: 100dvh; */
`
