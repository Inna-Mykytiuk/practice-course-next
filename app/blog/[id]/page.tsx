import { Metadata } from 'next';
import { getPostById } from '@/services/getPosts';

// async function getData(id: string) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   return response.json();
// }

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  // const post = await getData(id);
  const post = await getPostById(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  // const post = await getData(id);
  const post = await getPostById(id);

  return (
    <>
      <h1 className="title">{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
