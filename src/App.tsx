import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import usePersistedState from './hooks/usePersistedState'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import GlobalStyle from './styles/global'
import Header from './components/layout/Header'

const App: React.FC = () => {
	const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

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
