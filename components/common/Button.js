
export default function Button(props) {
    const buttonConfig = {
        // params : color
        primary : {
            bgColor : 'bg-blue-300',
            color : 'text-white',
            outline : ''
        },
        primary_outline : {
            bgColor : 'bg-white',
            color : 'text-blue-300',
            outline : 'outline outline-1 outline-offset-2'
        }

        // params : size
    }

    return(
        <button onClick={(e) => {props.clickEvent(e.target.value)}}
            className={`
                px-2 m-1 rounded-sm
                ${props.className}
                ${props.borderRadius}

                ${buttonConfig[props.color].bgColor}
                ${buttonConfig[props.color].color}
                ${buttonConfig[props.color].outline}
            `}
        >
            {props.value}
        </button>
    )
}