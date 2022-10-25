import React from 'react'
import './WhitePaper.scss'

import pdf_whitepaper from '../../../asset/docs/whitepaper.pdf'

export default function WhitePaper() {
    return (
        <div className='WhitePaper'>
            <embed src={pdf_whitepaper} width='100%' height='100%' type="application/pdf"></embed>
        </div>
    )
}