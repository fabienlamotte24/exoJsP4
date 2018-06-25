/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
  return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(6);
}
var afficher9Car = function (texte) {
    return texte.substr(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
    var x = texte.split('.');
    return x[1];
}
var NombreEspaceString = function (texte) {
    return texte.match(/[' ']+/g).length;
}
var InverseString = function (texte) {
    var array = texte.split('');
    array.reverse();
    texte = array.join('');
    return texte;
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  for (var i = 0; i < array.length; i++){
  array[i] = Math.abs(array[i]);
  }
  return array;
}
var sufaceCercle = function (rayon) {
    return Math.ceil((rayon*rayon) * 3.14);
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt((ab*ab)+(ac*ac));
}
var calculIMC = function (poids, taille) {
  return Math.round((poids/(taille*taille))*100)/100;
}
