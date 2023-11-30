export const menu: ComponentTheme<'MuiMenuItem'> = {
	MuiMenuItem: {
		styleOverrides: {
			root: ({ theme }) => ({
				fontSize: 14,
				fontWeight: 600,
				'&.Mui-selected': {
					backgroundColor: theme.palette.action.selected,
					'&:hover': {
						backgroundColor: theme.palette.action.hover
					}
				}
			})
		}
	}
}
