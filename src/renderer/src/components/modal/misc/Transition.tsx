import { forwardRef } from 'react'
import { Slide } from '@mui/material'

import type { SlideProps } from '@mui/material'

export const Transition = forwardRef<typeof Slide, SlideProps>(function Transition(
	{ children, ...restProps },
	ref
) {
	return (
		<Slide direction="up" ref={ref} {...restProps}>
			{children}
		</Slide>
	)
})
