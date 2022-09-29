import React from 'react'
import './Doc.scss'
import data from '../../documentation.json'

export default function Doc() {
    return (
        <div className='Doc'>
            <table>
                <thead>
                    <tr>
                        <th>Method</th>
                        <th>endpoint</th>
                        <th>request</th>
                        <th>response</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((obj) => {
                            return (
                                <tr>
                                    <td>{obj.Method}</td>
                                    <td>{obj.URL}</td>
                                    <td>{obj.Request.Body}</td>
                                    {/* <td>{obj.Response[200]}</td> */}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}