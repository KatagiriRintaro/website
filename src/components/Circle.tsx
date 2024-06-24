// import React from 'react'
import  styles from './Circle.module.css'

interface CircleProps {
    number?: number | undefined
}

export default function Input({ number}: CircleProps) {
    return (
        <>
            {number !== 100 && number !== 10000 &&(
                <div className={styles.circle}>
                <svg width="60px" height="60px">
                    <circle cx="30" cy="30" r="30" />
                    <text x="30" y="30" text-anchor="middle" dominant-baseline="middle" fill="white">{number}</text>
                </svg>
            </div>
            )}

            {number == 10000 && (
                <div className={styles.goalcircle}>
                <svg width="60px" height="60px">
                    <circle cx="30" cy="30" r="30" fill="red" />
                    <text x="30" y="30" text-anchor="middle" dominant-baseline="middle" fill="white">GOAL</text>
                </svg>
                </div>
            )}

            {number === 100 && (
                <div className={styles.stamp}>
                    <img src={`https://storage.googleapis.com/tablet2/kirinchan/Stamp.png`} 
            alt="Image" /> 
                </div>
            )}
            
        </>
    )
}