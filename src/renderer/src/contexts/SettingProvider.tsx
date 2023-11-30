import { createContext, useCallback, useEffect } from 'react'
import { Locale, defaultSettings } from '../config'
import { useLocalStorage } from '@hooks/useLocalStorage'
import getColorPresets, { colorPresets, defaultPreset } from '@utils/getColorPreset'

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type ClickEvent = React.MouseEvent<HTMLButtonElement>

const initialState = {
	...defaultSettings,
	// Mode
	onToggleMode: () => {
		/** nothing */
	},
	onChangeMode: () => {
		/** nothing */
	},

	// Direction
	onToggleDirection: () => {
		/** nothing */
	},
	onChangeDirection: () => {
		/** nothing */
	},
	onChangeDirectionByLang: () => {
		/** nothing */
	},

	// Layout
	onToggleLayout: () => {
		/** nothing */
	},
	onChangeLayout: () => {
		/** nothing */
	},

	// Contrast
	onToggleContrast: () => {
		/** nothing */
	},
	onChangeContrast: () => {
		/** nothing */
	},

	// Color
	onChangeColor: () => {
		/** nothing */
	},
	setColor: defaultPreset,
	colorOption: [],

	// Stretch
	onToggleStretch: () => {
		/** nothing */
	},

	// Reset
	onResetSetting: () => {
		/** nothing */
	}
}

export const SettingsContext = createContext<
	{
		colorOption: { name: string; value: string }[]
		setColor: typeof defaultPreset
		onChangeColor(event: ChangeEvent, value: string): void
		onChangeContrast(event: ChangeEvent, value: string): void
		onChangeDirection(event: ChangeEvent, value: string): void
		onChangeLayout(event: ChangeEvent, value: string): void
		onChangeMode(event: ChangeEvent, value: string): void
		onToggleStretch(event: ClickEvent): void
		onToggleMode(event: ChangeEvent, checked: boolean): void
		onToggleDirection(event: ClickEvent): void
		onChangeDirectionByLang(lang: Locale): void
		onToggleLayout(): void
		onToggleContrast(): void
		onResetSetting(): void
	} & SettingsValue
>(initialState)

type SettingsProviderProps = {
	children: React.ReactNode
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
	const { value: settings, setValueInLocalStorage } = useLocalStorage('settings', {
		themeMode: initialState.themeMode,
		themeColorPresets: initialState.themeColorPresets,
		themeContrast: initialState.themeContrast,
		themeDirection: initialState.themeDirection,
		themeLayout: initialState.themeLayout,
		themeStretch: initialState.themeStretch
	})

	const isArabic = localStorage.getItem('i18nextLng') === Locale.Arabic

	const setSettings = useCallback(
		(value: Partial<SettingsValue>) => {
			setValueInLocalStorage({
				...settings,
				...value
			})
		},
		[setValueInLocalStorage, settings]
	)

	// Mode

	const onToggleMode = () => {
		setSettings({
			themeMode: settings.themeMode === 'light' ? 'dark' : 'light'
		})
	}

	const onChangeMode = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({
			themeMode: event.target.value as ThemeMode
		})
	}

	// Direction

	const onToggleDirection = () => {
		setSettings({
			themeDirection: settings.themeDirection === 'rtl' ? 'ltr' : 'rtl'
		})
	}

	const onChangeDirection = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value)
		setSettings({
			themeDirection: event.target.value as ThemeDirection
		})
	}

	const onChangeDirectionByLang = useCallback(
		(lang: Locale) => {
			setSettings({
				themeDirection: lang === Locale.Arabic ? 'rtl' : 'ltr'
			})
		},
		[setSettings]
	)

	// Layout

	const onToggleLayout = () => {
		setSettings({
			themeLayout: settings.themeLayout === 'vertical' ? 'horizontal' : 'vertical'
		})
	}

	const onChangeLayout = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({
			themeLayout: event.target.value as ThemeLayout
		})
	}

	// Contrast

	const onToggleContrast = () => {
		setSettings({
			themeContrast: settings.themeContrast === 'default' ? 'bold' : 'default'
		})
	}

	const onChangeContrast = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({
			themeContrast: event.target.value as ThemeContrast
		})
	}

	// Color

	const onChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({
			themeColorPresets: event.target.value as ThemeColorPresets
		})
	}

	// Stretch

	const onToggleStretch = () => {
		setSettings({
			themeStretch: !settings.themeStretch
		})
	}

	// Reset

	const onResetSetting = () => {
		setSettings({
			themeMode: initialState.themeMode,
			themeLayout: initialState.themeLayout,
			themeStretch: initialState.themeStretch,
			themeContrast: initialState.themeContrast,
			themeDirection: initialState.themeDirection,
			themeColorPresets: initialState.themeColorPresets
		})
	}

	useEffect(() => {
		if (isArabic) {
			onChangeDirectionByLang(Locale.Arabic)
		}
	}, [isArabic, onChangeDirectionByLang])

	return (
		<SettingsContext.Provider
			value={{
				...settings,
				onToggleMode,
				onChangeMode,

				// Direction
				onToggleDirection,
				onChangeDirection,
				onChangeDirectionByLang,

				// Layout
				onToggleLayout,
				onChangeLayout,

				// Contrast
				onChangeContrast,
				onToggleContrast,

				// Stretch
				onToggleStretch,

				// Color
				onChangeColor,
				setColor: getColorPresets(settings.themeColorPresets),
				colorOption: colorPresets.map((color) => ({
					name: color.name,
					value: color.main
				})),

				// Reset
				onResetSetting
			}}
		>
			{children}
		</SettingsContext.Provider>
	)
}
