//navbar controls
window.addEventListener('scroll',function(event){
    if (window.pageYOffset>700){
        this.document.getElementById('nav').className = 'nav fixed'
    }
    else{
        this.document.getElementById('nav').className = 'nav'
    }
})
function fun(id){
   var posY = document.getElementById(id).offsetTop -200;
   console.log(posY)
   window.scrollTo(0,posY)
}
