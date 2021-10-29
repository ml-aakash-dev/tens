import { useRouter } from 'next/dist/client/router'
import React from 'react'

const WhytoChooseThisService = () => {
    const {query} = useRouter() 
    let id = query.projectName

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default WhytoChooseThisService
