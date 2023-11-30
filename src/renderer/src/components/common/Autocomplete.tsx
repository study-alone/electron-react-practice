import { Autocomplete as MuiAutocomplete, TextField as MuiTextField } from '@mui/material'
import type { ChipProps } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

interface AutocompleteProps {
	name: string
	label: string
	helperText?: React.ReactNode
	multiple?: boolean
	freeSolo?: boolean
	options: string[]
	ChipProps?: ChipProps
}

export const Autocomplete = ({
	label,
	name,
	options,
	ChipProps,
	freeSolo,
	helperText,
	multiple
}: AutocompleteProps) => {
	const { control, setValue } = useFormContext()

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<MuiAutocomplete
					{...field}
					fullWidth
					value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
					onChange={(event, newValue) =>
						setValue(name, newValue, { shouldValidate: true })
					}
					options={options}
					ChipProps={ChipProps}
					multiple={multiple}
					freeSolo={freeSolo}
					renderInput={(params) => (
						<MuiTextField
							label={label}
							error={!!error}
							helperText={error ? error.message : helperText}
							{...params}
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							InputLabelProps={params.InputLabelProps}
						/>
					)}
				/>
			)}
		/>
	)
}
