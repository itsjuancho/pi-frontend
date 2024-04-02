export const fetchAllProducts = async () => {
  const backUrl = process.env.NEXT_PUBLIC_BACK_URL;
  try {
    const response = await fetch(`${backUrl}/product/get-all`, {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
