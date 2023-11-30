import { Link } from '@components/common/Link'
import { Box, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { NewPasswordForm } from '@components/NewPasswordForm'
import { SuspensePage } from '@components/common/SuspensePage'

const NewPassword = () => {
	return (
		<Box>
			<Stack spacing={2} mb={5} sx={{ position: 'relative' }}>
				<Typography variant="h3" paragraph>
					Reset Password
				</Typography>
				<Typography mb={5} sx={{ color: 'text.secondary' }}>
					Please set your new password
				</Typography>
			</Stack>
			{/* form */}
			<NewPasswordForm />
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
		</Box>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<NewPassword />
		</SuspensePage>
	)
}
