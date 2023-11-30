import { useTheme, type Breakpoint, useMediaQuery } from '@mui/material'

type Query = 'up' | 'down' | 'between' | 'only'
export function useResponsive(
	query: Query,
	key: Breakpoint,
	start: Breakpoint = 'md',
	end: Breakpoint = 'md'
) {
	const theme = useTheme()
	const mediaUp = useMediaQuery(theme.breakpoints.up(key))
	const mediaDown = useMediaQuery(theme.breakpoints.down(key))
	const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end))
	const mediaOnly = useMediaQuery(theme.breakpoints.only(key))
	const queries = {
		up: mediaUp,
		down: mediaDown,
		between: mediaBetween,
		only: mediaOnly
	}

	return queries[query] || null
}
