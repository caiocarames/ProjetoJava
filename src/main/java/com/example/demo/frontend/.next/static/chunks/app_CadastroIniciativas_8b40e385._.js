(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_CadastroIniciativas_8b40e385._.js", {

"[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "botao": "PaginaCadastroIniciativas-module__CQ38na__botao",
  "formulario": "PaginaCadastroIniciativas-module__CQ38na__formulario",
  "iniciativas": "PaginaCadastroIniciativas-module__CQ38na__iniciativas",
  "input": "PaginaCadastroIniciativas-module__CQ38na__input",
  "titulo": "PaginaCadastroIniciativas-module__CQ38na__titulo",
});
}}),
"[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CadastroIniciativas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CadastroIniciativas() {
    _s();
    const [novaIniciativa, setNovaIniciativa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        titulo: '',
        descricao: ''
    });
    // Função para chamar a API e postar as iniciativas(POST)
    async function chamarAPIPostIniciativas() {
        const URL = "http://localhost:8080/iniciativas";
        try {
            const resp = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaIniciativa)
            });
            if (resp.status === 200 || resp.status === 201) {
                alert("Iniciativa cadastrada com sucesso!");
                setNovaIniciativa({
                    titulo: '',
                    descricao: ''
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
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iniciativas,
                children: "Iniciativas"
            }, void 0, false, {
                fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "formPost",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formulario,
                onSubmit: (e)=>{
                    e.preventDefault();
                    chamarAPIPostIniciativas();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titulo,
                        children: "Cadastrar Nova Iniciativa"
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
                        lineNumber: 39,
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
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
                        lineNumber: 41,
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
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroIniciativas$2f$PaginaCadastroIniciativas$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botao,
                        children: "Cadastrar"
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/CadastroIniciativas/PaginaCadastroIniciativas.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(CadastroIniciativas, "87jVjEl7v5kJJH6z5DckbqXaYMc=");
_c = CadastroIniciativas;
var _c;
__turbopack_context__.k.register(_c, "CadastroIniciativas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_CadastroIniciativas_8b40e385._.js.map