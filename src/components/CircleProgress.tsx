import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle } from "react-native-svg";


type Props = {
    progress: number; //0 on tyhjä, 1 on täysi
    size?: number;
    strokeWidth?: number;
    children?: ReactNode;
};


export default function CircleProgress({
    progress,
    size = 250,
    strokeWidth = 14,
    children,
}: Props) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
        <View style={{ width: size, height: size }}>
            <Svg
                width={size}
                height={size}>
                {/** taustakaari */}
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#c5ccba"
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

            {/** numerot ympyrän keskellä */}
            <View style={[StyleSheet.absoluteFill, { alignItems: "center", justifyContent: "center" }]}>
                {children}
            </View>

        </View>
    );
}