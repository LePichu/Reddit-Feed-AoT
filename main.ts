import { fetchPosts } from "https://deno.land/x/redditposts@v1.0.0/src/mod.ts"

const pics = await fetchPosts("pics", { amount: 3, category: "top" })
const images = JSON.parse(await Deno.readTextFile('images.json'))
pics.forEach(x => {
    images.images.push(x.imageURL.toString())
})

Deno.writeTextFile('./images.json', JSON.stringify(images, null, 4))