const columnDefs = [
    { headerName: "TÍTULO DO ANÚNCIO", field: "imageName", cellRenderer: imageRenderer, autoHeight: true },
    { headerName: "STATUS", field: "status" }
];

const rowData = [
    { imageName: "list001", productName: "Produto A", productId: "ID001", status: true },
    { imageName: "list002", productName: "Produto B", productId: "ID002", status: true },
    { imageName: "list003", productName: "Produto C", productId: "ID003", status: false }
];

function imageRenderer(params) {
    const imagePath = `images/list/${params.value}.png`;

    const productName = params.data.productName;
    const productId = params.data.productId;

    return `
        <div style="display: flex; align-items: center;">
            <img src="${imagePath}" alt="${params.value}" style="width: 100px; height: auto; margin-right: 10px;">
            <div>
                <div><strong></strong>${productName}</div>
                <div><strong></strong>${productId}</div>
            </div>
        </div>
    `;
}

const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData,
    defaultColDef: {
        resizable: true
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const eGridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(eGridDiv, gridOptions);
});
