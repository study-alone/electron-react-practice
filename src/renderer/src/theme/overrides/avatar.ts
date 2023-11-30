export const avatar: ComponentTheme<'MuiAvatar' | 'MuiAvatarGroup'> = {
	MuiAvatar: {
		styleOverrides: {
			colorDefault: ({ theme }) => ({
				color: theme.palette.text.secondary,
				backgroundColor: theme.palette.grey[400]
			})
		}
	},
	MuiAvatarGroup: {
		styleOverrides: {
			avatar: ({ theme }) => ({
				fontSize: 16,
				fontWeight: theme.typography.fontWeightMedium,
				'&:first-of-type': {
					fontSize: 14,
					color: theme.palette.primary.main,
					backgroundColor: theme.palette.primary.lighter
				}
			})
		}
	}
}
