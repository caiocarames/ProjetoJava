module.exports = {

"[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "botao": "PaginaCadastroObjetivos-module__a9HiBG__botao",
  "formulario": "PaginaCadastroObjetivos-module__a9HiBG__formulario",
  "input": "PaginaCadastroObjetivos-module__a9HiBG__input",
  "objetivos": "PaginaCadastroObjetivos-module__a9HiBG__objetivos",
  "titulo": "PaginaCadastroObjetivos-module__a9HiBG__titulo",
});
}}),
"[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CadastroObjetivos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function CadastroObjetivos() {
    // Estado para novo objetivo
    const [novoObjetivo, setNovoObjetivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        titulo: "",
        descricao: "",
        porcentagem_conclusao_obj: 0,
        resultadosChaves: []
    });
    // Função para postar novo Objetivo
    async function chamarAPIPostObjetivos() {
        const URL = "http://localhost:8080/objetivos";
        try {
            const resp = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoObjetivo)
            });
            if (resp.ok) {
                alert("Objetivo cadastrado com sucesso!");
                setNovoObjetivo({
                    titulo: "",
                    descricao: "",
                    porcentagem_conclusao_obj: 0,
                    resultadosChaves: []
                });
                chamarAPIObjetivo();
            } else {
                alert("Erro ao adicionar objetivo");
            }
        } catch (error) {
            console.error("Erro na requisição POST:", error);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fundo",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].objetivos,
                children: "Objetivos"
            }, void 0, false, {
                fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                id: "formPostObjetivos",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formulario,
                onSubmit: (e)=>{
                    e.preventDefault();
                    chamarAPIPostObjetivos();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titulo,
                        children: "Cadastrar Novo Objetivo"
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "titulo",
                        type: "text",
                        placeholder: "Digite o título",
                        value: novoObjetivo.titulo,
                        onChange: (e)=>setNovoObjetivo({
                                ...novoObjetivo,
                                titulo: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "descricao",
                        type: "text",
                        placeholder: "Digite a descrição",
                        value: novoObjetivo.descricao,
                        onChange: (e)=>setNovoObjetivo({
                                ...novoObjetivo,
                                descricao: e.target.value
                            }),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$CadastroObjetivos$2f$PaginaCadastroObjetivos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botao,
                        children: "Cadastrar"
                    }, void 0, false, {
                        fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/CadastroObjetivos/PaginaCadastroObjetivos.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_CadastroObjetivos_c29c6f8b._.js.map