import { useState } from "react";
import API from "../services/api";

function JobForm({ fetchJobs }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/jobs",
        {
          company,
          role,
          status: "Applied",
          location: "Bangalore",
          notes: "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCompany("");
      setRole("");

      fetchJobs();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br /><br />

      <button type="submit">
        Add Job
      </button>
    </form>
  );
}

export default JobForm;