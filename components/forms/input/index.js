export default function Input({placeholder, value, onChange}) {
    
    const handleChange = (event) => {
        const value = event.target.value;
        onChange(value)
    }
    
    return(
        <input 
            className = "bg-gray-200 py-3 px-6 w-full sm:w-96 rounded"
            placeholder = {placeholder}
            value = {value}
            onChange = {handleChange}
        />
    )
}