export interface Logement {
    id: number;
    image?: HTMLImageElement;
    city: {
        zipCode: number;
        name: string;
    }
    price: number;
    rating:number;
    favourite?:number; // Rend l'objet facultatif
}