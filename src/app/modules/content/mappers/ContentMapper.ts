import { Content } from '../models/Content';

export const ContentMapper = {
  toDomain: (raw: any): Content => ({
    id: raw.id,
    localizations: raw.localizations,
    title: raw.title,
    type: raw.type,
  }),
};
