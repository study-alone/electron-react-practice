import { FormProvider, useForm } from 'react-hook-form'
import { Alert, Button, Stack } from '@mui/material'
import { boolean, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '@hooks/useAuth'

import type { ErrorOption } from 'react-hook-form'
import { TextField } from '@components/common/TextField'
import { Link } from '@components/common/Link'

export const LoginForm = () => {
	const { setAuth } = useAuth()
	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(
			object().shape({
				email: string()
					.required('Email is required')
					.email('Email must be a valid email address'),
				password: string().required('Password is required'),
				afterSubmit: boolean()
			})
		),
		defaultValues: {
			email: 'demo@slacky.com',
			password: 'demo1234',
			afterSubmit: false
		}
	})

	const onSubmit = async () => {
		try {
			await console.log('...')
			setAuth(true)
		} catch (error) {
			const e = error as ErrorOption
			console.log(e)
			methods.reset()
			methods.setError('afterSubmit', e)
		}
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!!methods.formState.errors.afterSubmit && (
						<Alert severity="error">
							{methods.formState.errors.afterSubmit.message}
						</Alert>
					)}
					<TextField
						name="email"
						label="Email address"
						variant="outlined"
						helperText=""
					/>
					<TextField
						name="password"
						label="Password"
						variant="outlined"
						type="password"
						helperText=""
					/>
				</Stack>
				<Stack my={2} sx={{ alignItems: 'flex-end' }}>
					<Link
						variant="body2"
						color="inherit"
						underline="always"
						to="/auth/reset-password"
					>
						Forgot Password?
					</Link>
				</Stack>
				<Button
					fullWidth
					color="inherit"
					size="large"
					type="submit"
					variant="containedNoneHover"
				>
					Login
				</Button>
			</form>
		</FormProvider>
	)
}
