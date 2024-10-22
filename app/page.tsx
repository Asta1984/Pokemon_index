import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Component() {
  return (
    <div className="bg-gradient-to-r from-emerald-950 to-black">
      <header className="bg-[#00000000] py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Pokeball className="h-8 w-8 text-[#4340f5]" />
            <span className="text-2xl font-bold text-[#1a88b8]">Pokédex</span>
          </Link>
          <nav className="hidden md:flex items-center gap-16">
            <Link href="#" className="text-sm font-medium text-[#d9d9e4] hover:text-[#dc2626]" prefetch={false}>
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-[#d9d9e4] hover:text-[#dc2626]" prefetch={false}>
              Screenshots
            </Link>
            <Link href="#" className="text-sm font-medium text-[#d9d9e4] hover:text-[#dc2626]" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="text-[#d9d9e4]">Explore Pokédex</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="backdrop-blur-xl bg-white/30">
              <div className="grid gap-4 py-6">
                <Link href="#" className="flex w-full items-center py-2 text-lg text-white" prefetch={false}>
                  Features
                </Link>
                <Link href="#" className="flex w-full items-center py-2 text-lg text-white" prefetch={false}>
                  Screenshots
                </Link>
                <Link href="#" className="flex w-full items-center py-2 text-lg text-white" prefetch={false}>
                  Contact
                </Link>
                <Button>Explore Pokédex</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className=" bg-gradient-to-r from-emerald-950 to-black ... py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#dc2626] px-3 py-1 text-sm text-white">Pokédex</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Discover and Explore the World of Pokémon
              </h1>
              <p className="text-[#ccc] md:text-xl">
                The ultimate Pokédex app for all your Pokémon needs. Search, view details, and explore the vast world of
                Pokémon.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full md:w-auto">Explore Pokédex</Button>
                <Button variant="secondary" className="w-full md:w-auto">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="pikachu-gif-4.gif"
                width="300"
                height="300"
                alt="Pokédex"
                className="max-w-[300px] md:max-w-full"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section id="features" className="py-12 md:py-24 bg-gradient-to-r from-emerald-950 to-black">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-[#dc2626] px-3 py-1 text-sm text-white">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Explore the World of Pokémon
              </h2>
              <p className="text-[#ccc] md:text-xl">
                Discover and learn about your favorite Pokémon with our powerful Pokédex.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-[#222] rounded-lg shadow-md p-6 space-y-4">
                <SearchIcon className="h-12 w-12 text-[#dc2626]" />
                <h3 className="text-xl font-bold text-white">Search Pokémon</h3>
                <p className="text-[#ccc]">Easily search for Pokémon by name, type, or other criteria.</p>
              </div>
              <div className="bg-[#222] rounded-lg shadow-md p-6 space-y-4">
                <InfoIcon className="h-12 w-12 text-[#dc2626]" />
                <h3 className="text-xl font-bold text-white">View Details</h3>
                <p className="text-[#ccc]">
                  Get detailed information about each Pokémon, including stats, abilities, and more.
                </p>
              </div>
              <div className="bg-[#222] rounded-lg shadow-md p-6 space-y-4">
                <BarChartIcon className="h-12 w-12 text-[#dc2626]" />
                <h3 className="text-xl font-bold text-white">Type Chart</h3>
                <p className="text-[#ccc]">
                  Understand the strengths and weaknesses of each Pokémon type with our interactive type chart.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="screenshots" className="py-12 md:py-24 bg-gradient-to-r from-emerald-950 to-black">
          <div className="container mx-auto px-4 md:px-6 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-[#dc2626] px-3 py-1 text-sm text-white">Screenshots</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Explore the Pokédex Interface
              </h2>
              <p className="text-[#ccc] md:text-xl">Check out the sleek and intuitive design of our Pokédex app.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Screenshot 1"
                className="rounded-lg shadow-md"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Screenshot 2"
                className="rounded-lg shadow-md"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                width="400"
                height="300"
                alt="Screenshot 3"
                className="rounded-lg shadow-md"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#000] text-white py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <PlayIcon className="h-6 w-6 text-[#dc2626]" />
            <span className="text-lg font-bold">Pokédex</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BarChartIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function InfoIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MenuIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="gray"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlayIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function SearchIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
function Pokeball(props:any) {
  return (
    <Image
      src='pokeball.svg'
      width = {50}
      height = {50}
      alt = 'a pokeball'
    />
  )
}