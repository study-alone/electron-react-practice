import { useMemo } from 'react'
import {
	ThemeProvider as MuiThemeProvider,
	CssBaseline,
	createTheme,
	StyledEngineProvider,
	type ThemeOptions,
	PaletteOptions
} from '@mui/material'
import { useSettings } from '@hooks/useSettings'
import { palette } from '@theme/palette'
import { breakpoints } from '@theme/breakpoints'
import { customShadows, shadows } from '@theme/shadows'
import { typography } from '@theme/typography'
import { componentsOverrides } from '@theme/overrides'
import { space } from '../config'

type ThemeProviderProps = {
	children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const { themeMode, themeDirection } = useSettings()

	const isLight = themeMode === 'light'

	const themeOptions = useMemo<ThemeOptions>(
		() => ({
			spacing: space,
			palette: (isLight ? palette.light : palette.dark) as PaletteOptions,
			typography,
			breakpoints,
			shape: { borderRadius: 8 },
			direction: themeDirection,
			shadows: isLight ? shadows.light : shadows.dark,
			customShadows: isLight ? customShadows.light : customShadows.dark,
			components: componentsOverrides()
		}),
		[isLight, themeDirection]
	)

	const theme = createTheme(themeOptions)

	return (
		<StyledEngineProvider injectFirst>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</StyledEngineProvider>
	)
}
