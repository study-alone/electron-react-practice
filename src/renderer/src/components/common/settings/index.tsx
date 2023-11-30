import { ThemeColorPresets } from '@components/common/settings/ThemeColorPresets'
import { ThemeContrast } from '@components/common/settings/ThemeContrast'
import { ThemeLocalization } from '@components/common/settings/ThemeLocalization'
import { ThemeRtlLayout } from '@components/common/settings/ThemeRtlLayout'
import { SettingsDrawer } from '@components/common/settings/drawer'

type ThemeSettingsProps = {
	children: React.ReactNode
}

export const ThemeSettings = ({ children }: ThemeSettingsProps) => {
	return (
		<ThemeColorPresets>
			<ThemeContrast>
				<ThemeLocalization>
					<ThemeRtlLayout>
						{children}
						<SettingsDrawer />
					</ThemeRtlLayout>
				</ThemeLocalization>
			</ThemeContrast>
		</ThemeColorPresets>
	)
}
