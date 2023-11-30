import type { Theme, Components } from '@mui/material'
import type { LabComponents } from '@mui/lab/themeAugmentation'
import type { TreeViewComponents } from '@mui/x-tree-view/themeAugmentation'

declare global {
	type WithRequiredProperty<T, Key extends keyof T> = T & {
		[P in Key]-?: T[P]
	}

	type ThemeMode = 'light' | 'dark'
	type ThemeDirection = 'ltr' | 'rtl'
	type ThemeContrast = 'default' | 'bold'
	type ThemeLayout = 'horizontal' | 'vertical'
	type ThemeColorPresets = 'default'
	type ThemeStretch = boolean

	type SettingsValue = {
		themeMode: ThemeMode
		themeDirection: ThemeDirection
		themeContrast: ThemeContrast
		themeLayout: ThemeLayout
		themeColorPresets: ThemeColorPresets
		themeStretch: ThemeStretch
	}

	type GlobalTheme = Theme

	// BaseTheme 추출
	type BaseTheme = Omit<Theme, 'components' | 'unstable_sx' | 'unstable_sxConfig'>

	// 모든 Theme 함수의 리턴 타입
	type AppComponentsTheme = (Components<BaseTheme> & TreeViewComponents<BaseTheme>) &
		LabComponents

	// Theme 함수를 분리하여 지정할 타입
	type ComponentTheme<Key extends keyof AppComponentsTheme> = {
		[P in Key]: AppComponentsTheme[P]
	}

	// default color key
	type PaletteColorKey = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
}
