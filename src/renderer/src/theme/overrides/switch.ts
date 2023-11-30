import { isLight } from '@utils/isLight'

export const switchTheme: ComponentTheme<'MuiSwitch'> = {
	MuiSwitch: {
		styleOverrides: {
			thumb: ({ theme }) => ({
				boxShadow: theme.customShadows.z1
			}),
			track: ({ theme }) => ({
				opacity: 1,
				backgroundColor: theme.palette.grey[500]
			}),
			switchBase: ({ theme }) => ({
				left: 0,
				right: 'auto',
				'&:not(:.Mui-checked)': {
					color: theme.palette.grey[isLight(theme) ? 100 : 300]
				},
				'&.Mui-checked.Mui-disabled, &.Mui-disabled': {
					color: theme.palette.grey[isLight(theme) ? 400 : 600]
				},
				'&.Mui-disabled+.MuiSwitch-track': {
					opacity: 1,
					backgroundColor: `${theme.palette.action.disabledBackground} !important`
				}
			})
		}
	}
}
