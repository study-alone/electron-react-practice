import * as React from 'react'
import { StarIcon } from '@theme/overrides/CustomIcons'

const ICON_SMALL = { width: 20, height: 20 }
const ICON_LARGE = { width: 28, height: 28 }

export const rating: ComponentTheme<'MuiRating'> = {
	MuiRating: {
		defaultProps: {
			emptyIcon: React.createElement(StarIcon),
			icon: React.createElement(StarIcon)
		},

		styleOverrides: {
			root: {
				'&.Mui-disabled': {
					opacity: 0.48
				}
			},
			iconEmpty: ({ theme }) => ({ color: theme.palette.grey[500_48] }),
			sizeSmall: { '& svg': { ...ICON_SMALL } },
			sizeLarge: { '& svg': { ...ICON_LARGE } }
		}
	}
}
