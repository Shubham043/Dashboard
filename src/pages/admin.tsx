import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navbar from './navbar';
import './admin.css';
// import { relative } from 'path';

function AdminDashboard(): JSX.Element {
  const [jobsPostedToday, setJobsPostedToday] = useState<number>(0);
  const [candidatesSelected, setCandidatesSelected] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Simulating API calls to fetch data
    fetchJobsPostedToday();
    fetchCandidatesSelected();
  }, []);

  useEffect(() => {
    createChart();
  }, [jobsPostedToday, candidatesSelected]);

  const fetchJobsPostedToday = (): void => {
    // API call to fetch the number of jobs posted today
    // Set the value using setJobsPostedToday
    const jobsPostedTodayData: number = 10; // Placeholder data
    setJobsPostedToday(jobsPostedTodayData);
  };

  const fetchCandidatesSelected = (): void => {
    // API call to fetch the number of candidates selected
    // Set the value using setCandidatesSelected
    const candidatesSelectedData: number = 5; // Placeholder data
    setCandidatesSelected(candidatesSelectedData);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    // Perform search operation or any other desired action
  };

  const chartRef = useRef<Chart | null>(null);

  const createChart = (): void => {
    const ctx = (document.getElementById('myChart') as HTMLCanvasElement)?.getContext('2d');

    if (!ctx) return;

    if (chartRef.current) {
      // Destroy existing chart if it exists
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jobs Posted', 'Candidates Selected'],
        datasets: [
          {
            label: 'Metrics',
            data: [jobsPostedToday, candidatesSelected],
            backgroundColor: ['rgb(51, 145, 233)', 'rgba(255, 99, 132, 0.5)'],
            borderColor: ['rgb(255,255,255)', 'rgba(255,255,255)'],
            borderWidth: 1,
            // borderRadius:0.4,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="admin">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <div className="container">
           <div className="container1">
          <p className="left left1">
            Jobs Posted Today: <br />
            {jobsPostedToday}
          </p>
          <p className="left left2">
            Candidates Selected: <br />
            {candidatesSelected}
          </p>
          <p className="left left1 left3">
            Jobs Posted Today: <br />
            {jobsPostedToday}
          </p>
          <p className="left left2 left4">
            Candidates Selected: <br />
            {candidatesSelected}
          </p>
          </div>
         
          <div className="chart-container">
            <div className="canvas">
  <canvas id="myChart"></canvas>
  </div> 
  <div className="my-table">
<table>
          <tr>
            <td>candidate 1</td>
            <td> Shubham </td>
            <td>frontend</td>
          </tr>
          <div className="border"></div>
          <tr>
            <td>Candidate 2</td>
            <td>Nikhil</td>
            <td>fronend</td>
          </tr>
          <div className="border"></div>
          <tr>
            <td>Candidate 3</td>
            <td>Aryan</td>
            <td>backend</td>
          </tr>
          <div className="border"></div>
          <tr>
            <td>Candidate 4</td>
            <td>Aanchal</td>
            <td>design</td>
          </tr>
          <div className="border"></div>
          <tr>
            <td>Candidate 5</td>
            <td>Nidhi</td>
            <td>design</td>
          </tr>
          <div className="border"></div>
        </table>
</div>
</div>
<div className="container3">
    <p className="left bottom">
            job aviliable: <br />
            frontend developer <br />
            Number of jobs: 5
          </p>
          <p className="left left2 bottom">
          job aviliable: <br />
            backend developer <br />
            Number of jobs: 3
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
