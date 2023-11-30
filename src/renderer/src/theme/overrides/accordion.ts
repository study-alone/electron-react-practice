export const accordion: ComponentTheme<'MuiAccordion' | 'MuiAccordionSummary'> = {
	MuiAccordion: {
		styleOverrides: {
			root: ({ theme }) => ({
				'&.Mui-expanded': {
					boxShadow: theme.customShadows.z8,
					borderRadius: theme.shape.borderRadius
				},
				'&.Mui-disabled': {
					backgroundColor: 'transparent'
				}
			})
		}
	},
	MuiAccordionSummary: {
		styleOverrides: {
			root: ({ theme }) => ({
				paddingLeft: theme.spacing(2),
				paddingRight: theme.spacing(1),
				'&.Mui-disabled': {
					opacity: 1,
					color: theme.palette.action.disabled,
					'& .MuiTypography-root': {
						color: 'inherit'
					}
				}
			}),
			expandIconWrapper: {
				color: 'inherit'
			}
		}
	}
}
