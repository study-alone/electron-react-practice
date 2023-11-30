import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { authState } from '@store/auth'

export const useAuth = () => {
	const [{ isLogin }, setState] = useRecoilState(authState)

	const setAuth = useCallback(
		(isLogin: boolean) => {
			setState({ isLogin })
		},
		[setState]
	)

	return { isLogin, setAuth }
}
