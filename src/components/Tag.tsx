import { getColor } from "../utils/helper.tsx";
import { Text } from "./Text.tsx";

export function Tag ({ text }: {text: string}) {
    return (
        <span style={{
            backgroundColor: getColor('white'),
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            padding: '0.25rem 0.4rem',
            borderRadius: '10%',
            cursor: 'pointer',
            pointerEvents: 'none'
        }}>
            <Text text={text} size='extra-small' color='dark-gray' style={{ fontWeight: '500' }}/>
        </span>
    )
}
