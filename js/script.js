function CreaUnQuadrato() {
    let square = document.createElement('div');
    square.className = ('content')

    return square;
}

const contenitore = document.getElementById('container');

for (let i = 1; i < 101; i++) {
    let selSquare = CreaUnQuadrato();

    selSquare.addEventListener('click', function () {
        this.className += (' bg_cel');
        console.log(i);

    });

    selSquare.innerText = i;
    contenitore.append(selSquare);
}

