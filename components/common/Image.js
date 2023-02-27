import { useRecoilValue } from "recoil"
import { prefixState } from "../states/state";
import Image from 'next/image'

export default function Img({src, alt, w, h, className}) {
    const prefix = useRecoilValue(prefixState);

    return (
        <Image 
            src={`${prefix}${src}`} alt={alt} 
            width={w} height={h} 
            className={className}
        />
    )
}