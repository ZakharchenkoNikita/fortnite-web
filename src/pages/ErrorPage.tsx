import { useRouteError } from "react-router-dom";
import CustomError from "../components/error/Error";

const Error = () => {
  const error: any = useRouteError();

  let title = "An error occurred!";
  let message = "Sorry, an unexpected error has occurred.";

  if (error.status === 200) {
    title = "Not found!";
    message = error.data.message;
  }

  return <CustomError title={title} message={message} />;
};

export default Error;
