import { MessageOptions } from '@components/conversation/MessageOptions'
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react'

type DocumentMessageProps = {
	incoming?: boolean
	message?: string
	disableOptions?: boolean
}

export const DocumentMessage = ({ disableOptions, incoming, message }: DocumentMessageProps) => {
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
						direction="row"
						spacing={3}
						sx={{
							alignItems: 'center',
							borderRadius: 1,
							backgroundColor: palette.background.paper
						}}
					>
						<Image size={48} />
						<Typography>Abstract.png</Typography>
						<IconButton>
							<DownloadSimple />
						</IconButton>
					</Stack>
					<Typography
						variant="body2"
						sx={{ color: incoming ? palette.text.primary : palette.common.white }}
					>
						{message}
					</Typography>
				</Stack>
			</Box>
			{!disableOptions && <MessageOptions />}
		</Stack>
	)
}
