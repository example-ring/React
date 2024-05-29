import { useState } from "react"; 
import Button from "../pages-component/Button";
import Header from "../pages-component/Header";

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년
  ${pivotDate.getMonth() + 1}월`;
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));

  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
  };
  return (
    <div>
      <Header
      title={headerTitle}
      leftChild={<Button text={"<"} onClick={onDecreaseMonth}></Button>}
      rightChild={<Button text={">"} onClick={onIncreaseMonth}></Button>}
      />
    </div>
  );
};

export default Home;