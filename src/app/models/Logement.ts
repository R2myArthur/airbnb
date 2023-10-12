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