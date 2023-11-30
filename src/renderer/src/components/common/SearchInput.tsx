import { Box, InputBase, alpha, inputBaseClasses, styled } from '@mui/material'
import { MagnifyingGlass } from 'phosphor-react'

const SearchStyled = styled(Box)(({ theme }) => ({
	position: 'relative',
	borderRadius: 20,
	backgroundColor: alpha(theme.palette.background.paper, 1),
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%'
}))

const SearchIconStyled = styled(Box)(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

const InputBaseStyled = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	[`& .${inputBaseClasses.input}`]: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: '100%'
	}
}))

type SearchInputProps = {
	placeholder?: string
}

export const SearchInput = ({ placeholder = 'Search...' }: SearchInputProps) => {
	return (
		<SearchStyled>
			<SearchIconStyled>
				<MagnifyingGlass color="#709ce6" />
			</SearchIconStyled>
			<InputBaseStyled placeholder={placeholder} inputProps={{ 'aria-label': 'search' }} />
		</SearchStyled>
	)
}
