'use client';

import { TextInput, Title, Flex, Button } from '@tremor/react';
import { FormEvent, useState } from 'react'

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  
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
          <TextInput placeholder="input 1" type="text" name="name" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="input 2" type="text" name="name2" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="input 3" type="text" name="name3" className='basis-1/2 placeholder-slate-50'/>
          <TextInput placeholder="input 4" type="text" name="name4" className='basis-1/2 placeholder-slate-50'/>
          <Button type="submit">Submit</Button>
        </form>
      </Flex>
    </main>
  );
}
