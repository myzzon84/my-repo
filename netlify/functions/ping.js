export default async () => {
  // Робимо HTTP-запит до твого API
  const res = await fetch("https://team-online-storage.onrender.com/api/v1/livez/?netlify=1");
  const data = await res.text();

  console.log("Ping result:", data);

  return {
    statusCode: 200,
    body: "Ping executed",
  };
};

// CRON-вираз: кожні 14 хв з 8:00 до 23:00 (UTC)
// Для Києва (UTC+3) треба вказати 5-20 замість 8-23
export const config = {
  schedule: "*/10 5-19 * * *",
};
