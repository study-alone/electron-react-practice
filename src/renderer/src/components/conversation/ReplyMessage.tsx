import { MessageOptions } from '@components/conversation/MessageOptions'
import { Box, Stack, Typography, useTheme } from '@mui/material'

type ReplyMessageProps = {
	incoming?: boolean
	message?: string
	reply?: string
	disableOptions?: boolean
}

export const ReplyMessage = ({ disableOptions, incoming, message, reply }: ReplyMessageProps) => {
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
				<Stack spacing={2}>
					<Stack
						p={2}
						direction="column"
						spacing={3}
						sx={{
							alignItems: 'center',
							backgroundColor: palette.background.paper,
							borderRadius: 1
						}}
					>
						<Typography variant="body2" color={palette.text.primary}>
							{message}
						</Typography>
					</Stack>
					<Typography
						variant="body2"
						color={incoming ? palette.text.primary : palette.common.white}
					>
						{reply}
					</Typography>
				</Stack>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
