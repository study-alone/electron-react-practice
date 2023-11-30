export const fab: ComponentTheme<'MuiFab'> = {
	MuiFab: {
		defaultProps: {
			color: 'primary'
		},

		styleOverrides: {
			root: ({ theme }) => ({
				boxShadow: theme.customShadows.z8,
				'&:hover': {
					boxShadow: 'none',
					backgroundColor: theme.palette.grey[400]
				}
			}),
			primary: ({ theme }) => ({
				boxShadow: theme.customShadows.primary,
				'&:hover': {
					backgroundColor: theme.palette.primary.dark
				}
			}),
			secondary: ({ theme }) => ({
				boxShadow: theme.customShadows.secondary,
				'&:hover': {
					backgroundColor: theme.palette.secondary.dark
				}
			}),
			extended: ({ theme }) => ({
				'& svg': {
					marginRight: theme.spacing(1)
				}
			})
		}
	}
}
