import React from 'react'
import './Table.scss'

export default function Table({ data }) {
    return (
        <div className='Table'>
            <table>

                <thead>
                    <tr>
                        <td>{data.title}</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {data && data.details.map((detail, i) => (
                        <tr key={i}>
                            <td>{detail.text}</td>
                            <td>{detail.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
