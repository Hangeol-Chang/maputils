import { CircleF, PolylineF } from "@react-google-maps/api";


export default function LineComponent({ option }) {

    return (
        <>
            {/* main path */}
            <PolylineF path={option.path} options={option.lineOption} />

            {/* marker */}
            {
                option.path.map((c, idx) => (
                    <CircleF key={idx} center={c} options={option.circleOption} />
                ))
            }

            {/* arrow */}
            {
                option.arrows.map((p, idx) => (
                    <PolylineF path={p} key={idx} options={option.arrowOption} />
                ))
            }
        </>
    )
}