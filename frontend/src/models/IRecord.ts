import { Genre } from "./enums";

export type IRecords = {
    title: string;
    artist: string;
    year: number;
    genre: Genre
    coverUrl: string;
}