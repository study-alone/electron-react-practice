import { useCallback } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { ContactType, uiState } from '@store/ui'

export const useContactToggle = () => {
	const setUi = useSetRecoilState(uiState)
	const ui = useRecoilValue(uiState)

	const toggle = useCallback(() => {
		setUi((prevState) => ({
			contact: {
				open: !prevState.contact.open,
				type: 'own'
			}
		}))
	}, [setUi])

	const setType = useCallback(
		(type: ContactType) => {
			setUi((prevState) => ({
				contact: {
					open: prevState.contact.open,
					type
				}
			}))
		},
		[setUi]
	)

	return {
		open: ui.contact.open,
		type: ui.contact.type,
		setType,
		toggle
	}
}
