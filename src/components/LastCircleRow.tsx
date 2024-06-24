// import React from 'react'
import styles from './LastCircleRow.module.css'
import Circle from './Circle'
import GoalCircle from './GoalCircle'

interface CircleProps {
    first?: number | undefined
    second?: number | undefined
    third?: number | undefined
    fourth?: number | undefined
}

export default function Input({
    first,
    second,
    third,
}: CircleProps) {
    return (
        <>
            <div className={styles.lastcirclerow}>
            <Circle
                number={first}
            />
            <Circle
                number={second}
            />
            <Circle
                number={third}
            />
            <GoalCircle
            />
            </div>
            
        </>
    )
}