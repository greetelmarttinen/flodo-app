import CircleProgress from "@/components/CircleProgress";
import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { useTimer } from "@/contexts/TimerContext";
import styles from "@/styles/styles";
import { Picker } from "@react-native-picker/picker";
import * as Haptics from "expo-haptics";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  const {
    selectedMinutes,
    setSelectedMinutes,
    secondsLeft,
    running,
    setRunning,
    resetTimer,
  } = useTimer();

  const totalSeconds = selectedMinutes * 60;

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

            <Pressable onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              resetTimer();
            }}>
              <Text style={styles.button}>Reset</Text>
            </Pressable>

            <Pressable onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setRunning(!running);
            }}>
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

