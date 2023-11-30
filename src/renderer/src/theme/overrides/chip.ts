import * as React from 'react'
import { CloseIcon } from '@theme/overrides/CustomIcons'

export const chip: ComponentTheme<'MuiChip'> = {
	MuiChip: {
		defaultProps: {
			deleteIcon: React.createElement(CloseIcon)
		},

		styleOverrides: {
			avatarMedium: ({ theme }) => ({
				color: theme.palette.text.secondary
			}),
			avatarSmall: ({ theme }) => ({
				color: theme.palette.text.secondary
			}),
			outlined: ({ theme }) => ({
				borderColor: theme.palette.grey[500_32],
				'&.MuiChip-colorPrimary': {
					borderColor: theme.palette.primary.main
				},
				'&.MuiChip-colorSecondary': {
					borderColor: theme.palette.secondary.main
				}
			})
			//
			// avatarColorInfo: ({ theme }) => ({
			// 	color: theme.palette.info.contrastText,
			// 	backgroundColor: theme.palette.info.dark
			// }),
			// avatarColorSuccess: ({ theme }) => ({
			// 	color: theme.palette.success.contrastText,
			// 	backgroundColor: theme.palette.success.dark
			// }),
			// avatarColorWarning: ({ theme }) => ({
			// 	color: theme.palette.warning.contrastText,
			// 	backgroundColor: theme.palette.warning.dark
			// }),
			// avatarColorError: ({ theme }) => ({
			// 	color: theme.palette.error.contrastText,
			// 	backgroundColor: theme.palette.error.dark
			// })
		}
	}
}
