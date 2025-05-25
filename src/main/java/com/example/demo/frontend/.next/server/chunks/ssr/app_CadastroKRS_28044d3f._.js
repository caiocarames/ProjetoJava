module.exports = {

"[project]/app/CadastroKRS/PaginaCadastroKRS.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "KRS": "PaginaCadastroKRS-module__zhGIxG__KRS",
  "botao": "PaginaCadastroKRS-module__zhGIxG__botao",
  "formulario": "PaginaCadastroKRS-module__zhGIxG__formulario",
  "input": "PaginaCadastroKRS-module__zhGIxG__input",
  "titulo": "PaginaCadastroKRS-module__zhGIxG__titulo",
});
}}),
"[project]/app/CadastroKRS/PaginaCadastroKRS.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CadastroKRS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CadastroKRS/PaginaCadastroKRS.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function CadastroKRS() {
    // Estado para novo resultado chave
    const [novoResultadoChave, setNovoResultadoChave] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        descricao: "",
        titulo: "",
        objetivoId: "",
        iniciativas: []
    });
    // Função para postar novo resultado chave
    async function chamarAPIPostResultadoChave() {
        const URL = "http://localhost:8080/resultadosChave";
        try {
            const resp = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoResultadoChave)
            });
            if (resp.ok) {
                alert("Resultado Chave cadastrado com sucesso!");
                setNovoResultadoChave({
                    descricao: "",
                    meta: "",
                    objetivoId: "",
                    iniciativas: []
                });
                chamarAPIResultadosChave();
            } else {
                alert("Erro ao cadastrar Resultado Chave");
            }
        } catch (error) {
            console.error("Erro na requisição POST:", error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].KRS,
                children: "Resultados Chave"
            }, void 0, false, {
                fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "formPostResultadoChave",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formulario,
                onSubmit: (e)=>{
                    e.preventDefault();
                    chamarAPIPostResultadoChave();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titulo,
                        children: "Cadastrar Novo Resultado Chave"
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "descricao",
                        type: "text",
                        placeholder: "Digite a descrição",
                        value: novoResultadoChave.descricao,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                descricao: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "meta",
                        type: "text",
                        placeholder: "Digite a meta",
                        value: novoResultadoChave.meta,
                        onChange: (e)=>setNovoResultadoChave({
                                ...novoResultadoChave,
                                meta: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroKRS$2f$PaginaCadastroKRS$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botao,
                        children: "Cadastrar"
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/CadastroKRS/PaginaCadastroKRS.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_CadastroKRS_28044d3f._.js.map