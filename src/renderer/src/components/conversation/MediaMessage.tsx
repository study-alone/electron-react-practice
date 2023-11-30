import { Box, Stack, Typography, useTheme } from '@mui/material'
import { MessageOptions } from '@components/conversation/MessageOptions'

type MediaMessageProps = {
	incoming?: boolean
	img?: string
	message?: string
	disableOptions?: boolean
}

export const MediaMessage = ({ disableOptions, img, incoming, message }: MediaMessageProps) => {
	const { palette } = useTheme()
	return (
		<Stack direction="row" sx={{ justifyContent: incoming ? 'start' : 'end' }}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: incoming ? palette.background.default : palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content'
				}}
			>
				<Stack spacing={1}>
					<img src={img} alt={message} style={{ maxHeight: 210, borderRadius: '10px' }} />
				</Stack>
				<Typography
					variant="body2"
					color={incoming ? palette.text.primary : palette.common.white}
				>
					{message}
				</Typography>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
