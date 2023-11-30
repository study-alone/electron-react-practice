import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

interface AuthState {
	isLogin: boolean
}

const { persistAtom } = recoilPersist()

export const authState = atom<AuthState>({
	key: '@auth',
	default: {
		isLogin: false
	},
	effects: [persistAtom]
})
