import { CircleF, PolylineF } from "@react-google-maps/api";


export default function LineComponent({ option }) {

    return (
        <>
            <PolylineF path={option.path} options={option.lineOption} />
            {
                option.path.map((c, idx) => (
                    <CircleF center={c} options={option.circleOption} />
                ))
            }   
        </>
    )
}