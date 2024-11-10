"use client";

import {HeartIcon, HeartOff, MessageCircleMore } from "lucide-react"

export default function Home() {
  return (
    <div className="flex justify-center items-center  w-full h-[100dvh] bg-pink-200">
      <div className="max-w-sm w-full bg-white h-[100dvh]">
        <div className="flex justify-between bg-red-500 px-4">        
          <span className="font-bold">Instagram</span>
          
          <div className="flex items-center gap-2">
            <button>
              <MessageCircleMore className="w-6 h-6"/>
            </button>

            <button onClick={() => like_break()}>
              <HeartOff className="w-6 h-6" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

function like_break() {
  //console.log("like break Button is pushed")
  alert("NO LIKE!!!")
  //prompt("")
  //confirm("yse or no!")
}