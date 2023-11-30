import { createContext } from 'react'
import { type ComponentType, type ComponentProps, type DialogProps } from '@components/modal'

export type ModalState = {
	Component: ComponentType
	props: ComponentProps<keyof DialogProps>
}

export type ModalDispatch = {
	open(Component: keyof DialogProps, props?: React.ComponentProps<ComponentType>): void
	close(Component: keyof DialogProps): void
}

export const ModalDispatchContext = createContext<ModalDispatch>({
	open: () => {
		/** nothing */
	},
	close: () => {
		/** nothing */
	}
})
export const ModalStateContext = createContext<ModalState[]>([])
