import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center ga-x-2">
            <Image
                src="/logo-black.svg"
                height="100"
                width="100"
                alt="logo"
                className="dark:hidden"
            />
            <Image
                src="/logo-white.svg"
                height="100"
                width="100"
                alt="logo"
                className="hidden dark:block"
            />
            {/* <p className={cn("font-semibold", font.className)}>
                BrainStem
            </p> */}
        </div>
    )
}