document.querySelector('.button').addEventListener('click', function (event) 
{
    event.preventDefault();
    var real = document.querySelector('.real').value;
    document.querySelector('.dollar').textContent = '$' + Number(real * 5.66).toFixed(2);
});