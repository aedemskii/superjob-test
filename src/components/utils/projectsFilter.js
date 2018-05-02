function projectsFilter(_projects, filter) {
    let projects = JSON.parse(JSON.stringify(_projects));
    if (filter.name.length) {
        const checkForSubstr = (string, substring) => {
            return (string.toUpperCase()).includes(substring.toUpperCase());
        }
        projects.forEach(
            (project) => {
                project.vacancies = project.vacancies.filter(
                    (vac) => { return checkForSubstr(vac.name, filter.name) }
                );
            }
        );
    }
    if (filter.activeOnly) {
        projects.forEach(
            (project) => {
                project.vacancies = project.vacancies.filter(
                    (vac) => { return vac.isActive; }
                );
            }
        );
    }
    projects = projects.map(
        (project) => {
            return (project.vacancies.length ? project : null)
        }
    );

    return projects;
}

export default projectsFilter;
