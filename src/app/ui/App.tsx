import useObserver from 'pojo-observer';
import * as React from 'react';
import { ContentList, contentListService } from '../modules/content/';
import './styles.css';

export function App() {
  useObserver(contentListService);
  return (
    <div className="App">
      <ContentList />
      <p>total results: {contentListService.totalCount}</p>
    </div>
  );
}
