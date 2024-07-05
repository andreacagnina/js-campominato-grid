const contenitore = document.getElementById('container');

for (let i = 1; i < 101; i++) {
    let square = document.createElement('div');

    square.className = ('content')

    square.innerText = i;
    contenitore.append(square);
}

