import { TextField } from '@components/common/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Stack } from '@mui/material'
import { isEmpty } from 'lodash-es'
import { FormProvider, useForm } from 'react-hook-form'
import { object, ref, string } from 'yup'

type NewPasswordScheme = {
	newPassword: string
	confirmPassword: string
}

export const NewPasswordForm = () => {
	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(
			object<NewPasswordScheme>().shape({
				newPassword: string()
					.min(6, 'Password must be at least 6 characters')
					.required('Password is required'),
				confirmPassword: string()
					.required('Password is required')
					.oneOf<string | ''>([ref('newPassword'), ''], 'Password must match')
			})
		)
	})
	const {
		formState: { errors },
		handleSubmit
	} = methods

	const onSubmit = async (/** data: NewPasswordScheme */) => {
		// nothing
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!isEmpty(errors) && (
						<Alert severity="error">
							{errors.newPassword
								? errors.newPassword.message
								: errors.confirmPassword
								? errors.confirmPassword.message
								: ''}
						</Alert>
					)}
					<TextField
						name="userName"
						label="User Name"
						defaultValue="Jone Doe"
						autoComplete="username"
					/>
					<TextField
						name="newPassword"
						label="New Password"
						type="password"
						autoComplete="new-password"
					/>
					<TextField
						name="confirmPassword"
						label="Confirm Password"
						type="password"
						autoComplete="new-password"
					/>
					<Button
						fullWidth
						color="inherit"
						size="large"
						type="submit"
						variant="containedNoneHover"
					>
						Send Request
					</Button>
				</Stack>
			</form>
		</FormProvider>
	)
}
