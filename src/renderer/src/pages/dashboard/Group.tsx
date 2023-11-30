import { Stack, Typography, Link as MuiLink, IconButton, useTheme, Divider } from '@mui/material'
import { useDialog } from '@components/modal/core'
import { PageContainer } from '@components/styled'
import { SearchInput } from '@components/common/SearchInput'
import { Plus } from 'phosphor-react'
import { SimpleBarStyle } from '@components/common/Scrollbar'

import { chatList } from 'src/renderer/src/data'
import { ChatItem } from '@components/common/ChatItem'
import { SuspensePage } from '@components/common/SuspensePage'

const Group = () => {
	const { openModal } = useDialog()
	const { palette } = useTheme()

	const handleOpenCreateGroup = () => {
		openModal('CreateGroup')
	}

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* left */}
			<PageContainer>
				<Stack p={3} spacing={2} sx={{ flexGrow: 1, maxHeight: '100vh' }}>
					<Stack>
						<Typography variant="h4">Groups</Typography>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<SearchInput placeholder="Search..." />
					</Stack>
					<Stack
						direction="row"
						sx={{ justifyContent: 'space-between', alignItems: 'center' }}
					>
						<Typography variant="subtitle2" component={MuiLink}>
							Create New Group
						</Typography>
						<IconButton onClick={handleOpenCreateGroup}>
							<Plus color={palette.primary.main} />
						</IconButton>
					</Stack>
					<Divider />
					<Stack spacing={3} sx={{ flexGrow: 1, height: '100%' }}>
						<SimpleBarStyle timeout={100} clickOnTrack={false}>
							<Stack spacing={2.4}>
								<Typography variant="subtitle2" sx={{ color: '#676667' }}>
									Pinned
								</Typography>
								<Stack>
									{chatList
										.filter((item) => item.pinned)
										.map((item) => (
											<ChatItem key={item.id} {...item} />
										))}
								</Stack>
							</Stack>
							<Stack spacing={2.4} mt={3}>
								<Typography variant="subtitle2">All Groups</Typography>
								<Stack>
									{chatList
										.filter((item) => !item.pinned)
										.map((item) => (
											<ChatItem key={item.id} {...item} />
										))}
								</Stack>
							</Stack>
						</SimpleBarStyle>
					</Stack>
				</Stack>
			</PageContainer>
			{/* TODO: Reuse Conversation component */}
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<Group />
		</SuspensePage>
	)
}
