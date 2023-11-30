import { Link as RouterLink } from 'react-router-dom'
import { Link as MuiLink } from '@mui/material'
import type { LinkProps as MuiLinkProps } from '@mui/material'

type LinkProps = React.PropsWithChildren<Omit<MuiLinkProps<typeof RouterLink>, 'component'>>

export const Link = ({ children, ...restProps }: LinkProps) => {
	return (
		<MuiLink component={RouterLink} {...restProps}>
			{children}
		</MuiLink>
	)
}
