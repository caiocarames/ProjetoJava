(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_resultadosChave_f6b75725._.js", {

"[project]/app/resultadosChave/PaginaKRS.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "KRS": "PaginaKRS-module__cDuGxG__KRS",
  "add_button": "PaginaKRS-module__cDuGxG__add_button",
  "add_obj": "PaginaKRS-module__cDuGxG__add_obj",
  "button_desa": "PaginaKRS-module__cDuGxG__button_desa",
  "buttons": "PaginaKRS-module__cDuGxG__buttons",
  "card": "PaginaKRS-module__cDuGxG__card",
  "filtroContainer": "PaginaKRS-module__cDuGxG__filtroContainer",
  "filtroTitulo": "PaginaKRS-module__cDuGxG__filtroTitulo",
  "header": "PaginaKRS-module__cDuGxG__header",
  "ini_titulo": "PaginaKRS-module__cDuGxG__ini_titulo",
  "kr": "PaginaKRS-module__cDuGxG__kr",
  "kr_titulo": "PaginaKRS-module__cDuGxG__kr_titulo",
  "lista_bola": "PaginaKRS-module__cDuGxG__lista_bola",
  "lista_num": "PaginaKRS-module__cDuGxG__lista_num",
  "pendente": "PaginaKRS-module__cDuGxG__pendente",
  "porcentagem_ini": "PaginaKRS-module__cDuGxG__porcentagem_ini",
  "porcentagem_kr": "PaginaKRS-module__cDuGxG__porcentagem_kr",
  "progress": "PaginaKRS-module__cDuGxG__progress",
  "progress_bar_ini": "PaginaKRS-module__cDuGxG__progress_bar_ini",
  "progress_bar_kr": "PaginaKRS-module__cDuGxG__progress_bar_kr",
  "select": "PaginaKRS-module__cDuGxG__select",
});
}}),
"[project]/app/resultadosChave/PaginaKRS.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaKRS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/resultadosChave/PaginaKRS.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaginaKRS() {
    _s();
    // Criação do estado para armazenar os resultadosChave
    const [resultadosChave, setResultadosChave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todos");
    // Função para chamar a API e buscar os resultadosChave
    async function chamarAPIResultadosChave() {
        const URL = "http://localhost:8080/resultadosChave";
        try {
            const resp = await fetch(URL);
            if (resp.status === 200) {
                const resultadosChave = await resp.json(); // Resposta da API
                setResultadosChave(resultadosChave); // aqui salva os dados no estado
                console.log(resultadosChave);
            } else {
                console.error('Erro ao buscar iniciativas:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Função para dar o delete de algum resultados chave
    async function chamarAPIDeleteResultadosChave(id) {
        const URL = `http://localhost:8080/resultadosChave/${id}`;
        try {
            const resp = await fetch(URL, {
                method: "DELETE"
            });
            if (resp.ok) {
                alert("Resultado Chave deletado com sucesso!");
                chamarAPIResultadosChave(); // da o get novamente para recarregar a página
            } else {
                console.error('Erro ao dar delete de um resultado chave:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Função para desassociar uma iniciativa
    async function chamarAPIDesassociarIni(id_kr, id_ini) {
        const URL = `http://localhost:8080/resultadosChave/${id_kr}/desassociarIni/${id_ini}`;
        try {
            const resp = await fetch(URL, {
                method: 'DELETE'
            });
            if (resp.status === 200 || resp.status === 204) {
                alert("Iniciativa desassociada com sucesso!");
                setIdIniciativaDesassociar('');
                chamarAPIResultadosChave();
            } else {
                console.error('Erro ao desassociar iniciativa:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Hook useEffect para chamar a API assim que o componente for montado (isso faz com que não precise chamar toda hora a API pra recarregar a pagina)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaginaKRS.useEffect": ()=>{
            chamarAPIResultadosChave();
        }
    }["PaginaKRS.useEffect"], []);
    // Função para filtrar pelo select
    const filtragem = (e)=>{
        setSelectedId(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].KRS,
                children: "Resultados Chave"
            }, void 0, false, {
                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/CadastroKRS",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].add_button,
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].add_obj,
                    children: "Adicionar Resultado Chave"
                }, void 0, false, {
                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            resultadosChave.filter((resultadosChave)=>selectedId === "Todos" || resultadosChave.id_kr === Number(selectedId)).map((resultadosChave)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/AtualizarKRS",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                children: "Editar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>chamarAPIDeleteResultadosChave(resultadosChave.id_kr),
                                        children: "Excluir"
                                    }, void 0, false, {
                                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                            lineNumber: 89,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kr,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "ID:"
                                }, void 0, false, {
                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                    lineNumber: 100,
                                    columnNumber: 11
                                }, this),
                                resultadosChave.id_kr,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kr_titulo,
                                    children: [
                                        resultadosChave.descricao,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                " ",
                                                resultadosChave.meta
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                            lineNumber: 102,
                                            columnNumber: 41
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].porcentagem_kr,
                                            children: [
                                                resultadosChave.porcentagem_conclusao_kr,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                            lineNumber: 103,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                    lineNumber: 101,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar_kr,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                        style: {
                                            width: `${resultadosChave.porcentagem_conclusao_kr}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista_bola,
                                    children: resultadosChave.iniciativas.map((iniciativa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista_num,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ini_titulo,
                                                    children: [
                                                        "-",
                                                        iniciativa.titulo
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].porcentagem_ini,
                                                    children: [
                                                        iniciativa.porcentagem_conclusao_iniciativa,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button_desa,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>chamarAPIDesassociarIni(resultadosChave.id_kr, iniciativa.id_iniciativas),
                                                        children: "Desassociar"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                        lineNumber: 117,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar_ini,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                                        style: {
                                                            width: `${iniciativa.porcentagem_conclusao_iniciativa}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                                    lineNumber: 119,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                    lineNumber: 110,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtroContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtroTitulo,
                        children: "Filtrar por ID"
                    }, void 0, false, {
                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "filtro",
                        name: "resultadosChave",
                        onChange: filtragem,
                        value: selectedId,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$resultadosChave$2f$PaginaKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Todos",
                                children: "Todos"
                            }, "Todos", false, {
                                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            resultadosChave.map((resultadosChave)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: resultadosChave.id_kr,
                                    children: resultadosChave.id_kr
                                }, resultadosChave.id_kr, false, {
                                    fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/resultadosChave/PaginaKRS.jsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(PaginaKRS, "57TOq8Kvg9NUhAT+bu1kIYNoVJA=");
_c = PaginaKRS;
var _c;
__turbopack_context__.k.register(_c, "PaginaKRS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_resultadosChave_f6b75725._.js.map