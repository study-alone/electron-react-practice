import { isLight } from '@utils/isLight'

export const slider: ComponentTheme<'MuiSlider'> = {
	MuiSlider: {
		defaultProps: {
			size: 'small'
		},

		styleOverrides: {
			root: ({ theme }) => ({
				'&.Mui-disabled': {
					color: theme.palette.action.disabled
				}
			}),
			markLabel: ({ theme }) => ({
				fontSize: 13,
				color: theme.palette.text.disabled
			}),
			valueLabel: ({ theme }) => ({
				borderRadius: 8,
				backgroundColor: theme.palette.grey[isLight(theme) ? 800 : 700]
			})
		}
	}
}
