const TechIcon = ({ img, techName }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 border-air-blue px-5 py-2 rounded-lg h-full w-full transition hover:scale-105">
        <img src={img} className="w-6 xl:w-10"></img>
        <span className="text-air-blue">{techName}</span>
      </div>
    </>
  );
};
export default TechIcon;
