import { Component } from 'react';
import './App.css'
import Bar from './Components/Bar';
import "./Styles/Buttons.css"
import { Fragment } from 'react';
import Sort from './Components/Sorting';
import Navbar from './Components/Navbar';


class App extends Component{

  
  state={
    count:10,
    array:[],
    color:[["rgb(153, 255, 150,0.654)","rgb(121, 255, 116,0.654)","rgba(110, 245, 105, 0.655)"],
           ["rgba(255, 147, 147, 0.877)","rgba(255, 101, 101, 0.662)","rgba(255, 62, 62, 0.468)"],
           ["rgba(147, 190, 255, 0.654)","rgba(101, 119, 255, 0.662)","rgba(123, 117, 240, 0.468)"]],
    arraysteps:[],
    colorsteps:[],
    current:0,
    delay:300,
    setting:0,
    height:270,
    width:10,
    sort_method:"Bubble sort"
    
  }
  
  


  
  RandomNumber=(min,max)=>{
    return Math.floor((Math.random()*(max-min))+min);
  }
  GenerateArray=(w)=>{
    
    var temp=[];
  
        let count=this.state.count;
        let height=this.state.height;

        for( let i=0;i<count;i++){
          temp.push(this.RandomNumber(10,height));
        }
  
        this.setState(prev=>({...prev,"arraysteps":[temp],
          "width":w,
          "array":temp,
          "colorsteps":[Array(count).fill(2)],
          "current":0,
        } 
        ));
    
    
  }
  componentDidMount=()=>{
    const w=Math.floor((window.innerWidth*0.8)/(this.state.count))-6;
    this.GenerateArray(w);
    window.onresize=()=>{
        if(this.state.setting!=-1){
          const w=Math.floor((window.innerWidth*0.8)/(this.state.count))-6;
          this.GenerateArray(w); 
      }
    
    }
  }
 
  start = () => { 
    if(this.state.current!=0){
      const w=Math.floor((window.innerWidth*0.8)/(this.state.count))-6;
      this.GenerateArray(w);
      
    }
    
  if(this.state.setting!=-1)
        this.setState(prev=>({...prev,setting:-1}),()=>{
        
        this.process();
        
      });
    
    
   
  
}; 
process=()=>{
  let i = 0; 
  Sort(this.state.sort_method,
    [this.state.array,this.state.arraysteps,this.state.colorsteps]);
 

  let steps=this.state.arraysteps.length-1;
  const updateState = (i) => { 
      setTimeout(() => { 
          this.setState(prevState => ({ 
              ...prevState, 
              current: i, 
              array: this.state.arraysteps[i] 
          }),()=>{
            if (i < steps) { 
              updateState(i + 1); // Call updateState recursively with the next index 
            }else if(i==steps){
              this.setState(prev=>({...prev,setting:0}));
            }

              

          }); 
           
          
      }, this.state.delay); 
    
     
    }; 
   
  updateState(i); // Start the state update process 
 
}
  reload=(w)=>{

    if(this.state.setting!=-1)
      
      this.setState(prev=>({...prev,current:0}),()=>{
        if(w==null)
            w=Math.floor((window.innerWidth*0.8)/(this.state.count))-6;

          this.GenerateArray(w);
        });
  }
  

  setting=()=>{
   if(this.state.setting!=-1)
      this.setState(prev => ({ "setting": prev.setting === 0 ? 1 : 0 })); 
  }
  settingsChange=(e)=>{
    
    let name=e.target.name;
    let value=parseInt( (e.target.value).trim() );
    if(value>3 && name!="delay"){
      
      if(name=="count"){
        const w=Math.floor((window.innerWidth*0.8)/(value))-6;
        
        if(w>3)
        this.setState(prev=>({...prev,[name]:value,width:5}),()=>{
          this.reload(w);
        }); }
      }
      else{ this.setState(prev=>({...prev,[name]:value})); }
      
      
    
  }

  handleSort=(e)=>{
    let value=e.target.value;
    
    this.setState(prev=>({...prev,sort_method:value}));


  }
  render() { 
    const max_count=Math.floor((window.innerWidth*0.7)/10)-6;
    
    const colors=this.state.colorsteps[this.state.current];
    const arrays=this.state.arraysteps[this.state.current];

        if(this.state.array){
    const Bars=this.state.array.map((_, idx) => {
            const ckey=colors[idx];
            
            const akey=arrays[idx];
            return  (<Fragment key={idx}>
                            <Bar  length={akey} color={this.state.color[ckey]} bar_width={this.state.width} bar_height={this.state.height}  />
                      </Fragment>);
          })


const smooth=1-(this.state.delay/1000);
          
    return ( 
<div  className='Contain' style={{"--smooth":smooth+"s" }}>
      <Navbar onReload={()=>this.reload(null)} onSettings={this.setting} selectSort={this.handleSort}/>

      { (this.state.setting==1) && (<div className="Popup"  >
        <label htmlFor="Range">Count : </label>
        <input type="range" className="Range" name='count'  onChange={this.settingsChange}
               min={7} max={max_count} value={this.state.count} />

     
        <label htmlFor="delay">Speed : </label>

        <select  className="Option" defaultValue="300" name="delay" onChange={this.settingsChange}>
                <option value="800">0x</option>
                <option value="300">1x</option>
                <option value="200">2x</option>
                <option value="100">3x</option>
                <option value="0">4x</option>

            </select>
      </div>)}

        <div className='holder'>  
          <div className='Container'> 
            {Bars} 
          </div> 

          <button onClick={this.start} className='Sort'>
              SORT
          </button>
        </div>
</div>
    ); }
} 
}
export default App
