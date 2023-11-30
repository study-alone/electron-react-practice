import { Stack } from '@mui/material'
import { SideNavigation } from '@components/layout/misc/SideNavigation'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@hooks/useAuth'

export const DashboardLayout = () => {
	const { isLogin } = useAuth()

	if (!isLogin) {
		return <Navigate to="/auth/login" replace />
	}

	return (
		<Stack direction="row" height="100%">
			<SideNavigation />
			<Outlet />
		</Stack>
	)
}
