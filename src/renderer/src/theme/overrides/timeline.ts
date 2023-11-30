export const timeline: ComponentTheme<'MuiTimelineDot' | 'MuiTimelineConnector'> = {
	MuiTimelineDot: {
		styleOverrides: {
			root: {
				boxShadow: 'none'
			}
		}
	},

	MuiTimelineConnector: {
		styleOverrides: {
			root: ({ theme }) => ({
				backgroundColor: theme.palette.divider
			})
		}
	}
}
