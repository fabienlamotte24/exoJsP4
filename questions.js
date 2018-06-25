/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {//Donne le nombre de caractère de la chaine de caractère//
    return texte.length;
}
var remplaceECar = function (texte) {//Remplace le premier caractère spécifié par un autre//
  return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {//Concatène deux chaines de caractères//
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {//Affiche le caractère à la 5ème position//
    return texte.charAt(6);
}
var afficher9Car = function (texte) {//Affiche les 9 premiers caractères//
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {//Affiche la chaine de caractère tout en majuscule//
    return texte.toUpperCase();
}
var minusculeString = function (texte) {//Affiche la chaine de caractère tout en minuscule//
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {//Supprime les espaces d'une chaine de caractères//
    return texte.trim();
}
var IsString = function (texte) {//Vérifie l'existence d'une chaine de caractère//
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {//Affiche l'exention d'un fichier type image ou autre//
    var x = texte.split('.');
    return x[1];
}
var NombreEspaceString = function (texte) {//Compte le nombre d'espace dans une chaine de caractère//
    return texte.match(/[' ']+/g).length;
}
var InverseString = function (texte) {//Inverse tous les caractères d'une chaine de caractères//
    var array = texte.split('');
    array.reverse();
    texte = array.join('');
    return texte;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {//Calcul de puissance//
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {//Met un nombre en valeur absolue//
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {//Met tout les nombre d'un tableau en valeur absolue//
  for (var i = 0; i < array.length; i++){
  array[i] = Math.abs(array[i]);
  }
  return array;
}
var sufaceCercle = function (rayon) {//Calcul de la surface d'un cercle//
    return Math.ceil((rayon*rayon) * 3.14);
}
var hypothenuse = function (ab, ac) {//Calcul de l'hypoténuse//
    return Math.sqrt((ab*ab)+(ac*ac));
}
var calculIMC = function (poids, taille) {//Calcul de l'IMC//
  return Math.round((poids/(taille*taille))*100)/100;
}
