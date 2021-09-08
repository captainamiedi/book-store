import React from 'react'
import { useHistory } from 'react-router'

export default function BackComponent({handleBack}) {
    let history =  useHistory()
    return (
        <div onClick={handleBack}>
            <i className="fas fa-arrow-left"></i>
            <span style={{padding: '12px', fontWeight: '700'}}>Back</span>
        </div>
    )
}
