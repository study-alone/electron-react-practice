import { CardActionArea, Grid, RadioGroup, styled } from '@mui/material'
import { useSettings } from '@hooks/useSettings'
import { Iconify } from '@components/common/Iconify'
import { BoxMask } from '@components/common/settings/drawer/BoxMask'

const BoxStyle = styled(CardActionArea)(({ theme }) => ({
	height: 72,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.text.disabled,
	border: `solid 1px ${theme.palette.grey[500_12]}`,
	borderRadius: Number(theme.shape.borderRadius) * 1.25
}))

export const SettingDirection = () => {
	const { themeDirection, onChangeDirection } = useSettings()

	return (
		<RadioGroup name="themeDirection" value={themeDirection} onChange={onChangeDirection}>
			<Grid dir="ltr" container spacing={2.5}>
				{['ltr', 'rtl'].map((direction, index) => {
					const isSelected = themeDirection === direction

					return (
						<Grid key={direction} item xs={6}>
							<BoxStyle
								sx={{
									...(isSelected && {
										color: 'primary.main',
										boxShadow: (theme) => theme.customShadows.z20
									})
								}}
							>
								<Iconify
									icon={
										index === 0
											? 'ph:align-left-duotone'
											: 'ph:align-right-duotone'
									}
									width={28}
									height={28}
								/>
								<BoxMask value={direction} />
							</BoxStyle>
						</Grid>
					)
				})}
			</Grid>
		</RadioGroup>
	)
}
