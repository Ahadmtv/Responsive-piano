const pianoKey=document.querySelectorAll('.key-btn .key');
const audioVolume=document.querySelector('.volume input');
const hideButton=document.querySelector('.key-check input');
let audio=new Audio("tunes/a.wav");
let allKey=[];
pianoKey.forEach((key)=>{
    allKey.push(key.dataset.key);
    key.addEventListener("click",()=>{
        audio.src=`tunes/${key.dataset.key}.wav`
        audio.play();
    })
});
document.addEventListener('keydown',(e)=>{
if(allKey.includes(e.key)){
audio.src=`tunes/${e.key}.wav`
audio.play();
let clikedKey=document.querySelector(`[data-key="${e.key}"]`);
clikedKey.classList.add('active');
setTimeout(()=>{
    clikedKey.classList.remove('active');
},150);
}
});
audioVolume.addEventListener('input',(e)=>{
    audio.volume=e.target.value;
});
hideButton.addEventListener('click',()=>{
    const spanKey=document.querySelectorAll('.key span');
    spanKey.forEach((span)=>{
        span.classList.toggle('hide');
    })
})


