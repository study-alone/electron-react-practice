import { useState } from 'react'
import {
	Box,
	Fab,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Tooltip,
	inputBaseClasses,
	styled
} from '@mui/material'
import { User, File, Image, Sticker, Camera, LinkSimple, Smiley } from 'phosphor-react'
import { EmojiPicker } from '@components/common/EmojiPicker'

const actions = [
	{
		color: '#4da5fe',
		Icon: Image,
		title: 'Photo/Video'
	},
	{
		color: '#1b8cfe',
		Icon: Sticker,
		title: 'Stickers'
	},
	{
		color: '#0172e4',
		Icon: Camera,
		title: 'Image'
	},
	{
		color: '#0159b2',
		Icon: File,
		title: 'Document'
	},
	{
		color: '#013f7f',
		Icon: User,
		title: 'Contact'
	}
]

const InputStyled = styled(TextField)(() => ({
	[`& .${inputBaseClasses.input}`]: {
		padding: '12px',
		paddingBottom: '12px'
	}
}))

export const ChatInput = () => {
	const [emojiOpen, setEmojiOpen] = useState(false)
	const [actionsOpen, setActionsOpen] = useState(false)

	const handleClickEmoji = () => {
		setEmojiOpen((open) => !open)
	}

	const handleCloseEmojiPicker = () => {
		setEmojiOpen(false)
	}

	const handleClickActionsOpen = () => {
		setActionsOpen((open) => !open)
	}

	return (
		<InputStyled
			fullWidth
			placeholder="Write a message..."
			variant="filled"
			InputProps={{
				disableUnderline: true,
				startAdornment: (
					<Stack sx={{ width: 'max-content', position: 'relative' }}>
						<Stack
							sx={{
								position: 'absolute',
								bottom: 60,
								display: actionsOpen ? 'block' : 'none'
							}}
						>
							{actions.map(({ title, Icon, color }) => (
								<Tooltip
									title={title}
									placement="right"
									key={`link-action-list-${title}`}
								>
									<Fab sx={{ backgroundColor: color, marginBottom: '16px' }}>
										<Icon size={24} />
									</Fab>
								</Tooltip>
							))}
						</Stack>
						<IconButton onClick={handleClickActionsOpen}>
							<LinkSimple />
						</IconButton>
					</Stack>
				),
				endAdornment: (
					<InputAdornment position="end">
						<Box
							sx={{
								display: emojiOpen ? 'block' : 'none',
								zIndex: 10,
								position: 'fixed',
								bottom: 81,
								right: 100
							}}
						>
							<EmojiPicker
								onSelect={console.log}
								open={emojiOpen}
								onClickOutside={handleCloseEmojiPicker}
							/>
						</Box>
						<IconButton onClick={handleClickEmoji}>
							<Smiley />
						</IconButton>
					</InputAdornment>
				)
			}}
		/>
	)
}
