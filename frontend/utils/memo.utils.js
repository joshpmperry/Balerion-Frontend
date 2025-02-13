export const getMemoCard = async () => {
  try {
    const response = await fetch("/api/memo", { method: "GET", });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error connecting to backend:", error);
    return []
  }
};