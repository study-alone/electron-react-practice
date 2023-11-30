import SimpleBarReact from 'simplebar-react'
// @mui
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

import 'simplebar-react/dist/simplebar.min.css'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
	flexGrow: 1,
	height: '100%',
	overflowY: 'scroll'
}))

export const SimpleBarStyle = styled(SimpleBarReact)<{ timeout?: number }>(
	({ theme, timeout = 0 }) => ({
		minHeight: '100%',
		paddingRight: '24px',
		'& .simplebar-scrollbar': {
			'&:before': {
				backgroundColor: alpha(theme.palette.grey[600], 0.48),
				transitionDelay: `${timeout}ms`
			},
			'&.simplebar-visible:before': {
				opacity: 1
			}
		},
		'& .simplebar-track.simplebar-vertical': {
			width: 10
		},
		'& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
			height: 6
		},
		'& .simplebar-mask': {
			zIndex: 'inherit'
		},
		'& .simplebar-placeholder': {
			height: '0 !important'
		}
	})
)

// ----------------------------------------------------------------------

interface ScrollbarProps extends React.PropsWithChildren {
	sx?: BoxProps['sx']
}

export const Scrollbar = ({ children, sx }: ScrollbarProps) => {
	const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

	const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		userAgent
	)

	if (isMobile) {
		return <Box sx={{ overflowX: 'auto', ...sx }}>{children}</Box>
	}

	return (
		<RootStyle>
			<SimpleBarStyle sx={sx}>{children}</SimpleBarStyle>
		</RootStyle>
	)
}
