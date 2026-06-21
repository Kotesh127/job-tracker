import { useEffect, useState } from "react";
import API from "../services/api";
import JobForm from "../components/JobForm";
function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");
  const applied = jobs.filter(
  (job) => job.status === "Applied"
).length;

const interview = jobs.filter(
  (job) => job.status === "Interview"
).length;

const offer = jobs.filter(
  (job) => job.status === "Offer"
).length;

const rejected = jobs.filter(
  (job) => job.status === "Rejected"
).length;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);

      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteJob = async (id) => {
  try {
    const token = localStorage.getItem("token");

    await API.delete(`/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    fetchJobs();

  } catch (error) {
    console.log(error);
  }
};
const updateStatus = async (id, status) => {
  try {
    const token = localStorage.getItem("token");

    await API.put(
      `/jobs/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchJobs();

  } catch (error) {
    console.log(error);
  }
};
const getStatusColor = (status) => {
  switch (status) {
    case "Applied":
      return "orange";
    case "Interview":
      return "cyan";
    case "Offer":
      return "green";
    case "Rejected":
      return "red";
    default:
      return "white";
  }
};
const filteredJobs =
  filter === "All"
    ? jobs
    : jobs.filter(
        (job) => job.status === filter
      );


  return (
    <div style={{ padding: "40px" }}>
      <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  }}
>
  <h1>Job Tracker</h1>

  <button
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }}
  >
   Logout
  </button>
</div>
<div
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
  }}
>
  <div>
    <h3>Applied</h3>
    <h2>{applied}</h2>
  </div>

  <div>
    <h3>Interview</h3>
    <h2>{interview}</h2>
  </div>

  <div>
    <h3>Offer</h3>
    <h2>{offer}</h2>
  </div>

  <div>
    <h3>Rejected</h3>
    <h2>{rejected}</h2>
  </div>
</div>

   <select
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>
  <option value="All">All Jobs</option>
  <option value="Applied">Applied</option>
  <option value="Interview">Interview</option>
  <option value="Offer">Offer</option>
  <option value="Rejected">Rejected</option>
</select>

      <JobForm fetchJobs={fetchJobs} />

      {filteredJobs.map((job) => (
        
        <div
  key={job._id}
  style={{
    border: "1px solid #444",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#1e1e1e",
  }}
>
        
          <h3>{job.company}</h3>
          <p>{job.role}</p>

        <select
  value={job.status}
  style={{
    color: getStatusColor(job.status),
  }}
  onChange={(e) =>
    updateStatus(job._id, e.target.value)
  }
>
    

  <option value="Applied">Applied</option>
  <option value="Interview">Interview</option>
  <option value="Offer">Offer</option>
  <option value="Rejected">Rejected</option>
</select>


          <button
  onClick={() => deleteJob(job._id)}
>
  Delete
</button>

        
        </div>
      ))}
    </div>
  );
}

export default Dashboard;