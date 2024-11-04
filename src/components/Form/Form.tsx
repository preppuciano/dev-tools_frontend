import React, { useState } from 'react';
import './Form.scss';

function Form({ onSubmit, children }: { onSubmit:any, children: React.ReactNode }) {
  return (
    <form className='form' onSubmit={onSubmit}>
      {children}
    </form>
  );
}

function FormField({ children, inline = true }: { children: React.ReactNode, inline?: boolean }) {
  return (
    <div className={`field ${!inline && 'field--block'}`}>
      {children}
    </div>
  );
}

export default Object.assign(Form, { Field: FormField });

interface InputProps {
  id: string;
  type: string;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input(props: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
  }

  return (
    <div className='input-container'>
      <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={handleChange} />
    </div>
  );
}

interface TextAreaProps {
  name: string;
  id: string;
  rows: number;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function TextArea(props: TextAreaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
  }

  return (
    <div className='text-area-container'>
      <textarea name={props.name} id={props.id} rows={props.rows} value={props.value} onChange={handleChange}></textarea>
    </div>
  );
}

interface LabelProps {
  children: React.ReactNode;
}

export function Label(props: LabelProps) {
  return (
    <div className='label-container'>
      <label>{props.children}</label>
    </div>
  );
}

interface MultiSelectProps {
  options: { value: string; label: string; }[];
  onSelectionChange: (selected: string[]) => void;
}

export function MultiSelect(props: MultiSelectProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (id: string) => {
    let aux = [];
    if (isSelected(id)) {
      aux = selectedOptions.filter((opt) => opt != id);
      setSelectedOptions(aux);
    } else {
      aux = [...selectedOptions, id];
      setSelectedOptions(aux);
    }
    props.onSelectionChange(aux);
  }

  const isSelected = (id: string) => {
    return selectedOptions.includes(id);
  }

  return (
    <div className="multi-select-container">
      <ul className='select'>
        {props.options.map(option => (
          <li key={option.value} className={isSelected(option.value) ? 'option option--active' : 'option'} onClick={() => handleClick(option.value)}>{option.label}</li>
        ))}
      </ul>
    </div>
  );
}