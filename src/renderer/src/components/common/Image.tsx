import { Box } from '@mui/material'
import type { BoxProps } from '@mui/material'

interface ImageProps {
	src: string
	alt: string
	sx?: BoxProps['sx']
}

export const Image = ({ src, alt, sx }: ImageProps) => {
	return (
		<Box sx={sx}>
			<img src={src} alt={alt} />
		</Box>
	)
}
