document.getElementById('btn_start').addEventListener('click', function () {

    let col = document.createElement('div');
    let cont = document.createElement('div');

    col.className = 'col-1';
    cont.className += 'content border border-black d-flex justify-content-center align-items-center';

    console.log(col)

    col.append(cont);

});