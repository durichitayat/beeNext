'use client';

import { Title, Flex, Button, Dialog, DialogPanel, Select, SelectItem, Textarea } from '@tremor/react';
import { FormEvent, useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Handle form submission
  const [q1Option, setQ1Option] = useState<string>('')
  const [q2Option, setQ2Option] = useState<string>('')
  const [q3Option, setQ3Option] = useState<string>('')
  const [q4Option, setQ4Option] = useState<string>('')
  const [q5Option, setQ5Option] = useState<string>('')

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
        
        <form className='w-1/2 space-y-5' onSubmit={onSubmit}>
        <Title className='mb-4'>H1B Visa Form</Title>
          

          {/* Question 1 / Radio */}
          <div className='block'>
            <label className=''>
              Does the visa applicant have a a valid U.S. or Canadian visa?
            </label>
            <p className='text-slate-400 text-sm pb-2'>If yes, then you will need to upload a copy of the valid visa at a later visa application stage.</p>
            <div className="flex items-center mb-4">
              <input id="q1-yes" type="radio" value="yes" checked={q1Option === "yes"} onChange={(e) => setQ1Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q1-yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div className="flex items-center">
              <input id="q1-no" type="radio" value="no" checked={q1Option === "no"} onChange={(e) => setQ1Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q1-no" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div>

          {/* Question 2 / Radio */}
          <div className='block'>
            <label className=''>
              Does the visa applicant have at least $3,000 CAD?*
            </label>
            <p className='text-slate-400 text-sm pb-2'>This can include money being loaned to the visa applicant. You will need to provide proof of meeting this requirement by uploading a bank statement at a later stage of the application process. If applying as a family then the proof of funds will be done for the family as a whole.</p>
            <div className="flex items-center mb-4">
              <input id="q2-yes" type="radio" value="yes" checked={q2Option === "yes"} onChange={(e) => setQ2Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q2-yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div className="flex items-center">
              <input id="q2-no" type="radio" value="no" checked={q2Option === "no"} onChange={(e) => setQ2Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q2-no" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div>

          {/* Question 3 / Radio */}
          <div className='block'>
            <label className=''>
              Does the visa applicant have a valid passport or travel document?
            </label>
            <p className='text-slate-400 text-sm pb-2'>You will need to upload a valid passport or travel document at a later stage in the application process.</p>
            <div className="flex items-center mb-4">
              <input id="q3-yes" type="radio" value="yes" checked={q3Option === "yes"} onChange={(e) => setQ3Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q3-yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div className="flex items-center">
              <input id="q3-no" type="radio" value="no" checked={q3Option === "no"} onChange={(e) => setQ3Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q3-no" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div>

          {/* Question 4 / Radio */}
          <div className='block'>
            <label className=''>
              Has the visa applicant travelled to any foreign countries in the last 10 years?
            </label>
            <div className="flex items-center mb-4">
              <input id="q4-yes" type="radio" value="yes" checked={q4Option === "yes"} onChange={(e) => setQ4Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q4-yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div className="flex items-center">
              <input id="q4-no" type="radio" value="no" checked={q4Option === "no"} onChange={(e) => setQ4Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q4-no" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div>

          {/* Question 5 / Radio */}
          <div className='block'>
            <label className=''>
              Have you already planned your trip to Canada?
            </label>
            <div className="flex items-center mb-4">
              <input id="q5-yes" type="radio" value="yes" checked={q5Option === "yes"} onChange={(e) => setQ5Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q5-yes" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
            </div>
            <div className="flex items-center">
              <input id="q5-no" type="radio" value="no" checked={q5Option === "no"} onChange={(e) => setQ5Option(e.target.value)}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="q5-no" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
            </div>
          </div>

          {/* Question 7 / Select */}
          <div className='block'>
            <label>
              When would you like to travel?
            </label>
            <Select >
              <SelectItem value="As soon as possible">As soon as posslbe</SelectItem>
              <SelectItem value="Within the next 3 months">Within the next 3 months</SelectItem>
              <SelectItem value="Within the next 6 months">Within the next 6 months</SelectItem>
              <SelectItem value="Within the next 12 months">Within the next 12 months</SelectItem>
              <SelectItem value="More than 12 months">More than 12 months</SelectItem>
            </Select>
          </div>

          {/* Question 8 / Select */}
          <div className='block'>
            <label>
              What is your reason for traveling to Canada?
            </label>
            <Select >
              <SelectItem value="Less than 6 months">Visiting friends or family</SelectItem>
              <SelectItem value="6 months">Business meeting</SelectItem>
              <SelectItem value="12 months">Tourism</SelectItem>
              <SelectItem value="More than 12 months">Other</SelectItem>
            </Select>
          </div>

          {/* Question 9 / TextArea */}
          <div className='block'>
            <label>
              Anything else you'd like to share with us?
            </label>
            <Textarea />
          </div>

          
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
