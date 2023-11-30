import { Stack } from '@mui/material'
import { Chats } from '@pages/dashboard/Chats'
import { Conversation } from '@components/conversation'
import { Contact } from '@components/contact'
import { SuspensePage } from '@components/common/SuspensePage'

const GeneralApp = () => {
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			<Chats />
			<Conversation />
			<Contact />
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<GeneralApp />
		</SuspensePage>
	)
}
