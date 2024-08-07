class CompanyLogoRenderer  {
    eGui;

    init(params) {
        let companyLogo = document.createElement('img');
        companyLogo.src = `https://www.ag-grid.com/example-assets/software-company-logos/${params.value.toLowerCase()}.svg`;
        companyLogo.setAttribute('class', 'logo');

        this.eGui = document.createElement('span');
        this.eGui.setAttribute('class', 'imgSpanLogo');
        this.eGui.appendChild(companyLogo);
    }

    getGui() {
        return this.eGui;
    }

    refresh(params) {
        return false;
    }
}