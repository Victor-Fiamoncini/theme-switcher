import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from './styles'

interface Props {
	toggleTheme: () => void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
	const { colors, title } = useContext(ThemeContext)

	return (
		<Container>
			<h1>Theme Switcher</h1>
			<Switch
				onChange={toggleTheme}
				checked={title === 'dark'}
				checkedIcon={false}
				uncheckedIcon={false}
				onColor={colors.secundary}
				offColor={shade(0.2, colors.secundary)}
				height={10}
				width={40}
				handleDiameter={20}
			/>
		</Container>
	)
}

export default Header
