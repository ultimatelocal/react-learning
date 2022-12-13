import "./category-item.styles.scss";

const CategoryItem = (props: any) => {
  const { title } = props.category;

  return (
    <div className="category-container">
      <div className="category-description-container">
        <h2>{title}</h2>
        <h4> Shop Now</h4>
      </div>
    </div>
  );
};

export default CategoryItem;
