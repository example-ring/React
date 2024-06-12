import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hook/useDiary";

import Button from "../pages-component/Button";
import Header from "../pages-component/Header";
import { getFormattedDate } from "../util";

const Diary = () => {
    const { id } = useParams(); 
    const data = useDiary(id);
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    if (!data) {
        return <div>일기를 불러 오는 중...</div>;
    } else {
        const { date, emotionId, content } = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
        return (
           
            <div>
                 <Header 
                 title = {title}
                 leftChild={<Button text={"< 뒤로" }/>}
                 rightChild={<Button text={"수정하기"}></Button>}
                 ></Header>
                <div>{id}번 일기</div>
                <div>Diary 페이지</div>
            </div>
        );
    }
};
 export default Diary;