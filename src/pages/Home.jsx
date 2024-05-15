import Button from "../pages-component/Button";
import Header from "../pages-component/Header";

const Home = () => {
    return (
        <div>
            <Header title={"Home"}
            leftChild={
                <Button
                type="positive"
                text={"긍정 버튼"}
                onClick={() => {
                    alert("positive button");
                }}></Button>
            }
            
            rightChild={
            <Button
            type="negative"
            text={"부정 버튼"}
                onClick={() => {
                    alert("negative button");
                }}
            ></Button>}
            >

            </Header>


        </div>
    );
};

export default Home;