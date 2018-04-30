function ComponentState() {
    this = {
        projects: [],
        addMode: false,
        seachFilter: {
            activeOnly: false,
            name: ""
        }
    }
}

ComponentState.prototype.load = function() {
    try {
        this.projects = JSON.parse(window.localStorage.getItem('__notes_storage'))
    }
    catch (err) {
        console.warn("window.localStorage.getItem() is failed")
    }
}

ComponentState.prototype.save = function() {
    try {
        window.localStorage.setItem('__app_state', JSON.stringify(this.projects));
    }
    catch (err) {
        console.warn("save() is failed");
    }
}
