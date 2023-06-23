export default function handler(req, res) {
  const homebanner = [
    {
      id: 1,
      img: "alldaydr-logo",
      alt: "alldaydr",
      title: "alldayDr",
      text: "alldayDr provides convenient, high quality healthcare to our private sector clients.",
    },
    {
      id: 2,
      img: "healthya-logo",
      alt: "healthya",
      title: "healthya",
      text: "healthya provides seamless and flexible solutions to enhance NHS technology needs",
    },
    {
      id: 3,
      img: "applocum-logo",
      alt: "applocum",
      title: "AppLocum",
      text: "AppLocum empowers healthcare professionals to simplify the locum staffing process.",
    },
    {
      id: 4,
      img: "pharmsmart",
      alt: "pharmsmart",
      title: "PharmSmart",
      text: "Pharmsmart is an all-in-one pharmacy app built by pharmacists for pharmacists to save time, money and make life a lot easier.",
    },
    {
      id: 5,
      img: "addvantage",
      alt: "addvantage",
      title: "ADDVantage Minds",
      text: "The ADDVantage minds have developed and perfected a robust and adaptable EMDR platform based on experience from clients such as The NHS and The Priory who have been using our EMDR solution.",
    },
    {
      id: 6,
      img: "healthya_solution_logo",
      alt: "healthya-solution",
      title: "HEALTHYA Stations",
      text: "Helping communities and corporates improve their HEALTH. By providing insightsand prevention one person at a time.",
    },
  ];
  res.status(200).json(homebanner);
}
