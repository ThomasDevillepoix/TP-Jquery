$(function(){
    $('#calcul').click(function(){

    var maths = parseFloat($('#maths').val());  //recupérer la valeur des inputs.
    var francais = parseFloat$(('#francais').val());
    var anglais = parseFloat$(('#anglais').val());
    var histoire = parseFloat$(('#histoire').val());
    var sport = parseFloat$(('#sport').val());

    
    var result = $('#calcul').val() = (parseFloat(maths) + parseFloat(francais) + parseFloat(anglais) + parseFloat(histoire) + parseFloat(sport))/5;

    if (result < 10 ) {
        alert('Votre moyenne est de :' + result + 'En dessous de la moyenne');
    }
    else if (result >= 10 && result < 13 ){
        alert('Votre moyenne est de : ' + result + 'Moyen');
    }
    else if (result >= 13 && result < 16){
        alert('Votre moyenne est de :' + result + 'Bien');
    }
    else if (result >= 16 && result <20){
        alert('Votre moyenne est de :' + result + 'Très bien');
    }
    else {
        alert('Votre moyenne est de :' + result + 'Excellent');
    }
});
});