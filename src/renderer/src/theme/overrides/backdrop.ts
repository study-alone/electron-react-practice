import { alpha } from '@mui/material'

const varLow = (theme: BaseTheme) => alpha(theme.palette.grey[900], 0.48)
const varHigh = (theme: BaseTheme) => alpha(theme.palette.grey[900], 1)
export const backdrop: ComponentTheme<'MuiBackdrop'> = {
	MuiBackdrop: {
		styleOverrides: {
			root: ({ theme }) => ({
				background: [
					`rgb(22,28,36)`,
					`-moz-linear-gradient(75deg, ${varLow(theme)} 0%, ${varHigh(theme)} 100%)`,
					`-webkit-linear-gradient(75deg, ${varLow(theme)} 0%, ${varHigh(theme)} 100%)`,
					`linear-gradient(75deg, ${varLow(theme)} 0%, ${varHigh(theme)} 100%)`
				],
				'&.MuiBackdrop-invisible': {
					background: 'transparent'
				}
			})
		}
	}
}
