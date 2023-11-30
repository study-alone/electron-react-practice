import { useEffect, useState } from 'react'

export function useLocalStorage(key: string, defaultValue: SettingsValue) {
	const [value, setValue] = useState<SettingsValue>(() => {
		const storedValue = localStorage.getItem(key)

		return storedValue === null ? defaultValue : JSON.parse(storedValue)
	})

	useEffect(() => {
		const listner = (event: StorageEvent) => {
			if (event.storageArea === localStorage && event.key === key) {
				setValue(JSON.parse(event.newValue || 'null'))
			}
		}

		window.addEventListener('storage', listner)

		return () => {
			window.removeEventListener('storage', listner)
		}
	})

	const setValueInLocalStorage = (
		newValue: SettingsValue | ((value: SettingsValue) => SettingsValue)
	) => {
		setValue((currentValue) => {
			const result = typeof newValue === 'function' ? newValue(currentValue) : newValue

			localStorage.setItem(key, JSON.stringify(result))

			return result
		})
	}

	return { value, setValueInLocalStorage }
}
