import { ThemeProvider } from '@trenaryja/ui'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './env' // validates before the first render
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</StrictMode>,
)
