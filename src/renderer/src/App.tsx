import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@theme/index'
import { ModalProvider } from '@components/modal/core'
import { ThemeSettings } from '@components/common/settings'
import { Loading } from '@components/common/Loading'
import { router } from '@routes/index'

export default function App() {
	return (
		<RecoilRoot>
			<ThemeProvider>
				<ModalProvider>
					<ThemeSettings>
						{/* <AppRouter history={browserHistory}>
							<Routes />
						</AppRouter> */}
						<RouterProvider router={router} fallbackElement={<Loading />} />
					</ThemeSettings>
				</ModalProvider>
			</ThemeProvider>
		</RecoilRoot>
	)
}
