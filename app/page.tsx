'use client'
import Image from "next/image";
import  TextArea  from "../components/Inputs/TextArea";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>();

  return (
    <>
      {/* Div for the dotted-bg */}
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

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
                  {/* Div that contains the text-area */}
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

                    <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex space-x-2 flex-row">
                          
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
