"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Regions {
  id: number;
  name: string;
  nig_states: string[];
}

interface States {
  id: string;
  state_name: string;
  region_id: number;
}

const AdminForm = () => {
  const regions_url_api = process.env.NEXT_PUBLIC_REGIONS_API || "";
  const states_url_api = process.env.NEXT_PUBLIC_STATES_API || "";

  const [regions, setRegions] = useState<Regions[]>([]);
  const [states, setStates] = useState<States[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [filteredStates, setFilteredStates] = useState<States[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch regions and states data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch regions
        const regionResponse = await axios.get(regions_url_api);
        console.log("Regions fetched:", regionResponse.data.data);
        setRegions(regionResponse.data.data);

        // Fetch states
        const stateResponse = await axios.get(states_url_api);
        console.log("States fetched:", stateResponse.data.data);
        setStates(stateResponse.data.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, [regions_url_api, states_url_api]);

  useEffect(() => {
    if (selectedRegion) {
      const filtered = states.filter(
        (state) => state.region_id === Number(selectedRegion)
      );
      console.log("Filtered states:", filtered);
      setFilteredStates(filtered);
    } else {
      setFilteredStates([]);
    }
  }, [selectedRegion, states]);

  // Handle region change
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
    setSelectedState(""); // Reset state dropdown when a new region is selected
  };

  // Handle state change
  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  // Show loading or error messages
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="admin-form-container">
      <div>Create New Entity</div>
      <form>
        {/* Region Dropdown */}
        <div className="form-group">
          <label htmlFor="region">Region</label>
          <select
            id="region"
            name="region"
            value={selectedRegion}
            onChange={handleRegionChange}
            className="form-control"
          >
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region.id} value={region.id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            id="state"
            name="state"
            value={selectedState}
            onChange={handleStateChange}
            className="form-control"
            disabled={!selectedRegion} // Disable if no region is selected
          >
            <option value="">Select State</option>
            {filteredStates.map((state) => (
              <option key={state.id} value={state.id}>
                {state.state_name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
