import { Circle, GoogleMap, LoadScript, Polyline } from '@react-google-maps/api'
import { useEffect, useState } from 'react';
import PathInput from '../../components/pathdrawer/PathInput';
import PathView from '../../components/pathdrawer/PathView';

export default function pathDrawer() {
    let [containerStyle, setContainerStyle] = useState({});
    let [center, setCenter] = useState({ lat: 37.498578, lng: 127.027175 });
    let [zoom, setZoom] = useState(15);

    useEffect(() => {
        setContainerStyle({
            width: window.innerWidth,
            height: window.innerHeight * 0.9
        })
    }, [])

    return(
        <div className="flex mx-2 gap-2">
            <div className="flex flex-col gap-2 basis-1/5">
                <PathInput className="bg-blue-200 h-24" />
                <PathView className="bg-purple-200 h-full" />
            </div>

            <div className="bg-red-100 basis-4/5 h-screen">
                <LoadScript
                        googleMapsApiKey="AIzaSyBkZS2y5XLGTz09p372w0MV4bQgeukEiiQ"
                    >
                        <GoogleMap
                            mapContainerStyle={{width : '100%', height: '100%'}}
                            center={center}
                            zoom={zoom}
                        >
                            {/* {
                                idfs.map((idf) => (
                                    <>

                                        <Polyline path={options[idf].path} options={options[idf].lineOption} />
                                        {
                                            options[idf].path.map((c, idx) => (
                                                <Circle center={c} key={idx} options={options[idf].circleOption} />
                                            ))
                                        }
                                    </>
                                ))
                            }
                            {
                                pointerMarker ?
                                <Circle center={pointerMarker} options={pointerCircleOptions} />
                                : <></>
                            } */}

                        </GoogleMap>
                    </LoadScript>
                
            </div>
        </div>
    )
}