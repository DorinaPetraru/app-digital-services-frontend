// Éstas funciones llevan a cabo la comunicación con la base de datos
export const getAllServices = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/services`);
  const { data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getOneService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/services/${id}`
  );

  const { data } = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};
