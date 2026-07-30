import type { Favicon } from "@/types/config.ts";


export const defaultFavicons: Favicon[] = [
    {
        src: "/favicon/icon-light.ico?v=2", // Add ?v=2 or any version number
        theme: "light",
        sizes: "96x96",
    },
    {
        src: "/favicon/icon-dark.ico?v=2",
        theme: "dark",
        sizes: "96x96",
    },
];
