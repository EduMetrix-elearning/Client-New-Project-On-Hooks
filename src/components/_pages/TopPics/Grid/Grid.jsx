import React from 'react'
import './Grid.scss'

export default function Grid({ items }) {
    // console.log(items)

    let arr = [...items, ...items, ...items, ...items, ...items, ...items]

    return (
        <div className='Grid'>
            {
                [...Array(parseInt((arr.length / 11).toFixed()))].map((value, i) => {
                    return (
                        <div key={i} className='block'>
                            {
                                arr.splice(0, 11).map((item, index) => {
                                    return (
                                        <figure key={index} className={"item item_" + (index + 1)}>
                                            <img src={item.adminPicture_uploaded} alt="" />
                                            <figcaption>{item.message}</figcaption>
                                        </figure>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}