"use client";
import { useState, useMemo } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { Search } from "lucide-react";

const filterOptions = {
  type: ["All", "Electrical", "UPS", "Fiber Optic", "Generator", "M&E"],
  client: ["All", "Telekom Malaysia", "DBKL", "Celcom", "Universiti", "Hospital", "JKR"],
};

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedClient, setSelectedClient] = useState("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesSearch =
        p.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.po.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === "All" || p.type === selectedType;
      
      let matchesClient = true;
      if (selectedClient !== "All") {
        matchesClient = p.client.toLowerCase().includes(selectedClient.toLowerCase());
      }

      return matchesSearch && matchesType && matchesClient;
    });
  }, [searchTerm, selectedType, selectedClient]);

  return (
    <div className="pt-24 pb-20 bg-light min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-dark mb-4 text-center">Project Portfolio</h1>
        <div className="w-20 h-1 bg-secondary mx-auto mb-12"></div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-10 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {filterOptions.type.map((t) => (
              <option key={t} value={t}>{t === "All" ? "All Service Types" : t}</option>
            ))}
          </select>
          <select
            className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            {filterOptions.client.map((c) => (
              <option key={c} value={c}>{c === "All" ? "All Clients" : c}</option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No projects found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}