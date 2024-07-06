document.getElementById('btn_start').addEventListener('click', function () {
    const contenitore = document.getElementById('container');
    contenitore.innerHTML = '';

    let livello = document.getElementById('level').value;
    console.log(livello)

    if (livello == 1) {

    }
    else if (livello == 2) {

    }
    else if (livello == 3) {

    }





    function CreaUnQuadrato() {
        let square = document.createElement('div');
        square.className = ('content')
        return square;
    }

    for (let i = 1; i < 101; i++) {
        let selSquare = CreaUnQuadrato();

        selSquare.addEventListener('click', function () {
            this.className += (' bg_cel');
            console.log(i);

        });


        selSquare.innerText = i;
        contenitore.append(selSquare);
    };
    for (let i = 1; i < 82; i++) {
        let selSquare = CreaUnQuadrato();

        selSquare.addEventListener('click', function () {
            this.className += (' bg_cel');
            console.log(i);

        });


        selSquare.innerText = i;
        contenitore.append(selSquare);
    };
    for (let i = 1; i < 50; i++) {
        let selSquare = CreaUnQuadrato();

        selSquare.addEventListener('click', function () {
            this.className += (' bg_cel');
            console.log(i);

        });


        selSquare.innerText = i;
        contenitore.append(selSquare);
    };
});
