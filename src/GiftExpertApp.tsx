import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (category: string) => {
    if (
      categories.find(
        (cat) => cat.toLocaleLowerCase() === category.toLocaleLowerCase()
      )
    )
      return;
    setCategories((categories) => [category, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
