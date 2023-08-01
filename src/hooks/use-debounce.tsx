import React from "react"

export default function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = React.useState(value)

	React.useEffect(()=>{
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500)

		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])

	return debouncedValue
}