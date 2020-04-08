import useObserver from 'pojo-observer';
import * as React from 'react';
import { contentListService } from '../../services/ContentListService';

export const ContentList = () => {
  useObserver(contentListService);

  React.useEffect(() => {
    contentListService.fetchContents();
  }, []);

  return (
    <div>
      <h1>Contents:</h1>
      <ul>
        {contentListService.contents.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
};
