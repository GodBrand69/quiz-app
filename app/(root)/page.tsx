import Dashboard from "@/components/dashboard/Dashboard";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <SignedIn>
        <Dashboard />
      </SignedIn>

      <SignedOut>
        <Button  >
          Login
        </Button>
      </SignedOut>
    </div>
  );
}
