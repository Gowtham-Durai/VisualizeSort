import swap from "./swap";
import Color from "./Colors";

 
function BubbleSort(array,arraySteps,ColorSteps){
    let arr=array.slice();
    let len=arr.length-1;
    let temp=new Array(len+1).fill(Color.DEFAULT); 
    let limit;
    let sorted;
    arraySteps.push(arr.slice());
    temp[0]=Color.POINTER;
    temp[1]=Color.POINTER;
    ColorSteps.push(new Array(len+1).fill(Color.DEFAULT) );
    temp[0]=Color.DEFAULT;
    temp[1]=Color.DEFAULT;

    for(let i=0;i<len;i++){
        limit=len-i;

        sorted=false;
        for(let j=0;j<limit;j++){

            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);    
                sorted=true;
            }

            arraySteps.push(arr.slice());
            temp[j]=Color.POINTER;
            temp[j+1]=Color.POINTER;
            ColorSteps.push(temp.slice());
            temp[j]=Color.DEFAULT;
            temp[j+1]=Color.DEFAULT;
            
        }

        if(sorted==false) break;
    }
    arraySteps.push(arr.slice());
    ColorSteps.push(new Array(len+1).fill(Color.SORTED) );


    return ;

}


function InsertionSort(array,arraySteps,ColorSteps)  {
    let len=array.length;
    
    let arr=array.slice();

    let key,i,j;  
    let temp=new Array(len+1).fill(Color.DEFAULT);   

    for (i=1; i < len; i++){  
        temp[i-1]=Color.SORTED;

        key=arr[i];    
        temp[i]=Color.POINTER;

        arraySteps.push(arr.slice());
        ColorSteps.push(temp.slice());

        j=i-1;  
        temp[j]=Color.POINTER;

        arraySteps.push(arr.slice());
        ColorSteps.push(temp.slice());
        
        temp[j]=Color.SORTED;
        
        

        while (j>=0 && arr[j] > key) {  
            arr[j+1]=arr[j];  
            
            temp[j+1]=Color.POINTER;

            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());
// 
            temp[j+1]=Color.SORTED;
            
            
            j--;  
            temp[j]=Color.POINTER;
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());

            temp[j]=Color.SORTED;
        }  


        temp[j+1]=Color.POINTER;   
        arraySteps.push(arr.slice());
        ColorSteps.push(temp.slice());
        arr[j+1] = key;  
        temp[j+1]=Color.SORTED;   
        
    }  

    arraySteps.push(arr.slice());
    ColorSteps.push(new Array(len).fill(Color.SORTED) );

    console.log(arr);
    return ;
}  

function ShellSort(array,arraySteps,ColorSteps)  {
    let len=array.length;
    
    let arr=array.slice();

    let key,i,j;  
    let temp=new Array(len+1).fill(Color.DEFAULT);   
    let gap=Math.floor(len/2);

    while(gap>0){
        if(i<len){
            temp=new Array(len).fill(Color.DEFAULT)
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());
            }
        for (i=gap; i < len; i++){  
           
    
            key=arr[i];    
            temp[i]=Color.POINTER;
    
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());
    
            j=i;  
            
            while (j>=gap && arr[j-gap] > key) {  
                arr[j]=arr[j-gap];  
                temp[j]=Color.POINTER;
                temp[j-gap]=Color.POINTER;
    
                arraySteps.push(arr.slice());
                ColorSteps.push(temp.slice());
    // 
                temp[j]=Color.SORTED;
                temp[j-gap]=Color.SORTED;
                
                
                j-=gap;  
                temp[j]=Color.POINTER;
                arraySteps.push(arr.slice());
                ColorSteps.push(temp.slice());
    
                temp[j]=Color.SORTED;
            }  
    
    
            temp[j]=Color.POINTER;   
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());
            arr[j] = key;  
            temp[j]=Color.SORTED;   
            
        }  
        gap=Math.floor(gap/2);

        
    }

    arraySteps.push(arr.slice());
    ColorSteps.push(new Array(len).fill(Color.SORTED) );

    console.log(arr);
    return ;
}  


function SelectionSort(array,arraySteps,ColorSteps){
    let len=array.length;
    
    let arr=array.slice();

    let min_idx,i,j;  
    let temp=new Array(len+1).fill(Color.DEFAULT);


    for(i=0;i<len;i++){
        min_idx=i;
        temp[min_idx]=Color.POINTER;

        arraySteps.push(arr.slice());
        ColorSteps.push(temp.slice());
        
        for(j=min_idx+1;j<len;j++){

            temp[j]=Color.POINTER;
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());
            temp[j]=Color.DEFAULT;

            if(arr[j]<arr[min_idx]){
                
                temp[min_idx]=Color.DEFAULT;
                arraySteps.push(arr.slice());
                ColorSteps.push(temp.slice());

                min_idx=j;

                temp[min_idx]=Color.POINTER;
                arraySteps.push(arr.slice());
                ColorSteps.push(temp.slice());

            
            }
            }
        
        if(i!=min_idx) {
            temp[min_idx]=Color.DEFAULT;
            temp[i]=Color.SORTED;
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());

            swap(arr,i,min_idx)
            temp[min_idx]=Color.DEFAULT;
            arraySteps.push(arr.slice());
            ColorSteps.push(temp.slice());
            
        }




    }
    arraySteps.push(arr.slice());
    ColorSteps.push(new Array(len).fill(Color.SORTED) );

}

export default function Sort(method,attr) {

    switch(method){
        case 'Bubble sort':
            BubbleSort(attr[0],attr[1],attr[2]);
            break;
        case 'Selective sort':
            SelectionSort(attr[0],attr[1],attr[2]);
            break;
        case 'Insertion sort':
            InsertionSort(attr[0],attr[1],attr[2]);
            break;
        case 'Shell sort':
            ShellSort(attr[0],attr[1],attr[2]);
            break;
        
    }
}