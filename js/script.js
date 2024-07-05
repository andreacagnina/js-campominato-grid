function CreaUnQuadrato() {
    let square = document.createElement('div');
    square.className = ('content')

    return square;
}

const contenitore = document.getElementById('container');

for (let i = 1; i < 101; i++) {
    let selSquare = CreaUnQuadrato();

    selSquare = document.addEventListener('click' function () {
        this

    })

    selSquare.innerText = i;
    contenitore.append(selSquare);
}

