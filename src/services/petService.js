const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    console.log(res)
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  index,
};
