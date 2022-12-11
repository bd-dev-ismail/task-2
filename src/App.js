import AllItems from "./Conponents/AllItems/AllItems";
import Navbar from "./Conponents/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <AllItems className="w-full" />
      </div>
    </div>
  );
}

export default App;
