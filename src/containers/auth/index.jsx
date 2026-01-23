// import LogoProjectStrings from '../../assets/logo-genial-strings.svg'
// import { Button } from '../../../components'
// import { theme } from '../../../styles/theme'
import LogoProjetoCompleto from '../../assets/genial-wealth-logo-completo.svg'
import { Login } from './Login'
import { Container, LogoGenialComplet, Main } from './styles'

export function Auth() {
	return (
		<>
			<Main>
				<Container>
					<LogoGenialComplet src={LogoProjetoCompleto} />
					<Login />
				</Container>
			</Main>
		</>
	)
}
