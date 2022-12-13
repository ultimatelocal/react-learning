import "./app.styles.scss";
import CategoryItem from "./components/category/CategoryItem";
const App = () => {
  const categories = [
    {
      id: "1",
      title: "Hats",
    },
    {
      id: "2",
      title: "Jackets",
    },
    {
      id: "3",
      title: "Sneakers",
    },
    {
      id: "4",
      title: "Womens",
    },
    {
      id: "5",
      title: "Mens",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default App;
