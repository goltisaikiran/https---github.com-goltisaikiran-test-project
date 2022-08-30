import axios from "axios";
export const FetchData = (tab) => {
  
  axios
    .get("http://localhost:4000/data")
    .then((r) => {
      tab(r.data);
    })
    .catch((e) => {
      console.log(e.data);
    });
};
