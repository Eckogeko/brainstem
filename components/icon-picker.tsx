"use client"

import { useTheme } from "next-themes";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { 
    Popover,
    PopoverContent,
    PopoverTrigger
 } from "@/components/ui/popover"

 interface IconPickerProps {
    onChange: (icon: string) => void;
    children: React.ReactNode;
    asChild?: boolean;
};

export const IconPicker =({
    onChange,
    children,
    asChild
}: IconPickerProps) => {
    const { resolvedTheme } = useTheme();
    const currentTheme = (resolvedTheme || "light") as keyof typeof themeMap

    const themeMap = {
        "dark": "dark",
        "light": "light"
    };

    const theme = themeMap[currentTheme];

    return (
        <Popover>
            <PopoverTrigger asChild={asChild}>
                {children}
            </PopoverTrigger>
            <PopoverContent className="p-0 w-full border-none shadow-none">
                <Picker
                    theme={theme}
                    data={data}
                    onEmojiClick={onChange}
                />
            </PopoverContent>
        </Popover>
    )
}