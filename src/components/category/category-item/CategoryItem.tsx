import './category-item.styles.scss';

const CategoryItem = (props: any) => {
  const { title, imageUrl } = props.category;
  return (
    <div className="category">
      <div
        className="category__background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="category__body-container">
          <h2>{title}</h2>
          <h4> Shop Now</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
