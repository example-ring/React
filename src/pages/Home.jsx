import Button from "../pages-component/Button";

const Home = () => {
    return (
        <div>
            <Button>
            text={"기본 버튼"}
            onClick={() =>
            {alert("default button");
            }}
        </Button>
        
        </div>
    );
};

export default Home;