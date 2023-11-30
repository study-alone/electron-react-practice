import { arSD, enUS, frFR, viVN, zhCN } from '@mui/material/locale'
import { PATH_DASHBOARD } from '@routes/paths'

export const space = 8

export const defaultSettings: SettingsValue = {
	themeMode: 'light',
	themeDirection: 'ltr',
	themeContrast: 'default',
	themeLayout: 'horizontal',
	themeColorPresets: 'default',
	themeStretch: false
}

export const NAVBAR = {
	BASE_WIDTH: 260,
	DASHBOARD_WIDTH: 280,
	DASHBOARD_COLLAPSE_WIDTH: 88,
	DASHBOARD_ITEM_ROOT_HEIGHT: 48,
	DASHBOARD_ITEM_SUB_HEIGHT: 40,
	DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32
}

export const enum Locale {
	English = 'en',
	French = 'fr',
	Vietnamese = 'vn',
	Chinese = 'cn',
	Arabic = 'ar'
}

export const allLangs = [
	{
		label: 'English',
		value: Locale.English,
		systemValue: enUS,
		icon: '/assets/icons/flags/ic_flag_en.svg'
	},
	{
		label: 'French',
		value: Locale.French,
		systemValue: frFR,
		icon: '/assets/icons/flags/ic_flag_fr.svg'
	},
	{
		label: 'Vietnamese',
		value: Locale.Vietnamese,
		systemValue: viVN,
		icon: '/assets/icons/flags/ic_flag_vn.svg'
	},
	{
		label: 'Chinese',
		value: Locale.Chinese,
		systemValue: zhCN,
		icon: '/assets/icons/flags/ic_flag_cn.svg'
	},
	{
		label: 'Arabic (Sudan)',
		value: Locale.Arabic,
		systemValue: arSD,
		icon: '/assets/icons/flags/ic_flag_sa.svg'
	}
]

export const defaultLang = allLangs[0] // English

// DEFAULT ROOT PATH
export const DEFAULT_PATH = PATH_DASHBOARD.general.chat // as '/app'
