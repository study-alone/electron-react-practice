export const autocomplete: ComponentTheme<'MuiAutocomplete'> = {
	MuiAutocomplete: {
		styleOverrides: {
			paper: ({ theme }) => ({
				boxShadow: theme.customShadows.dropdown
			}),
			listbox: ({ theme }) => ({
				padding: theme.spacing(0, 1),
				'& .MuiAutocomplete-option': {
					padding: theme.spacing(1),
					margin: theme.spacing(1, 0),
					borderRadius: theme.shape.borderRadius
				}
			})
		}
	}
}
