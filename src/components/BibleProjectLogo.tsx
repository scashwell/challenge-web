import { TextComp } from "./TextComp.tsx";

export function BibleProjectLogo() {

    return (
        <div>
            <TextComp
                color='white'
                size='extra-large'
                style={{ fontWeight: 700 }}
            >
                {'BibleProject'}
            </TextComp>
        </div>
    );
}
