import { Avatar, Badge, Box, Stack, Typography, styled } from '@mui/material'
import { OptionalWrapper } from '@components/common/OptionalWrapper'
import { memo } from 'react'
import { BadgeStyled } from '@components/common/styled'
import { isLight } from '@utils/isLight'

type ChatItemProps = {
	id: number
	img: string
	name: string
	msg: string
	time: string
	unread: number
	pinned: boolean
	online: boolean
}

export const ChatItem = memo<ChatItemProps>(({ img, name, msg, time, unread, online }) => {
	return (
		<Box sx={{ pb: 2 }}>
			<ChatItemStyled>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<Stack direction="row" spacing={2}>
						<OptionalWrapper
							condition={online}
							component={BadgeStyled}
							variant="dot"
							overlap="circular"
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
						>
							<Avatar src={img} />
						</OptionalWrapper>
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">{name}</Typography>
							<Typography variant="caption">{msg}</Typography>
						</Stack>
					</Stack>
					<Stack spacing={2} alignItems="center">
						<Typography sx={{ fontWeight: 600 }} variant="caption">
							{time}
						</Typography>
						<Badge color="primary" badgeContent={unread} />
					</Stack>
				</Stack>
			</ChatItemStyled>
		</Box>
	)
})
ChatItem.displayName = 'ChatItem'

const ChatItemStyled = styled(Box)(({ theme }) => ({
	width: '100%',
	borderRadius: 8,
	backgroundColor: isLight(theme) ? theme.palette.common.white : theme.palette.background.paper,
	boxShadow: theme.shadows[5],
	padding: 16
}))
