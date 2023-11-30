import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { alpha, styled, Stack, Divider, Backdrop, Typography, IconButton } from '@mui/material'
import { useSettings } from '@hooks/useSettings'
import { cssStyles } from '@utils/cssStyles'
import { isLight } from '@utils/isLight'
import { NAVBAR, defaultSettings } from '../../../../config'
import { Iconify } from '@components/common/Iconify'
import { Scrollbar } from '@components/common/Scrollbar'
import { ToggleButton } from '@components/common/settings/drawer/Togglebutton'
import { SettingDirection } from '@components/common/settings/drawer/SettingDirection'
import { SettingFullscreen } from '@components/common/settings/drawer/SettingFullscreen'
import { SettingColorPresets } from '@components/common/settings/drawer/SettingColorPresets'

const RootStyle = styled(m.div)(({ theme }) => {
	const { palette, zIndex, spacing, shape } = theme

	return {
		...cssStyles(theme).bgBlur({
			color: palette.background.paper,
			opacity: 0.92
		}),
		top: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		position: 'fixed',
		overflow: 'hidden',
		width: NAVBAR.BASE_WIDTH,
		flexDirection: 'column',
		margin: spacing(2),
		paddingBottom: spacing(3),
		zIndex: zIndex.drawer + 3,
		borderRadius: Number(shape.borderRadius) * 1.5,
		boxShadow: `-24px 12px 32px -4px ${alpha(
			isLight(theme) ? palette.grey[500] : palette.common.black,
			0.16
		)}`
	}
})

export const SettingsDrawer = () => {
	const {
		themeMode,
		themeLayout,
		themeStretch,
		themeContrast,
		themeDirection,
		themeColorPresets,
		onResetSetting
	} = useSettings()
	const [open, setOpen] = useState(false)
	const notDefault = [
		themeMode !== defaultSettings.themeMode,
		themeLayout !== defaultSettings.themeLayout,
		themeStretch !== defaultSettings.themeStretch,
		themeContrast !== defaultSettings.themeContrast,
		themeDirection !== defaultSettings.themeDirection,
		themeColorPresets !== defaultSettings.themeColorPresets
	].some((condition) => condition)

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : ''
	}, [open])

	const handleToggle = useCallback(() => {
		setOpen((prev) => !prev)
	}, [])

	const handleClose = useCallback(() => {
		setOpen(false)
	}, [])

	return (
		<>
			<Backdrop
				open={open}
				onClick={handleClose}
				sx={{
					background: 'transparent',
					zIndex: (theme) => theme.zIndex.drawer + 1
				}}
			/>

			{!open && <ToggleButton open={open} notDefault={notDefault} onToggle={handleToggle} />}

			<AnimatePresence>
				{open && (
					<RootStyle>
						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							sx={{ py: 2, pr: 1, pl: 2.5 }}
						>
							<Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
								Settings
							</Typography>
							<IconButton onClick={onResetSetting}>
								<Iconify icon="ic:round-refresh" width={20} height={20} />
							</IconButton>
							<IconButton onClick={handleClose}>
								<Iconify icon="eva:close-fill" width={20} height={20} />
							</IconButton>
						</Stack>
						<Divider variant="dashed" />
						<Scrollbar sx={{ flexGrow: 1, height: '100%' }}>
							<Stack spacing={3} sx={{ p: 3 }}>
								<Stack spacing={1.5}>
									<Typography variant="subtitle2">Direction</Typography>
									<SettingDirection />
								</Stack>
								<Stack spacing={1.5}>
									<Typography variant="subtitle2">Presets</Typography>
									<SettingColorPresets />
								</Stack>
								<SettingFullscreen />
							</Stack>
						</Scrollbar>
					</RootStyle>
				)}
			</AnimatePresence>
		</>
	)
}
