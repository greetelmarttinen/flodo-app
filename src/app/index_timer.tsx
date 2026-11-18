import CircleProgress from "@/components/CircleProgress";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import styles from "@/styles/styles";
import { Picker } from "@react-native-picker/picker";
import { useEffect, useState } from "react";
import { Pressable, Text, Vibration, View } from "react-native";

export default function Index() {
  const [selectedMinutes, setSelectedMinutes] = useState(25);

  const totalSeconds = selectedMinutes * 60;

  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setSecondsLeft(selectedMinutes * 60);
  }, [selectedMinutes]);

  useEffect(() => {
    if (!running) return;

    const id = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          Vibration.vibrate();
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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 0 }}>

          <CircleProgress progress={secondsLeft / totalSeconds} >
            <Text style={{ fontSize: 48 }}>{mm}:{ss}</Text>
          </CircleProgress>

          <Picker
            selectedValue={selectedMinutes}
            onValueChange={(itemValue) => setSelectedMinutes(itemValue)}
            enabled={!running}
            style={{ width: 250, height: 150 }}
            itemStyle={{ fontSize: 20, color: "black" }}
          >
            {[1, 5, 10, 15, 20, 25].map((minute) => (
              <Picker.Item
                key={minute}
                label={`${minute} min`}
                value={minute}
              />
            ))}

          </Picker>

          <View style={styles.timerRow}>

            <Pressable onPress={() => { setRunning(false); setSecondsLeft(totalSeconds); }}>
              <Text style={styles.button}>Reset</Text>
            </Pressable>

            <Pressable onPress={() => setRunning(!running)}>
              <Text style={styles.button}>
                {running ? "Pause" : "Start"}
              </Text>
            </Pressable>

          </View>



        </View>

      </View>

    </PageContainer>
  );
}

