"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar"
import { Calendar, LocateFixed, ChevronRight, Menu } from "lucide-react"
import { Marcellus } from "next/font/google"
import { useState, useEffect } from "react"

const marcellus = Marcellus({
     weight: ['400'], subsets: ['latin'],
});

export default function Page(){
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div translate="no" className={`space-y-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-30'}`}>
      {/* hero */}
      <div className="flex min-h-[50vh] min-w-full items-center justify-center bg-[url('hero-bg2.jpg')] bg-cover bg-center relative">
        <div className="flex min-h-[50vh] min-w-full absolute bg-black/20 backdrop-blur-xs items-center justify-center flex-col">
          {/* Navigation */}
          <div className="absolute top-0 w-full flex items-center px-4 sm:px-8 lg:px-32 py-4 lg:py-8">
            {/* Mobile Navigation - Positioned to the right */}
            <Menubar className="flex md:hidden flex-row py-2 rounded-none ml-auto bg-white/0 border-0 ">
              <MenubarMenu>
                <MenubarTrigger className="text-white transition-all duration-300">
                  <Menu />
                </MenubarTrigger>
                <MenubarContent className="rounded-none border-0 bg-amber-50">
                  <MenubarItem className={`${marcellus.className}`}>
                    <Link href="/">Home</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className={`${marcellus.className}`}>
                    <Link href="/about-us">About Us</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className={`${marcellus.className}`}>
                    <Link href="/">Tour Packages</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className={`${marcellus.className}`}>
                    <Link href="/blog">Blog</Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className={`${marcellus.className}`}>
                    <Link href="/gallery">Gallery</Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* Desktop Navigation - Centered */}
            <Card className="hidden md:flex flex-row py-4 px-4 xl:px-8 border-1 border-white/50 rounded-none bg-white/20 backdrop-blur-md shadow-md justify-center items-center mx-auto">
              <Link href="/" className="text-white text-xs lg:text-sm hover:text-amber-500 px-0 lg:px-2 rounded-xl transition-all duration-300">HOME</Link>
              <Link href="/about-us" className="text-white text-xs lg:text-sm hover:text-amber-500 px-0 lg:px-2 rounded-xl transition-all duration-300">ABOUT</Link>
              <Link href="/" className="text-white text-xs lg:text-sm hover:text-amber-500 px-0 lg:px-2 rounded-xl transition-all duration-300">TOUR PACKAGES</Link>
              <Link href="/blog" className="text-white text-xs lg:text-sm hover:text-amber-500 px-0 lg:px-2 rounded-xl transition-all duration-300">BLOG</Link>
              <Link href="/gallery" className="text-white text-xs lg:text-sm hover:text-amber-500 px-0 lg:px-2 rounded-xl transition-all duration-300">GALLERY</Link>
            </Card>

            {/* Logo */}
            <Link href="/" className="absolute left-4 sm:left-8 xl:left-16 flex flex-row justify-center items-center space-x-1 sm:space-x-2">
              <div className="bg-[url('logo.png')] w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 bg-cover bg-center"></div>
              <p className={`font-bold text-xl sm:text-2xl lg:text-2xl xl:text-3xl text-white ${marcellus.className}`}>Skyvoyage Harmoni</p>
            </Link>

            {/* Book Now Button - Hidden on mobile */}
            <div className="absolute right-4 sm:right-8 xl:right-16 hidden md:block">
              <Link href="https://wa.me/+6281908698428" target="_blank">
                <Button variant="default" className={`${marcellus.className} rounded-none py-4 px-4 lg:py-6 text-sm bg-amber-600/50 hover:bg-gray-900 hover:text-amber-500 hover:scale-103 cursor-pointer transition-all duration-300`}>
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2"/>
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-32 text-center">
            <h1 className={`text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-4 ${marcellus.className}`}>Our Gallery</h1>
            <p className="text-white/50 text-xs sm:text-sm mt-2 sm:mt-4 max-w-2xl">See the beauty of Indonesian culture through our curated images.</p>
            <Button 
              type="button"
              className={`rounded-none mt-4 sm:mt-8 px-3 py-3 sm:px-4 sm:py-6 text-xs sm:text-sm bg-amber-600/50 hover:bg-gray-900 hover:text-amber-500 hover:scale-103 transition-all duration-300 ${marcellus.className} cursor-pointer`} 
              >VIEW TOURS<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4"/></Button>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="flex flex-col min-w-full items-center justify-center py-8 space-y-6 sm:space-y-8 mt-8 sm:mt-16">
        <div className="flex flex-col space-y-2 items-center justify-center px-4 sm:px-8">
          <p className="text-center text-sm sm:text-base">Gallery</p>
          <h2 className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className}`}>Curated Images from Sky Voyage</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 lg:gap-4 min-w-full px-4 sm:px-6 lg:px-8 xl:px-32">
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('hero-bg.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer"/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('hero-bg2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('hero-bg3.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(1).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(2).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(3).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(4).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('komodo.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer"/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('labuanbajo.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('labuanbajo2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('pinisi.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('pinisi2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('raja-ampat.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('snorkeling.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('snorkeling2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer"/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('snorkeling3.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('hero-bg.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer"/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('hero-bg2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('hero-bg3.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(1).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(2).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(3).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('misc(4).jpeg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('komodo.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer"/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('labuanbajo.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('labuanbajo2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('pinisi.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('pinisi2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('raja-ampat.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('snorkeling.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('snorkeling2.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer"/>
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-full bg-[url('snorkeling3.jpg')] bg-cover bg-center hover:scale-102 transition-all duration-300 cursor-pointer "/>
        </div>
      </div>

      {/* articles */}
      <div className="flex flex-col min-w-full items-center justify-center py-8 space-y-8 bg-amber-50">
        <div className="flex flex-col space-y-2 items-center justify-center px-4 sm:px-8">
          <p className="text-center text-sm sm:text-base">Blog & Article</p>
          <h2 className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className}`}>Curated Insights from Sky Voyage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-w-full px-4 sm:px-8 lg:px-32">
          <div className="flex flex-col">
            <Link href="/blog/pinisi-ship-a-cultural-heritage" className="flex flex-col">
              <div className="bg-[url('pinisi.jpg')] bg-cover bg-center h-64 sm:h-80 lg:h-96 hover:scale-102 transition-all duration-300 cursor-pointer"/>
              <p className={`${marcellus.className} mt-4 justify-between items-center flex text-sm sm:text-base`}><span>20 Sep 2025</span><span>Blog & Article</span></p>
              <div className="mt-4 w-full border-t-1 border-gray-800"/>
              <h3 className={`${marcellus.className} text-xl sm:text-2xl font-bold mt-4 hover:text-amber-600 transition-all duration-100 cursor-pointer`}>Pinisi Ship: A Cultural Heritage</h3>
              <p className="mt-2 text-gray-400 hover:text-gray-800 transition-all duration-150 cursor-pointer text-sm sm:text-base">Discovering the beauty of the Pinisi ship, a traditional Indonesian sailing vessel, and its significance in maritime culture.</p>
              <Button variant="outline" className={`mt-6 sm:mt-8 w-full rounded-none border-gray-500 bg-white/0 hover:bg-gray-800 hover:text-amber-500 transition-all duration-300 cursor-pointer ${marcellus.className} text-sm sm:text-base`}>Read More</Button>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="/blog/indonesias-hidden-marine-paradise-raja-ampat" className="flex flex-col">
              <div className="bg-[url('raja-ampat.jpg')] bg-cover bg-center h-64 sm:h-80 lg:h-96 hover:scale-102 transition-all duration-300 cursor-pointer"/>
              <p className={`${marcellus.className} mt-4 justify-between items-center flex text-sm sm:text-base`}><span>15 Sep 2025</span><span>Blog & Article</span></p>
              <div className="mt-4 w-full border-t-1 border-gray-800"/>
              <h3 className={`${marcellus.className} text-xl sm:text-2xl font-bold mt-4 hover:text-amber-600 transition-all duration-100 cursor-pointer`}>Indonesia's Hidden Marine Paradise: Raja Ampat</h3>
              <p className="mt-2 text-gray-400 hover:text-gray-800 transition-all duration-150 cursor-pointer text-sm sm:text-base">Explore the pristine waters and incredible biodiversity of Raja Ampat, one of the world's most spectacular diving destinations.</p>
              <Button variant="outline" className={`mt-6 sm:mt-8 w-full rounded-none border-gray-500 bg-white/0 hover:bg-gray-800 hover:text-amber-500 transition-all duration-300 cursor-pointer ${marcellus.className} text-sm sm:text-base`}>Read More</Button>
            </Link>
          </div>
          <div className="flex flex-col">
            <Link href="/blog/sustainable-tourism-in-indonesian-waters" className="flex flex-col">
              <div className="bg-[url('snorkeling2.jpg')] bg-cover bg-center h-64 sm:h-80 lg:h-96 hover:scale-102 transition-all duration-300 cursor-pointer"/>
              <p className={`${marcellus.className} mt-4 justify-between items-center flex text-sm sm:text-base`}><span>10 Sep 2025</span><span>Blog & Article</span></p>
              <div className="mt-4 w-full border-t-1 border-gray-800"/>
              <h3 className={`${marcellus.className} text-xl sm:text-2xl font-bold mt-4 hover:text-amber-600 transition-all duration-100 cursor-pointer`}>Sustainable Tourism in Indonesian Waters</h3>
              <p className="mt-2 text-gray-400 hover:text-gray-800 transition-all duration-150 cursor-pointer text-sm sm:text-base">Learn how responsible tourism practices are helping preserve Indonesia's marine ecosystems for future generations.</p>
              <Button variant="outline" className={`mt-6 sm:mt-8 w-full rounded-none border-gray-500 bg-white/0 hover:bg-gray-800 hover:text-amber-500 transition-all duration-300 cursor-pointer ${marcellus.className} text-sm sm:text-base`}>Read More</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* faq */}
      <div className="flex flex-col min-w-full items-center justify-center py-8 space-y-8 bg-amber-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center min-w-full px-4 sm:px-8 lg:px-32">
          <div className="flex bg-[url('hero-bg.jpg')] bg-cover bg-center min-h-64 sm:min-h-96 lg:min-h-128 w-full relative justify-center items-center order-2 lg:order-1">
            <div className="absolute transition-all duration-500 bg-black/30 text-white hover:backdrop-blur-xs hover:text-amber-400 w-full h-full flex items-center justify-center p-4 sm:p-8">
              <p className={`text-center ${marcellus.className} text-xl sm:text-2xl font-semibold`}>Unforgettable Experiences Await</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 items-start min-h-64 sm:min-h-96 lg:min-h-128 justify-start p-4 sm:p-6 lg:p-8 order-1 lg:order-2">
            <p className="text-left text-sm sm:text-base">Your Questions Answered</p>
            <h2 className={`text-left text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className} mb-4`}>Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className={`${marcellus.className} text-base sm:text-lg`}>What is a Pinisi Ship?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  A Pinisi Ship is a traditional Indonesian sailing vessel known for its distinctive design and cultural significance. It is often used for maritime trade and tourism.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className={`${marcellus.className} text-base sm:text-lg`}>What amenities are available on the ship?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Our Pinisi Ship offers comfortable cabins, dining areas, and recreational facilities to ensure a pleasant journey for our guests.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className={`${marcellus.className} text-base sm:text-lg`}>What safety measures are in place?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Safety is our top priority. The ship is equipped with life jackets, emergency protocols, and trained crew members to ensure a secure voyage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className={`${marcellus.className} text-base sm:text-lg`}>How can I book a trip?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  You can book a trip through our website or contact our customer service team for assistance with reservations and inquiries.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className={`${marcellus.className} text-base sm:text-lg`}>What destinations are covered?</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base">
                  Our trips cover various beautiful destinations in Indonesia, including Bali, Komodo Island, and Raja Ampat, among others.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* CTA + footer */}
      <div className="flex flex-col min-w-full items-center justify-center pt-8 bg-amber-50">
        <div className="flex flex-col space-y-4 items-center justify-center px-4 sm:px-8 lg:px-32 text-center">
          <p className="text-sm sm:text-base">Ready to Set Sail?</p>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className} mb-4 sm:mb-6`}>Book Your Adventure Today!</h2>
          <Link href="https://wa.me/+6281908698428" target="_blank">
            <Button variant="default" className={`${marcellus.className} rounded-none py-4 px-6 sm:py-6 text-sm sm:text-base text-gray-900 bg-amber-600/50 hover:bg-gray-900 hover:text-amber-500 hover:scale-103 cursor-pointer transition-all duration-300`}>
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2"/>
              BOOK NOW
            </Button>
          </Link>
        </div>
        
        <div className="flex flex-col min-w-full px-4 sm:px-8 lg:px-32 py-6 justify-between items-center bg-amber-100 min-h-32 border-t-1 border-gray-800 mt-8 space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row min-w-full py-6 justify-between items-center">
            <p className={`font-bold text-base sm:text-lg ${marcellus.className}`}>Sky Voyage Group</p>
            <p className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">© 2025 Sky Voyage Group. All rights reserved.</p>
            <div className="flex flex-row flex-wrap justify-center lg:justify-end space-x-2 sm:space-x-4">
              <Link href="/" className="text-gray-500 text-xs sm:text-sm hover:text-orange-400 px-2 py-1 rounded-xl transition-all">HOME</Link>
              <Link href="/about-us" className="text-gray-500 text-xs sm:text-sm hover:text-orange-400 px-2 py-1 rounded-xl transition-all">ABOUT</Link>
              <Link href="/services" className="text-gray-500 text-xs sm:text-sm hover:text-orange-400 px-2 py-1 rounded-xl transition-all">SERVICES</Link>
              <Link href="/blog" className="text-gray-500 text-xs sm:text-sm hover:text-orange-400 px-2 py-1 rounded-xl transition-all">BLOG</Link>
              <Link href="/gallery" className="text-gray-500 text-xs sm:text-sm hover:text-orange-400 px-2 py-1 rounded-xl transition-all">GALLERY</Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row min-w-full py-6 justify-between items-center">
            <div className="flex flex-col text-gray-800 text-sm">
              <p>Contact Us</p>
              <Link href="https://wa.me/+6281908698428" className="hover:text-orange-400 transition-all">+62 819-0869-8428 (Tris Nugrahaeni)</Link>
              <Link href="https://wa.me/+6287856563836" className="hover:text-orange-400 transition-all">+62 878-5656-3836 (Syadz)</Link>
              <Link href="https://wa.me/+6282115288915" className="hover:text-orange-400 transition-all">+62 821-1528-8915 (Sefly)</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}