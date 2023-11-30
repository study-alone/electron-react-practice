import { Stack, Typography } from '@mui/material'
import { Link } from '@components/common/Link'
import { RegisterForm } from '@components/RegisterForm'
import { AuthSocial } from '@components/AuthSocial'
import { unstable_usePrompt } from 'react-router-dom'
import { SuspensePage } from '@components/common/SuspensePage'

const Register = () => {
	unstable_usePrompt({
		when: true,
		message: 'Do you want to leave the current page?'
	})

	return (
		<Stack spacing={2} mb={5} sx={{ position: 'relative' }}>
			<Typography variant="h4">Get Started With Slacky</Typography>
			<Stack direction="row" spacing={0.5}>
				<Typography>Already have an account?</Typography>
				<Link to="/auth/login" variant="subtitle2">
					Sign In
				</Link>
			</Stack>
			{/* register form */}
			<RegisterForm />
			<Typography
				component="div"
				mt={3}
				sx={{ color: 'text.second', typography: 'caption', textAlign: 'center' }}
			>
				By signing up, I agree to &nbsp;
				<Link to="#" underline="always" color="text.primary">
					Terms of Service
				</Link>
				&nbsp;and&nbsp;
				<Link to="#" underline="always" color="text.primary">
					Privacy Policy
				</Link>
			</Typography>
			<AuthSocial />
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<Register />
		</SuspensePage>
	)
}
