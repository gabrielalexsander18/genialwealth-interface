/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
// import setaGif from '../../assets/chevron-double-down.svg'
import LogoProjetoCompleto from '../../assets/genial-wealth-logo-completo.svg'
import LogoProjectStrings from '../../assets/logo-genial-strings.svg'
import { Button } from '../../components'
import { theme } from '../../styles/theme'
import {
	Container,
	ContainerTwo,
	Header,
	LogoProjectStringsEdit,
	LogoProjetoEdit,
	Main,
	Slogan,
	Titulo,
} from './styles'

export function Home() {
	return (
		<>
			<Container>
				<Header>
					<LogoProjetoEdit src={LogoProjetoCompleto} alt="logo-do-projeto" />
					<a href="#">Nossos produtos</a>
					<a href="#">Trader</a>
					<a href="#">Para aprender</a>
					<a href="#">Sobre nós</a>
					<Button
						style={{
							backgroundColor: `${theme.white}`,
							border: `.15rem solid ${theme.white}`,
							borderRadius: 10,
							fontSize: 17,
							fontWeight: 500,
							color: `${theme.clearMode.blue}`,
							marginLeft: 100,
						}}
					>
						Crie sua conta
					</Button>
					<Button
						style={{
							// backgroundColor: `${theme.clearMode.whiteBlue}`,
							borderRadius: 10,
							border: `.15rem solid ${theme.white}`,
							color: `${theme.clearMode.whiteBlue}`,
							fontSize: 17,
							fontWeight: 500,
							marginLeft: -50,
						}}
					>
						Entrar
					</Button>
				</Header>
				<Main>
					<LogoProjectStringsEdit src={LogoProjectStrings} alt="Logo-Genial-Wealth-Strings" />

					<div id="texts_container">
						<Titulo>
							Genial <br />
							<p id="wordWealth">Wealth.</p>
						</Titulo>
						<Slogan>Riqueza construída com genialidade.</Slogan>
						<ContainerTwo>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure corrupti nemo. Tempora nisi id ab iure
								facilis sint ut necessitatibus laborum quasi molestiae, velit dolorem corporis nostrum similique
								aliquid? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ex similique, nesciunt nobis
								necessitatibus corporis minus cum magni? Nobis delectus doloremque necessitatibus inventore, dolorem
								reprehenderit nam cum magni facilis molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Nisi, maiores iste odit ullam optio ratione, rem rerum voluptatum ipsum laudantium totam minima in enim
								facilis perferendis minus sunt corporis voluptatem!
							</p>
						</ContainerTwo>
					</div>
					{/* <img id="seta_baixo" src={setaGif} alt="seta-para-baixo" /> */}
					{/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="arrow_bold_down"
						viewBox="0 0 24 24"
						width="512"
						height="512"
						alt="seta-para-baixo"
					>
						<path d="M1.51,6.079a1.492,1.492,0,0,1,1.06.44l7.673,7.672a2.5,2.5,0,0,0,3.536,0L21.44,6.529A1.5,1.5,0,1,1,23.561,8.65L15.9,16.312a5.505,5.505,0,0,1-7.778,0L.449,8.64A1.5,1.5,0,0,1,1.51,6.079Z" />
					</svg>
				</Main>
			</Container>

			<ContainerTwo>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure corrupti nemo. Tempora nisi id ab iure
					facilis sint ut necessitatibus laborum quasi molestiae, velit dolorem corporis nostrum similique aliquid?
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ex similique, nesciunt nobis necessitatibus
					corporis minus cum magni? Nobis delectus doloremque necessitatibus inventore, dolorem reprehenderit nam cum
					magni facilis molestias. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, maiores iste odit
					ullam optio ratione, rem rerum voluptatum ipsum laudantium totam minima in enim facilis perferendis minus sunt
					corporis voluptatem!
				</p>
			</ContainerTwo>
		</>
	)
}
