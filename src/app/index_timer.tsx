import CircleProgress from "@/components/CircleProgress";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import styles from "@/styles/styles";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const minutes = 25;
  const totalSeconds = minutes * 60;

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);


  const mm = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
  const ss = (secondsLeft % 60).toString().padStart(2, "0");


  return (
    <PageContainer>
      <PageHeader title="Timer" />
      <View style={styles.pageContent}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <CircleProgress progress={secondsLeft / totalSeconds} />
          <Text style={{ fontSize: 48, marginTop: 20 }}>{mm}:{ss}</Text>

          <Pressable onPress={() => setRunning(!running)}>
            <Text style={{ fontSize: 20, marginTop: 20 }}>
              {running ? "Pause" : "Start"}
            </Text>
          </Pressable>

          <Pressable onPress={() => { setRunning(false); setSecondsLeft(totalSeconds); }}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>Reset</Text>
          </Pressable>
        </View>

      </View>

    </PageContainer>
  );
}

