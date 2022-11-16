import React from 'react'
import whitepaperPdf from "../../asset/docs/Whitepapernew.pdf"
import "./WhitePaper.scss"

export const WhitePaperPage = () => {
  return (
    <div className='whitepaper-pdf'>
        <embed src={whitepaperPdf} width='100%' height='100%' type="application/pdf"></embed>
    </div>
  )
}
