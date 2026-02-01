import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Add this
import App from "./App";
import "./index.css";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/clerk-react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <ConvexProvider client={convex}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConvexProvider>
    </ClerkProvider>
  </StrictMode>,
);
