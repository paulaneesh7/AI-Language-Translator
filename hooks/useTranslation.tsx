import { useState, useEffect } from "react";
import toast from "react-hot-toast";

interface TranslationProps {
  sourceText: string;
  selectedLanguage: string;
}

const useTranslation = ({ sourceText, selectedLanguage }: TranslationProps) => {
  const [targetText, setTargetText] = useState<string>("");

  const handleTranslation = async () => {
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sourceText, selectedLanguage }),
      });

      const data = await response.json();
      setTargetText(data.response);
    } catch (error) {
      toast.error("Error while translating");
      console.error("Error while translating:", error);
    }
  };

  useEffect(() => {
    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslation();
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslation;
