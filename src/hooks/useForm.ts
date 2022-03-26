import React, {useState} from "react";

const useForm = <T extends object>(initState: T) => {
  const [formValues, setFormValues] = useState<T>(initState);

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormValues({...formValues, [target.name]: target.value});

  const reset = () => setFormValues(initState);

  return {formValues, ...formValues, handleChange, reset};
};

export default useForm;
