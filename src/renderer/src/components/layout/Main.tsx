import { Navigate, Outlet } from 'react-router-dom'
import { Container, Stack } from '@mui/material'
import logo from '@assets/images/logo.ico'
import { useAuth } from '@hooks/useAuth'

export const MainLayout = () => {
	const { isLogin } = useAuth()

	if (isLogin) {
		return <Navigate to="/app/chat" replace />
	}

	return (
		<Container maxWidth="sm" sx={{ mt: 5 }}>
			<Stack spacing={5}>
				<Stack direction="column" sx={{ width: '100%', alignItems: 'center' }}>
					<img style={{ height: 120, width: 120 }} src={logo} alt="logo" />
				</Stack>
			</Stack>
			<Outlet />
		</Container>
	)
}
