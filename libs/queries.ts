const postFields = `
  _id,
  name,
  title,
  publishedAt,
  excerpt,
  mainImage,
  metaTitle,
  metaDescription,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "slug": slug.current,
  "author": author->{name, image},
`;

export const allPostsQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug][0]  {
    body[]{
      ...,
    	asset->{
        ...,
        "_key": "_id"
      }
    },
    ${postFields}
  }, 
  "morePosts": *[_type == "post" && slug.current != $slug] [0...2]  {
    body,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;
