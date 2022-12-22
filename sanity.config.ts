//@ts-ignore
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {markdownSchema} from 'sanity-plugin-markdown'
import { visionTool } from '@sanity/vision'
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2022-11-15'
export default defineConfig({
  name: 'default',
  title: 'lee',
  projectId: '720o5jzr',
  dataset: 'production',
  plugins: [deskTool(), markdownSchema(),   visionTool({ defaultApiVersion: apiVersion }),],
  schema: {
    types: schemaTypes},
})
