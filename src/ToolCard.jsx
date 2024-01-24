const ToolCard = ({ text, img }) => {
    return (
        <li className={`relative bg-${img.toLowerCase()} bg-cover aspect-[6/4] rounded before:rounded flex justify-center items-center shadow-lg md:w-[32%] before:content-[''] before:bg-[rgb(0,0,0,0.5)] before:absolute before:inset-0`}>
            <span className="relative text-white text-4xl shadow-lg font-extrabold md:text-3xl">{text}</span>
        </li>
    )
}

export { ToolCard }
