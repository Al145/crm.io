window.setInterval(function() {
    let headerImg = [
            'img/back1.jpg',
            'img/back2.jpg',
            'img/back3.jpg',
            'img/back4.jpg',
            'img/back5.jpg',
            'img/back6.jpg',
            'img/back7.jpg'
        ],
        headerImgName = Math.floor(Math.random() * headerImg.length),
        headerBg = document.getElementById('headerBg');

    headerBg.style.backgroundImage = 'url(' + headerImg[headerImgName] + ')';
}, 8000);