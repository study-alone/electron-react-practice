import { isLight } from '@utils/isLight'

declare module '@mui/material' {
	interface ButtonPropsVariantOverrides {
		containedNoneHover: true
	}
}

const getThemeProperty = ({ customShadows, palette }: BaseTheme) => ({
	customShadows,
	palette
})
const containedNoneHoverColor = (theme: BaseTheme) =>
	isLight(theme) ? theme.palette.common.white : theme.palette.grey[800]

export const button: ComponentTheme<'MuiButton'> = {
	MuiButton: {
		styleOverrides: {
			root: {
				'&:hover': {
					boxShadow: 'none'
				}
			},
			sizeLarge: {
				height: 48
			},
			// contained
			containedInherit: ({ theme }) => {
				const { palette, customShadows } = getThemeProperty(theme)
				return {
					color: palette.grey[800],
					boxShadow: customShadows.z8,
					'&:hover': {
						backgroundColor: palette.grey[400]
					}
				}
			},
			containedPrimary: ({ theme }) => ({
				boxShadow: getThemeProperty(theme).customShadows.primary
			}),
			containedSecondary: ({ theme }) => ({
				boxShadow: getThemeProperty(theme).customShadows.secondary
			}),
			containedInfo: ({ theme }) => ({
				boxShadow: getThemeProperty(theme).customShadows.info
			}),
			containedSuccess: ({ theme }) => ({
				boxShadow: getThemeProperty(theme).customShadows.success
			}),
			containedWarning: ({ theme }) => ({
				boxShadow: getThemeProperty(theme).customShadows.warning
			}),
			containedError: ({ theme }) => ({
				boxShadow: getThemeProperty(theme).customShadows.error
			}),
			// outlined
			outlinedInherit: ({ theme }) => ({
				border: `1px solid ${getThemeProperty(theme).palette.grey[500_32]}`,
				'&:hover': {
					backgroundColor: getThemeProperty(theme).palette.action.hover
				}
			}),
			textInherit: ({ theme }) => ({
				'&:hover': {
					backgroundColor: getThemeProperty(theme).palette.action.hover
				}
			})
		},
		variants: [
			{
				props: { variant: 'containedNoneHover' },
				style: ({ theme }) => {
					const backgroundColor = getThemeProperty(theme).palette.text.primary
					const color = containedNoneHoverColor(theme)
					return {
						backgroundColor,
						color,
						'&:hover': {
							backgroundColor,
							color
						}
					}
				}
			}
		]
	}
}
