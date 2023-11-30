import { atom } from 'recoil'

export type ContactType = 'own' | 'shared' | 'starred'

interface UiState {
	contact: {
		open: boolean
		type: ContactType
	}
}

export const uiState = atom<UiState>({
	key: '@ui',
	default: {
		contact: {
			open: false,
			type: 'own'
		}
	}
})
