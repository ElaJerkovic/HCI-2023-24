import Link from "next/link";

export interface Item {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPosts = async (): Promise<Item[]> => {
  const data = await fetch(`${BASE_API_URL}/photos`);
  return data.json();
};

export default async function Shop() {
  const items = await getPosts();
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">Shop Index Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg">
            <Link href={`shop/${item.id}`}>
              
                <img src={item.url} alt={item.title} className="w-full h-56 object-cover rounded-t-lg" />
                <div className="p-4">
                  <span className="text-xl text-zinc-600 hover:underline">{item.title}</span>
                </div>
             
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}