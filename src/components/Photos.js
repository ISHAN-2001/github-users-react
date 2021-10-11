import React from 'react'
import { useState } from 'react'
import UseFetch from '../hooks/UseFetch'
import PhotoGrid from './PhotoGrid'

export default function Photos() {
    let { data: photos, isPending, error } = UseFetch('https://api.github.com/users')
    const [value, setvalue] = useState('')
    
    return (
        <div className="Photos">

            <input type="text" value={value} onChange={(e)=> setvalue(e.target.value)} placeholder="Filter Users" />

            {error && <div>Failed to Fetch</div>}
            
            {isPending && <div>Loading</div>}
            
            {value === '' && photos && <PhotoGrid photos={photos} />}
            
            {value !== '' && photos && <PhotoGrid photos={photos.filter(item => item.login.includes(value))} /> }
            
        </div>
    )
}
