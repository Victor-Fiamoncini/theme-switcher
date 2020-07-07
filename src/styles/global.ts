import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline-color: ${props => props.theme.colors.primary};
	}

	body {
		background: ${props => props.theme.colors.background};
		font-size: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		color: ${props => props.theme.colors.text};
	}
`
