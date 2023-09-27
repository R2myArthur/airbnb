export interface Logement {
    id: number;
    city: {
        zipCOde: number;
        name: string;
    }
    price: number;
    rating:number;
    favourite?:number; // Rend l'objet facultatif
}