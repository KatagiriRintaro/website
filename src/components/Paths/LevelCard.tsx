import styles from './LevelCard.module.css'
import CircleRow from './StampRaw/CircleRow'

interface CircleProps {
    level?: number | undefined
    matrix?: number[] | undefined
}

export default function Input({
    level,
    matrix,
}: CircleProps) {
        return (
            <>
                {level && matrix && <div className={styles.circlerow}>
                <CircleRow
                    first={matrix[0]} second={matrix[1]} third={matrix[2]}
                />
                <CircleRow
                    first={matrix[3]} second={matrix[4]} third={matrix[5]}
                />
                {/* <CircleRow
                    first={matrix[6]} second={matrix[7]} third={matrix[8]}
                /> */}
                </div>
                }
            </>
        )
}