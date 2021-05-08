import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Plushy } from './components/Plushy';

/* const content = `<h1>Plyšáci</h1>
<div className="plushies"></div>`;
 */
const plushy1 = {
  name: 'Silvestr',
  image:
    'https://kodim.cz/czechitas/daweb/react/uvod-do-reactu/excs/plysaci/assets/elephant.jpg',
  text:
    'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.',
};
const plushy2 = {
  name: 'Ctirad',
  image:
    'https://kodim.cz/czechitas/daweb/react/uvod-do-reactu/excs/plysaci/assets/mouse.jpg',
  text:
    'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.',
};

const App = (
  <>
    <h1>Plyšáci</h1>

    <div className="plushies">
      <Plushy plushy={plushy1} />
      <Plushy plushy={plushy2} />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
