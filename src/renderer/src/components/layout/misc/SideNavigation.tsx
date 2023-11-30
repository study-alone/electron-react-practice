import { Box, Divider, Stack, styled } from '@mui/material'
import { useSettings } from '@hooks/useSettings'
import logo from '@assets/images/logo.ico'
import { Nav_Buttons } from '../../../data'
import { NavButton } from '@components/layout/misc/NavButton'
import { Gear } from 'phosphor-react'
import { AntSwitch } from '@components/common/AntSwitch'
import { ProfileMenu } from '@components/layout/misc/ProfileMenu'

const SideNavigationStyled = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.customShadows.fixedQuarter({ blur: 2 }),
	height: '100vh',
	width: 100
}))

const LogoStyled = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	height: 64,
	width: 64,
	borderRadius: 1.5 * 8
}))

export const SideNavigation = () => {
	const { onToggleMode } = useSettings()

	return (
		<SideNavigationStyled>
			<Stack
				direction="column"
				alignItems="center"
				justifyContent="space-between"
				spacing={3}
				py={3}
				width="100%"
				height="100%"
			>
				<Stack alignItems="center" spacing={4}>
					<LogoStyled>
						<img src={logo} alt="Chat App Logo" />
					</LogoStyled>
					<Stack spacing={3} width="max-content" direction="column" alignItems="center">
						{Nav_Buttons.map(({ Icon, index, path }) => (
							<NavButton key={`nav-button-${index}`} to={path}>
								<Icon />
							</NavButton>
						))}
						<Divider sx={{ width: '48px' }} />
						<NavButton to="/app/settings">
							<Gear />
						</NavButton>
					</Stack>
				</Stack>
				<Stack alignItems="center" spacing={4}>
					<AntSwitch defaultChecked onChange={onToggleMode} />
					<ProfileMenu />
				</Stack>
			</Stack>
		</SideNavigationStyled>
	)
}
