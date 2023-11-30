import mainData from "./data/mainData";

function getBorderColor(id) {
  const colorMap = {
    1: "#44D3D2",
    2: "#EA5454",
    3: "#FCAE4A",
    4: "#549EF2",
  };

  return colorMap[id] || "#4D4F62";
}
function App() {
  return (
    <>
      <main className="bg-white">
        <div className="mb-0 p-7 flex flex-col text-gray-600 gap-5 text-center tracking-wide">
          <h1 className="font-mainFont text-2xl mt-10 font-extralight">
            Reliable, efficient delivery
            <span className="font-bold"> Powered by Technology</span>
          </h1>
          <h2 className="text-xl leading-7 text-gray-400 font-light ">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </h2>
        </div>
        <section className="p-5">
          {mainData.map((item) => (
            <div
              key={item.id}
              className="border-4 p-4 mb-8 flex flex-col items-start justify-between 
              border-white shadow-lg rounded-xl"
              style={{borderTopColor: getBorderColor(item?.id)}}
            >
              <div className="flex flex-col pb-10 ">
                <p className="font-bold text-xl pb-1">{item.name}</p>
                <p className="text-xl font-light text-gray-500 leading-7 tracking-wide">{item.content}</p>
              </div>
              <img src={item.photo} alt="icon" className="ml-auto mb-0" />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
