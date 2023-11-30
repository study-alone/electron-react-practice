import { ButtonGroupProps } from '@mui/material'

const styleContained = (color: ButtonGroupProps['color']) => ({
	props: { variant: 'contained' as ButtonGroupProps['variant'], color },
	style: ({ theme }: { theme: BaseTheme }) => ({
		boxShadow: theme.customShadows[color as PaletteColorKey]
	})
})

export const buttonGroup: ComponentTheme<'MuiButtonGroup'> = {
	MuiButtonGroup: {
		variants: [
			{
				props: { variant: 'contained', color: 'inherit' },
				style: ({ theme }) => ({
					boxShadow: theme.customShadows.z8
				})
			},
			styleContained('primary'),
			styleContained('secondary'),
			styleContained('info'),
			styleContained('success'),
			styleContained('warning'),
			styleContained('error'),
			{
				props: { disabled: true },
				style: ({ theme }) => ({
					boxShadow: 'none',
					'& .MuiButtonGroup-grouped.Mui-disabled': {
						color: theme.palette.action.disabled,
						borderColor: `${theme.palette.action.disabledBackground} !important`,
						'&.MuiButton-contained': {
							backgroundColor: theme.palette.action.disabledBackground
						}
					}
				})
			}
		],

		styleOverrides: {
			root: {
				'&:hover': {
					boxShadow: 'none'
				}
			}
		}
	}
}
