import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  console.log(data)
  try {
    const id = 1 // replace with the create response
    res.status(200).json({ id })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the item' })
  }
}