import { alpha } from '@mui/material'

export const pagination: ComponentTheme<'MuiPaginationItem'> = {
	MuiPaginationItem: {
		styleOverrides: {
			root: ({ theme }) => ({
				'&.Mui-selected': {
					fontWeight: theme.typography.fontWeightBold
				}
			}),
			textPrimary: ({ theme }) => ({
				'&.Mui-selected': {
					color: theme.palette.primary.main,
					backgroundColor: alpha(theme.palette.primary.main, 0.08),
					'&:hover, &.Mui-focusVisible': {
						backgroundColor: `${alpha(theme.palette.primary.main, 0.24)} !important`
					}
				}
			}),
			outlined: ({ theme }) => ({
				border: `1px solid ${theme.palette.grey[500_32]}`
			}),
			outlinedPrimary: ({ theme }) => ({
				'&.Mui-selected': {
					backgroundColor: alpha(theme.palette.primary.main, 0.08),
					border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`
				}
			})
		}
	}
}
