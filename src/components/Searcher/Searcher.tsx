import './Searcher.scss';
import Search from '../../assets/icons/search.svg?react';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Searcher() {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  useEffect(() => {
    setValue(query || '');
  }, [query]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      event.preventDefault();
      if (value.trim()) { // Solo redirigir si hay texto
        navigate(`/search?q=${encodeURIComponent(value)}`);
      }
    }
  }

  return (
    <div className='searcher'>
      <Search />
      <input className='searcher-input' value={value} type="search" placeholder='Search' onChange={handleChange} onKeyDown={handleKeyDown} />
    </div>
  );
}