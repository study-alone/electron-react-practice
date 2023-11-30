export const paper: ComponentTheme<'MuiPaper'> = {
	MuiPaper: {
		defaultProps: {
			elevation: 0
		},

		variants: [
			{
				props: { variant: 'outlined' },
				style: ({ theme }) => ({ borderColor: theme.palette.grey[500_12] })
			}
		],

		styleOverrides: {
			root: {
				backgroundImage: 'none'
			}
		}
	}
}
