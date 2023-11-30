import { MessageOptions } from '@components/conversation/MessageOptions'
import { Box, Stack, Typography, useTheme } from '@mui/material'

type TextMessageProps = {
	message?: string
	incoming?: boolean
	disableOptions?: boolean
}
export const TextMessage = ({ disableOptions, incoming, message }: TextMessageProps) => {
	const { palette, shadows } = useTheme()

	return (
		<Stack direction="row" sx={{ justifyContent: incoming ? 'start' : 'end' }}>
			<Box
				p={1.5}
				sx={{
					backgroundColor: incoming ? palette.background.default : palette.primary.main,
					borderRadius: 1.5,
					width: 'max-content',
					boxShadow: shadows[5]
				}}
			>
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
