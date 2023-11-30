import { useState } from 'react'
import { Button, alpha } from '@mui/material'
import { Iconify } from '@components/common/Iconify'

export const SettingFullscreen = () => {
	const [fullscreen, setFullscreen] = useState(false)
	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
			setFullscreen(true)
		} else if (document.exitFullscreen) {
			document.exitFullscreen()
			setFullscreen(false)
		}
	}

	return (
		<Button
			fullWidth
			size="large"
			variant="outlined"
			color={fullscreen ? 'primary' : 'inherit'}
			startIcon={
				<Iconify icon={fullscreen ? 'ic:round-fullscreen-exit' : 'ic:round-fullscreen'} />
			}
			onClick={toggleFullscreen}
			sx={{
				fontSize: 14,
				...(fullscreen && {
					bgcolor: (theme) =>
						alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
				})
			}}
		>
			{fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
		</Button>
	)
}
