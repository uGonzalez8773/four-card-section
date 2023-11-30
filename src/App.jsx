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
      <main className="bg-white md:p-10 md:flex md:flex-col md:items-center md:justify-center">
        <div className="p-7 flex flex-col text-gray-600 gap-5 text-center tracking-wide md:w-1/3 md:items-center">
          <h1 className="font-mainFont text-2xl mt-10 font-extralight md:mt-0">
            Reliable, efficient delivery
            <span className="font-bold"> Powered by Technology</span>
          </h1>
          <h2 className="text-xl leading-7 text-gray-400 font-light md:w-[550px]">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </h2>
        </div>
        <section className="p-5 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-8">
          {mainData.map((item) => (
            <div
              key={item.id}
              className={`border-4 p-4 mb-8 flex flex-col items-start justify-between border-white shadow-lg rounded-xl
                          ${item.id === 1 ? "md:col-start-1 md:col-span-2 md:row-start-2" : ""}
                          ${item.id === 2 ? "md:col-start-2 md:col-span-2" : ""}
                          ${item.id === 3 ? "md:col-start-3 md:col-span-2 md:row-start-2" : ""}
                          ${item.id === 4 ? "md:col-start-2 md:col-span-2 md:row-start-3" : ""}`}
              style={{ borderTopColor: getBorderColor(item?.id) }}
            >
              <div className="flex flex-col pb-10 ">
                <p className="font-bold text-xl pb-1">{item.name}</p>
                <p className="text-xl font-light text-gray-500 leading-7 tracking-wide">
                  {item.content}
                </p>
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
