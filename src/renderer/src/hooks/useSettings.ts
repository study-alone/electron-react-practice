import { useContext } from 'react'
import { SettingsContext } from '@contexts/SettingProvider'

export const useSettings = () => useContext(SettingsContext)
