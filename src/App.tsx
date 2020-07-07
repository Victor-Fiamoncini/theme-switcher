import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/layout/Header'

const App: React.FC = () => {
	const [theme, setTheme] = useState(light)

	const toggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light)
	}

	return (
		<ThemeProvider theme={theme}>
			<Header toggleTheme={toggleTheme} />
			<GlobalStyle />
		</ThemeProvider>
	)
}

export default App
