interface Props {
    variant? : "base" | "variant" | "success" | "fail"| "neutre"
    children?: React.ReactNode;
}

export default function Button({variant = "base", children}: Props) {
    let variantStyle = ""
    switch (variant) {
        case "base":
            variantStyle = "px-8 py-4 rounded-full bg-white text-purple-600 text-sm tracking-wider uppercase font-medium shadow-md transition-all duration-500 ease-in-out hover:tracking-widest hover:bg-purple-600 hover:text-white hover:shadow-lg active:translate-y-2 active:shadow-none w-auto min-w-[120px] max-w-xs"
            break;
        case "variant":
            variantStyle = "px-8 py-3 rounded-full bg-transparent border-[2px] border-purple-600 text-purple-600 text-sm tracking-wider uppercase font-medium shadow-sm transition-all duration-500 ease-in-out hover:tracking-widest hover:bg-purple-50 hover:shadow-md active:bg-purple-100 active:translate-y-2 active:shadow-none w-auto min-w-[120px] max-w-xs"
            break;
        case "success":
            variantStyle = "px-8 py-4 rounded-full bg-gradient-to-r from-green-200 via-green-300 to-green-400 text-green-800 text-sm tracking-wider uppercase font-medium shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:from-green-400 hover:to-green-600 hover:text-white hover:shadow-lg hover:ring-4 hover:ring-green-300 active:scale-95 active:shadow-none animate-pulse w-auto min-w-[120px] max-w-xs"
            break;
        case "fail":
            variantStyle = "px-8 py-4 rounded-full bg-gradient-to-r from-red-200 via-red-300 to-red-400 text-red-800 text-sm tracking-wider uppercase font-medium shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:from-red-400 hover:to-red-600 hover:text-white hover:shadow-lg hover:ring-4 hover:ring-red-300 active:scale-95 active:shadow-none animate-pulse w-auto min-w-[120px] max-w-xs"
            break;
        case "neutre":
            variantStyle = "px-8 py-4 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 text-gray-800 text-sm tracking-wider uppercase font-medium shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:from-gray-400 hover:to-gray-600 hover:text-white hover:shadow-lg hover:ring-4 hover:ring-gray-300 active:scale-95 active:shadow-none animate-pulse w-auto min-w-[120px] max-w-xs"
            break;
    }
    return <button className={variantStyle}>{children}</button>

    
}