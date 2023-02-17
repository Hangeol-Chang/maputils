import { useState } from 'react'
import Button from '../common/Button'

export default function PathInput({className, drawPath, lngfirst, setLngfirst}) {
    let [path, setPath] = useState('');

    return (
        <div className={`
            ${className}
        `}>
            <textarea className="w-full outline outline-1 rounded outline-blue-200" rows="4"
                value={path}
                onChange={(e) => setPath(e.target.value)}
            >

            </textarea>

            <div className="flex justify-between">
                <div>
                    <input type="checkbox" id="hhmmddd" className="mr-1"/>
                    <label for="hhmmddd">hmd</label>
                </div>

                <div>
                    <input type="checkbox" id="lngf" className="mr-1" 
                        defaultValue={lngfirst}
                        onChange={(e) => setLngfirst(e.target.value)}    
                    />
                    <label for="lngf">lng first</label>
                </div>
                <Button color="primary_outline" clickEvent={(e) => drawPath(path)} value="draw path"/>

            </div>
            
            {/* <Box  sx={{m : 2}} >
                    <TextField
                        variant="outlined"
                        value={coordi}
                        multiline rows={3} label="Input Coordinates"
                        sx={{width:300, height:100}}
                        onChange={(e) => setCoordi(e.target.value)}
                    >
                    </TextField>
                    
                    <Button variant="outlined" onClick={() => addLine(coordi)}>add line</Button>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <FormControlLabel control={<Checkbox checked={hhmmddd} onChange={(e) => setHhmmddd(e.target.checked)}/>} label="hhmm˚ddd" />
                        <FormControlLabel control={<Checkbox checked={lngfirst} onChange={(e) => setLngfirst(e.target.checked)}/>} label="lng_first" />
                    </Box>
                </Box> */}
        </div>
    )
}