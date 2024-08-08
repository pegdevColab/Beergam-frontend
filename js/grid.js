document.addEventListener('DOMContentLoaded', function() {

    function replaceAccents(value) {
        return value
            .replace(new RegExp("[àáâãäå]", "g"), "a")
            .replace(new RegExp("æ", "g"), "ae")
            .replace(new RegExp("ç", "g"), "c")
            .replace(new RegExp("[èéêë]", "g"), "e")
            .replace(new RegExp("[ìíîï]", "g"), "i")
            .replace(new RegExp("ñ", "g"), "n")
            .replace(new RegExp("[òóôõøö]", "g"), "o")
            .replace(new RegExp("œ", "g"), "oe")
            .replace(new RegExp("[ùúûü]", "g"), "u")
            .replace(new RegExp("[ýÿ]", "g"), "y")
            .replace(new RegExp("\\W", "g"), "")
            .toLowerCase();
    }

    const filterParams = {
        textFormatter: replaceAccents,
    };
    
    const columnDefs = [
        { headerName: "Imagem", field: "thumbnail", cellRenderer: imageRenderer, sortable: false },
        { headerName: "Título", field: "title", filter: 'agSetColumnFilter', filterParams: filterParams },
        { headerName: "Preço", field: "price" },
        { headerName: "Quantidade Vendida", field: "sold_quantity" },
        { headerName: "Quantidade Disponível", field: "available_quantity" },
        { headerName: "Tipo de Envio", field: "logistic_type" },
        { headerName: "Tipo de Anúncio", field: "listing_type_id" }
    ];

    function imageRenderer(params) {
        return `
            <div style="display: flex; align-items: center;">
                <img src="${params.value}" alt="thumbnail" style="width: 100px; height: auto;margin-right: 10px;">
            </div>
        `;
    }

    let getData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/searchTeste');
    
            console.log('Response:', response);
    
            if (!response.ok) {
                throw new Error(`Erro de conexão: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log('Data:', data);

            const gridOptions = {
                columnDefs: columnDefs,
                rowData: data,
                rowHeight: 100,
                defaultColDef: {
                    resizable: true
                }
            };
    
            new agGrid.Grid(document.querySelector('#myGrid'), gridOptions);
    
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    
    getData();
});