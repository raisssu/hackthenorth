// import { Chat } from "@/Chat/Chat";
// import { ChatIntro } from "@/Chat/ChatIntro";
// import { Layout } from "@/Layout";
// import { SignInForm } from "@/SignInForm";
// import { UserMenu } from "@/components/UserMenu";
// import { Authenticated, Unauthenticated, useQuery } from "convex/react";
// import { api } from "../convex/_generated/api";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FileUpload from "./components/FileUpload";
import Welcome from "./components/Welcome";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome/>
      <FileUpload />
    </div>
  );
}

export default App;
