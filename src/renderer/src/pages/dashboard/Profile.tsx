import { ProfileForm } from '@components/ProfileForm'
import { SuspensePage } from '@components/common/SuspensePage'
import { PageContainer } from '@components/styled'
import { IconButton, Stack, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'

const Profile = () => {
	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			<PageContainer>
				<Stack p={4} spacing={5} sx={{ width: '100%' }}>
					{/* header */}
					<Stack
						direction="row"
						spacing={3}
						sx={{ alignItems: 'center', justifyContent: 'flex-start' }}
					>
						<IconButton>
							<CaretLeft size={24} color="#4b4b4b" />
						</IconButton>
						<Typography variant="h4">Profile</Typography>
					</Stack>
					<ProfileForm />
				</Stack>
			</PageContainer>
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<Profile />
		</SuspensePage>
	)
}
