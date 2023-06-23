export default function handler(req, res) {
  const teams = [
    {
      id: 1,
      membername: "Simon Green",
      memberrole: "Director of Governance & Business Assurance",
      aboutmember: [
        "Simon Joined ADDVantage over 5 years ago working across all areas of the business in his governance capacity, well-regarded in the security industry, previously having worked for companies such as Lloyds Register and Midland Hart, bringing a wealth of experience.",
        "As security challenges evolve, so do the best practices to meet them and with Simon at the helm of governance for ADDVantage Technologies, his recommendations to help ADDVantage improve our security posture to date have been concrete advice, utilising his experience of working with and guiding companies through attainment of IT and Information Security standards such as, ISO27001 & Cyber Essentials Plus along with COBIT 5, and his experience of implementing, solutions across the CIS 20 Critical Security Controls, in both private and NHS supplier environments, Developing and maintaining security policies, processes, procedures and standards, ultimately implementing and continually developing our cyber governance and security strategies.",
      ],
      meamberimg: "Simon_Green",
    },
    {
      id: 2,
      membername: "Karolina Klamann",
      memberrole: "Group HR Manager",
      aboutmember: [
        "Karolina joined AppLocum in January 2021 as our HR Manager before moving into a role of Group HR Manager for ADDVantage Technologies in December 2021. Prior to this Karolina worked in various sectors, including Retail, Further Education and Healthcare in HR Generalist roles. Karolina has a Masters in Human Resource Management and is CIPD qualified.",
        "She joined ADDVantage Technologies to work in partnership with the lead team to promote our values and mission. She is passionate about creating an inclusive working environment that enables everyone to feel valued.",
        "As well as employee relations and delivery of operational HR service, Karolina is responsible for developing people strategy and organisational culture. Working closely with management team her aim is to ensure consistency in approach to people management within the Group. Karolina is committed to making ADDVantage Technologies a great place to work. Focus, passion and doing the right thing is at the heart of everything she does.",
      ],
      meamberimg: "Karolina_Klamann",
    },
    {
      id: 3,
      membername: "Dr Liz Mear",
      memberrole: [
        "Non-Executive Director",
        "DBA, MSc, FCIPD, Senior Consultant, Coach and Business Advisor",
      ],
      aboutmember: [
        "Liz has extensive experience of leading organisations and has worked at a local regional and national level in health, local government and universities.",
        "Her work focuses on collaboration, innovation, and supporting businesses to develop and deploy their products into the health and care sector.",
        "Prior to going into consultancy Liz had a 36-year career across health and local government. She was an NHS Foundation Trust Chief Executive, Chief Executive of an NHS Academic Health Science Network, Managing Director of a health, local government, university and voluntary sector partnership.",
        "Liz is a Non- Executive Director for Health Education England, Chair for the national Healthcare Small Business Research Initiative and a Well North Associate.",
      ],
      meamberimg: "Dr_Liz_Mear",
    },
  ]
  res.status(200).json(teams);
}
