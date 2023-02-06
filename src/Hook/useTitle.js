import { useEffect } from "react";

const UseTitle = title => {
  useEffect(() => {
    document.title = `${title}-Puran car`;
  }, [title]);
};
export default UseTitle;
