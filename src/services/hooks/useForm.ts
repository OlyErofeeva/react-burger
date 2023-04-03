import { useState } from 'react'

export function useForm<T>(
  initialValues: T,
  afterChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | (() => void),
) {
  const [inputValues, setInputValues] = useState<T>(initialValues)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setInputValues({ ...inputValues, [name]: value })
    afterChange?.(event)
  }
  return { inputValues, handleInputChange, setInputValues }
}
