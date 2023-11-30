import { Divider, Stack, Typography, useTheme } from '@mui/material'

type TimelineProps = {
	text?: string
}

export const Timeline = ({ text }: TimelineProps) => {
	const { palette } = useTheme()

	return (
		<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
			<Divider>
				<Typography variant="caption" sx={{ color: palette.text.primary }}>
					{text}
				</Typography>
			</Divider>
		</Stack>
	)
}
