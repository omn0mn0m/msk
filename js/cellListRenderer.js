class CellListRenderer {
    // init method gets the details of the cell to be renderer
    init(params) {
        this.eGui = document.createElement('span');
        let html = '<ul>';

        params.value.forEach((key) => {
            html += '<li>' + key + '</li>';
        })

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
