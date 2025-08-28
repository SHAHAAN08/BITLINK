"use client"
import React from 'react'
import { useState } from 'react'

const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async () => {
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")
      const raw = JSON.stringify({
        url: url,
        shorturl: shorturl
      })
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch("api/generate", requestOptions)
      .then(response => response.json())  
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)
      })
      .catch(error => console.log('error', error));
    }
  return (
    <div>
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate Your Short URls</h1>
            <input type="text"
            value={url}
            onChange={(e) => seturl(e.target.value)}
            className='bg-white px-4 py-2 focus:outline-purple-600 rounded-md '
            placeholder='Enter your URL here'/>
            <input type="text"
            value={shorturl}
            onChange={(e) => setshorturl(e.target.value)}
            className='bg-white px-4 py-2 focus:outline-purple-600 rounded-md '
            placeholder='Enter your prefered Short URL here'/>
            <button onClick={generate} className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py1 font-bold cursor-pointer'>Generate</button>
        </div>
        {
          generated && 
          <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Your Shortened URL</h1>
            <a href={generated} target='_blank' className='text-blue-500 underline'>{generated}</a>
          </div>
        }
    </div>
  )
}

export default shorten