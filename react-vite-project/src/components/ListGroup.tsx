import { MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  handleClick: (event: MouseEvent, index: number) => void;
  selectedIndex: number;
}

function ListGroup({
  items,
  heading,
  handleClick,
  selectedIndex,
}: ListGroupProps) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length == 0 && <p>No items found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={(event) => handleClick(event, index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
