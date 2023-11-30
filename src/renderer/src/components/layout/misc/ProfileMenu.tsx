import { useState } from 'react'
import { Avatar, IconButton, Menu, Stack } from '@mui/material'
import { Profile_Menu } from 'src/renderer/src/data'
import { useAuth } from '@hooks/useAuth'
import { faker } from '@faker-js/faker'
import { ProfileMenuItem } from '@components/layout/misc/ProfileMenuItem'

const avatarImage = faker.image.avatarLegacy()

export const ProfileMenu = () => {
	const { setAuth } = useAuth()
	const [element, setElement] = useState<HTMLButtonElement | null>(null)
	const profileMenuOpen = Boolean(element)

	const handleOpenProfileMenu: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		setElement(event.currentTarget)
	}

	const handleCloseProfileMenu = () => {
		setElement(null)
	}

	const handleSelectProfileMenu: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		const { id } = event.currentTarget.dataset

		if (id === 'signout') {
			setAuth(false)
		}

		handleCloseProfileMenu()
	}

	return (
		<>
			<IconButton onClick={handleOpenProfileMenu}>
				<Avatar
					id="profile-menu-button"
					src={avatarImage}
					aria-controls={profileMenuOpen ? 'true' : undefined}
					aria-haspopup="true"
					aria-expanded={profileMenuOpen ? 'true' : undefined}
				/>
			</IconButton>
			<Menu
				unselectable="on"
				id="profile-menu"
				anchorEl={element}
				open={profileMenuOpen}
				onClose={handleCloseProfileMenu}
				MenuListProps={{ 'aria-labelledby': 'profile-menu-button' }}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
			>
				<Stack spacing={1} px={1}>
					{Profile_Menu.map(({ id, title, Icon, path }) => (
						<ProfileMenuItem
							key={id}
							id={id}
							title={title}
							Icon={Icon}
							path={path}
							onSelectMenu={handleSelectProfileMenu}
						/>
					))}
				</Stack>
			</Menu>
		</>
	)
}
