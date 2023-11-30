import { Box, IconButton, Stack, styled, useTheme } from '@mui/material'
import { ConversationLayoutStyled } from '@components/conversation/styled'
import { ChatInput } from '@components/conversation/ChatInput'
import { PaperPlaneTilt } from 'phosphor-react'

const SendButtonStyled = styled(Box)(({ theme }) => ({
	height: 48,
	width: 48,
	backgroundColor: theme.palette.primary.main,
	borderRadius: 1.5 * 8
}))

export const ConversationFooter = () => {
	const theme = useTheme()

	return (
		<ConversationLayoutStyled type="footer" p={2}>
			<Stack direction="row" spacing={3} sx={{ alignItems: 'center', width: '100%' }}>
				<ChatInput />
				<SendButtonStyled>
					<Stack
						sx={{
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<IconButton>
							<PaperPlaneTilt color={theme.palette.common.white} />
						</IconButton>
					</Stack>
				</SendButtonStyled>
			</Stack>
		</ConversationLayoutStyled>
	)
}
