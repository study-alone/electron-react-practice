function path(root: string, sublink: string): string {
	return `${root}${sublink}`
}

const ROOTS_DASHBOARD = '/'

export const PATH_DASHBOARD = {
	root: ROOTS_DASHBOARD,
	general: {
		chat: path(ROOTS_DASHBOARD, 'app/chat')
	}
} as const
