function timer() {
    function getTimerFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = getTimerFromSeconds(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
        console.log(e.target);

        const iniciar = document.querySelector('.iniciar');
        
        if(el.classList.contains('zerar')) {
            iniciar.disabled = false;
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    
        if(el.classList.contains('iniciar')) {
            iniciar.disabled = true;
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();

        }
    
        if(el.classList.contains('pausar')) {
            iniciar.disabled = false;
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });    
}

timer();