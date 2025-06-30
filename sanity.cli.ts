import { defineCliConfig } from 'sanity/cli';
import { config } from './src/lib/sanity/config';

export default defineCliConfig({
  api: {
    projectId: config.projectId,
    dataset: config.dataset,
  },
});
