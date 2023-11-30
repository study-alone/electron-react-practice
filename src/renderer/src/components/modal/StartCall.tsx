import { CallLog } from '@components/CallLog'
import { SearchInput } from '@components/common/SearchInput'
import { Transition } from '@components/modal/misc/Transition'
import { Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import { membersList } from 'src/renderer/src/data'

export type StartCallProps = {
	onClose?(): void
}

const StartCall = ({ onClose }: StartCallProps) => {
	const handleClose = () => {
		typeof onClose === 'function' && onClose()
	}

	return (
		<Dialog
			open
			fullWidth
			maxWidth="xs"
			TransitionComponent={Transition}
			keepMounted
			sx={{ p: 4 }}
			onClose={handleClose}
		>
			<DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
			<DialogContent>
				<Stack spacing={2}>
					<Stack sx={{ width: '100%' }}>
						<SearchInput />
					</Stack>
					<Stack spacing={1}>
						{membersList.map((item) => (
							<CallLog key={item.id} {...item} />
						))}
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	)
}

export default StartCall
