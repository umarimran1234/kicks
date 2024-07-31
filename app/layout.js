import {  Rubik } from "next/font/google";
import "./globals.css";
import Header from "./(Components)/Header";
import Footer from "./(Components)/footer";
const rubik = Rubik({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={ rubik.className}>
      <div className="">


      <Header/>
      {children}
      
      <Footer/>
      </div>
      </body>
    </html>
  );
}
