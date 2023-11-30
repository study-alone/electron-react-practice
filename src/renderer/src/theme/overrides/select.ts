import { InputSelectIcon } from '@theme/overrides/CustomIcons'

export const select: ComponentTheme<'MuiSelect'> = {
	MuiSelect: {
		defaultProps: {
			IconComponent: InputSelectIcon
		}
	}
}
