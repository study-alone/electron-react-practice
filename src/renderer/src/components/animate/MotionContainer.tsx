import { m } from 'framer-motion'
// @mui
import { Box } from '@mui/material'
//
import { varContainer } from '@components/animate/variants'

// ----------------------------------------------------------------------

interface MotionContainerProp extends React.PropsWithChildren {
	action?: boolean
	animate?: boolean
}

export const MotionContainer = ({
	animate,
	action = false,
	children,
	...other
}: MotionContainerProp) => {
	if (action) {
		return (
			<Box
				component={m.div}
				initial={false}
				animate={animate ? 'animate' : 'exit'}
				variants={varContainer()}
				{...other}
			>
				{children}
			</Box>
		)
	}

	return (
		<Box
			component={m.div}
			initial="initial"
			animate="animate"
			exit="exit"
			variants={varContainer()}
			{...other}
		>
			{children}
		</Box>
	)
}
