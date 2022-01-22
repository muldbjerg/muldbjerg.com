import * as React from "react"
import { useEffect, useRef } from "react"

import "../../css/atoms/showGrid.css"

const ShowGrid = () => {

    const ref = useRef(null);
    var grid = null;

    var gridColumns = 12; // TODO: make dynamic number of columns. 

    useEffect(() => {
        function toggleGrid(e){

            // Find "Shift+G" presses - shortcut
            if ((e.shiftKey) && e.code === 'KeyG') {
                console.log("Hallo");
                if(grid = ref.current){ 
                    if(grid.className){
                        grid.className = "";
                    }
                    else{
                        grid.className = "active";
                    }
                }
            } 
        }

        document.addEventListener('keydown', toggleGrid);

        // Clean up function - here removing the event listener
        return () => {
            document.removeEventListener('keydown', toggleGrid);
        }
    },[])


    return (
        <div id="showGrid" ref={ref}></div>
    )
}

export default ShowGrid
