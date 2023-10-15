/* Modèle de structure de donnée utilisé pour la récupération de données depuis le service de Geo.gouv.
    Attention à bien respecter les noms des paramètres de la structure deo.gouv
*/
export interface City{
    codesPostaux: Array<string>;
    nom: string;
}
