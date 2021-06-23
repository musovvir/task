import { categories } from "./database";
import Category from "./Category";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="categories">
          {categories.map((item, i) => {
            return <Category category={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
