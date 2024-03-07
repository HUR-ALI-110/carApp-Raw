export const generateCarImageUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;
  url.searchParams.append("customer", "hrjavascript-mastery" || "");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export async function fetchCars(searchParams) {
  const { manufacturer, year, fuel, limit, model } = searchParams;

  // Set the required headers for the API request
  const headers = {
    "X-RapidAPI-Key":
      "a68aa55f2cmsh9bc5df55b9c2fc3p1e7553jsn387e47313763" || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
