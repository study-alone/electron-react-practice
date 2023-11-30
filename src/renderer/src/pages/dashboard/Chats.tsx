import { Box, IconButton, Stack, Typography, styled, Button, Divider } from '@mui/material'
import { ArchiveBox, CircleDashed } from 'phosphor-react'
import { SearchInput } from '@components/common/SearchInput'
import { SimpleBarStyle } from '@components/common/Scrollbar'
import { ChatItem } from '@components/common/ChatItem'
import { chatList } from '../../data'
import { isLight } from '@utils/isLight'

const ChatsStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	zIndex: 30,
	minHeight: '100%',
	width: 320,
	backgroundColor: isLight(theme) ? '#f8faff' : theme.palette.background.default,
	boxShadow: theme.customShadows.fixedQuarter({ blur: 2 }),
	flexShrink: 0
}))

export const Chats = () => {
	return (
		<ChatsStyled>
			<Stack p={3} spacing={2} height="100vh">
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Typography variant="h4">Chats</Typography>
					<IconButton>
						<CircleDashed />
					</IconButton>
				</Stack>
				<Stack sx={{ width: '100%' }}>
					<SearchInput />
				</Stack>
				<Stack spacing={1}>
					<Stack direction="row" alignItems="center" spacing={1.5}>
						<ArchiveBox size={24} />
						<Button>Archive</Button>
					</Stack>
					<Divider />
				</Stack>
				<Stack
					direction="column"
					sx={{
						flexGrow: 1,
						overflow: 'hidden',
						height: '100%',
						marginRight: '-24px'
					}}
				>
					<SimpleBarStyle timeout={100} clickOnTrack={false}>
						<Stack spacing={2.4}>
							<Typography variant="subtitle2" sx={{ color: '#676767' }}>
								Pinned
							</Typography>
							<Stack>
								{chatList
									.filter((item) => item.pinned)
									.map((item, index) => (
										<ChatItem {...item} key={`pinned-chat-item-${index}`} />
									))}
							</Stack>
						</Stack>
						<Stack spacing={2.4} my={4}>
							<Typography variant="subtitle2" sx={{ color: '#676767' }}>
								All Chats
							</Typography>
							<Stack>
								{chatList
									.filter((item) => !item.pinned)
									.map((item, index) => (
										<ChatItem {...item} key={`pinned-chat-item-${index}`} />
									))}
							</Stack>
						</Stack>
					</SimpleBarStyle>
				</Stack>
			</Stack>
		</ChatsStyled>
	)
}
