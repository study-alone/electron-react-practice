import * as React from 'react'
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@theme/overrides/CustomIcons'
import { isLight } from '@utils/isLight'

// ----------------------------------------------------------------------

type ColorKey = 'info' | 'success' | 'warning' | 'error'

const standardStyle = (theme: BaseTheme, color: ColorKey) => {
	const light = isLight(theme)
	return {
		color: theme.palette[color][light ? 'darker' : 'lighter'],
		backgroundColor: theme.palette[color][light ? 'lighter' : 'darker'],
		'& .MuiAlert-icon': {
			color: theme.palette[color][light ? 'main' : 'light']
		}
	}
}

const filledStyle = (theme: BaseTheme, color: ColorKey) => ({
	color: theme.palette[color].contrastText
})

const outlinedStyle = (theme: BaseTheme, color: ColorKey) => {
	const light = isLight(theme)
	return {
		color: theme.palette[color][light ? 'darker' : 'lighter'],
		border: `solid 1px ${theme.palette[color][light ? 'light' : 'dark']}`,
		backgroundColor: theme.palette[color][light ? 'lighter' : 'darker'],
		'& .MuiAlert-icon': {
			color: theme.palette[color][light ? 'main' : 'light']
		}
	}
}

export const alert: ComponentTheme<'MuiAlert'> = {
	MuiAlert: {
		defaultProps: {
			iconMapping: {
				info: React.createElement(InfoIcon),
				success: React.createElement(SuccessIcon),
				warning: React.createElement(WarningIcon),
				error: React.createElement(ErrorIcon)
			}
		},

		styleOverrides: {
			message: ({ theme }) => ({
				'& .MuiAlertTitle-root': {
					marginBottom: theme.spacing(0.5)
				}
			}),
			action: ({ theme }) => ({
				'& button:not(:first-of-type)': {
					marginLeft: theme.spacing(1)
				}
			}),

			standardInfo: ({ theme }) => standardStyle(theme, 'info'),
			standardSuccess: ({ theme }) => standardStyle(theme, 'success'),
			standardWarning: ({ theme }) => standardStyle(theme, 'warning'),
			standardError: ({ theme }) => standardStyle(theme, 'error'),

			filledInfo: ({ theme }) => filledStyle(theme, 'info'),
			filledSuccess: ({ theme }) => filledStyle(theme, 'success'),
			filledWarning: ({ theme }) => filledStyle(theme, 'warning'),
			filledError: ({ theme }) => filledStyle(theme, 'error'),

			outlinedInfo: ({ theme }) => outlinedStyle(theme, 'info'),
			outlinedSuccess: ({ theme }) => outlinedStyle(theme, 'success'),
			outlinedWarning: ({ theme }) => outlinedStyle(theme, 'warning'),
			outlinedError: ({ theme }) => outlinedStyle(theme, 'error')
		}
	}
}
