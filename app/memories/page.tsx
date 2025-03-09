/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";

export default function MemoriesPage() {
  // Sample memories data - in a real app, this would come from an API or database
  const [memories, setMemories] = useState([
    {
      id: 1,
      title: "Churgate Date",
      description:
        "Ate rustom ice cream at Churgate, we both disliked it😁, then went to king-kong vs godzilla movie. A day spent very well.",
      imageUrl: "/memo/1.jpg",
      favorite: false,
    },
    {
      id: 2,
      title: "Traditional Day",
      description:
        "You wore a red saree and made me feel so good and jealous at the same time cause everyone was looking at you🥲😔. The most beatiful girl at that event",
      imageUrl: "/memo/2.jpg",
      favorite: true,
    },
    {
      id: 3,
      title: "My bday date",
      description:
        "One of my best date with you as i spent my bday with you, You planned everything for us. The best bday celebration with you. You made me feel so happy and loved you so much. You are the best girl ever",
      imageUrl: "/memo/3.jpg",
      favorite: true,
    },
    {
      id: 4,
      title: "Iskon Date",
      description:
        "The best date every, so peaceful and relaxing. The best day every and so devotional",
      imageUrl: "/memo/4.jpg",
      favorite: false,
    },
    {
      id: 5,
      title: "Cosplay Day",
      description:
        "Got to be Ross to my Racheal, hope we dont have so complicated relationship like them",
      imageUrl: "/memo/5.jpg",
      favorite: true,
    },
    {
      id: 6,
      title: "Date payed by your sis",
      description:
        "Stomach full of food and heart full of your love, want to go on more food dates with you",
      imageUrl: "/memo/6.jpg",
      favorite: false,
    },
    {
      id: 7,
      title: "Our first Hackathon win",
      description:
        "Was so happy to win the hackathon with you. You are the best mobile developer i know.",
      imageUrl: "/memo/7.jpg",
      favorite: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setMemories(
      memories.map((memory) =>
        memory.id === id ? { ...memory, favorite: !memory.favorite } : memory
      )
    );
  };

  // Filter memories based on search term and active filter
  const filteredMemories = memories.filter((memory) => {
    const matchesSearch =
      memory.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "favorites") return matchesSearch && memory.favorite;
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-900">
            Our Sweet Memories
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of our beautiful moments together, each one a treasure
            that makes our journey special.
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative w-full max-w-md">
              <Input
                type="text"
                placeholder="Search our memories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border-2 border-purple-200 rounded-full focus:border-purple-400 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400 absolute left-3 top-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => setActiveFilter("all")}
                variant={activeFilter === "all" ? "default" : "outline"}
                className={`rounded-full ${
                  activeFilter === "all"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "border-purple-300 text-purple-700 hover:bg-purple-100"
                }`}
              >
                All Memories
              </Button>
              <Button
                onClick={() => setActiveFilter("favorites")}
                variant={activeFilter === "favorites" ? "default" : "outline"}
                className={`rounded-full ${
                  activeFilter === "favorites"
                    ? "bg-pink-600 hover:bg-pink-700"
                    : "border-pink-300 text-pink-700 hover:bg-pink-100"
                }`}
              >
                Favorites
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((memory) => (
            <div key={memory.id} className="flex justify-center">
              <Card className="w-full max-w-md overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <CardHeader className="p-0">
                    <Lens
                      zoomFactor={2}
                      lensSize={150}
                      isStatic={false}
                      ariaLabel={`Zoom ${memory.title}`}
                    >
                      <div className="h-150 overflow-hidden">
                        <img
                          src={memory.imageUrl}
                          alt={memory.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Lens>
                  </CardHeader>
                  <button
                    onClick={() => toggleFavorite(memory.id)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md z-10 transition-transform hover:scale-110"
                    aria-label={
                      memory.favorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    <Heart
                      size={20}
                      fill={memory.favorite ? "#f43f5e" : "none"}
                      stroke={memory.favorite ? "#f43f5e" : "currentColor"}
                      className="transition-colors"
                    />
                  </button>
                </div>

                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold text-purple-900 mb-3">
                    {memory.title}
                  </CardTitle>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {memory.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-100">
                  <p className="text-gray-600 text-sm">
                    Will you go out with me
                  </p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {filteredMemories.length === 0 && (
          <div className="text-center py-16 bg-white bg-opacity-70 rounded-xl shadow-sm">
            <img
              src="/api/placeholder/200/200"
              alt="No memories found"
              className="w-32 h-32 mx-auto mb-4 opacity-50"
            />
            <h2 className="text-2xl font-semibold text-gray-600">
              No memories found
            </h2>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or add new memories
            </p>
            <Button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-6 py-2">
              Add New Memory
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
