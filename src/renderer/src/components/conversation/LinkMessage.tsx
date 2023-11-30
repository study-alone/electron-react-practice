import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Link } from '@components/common/Link'
import { MessageOptions } from '@components/conversation/MessageOptions'

type LinkMessageProps = {
	incoming?: boolean
	preview?: string
	message?: string
	disableOptions?: boolean
}

export const LinkMessage = ({ disableOptions, incoming, message, preview }: LinkMessageProps) => {
	const { palette } = useTheme()

	return (
		<Stack
			direction="row"
			sx={{ justifyContent: incoming ? 'start' : 'end', alignItems: 'start' }}
		>
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
						spacing={3}
						sx={{
							alignItems: 'start',
							backgroundColor: palette.background.paper,
							borderRadius: 1
						}}
					>
						<img
							src={preview}
							alt={message}
							style={{ maxHeight: 210, borderRadius: '10px' }}
						/>
						<Stack sx={{ justifyContent: 'start' }}>
							<Typography variant="subtitle2">Creating Slacky</Typography>
							<Typography
								variant="subtitle2"
								component={Link}
								to="https://www.youtube.com"
								target="_blank"
							>
								www.youtube.com
							</Typography>
						</Stack>
						<Typography
							variant="body2"
							color={incoming ? palette.text.primary : palette.common.white}
						>
							{message}
						</Typography>
					</Stack>
				</Stack>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
