// tripPlanner.js
// Smart Tourism Planner Logic (Demo Version)

import citiesData from "../data/cities.json";

/**
 * Generate itinerary based on city and number of days
 * @param {string} cityName
 * @param {number} days
 * @returns {object} itinerary
 */
export function generateTripPlan(cityName, days) {
  // Find selected city
  const city = citiesData.cities.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  if (!city) {
    return {
      success: false,
      message: "City not found",
    };
  }

  const attractions = city.attractions;
  const itinerary = [];

  let attractionIndex = 0;

  // Distribute attractions day-wise
  for (let day = 1; day <= days; day++) {
    const dayPlan = {
      day: day,
      places: [],
    };

    // Add max 2 places per day (demo rule)
    for (let i = 0; i < 2; i++) {
      if (attractionIndex < attractions.length) {
        dayPlan.places.push(attractions[attractionIndex]);
        attractionIndex++;
      }
    }

    itinerary.push(dayPlan);
  }

  return {
    success: true,
    city: city.name,
    days: days,
    itinerary: itinerary,
  };
}
