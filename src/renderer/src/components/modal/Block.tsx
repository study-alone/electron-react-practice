import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle
} from '@mui/material'
import { Transition } from '@components/modal/misc/Transition'

export type BlockProps = {
	onClose?(): void
}

const Block = (props: BlockProps) => {
	const handleClose = () => {
		typeof props?.onClose === 'function' && props.onClose()
	}

	return (
		<Dialog
			open={true}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>Block this chat</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Are you sure you want to block this Contact?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Disagree</Button>
				<Button onClick={handleClose}>Agree</Button>
			</DialogActions>
		</Dialog>
	)
}

export default Block
