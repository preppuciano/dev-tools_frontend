import { useState } from 'react';
import { TextArea } from '../Form/Form';
import './InputTags.scss';

interface Props {
  id: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export default function InputTags(props: Props) {
  const [tags, setTags] = useState<string[]>([]);

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTags(e.target.value.toLocaleLowerCase().trim().split(','));
    if (props.onChange) {
      props.onChange(e);
    }
  }

  function generateOptions() {
    return tags.map((tag) => ({ value: tag, label: tag }));
  }

  return (
    <div className='input-tags'>
      <TextArea id={props.id} name={props.name} value={props.value} rows={3} onChange={handleTextAreaChange}></TextArea>
      <ul className='input-tags__list'>
        {
          generateOptions().map((e) => <li className='input-tags__item' key={e.value}>{e.label}</li>)
        }
      </ul>
    </div>
  );
}