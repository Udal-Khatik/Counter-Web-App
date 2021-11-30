import axios from "axios";
export const getInitialVal = async () => {
  const { data } = await axios
    .get(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
    )
    .then((res) => res);
  return data;
};

export const updateCounter = async (count) => {
  const result = await axios
    .put("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json", {
      Udal_Kumar_Khatik: count,
    })
    .then((res) => res);
};
