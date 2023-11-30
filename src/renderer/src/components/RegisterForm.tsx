import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { boolean, object, string } from 'yup'
import { Alert, Button, Stack } from '@mui/material'
import { isEmpty } from 'lodash-es'
import { TextField } from '@components/common/TextField'

type RegisterScheme = {
	firstName: string
	lastName: string
	email: string
	password: string
	afterSubmit: boolean
}

export const RegisterForm = () => {
	const methods = useForm({
		mode: 'all',
		resolver: yupResolver(
			object().shape({
				firstName: string().required('First Name is required'),
				lastName: string().required('Last Name is required'),
				email: string()
					.required('Email is required')
					.email('Email must be a valid email address'),
				password: string().required('Password is required'),
				afterSubmit: boolean().required()
			})
		)
	})

	const onSubmit = async (data: RegisterScheme) => {
		console.log('onSubmit data : ', data)
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!isEmpty(methods.formState.errors) && (
						<Alert severity="error">There are entries incorrectly.</Alert>
					)}
					<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
						<TextField name="firstName" label="First Name" />
						<TextField name="lastName" label="Last Name" />
					</Stack>
					<TextField name="email" label="Email address" />
					<TextField name="password" label="Password" type="password" />
					<Button
						fullWidth
						color="inherit"
						size="large"
						type="submit"
						variant="containedNoneHover"
					>
						Submit
					</Button>
				</Stack>
			</form>
		</FormProvider>
	)
}
