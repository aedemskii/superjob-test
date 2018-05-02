function projectsFilter(_projects, filter) {
    let projects = JSON.parse(JSON.stringify(_projects));
    let len = projects.length;
    if (filter.name.length) {
        let checkForSubstr = (string, substring) => {
            return (string.toUpperCase()).includes(substring.toUpperCase());
        }
        for ( let idx = 0; idx < len; idx++ ) {
            projects[idx].vacancies = projects[idx].vacancies.filter(
                (vac) => { return checkForSubstr(vac.name, filter.name) }
            );
        }
    }
    if (filter.activeOnly) {
        for ( let idx = 0; idx < len; idx++ ) {
            projects[idx].vacancies = projects[idx].vacancies.filter(
                (vac) => { return vac.isActive; }
            );
        }
    }
    projects = projects.map(
        (project) => {
            return (project.vacancies.length ? project : null)
        }
    );

    return projects;
}

export default projectsFilter;
