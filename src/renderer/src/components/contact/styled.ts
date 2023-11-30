import { Box, styled } from '@mui/material'
import { isLight } from '@utils/isLight'

export const SharedMessagesStyled = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: theme.palette.background.default
}))

export const HeaderStyled = styled(Box)(({ theme }) => ({
	boxShadow: theme.customShadows.fixedQuarter({ blur: 2 }),
	width: '100%',
	backgroundColor: isLight(theme) ? '#f8faff' : theme.palette.background.default
}))
