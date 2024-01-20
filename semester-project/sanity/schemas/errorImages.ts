import { defineField, defineType } from "sanity"

export const errorImage = defineType({
    name: "errorImage",
    title: "Two Error Images",
    type: "document",
    fields: [

        {
            name: "image1",
            title: "First Image",
            type: "image",
        },
        {
            name: "image2",
            title: "Second Image",
            type: "image",
        },
    ]
})


//export default product 