import { type SchemaTypeDefinition } from 'sanity'
import {product} from '../sanity/schemas/product-schema'
import { category } from './schemas/category'
import { heroImage } from './schemas/heroImages'
import { errorImage } from './schemas/errorImages'
import { successImage } from './schemas/successImages'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, heroImage, errorImage, successImage],
}


//export default schema