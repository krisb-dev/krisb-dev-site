import { format } from "date-fns";
const formatDate = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return format(date, "do MMMM, yyyy");
  console.log(typeof date, date);
};

export { formatDate };
