/*
O useDebounce.ts é um hook utilitário muito comum em aplicações que têm: 
- campo de busca com autocomplete
- filtros que disparam requisições à API
- digitação que não deve chamar a API a cada tecla
- tabelas com pesquisa por nome, SKU, marketplace etc.
- inputs que disparam lógica pesada

Exemplo:
→ usuário digita “ferramenta elétrica” no campo de busca
→ sem debounce: 22 requisições (uma por tecla)
→ com debounce: 1 requisição após 300ms sem digitar
*/

