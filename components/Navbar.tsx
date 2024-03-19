import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ModeToggle } from "./Toggle";

const Navbar =  () => {
    return (
        <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
            <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
                <Link href={"/"} className="flex items-center gap-2">
                    <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                        KnowTify
                    </p>
                </Link>
                <div className="flex gap-4 items-center">
                    <ModeToggle />
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <SignedOut>
                        <Button className="rounded-md" asChild size='lg'>
                            <Link href='/sign-in'>
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </div>
    );
};

export default Navbar;