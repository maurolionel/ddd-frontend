import { Content } from '../models/Content';

export interface ContentListResponseDTO {
  count: number;
  contents: Content[];
}
