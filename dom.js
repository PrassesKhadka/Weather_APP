import typeWriter from "./typewriter.js";
const cityname=document.querySelector('.cityname')
const typewriter_cursor1=document.querySelector('.typewriter-cursor1')
const typewriter_cursor2=document.querySelector('.typewriter-cursor2')
const condition=document.querySelector('.condition')
export default function render(obj)
{
    typeWriter(`${obj.cityName},${obj.country}`,cityname,typewriter_cursor1)    
    typeWriter(obj.condition,condition,typewriter_cursor2)    
    
    
    
    
    
    
}
