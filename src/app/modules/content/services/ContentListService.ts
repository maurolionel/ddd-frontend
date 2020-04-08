import { contentRepository } from '../infra/repositories/APIContentRepository';
import { Content } from '../models/Content';
import { ContentRepository } from '../repositories/ContentRepository';

export class ContentListService {
  private _contents: Content[] = [];
  private _totalCount = 0;

  constructor(private contentRepo: ContentRepository) {}

  get contents(): Content[] {
    return this._contents;
  }

  get totalCount(): number {
    return this._totalCount;
  }


  async fetchContents(): Promise<void> {
    try {
      const response = await this.contentRepo.findAll();
      this._contents = [...this.contents, ...response.contents];
      this._totalCount = response.count;
    } catch (e) {
      console.log(e);
    }
  }
}

export const contentListService = new ContentListService(contentRepository);
