export const stepper: ComponentTheme<'MuiStepConnector'> = {
	MuiStepConnector: {
		styleOverrides: {
			line: ({ theme }) => ({
				borderColor: theme.palette.divider
			})
		}
	}
}
