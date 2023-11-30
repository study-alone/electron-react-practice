import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import { useContactToggle } from '@hooks/useContactToggle'
import { BadgeStyled } from '@components/common/styled'
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from 'phosphor-react'
import { ConversationLayoutStyled } from '@components/conversation/styled'

type ConversationHeaderProps = {
	fullName: string
	avatar: string
}

export const ConversationHeader = ({ avatar, fullName }: ConversationHeaderProps) => {
	const { toggle } = useContactToggle()

	return (
		<ConversationLayoutStyled type="header" p={2}>
			<Stack
				direction="row"
				sx={{
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					height: '100%'
				}}
			>
				<Stack direction="row" spacing={2}>
					<Button onClick={toggle}>
						<Box>
							<BadgeStyled
								overlap="circular"
								variant="dot"
								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							>
								<Avatar alt={fullName} src={avatar} />
							</BadgeStyled>
						</Box>
					</Button>
					<Stack spacing={0.2}>
						<Typography variant="subtitle2">{fullName}</Typography>
						<Typography variant="caption">Online</Typography>
					</Stack>
				</Stack>
				<Stack direction="row" spacing={3} alignItems="center">
					<IconButton>
						<VideoCamera />
					</IconButton>
					<IconButton>
						<Phone />
					</IconButton>
					<IconButton>
						<MagnifyingGlass />
					</IconButton>
					<Divider orientation="vertical" flexItem />
					<IconButton>
						<CaretDown />
					</IconButton>
				</Stack>
			</Stack>
		</ConversationLayoutStyled>
	)
}
