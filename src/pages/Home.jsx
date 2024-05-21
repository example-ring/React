import Editor from "../pages-component/Editor";


const Home = () => {
  return (
    <div>
        <Editor onSubmit={() => {
          alert("작성 완료 버튼 클릭");
        }} />
    </div>
  );
};

export default Home;