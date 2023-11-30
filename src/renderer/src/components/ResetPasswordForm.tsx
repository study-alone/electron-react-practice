import { TextField } from '@components/common/TextField'
import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Stack } from '@mui/material'
import { isEmpty } from 'lodash-es'
import { FormProvider, useForm } from 'react-hook-form'
import { object, string } from 'yup'

type ResetPasswordScheme = {
	email: string
}

export const ResetPasswordForm = () => {
	const methods = useForm({
		mode: 'onTouched',
		resolver: yupResolver(
			object<ResetPasswordScheme>().shape({
				email: string()
					.required('Email is required')
					.email('Email must be a vaild email address')
			})
		),
		defaultValues: {
			email: 'demo@slacky.com'
		}
	})

	const onSubmit = async (/** data: ResetPasswordScheme */) => {
		// nothing
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>
				<Stack spacing={3}>
					{!isEmpty(methods.formState.errors) && (
						<Alert severity="error">There are entries incorrectly.</Alert>
					)}
					<TextField name="email" label="Email address" />
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
