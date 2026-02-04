
export interface buttonProps {
    text: string,
    icon?: any,
    onclick?: () => void
}


const Button = (props: buttonProps) => {
    return (
        <button onClick={props.onclick} className="cursor-pointer transition-all h-fit w-fit ease-in-out duration-300 flex hover:bg-gray-700 items-center gap-1 py-1 px-2  border border-neutral-600 rounded-full">
            {props.icon}
            <h1 className="text-sm"  >{props.text}</h1>
        </button>
    )
}

export default Button


