import type React from 'react'
import { useState } from 'react'

export const useSearch = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const [tempValue, setTempValue] = useState(initialValue)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTempValue(value)
  }

  return {
    value,
    tempValue,
    onChange,
    onSubmit,
  }
}
