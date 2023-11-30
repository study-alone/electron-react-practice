import { alpha } from '@mui/material'

const style = (color: PaletteColorKey) => ({
	props: { color },
	style: ({ theme }: { theme: BaseTheme }) => ({
		'&:hover': {
			borderColor: alpha(theme.palette[color].main, 0.48),
			backgroundColor: alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
		},
		'&.Mui-selected': {
			borderColor: alpha(theme.palette[color].main, 0.48)
		}
	})
})

export const toggleButton: ComponentTheme<'MuiToggleButton' | 'MuiToggleButtonGroup'> = {
	MuiToggleButton: {
		variants: [
			{
				props: { color: 'standard' },
				style: ({ theme }) => ({
					'&.Mui-selected': {
						backgroundColor: theme.palette.action.selected
					}
				})
			},
			style('primary'),
			style('secondary'),
			style('info'),
			style('success'),
			style('warning'),
			style('error')
		]
	},
	MuiToggleButtonGroup: {
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
				backgroundColor: theme.palette.background.paper,
				border: `solid 1px ${theme.palette.grey[500_12]}`,
				'& .MuiToggleButton-root': {
					margin: 4,
					borderColor: 'transparent !important',
					borderRadius: `${theme.shape.borderRadius}px !important`
				}
			})
		}
	}
}
