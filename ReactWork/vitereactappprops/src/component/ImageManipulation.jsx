import React from 'react';
import cat from './cat.png'
function ImageManipulation(){
    const [catHeight,setCatHeight] = React.useState(200);
    const [catWidth,setCatWidth] = React.useState(200);
    return (
        <div>
            <h2>ImageManipulation</h2>
            <div style={{border: '2px solid red', height :'400px', width:'400px'}}>
                <img src={cat} height={catHeight} width={catWidth} alt="cat" />
            </div>
            <div>
                <button onClick={()=> setCatHeight(catHeight+10)}>Increase Height</button>
                <button onClick={() => setCatWidth(catWidth+10)}>Increase Width</button>
                <button onClick={()=> setCatHeight(catHeight-10)}>Decrease Height</button>
                <button onClick={() => setCatWidth(catWidth-10)}>Decrease Width</button>
            </div>
        </div>
    )
}

export default ImageManipulation