setInterval(()=>{
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${mrotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${srotation}deg)`;

}, 1000)