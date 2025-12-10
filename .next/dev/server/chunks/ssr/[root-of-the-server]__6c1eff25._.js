module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function ScrollBar({ className, orientation = 'vertical', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex touch-none p-px transition-colors select-none', orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent', orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrizesList",
    ()=>PrizesList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function PrizesList({ prizes, selectedPrize, onSelectPrize, onRemovePrize, onAddParticipant, onRemoveParticipant, onReset, onResetPrizeWinners, onUpdateWinnerSlots, participantsHistory = [], onRemoveHistoryName, onClearHistory, onEditHistoryName }) {
    const [expandedPrizeId, setExpandedPrizeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [participantName, setParticipantName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [editingWinnerSlots, setEditingWinnerSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [editingHistoryIndex, setEditingHistoryIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingHistoryValue, setEditingHistoryValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showParticipantsHistory, setShowParticipantsHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showWinnersHistory, setShowWinnersHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAddParticipant = (prizeId, e)=>{
        e.preventDefault();
        if (participantName.trim()) {
            onAddParticipant(prizeId, participantName.trim());
            setParticipantName("");
        }
    };
    const toggleExpand = (prizeId)=>{
        setExpandedPrizeId(expandedPrizeId === prizeId ? null : prizeId);
    };
    const handleFileImport = async (prizeId, e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        try {
            if (fileExtension === "xlsx" || fileExtension === "xls") {
                const data = await file.arrayBuffer();
                const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](data, {
                    type: "array"
                });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(firstSheet, {
                    header: 1
                });
                const names = [];
                // Loop through each row and each cell properly
                jsonData.forEach((row)=>{
                    row.forEach((cell)=>{
                        if (typeof cell === "string" && cell.trim()) {
                            names.push(cell.trim());
                        } else if (typeof cell === "number") {
                            names.push(cell.toString());
                        }
                    });
                });
                // Log the names to see what is being captured from the file
                console.log("Names from the Excel file:", names);
                // Add all participants correctly
                names.forEach((name)=>{
                    onAddParticipant(prizeId, name);
                });
            } else if (fileExtension === "csv" || fileExtension === "txt") {
                const text = await file.text();
                const names = text.split(/[\n,;]/).map((name)=>name.trim()).filter((name)=>name.length > 0);
                console.log("Names from the text file:", names); // Log to see the names
                // Add participants correctly
                names.forEach((name)=>{
                    onAddParticipant(prizeId, name);
                });
            }
        } catch (error) {
            console.error("Error importing file:", error);
            alert("Error importing file. Please make sure the file format is correct.");
        }
        // Reset the input file after processing
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const triggerFileImport = (prizeId)=>{
        if (fileInputRef.current) {
            fileInputRef.current.dataset.prizeId = prizeId;
            fileInputRef.current.click();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".csv,.txt,.xlsx,.xls",
                className: "hidden",
                onChange: (e)=>{
                    const prizeId = e.target.dataset.prizeId;
                    if (prizeId) {
                        handleFileImport(prizeId, e);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "Prize Categories"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    prizes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: onReset,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            "Reset All"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: [
                    participantsHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg overflow-hidden bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/50 border-b px-4 py-3 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: ()=>setShowParticipantsHistory(!showParticipantsHistory),
                                        className: "font-semibold text-sm w-full justify-start",
                                        children: [
                                            showParticipantsHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                lineNumber: 169,
                                                columnNumber: 44
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                lineNumber: 169,
                                                columnNumber: 77
                                            }, this),
                                            "Participants History"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    showParticipantsHistory && onClearHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: ()=>onClearHistory(),
                                        className: "text-xs",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            showParticipantsHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "h-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 p-4",
                                    children: participantsHistory.map((name, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md transition-colors",
                                            children: editingHistoryIndex === i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: editingHistoryValue,
                                                        onChange: (e)=>setEditingHistoryValue(e.target.value),
                                                        className: "text-sm",
                                                        placeholder: "Edit name..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "outline",
                                                                onClick: ()=>{
                                                                    if (onEditHistoryName) onEditHistoryName(name, editingHistoryValue.trim());
                                                                    setEditingHistoryIndex(null);
                                                                    setEditingHistoryValue("");
                                                                },
                                                                className: "h-7 w-7 p-0",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 195,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "ghost",
                                                                onClick: ()=>{
                                                                    setEditingHistoryIndex(null);
                                                                    setEditingHistoryValue("");
                                                                },
                                                                className: "h-7 w-7 p-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                lineNumber: 187,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium truncate flex-1",
                                                        children: name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "ghost",
                                                                onClick: ()=>selectedPrize && onAddParticipant(selectedPrize.id, name),
                                                                disabled: !selectedPrize,
                                                                className: "h-7 w-7 p-0",
                                                                title: "Add to selected prize",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "ghost",
                                                                onClick: ()=>{
                                                                    setEditingHistoryIndex(i);
                                                                    setEditingHistoryValue(name);
                                                                },
                                                                className: "h-7 w-7 p-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 237,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 29
                                                            }, this),
                                                            onRemoveHistoryName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "ghost",
                                                                onClick: ()=>onRemoveHistoryName(name),
                                                                className: "h-7 w-7 p-0 hover:text-destructive",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, i, false, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 182,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this),
                    prizes.some((p)=>p.winners.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg overflow-hidden bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/50 border-b px-4 py-3 flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: ()=>setShowWinnersHistory(!showWinnersHistory),
                                    className: "font-semibold text-sm w-full justify-start",
                                    children: [
                                        showWinnersHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 270,
                                            columnNumber: 39
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 270,
                                            columnNumber: 72
                                        }, this),
                                        "Winners History"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                    lineNumber: 264,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            showWinnersHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "h-64",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 p-4",
                                    children: prizes.flatMap((prize)=>prize.winners.map((winner, winnerIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between bg-muted/30 hover:bg-muted/50 px-3 py-2 rounded-md transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium truncate",
                                                            children: winner.winnerName
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 284,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: [
                                                                "Won: ",
                                                                prize.name
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 25
                                                }, this)
                                            }, `${prize.id}-${winnerIndex}`, false, {
                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                lineNumber: 279,
                                                columnNumber: 23
                                            }, this)))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            prizes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12 text-muted-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No prizes yet. Create your first prize above!"
                }, void 0, false, {
                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                    lineNumber: 299,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "h-[500px] pr-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: prizes.map((prize)=>{
                        const isExpanded = expandedPrizeId === prize.id;
                        const isSelected = selectedPrize?.id === prize.id;
                        const remainingSlots = prize.winnerSlots - prize.winners.length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border rounded-lg p-4 transition-all", isSelected && "border-primary bg-primary/5"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 flex-1 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: isSelected ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>onSelectPrize(prize),
                                                    title: "Click to select this prize and auto-load all participants to the wheel",
                                                    children: "Select Prize"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-lg",
                                                    children: prize.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: "secondary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "h-3 w-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 25
                                                        }, this),
                                                        prize.participants.length
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                    variant: remainingSlots === 0 ? "destructive" : "default",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            className: "h-3 w-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 330,
                                                            columnNumber: 25
                                                        }, this),
                                                        prize.winners.length,
                                                        "/",
                                                        prize.winnerSlots,
                                                        " won"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 329,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 315,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: ()=>toggleExpand(prize.id),
                                                    children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 39
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 67
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    onClick: ()=>onRemovePrize(prize.id),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-4 w-4 text-destructive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 334,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                    lineNumber: 314,
                                    columnNumber: 19
                                }, this),
                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-3 border-t pt-3",
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-primary font-semibold",
                                                    children: "✨ Auto-loaded participants"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-muted-foreground text-xs mt-1",
                                                    children: [
                                                        "All global participants (",
                                                        prize.participants.length,
                                                        " total) are automatically loaded on the wheel. You can still add more manually below."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 347,
                                            columnNumber: 25
                                        }, this),
                                        onUpdateWinnerSlots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-sm font-semibold",
                                                    children: "How Many Can Win?"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                            type: "number",
                                                            min: Math.max(1, prize.winners.length),
                                                            max: prize.participants.length,
                                                            placeholder: prize.winnerSlots.toString(),
                                                            value: editingWinnerSlots[prize.id] ?? prize.winnerSlots,
                                                            onChange: (e)=>{
                                                                const value = e.target.value;
                                                                const numValue = Number.parseInt(value);
                                                                if (value === "" || numValue >= Math.max(1, prize.winners.length) && numValue <= prize.participants.length) {
                                                                    setEditingWinnerSlots({
                                                                        ...editingWinnerSlots,
                                                                        [prize.id]: value
                                                                    });
                                                                }
                                                            },
                                                            onBlur: (e)=>{
                                                                const value = e.target.value;
                                                                const numValue = Number.parseInt(value);
                                                                if (value && numValue >= Math.max(1, prize.winners.length) && numValue <= prize.participants.length) {
                                                                    onUpdateWinnerSlots(prize.id, numValue);
                                                                    setEditingWinnerSlots({
                                                                        ...editingWinnerSlots,
                                                                        [prize.id]: ""
                                                                    });
                                                                } else {
                                                                    setEditingWinnerSlots({
                                                                        ...editingWinnerSlots,
                                                                        [prize.id]: ""
                                                                    });
                                                                }
                                                            },
                                                            className: "text-lg font-semibold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            size: "sm",
                                                            variant: "outline",
                                                            onClick: ()=>{
                                                                const value = editingWinnerSlots[prize.id] || prize.winnerSlots.toString();
                                                                const numValue = Number.parseInt(value);
                                                                if (numValue >= Math.max(1, prize.winners.length) && numValue <= prize.participants.length) {
                                                                    onUpdateWinnerSlots(prize.id, numValue);
                                                                    setEditingWinnerSlots({
                                                                        ...editingWinnerSlots,
                                                                        [prize.id]: ""
                                                                    });
                                                                }
                                                            },
                                                            children: "Update"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: [
                                                        "Current: ",
                                                        prize.winners.length,
                                                        "/",
                                                        prize.winnerSlots,
                                                        " won | Available: ",
                                                        prize.participants.length,
                                                        " participants"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 356,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: (e)=>handleAddParticipant(prize.id, e),
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    placeholder: "Enter participant name",
                                                    value: participantName,
                                                    onChange: (e)=>setParticipantName(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    type: "submit",
                                                    size: "sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 406,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full bg-transparent",
                                            onClick: ()=>triggerFileImport(prize.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 25
                                                }, this),
                                                "Import Names (Excel/CSV/TXT)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 417,
                                            columnNumber: 23
                                        }, this),
                                        prize.winners.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 bg-primary/5 p-3 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-semibold text-sm flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 431,
                                                                    columnNumber: 31
                                                                }, this),
                                                                "Winners (",
                                                                prize.winners.length,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 430,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: ()=>onResetPrizeWinners(prize.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                                    className: "h-3 w-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 435,
                                                                    columnNumber: 31
                                                                }, this),
                                                                "Reset"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 434,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: prize.winners.map((winner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-background px-3 py-2 rounded text-sm",
                                                            children: winner.winnerName
                                                        }, index, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 31
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 428,
                                            columnNumber: 25
                                        }, this),
                                        prize.participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-sm",
                                                    children: "Participants"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 27
                                                }, this),
                                                prize.participants.map((participant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-muted/50 px-3 py-2 rounded",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm",
                                                                children: participant
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "icon",
                                                                className: "h-6 w-6",
                                                                onClick: ()=>onRemoveParticipant(prize.id, index),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                    lineNumber: 461,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 29
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                            lineNumber: 450,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                                    lineNumber: 345,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, prize.id, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                            lineNumber: 310,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpinWheel",
    ()=>SpinWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Wheel colors similar to wheelofnames.com - vibrant and alternating
const wheelColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#F7DC6F",
    "#BB8FCE",
    "#85C1E2"
];
function SpinWheel({ selectedPrize, isSpinning, onSpin, onPickAll, winner, rotation }) {
    const canSpin = selectedPrize && selectedPrize.participants.length > 0 && !isSpinning;
    const remainingSlots = selectedPrize ? selectedPrize.winnerSlots - selectedPrize.winners.length : 0;
    // Play spinning sound when wheel starts spinning
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isSpinning) {
            playSpinSound();
        }
    }, [
        isSpinning
    ]);
    const playSpinSound = ()=>{
        // Create a simple spinning wheel sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const gainNode = audioContext.createGain();
        const oscillator = audioContext.createOscillator();
        // Connect oscillator to gain node and then to audio context
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        // Set oscillator type for a spinning sound effect (white noise or low-frequency sweep)
        oscillator.type = 'sine'; // Change to 'square' for sharper sounds, 'sine' is smoother
        // Frequency sweep for spinning effect
        const now = audioContext.currentTime;
        oscillator.frequency.setValueAtTime(200, now); // Low frequency for start of the "whoosh"
        oscillator.frequency.exponentialRampToValueAtTime(800, now + 0.5); // Increase frequency gradually
        // Increase the volume for louder sound (1.0 is maximum)
        gainNode.gain.setValueAtTime(1.0, now); // Loud start
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 2.0); // Slow fade-out
        // Start the sound effect and stop after 2 seconds
        oscillator.start(now);
        oscillator.stop(now + 2.0);
    };
    const playWinSound = ()=>{
        // Play a celebratory sound when winner is announced
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioContext.currentTime;
        const notes = [
            523.25,
            659.25,
            783.99
        ] // C5, E5, G5 (celebratory chord)
        ;
        notes.forEach((frequency, index)=>{
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            oscillator.frequency.setValueAtTime(frequency, now);
            gainNode.gain.setValueAtTime(0.5, now + index * 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.3);
            oscillator.start(now + index * 0.1);
            oscillator.stop(now + index * 0.1 + 0.3);
        });
    };
    // Play win sound when a winner is announced
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (winner) {
            playWinSound();
        }
    }, [
        winner
    ]);
    const canPickAll = canSpin && remainingSlots > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: "The Wheel of Fortune"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    selectedPrize ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    "Spinning for: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "text-foreground",
                                        children: selectedPrize.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-primary font-semibold",
                                children: [
                                    selectedPrize.participants.length,
                                    " participant",
                                    selectedPrize.participants.length !== 1 ? "s" : "",
                                    " on the wheel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            remainingSlots > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-muted-foreground",
                                children: [
                                    remainingSlots,
                                    " winner",
                                    remainingSlots !== 1 ? "s" : "",
                                    " remaining"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Select a prize category to automatically load all participants!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-0 h-0 border-l-[20px] border-r-[20px] border-t-[30px] border-l-transparent border-r-transparent border-t-foreground drop-shadow-lg"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-md aspect-square",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full h-full rounded-full border-8 border-foreground shadow-2xl overflow-hidden relative", isSpinning && "spin-animation"),
                            style: isSpinning ? {
                                // @ts-ignore
                                "--spin-rotation": `${rotation ?? 3600 + Math.random() * 360}deg`,
                                "--spin-duration": "4s"
                            } : undefined,
                            children: [
                                !selectedPrize || selectedPrize.participants.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-muted",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground text-center px-8",
                                        children: !selectedPrize ? "Select a prize category to automatically load all global participants!" : "Add or import participants in the Global Participants section above!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: selectedPrize.participants.map((participant, index)=>{
                                        const totalParticipants = selectedPrize.participants.length;
                                        const angle = 360 / totalParticipants * index;
                                        const segmentAngle = 360 / totalParticipants;
                                        const segmentColor = wheelColors[index % wheelColors.length];
                                        const startAngle = (angle - 90) * (Math.PI / 180);
                                        const endAngle = (angle + segmentAngle - 90) * (Math.PI / 180);
                                        // Calculate clip path points
                                        const x1 = 50 + 50 * Math.cos(startAngle);
                                        const y1 = 50 + 50 * Math.sin(startAngle);
                                        const x2 = 50 + 50 * Math.cos(endAngle);
                                        const y2 = 50 + 50 * Math.sin(endAngle);
                                        // Calculate optimal font size - make it bigger and more readable
                                        const segmentRadius = 50 // percentage from center
                                        ;
                                        const nameLength = participant.length;
                                        // Dynamic font sizing based on participant count and name length
                                        let fontSize = "1.8rem";
                                        if (totalParticipants > 40) {
                                            fontSize = nameLength > 10 ? "0.9rem" : "1rem";
                                        } else if (totalParticipants > 35) {
                                            fontSize = nameLength > 12 ? "1rem" : "1.1rem";
                                        } else if (totalParticipants > 30) {
                                            fontSize = nameLength > 15 ? "1.2rem" : "1.3rem";
                                        } else if (totalParticipants > 25) {
                                            fontSize = nameLength > 15 ? "1.3rem" : "1.4rem";
                                        } else if (totalParticipants > 20) {
                                            fontSize = nameLength > 15 ? "1.4rem" : "1.5rem";
                                        } else if (totalParticipants > 15) {
                                            fontSize = nameLength > 15 ? "1.5rem" : "1.7rem";
                                        } else if (totalParticipants > 10) {
                                            fontSize = nameLength > 15 ? "1.6rem" : "1.8rem";
                                        } else {
                                            fontSize = nameLength > 15 ? "1.7rem" : "2rem";
                                        }
                                        // Show full name or truncate if extremely long
                                        const displayName = participant.length > 20 ? participant.substring(0, 17) + "..." : participant;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 origin-center",
                                                    style: {
                                                        backgroundColor: segmentColor,
                                                        clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
                                                        zIndex: 1
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 origin-center",
                                                    style: {
                                                        zIndex: 10
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "absolute inset-0 w-full h-full",
                                                        viewBox: "0 0 100 100",
                                                        style: {
                                                            zIndex: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    id: `arc-${index}`,
                                                                    d: `M ${50 + 32 * Math.cos(startAngle)},${50 + 32 * Math.sin(startAngle)} A 32,32 0 0,1 ${50 + 32 * Math.cos(endAngle)},${50 + 32 * Math.sin(endAngle)}`,
                                                                    fill: "none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                style: {
                                                                    fontSize: "4px",
                                                                    fontWeight: "900",
                                                                    fill: "white",
                                                                    textAnchor: "middle",
                                                                    paintOrder: "stroke",
                                                                    stroke: "rgba(0,0,0,0.9)",
                                                                    strokeWidth: "0.15px",
                                                                    letterSpacing: "0.05em",
                                                                    fontFamily: "system-ui, -apple-system, sans-serif"
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                                                                    href: `#arc-${index}`,
                                                                    startOffset: "50%",
                                                                    textAnchor: "middle",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                                                                            children: participant
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                                            lineNumber: 252,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        displayName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 origin-center",
                                                    style: {
                                                        transform: `rotate(${angle}deg)`,
                                                        borderLeft: "2px solid rgba(255,255,255,0.5)",
                                                        zIndex: 5
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, `segment-${index}-${participant}`, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                            lineNumber: 202,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-foreground rounded-full border-4 border-background shadow-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-primary rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            selectedPrize && selectedPrize.participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-center flex-1",
                            children: [
                                "Participants on Wheel (",
                                selectedPrize.participants.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 justify-center max-h-40 overflow-y-auto p-3 bg-muted/30 rounded-lg border border-muted/50",
                        children: [
                            ...selectedPrize.participants
                        ].sort((a, b)=>a.localeCompare(b)).map((participant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2.5 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30 whitespace-nowrap",
                                title: participant,
                                children: participant.length > 12 ? participant.substring(0, 10) + '...' : participant
                            }, index, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                lineNumber: 292,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "lg",
                        onClick: onSpin,
                        disabled: !canSpin,
                        className: "text-lg px-8 py-6 font-bold w-full",
                        children: isSpinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-5 w-5 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                "Spinning..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                    className: "h-5 w-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                "Spin for One Winner"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    canPickAll && remainingSlots > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        size: "lg",
                        onClick: onPickAll,
                        disabled: !canPickAll || isSpinning,
                        variant: "outline",
                        className: "text-lg px-8 py-6 font-bold w-full",
                        children: isSpinning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "h-5 w-5 mr-2 animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                    lineNumber: 329,
                                    columnNumber: 17
                                }, this),
                                "Picking Winners..."
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "h-5 w-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                                    lineNumber: 334,
                                    columnNumber: 17
                                }, this),
                                "Pick All ",
                                remainingSlots,
                                " Winners"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
                                lineNumber: 48,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
                        lineNumber: 47,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
        lineNumber: 74,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx",
        lineNumber: 103,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/Desktop/v0-random-picker-wheel/components/confetti.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Confetti",
    ()=>Confetti
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Confetti() {
    const [confetti, setConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const colors = [
            "#FF6B6B",
            "#4ECDC4",
            "#45B7D1",
            "#FFA07A",
            "#98D8C8",
            "#F7DC6F",
            "#BB8FCE",
            "#FFD93D"
        ];
        const newConfetti = Array.from({
            length: 80
        }, (_, i)=>({
                id: i,
                x: Math.random() * 100,
                y: -5 - Math.random() * 10,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                velocityX: (Math.random() - 0.5) * 3,
                velocityY: Math.random() * 4 + 3,
                size: Math.random() * 4 + 3
            }));
        setConfetti(newConfetti);
        const interval = setInterval(()=>{
            setConfetti((prev)=>prev.map((piece)=>({
                        ...piece,
                        y: piece.y + piece.velocityY * 0.5,
                        x: piece.x + piece.velocityX * 0.5,
                        rotation: piece.rotation + 8
                    })).filter((piece)=>piece.y < 120));
        }, 30);
        // Auto-cleanup after 5 seconds
        const timeout = setTimeout(()=>{
            setConfetti([]);
        }, 5000);
        return ()=>{
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);
    if (confetti.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-[60] overflow-hidden",
        children: confetti.map((piece)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute rounded-sm",
                style: {
                    left: `${piece.x}%`,
                    top: `${piece.y}%`,
                    width: `${piece.size}px`,
                    height: `${piece.size}px`,
                    backgroundColor: piece.color,
                    transform: `rotate(${piece.rotation}deg)`,
                    boxShadow: `0 0 ${piece.size}px ${piece.color}`
                }
            }, piece.id, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/confetti.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/confetti.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WinnerDisplay",
    ()=>WinnerDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$confetti$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/confetti.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function WinnerDisplay({ winner, onClose, onRemove }) {
    const [showConfetti, setShowConfetti] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const winners = Array.isArray(winner) ? winner : [
        winner
    ];
    const isMultipleWinners = winners.length > 1;
    const handleDownloadResults = (format)=>{
        const currentWinner = winners[0];
        const dateStr = currentWinner.timestamp.toLocaleDateString();
        const timeStr = currentWinner.timestamp.toLocaleTimeString();
        const fullDateTime = currentWinner.timestamp.toLocaleString();
        if (format === "txt") {
            const result = `🎉 WINNER ANNOUNCEMENT 🎉
        
  Winner Name: ${currentWinner.winnerName}
  Prize: ${currentWinner.prizeName}
  Date: ${dateStr}
  Time: ${timeStr}
  Full Timestamp: ${fullDateTime}

  Congratulations to the winner!`;
            const blob = new Blob([
                result
            ], {
                type: "text/plain"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `winner-${currentWinner.prizeName.replace(/\s+/g, "-")}-${currentWinner.timestamp.toISOString().split("T")[0]}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else if (format === "excel") {
            const data = [
                [
                    "Random Picker - Winner Results"
                ],
                [],
                [
                    "Winner Name",
                    currentWinner.winnerName
                ],
                [
                    "Prize",
                    currentWinner.prizeName
                ],
                [
                    "Date",
                    dateStr
                ],
                [
                    "Time",
                    timeStr
                ],
                [
                    "Full Timestamp",
                    fullDateTime
                ]
            ];
            const ws = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(data);
            ws["!cols"] = [
                {
                    width: 20
                },
                {
                    width: 30
                }
            ];
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "Winner");
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, `winner-${currentWinner.prizeName.replace(/\s+/g, "-")}-${currentWinner.timestamp.toISOString().split("T")[0]}.xlsx`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showConfetti && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$confetti$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Confetti"], {}, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                lineNumber: 79,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: true,
                onOpenChange: (open)=>{
                    if (!open) {
                        setShowConfetti(false);
                        onClose();
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: `${isMultipleWinners ? "sm:max-w-2xl" : "sm:max-w-md"} bg-gray-800 text-white border-gray-700 p-0 overflow-hidden`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "bg-green-600 text-white p-4 flex flex-row items-center justify-between rounded-t-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-xl font-bold m-0",
                                    children: isMultipleWinners ? `We have ${winners.length} winners!` : "We have a winner!"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowConfetti(false);
                                        onClose();
                                    },
                                    className: "text-white hover:text-gray-200 transition-colors rounded-sm opacity-70 hover:opacity-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        isMultipleWinners ? // Multiple winners - show in list format like All Winners List
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 bg-gray-800 max-h-[500px] overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: winners.map((w, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative bg-gradient-to-r from-gray-700/60 to-gray-700/40 border border-gray-600/50 rounded-xl px-5 py-4 hover:from-gray-700/80 hover:to-gray-700/60 hover:border-green-500/30 hover:shadow-md transition-all duration-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/20 text-white font-bold text-base flex-shrink-0 border-2 border-green-500/40 shadow-sm",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col flex-1 min-w-0 gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-lg text-white truncate",
                                                                children: w.winnerName
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-sm",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-500/20 text-green-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium truncate",
                                                                    children: [
                                                                        "Won: ",
                                                                        w.prizeName
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                                    lineNumber: 124,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col items-end flex-shrink-0 ml-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-medium text-gray-400 whitespace-nowrap",
                                                            children: w.timestamp.toLocaleDateString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 whitespace-nowrap",
                                                            children: w.timestamp.toLocaleTimeString()
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                            lineNumber: 111,
                                            columnNumber: 23
                                        }, this)
                                    }, `${w.winnerName}-${w.timestamp.getTime()}-${index}`, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                        lineNumber: 107,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                            lineNumber: 104,
                            columnNumber: 15
                        }, this) : // Single winner - show large display
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 text-center bg-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl font-bold text-white mb-2",
                                    children: winners[0].winnerName
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                    lineNumber: 146,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm",
                                    children: [
                                        "Won: ",
                                        winners[0].prizeName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                            lineNumber: 145,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "bg-gray-800 p-4 flex flex-row justify-end gap-2 rounded-b-lg border-t border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>{
                                        setShowConfetti(false);
                                        onClose();
                                    },
                                    className: "bg-gray-700 text-white border-gray-600 hover:bg-gray-600",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this),
                                onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>{
                                        setShowConfetti(false);
                                        onRemove();
                                        onClose();
                                    },
                                    className: "bg-blue-600 text-white hover:bg-blue-700",
                                    children: "Remove"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                            lineNumber: 155,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WinnersList",
    ()=>WinnersList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
"use client";
;
;
;
;
function WinnersList({ prizes }) {
    // Consolidate all winners into one list, sorted by timestamp (newest first)
    const allWinners = prizes.flatMap((prize)=>prize.winners.map((winner)=>({
                ...winner,
                prizeName: prize.name
            }))).sort((a, b)=>b.timestamp.getTime() - a.timestamp.getTime());
    if (allWinners.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
        className: "p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-primary/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold",
                                        children: "All Winners List"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            allWinners.length,
                                            " winner",
                                            allWinners.length !== 1 ? "s" : "",
                                            " total"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                    className: "h-[350px] pr-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: allWinners.map((winner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative bg-gradient-to-r from-muted/60 to-muted/40 border border-border/50 rounded-xl px-5 py-4 hover:from-muted/80 hover:to-muted/60 hover:border-primary/30 hover:shadow-md transition-all duration-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/20 text-primary font-bold text-base flex-shrink-0 border-2 border-primary/40 shadow-sm",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col flex-1 min-w-0 gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-lg text-foreground truncate",
                                                        children: winner.winnerName
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 px-2 py-1 rounded-md bg-primary/10 text-primary",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                className: "h-3.5 w-3.5 flex-shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                                lineNumber: 62,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-medium truncate",
                                                                children: winner.prizeName
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                                lineNumber: 63,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-end flex-shrink-0 ml-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-muted-foreground whitespace-nowrap",
                                                    children: winner.timestamp.toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-muted-foreground whitespace-nowrap",
                                                    children: winner.timestamp.toLocaleTimeString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                    lineNumber: 49,
                                    columnNumber: 17
                                }, this)
                            }, `${winner.winnerName}-${winner.timestamp.getTime()}-${index}`, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SetupManager",
    ()=>SetupManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function SetupManager({ participants, onAddParticipant, onRemoveParticipant, onImportParticipants, onAddPrize, prizeCount }) {
    const [participantName, setParticipantName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [prizeName, setPrizeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [winnerSlots, setWinnerSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleAddParticipant = (e)=>{
        e.preventDefault();
        if (participantName.trim()) {
            onAddParticipant(participantName.trim());
            setParticipantName("");
        }
    };
    const handleAddPrize = (e)=>{
        e.preventDefault();
        const slots = Number.parseInt(winnerSlots);
        if (prizeName.trim() && slots > 0) {
            onAddPrize(prizeName.trim(), slots);
            setPrizeName("");
            setWinnerSlots("1");
        }
    };
    const handleFileImport = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const fileExtension = file.name.split(".").pop()?.toLowerCase();
        try {
            if (fileExtension === "xlsx" || fileExtension === "xls") {
                const data = await file.arrayBuffer();
                const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["read"](data, {
                    type: "array"
                });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(firstSheet, {
                    header: 1
                });
                const names = [];
                jsonData.forEach((row)=>{
                    row.forEach((cell)=>{
                        if (typeof cell === "string" && cell.trim()) {
                            names.push(cell.trim());
                        } else if (typeof cell === "number") {
                            names.push(cell.toString());
                        }
                    });
                });
                onImportParticipants(names);
            } else if (fileExtension === "csv" || fileExtension === "txt") {
                const text = await file.text();
                const names = text.split(/[\n,;]/).map((name)=>name.trim()).filter((name)=>name.length > 0);
                onImportParticipants(names);
            }
        } catch (error) {
            console.error("Error importing file:", error);
            alert("Error importing file. Please make sure the file format is correct.");
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold",
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "h-5 w-5 text-primary"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold",
                                    children: "Add Participants"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    children: participants.length
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddParticipant,
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: "Enter participant name",
                                value: participantName,
                                onChange: (e)=>setParticipantName(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                size: "sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileInputRef,
                                type: "file",
                                accept: ".csv,.txt,.xlsx,.xls",
                                className: "hidden",
                                onChange: handleFileImport
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                size: "sm",
                                className: "w-full",
                                onClick: ()=>fileInputRef.current?.click(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    "Import Names (Excel/CSV/TXT)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-semibold",
                                children: "Participant List"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                className: "h-[150px] border rounded-lg p-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: participants.map((participant, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-muted/50 px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm",
                                                    children: participant
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-6 w-6",
                                                    onClick: ()=>onRemoveParticipant(index),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-3 w-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this),
                    participants.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground text-center py-4",
                        children: "Add or import participant names to get started!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            participants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-border"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "h-4 w-4 text-muted-foreground"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-border"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold",
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                className: "h-5 w-5 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold",
                                children: "Create Prize"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddPrize,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "prize",
                                        children: "Prize Name"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "prize",
                                        type: "text",
                                        placeholder: "e.g., Grand Prize, First Place, iPad Pro",
                                        value: prizeName,
                                        onChange: (e)=>setPrizeName(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "winners",
                                        children: "How Many Can Win?"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "winners",
                                        type: "number",
                                        min: "1",
                                        max: participants.length || undefined,
                                        placeholder: "Enter number (e.g., 5)",
                                        value: winnerSlots,
                                        onChange: (e)=>{
                                            const value = e.target.value;
                                            const numValue = Number.parseInt(value);
                                            if (value === "" || numValue > 0 && (!participants.length || numValue <= participants.length)) {
                                                setWinnerSlots(value);
                                            }
                                        },
                                        className: "text-lg font-semibold"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: participants.length > 0 ? `Set how many of the ${participants.length} participants can win this prize` : "Add participants first to set the maximum"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    participants.length > 0 && winnerSlots && Number.parseInt(winnerSlots) > participants.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-destructive",
                                        children: [
                                            "Cannot exceed ",
                                            participants.length,
                                            " participants"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                className: "w-full",
                                size: "lg",
                                disabled: !prizeName.trim() || !winnerSlots || Number.parseInt(winnerSlots) < 1 || participants.length === 0,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    "Create Prize & Ready to Spin"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    prizeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-foreground",
                                children: prizeCount
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            " prize",
                            prizeCount !== 1 ? "s" : "",
                            " created"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                        lineNumber: 245,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RandomPicker",
    ()=>RandomPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$prizes$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/prizes-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$spin$2d$wheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/spin-wheel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$winner$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/winner-display.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$winners$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/winners-list.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$setup$2d$manager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/setup-manager.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/xlsx/xlsx.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function RandomPicker() {
    const [prizes, setPrizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPrize, setSelectedPrize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [winner, setWinner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSpinning, setIsSpinning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [spinRotation, setSpinRotation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [globalParticipants, setGlobalParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [participantsHistory, setParticipantsHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pickingMultiple, setPickingMultiple] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [displayedName, setDisplayedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const getAllWinners = ()=>{
        return prizes.flatMap((prize)=>prize.winners.map((w)=>w.winnerName));
    };
    const addPrize = (prizeName, winnerSlots)=>{
        const newPrize = {
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])(),
            name: prizeName,
            participants: [
                ...globalParticipants
            ],
            winnerSlots,
            winners: []
        };
        setPrizes((prev)=>[
                ...prev,
                newPrize
            ]);
        setSelectedPrize(newPrize);
        setWinner(null);
    };
    const removePrize = (id)=>{
        setPrizes((prev)=>prev.filter((p)=>p.id !== id));
        if (selectedPrize?.id === id) setSelectedPrize(null);
    };
    const selectPrize = (prize)=>{
        const updatedPrize = {
            ...prize,
            participants: [
                ...new Set([
                    ...prize.participants,
                    ...globalParticipants
                ])
            ]
        };
        setPrizes((prev)=>prev.map((p)=>p.id === prize.id ? updatedPrize : p));
        setSelectedPrize(updatedPrize);
        setWinner(null);
    };
    const addParticipantToPrize = (prizeId, participantName)=>{
        setPrizes((prev)=>prev.map((prize)=>prize.id === prizeId ? {
                    ...prize,
                    participants: [
                        ...prize.participants,
                        participantName
                    ]
                } : prize));
        setParticipantsHistory((prev)=>prev.includes(participantName) ? prev : [
                ...prev,
                participantName
            ]);
        if (selectedPrize?.id === prizeId) {
            setSelectedPrize({
                ...selectedPrize,
                participants: [
                    ...new Set([
                        ...selectedPrize.participants,
                        participantName
                    ])
                ]
            });
        }
    };
    const removeParticipantFromPrize = (prizeId, participantIndex)=>{
        const prize = prizes.find((p)=>p.id === prizeId);
        if (!prize) return;
        const participantToRemove = prize.participants[participantIndex];
        setPrizes((prev)=>prev.map((p)=>p.id === prizeId ? {
                    ...p,
                    participants: p.participants.filter((_, i)=>i !== participantIndex)
                } : p));
        if (selectedPrize?.id === prizeId) {
            setSelectedPrize({
                ...selectedPrize,
                participants: selectedPrize.participants.filter((p)=>p !== participantToRemove)
            });
        }
    };
    const handleSpin = ()=>{
        if (!selectedPrize || selectedPrize.participants.length === 0 || isSpinning) return;
        if (selectedPrize.winners.length >= selectedPrize.winnerSlots) {
            alert("All winner slots for this prize are filled!");
            return;
        }
        const globalWinners = getAllWinners();
        const availableParticipants = selectedPrize.participants.filter((p)=>!globalWinners.includes(p));
        if (availableParticipants.length === 0) {
            alert("All participants have already won a prize or are ineligible!");
            return;
        }
        // Pick a random winner from available participants
        const randomIndex = Math.floor(Math.random() * availableParticipants.length);
        const winnerName = availableParticipants[randomIndex];
        // Find the winner's index in the displayed wheel participants
        const totalParticipants = selectedPrize.participants.length;
        const displayedIndex = selectedPrize.participants.indexOf(winnerName);
        const segmentAngle = 360 / Math.max(totalParticipants, 1);
        // Calculate rotation so that the arrow points at the segment with the winner
        // Segments are rendered with: visualAngle = (angle - 90), so segment 0 starts at -90° (top/270°)
        // The segment center at index i is at: (i * segmentAngle + segmentAngle/2 - 90) degrees
        // To land this at 270° (top where arrow is): rotation = 360 - i * segmentAngle - segmentAngle/2
        const spins = 10;
        const rotationAmount = 360 - displayedIndex * segmentAngle - segmentAngle / 2;
        const rotationDeg = spins * 360 + rotationAmount;
        setSpinRotation(rotationDeg);
        setIsSpinning(true);
        setWinner(null);
        setTimeout(()=>{
            const newWinner = {
                prizeName: selectedPrize.name,
                winnerName,
                timestamp: new Date()
            };
            const updatedParticipants = selectedPrize.participants.filter((p)=>p !== winnerName);
            const updatedPrize = {
                ...selectedPrize,
                winners: [
                    ...selectedPrize.winners,
                    newWinner
                ],
                participants: updatedParticipants
            };
            setPrizes((prev)=>prev.map((p)=>p.id === selectedPrize.id ? updatedPrize : p));
            setSelectedPrize(updatedPrize);
            setWinner(newWinner);
            setGlobalParticipants((prev)=>prev.filter((p)=>p !== winnerName));
            if (updatedPrize.winners.length >= updatedPrize.winnerSlots) {
                const winners = updatedPrize.winners.map((w)=>w.winnerName);
                const nonWinners = updatedParticipants.filter((p)=>!winners.includes(p));
                setGlobalParticipants((prev)=>prev.filter((p)=>!winners.includes(p)));
                const prizeKeepNonWinners = {
                    ...updatedPrize,
                    participants: nonWinners
                };
                setPrizes((prev)=>prev.map((p)=>p.id === selectedPrize.id ? prizeKeepNonWinners : p));
                setSelectedPrize(prizeKeepNonWinners);
            }
            setIsSpinning(false);
            setSpinRotation(null);
        }, 4000);
    };
    const handlePickAllWinners = ()=>{
        if (!selectedPrize || selectedPrize.participants.length === 0 || isSpinning) return;
        const remainingSlots = selectedPrize.winnerSlots - selectedPrize.winners.length;
        if (remainingSlots <= 0) {
            alert("All winner slots for this prize are filled!");
            return;
        }
        setIsSpinning(true);
        setPickingMultiple(true);
        setWinner(null);
        setDisplayedName(null);
        const globalWinners = getAllWinners();
        const availableParticipants = selectedPrize.participants.filter((p)=>!globalWinners.includes(p));
        if (availableParticipants.length === 0) {
            alert("All participants have already won a prize or are ineligible!");
            setIsSpinning(false);
            setPickingMultiple(false);
            return;
        }
        // Shuffle and pick the required number of winners
        const shuffled = [
            ...availableParticipants
        ].sort(()=>Math.random() - 0.5);
        const winnersToPick = Math.min(remainingSlots, shuffled.length);
        const newWinners = [];
        for(let i = 0; i < winnersToPick; i++){
            newWinners.push({
                prizeName: selectedPrize.name,
                winnerName: shuffled[i],
                timestamp: new Date()
            });
        }
        // Animate by showing each winner sequentially, one per second
        const cycleInterval = 1000 // Show each winner for 1 second
        ;
        const totalCycles = newWinners.length * 2 // Show all winners twice
        ;
        let cycleIndex = 0;
        const animationId = setInterval(()=>{
            if (cycleIndex < totalCycles) {
                // Show winners sequentially without looping
                const winnerIndex = cycleIndex % newWinners.length;
                const winnerToShow = newWinners[winnerIndex];
                const winnerNumber = winnerIndex + 1;
                setDisplayedName(`Winner ${winnerNumber}: ${winnerToShow.winnerName}`);
                cycleIndex++;
            } else {
                // Animation complete, finalize winners
                clearInterval(animationId);
                // Remove all winners from participants
                const winnerNames = newWinners.map((w)=>w.winnerName);
                const updatedParticipants = selectedPrize.participants.filter((p)=>!winnerNames.includes(p));
                const updatedPrize = {
                    ...selectedPrize,
                    winners: [
                        ...selectedPrize.winners,
                        ...newWinners
                    ],
                    participants: updatedParticipants
                };
                setPrizes(prizes.map((prize)=>prize.id === selectedPrize.id ? updatedPrize : prize));
                setSelectedPrize(updatedPrize);
                // Set all new winners for display as array
                if (newWinners.length > 0) {
                    setWinner(newWinners);
                }
                setGlobalParticipants((prev)=>prev.filter((p)=>!winnerNames.includes(p)));
                const allWinners = updatedPrize.winners.map((w)=>w.winnerName);
                const nonWinners = updatedParticipants.filter((p)=>!allWinners.includes(p));
                const prizeKeepNonWinners = {
                    ...updatedPrize,
                    participants: nonWinners
                };
                setPrizes(prizes.map((prize)=>prize.id === selectedPrize.id ? prizeKeepNonWinners : prize));
                setSelectedPrize(prizeKeepNonWinners);
                setDisplayedName(null);
                setIsSpinning(false);
                setPickingMultiple(false);
            }
        }, cycleInterval);
    };
    const resetAll = ()=>{
        setPrizes([]);
        setSelectedPrize(null);
        setWinner(null);
        setGlobalParticipants([]);
    };
    // Global participant management functions
    const addGlobalParticipant = (name)=>{
        if (!globalParticipants.includes(name)) {
            const updatedGlobalParticipants = [
                ...globalParticipants,
                name
            ];
            setGlobalParticipants(updatedGlobalParticipants);
            // add to participants history
            setParticipantsHistory((prev)=>prev.includes(name) ? prev : [
                    ...prev,
                    name
                ]);
            // If a prize is selected, automatically add the new participant to it
            if (selectedPrize) {
                const updatedPrize = {
                    ...selectedPrize,
                    participants: [
                        ...new Set([
                            ...selectedPrize.participants,
                            name
                        ])
                    ]
                };
                setPrizes(prizes.map((p)=>p.id === selectedPrize.id ? updatedPrize : p));
                setSelectedPrize(updatedPrize);
            }
        }
    };
    const removeGlobalParticipant = (index)=>{
        const participantToRemove = globalParticipants[index];
        setGlobalParticipants(globalParticipants.filter((_, i)=>i !== index));
        // If a prize is selected, remove the participant from it too
        if (selectedPrize) {
            const updatedPrize = {
                ...selectedPrize,
                participants: selectedPrize.participants.filter((p)=>p !== participantToRemove)
            };
            setPrizes(prizes.map((p)=>p.id === selectedPrize.id ? updatedPrize : p));
            setSelectedPrize(updatedPrize);
        }
    };
    const importGlobalParticipants = (names)=>{
        const uniqueNames = [
            ...new Set([
                ...globalParticipants,
                ...names
            ])
        ];
        setGlobalParticipants(uniqueNames);
        // add imported names to history
        setParticipantsHistory((prev)=>{
            const merged = [
                ...prev
            ];
            names.forEach((n)=>{
                if (!merged.includes(n)) merged.push(n);
            });
            return merged;
        });
        // If a prize is selected, automatically add all new participants to it
        if (selectedPrize) {
            const updatedPrize = {
                ...selectedPrize,
                participants: [
                    ...new Set([
                        ...selectedPrize.participants,
                        ...names
                    ])
                ]
            };
            setPrizes(prizes.map((p)=>p.id === selectedPrize.id ? updatedPrize : p));
            setSelectedPrize(updatedPrize);
        }
    };
    // Download all winners
    const downloadAllWinners = (format)=>{
        const allWinners = prizes.flatMap((prize)=>prize.winners.map((w)=>({
                    prize: w.prizeName,
                    winner: w.winnerName,
                    timestamp: w.timestamp
                })));
        if (allWinners.length === 0) {
            alert("No winners to download yet!");
            return;
        }
        if (format === "txt") {
            let result = "🎉 ALL WINNERS LIST 🎉\n\n";
            allWinners.forEach((w, index)=>{
                result += `${index + 1}. Winner: ${w.winner}\n`;
                result += `   Prize: ${w.prize}\n`;
                result += `   Date: ${w.timestamp.toLocaleDateString()}\n`;
                result += `   Time: ${w.timestamp.toLocaleTimeString()}\n\n`;
            });
            result += `Total Winners: ${allWinners.length}\n`;
            result += "Congratulations to all winners!";
            const blob = new Blob([
                result
            ], {
                type: "text/plain"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `all-winners-${new Date().toISOString().split("T")[0]}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } else if (format === "excel") {
            const data = [
                [
                    "All Winners List"
                ],
                [],
                [
                    "#",
                    "Winner Name",
                    "Prize",
                    "Date",
                    "Time",
                    "Full Timestamp"
                ]
            ];
            allWinners.forEach((w, index)=>{
                data.push([
                    (index + 1).toString(),
                    w.winner,
                    w.prize,
                    w.timestamp.toLocaleDateString(),
                    w.timestamp.toLocaleTimeString(),
                    w.timestamp.toLocaleString()
                ]);
            });
            data.push([]);
            data.push([
                "Total Winners",
                allWinners.length.toString()
            ]);
            const ws = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].aoa_to_sheet(data);
            ws["!cols"] = [
                {
                    width: 5
                },
                {
                    width: 25
                },
                {
                    width: 25
                },
                {
                    width: 15
                },
                {
                    width: 15
                },
                {
                    width: 25
                }
            ];
            const wb = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_new();
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(wb, ws, "All Winners");
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["writeFile"](wb, `all-winners-${new Date().toISOString().split("T")[0]}.xlsx`);
        }
    };
    const resetPrizeWinners = (prizeId)=>{
        setPrizes(prizes.map((prize)=>prize.id === prizeId ? {
                ...prize,
                winners: []
            } : prize));
        if (selectedPrize?.id === prizeId) {
            setSelectedPrize({
                ...selectedPrize,
                winners: []
            });
            setWinner(null);
        }
    };
    const updatePrizeWinnerSlots = (prizeId, winnerSlots)=>{
        const updatedPrize = prizes.find((p)=>p.id === prizeId);
        if (!updatedPrize) return;
        // Can't reduce below current winners
        if (winnerSlots < updatedPrize.winners.length) {
            alert(`Cannot set winner slots below ${updatedPrize.winners.length} (current winners)`);
            return;
        }
        const newPrize = {
            ...updatedPrize,
            winnerSlots
        };
        setPrizes(prizes.map((p)=>p.id === prizeId ? newPrize : p));
        if (selectedPrize?.id === prizeId) {
            setSelectedPrize(newPrize);
        }
    };
    // Participants history management
    const removeParticipantHistory = (name)=>{
        setParticipantsHistory((prev)=>prev.filter((n)=>n !== name));
        // Also remove from global participants to keep lists consistent
        setGlobalParticipants((prev)=>prev.filter((p)=>p !== name));
        // Also remove from prizes participants and winners if desired (we'll remove from participants)
        setPrizes((prev)=>prev.map((prize)=>({
                    ...prize,
                    participants: prize.participants.filter((p)=>p !== name)
                })));
    };
    const clearParticipantsHistory = ()=>{
        setParticipantsHistory([]);
    };
    const editParticipantHistory = (oldName, newName)=>{
        if (!newName || oldName === newName) return;
        setParticipantsHistory((prev)=>prev.map((n)=>n === oldName ? newName : n));
        // Update global participants
        setGlobalParticipants((prev)=>prev.map((p)=>p === oldName ? newName : p));
        // Update prizes participants and winners
        setPrizes((prev)=>prev.map((prize)=>({
                    ...prize,
                    participants: prize.participants.map((p)=>p === oldName ? newName : p),
                    winners: prize.winners.map((w)=>w.winnerName === oldName ? {
                            ...w,
                            winnerName: newName
                        } : w)
                })));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-10 w-10 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-bold tracking-tight text-balance",
                                children: "Random Prize Picker"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 455,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-10 w-10 text-secondary"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                        lineNumber: 453,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto",
                        children: "Add your prizes and names, and let the excitement begin with the spinning wheel!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                        lineNumber: 458,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$setup$2d$manager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetupManager"], {
                                    participants: globalParticipants,
                                    onAddParticipant: addGlobalParticipant,
                                    onRemoveParticipant: removeGlobalParticipant,
                                    onImportParticipants: importGlobalParticipants,
                                    onAddPrize: addPrize,
                                    prizeCount: prizes.length
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 467,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$prizes$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrizesList"], {
                                    prizes: prizes,
                                    selectedPrize: selectedPrize,
                                    onSelectPrize: selectPrize,
                                    onRemovePrize: removePrize,
                                    onAddParticipant: addParticipantToPrize,
                                    onRemoveParticipant: removeParticipantFromPrize,
                                    onReset: resetAll,
                                    onResetPrizeWinners: resetPrizeWinners,
                                    onUpdateWinnerSlots: updatePrizeWinnerSlots,
                                    participantsHistory: participantsHistory,
                                    onRemoveHistoryName: removeParticipantHistory,
                                    onClearHistory: clearParticipantsHistory,
                                    onEditHistoryName: editParticipantHistory
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 478,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$spin$2d$wheel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpinWheel"], {
                                    selectedPrize: selectedPrize,
                                    isSpinning: isSpinning,
                                    onSpin: handleSpin,
                                    onPickAll: handlePickAllWinners,
                                    winner: winner,
                                    rotation: spinRotation
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this),
                            winner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$winner$2d$display$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WinnerDisplay"], {
                                winner: winner,
                                onClose: ()=>setWinner(null),
                                onRemove: ()=>{
                                    // Winner is already removed automatically, just close
                                    setWinner(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this),
                            prizes.some((p)=>p.winners.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$winners$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WinnersList"], {
                                        prizes: prizes
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                        lineNumber: 523,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold",
                                                    children: "Download All Winners"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground",
                                                    children: "Download the complete list of all winners from all prizes"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            className: "flex-1",
                                                            onClick: ()=>downloadAllWinners("txt"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Download TXT"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                            lineNumber: 531,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            className: "flex-1",
                                                            onClick: ()=>downloadAllWinners("excel"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 mr-2"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                                    lineNumber: 544,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Download Excel"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                            lineNumber: 539,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
                lineNumber: 464,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/v0-random-picker-wheel/components/random-picker.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6c1eff25._.js.map