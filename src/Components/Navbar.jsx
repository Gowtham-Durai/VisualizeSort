import Logo from "./Logo";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineAutorenew } from "react-icons/md";


export default function Navbar({onReload,onSettings,selectSort}){

    

    return (
    <div className="Navbar">
        <Logo/>

      
        
        <select  className="Option" onChange={selectSort}>
                <option value="Bubble sort">Bubble Sort</option>
                <option value="Insertion sort">Insertion Sort</option>
                <option value="Selective sort">Selective Sort</option>
                <option value="Shell sort">Shell Sort</option>

                {/* <option value="">Merge Sort</option>
                <option value="">Quick Sort</option> */}

            </select>
            <MdOutlineAutorenew className="Reload" onClick={onReload}/>
            <IoSettingsSharp  className="Setting" onClick={onSettings}/>

    </div>);
}