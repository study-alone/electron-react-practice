import { useMemo } from 'react'
import { ThemeProvider, alpha, createTheme, useTheme } from '@mui/material'
import { useSettings } from '@hooks/useSettings'
import { componentsOverrides } from '@theme/overrides'
import type { ThemeOptions } from '@mui/material'

type ThemeColorPresetsProps = {
	children: React.ReactNode
}

export const ThemeColorPresets = ({ children }: ThemeColorPresetsProps) => {
	const defaultTheme = useTheme()
	const { setColor } = useSettings()
	const themeOptions = useMemo<ThemeOptions>(
		() => ({
			...defaultTheme,
			palette: {
				...defaultTheme.palette,
				primary: setColor
			},
			customShadows: {
				...defaultTheme.customShadows,
				primary: `0 8px 16px 0 ${alpha(setColor.main, 0.24)}`
			}
		}),
		[setColor, defaultTheme]
	)
	const theme = createTheme(themeOptions)
	theme.components = componentsOverrides()

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
