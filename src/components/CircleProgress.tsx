import Svg, { Circle } from "react-native-svg";


type Props = {
    progress: number; //0 on tyhjä, 1 on täysi
    size?: number;
    strokeWidth?: number;
};


export default function CircleProgress({ progress, size = 250, strokeWidth = 14 }: Props) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <Svg
            width={size}
            height={size}>
            {/** tausta */}
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#dad7cd"
                strokeWidth={strokeWidth}
                fill="none"
            />
            {/** etenevä kaari */}
            <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#3a5a40"
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - progress)}
                strokeLinecap="round"
                rotation={-90}
                origin={`${size / 2}, ${size / 2}`}
            />

        </Svg>
    )
}