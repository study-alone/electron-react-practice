import * as React from 'react'
import {
	CheckboxCheckedIcon,
	CheckboxIcon,
	CheckboxIndeterminateIcon
} from '@theme/overrides/CustomIcons'

export const checkbox: ComponentTheme<'MuiCheckbox'> = {
	MuiCheckbox: {
		defaultProps: {
			icon: React.createElement(CheckboxIcon),
			checkedIcon: React.createElement(CheckboxCheckedIcon),
			indeterminateIcon: React.createElement(CheckboxIndeterminateIcon)
		},

		styleOverrides: {
			root: ({ theme }) => ({
				padding: theme.spacing(1),
				'&.Mui-checked.Mui-disabled, &.Mui-disabled': {
					color: theme.palette.action.disabled
				},
				'& .MuiSvgIcon-fontSizeMedium': {
					width: 24,
					height: 24
				},
				'& .MuiSvgIcon-fontSizeSmall': {
					width: 20,
					height: 20
				},
				svg: {
					fontSize: 24,
					'&[font-size=small]': {
						fontSize: 20
					}
				}
			})
		}
	}
}
