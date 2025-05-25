(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_AtualizarIniciativas_0bff5b39._.js", {

"[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "botao": "PaginaAtualizarIniciativas-module__lGhHbq__botao",
  "formulario": "PaginaAtualizarIniciativas-module__lGhHbq__formulario",
  "iniciativas": "PaginaAtualizarIniciativas-module__lGhHbq__iniciativas",
  "input": "PaginaAtualizarIniciativas-module__lGhHbq__input",
  "titulo": "PaginaAtualizarIniciativas-module__lGhHbq__titulo",
});
}}),
"[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AtualizarIniciativas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AtualizarIniciativas() {
    _s();
    const [novaIniciativa, setNovaIniciativa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        id_iniciativas: '',
        titulo: '',
        descricao: '',
        porcentagem: ''
    });
    // Função só para atualizar via PUT
    async function chamarAPIPutIniciativas() {
        const URL = `http://localhost:8080/iniciativas/${novaIniciativa.id_iniciativas}`;
        try {
            const resp = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaIniciativa)
            });
            if (resp.status === 200 || resp.status === 201) {
                alert("Iniciativa atualizada com sucesso!");
                setNovaIniciativa({
                    titulo: '',
                    descricao: '',
                    porcentagem: ''
                }); // Limpando o conteúdo / Voltando o estado da novaIniciativa para como era antes (vazio)
                await chamarAPIGetIniciativas(); // Atualiza a lista do GET mas agora com o novo item adicionado 
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
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iniciativas,
                children: "Iniciativas"
            }, void 0, false, {
                fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "formPost",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formulario,
                onSubmit: (e)=>{
                    e.preventDefault();
                    chamarAPIPutIniciativas();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                        children: "Atualizar Iniciativa"
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        placeholder: "Digite o ID da iniciativa",
                        value: novaIniciativa.id_iniciativas,
                        onChange: (e)=>setNovaIniciativa({
                                ...novaIniciativa,
                                id_iniciativas: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "titulo",
                        type: "text",
                        placeholder: "Digite o título",
                        value: novaIniciativa.titulo,
                        onChange: (e)=>setNovaIniciativa({
                                ...novaIniciativa,
                                titulo: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "descricao",
                        type: "text",
                        placeholder: "Digite a descrição",
                        value: novaIniciativa.descricao,
                        onChange: (e)=>setNovaIniciativa({
                                ...novaIniciativa,
                                descricao: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "porcentagem",
                        type: "number",
                        placeholder: "Digite o numero da porcentagem de conclusão",
                        value: novaIniciativa.porcentagem,
                        onChange: (e)=>setNovaIniciativa({
                                ...novaIniciativa,
                                porcentagem: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AtualizarIniciativas$2f$PaginaAtualizarIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botao,
                        children: "Atualizar"
                    }, void 0, false, {
                        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AtualizarIniciativas/PaginaAtualizarIniciativas.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(AtualizarIniciativas, "wTguQKPoXmFBgKFyBw5YOBUbq9U=");
_c = AtualizarIniciativas;
var _c;
__turbopack_context__.k.register(_c, "AtualizarIniciativas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_AtualizarIniciativas_0bff5b39._.js.map