import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { ChatItemStyled } from '@components/styled'
import { isUndefined } from 'lodash-es'
import { ArrowDownLeft, ArrowUpRight, Phone, VideoCamera } from 'phosphor-react'
import { memo } from 'react'

type CallLogProps = {
	incoming?: boolean
	missed?: boolean
	name: string
	img: string
	type?: 'log' | 'member'
}

export const CallLog = memo(({ img, name, incoming, missed /** type = 'log' */ }: CallLogProps) => {
	return (
		<Box pb={2}>
			<ChatItemStyled>
				<Stack
					direction="row"
					sx={{ alignItems: 'center', justifyContent: 'space-between' }}
				>
					<Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
						<Avatar src={img} alt={name} />
						<Stack spacing={0.3}>
							<Typography variant="subtitle2">{name}</Typography>
							{/* <Typography variant='caption'>{}</Typography> */}
							{!isUndefined(incoming) && !isUndefined(missed) && (
								<Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
									{incoming ? (
										<ArrowDownLeft color={missed ? 'red' : 'green'} />
									) : (
										<ArrowUpRight color={missed ? 'red' : 'green'} />
									)}
									<Typography>Yesterday 21:24</Typography>
								</Stack>
							)}
						</Stack>
					</Stack>
					<Stack direction="row">
						<IconButton>
							<Phone color="lime" />
						</IconButton>
						<IconButton>
							<VideoCamera color="lime" />
						</IconButton>
					</Stack>
				</Stack>
			</ChatItemStyled>
		</Box>
	)
})

CallLog.displayName = 'CallLog'
