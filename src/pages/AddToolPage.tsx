import { useState } from "react";
import MainContent from "../components/AppLayout/MainContent";
import { Input, Label, MultiSelect, TextArea } from "../components/Form/Form";
import Form from "../components/Form";
import InputTags from "../components/InputTags";
import { CategoryModel } from "../models/CategoryModel";
import { createTool } from "../api/toolAPI";
import { getCategories } from "../api/categoryAPI";
import useFetchPene from "../hooks/useFetchPene";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Swal from 'sweetalert2'
import useDocumentTitle from "../hooks/useDocumentTitle";
import 'react-loading-skeleton/dist/skeleton.css'

export default function AddToolPage() {
  useDocumentTitle('Add Tool');
  const [isCreating, setIsCreating] = useState(false);

  const [keyCustomField, setKeyCustomField] = useState<number>(0);
  const { data, isLoading } = useFetchPene<CategoryModel[]>(() => getCategories(), []);
  const initialFormData: CreateToolFormData = { title: '', summary: '', description: '', url: '', categories: [], tags: '' };
  const [formData, setFormData] = useState<CreateToolFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  function cleanForm() {
    setFormData(initialFormData);
    setKeyCustomField((prev) => prev + 1);
  }

  const handleCategoriesChange = (value: string[]) => {
    const filter = data.filter((d) => value.includes(d.value));
    setFormData(prevData => ({
      ...prevData,
      ['categories']: filter,
    }));

  }

  const generateMultiSelectArray = () => {
    return data.map((d) => ({ value: d.value, label: d.displayName })) ?? [];
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsCreating(true);
    e.preventDefault();
    console.log(formData.categories);
    try {
      const response = await createTool(formData);
      Swal.fire({
        title: 'Success',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      cleanForm();
    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: `${err}`,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <MainContent title="Add Tool" hasBackground={true}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Label>Title:</Label>
          <Input id="title" name="title" value={formData.title} type={"text"} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <Label>Summary:</Label>
          <Input id="summary" name="summary" value={formData.summary} type={"text"} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <Label>URL:</Label>
          <Input id="url" name="url" value={formData.url} type={"text"} onChange={handleChange} />
        </Form.Field>
        <Form.Field inline={false}>
          <Label>Description:</Label>
          <TextArea id="description" name="description" rows={10} value={formData.description} onChange={handleChange}></TextArea>
        </Form.Field>
        <Form.Field inline={false}>
          <Label>Categories:</Label>
          {
            isLoading ?
              <Loader />
              :
              <MultiSelect key={`${keyCustomField}-categories`} options={generateMultiSelectArray()} onSelectionChange={handleCategoriesChange} />
          }
        </Form.Field>
        <Form.Field inline={false}>
          <Label>Tags:</Label>
          <InputTags id="tags" name="tags" key={`${keyCustomField}-tags`} value={formData.tags} onChange={handleChange} />
        </Form.Field>
        <Button variant="success">
          {
            isCreating ? <Loader /> : <span>Guardar</span>
          }
        </Button>
      </Form>
    </MainContent>
  );
}