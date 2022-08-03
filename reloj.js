const doc = document;

const $dias = doc.getElementById('dia'),
    $horas = doc.getElementById('hora'),
    $minutos = doc.getElementById('minutos'),
    $segundos = doc.getElementById('segundos');

const getTimer = (limite) => {

    let date = new Date();

    let time = (new Date(limite) - date + 1000) / 1000,
        segundos = ('0' + Math.floor(time % 60)).slice(-2),
        minutos = ('0' + Math.floor(time / 60 % 60)).slice(-2),
        horas = ('0' + Math.floor(time / 3600 % 24)).slice(-2),
        dias = Math.floor(time / (3600 * 24));


    return {

        time,
        segundos,
        minutos,
        horas,
        dias
    }
}

const rutina = (date) => {

    const intervalo = setInterval(() => {

        const dat = getTimer(date);

        $dias.innerHTML = dat.dias;
        $horas.innerHTML = dat.horas;
        $minutos.innerHTML = dat.minutos;
        $segundos.innerHTML = dat.segundos;


        if (dat.time <= 1) {
            clearInterval(intervalo);
        }

    }, 1000);

}

rutina('August  6, 2022  00:00:00')
