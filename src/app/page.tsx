import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="... flex flex-col items-center justify-center mt-[20%]">
        <h1 style={{fontSize: "xxx-large"}}>
          Unlock Secrets, Secure Messages:
        </h1>
        <h1 style={{fontSize: "large"}}>
          Your Cipher Sanctuary for Encryption and Decryption Excellence.
        </h1>
      </div>
      <div className="absolute inset-x-0 bottom-0 ...">
        <h6 className="flex justify-end mb-5 mr-10 text-sm">Copyright © Cipherology 2024. All Right Reserved.</h6>     
      </div>
    </>
  )
}
