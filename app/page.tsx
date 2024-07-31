"use client";
import Image from "next/image";
import "regenerator-runtime/runtime";
import { rtfToText } from "@/utils/rtfToText";
import { MdOutlineDone } from "react-icons/md";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import useTranslation from "@/hooks/useTranslation";
import TextArea from "@/components/Inputs/TextArea";

import LinkPaste from "@/components/Inputs/LinkPaste";
import FileUpload from "@/components/Inputs/FileUpload";
import { ChangeEvent, useState, useTransition } from "react";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import LanguageSelector from "@/components/Inputs/LanguageSelector";
import toast from "react-hot-toast";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favourite, setFavourite] = useState<boolean>(false);
  const [languages, setLanguages] = useState<string[]>([
    "English",
    "French",
    "Spanish",
    "German",
    "Portuguese",
    "Hindi",
    "Chinese",
    "Japanese",
    "Korean",
    "Turkish",
    "Arabic",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Spanish");
  const targetText = useTranslation({ sourceText, selectedLanguage });

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      {/* Div for the dotted-bg */}
      <div className="h-[50rem] w-full dark:bg-black bg-black  dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        {/* This is the div which contains everything */}
        <div className="relative overflow-hidden h-screen">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 py-10 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold ">
                Poly <span className="text-blue-600">Lingua</span>
              </h1>
              <p className="mt-3 text-neutral-400">
                PolyLingua : Bridging Voices, Connecting worlds
              </p>

              <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                  {/* Div that contains the source text-area */}
                  <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                    {/* Source Text Area */}
                    <TextArea
                      id="source-language"
                      value={sourceText}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setSourceText(e.target.value)
                      }
                      placeholder="Source Language"
                    />

                    {/* Icons */}
                    <div className="flex flex-row justify-between w-full">
                      <span className="cursor-pointer flex space-x-2 flex-row">
                        <SpeechRecognitionComponent
                          setSourceText={setSourceText}
                        />
                        <IoMdVolumeHigh
                          size={22}
                          onClick={() => handleAudioPlayback(sourceText)}
                        />
                        {/* File Upload Component */}
                        <FileUpload handleFileUpload={handleFileUpload} />
                        <LinkPaste handleLinkPaste={handleLinkPaste} />
                      </span>

                      <span className="text-sm pr-4">
                        {sourceText.length} / 2000
                      </span>
                    </div>
                  </div>

                  {/* Div that contains the target text-area */}
                  <div className="relative z-10 flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                    {/* Source Text Area */}
                    <TextArea
                      id="target-language"
                      value={targetText}
                      onChange={(e) => {}}
                      placeholder="Target Language"
                    />
                    <div className="flex justify-between w-full">
                      <span className="cursor-pointer flex space-x-2 items-center">
                        <LanguageSelector
                          selectedLanguage={selectedLanguage}
                          setSelectedLanguage={setSelectedLanguage}
                          languages={languages}
                        />
                        <IoMdVolumeHigh
                          size={22}
                          onClick={() => handleAudioPlayback(targetText)}
                        />
                      </span>
                      <div className="flex items-center space-x-2 pr-4 cursor-pointer">
                        {copied ? (
                          <MdOutlineDone size={22} />
                        ) : (
                          <IoCopyOutline
                            size={22}
                            onClick={handleCopyToClipboard}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
