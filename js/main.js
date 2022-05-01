const columnDefs = [
    { field: "name", sortable: true, filter: true, resizable: true, autoHeight: true, wrapText: true },
    { field: "section", rowGroup: true, sortable: true, filter: true, resizable: true, autoHeight: true, wrapText: true },
    { field: "compartment", enableRowGroup: true, sortable: true, filter: true, resizable: true, autoHeight: true, wrapText: true },
    { field: "attachments", sortable: true, filter: true, resizable: true, autoHeight: true, wrapText: true },
    { 
        field: "functions", 
        cellRenderer: FunctionsCellRenderer, 
        sortable: true, 
        filter: true, 
        resizable: true, 
        autoHeight: true, 
        wrapText: true },
    { field: "innervations", enableRowGroup: true, sortable: true, filter: true, resizable: true, autoHeight: true, wrapText: true },
    { field: "blood supply", enableRowGroup: true, sortable: true, filter: true, resizable: true, autoHeight: true, wrapText: true },
    { field: "notes" },
];

// let the grid know which columns and what data to use
const gridOptions = {
    columnDefs: columnDefs,
    groupDisplayType: 'groupRows',
    rowGroupPanelShow: 'always',
    suppressDragLeaveHidesColumns: true,
};

const gridDiv = document.querySelector('#myGrid');
new agGrid.Grid(gridDiv, gridOptions);

fetch('data/muscles.json')
    .then(response => response.json())
    .then(data => {
        gridOptions.api.setRowData(data.muscles);
    });
