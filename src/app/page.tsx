"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar"
import { Calendar, LocateFixed, ChevronRight, Menu, Ship } from "lucide-react"
import { Marcellus } from "next/font/google"
import { useEffect, useState } from "react"

const marcellus = Marcellus({
  weight: ['400'],
});

export default function Home(){
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'snorkeling2.jpg',
    'raja-ampat.jpg',
    'komodo.jpg',
    'pinisi2.jpg',
    'snorkeling3.jpg',
    'labuanbajo.jpg',
    'hero-bg2.jpg',
    'hero-bg3.jpg',
    'misc(2).jpeg',
    'misc(4).jpeg',
  ];

  useEffect(() => {
    setIsLoaded(true);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [heroImages.length]);

  return (
    <div translate="no" className={`space-y-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-30'}`}>
      {/* hero */}
      <div className="flex min-h-screen min-w-full items-center justify-center relative overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}
        
        <div className="flex min-h-screen min-w-full absolute bg-black/20 items-center justify-center flex-col z-10">
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
            <h2 className="text-white text-sm sm:text-base lg:text-xl">Sky Voyage Group</h2>
            <h1 className={`text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4 ${marcellus.className}`}>Take on a Cultural Cruise Adventure</h1>
            <p className="text-white/50 text-xs sm:text-sm mt-2 sm:mt-4 max-w-2xl">Explore the seas of Indonesia with our luxurious Pinisi Ship, with each trip being a unique cultural experience.</p>
            <Button 
              type="button"
              className={`rounded-none mt-4 sm:mt-8 px-3 py-3 sm:px-4 sm:py-6 text-xs sm:text-sm bg-amber-600/50 hover:bg-gray-900 hover:text-amber-500 hover:scale-103 transition-all duration-300 ${marcellus.className} cursor-pointer`} 
              onClick={() => {
                window.scrollTo({ top: document.getElementById('tour-packages')?.offsetTop || 0, behavior: 'smooth' });
              }}
              >VIEW TOURS<ChevronRight className="w-3 h-3 sm:w-4 sm:h-4"/></Button>
          </div>
        </div>
      </div>

      {/* animated rolling text */}
      {/* <div className="w-full overflow-hidden bg-amber-100">
        <div className="whitespace-nowrap flex space-x-8 py-8">
          <span className="text-2xl font-bold">Explore</span>
          <span className="text-2xl font-bold">Discover</span>
          <span className="text-2xl font-bold">Adventure</span>
          <span className="text-2xl font-bold">Relax</span>
          <span className="text-2xl font-bold">Experience</span>
          <span className="text-2xl font-bold">Journey</span>
          <span className="text-2xl font-bold">Wanderlust</span>
          <span className="text-2xl font-bold">Voyage</span>
          <span className="text-2xl font-bold">Escape</span>
          <span className="text-2xl font-bold">Explore</span>
          <span className="text-2xl font-bold">Discover</span>
          <span className="text-2xl font-bold">Adventure</span>
          <span className="text-2xl font-bold">Relax</span>
          <span className="text-2xl font-bold">Experience</span>
          <span className="text-2xl font-bold">Journey</span>
          <span className="text-2xl font-bold">Wanderlust</span>
          <span className="text-2xl font-bold">Voyage</span>
          <span className="text-2xl font-bold">Escape</span>
          <span className="text-2xl font-bold">Explore</span>
          <span className="text-2xl font-bold">Discover</span>
          <span className="text-2xl font-bold">Adventure</span>
          <span className="text-2xl font-bold">Relax</span>
          <span className="text-2xl font-bold">Experience</span>
          <span className="text-2xl font-bold">Journey</span>
          <span className="text-2xl font-bold">Wanderlust</span>
          <span className="text-2xl font-bold">Voyage</span>
          <span className="text-2xl font-bold">Escape</span>
        </div>
      </div> */}

      {/* packages */}
      <div id="tour-packages" className="flex flex-col min-w-full items-center justify-center py-8 space-y-8 bg-white mt-8 sm:mt-16">
        <div className="flex flex-col space-y-2 items-center justify-center px-4 sm:px-8">
          <p className="text-center text-sm sm:text-base">Discover the Beauty of Indonesia</p>
          <h2 className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className}`}>Experience the Culture and Nature</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-w-full px-4 sm:px-8 lg:px-32">
          <Link href={"/tour-packages/snorkeling-and-diving"}>
            <div className="flex flex-col">
              <div className="bg-[url('snorkeling2.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><LocateFixed className="h-4 w-4 text-amber-500 mr-1"/> Lombok, Gili Trawangan</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Snorkeling and Diving Package</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/tour-packages/komodo-sharing-trip"}>
            <div className="flex flex-col">
              <div className="bg-[url('komodo.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><LocateFixed className="h-4 w-4 text-amber-500 mr-1"/> Komodo Island</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Komodo Tour 3D2N (Sharing Trip)</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/tour-packages/komodo-charter-3d2n"}>
            <div className="flex flex-col">
              <div className="bg-[url('raffles.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><LocateFixed className="h-4 w-4 text-amber-500 mr-1"/> Komodo Island</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Komodo - Labuan Bajo 3D2N (Phinisi Charter)</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/tour-packages/komodo-charter-4d3n"}>
            <div className="flex flex-col">
              <div className="bg-[url('vinca.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><LocateFixed className="h-4 w-4 text-amber-500 mr-1"/> Komodo Island</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Komodo - Labuan Bajo 4D3N (Phinisi Charter)</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/tour-packages/golf-package"}> 
            <div className="flex flex-col">
              <div className="bg-[url('golf.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><LocateFixed className="h-4 w-4 text-amber-500 mr-1"/> Lombok</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Lombok Golfing Package</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/tour-packages/hotel-package"}> 
            <div className="flex flex-col">
              <div className="bg-[url('hotel.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><LocateFixed className="h-4 w-4 text-amber-500 mr-1"/> Lombok, Gili Trawangan</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Lombok Staycation Package</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
        </div>
      </div>

      {/* ships */}
      <div className="flex flex-col min-w-full items-center justify-center py-8 space-y-8 bg-white mt-8 sm:mt-16">
        <div className="flex flex-col space-y-2 items-center justify-center px-4 sm:px-8">
          <p className="text-center text-sm sm:text-base">See how our ships are crafted for your comfort</p>
          <h2 className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className}`}>Ultimate Craftsmanship, built for Comfort</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-w-full px-4 sm:px-8 lg:px-32">
          <Link href={"/ships/vinca"}>
            <div className="flex flex-col">
              <div className="bg-[url('vinca.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><Ship className="h-4 w-4 text-amber-500 mr-1"/> 6 Cabins / 14-18 Pax</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Vinca</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/ships/raffles"}>
            <div className="flex flex-col">
              <div className="bg-[url('raffles.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><Ship className="h-4 w-4 text-amber-500 mr-1"/> 6 Cabins / 12-18 Pax</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Raffles</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/ships/lamborajo-3"}>
            <div className="flex flex-col">
              
              <div className="bg-[url('lamborajo.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><Ship className="h-4 w-4 text-amber-500 mr-1"/> 8 Cabins / 18-22 Pax</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Lamborajo 3</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/ships/elrora"}>
            <div className="flex flex-col">
              <div className="bg-[url('elrora.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><Ship className="h-4 w-4 text-amber-500 mr-1"/> 6 Cabins / 16 Pax</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Elrora</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
          <Link href={"/ships/angelica"}>
            <div className="flex flex-col">
              <div className="bg-[url('angelica.jpg')] bg-cover bg-center h-64 sm:h-72 rounded-2xl hover:scale-102 transition-transform duration-300 cursor-pointer"/>
              <p className={`text-left mt-4 ${marcellus.className} flex flex-row items-center text-sm sm:text-base`}><Ship className="h-4 w-4 text-amber-500 mr-1"/> 6 Cabins / 16-20 Pax</p>
              <p className={`text-left mt-2 text-xl sm:text-2xl ${marcellus.className} hover:text-amber-600 transition-all duration-300 cursor-pointer`}>Angelica</p>
              <Button variant="default" className={`flex flex-row mt-4 text-sm sm:text-base ${marcellus.className} justify-center min-w-full py-4 sm:py-6 rounded-2xl bg-gray-900 hover:bg-gray-900 cursor-pointer hover:scale-102 transition-all duration-300`}>
                <span className="flex flex-row items-center justify-center hover:scale-105 transition-all duration-300 hover:text-amber-400">Learn More <ChevronRight className="h-4 w-4 text-amber-500 ml-1"/></span>
              </Button>
            </div>
          </Link>
        </div>
      </div>

      {/* features */}
      <div className="flex flex-col min-w-full items-center justify-center py-8 space-y-8 bg-white mt-8 sm:mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center min-w-full px-4 sm:px-8 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center min-h-64 sm:min-h-96 lg:min-h-128">
            <Card className="border-0 rounded-none bg-gradient-to-tr from-gray-50 to-amber-300 flex flex-col items-start justify-start p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-500">
              <p className={`flex flex-row ${marcellus.className} text-base sm:text-lg font-semibold hover:text-amber-500 transition-all duration-300 mb-2`}><Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5"/> Explore the Rich Culture</p>
              <div className="border-t-1 w-full border-gray-900 mb-2"/>
              <p className={`${marcellus.className} text-gray-500 hover:text-gray-900 transition-all duration-300 text-justify text-sm sm:text-base`}>Discover the vibrant traditions, art, and history of Bali, where each discovery is a journey into the island's soul.</p>
            </Card>
            <Card className="border-0 rounded-none bg-gradient-to-tr from-gray-50 to-amber-300 flex flex-col items-start justify-start p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-500">
              <p className={`flex flex-row ${marcellus.className} text-base sm:text-lg font-semibold hover:text-amber-500 transition-all duration-300 mb-2`}><Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5"/> Luxury Accommodation</p>
              <div className="border-t-1 w-full border-gray-900 mb-2"/>
              <p className={`${marcellus.className} text-gray-500 hover:text-gray-900 transition-all duration-300 text-justify text-sm sm:text-base`}>Experience comfort at sea with our premium cabins and world-class amenities aboard traditional Pinisi ships.</p>
            </Card>
            <Card className="border-0 rounded-none bg-gradient-to-tr from-gray-50 to-amber-300 flex flex-col items-start justify-start p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-500">
              <p className={`flex flex-row ${marcellus.className} text-base sm:text-lg font-semibold hover:text-amber-500 transition-all duration-300 mb-2`}><Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5"/> Expert Guides</p>
              <div className="border-t-1 w-full border-gray-900 mb-2"/>
              <p className={`${marcellus.className} text-gray-500 hover:text-gray-900 transition-all duration-300 text-justify text-sm sm:text-base`}>Learn from local experts who share authentic stories and deep knowledge of Indonesian maritime heritage.</p>
            </Card>
            <Card className="border-0 rounded-none bg-gradient-to-tr from-gray-50 to-amber-300 flex flex-col items-start justify-start p-4 sm:p-6 h-full hover:shadow-lg transition-shadow duration-500">
              <p className={`flex flex-row ${marcellus.className} text-base sm:text-lg font-semibold hover:text-amber-500 transition-all duration-300 mb-2`}><Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5"/> Sustainable Tourism</p>
              <div className="border-t-1 w-full border-gray-900 mb-2"/>
              <p className={`${marcellus.className} text-gray-500 hover:text-gray-900 transition-all duration-300 text-justify text-sm sm:text-base`}>Travel responsibly with our eco-friendly practices that preserve Indonesia's natural beauty for future generations.</p>
            </Card>
          </div>

          <div className="flex bg-[url('hero-bg.jpg')] bg-cover bg-center min-h-64 sm:min-h-96 lg:min-h-128 w-full relative justify-center items-center">
            <div className="absolute transition-all duration-500 bg-black/30 text-white backdrop-blur-xs hover:backdrop-blur-sm hover:text-amber-400 w-full h-full flex items-center justify-center p-4 sm:p-8">
              <p className={`text-center ${marcellus.className} text-xl sm:text-2xl font-semibold`}>Unforgettable Experiences Await</p>
            </div>
          </div>
        </div>
      </div>

      {/* articles */}
      <div className="flex flex-col min-w-full items-center justify-center py-8 space-y-8 bg-amber-50 mt-8 sm:mt-16">
        <div className="flex flex-col space-y-2 items-center justify-center px-4 sm:px-8">
          <p className="text-center text-sm sm:text-base">Blog & Article</p>
          <h2 className={`text-center text-2xl sm:text-3xl lg:text-4xl font-bold ${marcellus.className}`}>Articles of Travel from Sky Voyage</h2>
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