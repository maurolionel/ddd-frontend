import { ContentTypes } from './ContentTypes';

export interface Content {
  id: number;
  type: ContentTypes;
  title: string;
  localizations: { [index: string]: any };
}
