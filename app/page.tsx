"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Heart, Gift, Star, Sparkles, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MorphingText } from "@/components/magicui/morphing-text";
import Link from "next/link";

export default function BirthdayCelebration() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  const texts = [
    "Siddhi",
    "Mehta",
    "Siddhu",
    "Weirdo",
    "Peguin",
    "Coder",
    "Lover",
  ];

  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Using CSS animation-play-state to pause in current position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.animationPlayState = isPaused ? "paused" : "running";
    }
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950 flex flex-col items-center justify-between px-4 py-8">
      {/* Header with decorative elements */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="relative h-32">
          {/* <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 dark:from-pink-800 dark:via-purple-800 dark:to-indigo-800"></div> */}
          <div className="absolute top-8 left-0 w-full h-24 bg-gradient-to-b from-pink-300 to-transparent dark:from-pink-800"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 mt-16">
        {/* Hero Section with enhanced styling */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cake className="h-10 w-10 text-pink-500" />
            <SparklesText
              className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
              text="Happy Birthday"
            />
            <Cake className="h-10 w-10 text-pink-500" />
          </div>

          <div className="mb-6">
            <MorphingText
              className="text-4xl font-bold text-yellow-600 dark:text-yellow-400"
              texts={texts}
            />
          </div>

          {/* Custom Carousel with enhanced styling */}
          <div
            className="relative w-full overflow-hidden rounded-xl bg-white/30 dark:bg-black/20 backdrop-blur-sm p-6 my-8 shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <style jsx global>{`
              @keyframes carousel {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
            <div
              ref={carouselRef}
              className="flex items-center gap-6"
              style={{
                animation: "carousel 20s linear infinite",
                width: "fit-content",
              }}
            >
              {/* Duplicate images for seamless loop */}
              {[...images, ...images].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 transform transition-transform hover:scale-105"
                >
                  <div className="p-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full">
                    <Image
                      src={image}
                      alt="Birthday Celebration"
                      width={120}
                      height={120}
                      className="w-32 h-32 object-cover rounded-full border-2 border-white dark:border-gray-800"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <Link href="/memories" passHref>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full px-6 py-2 shadow-md transition-all hover:shadow-lg">
              <Heart className="mr-2 h-4 w-4" fill="white" />
              Our Memories
            </Button>
          </Link>
        </div>

        {/* Heartfelt Message with enhanced styling */}
        <section className="w-full px-4 py-10">
          <Card className="bg-gradient-to-r from-pink-100/80 to-purple-100/80 dark:from-pink-950/40 dark:to-purple-950/40 border-none shadow-2xl backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-6 -mr-6">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-pink-400 dark:from-yellow-500 dark:to-pink-600 rounded-full opacity-40 blur-xl"></div>
            </div>

            <CardContent className="pt-12 pb-10 px-8">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* <Star className="h-12 w-12 text-yellow-500 animate-spin-slow" /> */}
                  <Heart className="h-8 w-8 text-pink-500 absolute top-2 left-2" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                My Birthday Wish For You
              </h2>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed italic font-light">
                "On this special day, I wish you all the happiness your heart
                can hold, all the dreams your mind can imagine, and all the love
                this world can give. May your birthday be as wonderful as you
                are, and may the coming year bring you countless reasons to
                smile. I'm so blessed to have you in my life, and I promise to
                cherish every moment we share together."
              </p>

              <div className="mt-10 flex justify-center">
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-8 py-6 rounded-full shadow-lg transform transition-all hover:scale-105 flex items-center gap-2 h-12">
                  <Gift className="h-5 w-5" />
                  <span>Celebrate With Me</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer with enhanced styling */}
      <footer className="w-full mt-10 py-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Heart className="h-5 w-5 text-pink-500" />
          <p className="text-gray-600 dark:text-gray-300 font-medium">
            Made with love, for the one who means everything to me.
          </p>
          <Heart className="h-5 w-5 text-pink-500" />
        </div>
      </footer>
    </div>
  );
}
