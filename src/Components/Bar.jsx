import '../Styles/bar_style.css';


export default function Bar({bar_height,bar_width,length,color}){
    
    
    const front_level={
        height: `${length}px`,
        backgroundColor:color[0],
        
    };
    const top_level={
        top: `${ bar_height-length }px`,
        backgroundColor:color[1],
    };
    const right_level={
        height: `${length}px`,
        backgroundColor:color[2],

    };
    return (<div className="Bar" style={{"--bar_height":bar_height,"--bar-width":bar_width}} >
                
            <div className="side left" >
                
            </div>
            <div className="side right" >
                        <div className="color-right" style={right_level}></div>
            </div>
            <div className="side top"  >
                       
            </div>
            <div className="color-top" style={top_level}></div>
            <div className="side bottom"></div>
            <div className="side front">
                    <div className="color-front " style={front_level}>
                        { (bar_width>= 25 ) && length}
                    </div>
            </div>
            <div className="side back"></div>
    </div>);
}