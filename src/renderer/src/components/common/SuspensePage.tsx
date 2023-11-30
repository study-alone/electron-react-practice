import { LoadingScreen } from '@components/common/LoadingScreen'
import { Suspense } from 'react'

export const SuspensePage = ({ children }: React.PropsWithChildren) => {
	return <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
}
