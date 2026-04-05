import { createRoot } from 'react-dom/client'

function Fruit() {
  const x = 12;
  return (
    <h1>{(x) < 10 ? "Less than 10": "greater"}</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Fruit />
);