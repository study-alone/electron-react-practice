import { HeaderStyled, SharedMessagesStyled } from '@components/contact/styled'
import { MessageWindow } from '@components/conversation/MessageWindow'
import { useContactToggle } from '@hooks/useContactToggle'
import { IconButton, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'

export const StarredMessages = () => {
	const { type, setType } = useContactToggle()

	const handleBackward = () => {
		setType('own')
	}

	if (type !== 'starred') return null

	return (
		<SharedMessagesStyled sx={{ display: 'flex', flexDirection: 'column' }}>
			<HeaderStyled>
				<Stack
					direction="row"
					p={2}
					spacing={3}
					sx={{ height: '100%', alignItems: 'center' }}
				>
					<IconButton onClick={handleBackward}>
						<CaretLeft />
					</IconButton>
					<Typography variant="subtitle2">Starred Message</Typography>
				</Stack>
			</HeaderStyled>
			<Stack
				p={3}
				spacing={3}
				sx={{ position: 'relative', flexGrow: 1, flexShrink: 1, overflowY: 'scroll' }}
			>
				<MessageWindow disableOptions />
			</Stack>
		</SharedMessagesStyled>
	)
}
