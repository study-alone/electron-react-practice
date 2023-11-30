import { Box, styled } from '@mui/material'
import { isLight } from '@utils/isLight'

export const ConversationLayoutStyled = styled(Box)<{ type: 'header' | 'footer' }>(({ theme }) => ({
	height: 100,
	width: '100%',
	backgroundColor: isLight(theme) ? '#f8faff' : theme.palette.background.paper,
	boxShadow: theme.customShadows.fixedQuarter({ blur: 5, spread: 2 }),
	position: 'relative',
	zIndex: 20
}))
