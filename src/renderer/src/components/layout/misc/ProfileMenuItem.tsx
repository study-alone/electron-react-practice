import { IconButton, MenuItem, Stack, Typography } from '@mui/material'
import type { IconProps } from 'phosphor-react'
import { useMatch, useNavigate } from 'react-router-dom'

type ProfileMenuItemProps = {
	title: string
	id: string
	path?: string
	Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
	onSelectMenu: React.MouseEventHandler<HTMLButtonElement>
}

export const ProfileMenuItem = ({ Icon, id, path, title, onSelectMenu }: ProfileMenuItemProps) => {
	const match = useMatch(path || 'no-path')
	const navigate = useNavigate()

	const to = () => {
		path && navigate(path)
	}

	const handleClickMenuItem: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		to()
		onSelectMenu(event)
	}

	return (
		<MenuItem
			key={id}
			component={IconButton}
			data-value={title}
			data-id={id}
			data-to={path}
			disabled={!!match}
			onClick={handleClickMenuItem}
		>
			<Stack
				sx={{ width: '100%' }}
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="space-between"
			>
				<Typography component="span" variant="caption">
					{title}
				</Typography>
				<Icon />
			</Stack>
		</MenuItem>
	)
}
