import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth } from './containers'
import GlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Auth />
		<GlobalStyles />
	</StrictMode>,
)
