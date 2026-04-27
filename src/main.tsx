import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ProductMarqueeCPreview } from './components/ProductMarqueeCPreview';
import './index.css';

const isMarqueePreview = window.location.pathname === '/preview/product-marquee-c';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isMarqueePreview ? <ProductMarqueeCPreview fullHeight /> : <App />}
  </StrictMode>,
);
