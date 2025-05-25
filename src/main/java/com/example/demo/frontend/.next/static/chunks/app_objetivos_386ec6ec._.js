(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_objetivos_386ec6ec._.js", {

"[project]/app/objetivos/PaginaObjetivos.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "add_button": "PaginaObjetivos-module__prcU9G__add_button",
  "add_obj": "PaginaObjetivos-module__prcU9G__add_obj",
  "button_desa": "PaginaObjetivos-module__prcU9G__button_desa",
  "buttons": "PaginaObjetivos-module__prcU9G__buttons",
  "card": "PaginaObjetivos-module__prcU9G__card",
  "filtroContainer": "PaginaObjetivos-module__prcU9G__filtroContainer",
  "filtroTitulo": "PaginaObjetivos-module__prcU9G__filtroTitulo",
  "header": "PaginaObjetivos-module__prcU9G__header",
  "ini_titulo": "PaginaObjetivos-module__prcU9G__ini_titulo",
  "kr": "PaginaObjetivos-module__prcU9G__kr",
  "kr_title": "PaginaObjetivos-module__prcU9G__kr_title",
  "lista_bola": "PaginaObjetivos-module__prcU9G__lista_bola",
  "lista_num": "PaginaObjetivos-module__prcU9G__lista_num",
  "objective_title": "PaginaObjetivos-module__prcU9G__objective_title",
  "objetivos": "PaginaObjetivos-module__prcU9G__objetivos",
  "percentage": "PaginaObjetivos-module__prcU9G__percentage",
  "porcentagem_ini": "PaginaObjetivos-module__prcU9G__porcentagem_ini",
  "progress": "PaginaObjetivos-module__prcU9G__progress",
  "progress_bar_ini": "PaginaObjetivos-module__prcU9G__progress_bar_ini",
  "progress_bar_kr": "PaginaObjetivos-module__prcU9G__progress_bar_kr",
  "progress_bar_obj": "PaginaObjetivos-module__prcU9G__progress_bar_obj",
  "select": "PaginaObjetivos-module__prcU9G__select",
});
}}),
"[project]/app/objetivos/PaginaObjetivos.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PaginaObjetivos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/objetivos/PaginaObjetivos.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaginaObjetivos() {
    _s();
    // Criação do estado para armazenar os Objetivos
    const [objetivos, setObjetivos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Todos");
    // Função para chamar a API e buscar os Objetivos
    async function chamarAPIObjetivo() {
        const URL = "http://localhost:8080/objetivos";
        try {
            const resp = await fetch(URL);
            if (resp.status === 200) {
                const data = await resp.json();
                console.log("Objetivos recebidos:", data);
                setObjetivos(data);
            } else {
                console.error('Erro ao buscar objetivos:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Função para dar o delete de algum objetivo 
    async function chamarAPIDeleteObjetivo(id) {
        const URL = `http://localhost:8080/objetivos/${id}`;
        try {
            const resp = await fetch(URL, {
                method: "DELETE"
            });
            if (resp.ok) {
                alert("Objetivo deletado com sucesso!");
                chamarAPIObjetivo(); // da o get novamente para recarregar a página
            } else {
                console.error('Erro ao dar delete de um objetivo:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    // Função para desassociar um Resultado Chave
    async function chamarAPIDesassociarKR(id, id_kr) {
        const URL = `http://localhost:8080/objetivos/${id}/desassociarKR/${id_kr}`;
        try {
            const resp = await fetch(URL, {
                method: 'DELETE'
            });
            if (resp.status === 200 || resp.status === 204) {
                alert("Resultado Chave desassociado com sucesso!");
                setIdResultadosChaveDesassociar('');
                chamarAPIObjetivo();
            } else {
                console.error('Erro ao desassociar Resultado Chave:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaginaObjetivos.useEffect": ()=>{
            chamarAPIObjetivo();
        }
    }["PaginaObjetivos.useEffect"], []);
    const filtragem = (e)=>{
        setSelectedId(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].objetivos,
                children: "Objetivos"
            }, void 0, false, {
                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/CadastroObjetivos",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].add_button,
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].add_obj,
                    children: "Adicionar Objetivo"
                }, void 0, false, {
                    fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            objetivos.filter((objetivo)=>selectedId === "Todos" || objetivo.id === Number(selectedId)).map((objetivo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].buttons,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/AtualizarObjetivos",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            children: "Editar"
                                        }, void 0, false, {
                                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                            lineNumber: 91,
                                            columnNumber: 46
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>chamarAPIDeleteObjetivo(objetivo.id),
                                        children: "Excluir"
                                    }, void 0, false, {
                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                            lineNumber: 89,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "ID: "
                        }, void 0, false, {
                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                            lineNumber: 95,
                            columnNumber: 9
                        }, this),
                        objetivo.id,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].objective_title,
                            children: [
                                objetivo.titulo,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "percentage",
                                    children: [
                                        objetivo.porcentagem_conclusao_obj,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                            lineNumber: 96,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar_obj,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                style: {
                                    width: `${objetivo.porcentagem_conclusao_obj}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                            lineNumber: 99,
                            columnNumber: 9
                        }, this),
                        objetivo.resultadosChaves.map((resultadoChave)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kr,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].kr_titulo,
                                        children: [
                                            resultadoChave.descricao,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    " ",
                                                    resultadoChave.meta
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                lineNumber: 105,
                                                columnNumber: 42
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].porcentagem_kr,
                                                children: [
                                                    resultadoChave.porcentagem_conclusao_kr,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar_kr,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                            style: {
                                                width: `${resultadoChave.porcentagem_conclusao_kr}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista_bola,
                                        children: resultadoChave.iniciativas.map((iniciativas)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista_num,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ini_titulo,
                                                        children: [
                                                            "-",
                                                            iniciativas.titulo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                        lineNumber: 114,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].porcentagem_ini,
                                                        children: [
                                                            iniciativas.porcentagem_conclusao_iniciativa,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar_ini,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress,
                                                            style: {
                                                                width: `${iniciativas.porcentagem_conclusao_iniciativa}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                            lineNumber: 117,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                        lineNumber: 116,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button_desa,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>chamarAPIDesassociarKR(objetivo.id, resultadoChave.id_kr),
                                                            children: "Desassociar"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, iniciativas.id_iniciativas, true, {
                                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, resultadoChave.id_kr, true, {
                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this))
                    ]
                }, objetivo.id, true, {
                    fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtroContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filtroTitulo,
                        children: "Filtrar por ID"
                    }, void 0, false, {
                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "filtro",
                        name: "objetivo",
                        onChange: filtragem,
                        value: selectedId,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$objetivos$2f$PaginaObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "Todos",
                                children: "Todos"
                            }, "Todos", false, {
                                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            objetivos.map((objetivo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: objetivo.id,
                                    children: objetivo.id
                                }, objetivo.id, false, {
                                    fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
                lineNumber: 131,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/objetivos/PaginaObjetivos.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(PaginaObjetivos, "aHaOvkI1O3RkDoa2Kl4ezRSVcnY=");
_c = PaginaObjetivos;
var _c;
__turbopack_context__.k.register(_c, "PaginaObjetivos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_objetivos_386ec6ec._.js.map