import PropTypes from 'prop-types'

import './style'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { ContainerInput } from './style'

export function Input({ id, label, type, value, onChange }) {
	const [showPassword, setShowPassword] = useState(false)

	const isPassword = type === 'password'

	return (
		<ContainerInput>
			<div class="field">
				<input
					id={id}
					type={isPassword && showPassword ? 'text' : type}
					value={value}
					onChange={onChange}
					required
					placeholder=" "
				/>
				<label htmlFor={id}>{label}</label>
				{isPassword && (
					<button type="button" className="eye-button" onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
					</button>
				)}
				<span class="underline"></span>
			</div>
		</ContainerInput>
	)
}

Input.propTypes = {
	children: PropTypes.string,
}
