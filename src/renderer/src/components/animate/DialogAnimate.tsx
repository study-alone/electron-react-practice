import { m, AnimatePresence } from 'framer-motion'
import { Dialog, Box, Paper } from '@mui/material'
import { varFade } from '@components/animate/variants'

import type { PaperProps } from '@mui/material'

interface DialogAnimateProps extends React.PropsWithChildren {
	onClose: React.MouseEventHandler
	open: boolean
	sx?: PaperProps['sx']
	variants?: object
}

export const DialogAnimate = ({
	open,
	onClose,
	sx,
	variants,
	children,
	...other
}: DialogAnimateProps) => {
	return (
		<AnimatePresence>
			{open && (
				<Dialog
					fullWidth
					maxWidth="xs"
					open={open}
					onClose={onClose}
					PaperComponent={(props) => (
						<Box
							component={m.div}
							{...(variants ||
								varFade({
									distance: 120,
									durationIn: 0.32,
									durationOut: 0.24,
									easeIn: 'easeInOut'
								}).inUp)}
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center'
							}}
						>
							<Box
								onClick={onClose}
								sx={{ width: '100%', height: '100%', position: 'fixed' }}
							/>
							<Paper sx={sx} {...props}>
								{props.children}
							</Paper>
						</Box>
					)}
					{...other}
				>
					{children}
				</Dialog>
			)}
		</AnimatePresence>
	)
}
