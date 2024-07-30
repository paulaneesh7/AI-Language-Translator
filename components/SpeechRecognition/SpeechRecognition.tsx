"use client";
import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// import { IconMicrophone } from "@tabler/icons-react";
import toast, { Toaster } from "react-hot-toast";
import { HiOutlineMicrophone } from "react-icons/hi";

interface SpeechRecognitionComponentProps {
  setSourceText: (text: string) => void;
}

const SpeechRecognitionComponent = ({
  setSourceText,
}: SpeechRecognitionComponentProps) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  // handling the voice recordings
  const handlingVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    }

    SpeechRecognition.startListening();
  };

  if (!browserSupportsSpeechRecognition) {
    return toast.error("Your browser does not support speech recognition");
  }

  return (
    <div>
      <>
        <Toaster />
        <HiOutlineMicrophone
          size={22}
          className="text-gray-400"
          onClick={handlingVoiceRecording}
        />
      </>
    </div>
  );
};

export default SpeechRecognitionComponent;
