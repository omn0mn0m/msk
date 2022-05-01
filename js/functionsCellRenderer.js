class FunctionsCellRenderer {
    // init method gets the details of the cell to be renderer
    init(params) {
        this.eGui = document.createElement('span');
        let html = '<ul>';

        for (let key in params.value) {
            html += '<li>' + key + '</li><ul>';
            params.value[key].forEach(value => {
                html += '<li>' + value + '</li>';
            });
            html += '</ul>';
        }

        html += '</ul>';

        this.eGui.innerHTML = html;
    }
    
    getGui() {
        return this.eGui;
    }
    
    refresh(params) {
        return false;
    }
}
