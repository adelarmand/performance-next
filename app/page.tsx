import Image from "next/image";

export interface Photos {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default async function Home() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10');
  const photos: Photos[] = await resp.json();

  return (
    <>
      <h1>Create Next App</h1>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {
            photos.map(({ id, title, url }) => (
              <tr key={id}>
                <td>{title}</td>
                <td><Image width={300} height={300} alt={title} src={url} /></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
