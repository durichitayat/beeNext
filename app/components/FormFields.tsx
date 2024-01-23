import { Subtitle, TextInput, Select, SelectItem} from "@tremor/react"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

export default function Field( {field} : any ) {

    let { register, formState: { errors } } = useForm();

    console.log(field)

    return (
    <div key={field.name}>
        <label htmlFor={field.name}>{field.label}
            <Subtitle>{field.subtitle}</Subtitle>
        </label>
        
        {/* TEXT */}
        {field.type === 'text' && (
        <TextInput 
            type={field.type}
            id={field.name}
            {...register(field.name, { 
                required: field.validation.message, 
                maxLength: {
                    value: field.validation.maxLength.value,
                    message: field.validation.maxLength.message
                },
                onBlur: (e) => console.log(e)
            })} // register it into the hook
            placeholder={field.placeholder}
        />
        )}

        {/* SELECT */}
        {field.type === 'select' && (
        <Select 
            id={field.name}
            {...register(field.name, { 
                required: field.validation.message
            })}
            placeholder={field.placeholder}
        >
            {field.options.map((option: any) => (
                <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
        </Select>
        )}

        <ErrorMessage errors={errors} name={field.name} />

        <ErrorMessage
            errors={errors}
            name={field.name}
            render={({ message }) => <p>{message}</p>}
        />

    </div>
    )
}