window.addEventListener('scroll',function(event){
    if (window.pageYOffset>200){
        this.document.getElementById('nav').className = 'nav fixed'
    }
    else{
        this.document.getElementById('nav').className = 'nav'
    }
})