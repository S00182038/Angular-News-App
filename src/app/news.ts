export interface News {
    author: string;
    title: string;
    description: string;
    publishedAt: string;
    source: Source;
    url: string;
    urlToImage: string;
}

export interface Source {
    id: number;
    name: string;
}