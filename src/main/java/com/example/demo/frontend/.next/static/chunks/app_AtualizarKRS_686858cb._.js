(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_AtualizarKRS_686858cb._.js", {

"[project]/app/AtualizarKRS/PaginaAtualizarKRS.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "KRS": "PaginaAtualizarKRS-module__oQaZmq__KRS",
  "botao": "PaginaAtualizarKRS-module__oQaZmq__botao",
  "formulario": "PaginaAtualizarKRS-module__oQaZmq__formulario",
  "input": "PaginaAtualizarKRS-module__oQaZmq__input",
  "titulo": "PaginaAtualizarKRS-module__oQaZmq__titulo",
});
}}),
"[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AtualizarKRS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/AtualizarKRS/PaginaAtualizarKRS.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AtualizarKRS() {
    _s();
    const [novoResultadoChave, setNovoResultadoChave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id_kr: '',
        descricao: '',
        meta: '',
        objetivoId: '',
        iniciativas: []
    });
    const [idIniciativaDesassociar, setIdIniciativaDesassociar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Função só para atualizar via PUT
    async function chamarAPIPutKRS() {
        const URL = `http://localhost:8080/resultadosChave/${novoResultadoChave.id_kr}`;
        try {
            const resp = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novoResultadoChave)
            });
            if (resp.status === 200 || resp.status === 201) {
                alert("Resultado Chave atualizado com sucesso!");
                setNovoResultadoChave({
                    id_kr: '',
                    descricao: '',
                    meta: '',
                    objetivoId: '',
                    iniciativas: ''
                }); // Limpando o conteúdo / Voltando o estado da novaIniciativa para como era antes (vazio)
                await chamarAPIGetResultadosChave(); // Atualiza a lista do GET mas agora com o novo item adicionado 
            } else {
                console.error('Erro ao cadastrar iniciativas:', resp.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].KRS,
                children: "Resultados Chave"
            }, void 0, false, {
                fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "formPutResultadoChave",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formulario,
                onSubmit: (e)=>{
                    e.preventDefault();
                    chamarAPIPutKRS();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                        children: "Atualizar Resultado Chave"
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "id_kr",
                        type: "number",
                        placeholder: "Digite o ID do Resultado Chave",
                        value: novoResultadoChave.id_kr,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                id_kr: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "descricao",
                        type: "text",
                        placeholder: "Digite a descrição",
                        value: novoResultadoChave.descricao,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                descricao: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "meta",
                        type: "text",
                        placeholder: "Digite a meta",
                        value: novoResultadoChave.meta,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                meta: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "objetivo",
                        type: "text",
                        placeholder: "Digite o objetivo",
                        value: novoResultadoChave.objetivoId,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                objetivoId: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "iniciativas",
                        type: "text",
                        placeholder: "Digite o ID da iniciativa/s",
                        value: novoResultadoChave.iniciativas,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                iniciativas: e.target.value.split(',').map((id)=>Number(id.trim()))
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarKRS$2f$PaginaAtualizarKRS$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botao,
                        children: "Atualizar"
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AtualizarKRS/PaginaAtualizarKRS.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(AtualizarKRS, "FAuNJN4LrgVlBGMNcY7lf5wnsnk=");
_c = AtualizarKRS;
var _c;
__turbopack_context__.k.register(_c, "AtualizarKRS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_AtualizarKRS_686858cb._.js.map