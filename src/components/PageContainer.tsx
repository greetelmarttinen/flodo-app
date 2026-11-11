import styles from "@/styles/styles";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    children: React.ReactNode;
};

export default function PageContainer({ children }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}