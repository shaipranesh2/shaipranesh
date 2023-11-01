"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  const [typedText, setTypedText] = React.useState("");

  React.useEffect(() => {
    const text = "Hello, there!";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);
  }, []);
  
  return (
    <ThemeProvider enableColorScheme={true} attribute="class">
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="fixed"><Navbar/></div>
      <div className="pt-36">
        <div className="">
          <h2 className="text-blue-500 text-4xl">{typedText}</h2>
          <p>
            Thanks for visiting my website. I am Shai Pranesh, an undergrad
            student pursuing Bachelor of Engineering with honours in Computer
            Science from Birla Institute of Technology & Science, Pilani,
            Rajasthan, India (BITS Pilani, the top-ranked private university in
            India with campuses in Pilani, Goa, Hyderabad, and Dubai).
          </p>
          <p>
            I am interested in emulating intelligence in artificial agents. As
            such, the fields which have captured my research interest for the
            duration of my undergraduate education are:
          </p>
          <ul className="list-disc list-inside pl-2">
            <li>Artificial Intelligence</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Robotics</li>
          </ul>
        </div><br></br><br></br>
        <div>
          <h2 className="text-blue-500 text-2xl font-semibold">Short-Term Interest</h2>
          <p>
            Neural Networks can act as function approximators and has the power
            to better predict and exploit data in a manner never seen before!
          </p>
          <p>
            My current work has been on different areas developing my skills in
            helping intelligent agents perceive the world better. I want to make
            AI software more reliable, robust and open-source to all. For more
            details, please see my Experience and Projects.
          </p>
          <p>
            In this regard, I have worked extensively with neural networks. My
            research interests with neural networks are two-fold:
          </p>
          <ul className="list-disc list-inside pl-2">
            <li>
              Studying the applications of deep learning and how it can be used
              to solve problems in Sciences.
            </li>
            <li>
              Investigating deeplearning methods for better usage multi-modal
              data (Speech, Vision, Gesture data, etc.).
            </li>
          </ul>
        </div>
        <br></br><br></br>
      <div className="">
        <h2 className="text-blue-500 text-2xl font-semibold">Long-Term Interest</h2>
        <p>
          In the long run, I want to work on the problem of Artificial General
          Intelligence(AGI), and research on the new methods to acheive it to
          make our lives simpler and break out from the everyday mundane
          activities!!
        </p>
        <p>
          "Just as the agricultural revolution has freed us from spending our
          waking hours picking crops by hand in the fields, the AI revolution
          could free us from menial, repetitive, and mindless work." ~ Eric
          Schmidt, Executive Chairman, Alphabet; Sebastian Thrun, Chairman,
          Udacity
        </p>
        <p>
          We live in exciting times. Such a time in human history has been seen
          only during times of great technological and scientific breakthrough:
          like the Industrial Revolution or the Renaissance.
        </p>
        <p>
          "Artificial intelligence is the new electricity." ~ Andrew Ng, Adjunct
          Professor, Stanford University
        </p>
      </div>
      </div>
      <Footer/>
    </main>
    </ThemeProvider>
  );
}