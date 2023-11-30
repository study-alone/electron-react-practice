import { Box, IconButton, Stack } from '@mui/material'
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react'

export const AuthSocial = () => {
	const color = {
		google: '#df3e30',
		twitter: '#1c9cea'
	}

	return (
		<Box>
			<Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
				<IconButton>
					<GoogleLogo color={color.google} />
				</IconButton>
				<IconButton>
					<GithubLogo />
				</IconButton>
				<IconButton>
					<TwitterLogo color={color.twitter} />
				</IconButton>
			</Stack>
		</Box>
	)
}
