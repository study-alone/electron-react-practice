export const controlLabel: ComponentTheme<
	'MuiFormControlLabel' | 'MuiFormHelperText' | 'MuiFormLabel'
> = {
	MuiFormControlLabel: {
		styleOverrides: {
			label: ({ theme }) => ({
				...theme.typography.body2
			})
		}
	},
	MuiFormHelperText: {
		styleOverrides: {
			root: ({ theme }) => ({
				marginTop: theme.spacing(1)
			})
		}
	},
	MuiFormLabel: {
		styleOverrides: {
			root: ({ theme }) => ({
				color: theme.palette.text.disabled
			})
		}
	}
}
