const columnDefs = [
    { 
        field: "name",
        filter: 'agTextColumnFilter',
    },
    { 
        field: "section", 
        rowGroup: true,
        hide: true
    },
    { 
        field: "compartment", 
        rowGroup: true,
        hide: true
    },
    { 
        field: "attachments",
        cellRenderer: CellListRenderer,
        flex: 2,
    },
    { 
        field: "actions", 
        cellRenderer: CellListRenderer,
        flex: 2,
    },
    {
        field: "innervations", 
        cellRenderer: CellListRenderer,
        flex: 2,
    },
    { 
        field: "blood supply", 
        cellRenderer: CellListRenderer,
        flex: 2,
    },
    { 
        field: "notes", 
        cellRenderer: CellListRenderer,
        filter: 'agTextColumnFilter',
        sortable: false,
        enableRowGroup: false
    },
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
            },
            'filters'
        ],
        defaultToolPanel: '',
    },
    defaultColDef: {
        sortable: true, 
        filter: true, 
        resizable: true, 
        autoHeight: true, 
        wrapText: true, 
        floatingFilter: true,
        enableRowGroup: true,
        minWidth: 200,
        flex: 1,
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
