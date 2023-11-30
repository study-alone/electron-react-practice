import { useCallback, useMemo, useState } from 'react'
import { ModalDispatchContext, ModalStateContext } from '@components/modal/core/context'
import type { ModalState, ModalDispatch } from '@components/modal/core/context'
import { Modals } from '@components/modal/core/Modal'
import { dialog } from '@components/modal'
import { DialogUtilsConfigurator } from '@components/modal/core/DialogOutside'

// const Modals = dynamic(() => import('@/lib/modal/Modal').then((module) => module.Modals), { ssr: false })

export const ModalProvider = ({ children }: React.PropsWithChildren) => {
	const [openModals, setOpenModals] = useState<ModalState[]>([])

	const open = useCallback<ModalDispatch['open']>((ComponentName, props) => {
		setOpenModals((modals) => {
			return [...modals, { Component: dialog[ComponentName], props: props || {} }]
		})
	}, [])

	const close = useCallback<ModalDispatch['close']>((ComponentName) => {
		setOpenModals((modals) => {
			// const Component = dialog[ComponentName]
			return modals.filter((modal) => modal.Component.name !== ComponentName)
		})
	}, [])

	const value = useMemo(() => ({ open, close }), [close, open])

	return (
		<ModalStateContext.Provider value={openModals}>
			<ModalDispatchContext.Provider value={value}>
				{children}
				<DialogUtilsConfigurator />
				<Modals />
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	)
}
