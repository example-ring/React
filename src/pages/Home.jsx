import { useState, useContext, useEffect } from "react"; 
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";
import Button from "../pages-component/Button";
import Header from "../pages-component/Header";
import DiaryList from "../pages-component/DiaryList";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [ filteredData, setFilteredData ] = useState([]);
  const headerTitle = `${pivotDate.getFullYear()}년

  ${pivotDate.getMonth() + 1}월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));

  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1));
  };

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  return (
    <div>
      <Header
      title={headerTitle}
      leftChild={<Button text={"<"} onClick={onDecreaseMonth}></Button>}
      rightChild={<Button text={">"} onClick={onIncreaseMonth}></Button>}
      />
      <DiaryList data={filteredData}></DiaryList>
    </div>
  );
};

export default Home;