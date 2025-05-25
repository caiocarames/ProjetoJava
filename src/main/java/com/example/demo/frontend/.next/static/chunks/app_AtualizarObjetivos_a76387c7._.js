(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_AtualizarObjetivos_a76387c7._.js", {

"[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "botao": "PaginaAtualizarObjetivos-module__l6S5pG__botao",
  "formulario": "PaginaAtualizarObjetivos-module__l6S5pG__formulario",
  "input": "PaginaAtualizarObjetivos-module__l6S5pG__input",
  "objetivos": "PaginaAtualizarObjetivos-module__l6S5pG__objetivos",
  "titulo": "PaginaAtualizarObjetivos-module__l6S5pG__titulo",
});
}}),
"[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AtualizarObjetivos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AtualizarObjetivos() {
    _s();
    const [novoObjetivo, setNovoObjetivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id: '',
        titulo: '',
        descricao: '',
        resultadosChaves: []
    });
    // Função só para atualizar via PUT
    async function chamarAPIPutObjetivos() {
        const URL = `http://localhost:8080/objetivos/${novoObjetivo.id}`;
        try {
            const resp = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoObjetivo)
            });
            if (resp.status === 200 || resp.status === 201) {
                alert("Objetivo atualizado com sucesso!");
                setNovoObjetivo({
                    id: '',
                    titulo: '',
                    desricao: '',
                    resultadosChaves: ''
                }); // Limpando o conteúdo / Voltando o estado da novaIniciativa para como era antes (vazio)
                await chamarAPIGetObjetivos(); // Atualiza a lista do GET mas agora com o novo item adicionado 
            } else {
                console.error('Erro ao atualizar objetivo:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].objetivos,
                children: "Objetivos"
            }, void 0, false, {
                fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "formPutObjetivos",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formulario,
                onSubmit: (e)=>{
                    e.preventDefault();
                    chamarAPIPutObjetivos();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                        children: "Atualizar Objetivo"
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "id",
                        type: "number",
                        placeholder: "Digite o ID do Objetivo",
                        value: novoObjetivo.id_kr,
                        onChange: (e)=>setNovoObjetivo({
                                ...novoObjetivo,
                                id: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "titulo",
                        type: "text",
                        placeholder: "Digite o título",
                        value: novoObjetivo.titulo,
                        onChange: (e)=>setNovoObjetivo({
                                ...novoObjetivo,
                                titulo: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "descricao",
                        type: "text",
                        placeholder: "Digite a descrição",
                        value: novoObjetivo.descricao,
                        onChange: (e)=>setNovoObjetivo({
                                ...novoObjetivo,
                                descricao: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "resultadosChaves",
                        type: "text",
                        placeholder: "Digite o ID do resultado/s Chave",
                        value: novoObjetivo.iniciativas,
                        onChange: (e)=>setNovoObjetivo({
                                ...novoObjetivo,
                                resultadosChaves: e.target.value.split(',').map((id)=>Number(id.trim()))
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarObjetivos$2f$PaginaAtualizarObjetivos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botao,
                        children: "Atualizar"
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AtualizarObjetivos/PaginaAtualizarObjetivos.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(AtualizarObjetivos, "RDjw9/gLmROx0DWfKAz4rEsDRuc=");
_c = AtualizarObjetivos;
var _c;
__turbopack_context__.k.register(_c, "AtualizarObjetivos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_AtualizarObjetivos_a76387c7._.js.map