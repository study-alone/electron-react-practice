export const breadcrumbs: ComponentTheme<'MuiBreadcrumbs'> = {
	MuiBreadcrumbs: {
		styleOverrides: {
			separator: ({ theme }) => ({
				marginLeft: theme.spacing(2),
				marginRight: theme.spacing(2)
			})
		}
	}
}
