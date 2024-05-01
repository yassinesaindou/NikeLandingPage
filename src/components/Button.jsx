

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Button({ label, iconURL, type }) {
    if (type === "secondary") {
        return <button className="flex justify-center items-center w-fit h-fit px-7 py-5 text-lg font-montserrat leading-none bg-transparent rounded-full text-slate-gray border-4 border-text-gray  whitespace-nowrap">{label}
        {iconURL && <img src={iconURL} alt="arrow-right" className="ml-2 rounded-full w-5 h-5" />}
    </button>
    }
    return <button className="flex justify-center items-center w-fit h-fit px-7 py-5 text-lg font-montserrat leading-none bg-coral-red rounded-full text-white border-coral-red  whitespace-nowrap">{label}
        {iconURL && <img src={iconURL} alt="arrow-right" className="ml-2 rounded-full w-5 h-5" />}
    </button>;
}
