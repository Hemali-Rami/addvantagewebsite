import { useEffect, useState } from "react";

function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/api/teammembers")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => {
        console.error("Error fetching team members:", error);
      });
  }, []);

  return (
    <section id="meet_team">
      <div className="container">
        {teamMembers.map((member, index) => {
          const parentClass = member.id % 2 === 0 ? "column_reverse" : "";
          const dataAos = index % 2 === 0 ? "fade-left" : "fade-right";
          const dataAosDelay = "400";
          return (
            <div
              className={`row align-items-center mb-50 ${parentClass}`}
              key={member.id}
            >
              <div
                className="col-md-5"
                data-aos={dataAos}
                data-aos-delay={dataAosDelay}
              >
                <div className="meet_img">
                  <img
                    src={`/images/${member.meamberimg}.jpg`}
                    alt={member.membername}
                  />
                </div>
              </div>
              <div
                className="col-md-7"
                data-aos={dataAos}
                data-aos-delay={dataAosDelay}
              >
                <div className="meet_content">
                  <h3 className="meet_name">{member.membername}</h3>
                  <div className="teamrolepart">
                    {Array.isArray(member.memberrole) ? (
                      <div className="rolename">
                        {member.memberrole.map((role, index) => (
                          <div className="teamrole" key={index}>
                            <span className="meet_post">{role}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="rolename">
                        <div className="teamrole">
                          <span className="meet_post">{member.memberrole}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <ul>
                    {member.aboutmember.map((about) => (
                      <li key={about}>
                        <p>{about}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TeamMembers;
