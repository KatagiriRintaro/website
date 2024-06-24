// import React from 'react'
import styles from './Circle.module.css'

interface CircleProps {
    number?: number | undefined
}

export default function Input({number}: CircleProps) {
    return (
        <>
            {/* 灰色丸＋数字 */}
            {number && number >= 1 && number <= 20 && (
                <div className={styles.NumberCircle}>
                <svg width="80px" height="80px">
                    <circle cx="40" cy="40" r="40" />
                    <text x="40" y="40" text-anchor="middle" dominant-baseline="middle" fill="white">{number}</text>
                </svg>
            </div>
            )}
            {/* きりんちゃんスタンプの位置 */}
            {number === 100 && (
                <div className={styles.stamp}>
                    <img src={`https://storage.googleapis.com/tablet2/kirinchan/Stamp.png`} 
            alt="Image" /> 
                </div>
            )}

            {/* 灰色丸のみ */}
            {number === 1000 && (
                <div className={styles.OnlyCircle}>
                <svg width="80px" height="80px">
                    <circle cx="40" cy="40" r="40" />
                </svg>
            </div>
            )}
            
            {/* ゴールの位置 */}
            {number === 10000 && (
                <div className={styles.goalCircle}>
                <svg width="80px" height="80px">
                    <circle cx="40" cy="40" r="40" fill="red" />
                    <text x="40" y="40" text-anchor="middle" dominant-baseline="middle" fill="white">GOAL</text>
                </svg>
            </div>
            )}
        </>
    )
}