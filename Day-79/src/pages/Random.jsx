import { useParams } from "react-router-dom";

const Random = () => {
  const parameter = useParams();

  return <div className=" text-4xl  flex  justify-center underline p-2 capitalize">{parameter.id}  Detail Page</div>;
};

export default Random;
