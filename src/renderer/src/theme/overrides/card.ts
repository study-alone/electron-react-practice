import { spacing } from '@utils/spacing'

export const card: ComponentTheme<'MuiCard' | 'MuiCardHeader' | 'MuiCardContent'> = {
	MuiCard: {
		styleOverrides: {
			root: ({ theme }) => ({
				position: 'relative',
				boxShadow: theme.customShadows.card,
				borderRadius: Number(theme.shape.borderRadius) * 2,
				zIndex: 0 // Fix Safari overflow: hidden with border radius
			})
		}
	},
	MuiCardHeader: {
		defaultProps: {
			titleTypographyProps: { variant: 'h6' },
			subheaderTypographyProps: { variant: 'body2', marginTop: spacing(0.5) }
		},
		styleOverrides: {
			root: ({ theme }) => ({
				padding: theme.spacing(3, 3, 0)
			})
		}
	},
	MuiCardContent: {
		styleOverrides: {
			root: ({ theme }) => ({
				padding: theme.spacing(3)
			})
		}
	}
}
