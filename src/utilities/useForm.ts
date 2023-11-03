import { useState } from "react";


export default function useForm() {
  const [value, setValue] = useState('')

  function handleChange(e: React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value)
  }
  const formProps = {
    value,
    handleChange
  }
  return formProps;
}