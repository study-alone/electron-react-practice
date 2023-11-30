import { Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { Link } from '@components/common/Link'
import { ResetPasswordForm } from '@components/ResetPasswordForm'
import { SuspensePage } from '@components/common/SuspensePage'

const ResetPassword = () => {
	return (
		<Stack spacing={2} mb={5} sx={{ position: 'relative' }}>
			<Typography variant="h3" paragraph>
				Forgot your Password?
			</Typography>
			<Typography mb={5} sx={{ color: 'text.secondary' }}>
				Please enter the email address addociate with you account and Wi will email you a
				link to reset your password.
			</Typography>
			{/* form */}
			<ResetPasswordForm />
			<Link
				to="/auth/login"
				color="inherit"
				variant="subtitle2"
				mt={3}
				mx="auto"
				sx={{ display: 'inline-flex', alignItems: 'center' }}
			>
				<CaretLeft />
				Return to sign in
			</Link>
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<ResetPassword />
		</SuspensePage>
	)
}
