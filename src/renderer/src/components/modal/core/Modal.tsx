import React, { Suspense, useContext, useEffect } from 'react'
import { omit } from 'lodash-es'
import { Portal } from '@mui/material'
import { ModalDispatchContext, ModalStateContext } from '@components/modal/core/context'

import { type DialogProps } from '@components/modal'

export interface ModalProps {
	onClose(): void
	onSubmit?(...args: unknown[]): Promise<void>
}

interface ModalsProps {
	selector?: string
}

export const Modals: React.FC<ModalsProps> = ({ selector = 'modal-container' }) => {
	const modals = useContext(ModalStateContext)
	const { close } = useContext(ModalDispatchContext)

	let element: HTMLDivElement | null = null
	element =
		document.querySelector(selector) ??
		(() => {
			const modalContainer = document.createElement('div')
			modalContainer.id = selector
			return modalContainer
		})()

	useEffect(() => {
		if (modals.length) {
			document.body.classList.add('scroll-y-lock')
		} else {
			document.body.classList.remove('scroll-y-lock')
		}
	}, [modals.length])

	return (
		<>
			{modals.map(({ Component, props }, index) => {
				const onClose = () => {
					if (typeof props?.onClose === 'function') {
						props.onClose()
					}

					close(Component.name as keyof DialogProps)
				}
				const handleSubmit = async (...args: unknown[]) => {
					if (props) {
						if ('onSubmit' in props && typeof props.onSubmit === 'function') {
							await props.onSubmit(...args)
						}
						onClose()
					}
				}

				const restProps = {
					open: true,
					onClose,
					onSubmit: handleSubmit,
					...omit(props, ['onSubmit', 'onClose'])
				}

				return (
					element && (
						<Portal key={`modal-${index}`} container={element} disablePortal>
							<Suspense>
								{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
								{/* @ts-ignore */}
								<Component {...restProps} />
							</Suspense>
						</Portal>
					)
				)
			})}
		</>
	)
}
