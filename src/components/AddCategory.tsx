import { useState } from "react";

interface AddCategoryProps {
  onNewCategory: (category: string) => void;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(target.value);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    if (newCategory.length <= 1) return;
    onNewCategory(newCategory);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search Gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
