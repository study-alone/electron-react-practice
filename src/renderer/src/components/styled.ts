import { Box, styled } from '@mui/material'
import { isLight } from '@utils/isLight'

export const PageContainer = styled(Box)<{ width?: number }>(({ theme, width }) => ({
	display: 'flex',
	height: '100vh',
	width: width || 320,
	backgroundColor: isLight(theme) ? '#f8faff' : theme.palette.background.default,
	boxShadow: theme.customShadows.fixedQuarter({ blur: 2 })
}))

export const ChatItemStyled = styled(Box)(({ theme }) => ({
	width: '100%',
	borderRadius: 1 * 8,
	backgroundColor: isLight(theme) ? theme.palette.common.white : theme.palette.background.paper,
	boxShadow: theme.shadows[5],
	padding: 16
}))
