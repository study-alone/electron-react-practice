import { isLight } from '@utils/isLight'

export const progress: ComponentTheme<'MuiLinearProgress'> = {
	MuiLinearProgress: {
		styleOverrides: {
			root: {
				borderRadius: 4,
				overflow: 'hidden'
			},
			bar: {
				borderRadius: 4
			},
			colorPrimary: ({ theme }) => ({
				backgroundColor: theme.palette.primary[isLight(theme) ? 'lighter' : 'darker']
			}),
			buffer: {
				backgroundColor: 'transparent'
			}
		}
	}
}
