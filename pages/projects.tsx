"use client";
import Link from "next/link";
import "./blog.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import { ThemeProvider } from "next-themes";
import React from "react";
export default function Blog() {
  const [typedText, setTypedText] = React.useState("");

  React.useEffect(() => {
    const text = "My Projects";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80);
  }, []);
  return (
    <ThemeProvider enableColorScheme={true} attribute="class">
      <main>
        <div style={{position:"fixed",top:"0",padding:"1%"}}><Link href="/">
          <Button variant="outlined">
            <div style={{display:"flex",padding:"16px"}}>
              <ArrowBackIcon />
              <p style={{margin:"0",padding:"0"}}>Back To Home</p>
            </div>
          </Button>
        </Link></div>
        <div>
          <p style={{ fontSize: "3rem", textAlign: "center", color: "rgba(0, 170, 255,1)" }}>
            {typedText}
          </p>
        </div>
      </main>
    </ThemeProvider>
  );
}