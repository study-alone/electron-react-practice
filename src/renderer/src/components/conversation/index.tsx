import { faker } from '@faker-js/faker'
import { Box, Stack, styled } from '@mui/material'
import { isLight } from '@utils/isLight'
import { ConversationHeader } from '@components/conversation/ConversationHeader'
import { MessageWindow } from '@components/conversation/MessageWindow'
import { ConversationFooter } from '@components/conversation/ConversationFooter'

const ConversationStyled = styled(Box)(({ theme }) => ({
	height: '100%',
	width: 'auto',
	backgroundColor: isLight(theme) ? '#f0f4fa' : theme.palette.background.paper,
	flexGrow: 1
}))

// conversation partner
const chatUser = {
	fullName: faker.person.fullName(),
	avatar: faker.image.avatar()
}

export const Conversation = () => {
	return (
		<ConversationStyled>
			<Stack sx={{ height: '100%', maxHeight: '100vh', width: 'auto' }}>
				{/* header */}
				<ConversationHeader fullName={chatUser.fullName} avatar={chatUser.avatar} />
				{/* message */}
				<Box sx={{ width: '100%', flexGrow: 1 }}>
					<MessageWindow />
				</Box>
				{/* footer */}
				<ConversationFooter />
			</Stack>
		</ConversationStyled>
	)
}
