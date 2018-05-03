function _projects() {
    return [
        {
            name: 'SuperJob Frontend',
            vacancies: [
                {
                    name: 'Frontend Middle Developer',
                    isActive: true
                },
                {
                    name: 'Frontend Junior Developer',
                    isActive: false
                }
            ],
            isActive: true,
            isOpened: true
        },
        {
            name: 'SuperJob Backend',
            vacancies: [
                {
                    name: 'Backend Senior Developer',
                    isActive: true
                }
            ],
            isActive: true,
            isOpened: false
        },
        {
            name: 'Machine learning',
            vacancies: [],
            isActive: false,
            isOpened: false
        }
    ];
}

export default _projects;
