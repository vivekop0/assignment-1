'use client'
import Image from "next/image";
import logo from '@/public/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.avif';
import DropdownButton from "./Button";
import { useState } from "react";

const Hero = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-8">
            <div className="flex flex-col items-center mb-6">
                <div className="mb-4">
                    <Image src={logo} alt="logo" width={100} height={100} />
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-2">VideoDubber - Fast Video Translator</h1>
                    <h2 className="text-lg text-gray-600 mb-4">Translate videos in your own voice, globalize in a click!</h2>
                </div>
                <div className="flex space-x-4 mb-6">
                    <DropdownButton />
                    <button 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg shadow"
                        onClick={() => setCount(count + 1)}
                    >
                        UPVOTE {count}
                    </button>
                </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner text-center">
                <p className="text-gray-700 mb-4">
                    Translate video in one click with AI to 150+ languages & accents in original voice. Prime features: 1. 0.1 USD/min for premium video translation with voice cloning 2. Unlimited Editing 3. Exports MP4/SRT/MP3
                </p>
                <h3 className="text-gray-500 mb-4">Launched in SaaS | Artificial Intelligence | Video</h3>
                <ul className="flex justify-center space-x-8 text-blue-500">
                    <li>Discuss</li>
                    <li>Collect</li>
                    <li>Share</li>
                    <li>Stats</li>
                </ul>
            </div>
        </div>
    );
};

export default Hero;
