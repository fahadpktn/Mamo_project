import Header from "./navbar";

const ElectronicsPage = () => {
  return (
    <div>
      <Header />
      <div style={{ height: 50 }}></div>
      <h1>Television</h1>
      <div  style={{
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}>
        <div>
          <img src="asset/CS LITERACY-DAY.png" height={300} width={300} />
          <h3>LG 14</h3>
        </div>
        <div>
          <img src="asset/CS LITERACY-DAY.png" height={300} width={300} />
          <h3>LG 14</h3>
        </div>
        <div>
          <img src="asset/CS LITERACY-DAY.png" height={300} width={300} />
          <h3>LG 14</h3>
        </div>
        <div>
          <img src="asset/CS LITERACY-DAY.png" height={300} width={300} />
          <h3>LG 14</h3>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;
