import React from 'react'

export const Api = async (url: string, req?: {}) => {
    if (req) {
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        })
    
        return await response.json()
    }
    const response = await fetch(url)
    return await response.json() 
}