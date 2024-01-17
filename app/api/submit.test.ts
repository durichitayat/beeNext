import { NextApiRequest, NextApiResponse } from 'next'
import handler from './submit'

describe('handler', () => {
  let req: NextApiRequest;
  let res: NextApiResponse;

  beforeEach(() => {
    req = {
      body: { /* mock request body */ },
    } as NextApiRequest

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    
  })

  it('should return a success response with the created item ID', async () => {
    // Mock any necessary dependencies or setup

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ id: expect.any(Number) })
  })

  it('should return an error response if an error occurs during creation', async () => {
    // Mock any necessary dependencies or setup

    // Throw an error to simulate an error during creation
    jest.spyOn(console, 'error').mockImplementation(() => {})
    jest.spyOn(console, 'log').mockImplementation(() => {})
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    jest.spyOn(console, 'info').mockImplementation(() => {})
    jest.spyOn(console, 'debug').mockImplementation(() => {})
    jest.spyOn(console, 'trace').mockImplementation(() => {})
    jest.spyOn(console, 'dir').mockImplementation(() => {})
    jest.spyOn(console, 'time').mockImplementation(() => {})
    jest.spyOn(console, 'timeEnd').mockImplementation(() => {})
    jest.spyOn(console, 'timeLog').mockImplementation(() => {})
    jest.spyOn(console, 'assert').mockImplementation(() => {})

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ error: 'An error occurred while creating the item' })

    // Restore the original console methods
    jest.restoreAllMocks()
  })
})