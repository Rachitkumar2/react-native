import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'deliveroo-clone',

  projectId: 'yzdmqra7',
  dataset: 'deliveroo',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
