export interface Post {
  title: string;
  mainImage: string;
  publishedAt: string;
  author: Author;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  estimatedReadingTime: number;
}


export interface Author{
    name: string;
    image: string;
}