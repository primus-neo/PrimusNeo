import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { config } from './src/lib/sanity/config';

export default defineConfig({
  name: 'default',
  title: 'PrimusNeo',
  basePath: '/studio',
  projectId: config.projectId,
  dataset: config.dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
