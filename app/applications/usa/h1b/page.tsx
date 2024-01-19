'use client';

import { DatePicker, TextInput, Title, Flex, Button, Dialog, DialogPanel } from '@tremor/react';
import { FormEvent, useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    setIsLoading(true)
    setError(null) // Clear previous errors when a new request starts
    
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/applications', {
        method: 'POST',
        body: formData,
      })
 
      if (!response.ok) {
        alert('Failed to submit the data. Please try again.')
        throw new Error('Failed to submit the data. Please try again.')
      }
 
      // Handle response if necessary
      const data = await response.json()
      console.log("data: ", data)
    } catch (error: any) {
      // Capture the error message to display to the user
      setError(error?.message || 'An error occurred')
      console.error(error)
    } finally {
      setIsLoading(false)
      setIsOpen(true)
    }
  }
 

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Flex
          className="space-x-2 mb-8 w-full"
          flexDirection='col'
          justifyContent='center'
          alignItems='start'
      >
        <Title className='mb-4'>H1B Visa Form</Title>
        <form className='w-1/2 space-y-5' onSubmit={onSubmit}>
          <TextInput placeholder="Applicant Name" type="text" name="applicantName" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="Employer Name" type="text" name="employerName" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="Job Title" type="text" name="jobTitle" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="Job Location" type="text" name="jobLocation" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="Prevailing Wage" type="text" name="prevailingWage" className='basis-1/2 placeholder-slate-50'/>
          <DatePicker placeholder="Start Date" className='basis-1/2 placeholder-slate-50'/>
          <DatePicker placeholder="End Date" className='basis-1/2 placeholder-slate-50'/>
          
          <Button type="submit">Submit</Button>
        </form>

        {/* Dialog: Save Success */}
        <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
          <DialogPanel>
            <Title className="mb-3">Application Saved Successfully</Title>
            Your application has been created successfully. 
            An advisor is reviewing your application and will contact you shortly.
            <div className="mt-3">
              <Button variant="light" onClick={() => setIsOpen(false)}>
                Got it!
              </Button>
            </div>
          </DialogPanel>
        </Dialog>

        {/* Loading Wheel */}
        {isLoading ? (
        <div className="fixed -left-5 inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-center">
            <div role="status">
              <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        ) : null}

      </Flex>
    </main>
  );
}
