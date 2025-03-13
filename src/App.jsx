import { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import CompanyTitle from "./components/CompanyTitle";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="p-4">
      <Toaster />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-1">
            <CompanyTitle />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <Cards />
          </div>
        </div>
        <div className="block lg:hidden">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
