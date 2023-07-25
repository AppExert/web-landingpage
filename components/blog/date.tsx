/* eslint-disable react/prop-types */
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const Date: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);
  let formattedDate = "";
  try {
    formattedDate = format(date, "LLL d, yyyy");
  } catch (error) {
    formattedDate = "N.A";
  }
  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default Date;
