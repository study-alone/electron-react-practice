import type {} from '@mui/material'

declare module '@mui/material' {
	interface TypographyPropsVariantOverrides {
		article?: true
	}
}

export const typography: ComponentTheme<'MuiTypography'> = {
	MuiTypography: {
		styleOverrides: {
			paragraph: ({ theme }) => ({
				marginBottom: theme.spacing(2)
			}),
			gutterBottom: ({ theme }) => ({
				marginBottom: theme.spacing(1)
			})
		},
		variants: [
			{
				props: { variant: 'article' },
				style: {
					fontWeight: 700
				}
			}
		]
	}
}
