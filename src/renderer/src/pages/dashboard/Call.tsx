import { Divider, IconButton, Link, Stack, Typography, useTheme } from '@mui/material'
import { useDialog } from '@components/modal/core'
import { PageContainer } from '@components/styled'
import { SearchInput } from '@components/common/SearchInput'
import { Plus } from 'phosphor-react'
import { SimpleBarStyle } from '@components/common/Scrollbar'
import { CallList } from 'src/renderer/src/data'
import { CallLog } from '@components/CallLog'
import { SuspensePage } from '@components/common/SuspensePage'

const Call = () => {
	const { palette } = useTheme()
	const { openModal } = useDialog()

	const handleOpenStartCall = () => {
		openModal('StartCall')
	}

	return (
		<Stack direction="row" sx={{ width: '100%' }}>
			<PageContainer width={340}>
				<Stack spacing={2} p={3} sx={{ flexGrow: 1, maxHeight: '100vh', width: '100%' }}>
					<Stack>
						<Typography variant="h4">Call Logs</Typography>
					</Stack>
					<Stack sx={{ width: '100%' }}>
						<SearchInput />
					</Stack>
					<Stack
						direction="row"
						sx={{ justifyContent: 'space-between', alignItems: 'center' }}
					>
						<Typography variant="subtitle2" component={Link}>
							Start Call
						</Typography>
						<IconButton onClick={handleOpenStartCall}>
							<Plus color={palette.primary.main} />
						</IconButton>
					</Stack>
					<Divider />
					<Stack spacing={3} sx={{ flexGrow: 1, height: '100%' }}>
						<SimpleBarStyle timeout={100} clickOnTrack={false}>
							<Stack>
								{CallList.map((item) => (
									<CallLog key={item.id} {...item} />
								))}
							</Stack>
						</SimpleBarStyle>
					</Stack>
				</Stack>
			</PageContainer>
			{/* Right */}
			{/* TODO: Reuse Conversation component */}
		</Stack>
	)
}

export const Component = () => {
	return (
		<SuspensePage>
			<Call />
		</SuspensePage>
	)
}
