import { useNavigate } from "react-router-dom";
import Button from "../pages-component/Button";
import Header from "../pages-component/Header";
import Editor from "../pages-component/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
    const { onCreate } = useContext(DiaryDispatchContext);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const onSubmit = (data) => {
        const { date, content, emotionId } = data;
        onCreate(date, content, emotionId);
        navigate("/", {replace: true});
    };

    return (
        <div>
            <Header  
            title={"새 일기 쓰기"}
            leftChild={
                <Button 
                text={"< 뒤로 가기"}
                onClick={goBack}>

                </Button>
            }
            >
                <Editor onSubmit={onSubmit}></Editor>
            </Header>
        </div>
    );
};
 export default New;