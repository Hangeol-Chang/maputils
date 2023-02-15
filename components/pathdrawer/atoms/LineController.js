import { useEffect, useState } from "react";
import ColorSlider from "./ColorSlider";

export default function LineController({ option, delLine, setNowOption }) {
    let [circleColor_r, setCircleColor_r] = useState(0);
    let [circleColor_g, setCircleColor_g] = useState(0);
    let [circleColor_b, setCircleColor_b] = useState(0);

    let [lineColor_r, setLineColor_r] = useState(0);
    let [lineColor_g, setLineColor_g] = useState(0);
    let [lineColor_b, setLineColor_b] = useState(0);

    let [radius, setRadius] = useState(1);
    let [circleOption, setCircleOption] = useState(option.circleOption);
    let [lineOption, setLineOption]     = useState(option.lineOption);
    let [viewLine, setViewLine]         = useState(true);
    let [viewMarker, setViewMarker]     = useState(true);

    function changeCircleRadius(val) { setCircleOption({...circleOption, radius : val}) }

    // 색 바꾸는 함수
    const changeCircleColor = function(val, idf) {
        if(idf == "red")        setCircleColor_r(val);
        else if(idf == "green") setCircleColor_g(val);
        else                    setCircleColor_b(val);

        const tmpColor = "#" + 
            ("0" + circleColor_r.toString(16)).substr(-2) + 
            ("0" + circleColor_g.toString(16)).substr(-2) +  
            ("0" + circleColor_b.toString(16)).substr(-2);  
    
        setCircleOption({...option, fillColor : tmpColor})
    }

    const changeLineColor = function(val, idf) {
        let tmpColor2 = option.lineOption.strokeColor;
        let binColor = ("0" + val.toString(16)).substr(-2);

        if(idf == "red")        setLineColor_r(val);
        else if(idf == "green") setLineColor_g(val);
        else                    setLineColor_b(val);

        const tmpColor = "#" + 
            ("0" + lineColor_r.toString(16)).substr(-2) + 
            ("0" + lineColor_g.toString(16)).substr(-2) +  
            ("0" + lineColor_b.toString(16)).substr(-2);  
        
        setLineOption({...option, strokeColor : tmpColor});
    }

    // view 상태 변경 함수
    const changeViewLine = function(check) {
        setViewLine(check);
        setLineOption({...lineOption, visible : check});
    }

    const changeViewMarker = function(check) {
        setViewMarker(check);
        setCircleOption({...circleOption, visible : check});
    }

    // 옵션 동기처리
    useEffect(() => {
        setNowOption({...option, lineOption, circleOption})
    }, [lineOption, circleOption])

    // parent 함수 변경함수
    useEffect(() => {
    }, [option])

    return (
        <div className="mt-4">
            <input id="slider" type="range" 
                defaultValue={1}
                onPointerUp={(e) => changeCircleRadius(e.target.value)}
                className={`w-full cursor-pointer accent-gray-400`}
                max={255} min={0}
            />

            <div className="flex">
                <div className="w-1/3">Circle_C</div>
                <ColorSlider color="red"    value={option.circleOption.red} changeColor={changeCircleColor} />
                <ColorSlider color="green"  value={option.circleOption.green} changeColor={changeCircleColor} />
                <ColorSlider color="blue"   value={option.circleOption.blue} changeColor={changeCircleColor} />
            </div>
            <div className="flex">
                <div className="w-1/3">Line_C</div>
                <ColorSlider color="red"    value={option.lineOption.red} changeColor={changeLineColor} />
                <ColorSlider color="green"  value={option.lineOption.green} changeColor={changeLineColor} />
                <ColorSlider color="blue"   value={option.lineOption.blue} changeColor={changeLineColor} />
            </div>


            <div className="flex justify-between">
                <div>
                    <input type="checkbox" id="viewLine" className="mr-1"/>
                    <label for="viewLine">Line</label>
                </div>

                <div>
                    <input type="checkbox" id="viewMarker" className="mr-1"/>
                    <label for="viewMarker">Marker</label>
                </div>

                <div>
                    <input type="checkbox" id="viewArrow" className="mr-1"/>
                    <label for="viewArrow">Arrow</label>
                </div>
                
            </div>
        </div>
        // <Box 
        //     sx={{
        //         m:1, p:1,
        //         display : 'flex',
        //         justifyContent : 'center',
        //         borderRadius : 1,
        //         boxShadow : 1,
        //     }}
        // >
        //     <Box
        //         sx={{
        //             display : 'flex',
        //             flexDirection : 'column',
        //             justifyContent : 'space-between',
        //             mx : 0
        //         }}
        //     >
        //         <TableContainer sx={{minWidth : 200, maxHeight : 150}}>
        //             <Table aria-label="simple table">
        //                 <TableBody>
        //                 {
        //                     props.option.path.map((row, idx) => (
        //                         <Box
        //                             onPointerEnter={ (e) => (props.setPointerMarker({lat : row.lat, lng : row.lng})) }
        //                         >
        //                             <TableRow hover key={idx} sx={{p : 0.5, display : 'flex', justifyContent : 'space-around'}}>
        //                                 <TableCell sx={{pr : 1, py : 0, width : 20}} component="th" scope="row">{idx}</TableCell>
        //                                 <TableCell sx={{pr : 1, py : 0, minWidth : 70}} align="left">
        //                                     {row.lat}
        //                                 </TableCell>
        //                                 <TableCell sx={{p : 0, minWidth : 70}} align="left">
        //                                     {row.lng}
        //                                 </TableCell>
        //                             </TableRow>

        //                         </Box>
        //                     ))
        //                 }  
        //                 </TableBody>
        //             </Table>

        //         </TableContainer>
        //     </Box>
            
        //     <Divider  sx={{px : 1 }} orientation='vertical' />

        //     <Box
        //         sx={{
        //             width : 240 , px : 1,
        //             display : 'flex',
        //             flexDirection : 'column',
        //             justifyContent : 'space-between',
        //         }}
        //     >
        //         <Box sx={{ display : 'flex', alignItems:'center'}} >
        //             <Typography sx={{width:80}} variant="body2" >C Size</Typography>
        //             <Slider
        //                 sx={{mx : 1}} defaultValue={1}
        //                 step={0.002} min={0} max={2}
        //                 valueLabelDisplay="auto"
        //                 onChange={(e) => setRadius(e.target.value)}
        //                 onChangeCommitted={() => configCircleRadius(radius)}
        //             />
        //         </Box>
        //         <Divider/>
     
        //         <Box sx={{ display: 'flex', alignItems: 'center' }} >
        //             <Typography sx={{width:80}} variant="body2">C Color</Typography>
        //             <Box sx={{ display:'flex', width:'100%', }} >
        //                 <ColorSlider color={ red[500] } idf="red"   check={circleColor_r} setColor={changeCircleColor} />
        //                 <ColorSlider color={green[500]} idf="green" check={circleColor_g} setColor={changeCircleColor} />
        //                 <ColorSlider color={ blue[500]} idf="blue"  check={circleColor_b} setColor={changeCircleColor} />
        //             </Box>
        //         </Box>
        //         <Divider/>
        //         <Box
        //             sx={{
        //                 display: 'flex',
        //                 alignItems: 'center',
        //             }}
        //         >
        //             <Typography sx={{width:80}} variant='body2'>
        //                 L Color
        //             </Typography>
        //             <Box sx={{ display:'flex', width:'100%',}}>
        //                 <ColorSlider color={ red[500] } idf="red"   check={lineColor_r} setColor={changeLineColor} />
        //                 <ColorSlider color={green[500]} idf="green" check={lineColor_g} setColor={changeLineColor} />
        //                 <ColorSlider color={ blue[500]} idf="blue"  check={lineColor_b} setColor={changeLineColor} />
        //             </Box>
        //         </Box>

        //         <Divider/>
                
        //         <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>

        //             <FormControlLabel control={<Checkbox checked={viewLine} onChange={(e) => changeViewLine(e.target.checked)}/>} label="Line" />
        //             <FormControlLabel control={<Checkbox checked={viewMarker}  onChange={(e) => changeViewMarker(e.target.checked)}/>} label="Marker" />
        //             <FormControlLabel control={<Checkbox checked={option.viewArrow} disabled  onChange={() => {}}/>} label="Arrow" />
        //         </Box>
        //         <Button variant="outlined" color="error" size="small" onClick={() => delLine()}> Del Line</Button>
        //     </Box>

        // </Box>
    )
}