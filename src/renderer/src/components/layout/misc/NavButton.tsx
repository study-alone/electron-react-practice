import { memo } from 'react'
import { styled } from '@mui/material'
import clsx from 'clsx'
import { isLight } from '@utils/isLight'
import { NavLink } from 'react-router-dom'

// const IconButtonStyled = styled(Box, {
// 	shouldForwardProp: (propName) => propName !== 'isActive'
// })<{ isActive: boolean }>(({ theme, isActive }) => {
// 	const iconColor = isLight(theme) ? theme.palette.common.black : theme.palette.text.primary
// 	const activeBackground = theme.palette.primary.main
// 	return {
// 		backgroundColor: isActive ? activeBackground : 'transparent',
// 		borderRadius: 1.5 * 8,
// 		'.icon-button': {
// 			display: 'block',
// 			width: 'max-content',
// 			color: isActive ? theme.palette.common.white : iconColor
// 		}
// 	}
// })

const NavLinkStyled = styled(NavLink)(({ theme }) => {
	const iconColor = isLight(theme) ? theme.palette.common.black : theme.palette.text.primary
	return {
		display: 'flex',
		width: 'max-content',
		color: iconColor,
		padding: theme.spacing(2),
		borderRadius: 1.5 * 8,
		fontSize: '1.5rem',
		transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		'&.active': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.primary.main
		},
		'&:hover:not(.active)': {
			backgroundColor: 'rgba(99, 115, 129, 0.08)'
		}
	}
})

interface NavButtonProps extends React.PropsWithChildren {
	to: string
}

export const NavButton = memo<NavButtonProps>(({ to, children }) => {
	return (
		<>
			{/* <IconButtonStyled isActive={isActive} p={1}>
				<IconButton className="icon-button" onClick={handleClick}>
					{children}
				</IconButton>
			</IconButtonStyled> */}
			<NavLinkStyled
				className={({ isActive }) => clsx(['icon-button', isActive ? 'active' : ''])}
				to={to}
			>
				{children}
			</NavLinkStyled>
		</>
	)
})
NavButton.displayName = 'NavButton'
