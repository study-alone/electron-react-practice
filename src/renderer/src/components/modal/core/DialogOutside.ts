import { useDialog } from '@components/modal/core/useDialog'

let useDialogRef: ReturnType<typeof useDialog>
export const DialogUtilsConfigurator: React.FC = () => {
	useDialogRef = useDialog()
	return null
}

export const DialogOutside = {
	alert(description: string, onConfirm: () => void = () => {}) {
		useDialogRef.openModal('Alert', {
			title: 'Fetch Error!!!',
			description,
			onConfirm
		})
	}
}
