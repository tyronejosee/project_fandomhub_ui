import useSWR from "swr";

const useApi = (url) => {
  const { data, error } = useSWR(url, async (url) => {
    const response = await fetch(url);
    return response.json();
  });

  return { data, error };
};

export default useApi;
