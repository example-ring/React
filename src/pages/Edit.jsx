import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hook/useDiary";
import Button from "../pages-component/Button"
import Header from "../pages-component/Header";

import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from "../pages-component/Editor";

const Edit = () => {
   const { id } = useParams();
   const data = useDiary(id);
   const navigate = useNavigate();
   
   const goBack = () => {
    navigate(-1);
   };
   const { onDelete } = useContext(DiaryDispatchContext);
   const onClick = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요")) {
        onDelete(id);
        navigate("/", {replace: true});
    }
   };

   const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
        const { date, content, emotionId } = data;
        ontimeupdate(id, date, content, emotionId);
        navigate("/", {replace:true});
    }
   };

   if (!data) {
    return <div>일기를 불러오는 중...</div>
   } else {
    return (
    <div>
    <Header
        title={"일기 수정하기"}>
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack}></Button>}
        rightChild={<Button type={"negative"} text={"삭제하기"} onClick={onClickDelete}></Button>}
    </Header>

    <Editor initData={data} onSubmit={onSubmit}></Editor>
   
   </div>
    );
};

};
export default Edit;