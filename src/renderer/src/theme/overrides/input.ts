export const input: ComponentTheme<
	'MuiInput' | 'MuiInputBase' | 'MuiFilledInput' | 'MuiOutlinedInput'
> = {
	MuiInputBase: {
		styleOverrides: {
			root: ({ theme }) => ({
				'&.Mui-disabled': {
					'& svg': { color: theme.palette.text.disabled }
				}
			}),
			input: ({ theme }) => ({
				'&::placeholder': {
					opacity: 1,
					color: theme.palette.text.disabled
				}
			})
		}
	},
	MuiInput: {
		styleOverrides: {
			underline: ({ theme }) => ({
				'&:before': {
					borderBottomColor: theme.palette.grey[500_56]
				}
			})
		}
	},
	MuiFilledInput: {
		styleOverrides: {
			root: ({ theme }) => ({
				backgroundColor: theme.palette.grey[500_12],
				'&:hover': {
					backgroundColor: theme.palette.grey[500_16]
				},
				'&.Mui-focused': {
					backgroundColor: theme.palette.action.focus
				},
				'&.Mui-disabled': {
					backgroundColor: theme.palette.action.disabledBackground
				}
			}),
			underline: ({ theme }) => ({
				'&:before': {
					borderBottomColor: theme.palette.grey[500_56]
				}
			})
		}
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: ({ theme }) => ({
				'& .MuiOutlinedInput-notchedOutline': {
					borderColor: theme.palette.grey[500_32]
				},
				'&.Mui-disabled': {
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.action.disabledBackground
					}
				}
			})
		}
	}
}
