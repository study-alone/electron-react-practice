declare module '@mui/material' {
	interface DividerPropsVariantOverrides {
		dashed: true
		dashedAndSpacing: true
	}
}

export const divider: ComponentTheme<'MuiDivider'> = {
	MuiDivider: {
		variants: [
			{
				props: { variant: 'dashedAndSpacing' },
				style: ({ theme }) => ({
					...theme.typography.overline,
					marginTop: theme.spacing(2.5),
					marginBottom: theme.spacing(2.5),
					color: theme.palette.text.disabled,
					'&::before, &::after': {
						borderTopStyle: 'dashed'
					}
				})
			},
			{
				props: { variant: 'dashed' },
				style: {
					borderStyle: 'dashed'
				}
			}
		]
	}
}
