// import LogoProjectStrings from '../../assets/logo-genial-strings.svg'
// import LogoProjetoCompleto from '../../../assets/genial-wealth-logo-completo.svg'

import { Button } from '../../../components'
import { theme } from '../../../styles/theme'
import { Container, ContainerOpenAccount, LogoGenialComplet, Main, Titulo } from './styles'

export function Login() {
	return (
		<>
			<Main>
				<Container>
					{/* <LogoGenialComplet src={LogoProjetoCompleto} /> */}
					<Titulo>
						Olá! Acesse sua conta <b>Genial</b>
					</Titulo>
					<p>Para iniciar o login, insira abaixo o seu e-mail.</p>
					<div class="field">
						<input type="email" id="email" required placeholder=" " />
						<label for="email">Digite seu email</label>
						<span class="underline"></span>
					</div>
					<div>
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
								// marginLeft: -50,
							}}
						>
							Entrar
						</Button>
					</div>
				</Container>
			</Main>
			<ContainerOpenAccount>
				<p>Ainda não tem conta na Genial?</p>
				<Button
					style={{
						// backgroundColor: `${theme.clearMode.whiteBlue}`,
						borderRadius: 10,
						// border: `.15rem solid ${theme.white}`,
						color: `${theme.clearMode.whiteBlue}`,
						backgroundColor: `${theme.clearMode.Green}`,
						fontSize: 17,
						fontWeight: 800,
						// marginLeft: -50,
					}}
				>
					Quero abrir uma conta
				</Button>
			</ContainerOpenAccount>
		</>
	)
}
