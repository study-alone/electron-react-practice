import { Transition } from '@components/modal/misc/Transition'
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@mui/material'

export type AlertProps = {
	title?: string
	description: string
	onConfirm(): void
	onClose?(): void
}

const Alert = ({ description, onConfirm, title, onClose }: AlertProps) => {
	const handleClose = () => {
		typeof onClose === 'function' && onClose()
	}

	const handleConfirm = () => {
		onConfirm()
	}

	return (
		<Dialog
			open={true}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>{title ? title : 'Alert'}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					{description}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Disagree</Button>
				<Button onClick={handleConfirm}>Agree</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Alert
