import { Circle, CircleF, GoogleMap, LoadScript, Marker, MarkerF, Polyline, PolylineF } from '@react-google-maps/api'
import { useRecoilState } from 'recoil'
import { centerState, idfsState, nowIdfState } from '../../../states/pathDrawerState';

export default function GoogleMapComp() {
    
    const [center, setCenter]   = useRecoilState(centerState);
    const [idfs, setIdfs]       = useRecoilStates(idfsState);
    const [options, setOptions] = useRecoilState(optionsState);
    
    const [nowIdf, setNowIdf]   = useRecoilState(nowIdfState);
    const [nowOption, setNowOption] = useRecoilState(nowOptionState);
    
    const [focusOption, setFocusOption] = useRecoilState(focusOptionState);

    return (
        <GoogleMap
            mapContainerStyle={{width : '100%', height: '100%'}}
            center={center}
            zoom={15}
        >
            {
                idfs.map((idf, idx) => (
                    idf == nowIdf ? <></>
                    : <LineComponent key={idx} option={options[idf]} />
                ))
            }

            <LineComponent option={nowOption} />
            
            <CircleF center={focus} options={focusOption} />
        </GoogleMap>
    )
}