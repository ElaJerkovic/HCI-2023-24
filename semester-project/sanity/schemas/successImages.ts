import { defineField, defineType } from "sanity"

export const successImage = defineType({
    name: "successImage",
    title: "Two success Images",
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
