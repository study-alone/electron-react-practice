import { lazy } from 'react'
import type { BlockProps } from '@components/modal/Block'
import type { DeleteProps } from '@components/modal/Delete'
import type { AlertProps } from '@components/modal/Alert'
import type { ShortcutsProps } from '@components/modal/Shortcuts'
import type { CreateGroupProps } from '@components/modal/CreateGroup'
import { StartCallProps } from '@components/modal/StartCall'

export type DialogProps = {
	Alert: AlertProps
	Block: BlockProps
	Delete: DeleteProps
	Shortcuts: ShortcutsProps
	CreateGroup: CreateGroupProps
	StartCall: StartCallProps
}

const dialog = {
	// 공통으로 사용
	Alert: lazy(() => import('@components/modal/Alert')),

	Block: lazy(() => import('@components/modal/Block')),
	Delete: lazy(() => import('@components/modal/Delete')),
	Shortcuts: lazy(() => import('@components/modal/Shortcuts')),
	CreateGroup: lazy(() => import('@components/modal/CreateGroup')),
	StartCall: lazy(() => import('@components/modal/StartCall'))
} as const

// Object.entries(dialog).forEach(([componentName, Component]) => {
// 	// eslint-disable-next-line no-param-reassign
// 	Component.displayName = componentName
// })

export { dialog }

export type ComponentType = (typeof dialog)[keyof DialogProps]
export type ComponentProps<K extends keyof DialogProps> = DialogProps[K]
