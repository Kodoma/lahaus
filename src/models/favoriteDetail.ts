import {ReactNode} from "react";

export interface FavoriteDetailProps {
    name: string;
    images: CardImage[];
}

export interface CardImage extends CardImageProps {
    id: number;
}

export interface CardImagesProps {
    images: CardImage[];
}

export interface CardImageProps {
    image: string;
    alt: string;
}

export interface CardProps {
    children: ReactNode;
    containerStyle?: string;
}
