import React from 'react';
import { Category } from '../../../__dummy-data__/categories';
import CategoryItem from '../category-item/CategoryItem';
import './category-list.styles.scss';

const CategoryList = (props: any) => {
  const { categories } = props;
  return (
    <div className="categories">
      {categories.map((category: Category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryList;
