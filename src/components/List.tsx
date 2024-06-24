// import React from 'react'
import  styles from './List.module.css'

interface ListProps {
    first_sent?: string | undefined
    second_sent?: string | undefined
    volume?: string | undefined
    unit?:string | undefined
}

export default function Input({
    first_sent,
    second_sent,
    volume,
    unit,
}: ListProps) {
    return (
        <>
            <div className={styles.list}>
                <h2>{first_sent}</h2>
                <h2>{second_sent}</h2>
                <div className={styles.record}>
                    <div className={styles.volume}>
                        <h1>{volume}</h1>
                    </div>
                    <div className={styles.unit}>
                        <h2>{unit}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}