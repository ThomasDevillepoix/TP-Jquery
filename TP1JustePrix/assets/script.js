$(function() {

        var number = Math.floor(Math.random() * 100); // Faire en sorte qu'il choisisse un nombre aléatoire jusqu'a 100. ne pas mettre dans la function pour éviter un reboot du numero aléatoire avec le recghargement de la page
        var counter = 0;

    $('#goodLuck').click(function() { //Mettre un event permet d'eviter au navigateur de recharger la page au click sur le bouton

        counter = counter + 1;

        var userTry = $('#essaiTry').val();
        
        if (userTry == number) {  // on met une condition : Si l'essai est egal au bon prix donc ...
        alert('Correct, en :' + ' ' + counter + ' ' + 'essais !');
        }
        else if (userTry < number) {
        alert('Plus');   
        }
        else {
        alert('Moins');  
        }
        $('#essaiTry').val('');
    });
});
