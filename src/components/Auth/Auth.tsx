interface Props {
    value: string;
}

export default function Auth(prop: Props) {
    return (
        <div>
            <div>
                {prop.value}
            </div>
        </div>
    )
}

