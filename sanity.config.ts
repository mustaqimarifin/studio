import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'
import {visionTool} from '@sanity/vision'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'
export default defineConfig({
  name: 'default',
  title: 'studioOlive',
  projectId: '861c1zhj',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema(), visionTool({defaultApiVersion: apiVersion})],
  schema: {
    types: schemaTypes,
  },
})
