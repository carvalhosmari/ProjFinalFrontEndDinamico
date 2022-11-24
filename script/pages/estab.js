
window.Page.estabPage = async () => {
    // main.innerHTML = '';

    // const headerContent = ["inicio", "estabelecimentos", "categorias", "grupo"];
    // const hdr =  header.create(headerContent)
    // main.appendChild(hdr)
    
    // const section = document.createElement('section');
    // section.classList.add('section-list');
    // main.appendChild(section);

    // const headerTable = ["Endereco", "Telefone", "Nome", "Categoria", "CEP", "Email"];

    // const companies = await getCompanies();

    // section.appendChild(
    //     tableDisplay.create(headerTable, companies)
    // );

    // const iconEdit = document.querySelectorAll('.icon-edit');

    // iconEdit.forEach(icon => {
    //     icon.addEventListener('click', () => {
    //         Page.estabEdit();
    //     });
    
    // })

    // const iconDelete = document.querySelectorAll('.icon-delete');
    // iconDelete.forEach(icon => {
    //     icon.addEventListener('click', () => {
    //         Page.mainPage();
    //     });
    
    // })

    // const tfoot = document.querySelector('.table-footer');
    // tfoot.appendChild(
    //     btn.create({
    //         content: "Cadastrar estabelecimento",
    //         onClick: () => {
    //             Page.estabRegister()
    //         },
    //         className: 'btn-register'
    //     })
    // );

    // main.appendChild(
    //     footer.create()
    // );

    main.innerHTML = '';


    const headerContent = ["Endereco", "Telefone", "Nome", "Categoria", "CEP", "Email"];
    const hdr = header.create(headerContent)
    main.appendChild(hdr)
    hdr.addEventListener('scroll', () => {

    })

    const section = document.createElement('section');
    main.appendChild(section);

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tfoot = document.createElement('tfoot');

    table.appendChild(thead);
    table.appendChild(tbody);
    table.appendChild(tfoot);

    section.appendChild(table);

    const headerTable = ["Endereco", "Telefone", "Nome", "Categoria", "CEP", "Email", "Editar", "Deletar"];

    headerTable.forEach(e => {
        const th = document.createElement('th');
        th.textContent = e;
        thead.appendChild(th)
    })

    const companies = await getCompanies();

    companies.forEach(company => {

        const trObj = document.createElement('tr');
        Object.keys(company).forEach(key => {
            if (key != "uid") {
                let tdAtributosObj = document.createElement('td');
                tdAtributosObj.innerText = company[key];
                trObj.appendChild(tdAtributosObj);
            }
        })
        
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        const icon1 = document.createElement('img');
        const icon2 = document.createElement('img');
        icon1.setAttribute('src', './img/edit.png');
        icon2.setAttribute('src', './img/delete.png');

        icon1.addEventListener('click', () => {
            //rIndex = icon1.closest('tr').rowIndex;
            Page.estabEdit(company.uid);
        })

        icon2.addEventListener('click', () => {

            if (confirm('Essa ação não poderá ser revertida. Você tem certeza?') === true){
                console.log('chegou aq');
                deleteCompany(company.uid)
                Page.estabPage();
            }
        })

        td1.appendChild(icon1);
        td2.appendChild(icon2);

        trObj.appendChild(td1);
        trObj.appendChild(td2);

        

        tbody.appendChild(trObj);
    });

    tfoot.appendChild(
        btn.create({
            content: "Cadastrar estabelecimento",
            onClick: () => {
                Page.estabRegister();
            },
            className: 'btn-register'
        })
    )

}