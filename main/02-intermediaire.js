/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
 */
function combine(tableau1, tableau2) {
    let tableau_nombres=[1, 2, 3];
    let tableau_fruits=["apple", "orange", "banana"];
    
    function combine(tableau1, tableau2) {
        let tableau_result=[];
        for (let i = 0; i < tableau1.length; i++){
            tableau_result.push(tableau1[i]);
            tableau_result.push(tableau2[i]);
        }
        return tableau_result;
    }
    
}

/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur
 * de offset.
 * 
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
function rotate(tableau, offset) {
    function rotate(tableau, offset) {
        var newTable = [];
        var count = offset;
        for (var i = 0; i < tableau.length; i++) {
            if (i + count >= tableau.length) count = -i;
            newTable[i] = tableau[i + count];
        }
        return newTable
    }
    var tableauRotate = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(rotate(tableauRotate, 2));

}

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
function syracuse(nombre) {
    let ma_syracuse = 3;
 console.log("nombre_test_pour_la_suite:" + ma_syracuse)
 console.log("10_premier_élèments:" + syracuse(ma_syracuse))
 function syracuse(nombre) {
    let array = [nombre];
    for(let i=0; i<10; i++)
    if ((array[i] % 2 === 0)==true){
        array.push((array[i])/2)
        }
    else{ 
        array.push((array[i]*3)+1)
    }
    return array
 }

}
