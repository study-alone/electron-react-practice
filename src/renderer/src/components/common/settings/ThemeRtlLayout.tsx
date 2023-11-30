import { useEffect } from 'react'
import { useTheme } from '@mui/material'
import createCache from '@emotion/cache'
import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'

type ThemeRtlLayoutProps = {
	children: React.ReactNode
}

export const ThemeRtlLayout = ({ children }: ThemeRtlLayoutProps) => {
	const theme = useTheme()

	useEffect(() => {
		document.dir = theme.direction
	}, [theme.direction])

	const cacheRtl = createCache({
		key: theme.direction === 'rtl' ? 'rtl' : 'ltr',
		stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : []
	})

	return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}
