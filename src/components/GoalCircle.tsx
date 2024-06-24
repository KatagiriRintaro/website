// import React from 'react'
import  styles from './GoalCircle.module.css'

interface CircleProps {
}

export default function Input({
}: CircleProps) {
    return (
        <>
            <div className={styles.goalcircle}>
                <svg width="60px" height="60px">
                    <circle cx="30" cy="30" r="30" fill="red" />
                    <text x="30" y="30" text-anchor="middle" dominant-baseline="middle" fill="white">GOAL</text>
                </svg>
            </div>
        </>
    )
}