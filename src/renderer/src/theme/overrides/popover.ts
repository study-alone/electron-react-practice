export const popover: ComponentTheme<'MuiPopover'> = {
	MuiPopover: {
		styleOverrides: {
			paper: ({ theme }) => ({
				boxShadow: theme.customShadows.dropdown,
				borderRadius: Number(theme.shape.borderRadius) * 1.5
			})
		}
	}
}
