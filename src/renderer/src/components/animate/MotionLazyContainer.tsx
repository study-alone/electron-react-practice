import { LazyMotion } from 'framer-motion'

// ----------------------------------------------------------------------

const loadFeatures = () => import('./features.js').then((res) => res.default)

export const MotionLazyContainer = ({ children }: React.PropsWithChildren) => {
	return (
		<LazyMotion strict features={loadFeatures}>
			{children}
		</LazyMotion>
	)
}
