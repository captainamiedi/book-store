import React from 'react'

export default function BookDescription({description}) {
    return (
        <div dangerouslySetInnerHTML={{__html: description}} style={{whiteSpace: 'pre-wrap'}} />
    )
}
