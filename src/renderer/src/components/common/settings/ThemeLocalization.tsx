import { ThemeProvider, createTheme, useTheme } from '@mui/material'
import useLocales from '@hooks/useLocale'

type ThemeLocalizationProps = {
	children: React.ReactNode
}

export const ThemeLocalization = ({ children }: ThemeLocalizationProps) => {
	const defaultTheme = useTheme()
	const { currentLang } = useLocales()
	const theme = createTheme(defaultTheme, currentLang.systemValue)

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
