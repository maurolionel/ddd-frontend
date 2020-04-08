import { APIService } from '../../../../shared/services/APIService';
import { ContentListResponseDTO } from '../../dtos/ContentListResponseDTO';
import { ContentMapper } from '../../mappers/ContentMapper';
import { ContentRepository } from '../../repositories/ContentRepository';

class APIContentRepository implements ContentRepository {
  constructor(private api: APIService) {}

  async findAll(): Promise<ContentListResponseDTO> {
    const { contents, count } = await this.api.getJSON<ContentListResponseDTO>(
      'content/list',
    );
    return {
      contents: contents.map(ContentMapper.toDomain),
      count,
    };
  }
}

export const contentRepository = new APIContentRepository(new APIService());
