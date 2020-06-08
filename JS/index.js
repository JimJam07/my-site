//navbar controls
window.addEventListener('scroll',function(event){
    if (window.pageYOffset>200){
        this.document.getElementById('nav').className = 'nav fixed'
    }
    else{
        this.document.getElementById('nav').className = 'nav'
    }
})

//typewriter
var index = 0,subIndex=0
const typeContent = ["Hola! I'm Sharan","A Web Developer","welcome to my website"]
var topContent = document.getElementById('top-content');
var printText='';
setInterval(()=>{
   var body=typeContent[index]
  if (index==typeContent.length){
      index='0'
  }
  else{
    if(subIndex<body.length){
        printText+= body[subIndex]
        subIndex++;
        topContent.innerHTML = printText+'   <span id="cursor">'+'|'+'</span>'
    }
    else{
        subIndex=0
        index++;
        printText=''
    }
  }
},150)


