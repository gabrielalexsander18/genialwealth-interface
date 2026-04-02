// import LogoProjectStrings from '../../assets/logo-genial-strings.svg'
// import LogoProjetoCompleto from '../../../assets/genial-wealth-logo-completo.svg'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { Button, Input } from '../../../components'
import { DialogDemo } from '../../../components/ui/dialog'
import { theme } from '../../../styles/theme'
import { Container, ContainerOpenAccount, LogoGenialComplet, Main, Titulo } from './styles'

export function Password() {
	const [password, setPassword] = useState('')
	return (
		<>
			<Main>
				<Container>
					{/* <LogoGenialComplet src={LogoProjetoCompleto} /> */}
					<Titulo>
						Insira sua senha para <br /> <b>acessar</b>
					</Titulo>
					{/* <p>Digite sua senha </p> */}
					{/* <div class="field">
						<input type="email" id="email" required placeholder=" " />
						<label for="email">Digite seu email</label>
						<span class="underline"></span>
					</div> */}
					<Input
						id="password"
						label="Digite sua senha"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					{/** biome-ignore lint/a11y/useValidAnchor: <explanation> */}
					<a>
						<DialogDemo />
					</a>

					<div id="container_button">
						<Button
							style={{
								backgroundColor: `${theme.clearMode.blue}`,
								// border: `.15rem solid ${theme.white}`,
								borderRadius: 10,
								fontSize: 17,
								fontWeight: 500,
								color: `${theme.white}`,
								marginLeft: 100,
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 35,
							}}
						>
							Próximo
							<ArrowRight size={22} strokeWidth={2.25} />
						</Button>
						{/* <Button
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
						</Button> */}
					</div>
				</Container>
			</Main>
			{/* <ContainerOpenAccount>
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
			</ContainerOpenAccount> */}
		</>
	)
}
