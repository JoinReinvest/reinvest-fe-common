import { generateConsumer } from './generators/consumer.js';
import { generateProvider } from './generators/provider.js';
import { b as Steps } from '../../interfaces-1132907d.js';
import 'react';

interface Parameters<FormFields> {
    steps: Steps<FormFields>;
}
type Client<FormFields> = [ReturnType<typeof generateConsumer<FormFields>>, ReturnType<typeof generateProvider<FormFields>>];
declare function createFormFlow<FormFields>({ steps }: Parameters<FormFields>): Client<FormFields>;

export { createFormFlow };
