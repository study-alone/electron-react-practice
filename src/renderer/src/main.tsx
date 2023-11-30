import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

// context
import { SettingsProvider } from '@contexts/SettingProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<HelmetProvider>
			<SettingsProvider>
				<App />
			</SettingsProvider>
		</HelmetProvider>
	</React.StrictMode>
)
