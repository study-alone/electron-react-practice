import { Icon } from '@iconify/react'
import { Box } from '@mui/material'

import type { BoxProps } from '@mui/material'
import type { IconifyIcon } from '@iconify/react'

// ----------------------------------------------------------------------

interface IconifyProps {
	icon: IconifyIcon | string
	sx?: BoxProps['sx']
	width?: number
	height?: number
}

export const Iconify = ({ icon, sx, width, height }: IconifyProps) => {
	return <Box component={Icon} icon={icon} sx={{ ...sx }} width={width} height={height} />
}
