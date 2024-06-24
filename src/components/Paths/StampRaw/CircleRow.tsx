// import React from 'react'
import styles from './CircleRow.module.css'
import Circle from './Circle'

interface CircleProps {
    first?: number | undefined
    second?: number | undefined
    third?: number | undefined
    fourth?: number | undefined
}

export default function Input({
    first,
    second,
    third
}: CircleProps) {
    return (
        <>
            <div className={styles.circlerow}>
            <Circle
                number={first}
            />
            <Circle
                number={second}
            />
            <Circle
                number={third}
            />
            </div>
            
        </>
    )

}