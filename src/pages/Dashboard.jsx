import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import AnalyticsCard from "../components/AnalyticsCard";
import CreateLinkForm from "../components/CreateLinkForm";
import GeneratedLinkCard from "../components/GeneratedLinkCard";
import LinkTable from "../components/LinkTable";
import api from "../services/api";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState({
    totalLinks: 0,
    totalClicks: 0,
    averageClicks: 0,
    mostClickedLink: "-"
  });
  const [links, setLinks] = useState([]);
  const [generatedLink, setGeneratedLink] = useState(null);

  useEffect(() => {
    loadAnalytics();
    loadLinks();
  }, []);

  async function loadAnalytics() {
    try {
      const response = await api.get("/api/analytics");
      setAnalytics(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadLinks() {
    try {
      const response = await api.get("/api/links");
      setLinks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function createLink(originalUrl) {
    try {
      const response = await api.post("/api/links", { originalUrl });
      setGeneratedLink(response.data);
      await loadAnalytics();
      await loadLinks();
      return true;
    } catch (error) {
      console.log(error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Unable to generate short link.");
      }
      return false;
    }
  }

  async function deleteLink(id) {
    try {
      await api.delete(`/api/links/${id}`);
      if (generatedLink && generatedLink.id === id) {
        setGeneratedLink(null);
      }
      loadAnalytics();
      loadLinks();
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div className="dashboard">
      <Navbar onLogout={logout} />
      <div className="dashboard-content">
        <h1 className="dashboard-title"> Welcome Back 👋 </h1>
        <p className="dashboard-subtitle">
          Manage and monitor all your shortened URLs.
        </p>

        <h2 className="section-title"> Analytics </h2>
        <div className="cards-container">
          <AnalyticsCard
            icon="🔗"
            title="Total Links"
            value={analytics.totalLinks}
            description="Total shortened links"
          />
          <AnalyticsCard
            icon="👆"
            title="Total Clicks"
            value={analytics.totalClicks}
            description="Total redirects"
          />
          <AnalyticsCard
            icon="📈"
            title="Average Clicks"
            value={analytics.averageClicks.toFixed(2)}
            description="Average per link"
          />
          <AnalyticsCard
            icon="🏆"
            title="Top Link"
            value={
              analytics.mostClickedLink === "-"
                ? "-"
                : analytics.mostClickedLink.split("/").pop()
            }
            description="Highest performing link"
          />
        </div>

        <h2 className="section-title"> Create New Link </h2>
        <CreateLinkForm onCreate={createLink} />
        <GeneratedLinkCard link={generatedLink} />

        <h2 className="section-title"> My Links </h2>
        <LinkTable links={links} onDelete={deleteLink} />
      </div>
    </div>
  );
}

export default Dashboard;
