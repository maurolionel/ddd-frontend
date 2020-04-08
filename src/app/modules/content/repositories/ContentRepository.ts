import { ContentListResponseDTO } from '../dtos/ContentListResponseDTO';

export interface ContentRepository {
  findAll(): Promise<ContentListResponseDTO>;
}
