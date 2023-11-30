import { alpha } from '@mui/material'
import { isLight } from '@utils/isLight'

export const drawer: ComponentTheme<'MuiDrawer'> = {
	MuiDrawer: {
		styleOverrides: {
			modal: ({ theme }) => ({
				'&[role="presentation"]': {
					'& .MuiDrawer-paperAnchorLeft': {
						boxShadow: `8px 24px 24px 12px ${alpha(
							theme.palette.grey[900],
							isLight(theme) ? 0.16 : 0.48
						)}`
					},
					'& .MuiDrawer-paperAnchorRight': {
						boxShadow: `-8px 24px 24px 12px ${alpha(
							theme.palette.grey[900],
							isLight(theme) ? 0.16 : 0.48
						)}`
					}
				}
			})
		}
	}
}
