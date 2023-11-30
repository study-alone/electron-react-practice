import { faker } from '@faker-js/faker'
import { useContactToggle } from '@hooks/useContactToggle'
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography, styled } from '@mui/material'
import { isLight } from '@utils/isLight'
import { useDialog } from '@components/modal/core'
import { AntSwitch } from '@components/common/AntSwitch'
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react'
import { SharedMessages } from '@components/contact/SharedMessages'
import { StarredMessages } from '@components/contact/StarredMessages'

const userInfo = {
	avatar: faker.image.avatar(),
	name: faker.person.fullName(),
	photos: [
		{
			image: faker.image.urlLoremFlickr({ category: 'business' }),
			alt: faker.lorem.word()
		},
		{
			image: faker.image.urlLoremFlickr({ category: 'food' }),
			alt: faker.lorem.word()
		},
		{
			image: faker.image.urlLoremFlickr({ category: 'cats' }),
			alt: faker.lorem.word()
		}
	],
	group: {
		avatar: { image: faker.image.avatar(), alt: faker.person.fullName() }
	}
}

const ContactStyled = styled(Box)<{ open: boolean }>(({ theme, open }) => ({
	width: 320,
	height: '100vh',
	position: 'fixed',
	right: open ? 0 : -320,
	top: 0,
	zIndex: 30,
	backgroundColor: theme.palette.background.default,
	boxShadow: theme.shadows[10]
}))

const ContactHeaderStyled = styled(Box)(({ theme }) => ({
	boxShadow: theme.customShadows.fixedQuarter({ blur: 2 }),
	width: '100%',
	backgroundColor: isLight(theme) ? '#f8faff' : theme.palette.background.default
}))

export const Contact = () => {
	const { open, toggle, setType } = useContactToggle()
	const { openModal } = useDialog()

	const handleClose = () => {
		toggle()
	}

	const handleOpenShared = () => {
		setType('shared')
	}

	const handleOpenStarred = () => {
		setType('starred')
	}

	const handleOpenBlockDialog = () => {
		openModal('Block', {})
	}

	const handleOpenDeleteDialog = () => {
		openModal('Delete', {})
	}

	return (
		<ContactStyled open={open}>
			<Stack sx={{ height: '100%' }}>
				<ContactHeaderStyled>
					<Stack
						direction="row"
						p={2}
						spacing={3}
						sx={{
							height: '100%',
							alignItems: 'center',
							justifyContent: 'space-between'
						}}
					>
						<Typography variant="subtitle2">Contact Info</Typography>
						<IconButton onClick={handleClose}>
							<X />
						</IconButton>
					</Stack>
				</ContactHeaderStyled>
				<Stack
					p={3}
					spacing={3}
					sx={{
						height: '100%',
						position: 'relative',
						flexGrow: 1,
						overflowY: 'scroll'
					}}
				>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						<Avatar
							src={userInfo.avatar}
							alt={userInfo.name}
							sx={{ width: 64, height: 64 }}
						/>
						<Stack spacing={0.5}>
							<Typography variant="article" fontWeight={600}>
								{userInfo.name}
							</Typography>
							<Typography variant="body2" fontWeight={500}>
								+91 729 2829 2992
							</Typography>
						</Stack>
					</Stack>
					<Stack
						direction="row"
						sx={{ alignItems: 'center', justifyContent: 'space-evenly' }}
					>
						<Stack spacing={1} sx={{ alignItems: 'center' }}>
							<IconButton>
								<Phone />
							</IconButton>
							<Typography variant="overline">Voice</Typography>
						</Stack>
						<Stack spacing={1} sx={{ alignItems: 'center' }}>
							<IconButton>
								<VideoCamera />
							</IconButton>
							<Typography variant="overline">Video</Typography>
						</Stack>
					</Stack>
					<Divider />
					<Stack spacing={0.5}>
						<Typography variant="article">About</Typography>
						<Typography variant="body2">Imagination is th only limit!</Typography>
					</Stack>
					<Divider />
					<Stack
						direction="row"
						sx={{ alignItems: 'center', justifyContent: 'space-between' }}
					>
						<Typography variant="subtitle2">Media, Links & Docs</Typography>
						<Button endIcon={<CaretRight />} onClick={handleOpenShared}>
							401
						</Button>
					</Stack>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						{userInfo.photos.map((item) => (
							<Box key={`contact-images-${item.alt}`}>
								<img src={item.image} alt={item.alt} />
							</Box>
						))}
					</Stack>
					<Divider />
					<Stack
						direction="row"
						sx={{ alignItems: 'center', justifyContent: 'space-between' }}
					>
						<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
							<Star size={21} />
							<Typography variant="subtitle2">Starred Message</Typography>
						</Stack>
						<IconButton onClick={handleOpenStarred}>
							<CaretRight />
						</IconButton>
					</Stack>
					<Divider />
					<Stack
						direction="row"
						sx={{ alignItems: 'center', justifyContent: 'space-between' }}
					>
						<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
							<Bell size={21} />
							<Typography variant="subtitle2">Mute Notification</Typography>
						</Stack>
						<AntSwitch />
					</Stack>
					<Divider />
					<Typography>1 group in common</Typography>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						<Avatar src={userInfo.group.avatar.image} alt={userInfo.group.avatar.alt} />
						<Stack spacing={0.5}>
							<Typography variant="subtitle2">Comel`s Gang</Typography>
							<Typography variant="subtitle2">Owl, Parrot, Rabbit</Typography>
						</Stack>
					</Stack>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						<Button
							startIcon={<Prohibit />}
							fullWidth
							variant="outlined"
							onClick={handleOpenBlockDialog}
						>
							Bock
						</Button>
						<Button
							startIcon={<Trash />}
							fullWidth
							variant="outlined"
							onClick={handleOpenDeleteDialog}
						>
							Delete
						</Button>
					</Stack>
				</Stack>
			</Stack>
			<SharedMessages />
			<StarredMessages />
		</ContactStyled>
	)
}
