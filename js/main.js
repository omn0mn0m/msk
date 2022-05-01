const columnDefs = [
    { field: "name" },
    { field: "section" },
    { field: "compartment" },
    { 
        field: "attachments",
        cellRenderer: CellListRenderer,
    },
    { 
        field: "actions", 
        cellRenderer: CellListRenderer,
    },
    { field: "innervations" },
    { field: "blood supply" },
    { field: "notes", filter: false, sortable: false, enableRowGroup: false},
];

const toolPanelParams = {
    suppressRowGroups: true,
    suppressValues: true,
    suppressPivotMode: true,
    suppressPivots: true,
}

// let the grid know which columns and what data to use
const gridOptions = {
    columnDefs: columnDefs,
    groupDisplayType: 'groupRows',
    rowGroupPanelShow: 'always',
    sideBar: {
        toolPanels: [
            {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: toolPanelParams,
            }
        ],
        defaultToolPanel: 'columns',
    },
    defaultColDef: {
        sortable: true, 
        filter: true, 
        resizable: true, 
        autoHeight: true, 
        wrapText: true, 
        floatingFilter: true,
        enableRowGroup: true,
        menuTabs: [ 'generalMenuTab' ],
    },
};

const gridDiv = document.querySelector('#myGrid');
new agGrid.Grid(gridDiv, gridOptions);

fetch('data/muscles.json')
    .then(response => response.json())
    .then(data => {
        gridOptions.api.setRowData(data.muscles);
    });
