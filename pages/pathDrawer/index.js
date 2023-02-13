
export default function pathDrawer() {

    return(
        <div className="flex mx-2 gap-2">
            <div className="flex flex-col gap-2 basis-1/5">
                <div className="bg-blue-200">
                    input Comp
                </div>
                <div className="bg-purple-200">
                    path view Comp
                </div>
            </div>

            <div className="bg-red-100 basis-4/5">
                map Comp
                
            </div>
        </div>
    )
}