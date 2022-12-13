
import './category-item.styles.scss';

const CategoryItem = (props: any) => {
  const { title, imageUrl } = props.category;

  return (
    <div className="category-container">
      <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
      <div className="category-body-container">
        <h2>{title}</h2>
        <h4> Shop Now</h4>
      </div>
      </div>
    </div>
  );
};

export default CategoryItem;
