import { useState } from "react";
import MainContent from "../components/AppLayout/MainContent";
import { Input, Label } from "../components/Form/Form";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Button from "../components/Button";
import Swal from 'sweetalert2'
import useDocumentTitle from "../hooks/useDocumentTitle";
import 'react-loading-skeleton/dist/skeleton.css'
import { createCategory } from "../api/categoryAPI";

export default function AddCategoryPage() {
  useDocumentTitle('Add Category');
  const [isCreating, setIsCreating] = useState(false);
  const [keyCustomField, setKeyCustomField] = useState<number>(0);
  const initialFormData: CreateCategoryFormData = { displayName: '', file: null };
  const [formData, setFormData] = useState<CreateCategoryFormData>(initialFormData);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsCreating(true);
    e.preventDefault();
    try {
      const response = await createCategory(formData);
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

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file: file });
    } else {
      console.log('🐛');
    }
  }

  return (
    <MainContent title="Add Category" hasBackground={true}>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Label>DisplayName:</Label>
          <Input id="displayName" name="displayName" value={formData.displayName} type={"text"} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <Label>Icon:</Label>
          <Input key={keyCustomField} id="file" name="file" type="file" onChange={handleFileChange} />
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