import { inventory } from "@/app/config/inventory";
import { client } from "@/sanity/lib/client"


export async function seedSanityData() {
  const transaction = client.transaction()

  inventory.forEach((item: { id: any; name: any; currency: any; description: any; price: any; sku: any; metals: any; colors: any; categories: any }) => {
    const product = {
      _type: "product",
      _id: item.id,
      name: item.name,
      currency: item.currency,
      description: item.description,
      price: item.price,
      sku: item.sku,
      metals: item.metals,
      colors: item.colors,
      categories: item.categories,
    }
    transaction.createOrReplace(product)
  })
  await transaction.commit()
  await seedSanityImages()
  console.log("Sanity data seeded")
}
/*
async function seedSanityImages() {
  inventory.forEach(async (item: { images: any; id: string; name: string; }) => {
    let images: any[] = []
    for (const image of item.images) {
      const imageAssetResponse = await fetch(image)
      const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
      const imageAsset = await client.assets.upload(
        "image",
        Buffer.from(imageAssetBuffer)
      )
      images.push({
        _key: imageAsset._id,
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      })
    }
    await client
      .patch(item.id)
      .set({ "slug.current": slugify(item.name), images })
      .commit()
  })
}*/
async function seedSanityImages() {
  await Promise.all(
    inventory.map(async (item: { images: any; id: string; name: string }) => {
      let images: any[] = [];
      for (const image of item.images) {
        const imageAssetResponse = await fetch(image);
        const imageAssetBuffer = await imageAssetResponse.arrayBuffer();
        const imageAsset = await client.assets.upload("image", Buffer.from(imageAssetBuffer));
        images.push({
          _key: imageAsset._id,
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset._id,
          },
        });
      }
      await client
        .patch(item.id)
        .set({ "slug.current": slugify(item.name), images })
        .commit();
    })
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
