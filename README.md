# Integração entre Fetch API e DataTables em JavaScript

### Consumo de API REST + DataTables + Bootstrap 5

A integração inclui o consumo de dados via Fetch API, renderização
dinâmica em uma tabela interativa utilizando DataTables, estilização com
Bootstrap 5 (5.0.2) para responsividade e operações básicas de
visualização.\
Este projeto foi construído como parte do meu estudo sobre manipulação
de dados, UI dinâmica e boas práticas no front-end.

## Tecnologias utilizadas

-   JavaScript (ES6+)
-   Fetch API
-   Bootstrap 5.0.2
-   DataTables (datatables.net-dt)
-   jQuery (instalado automaticamente pelo DataTables)

## Estrutura de pastas

    datatable-fetchapi-js
    │── css/
    │   ├── bootstrap.min.css
    │   ├── dataTables.bootstrap5.css
    │   └── style.css
    │
    │── js/
    │   └── bootstrap.bundle.min.js
    │
    │── node_modules/
    │
    │── index.html
    │── .gitignore
    │── README.md

## index.html (estrutura inicial)

``` html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="css/bootstrap.min.css" rel="stylesheet" >
    <link rel="stylesheet" href="node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css">
    <link href="css/style.css" rel="stylesheet" > 

    <title>DataTable, Fetch API e JS</title>
  </head>
  <body onload="getData()">    

    <div class="container mt-5">
        <div class="row">

            <h1 class="text-center my-5">DataTable, Fetch API e JS!</h1>

            <table id="myDataTableJS" class="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody id="tbody">  
              
              
            </tbody>            
        </table>
        </div>
    </div>


    <!-- My Custom DataTable.js -->
     <script src="js/customDataTable.js"></script>
    <!-- jQuery -->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>

    <!-- DataTables -->
    <script src="node_modules/datatables.net/js/jquery.dataTables.min.js"></script>

    <!-- DataTables + Bootstrap 5 -->
    <script src="node_modules/datatables.net-bs5/js/dataTables.bootstrap5.min.js"></script>

    <!-- Bootstrap -->
    <script src="js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

## Como instalar

``` sh
npm install datatables.net-dt
```

## Como rodar o projeto

``` sh
python -m http.server 5500 --bind 127.0.0.1
```

Ou utilize o Live Server do VSCode.

## Autor

Desenvolvido por: **Marcielli Oliveira** LinkedIn:
https://www.linkedin.com/in/marciellioliveira/
