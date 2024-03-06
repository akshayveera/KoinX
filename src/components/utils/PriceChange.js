
import arrowUp from "../../assets/arrow-up.png"
import arrowDown from "../../assets/arrow-down.png"

export const PriceChange = ({price})=>{

    if(price>=0)
    {
        return (
            <>
                <img className='h-3.5' src={arrowUp} alt="arrow up" />
                <p className='font-semibold text-md text-[#0fba83]'>{String(price).slice(0,4) + "%"}</p>
            </>
        )
    }
    else{
        return (
            <>
                <img className='h-3.5' src={arrowDown} alt="arrow down" />
                <p className='font-semibold text-md text-[#f7324c]'>{String(price).slice(0,5) + "%"}</p>
            </>
        )
    }
}