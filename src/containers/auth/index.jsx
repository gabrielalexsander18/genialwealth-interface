// import LogoProjectStrings from '../../assets/logo-genial-strings.svg'
// import { Button } from '../../../components'
// import { theme } from '../../../styles/theme'
import LogoProjetoCompleto from '../../assets/genial-wealth-logo-completo.svg'
import { Login } from './Login'
import { Password } from './Password'
import { Container, LogoGenialComplet, Main } from './styles'

export function Auth() {
	return (
		<>
			<Main>
				<Container>
					{/* <LogoGenialComplet src={LogoProjetoCompleto} /> */}
					<Password />
					{/* <Login /> */}
				</Container>
			</Main>
		</>
	)
}
