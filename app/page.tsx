"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, MapPin, Heart, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Benvenuti in Italia",
    subtitle: "Welcome to Italy",
    content: "Discover the beauty, history, and culture of the most romantic country in the world",
    image: "public/italian-countryside.jpg",
    bgColor: "bg-gradient-to-br from-green-600 via-white to-red-600",
    textColor: "text-gray-800",
  },
  {
    id: 2,
    title: "The Colosseum",
    subtitle: "Rome's Ancient Marvel",
    content:
      "Built in 72-80 AD, this iconic amphitheater could hold 50,000-80,000 spectators and hosted gladiatorial contests and public spectacles. A symbol of Imperial Rome's power and engineering prowess.",
    image: "public/colosseum.jpg",
    bgColor: "bg-gradient-to-br from-amber-100 to-orange-200",
    textColor: "text-gray-800",
    facts: ["Largest amphitheater ever built", "UNESCO World Heritage Site", "Receives 6+ million visitors annually"],
  },
  {
    id: 3,
    title: "Venice",
    subtitle: "The Floating City",
    content:
      "Built on 118 small islands separated by canals, Venice is renowned for its architecture, art, and romantic gondola rides. The city is a masterpiece of human creativity.",
    image: "public/venice-canals.jpg",
    bgColor: "bg-gradient-to-br from-blue-100 to-cyan-200",
    textColor: "text-gray-800",
    facts: ["400+ bridges connect the islands", "No cars - only boats and walking", "Famous for Carnival celebrations"],
  },
  {
    id: 4,
    title: "Pizza Napoletana",
    subtitle: "Culinary Perfection",
    content:
      "Originating in Naples, authentic Italian pizza features a thin crust, San Marzano tomatoes, fresh mozzarella, and basil. It's not just food - it's a UNESCO cultural heritage.",
    image: "public/italian-pizza.jpg",
    bgColor: "bg-gradient-to-br from-red-100 to-yellow-200",
    textColor: "text-gray-800",
    facts: [
      "Invented in Naples in 1889",
      "UNESCO Intangible Cultural Heritage",
      "Margherita pizza honors Queen Margherita",
    ],
  },
  {
    id: 5,
    title: "Vatican City",
    subtitle: "Spiritual Heart of Catholicism",
    content:
      "The world's smallest sovereign state, home to the Pope and incredible art including the Sistine Chapel ceiling painted by Michelangelo. A treasure trove of Renaissance masterpieces.",
    image: "public/vatican-city.jpg",
    bgColor: "bg-gradient-to-br from-purple-100 to-indigo-200",
    textColor: "text-gray-800",
    facts: ["Smallest country in the world", "Home to 9 museums", "Sistine Chapel hosts papal conclaves"],
  },
  {
    id: 6,
    title: "Rome",
    subtitle: "The Eternal City",
    content:
      "With over 2,500 years of history, Rome seamlessly blends ancient ruins with modern life. From the Roman Forum to the Trevi Fountain, every corner tells a story.",
    image: "public/rome-fountain.jpg",
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200",
    textColor: "text-gray-800",
    facts: ["Founded in 753 BC", "Contains 280+ fountains", "Historic center is UNESCO protected"],
  },
  {
    id: 7,
    title: "Leaning Tower of Pisa",
    subtitle: "The Famous Tilt",
    content:
      "This 56-meter tall bell tower began leaning during construction due to soft ground. Its unintended tilt made it one of the world's most recognizable architectural wonders.",
    image: "public/leaning-tower-pisa.jpg",
    bgColor: "bg-gradient-to-br from-gray-100 to-stone-200",
    textColor: "text-gray-800",
    facts: ["Leans at 3.97 degrees", "Construction took 344 years", "Stabilized in 2001"],
  },
  {
    id: 8,
    title: "Arrivederci!",
    subtitle: "Until We Meet Again",
    content:
      "Italy's beauty lies not just in its monuments, but in its people, traditions, and way of life. La dolce vita awaits your discovery.",
    image: "public/italian-countryside.jpg",
    bgColor: "bg-gradient-to-br from-green-600 via-white to-red-600",
    textColor: "text-gray-800",
  },
]

export default function ItalyPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const slide = slides[currentSlide]

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Main Slide Area */}
      <div className={`flex-1 ${slide.bgColor} transition-all duration-700 ease-in-out`}>
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
            {/* Content Side */}
            <div className={`space-y-6 ${slide.textColor} order-2 lg:order-1`}>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span className="text-sm font-medium uppercase tracking-wider opacity-70">
                    Slide {currentSlide + 1} of {slides.length}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
                <h2 className="text-xl md:text-2xl font-light opacity-80">{slide.subtitle}</h2>
              </div>

              <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl">{slide.content}</p>

              {slide.facts && (
                <Card className="p-6 bg-white/20 backdrop-blur-sm border-white/30">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    Did You Know?
                  </h3>
                  <ul className="space-y-2">
                    {slide.facts.map((fact, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Heart className="w-4 h-4 mt-1 text-red-500 flex-shrink-0" />
                        <span className="text-sm">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={800}
                  height={600}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-white hover:bg-gray-700"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-white scale-125" : "bg-gray-500 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-white hover:bg-gray-700"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-green-500 via-white to-red-500 h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="bg-gray-900 text-gray-400 text-center py-2 text-sm">
        Use arrow keys ← → or click the navigation buttons to browse slides
      </div>
    </div>
  )
}
