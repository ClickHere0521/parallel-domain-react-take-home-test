import { categories } from "../const";

export const getOptions = (jobs) => {
  const categoryMap = {};
  Object.keys(categories).forEach((category) => {
    let map = {};
    jobs.forEach((job) => {
      const jobCategory = job.categories[category];
      if (!map[jobCategory] && jobCategory) {
        map[jobCategory] = true;
      }
    });
    categoryMap[category] = map;
  });
  return categoryMap;
};

export const applyFilter = (jobs, filters) => {
  let filtered = [...jobs];
  if (filters.location && filters.location !== "All")
    filtered = filtered.filter(
      (job) => job.categories.location === filters.location
    );
  if (filters.team && filters.team !== "All")
    filtered = filtered.filter((job) => job.categories.team === filters.team);
  if (filters.commitment && filters.commitment !== "All")
    filtered = filtered.filter(
      (job) => job.categories.commitment === filters.commitment
    );
  return filtered;
};

export const applyGroups = (filteredJobs) => {
  const groupMap = {};
  filteredJobs.forEach((job) => {
    const jobTeam = job.categories.team;
    if (!groupMap[jobTeam]) {
      groupMap[jobTeam] = [];
    }
    groupMap[jobTeam].push(job);
  });
  return groupMap;
};
