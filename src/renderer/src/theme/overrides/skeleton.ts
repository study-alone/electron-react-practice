export const skeleton: ComponentTheme<'MuiSkeleton'> = {
	MuiSkeleton: {
		defaultProps: {
			animation: 'wave'
		},

		styleOverrides: {
			root: ({ theme }) => ({
				backgroundColor: theme.palette.background.neutral
			})
		}
	}
}
