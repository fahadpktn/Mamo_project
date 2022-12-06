import ElectronicsPage from "./electroncs";

const lst = [
  { imgsrc: "asset/CS LITERACY-DAY.png", title: "Electronics Applicances" },
  { imgsrc: "asset/CS LITERACY-DAY.png", title: "Vegetables and Fruits" },
  { imgsrc: "asset/CS LITERACY-DAY.png", title: "Groceries" },
  { imgsrc: "asset/CS LITERACY-DAY.png", title: "Stationaries" },
];

const HomeBody = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ height: 100 }}></div>
      {lst.map((val, i) => (
        <div  style={{padding:20}}>
          <img src={val.imgsrc} width="300" height="300" />
          <div style={{ height: 20 }}></div>
          <h2>{val.title}</h2>
          <div style={{ height: 20 }}></div>
          <a href={<ElectronicsPage/>}>
          <input type={"button"} value="Go to Electronics"/>
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomeBody;
