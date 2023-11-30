import { useDialog } from '@components/modal/core'
import { Avatar, Box, Divider, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { useCallback, useMemo } from 'react'
import {
	Bell,
	Lock,
	Key,
	PencilCircle,
	Image,
	Note,
	Keyboard,
	Info,
	CaretLeft
} from 'phosphor-react'
import { isLight } from '@utils/isLight'
import { faker } from '@faker-js/faker'
import { SuspensePage } from '@components/common/SuspensePage'

const profile = {
	avatar: faker.image.avatar(),
	firstName: faker.person.firstName(),
	description: faker.word.words(4)
}

const Settings = () => {
	const theme = useTheme()
	const { openModal } = useDialog()

	const handleOpenTheme = () => {
		/** not yet */
	}

	const handleOpenShortcuts = useCallback(() => {
		openModal('Shortcuts')
	}, [openModal])

	const options = useMemo(() => {
		return [
			{
				id: 0,
				Icon: Bell,
				title: 'Notifications',
				onClick: () => {
					/** nothing */
				}
			},
			{
				id: 1,
				Icon: Lock,
				title: 'Privacy',
				onClick: () => {
					/** nothing */
				}
			},
			{
				id: 2,
				Icon: Key,
				title: 'Security',
				onClick: () => {
					/** nothing */
				}
			},
			{
				id: 3,
				Icon: PencilCircle,
				title: 'Theme',
				onClick: handleOpenTheme
			},
			{
				id: 4,
				Icon: Image,
				title: 'Chat Wallpaper',
				onClick: () => {
					/** nothing */
				}
			},
			{
				id: 5,
				Icon: Note,
				title: 'Request Account Info',
				onClick: () => {
					/** nothing */
				}
			},
			{
				id: 6,
				Icon: Keyboard,
				title: 'Keyboard Shortcuts',
				onClick: handleOpenShortcuts
			},
			{
				id: 7,
				Icon: Info,
				title: 'Help',
				onClick: () => {
					/** nothing */
				}
			}
		]
	}, [handleOpenShortcuts])

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			{/* left pannel */}
			<Box
				sx={{
					overflowY: 'scroll',
					height: '100vh',
					width: 320,
					backgroundColor: isLight(theme) ? '#f8faff' : theme.palette.background.default,
					boxShadow: theme.shadows[10]
				}}
			>
				<Stack p={4} spacing={5}>
					{/* header */}
					<Stack direction="row" spacing={3} sx={{ alignItems: 'center' }}>
						<IconButton>
							<CaretLeft size={24} color="#4b4b4b" />
						</IconButton>
						<Typography variant="h4">Settings</Typography>
					</Stack>
					{/* profile */}
					<Stack direction="row" spacing={3}>
						<Avatar
							src={profile.avatar}
							alt={profile.firstName}
							sx={{ width: 56, height: 56 }}
						/>
						<Stack spacing={0.5}>
							<Typography variant="article">{profile.firstName}</Typography>
							<Typography variant="body2">{profile.description}</Typography>
						</Stack>
					</Stack>
					<Stack spacing={4}>
						{options.map(({ id, Icon, title, onClick }) => (
							<Stack
								spacing={2}
								onClick={onClick}
								key={id}
								sx={{ cursor: 'pointer' }}
							>
								<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
									<Icon size={20} />
									<Typography variant="body2">{title}</Typography>
								</Stack>
								{id !== options.length - 1 && <Divider />}
							</Stack>
						))}
					</Stack>
				</Stack>
			</Box>
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<Settings />
		</SuspensePage>
	)
}
