import { Outlet } from "react-router-dom";
import CategoryList from "./components/category/category-list/CategoryList";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import { mockCategories } from "./__dummy-data__/categories";

const App = () => {
 return <>
   <NavigationBar/>
   <Outlet/>
 </>
};

export default App;
