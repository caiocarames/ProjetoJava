(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_Iniciativas_16b2a819._.js", {

"[project]/app/Iniciativas/PaginaIniciativas.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "add_button": "PaginaIniciativas-module__FTpt1a__add_button",
  "add_ini": "PaginaIniciativas-module__FTpt1a__add_ini",
  "buttons": "PaginaIniciativas-module__FTpt1a__buttons",
  "card": "PaginaIniciativas-module__FTpt1a__card",
  "filtroContainer": "PaginaIniciativas-module__FTpt1a__filtroContainer",
  "filtroTitulo": "PaginaIniciativas-module__FTpt1a__filtroTitulo",
  "header": "PaginaIniciativas-module__FTpt1a__header",
  "iniciativas": "PaginaIniciativas-module__FTpt1a__iniciativas",
  "kr": "PaginaIniciativas-module__FTpt1a__kr",
  "kr_title": "PaginaIniciativas-module__FTpt1a__kr_title",
  "lista_bola": "PaginaIniciativas-module__FTpt1a__lista_bola",
  "lista_num": "PaginaIniciativas-module__FTpt1a__lista_num",
  "objective_title": "PaginaIniciativas-module__FTpt1a__objective_title",
  "pendente": "PaginaIniciativas-module__FTpt1a__pendente",
  "percentage": "PaginaIniciativas-module__FTpt1a__percentage",
  "progress": "PaginaIniciativas-module__FTpt1a__progress",
  "progress_bar_ini": "PaginaIniciativas-module__FTpt1a__progress_bar_ini",
  "select": "PaginaIniciativas-module__FTpt1a__select",
});
}}),
"[project]/app/Iniciativas/PaginaIniciativas.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaIniciativas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/Iniciativas/PaginaIniciativas.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaginaIniciativas() {
    _s();
    // Criação do estado para armazenar as iniciativas
    const [iniciativas, setIniciativas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todos");
    // Função para chamar a API e buscar as iniciativas
    async function chamarAPIIniciativas() {
        const URL = "http://localhost:8080/iniciativas";
        try {
            const resp = await fetch(URL);
            if (resp.status === 200) {
                const iniciativas = await resp.json(); // Resposta da API
                setIniciativas(iniciativas); // aqui salva os dados no estado
                console.log(iniciativas);
            } else {
                console.error('Erro ao buscar iniciativas:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Função para dar o delete de alguma iniciativa iniciativa(DELETE)
    async function chamarAPIDeleteIniciativa(id) {
        const URL = `http://localhost:8080/iniciativas/${id}`;
        try {
            const resp = await fetch(URL, {
                method: "DELETE"
            });
            if (resp.ok) {
                alert("Iniciativa deletada com sucesso!");
                chamarAPIGetIniciativas(); // da o get novamente para recarregar a página
            } else {
                console.error('Erro ao dar delete de uma iniciativa:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Hook useEffect para chamar a API assim que o componente for montado (isso faz com que não precise chamar toda hora a API pra recarregar a pagina)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaginaIniciativas.useEffect": ()=>{
            chamarAPIIniciativas();
        }
    }["PaginaIniciativas.useEffect"], []);
    {}
    const filtragem = (e)=>{
        setSelectedId(e.target.value);
        console.log("ID Selecionado:", e.target.value); // Exibe o ID selecionado no console
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iniciativas,
                children: "Iniciativas"
            }, void 0, false, {
                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/CadastroIniciativas",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].add_button,
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].add_ini,
                    children: "Adicionar Iniciativas"
                }, void 0, false, {
                    fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            iniciativas.filter((iniciativa)=>selectedId === "Todos" || iniciativa.id_iniciativas === Number(selectedId)).map((iniciativa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/AtualizarIniciativas",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            children: "Editar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>chamarAPIDeleteIniciativa(iniciativa.id_iniciativas),
                                        children: "Excluir"
                                    }, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                            lineNumber: 71,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kr,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista_bola,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista_num,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "ID: "
                                            }, void 0, false, {
                                                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            iniciativa.id_iniciativas
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Título: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    iniciativa.titulo,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].percentage,
                                        children: [
                                            iniciativa.porcentagem_conclusao_iniciativa,
                                            " %"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar_ini,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                            style: {
                                                width: `${iniciativa.porcentagem_conclusao_iniciativa}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Descrição: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    iniciativa.descricao,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Resultado Chave Id: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    iniciativa.resultadosChaveId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                            lineNumber: 79,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                    lineNumber: 70,
                    columnNumber: 7
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtroContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtroTitulo,
                        children: "Filtrar por ID"
                    }, void 0, false, {
                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "filtro",
                        name: "iniciativa",
                        onChange: filtragem,
                        value: selectedId,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Iniciativas$2f$PaginaIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: "Todos"
                            }, "Todos", false, {
                                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            iniciativas.map((iniciativa)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: iniciativa.id_iniciativas
                                }, iniciativa.id_iniciativas, false, {
                                    fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Iniciativas/PaginaIniciativas.jsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(PaginaIniciativas, "aFH4HkzAAtvBlqZxL/2UPnqLLe8=");
_c = PaginaIniciativas;
var _c;
__turbopack_context__.k.register(_c, "PaginaIniciativas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_Iniciativas_16b2a819._.js.map