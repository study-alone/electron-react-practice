import { Backdrop, CircularProgress } from '@mui/material'

export const Loading = () => {
	return (
		<Backdrop component="div" open={true}>
			<CircularProgress />
		</Backdrop>
	)
}
