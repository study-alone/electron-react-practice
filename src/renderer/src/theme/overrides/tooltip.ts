import { isLight } from '@utils/isLight'

export const tooltip: ComponentTheme<'MuiTooltip'> = {
	MuiTooltip: {
		styleOverrides: {
			tooltip: ({ theme }) => ({
				backgroundColor: theme.palette.grey[isLight(theme) ? 800 : 700]
			}),
			arrow: ({ theme }) => ({
				color: theme.palette.grey[isLight(theme) ? 800 : 700]
			})
		}
	}
}
