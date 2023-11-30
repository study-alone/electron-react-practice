import * as React from 'react'
import { ModalDispatchContext } from '@components/modal/core/context'
import { type DialogProps } from '@components/modal'

const useDialog = () => {
	const { open, close } = React.useContext(ModalDispatchContext)
	// const openModal = React.useCallback(
	// 	<T extends keyof DialogProps>(modalName: T, props: ComponentProps<T>) => {
	// 		open(modalName, props)
	// 	},
	// 	[open]
	// )
	const closeModal = React.useCallback(
		(modalName: keyof DialogProps) => {
			close(modalName)
		},
		[close]
	)

	return { openModal: open, closeModal }
}

export { useDialog }
