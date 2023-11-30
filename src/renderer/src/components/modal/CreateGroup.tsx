import { Autocomplete } from '@components/common/Autocomplete'
import { TextField } from '@components/common/TextField'
import { Transition } from '@components/modal/misc/Transition'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Dialog, DialogContent, DialogTitle, Stack } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { array, object, string } from 'yup'

export type CreateGroupProps = {
	onClose?(): void
}

type NewGroupScheme = {
	title: string
	members: string[]
}

const members = ['Name 1', 'Name 2', 'Name 3']

const CreateGroup = ({ onClose }: CreateGroupProps) => {
	const methods = useForm({
		mode: 'onTouched',
		resolver: yupResolver(
			object<NewGroupScheme>().shape({
				title: string().required('Title is Required'),
				members: array().min(2, 'Must have at least 2 members')
			})
		),
		defaultValues: {
			title: '',
			members: []
		}
	})

	const handleClose = () => {
		typeof onClose === 'function' && onClose()
	}

	const handleSubmit = (/** data: NewGroupScheme */) => {
		// nothing
	}

	return (
		<Dialog
			open
			fullWidth
			maxWidth="xs"
			sx={{ p: 4 }}
			keepMounted
			TransitionComponent={Transition}
			onClose={handleClose}
			PaperProps={{ sx: { minHeight: '340px' } }}
		>
			<DialogTitle sx={{ mb: 3 }}>Create New Group</DialogTitle>
			<DialogContent>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>
						<Stack spacing={3}>
							<TextField name="title" label="Title" />
							<Autocomplete
								name="members"
								label="Members"
								multiple
								freeSolo
								options={members.concat()}
								ChipProps={{ size: 'medium' }}
							/>
							<Stack
								spacing={2}
								direction="row"
								sx={{ alignItems: 'center', justifyContent: 'end' }}
							>
								<Button onClick={onClose}>Cancel</Button>
								<Button type="submit" variant="contained">
									Create
								</Button>
							</Stack>
						</Stack>
					</form>
				</FormProvider>
			</DialogContent>
		</Dialog>
	)
}

export default CreateGroup
