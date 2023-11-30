export const radio: ComponentTheme<'MuiRadio'> = {
	MuiRadio: {
		styleOverrides: {
			root: ({ theme }) => ({
				padding: theme.spacing(1),
				svg: {
					fontSize: 24,
					'&[font-size=small]': {
						fontSize: 20
					}
				}
			})
		}
	}
}
