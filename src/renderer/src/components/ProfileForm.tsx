import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { boolean, object, string } from 'yup'

import type { ErrorOption } from 'react-hook-form'
import { Alert, Button, Stack } from '@mui/material'
import { TextField } from '@components/common/TextField'

type ProfileScheme = {
	name: string
	about: string
	avatarUrl: string | null
	afterSubmit: boolean
}

export const ProfileForm = () => {
	const fileUrl = useRef<null | string>(null)
	const methods = useForm<ProfileScheme>({
		mode: 'onTouched',
		resolver: yupResolver<ProfileScheme>(
			object().shape({
				name: string().required('Name is Required'),
				about: string().required('About is Reqiured'),
				avatarUrl: string().required('Avatar is required').nullable(),
				afterSubmit: boolean().required()
			})
		),
		defaultValues: {
			about: '',
			afterSubmit: false,
			avatarUrl: null,
			name: ''
		}
	})

	const {
		reset,
		setError,
		formState: { errors }
	} = methods

	// const handleDrop = (acceptedFile: File[]) => {
	// 	const file = acceptedFile[0]
	// 	fileUrl.current = URL.createObjectURL(file)
	// 	const newFile = Object.assign(file, {
	// 		preview: fileUrl.current
	// 	})

	// 	if (file) {
	// 		setValue('avatarUrl', newFile.preview, { shouldValidate: true })
	// 	}
	// }

	const handleSubmit = async (/** data: ProfileScheme */) => {
		try {
			await console.log('...')
		} catch (e: unknown) {
			const error = e as ErrorOption
			console.log(error)
			reset()
			setError('afterSubmit', error)
		}
	}

	useEffect(() => {
		return () => {
			if (fileUrl.current) {
				URL.revokeObjectURL(fileUrl.current)
			}
		}
	})

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(handleSubmit)}>
				<Stack spacing={3}>
					<Stack spacing={3}>
						{!!errors.afterSubmit && (
							<Alert severity="error">{errors.afterSubmit.message}</Alert>
						)}
						<TextField
							name="name"
							label="Name"
							helperText="This name is visible to your contacts"
						/>
						<TextField multiline minRows={4} maxRows={5} name="about" label="About" />
					</Stack>
					<Stack direction="row" sx={{ justifyContent: 'end' }}>
						<Button color="primary" size="large" type="submit" variant="outlined">
							Save
						</Button>
					</Stack>
				</Stack>
			</form>
		</FormProvider>
	)
}
