import { forwardRef, memo, useMemo, useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { IconButton, TextField as MuiTextField } from '@mui/material'

import type { TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { Eye, EyeSlash } from 'phosphor-react'

const PasswordVisibleIcon = memo<{ onClick: () => void; show: boolean }>(({ onClick, show }) => {
	return <IconButton onClick={onClick}>{show ? <Eye /> : <EyeSlash />}</IconButton>
})
PasswordVisibleIcon.displayName = 'PasswordVisibleIcon'

type TextFieldProps = MuiTextFieldProps

export const TextField = forwardRef<HTMLInputElement, WithRequiredProperty<TextFieldProps, 'name'>>(
	({ name, helperText, type, ...restProps }, ref) => {
		const { control } = useFormContext()
		const [showPassword, setShowPassword] = useState(false)

		const conditionalProps = useMemo<TextFieldProps['InputProps']>(() => {
			if (type === 'password') {
				return {
					endAdornment: (
						<PasswordVisibleIcon
							onClick={() => setShowPassword((prev) => !prev)}
							show={showPassword}
						/>
					)
				}
			}
			return
		}, [showPassword, type])

		const typeProp = useMemo(() => {
			const isPassword = type === 'password'
			return isPassword ? (showPassword ? 'text' : 'password') : 'text'
		}, [showPassword, type])

		return (
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState: { error } }) => (
					<MuiTextField
						fullWidth
						{...field}
						type={typeProp}
						error={!!error}
						helperText={error ? error.message : helperText}
						InputProps={conditionalProps}
						{...restProps}
						ref={ref}
					/>
				)}
			/>
		)
	}
)

TextField.displayName = 'TextField'
