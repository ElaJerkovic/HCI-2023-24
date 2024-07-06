import { defineField, defineType } from "sanity"

export const category = defineType({
    name: "category",
    title: "Categories",
    type: "document",
    fields: [
       {
            name: "name",
            title: "Name Of Category",
            type: "string",
        },
    ]
})


//export default product 