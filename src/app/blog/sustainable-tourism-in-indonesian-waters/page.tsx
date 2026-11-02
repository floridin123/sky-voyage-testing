"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator } from "@/components/ui/menubar"
import { Calendar, User, Menu } from "lucide-react"
import { Marcellus } from "next/font/google"
import { useState, useEffect } from "react"

const marcellus = Marcellus({
  weight: ['400'],
});

export default function Page(){
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div translate="no" className={`space-y-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-30'}`}>
      {/* hero */}
      <div className="flex min-h-[10vh] min-w-full items-center justify-center bg-gray-800 bg-cover bg-center relative">
        <div className="flex h-full min-w-full absolute items-center justify-center backdrop-blur-xs shadow-lg flex-col">
          {/* Navigation */}
          <div className="w-full flex items-center px-4 sm:px-8 lg:px-32 py-4 lg:py-8">
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
            <Card className="hidden md:flex flex-row py-4 px-4 xl:px-8 border-1 border-white/0 rounded-none bg-white/0 backdrop-blur-md shadow-md justify-center items-center mx-auto">
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
                <Button variant="default" className={`${marcellus.className} rounded-none py-4 px-4 lg:py-6 text-sm bg-amber-600 hover:bg-gray-900 hover:text-amber-500 hover:scale-103 cursor-pointer transition-all duration-300`}>
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2"/>
                  BOOK NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* blog section */}
      <div className="flex flex-col min-w-full items-left justify-start px-4 sm:px-8 lg:px-32 py-8 space-y-4 bg-amber-50">
        <div className="flex flex-col space-y-2 items-left justify-start">
          <p className={`text-left text-sm sm:text-base lg:text-lg ${marcellus.className}`}>Blog & Article</p>
          <h1 className={`text-left text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className}`}>Sustainable Tourism in Indonesian Waters</h1>
          <p className="text-left text-sm sm:text-base max-w-2xl text-gray-500 mb-8">Learn how sustainable tourism practices can protect Indonesia's marine ecosystems.</p>
          <div className="bg-[url('snorkeling2.jpg')] bg-cover bg-center h-96 sm:h-128 w-full xl:w-[65%]"/>
          <div className="mt-4 w-full xl:w-[75%] border-t-1 border-gray-800"/>
          <div className="flex flex-row items-center justify-start space-x-4 mt-2 lg:mt-4">
            <div className="flex flex-row items-center justify-start space-x-2">
              <User className="w-4 h-4 lg:w-5 lg:h-5"/>
              <p className={`text-left text-sm sm:text-base ${marcellus.className}`}>Sky Voyage</p>
            </div>
            <div className="flex flex-row items-center justify-start space-x-2">
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5"/>
              <p className={`text-left text-sm sm:text-base ${marcellus.className}`}>20 Sep 2025</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 lg:space-y-6 max-w-full xl:max-w-[75%] text-left pt-4 pb-8 xl:pb-16">
          <p className="sm:text-lg text-gray-800">Being a country with vast marine resources, Indonesia is home to some of the most biodiverse waters in the world. The archipelago's unique geography and climate create a rich tapestry of marine ecosystems, making it a prime destination for sustainable tourism.</p>
            <p className="sm:text-lg text-gray-800">Sustainable tourism in Indonesian waters focuses on minimizing environmental impact while maximizing economic and social benefits for local communities. This approach ensures that tourism activities do not harm the delicate balance of marine ecosystems, allowing them to thrive for future generations.</p>
            <p className="sm:text-lg text-gray-800">One of the key principles of sustainable tourism is responsible snorkeling and diving practices. Tourists are encouraged to avoid touching or disturbing marine life, as well as to use reef-safe sunscreen to prevent coral bleaching. Additionally, tour operators are urged to follow guidelines that protect marine habitats, such as maintaining a safe distance from coral reefs and avoiding anchoring on sensitive areas.</p>
            <p className="sm:text-lg text-gray-800">Community involvement is another crucial aspect of sustainable tourism. Many local communities in Indonesia rely on tourism as a primary source of income. By involving them in tourism planning and decision-making, it ensures that they benefit economically while also fostering a sense of stewardship for their natural resources.</p>
            <p className="sm:text-lg text-gray-800">Education and awareness are also vital components of sustainable tourism. Tourists are encouraged to learn about the local culture, traditions, and environmental challenges faced by the communities they visit. This knowledge fosters a deeper appreciation for the destination and promotes responsible behavior.</p>
            <p className="sm:text-lg text-gray-800">In conclusion, sustainable tourism in Indonesian waters is essential for preserving the country's rich marine biodiversity while supporting local communities. By adopting responsible practices and fostering community involvement, Indonesia can continue to be a top destination for eco-conscious travelers seeking to explore its stunning underwater world.</p>
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