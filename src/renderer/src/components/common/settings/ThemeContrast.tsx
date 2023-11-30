import { useMemo } from 'react'
import { CssBaseline, alpha, ThemeProvider, createTheme, useTheme } from '@mui/material'
import { useSettings } from '@hooks/useSettings'
import { componentsOverrides } from '@theme/overrides'
import type { ThemeOptions, CSSObject } from '@mui/material'
import { isLight } from '@utils/isLight'

type ThemeContrastProps = {
	children: React.ReactNode
}

export const ThemeContrast = ({ children }: ThemeContrastProps) => {
	const defaultTheme = useTheme()
	const { themeContrast } = useSettings()
	const light = isLight(defaultTheme)
	const shadowColor = light ? defaultTheme.palette.grey[500] : defaultTheme.palette.common.black
	const styles = {
		bgDefault: defaultTheme.palette.background.default,
		bgBold: light ? defaultTheme.palette.grey[100] : defaultTheme.palette.grey[900],
		cardDefault: defaultTheme.components?.MuiCard?.styleOverrides?.root,
		cardBold: {
			zIndex: 0,
			position: 'relative',
			borderradius: Number(defaultTheme.shape.borderRadius) * 2,
			boxShadow: `0 0 1px 0 ${alpha(shadowColor, 0.48)}, 0 2px 4px -1px ${alpha(
				shadowColor,
				0.24
			)}`
		} as CSSObject
	}
	const themeOptions = useMemo<ThemeOptions>(
		() => ({
			...defaultTheme,
			palette: {
				...defaultTheme.palette,
				background: {
					...defaultTheme.palette.background,
					default: themeContrast === 'bold' ? styles.bgBold : styles.bgDefault
				}
			},
			components: {
				MuiCard: {
					styleOverrides: {
						root: themeContrast === 'bold' ? styles.cardBold : styles.cardDefault
					}
				}
			}
		}),
		[
			defaultTheme,
			themeContrast,
			styles.bgBold,
			styles.bgDefault,
			styles.cardBold,
			styles.cardDefault
		]
	)
	const theme = createTheme(themeOptions)
	theme.components = {
		...componentsOverrides(),
		MuiCard: themeOptions.components?.MuiCard
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
