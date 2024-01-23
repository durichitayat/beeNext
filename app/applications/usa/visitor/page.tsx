'use client'

import { Button } from "@tremor/react"
import { useForm } from "react-hook-form"
import FormFields from "app/components/FormFields"
function Page(props: any) {

    let { register, handleSubmit } = useForm();
    const { onChange, onBlur, name, ref } = register('firstName'); 
    // include type check against field path with the name you have supplied.
    
    const onSubmit = async () => {
        // async request which may result error
        try {
          // await fetch()
        } catch (e) {
          // handle your error
        }
    }

    const schema = [
        {
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            subtitle: 'This is a subtitle',
            placeholder: 'John',
            validation: {
                required: "This is a required field",
                maxLength: {
                    value: 20,
                    message: 'This is a required field',
                }
            },
        },
        {
            type: 'select',
            name: 'country',
            label: 'Country',
            subtitle: 'Select your country',
            placeholder: 'select...',
            options: [
                    { value: 'brazil', label: 'Brazil' },
                    { value: 'canada', label: 'Canada' },
                    { value: 'china', label: 'China' },
                    { value: 'france', label: 'France' },
                    { value: 'germany', label: 'Germany' },
                    { value: 'india', label: 'India' },
                    { value: 'italy', label: 'Italy' },
                    { value: 'japan', label: 'Japan' },
                    { value: 'mexico', label: 'Mexico' },
                    { value: 'russia', label: 'Russia' },
                    { value: 'south africa', label: 'South Africa' },
                    { value: 'spain', label: 'Spain' },
                    { value: 'uk', label: 'United Kingdom' },
                    { value: 'usa', label: 'United States' },  
            ],
            validation: {
                required: true,
                message: 'Don\'t forget to select your country',
            },
        },
    ]

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">

        
        
            <form className="space-y-4 max-w-lg" onSubmit={handleSubmit(onSubmit)}>

                {schema.map((field) => (
                    <>
                        <FormFields field={field} />
                    </>
                ))}

                <Button type="submit" >
                    Submit
                </Button>
            </form>
        
    </main>
  )
}

export default Page
