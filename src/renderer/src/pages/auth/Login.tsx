import { Fragment } from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from '@components/common/Link'
import { LoginForm } from '@components/LoginForm'
import { AuthSocial } from '@components/AuthSocial'
import { SuspensePage } from '@components/common/SuspensePage'

const Login = () => {
	return (
		<Fragment>
			<Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
				<Typography variant="h3">Login to Slacky</Typography>
				<Stack direction="row" spacing={0.5}>
					<Typography variant="body2">New User?</Typography>
					<Link to="/auth/register" variant="subtitle2">
						Create an account
					</Link>
				</Stack>
				{/* login form */}
				<LoginForm />
				{/* auth social */}
				<AuthSocial />
			</Stack>
		</Fragment>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<Login />
		</SuspensePage>
	)
}
