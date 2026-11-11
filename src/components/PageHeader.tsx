import styles from "@/styles/styles";
import { Text, View } from "react-native";

type Props = {
    title: string;
};

export default function PageHeader({ title }: Props) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    );
}