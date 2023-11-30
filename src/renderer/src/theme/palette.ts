import { type PaletteMode, alpha } from '@mui/material'

// ---------------------------------------------------------------------------

type ColorHEX = `#${string}${string}${string}${string}${string}${string}`

type ColorSet = {
	lighter: ColorHEX
	light: ColorHEX
	main: ColorHEX
	dark: ColorHEX
	darker: ColorHEX
}

declare module '@mui/material/styles' {
	// interface Theme {}
	// // allow configuration using `createTheme`
	// interface ThemeOptions {}
	// interface SimplePaletteColorOptions {}
	interface PaletteColor {
		darker?: string
		lighter?: string
	}
	interface PaletteOptions {
		mode?: PaletteMode
	}
	// interface Palette {}

	interface TypeBackground {
		neutral?: string
	}
}

declare module '@mui/material' {
	interface Color {
		500_32: string
		500_56: string
		500_12: string
		500_16: string
		500_48: string
	}
}

// ---------------------------------------------------------------------------

function createGradient(to: ColorHEX, bottom: ColorHEX): string {
	return `linear-gradient(to bottom, ${to}, ${bottom})`
}

function createColorSet(...args: ColorHEX[]): ColorSet {
	const names = ['lighter', 'light', 'main', 'dark', 'darker'] as const
	return names.reduce((acc, name, index) => {
		acc[name] = args[index]
		return acc
	}, {} as ColorSet)
}

// default colors
const PRIMARY = createColorSet('#C8FACD', '#5BE584', '#0162C4', '#007B55', '#005249')
const SECONDARY = createColorSet('#D6E4FF', '#84A9FF', '#3366FF', '#1939B7', '#091A7A')
const INFO = createColorSet('#D0F2FF', '#74CAFF', '#1890FF', '#0C53B7', '#04297A')
const SUCCESS = createColorSet('#E9FCD4', '#AAF27F', '#54D62C', '#229A16', '#08660D')
const WARNING = createColorSet('#FFF7CD', '#FFE16A', '#FFC107', '#B78103', '#7A4F01')
const ERROR = createColorSet('#FFE7D9', '#FFA48D', '#FF4842', '#B72136', '#7A0C2E')

const GREY = {
	0: '#FFFFFF',
	100: '#F9FAFB',
	200: '#F4F6F8',
	300: '#DFE3E8',
	400: '#C4CDD5',
	500: '#919EAB',
	600: '#637381',
	700: '#454F5B',
	800: '#212B36',
	900: '#161C24',
	500_8: alpha('#919EAB', 0.08),
	500_12: alpha('#919EAB', 0.12),
	500_16: alpha('#919EAB', 0.16),
	500_24: alpha('#919EAB', 0.24),
	500_32: alpha('#919EAB', 0.32),
	500_48: alpha('#919EAB', 0.48),
	500_56: alpha('#919EAB', 0.56),
	500_80: alpha('#919EAB', 0.8)
}

const GRADIENTS = {
	primary: createGradient(PRIMARY.light, PRIMARY.main),
	info: createGradient(INFO.light, INFO.main),
	success: createGradient(SUCCESS.light, SUCCESS.main),
	warning: createGradient(WARNING.light, WARNING.main),
	error: createGradient(ERROR.light, ERROR.main)
}

const CHART_COLORS = {
	violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
	blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
	green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
	yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
	red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4']
}

const COMMON = {
	common: { black: '#000', white: '#fff' },
	primary: { ...PRIMARY, contrastText: '#fff' },
	secondary: { ...SECONDARY, contrastText: '#fff' },
	info: { ...INFO, contrastText: '#fff' },
	success: { ...SUCCESS, contrastText: GREY[800] },
	warning: { ...WARNING, contrastText: GREY[800] },
	error: { ...ERROR, contrastText: '#fff' },
	grey: GREY,
	gradients: GRADIENTS,
	chart: CHART_COLORS,
	divider: GREY[500_24],
	action: {
		hover: GREY[500_8],
		selected: GREY[500_16],
		disabled: GREY[500_80],
		disabledBackground: GREY[500_24],
		focus: GREY[500_24],
		hoverOpacity: 0.08,
		disabledOpacity: 0.48
	}
}

export const palette = {
	light: {
		...COMMON,
		mode: 'light',
		text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
		background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
		action: { active: GREY[600], ...COMMON.action }
	},
	dark: {
		...COMMON,
		mode: 'dark',
		text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
		background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] },
		action: { active: GREY[500], ...COMMON.action }
	}
}
