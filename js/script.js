document.getElementById('btn_start').addEventListener('click', function () {

    for (let i = 1; i < 100; i++) {

        let row = document.querySelector('.row');
        let col = document.createElement('div');
        let cont = document.createElement('div');

        col.className = 'col-1';

        cont.className += 'content border border-black d-flex justify-content-center align-items-center bg-dark w-100 my-2 ratio ratio-1x1 text-white';


        console.log(col)
        row.append(col);
        col.append(cont);

        cont.innerText = (i)

        let first = document.querySelector('.col-1');
        first.className += ' offset-2';

    }
});