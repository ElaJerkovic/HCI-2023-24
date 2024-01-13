 import { Item } from "../page";

interface Params {
  itemId: string;
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

const getPost = async (id: string): Promise<Item> => {
  const data = await fetch(`${BASE_API_URL}/photos/${id}`);
  return data.json();
};

export default async function ShopPost({ params }: { params: Params }) {
  const item = await getPost(params.itemId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl text-zinc-700 font-bold p-10 capitalize">
        <span className="text-neutral-400">Item {item.id}:</span> {item.title}
      </h1>
      <p className="text-xl p-10"><img src={item.url}/></p>
    </main>
  );
} 
/* interface Params {
  itemId: string;
}

export interface ShopItemsParams {
  params: Params;
}

export default function ShopPost({ params }: ShopItemsParams) {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-3xl font-bold p-10">Item #{params.itemId}</h1>
    </main>
  );
} */