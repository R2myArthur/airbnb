/* Modèle de structure récupéré depuis le backend (centrale-api-airbnb), les noms doivent être identique à ceux de la base de donnée */
export interface Logement {
    id: number;
    image: string;
    city: {
        zipCode: number;
        name: string;
    }
    price: number;
    rating:number;
    favourite?:number; // Rend l'objet facultatif
}