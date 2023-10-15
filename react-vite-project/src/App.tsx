import { MouseEvent, useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isAlert, setIsAlert] = useState(false);
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleClick = (event: MouseEvent, index: number) => {
    setSelectedIndex(index);
    console.log(event);
  };
  const buttonOnClick = () => {
    console.log("clicked");
    setIsAlert(true);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        handleClick={handleClick}
        selectedIndex={selectedIndex}
      />
      {isAlert && (
        <Alert onClose={() => setIsAlert(false)}>
          <h1>Hello world!</h1>
        </Alert>
      )}

      <Button onClick={buttonOnClick}>Click Me</Button>
    </div>
  );
}
export default App;
