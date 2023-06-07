const BASE_URL = "https://api.noroff.dev/api/v1/online-shop";

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/${productId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
