import type {} from '@mui/lab/themeAugmentation'

export const loadingButton: ComponentTheme<'MuiLoadingButton'> = {
	MuiLoadingButton: {
		styleOverrides: {
			root: {
				'&.MuiButton-text': {
					'& .MuiLoadingButton-startIconPendingStart': {
						marginLeft: 0
					},
					'& .MuiLoadingButton-endIconPendingEnd': {
						marginRight: 0
					}
				}
			}
		}
	}
}
