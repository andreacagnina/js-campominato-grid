document.getElementById('btn_start').addEventListener('click', function () {


    for (let i = 1; i < 101; i++) {

        let row = document.querySelector('.row');
        let col = document.createElement('div');
        let cont = document.createElement('div');

        col.className = 'col-1';


        cont.className += 'content';


        console.log(col)
        row.append(col);
        col.append(cont);

        cont.innerText = (i)


    }
});