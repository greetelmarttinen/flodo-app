import styles from "@/styles/styles";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Modal, Text, Vibration, View } from "react-native";
import { Button } from "react-native-paper";

type TimerContextType = {
    selectedMinutes: number;
    setSelectedMinutes: (minutes: number) => void;
    secondsLeft: number;
    running: boolean;
    setRunning: (running: boolean) => void;
    resetTimer: () => void;
    showFinishedModal: boolean;
    setShowFinishedModal: (show: boolean) => void;
};

const TimerContext = createContext<TimerContextType | undefined>(undefined);

export function TimerProvider({ children }: { children: ReactNode }) {
    const [selectedMinutes, setSelectedMinutes] = useState(25);
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [running, setRunning] = useState(false);
    const [showFinishedModal, setShowFinishedModal] = useState(false);

    const resetTimer = () => {
        setRunning(false);
        setSecondsLeft(selectedMinutes * 60);
    };

    useEffect(() => {
        setSecondsLeft(selectedMinutes * 60);
    }, [selectedMinutes]);

    useEffect(() => {
        if (!running) return;

        const id = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    Vibration.vibrate();
                    setShowFinishedModal(true);
                    setRunning(false);
                    return 0;
                }

                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [running]);

    return (
        <TimerContext.Provider
            value={{
                selectedMinutes,
                setSelectedMinutes,
                secondsLeft,
                running,
                setRunning,
                resetTimer,
                showFinishedModal,
                setShowFinishedModal,
            }}
        >
            {children}

            <Modal
                visible={showFinishedModal}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setShowFinishedModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>🎉 Good job!</Text>

                        <Text style={styles.modalText}>
                            You've completed your focus session.
                            Take a well-deserved break! ✨
                        </Text>

                        <Button
                            mode="contained"
                            buttonColor="#a3b18a"
                            textColor="black"
                            contentStyle={{ height: 48 }}
                            style={{ width: "100%", borderRadius: 10 }}
                            onPress={() => {
                                setShowFinishedModal(false);
                                resetTimer();
                            }}
                        >
                            OK
                        </Button>
                    </View>
                </View>
            </Modal>
        </TimerContext.Provider>
    );
}

export function useTimer() {
    const context = useContext(TimerContext);

    if (!context) {
        throw new Error("useTimer must be used inside TimerProvider");
    }

    return context;
}
