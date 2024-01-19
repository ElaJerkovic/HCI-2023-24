import { type SchemaTypeDefinition } from 'sanity'
import {product} from '../sanity/schemas/product-schema'
import { category } from './schemas/category'
import { heroImage } from './schemas/heroImages'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, heroImage],
}


//export default schema