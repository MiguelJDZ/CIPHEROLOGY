import { Lock, Unlock, Shield, Zap, Code, Users } from "lucide-react"
import Link from "next/link"
import { Navbar } from './components/Navbar'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-56 bg-black text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-12 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Unlock Secrets, Secure Messages
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                    Encrypt and decrypt your messages with ease. Keep your communications private and secure.
                  </p>
                </div>
                <div className="space-x-7">
                  <Button className="bg-white text-black hover:bg-gray-200 text-lg"><Link href={"/caesar"}>Get Started</Link></Button>
                  <Button className="bg-white text-black hover:bg-gray-200 text-lg">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-600">Your messages are encrypted from start to finish, ensuring maximum security.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Zap className="h-12 w-12 mb-4 text-yellow-500" />
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">Encrypt and decrypt messages in milliseconds, no matter the length.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Code className="h-12 w-12 mb-4 text-green-500" />
                  <h3 className="text-xl font-bold mb-2">Multiple Algorithms</h3>
                  <p className="text-gray-600">Choose from a variety of encryption algorithms to suit your needs.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Unlock className="h-12 w-12 mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2">Easy Decryption</h3>
                  <p className="text-gray-600">Decrypt messages with a single click using your private key.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 mb-4 text-red-500" />
                  <h3 className="text-xl font-bold mb-2">Secure Sharing</h3>
                  <p className="text-gray-600">Share encrypted messages with other Cipherology users securely.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Lock className="h-12 w-12 mb-4 text-indigo-500" />
                  <h3 className="text-xl font-bold mb-2">Password Protection</h3>
                  <p className="text-gray-600">Add an extra layer of security with password-protected messages.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-500 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to secure your messages?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                    Join thousands of users who trust Cipherology for their encryption needs.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1 bg-white text-black outline-none"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button className="bg-black text-white hover:bg-gray-800" type="submit">
                      Sign Up
                    </Button>
                  </form>
                  <p className="text-xs text-blue-100">
                    By signing up, you agree to our{" "}
                    <Link className="underline underline-offset-2" href="#">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500">© 2024 Cipherology. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}
