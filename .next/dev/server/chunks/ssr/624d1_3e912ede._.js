module.exports = [
"[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactDOM; //# sourceMappingURL=react-dom.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/native.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomUUID"]
};
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/rng.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>rng
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256);
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/regex.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/validate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/regex.js [app-ssr] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$regex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "unsafeStringify",
    ()=>unsafeStringify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/validate.js [app-ssr] (ecmascript)");
;
const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$validate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/native.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/rng.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/stringify.js [app-ssr] (ecmascript)");
;
;
;
function _v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$rng$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$native$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    return _v4(options, buf, offset);
}
const __TURBOPACK__default__export__ = v4;
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript) <export default as v4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "v4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$uuid$2f$dist$2d$node$2f$v4$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/uuid/dist-node/v4.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return (className)=>experimentalParseClassName({
                className,
                parseClassName
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, 'number', isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, '', isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
 //# sourceMappingURL=bundle-mjs.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : node;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label,
    "Root",
    ()=>Root
]);
// packages/react/label/src/Label.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
;
;
;
var NAME = "Label";
var Label = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/Icon.js [app-ssr] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Plus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
 //# sourceMappingURL=plus.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Trophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Trophy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Trophy", [
    [
        "path",
        {
            d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
            key: "17hqa7"
        }
    ],
    [
        "path",
        {
            d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
            key: "lmptdp"
        }
    ],
    [
        "path",
        {
            d: "M4 22h16",
            key: "57wxv0"
        }
    ],
    [
        "path",
        {
            d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
            key: "1nw9bq"
        }
    ],
    [
        "path",
        {
            d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
            key: "1np0yb"
        }
    ],
    [
        "path",
        {
            d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
            key: "u46fv3"
        }
    ]
]);
;
 //# sourceMappingURL=trophy.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trophy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Trash2", [
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
            key: "4alrt4"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
            key: "v07s0e"
        }
    ],
    [
        "line",
        {
            x1: "10",
            x2: "10",
            y1: "11",
            y2: "17",
            key: "1uufr5"
        }
    ],
    [
        "line",
        {
            x1: "14",
            x2: "14",
            y1: "11",
            y2: "17",
            key: "xtxkd"
        }
    ]
]);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Users
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
;
 //# sourceMappingURL=users.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Users",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>RotateCcw
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const RotateCcw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("RotateCcw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "1357e3"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ]
]);
;
 //# sourceMappingURL=rotate-ccw.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RotateCcw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Upload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Upload", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }
    ]
]);
;
 //# sourceMappingURL=upload.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Upload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Award
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Award = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Award", [
    [
        "path",
        {
            d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
            key: "1yiouv"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "8",
            r: "6",
            key: "1vp47v"
        }
    ]
]);
;
 //# sourceMappingURL=award.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Award",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Play
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Play", [
    [
        "polygon",
        {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }
    ]
]);
;
 //# sourceMappingURL=play.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript) <export default as Play>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Play",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/play.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>LoaderCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Download
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Download = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Download", [
    [
        "path",
        {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }
    ],
    [
        "polyline",
        {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }
    ]
]);
;
 //# sourceMappingURL=download.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Download",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>PartyPopper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const PartyPopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("PartyPopper", [
    [
        "path",
        {
            d: "M5.8 11.3 2 22l10.7-3.79",
            key: "gwxi1d"
        }
    ],
    [
        "path",
        {
            d: "M4 3h.01",
            key: "1vcuye"
        }
    ],
    [
        "path",
        {
            d: "M22 8h.01",
            key: "1mrtc2"
        }
    ],
    [
        "path",
        {
            d: "M15 2h.01",
            key: "1cjtqr"
        }
    ],
    [
        "path",
        {
            d: "M22 20h.01",
            key: "1mrys2"
        }
    ],
    [
        "path",
        {
            d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
            key: "hbicv8"
        }
    ],
    [
        "path",
        {
            d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
            key: "1i94pl"
        }
    ],
    [
        "path",
        {
            d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
            key: "1cofks"
        }
    ],
    [
        "path",
        {
            d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
            key: "4kbmks"
        }
    ]
]);
;
 //# sourceMappingURL=party-popper.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript) <export default as PartyPopper>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartyPopper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var useLayoutEffect2 = Boolean(globalThis?.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence
]);
// packages/react/presence/src/Presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// packages/react/presence/src/Presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]({});
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((node2)=>{
            if (node2) stylesRef.current = getComputedStyle(node2);
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/createContext.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>context, Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                }), [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes
                }), [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/useCallbackRef.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        callbackRef.current = callback;
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>(...args)=>callbackRef.current?.(...args), []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/direction/src/Direction.tsx
__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/number/src/number.ts
__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
function clamp(value, [min, max]) {
    return Math.min(max, Math.max(min, value));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/primitive/src/primitive.tsx
__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Corner",
    ()=>Corner,
    "Root",
    ()=>Root,
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollAreaCorner",
    ()=>ScrollAreaCorner,
    "ScrollAreaScrollbar",
    ()=>ScrollAreaScrollbar,
    "ScrollAreaThumb",
    ()=>ScrollAreaThumb,
    "ScrollAreaViewport",
    ()=>ScrollAreaViewport,
    "Scrollbar",
    ()=>Scrollbar,
    "Thumb",
    ()=>Thumb,
    "Viewport",
    ()=>Viewport,
    "createScrollAreaScope",
    ()=>createScrollAreaScope
]);
// packages/react/scroll-area/src/ScrollArea.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-presence/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-context/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-direction/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/number/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/@radix-ui/primitive/dist/index.mjs [app-ssr] (ecmascript)");
// packages/react/scroll-area/src/ScrollArea.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/v0-random-picker-wheel/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
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
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
;
var SCROLL_AREA_NAME = "ScrollArea";
var [createScrollAreaContext, createScrollAreaScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContextScope"])(SCROLL_AREA_NAME);
var [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
var ScrollArea = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
    const [scrollArea, setScrollArea] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [viewport, setViewport] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [content, setContent] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarX, setScrollbarX] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [scrollbarY, setScrollbarY] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [cornerWidth, setCornerWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [cornerHeight, setCornerHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [scrollbarXEnabled, setScrollbarXEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const [scrollbarYEnabled, setScrollbarYEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setScrollArea(node));
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaProvider, {
        scope: __scopeScrollArea,
        type,
        dir: direction,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            dir: direction,
            ...scrollAreaProps,
            ref: composedRefs,
            style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                ["--radix-scroll-area-corner-width"]: cornerWidth + "px",
                ["--radix-scroll-area-corner-height"]: cornerHeight + "px",
                ...props.style
            }
        })
    });
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport";
var ScrollAreaViewport = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, children, nonce, ...viewportProps } = props;
    const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onViewportChange);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}`
                },
                nonce
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
                "data-radix-scroll-area-viewport": "",
                ...viewportProps,
                ref: composedRefs,
                style: {
                    /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */ overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
                    overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
                    ...props.style
                },
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: context.onContentChange,
                    style: {
                        minWidth: "100%",
                        display: "table"
                    },
                    children
                })
            })
        ]
    });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar";
var ScrollAreaScrollbar = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
        return ()=>{
            isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
        };
    }, [
        isHorizontal,
        onScrollbarXEnabledChange,
        onScrollbarYEnabledChange
    ]);
    return context.type === "hover" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarHover, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "scroll" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarScroll, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "auto" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
        ...scrollbarProps,
        ref: forwardedRef,
        forceMount
    }) : context.type === "always" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
        ...scrollbarProps,
        ref: forwardedRef
    }) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const scrollArea = context.scrollArea;
        let hideTimer = 0;
        if (scrollArea) {
            const handlePointerEnter = ()=>{
                window.clearTimeout(hideTimer);
                setVisible(true);
            };
            const handlePointerLeave = ()=>{
                hideTimer = window.setTimeout(()=>setVisible(false), context.scrollHideDelay);
            };
            scrollArea.addEventListener("pointerenter", handlePointerEnter);
            scrollArea.addEventListener("pointerleave", handlePointerLeave);
            return ()=>{
                window.clearTimeout(hideTimer);
                scrollArea.removeEventListener("pointerenter", handlePointerEnter);
                scrollArea.removeEventListener("pointerleave", handlePointerLeave);
            };
        }
    }, [
        context.scrollArea,
        context.scrollHideDelay
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarAuto, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarScroll = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const isHorizontal = props.orientation === "horizontal";
    const debounceScrollEnd = useDebounceCallback(()=>send("SCROLL_END"), 100);
    const [state, send] = useStateMachine("hidden", {
        hidden: {
            SCROLL: "scrolling"
        },
        scrolling: {
            SCROLL_END: "idle",
            POINTER_ENTER: "interacting"
        },
        interacting: {
            SCROLL: "interacting",
            POINTER_LEAVE: "idle"
        },
        idle: {
            HIDE: "hidden",
            SCROLL: "scrolling",
            POINTER_ENTER: "interacting"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (state === "idle") {
            const hideTimer = window.setTimeout(()=>send("HIDE"), context.scrollHideDelay);
            return ()=>window.clearTimeout(hideTimer);
        }
    }, [
        state,
        context.scrollHideDelay,
        send
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = context.viewport;
        const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
        if (viewport) {
            let prevScrollPos = viewport[scrollDirection];
            const handleScroll = ()=>{
                const scrollPos = viewport[scrollDirection];
                const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
                if (hasScrollInDirectionChanged) {
                    send("SCROLL");
                    debounceScrollEnd();
                }
                prevScrollPos = scrollPos;
            };
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        context.viewport,
        isHorizontal,
        send,
        debounceScrollEnd
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || state !== "hidden",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": state === "hidden" ? "hidden" : "visible",
            ...scrollbarProps,
            ref: forwardedRef,
            onPointerEnter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerEnter, ()=>send("POINTER_ENTER")),
            onPointerLeave: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerLeave, ()=>send("POINTER_LEAVE"))
        })
    });
});
var ScrollAreaScrollbarAuto = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebounceCallback(()=>{
        if (context.viewport) {
            const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
            const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
            setVisible(isHorizontal ? isOverflowX : isOverflowY);
        }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || visible,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarVisible, {
            "data-state": visible ? "visible" : "hidden",
            ...scrollbarProps,
            ref: forwardedRef
        })
    });
});
var ScrollAreaScrollbarVisible = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { orientation = "vertical", ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const thumbRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const pointerOffsetRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    const [sizes, setSizes] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]({
        content: 0,
        viewport: 0,
        scrollbar: {
            size: 0,
            paddingStart: 0,
            paddingEnd: 0
        }
    });
    const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
    const commonProps = {
        ...scrollbarProps,
        sizes,
        onSizesChange: setSizes,
        hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
        onThumbChange: (thumb)=>thumbRef.current = thumb,
        onThumbPointerUp: ()=>pointerOffsetRef.current = 0,
        onThumbPointerDown: (pointerPos)=>pointerOffsetRef.current = pointerPos
    };
    function getScrollPosition(pointerPos, dir) {
        return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
    }
    if (orientation === "horizontal") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarX, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollLeft;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
                    thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollLeft = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) {
                    context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
                }
            }
        });
    }
    if (orientation === "vertical") {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarY, {
            ...commonProps,
            ref: forwardedRef,
            onThumbPositionChange: ()=>{
                if (context.viewport && thumbRef.current) {
                    const scrollPos = context.viewport.scrollTop;
                    const offset = getThumbOffsetFromScroll(scrollPos, sizes);
                    thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
                }
            },
            onWheelScroll: (scrollPos)=>{
                if (context.viewport) context.viewport.scrollTop = scrollPos;
            },
            onDragScroll: (pointerPos)=>{
                if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
            }
        });
    }
    return null;
});
var ScrollAreaScrollbarX = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarXChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "horizontal",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            bottom: 0,
            left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
            right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
            ["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollLeft + event.deltaX;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollWidth,
                    viewport: context.viewport.offsetWidth,
                    scrollbar: {
                        size: ref.current.clientWidth,
                        paddingStart: toInt(computedStyle.paddingLeft),
                        paddingEnd: toInt(computedStyle.paddingRight)
                    }
                });
            }
        }
    });
});
var ScrollAreaScrollbarY = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { sizes, onSizesChange, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
    const [computedStyle, setComputedStyle] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]();
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref, context.onScrollbarYChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (ref.current) setComputedStyle(getComputedStyle(ref.current));
    }, [
        ref
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaScrollbarImpl, {
        "data-orientation": "vertical",
        ...scrollbarProps,
        ref: composeRefs,
        sizes,
        style: {
            top: 0,
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: "var(--radix-scroll-area-corner-height)",
            ["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
            ...props.style
        },
        onThumbPointerDown: (pointerPos)=>props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos)=>props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos)=>{
            if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                props.onWheelScroll(scrollPos);
                if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
                    event.preventDefault();
                }
            }
        },
        onResize: ()=>{
            if (ref.current && context.viewport && computedStyle) {
                onSizesChange({
                    content: context.viewport.scrollHeight,
                    viewport: context.viewport.offsetHeight,
                    scrollbar: {
                        size: ref.current.clientHeight,
                        paddingStart: toInt(computedStyle.paddingTop),
                        paddingEnd: toInt(computedStyle.paddingBottom)
                    }
                });
            }
        }
    });
});
var [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
var ScrollAreaScrollbarImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
    const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
    const [scrollbar, setScrollbar] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const composeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>setScrollbar(node));
    const rectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](null);
    const prevWebkitUserSelectRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"]("");
    const viewport = context.viewport;
    const maxScrollPos = sizes.content - sizes.viewport;
    const handleWheelScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onWheelScroll);
    const handleThumbPositionChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPositionChange);
    const handleResize = useDebounceCallback(onResize, 10);
    function handleDragScroll(event) {
        if (rectRef.current) {
            const x = event.clientX - rectRef.current.left;
            const y = event.clientY - rectRef.current.top;
            onDragScroll({
                x,
                y
            });
        }
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleWheel = (event)=>{
            const element = event.target;
            const isScrollbarWheel = scrollbar?.contains(element);
            if (isScrollbarWheel) handleWheelScroll(event, maxScrollPos);
        };
        document.addEventListener("wheel", handleWheel, {
            passive: false
        });
        return ()=>document.removeEventListener("wheel", handleWheel, {
                passive: false
            });
    }, [
        viewport,
        scrollbar,
        maxScrollPos,
        handleWheelScroll
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](handleThumbPositionChange, [
        sizes,
        handleThumbPositionChange
    ]);
    useResizeObserver(scrollbar, handleResize);
    useResizeObserver(context.content, handleResize);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollbarProvider, {
        scope: __scopeScrollArea,
        scrollbar,
        hasThumb,
        onThumbChange: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbChange),
        onThumbPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onThumbPointerDown),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
            ...scrollbarProps,
            ref: composeRefs,
            style: {
                position: "absolute",
                ...scrollbarProps.style
            },
            onPointerDown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDown, (event)=>{
                const mainPointer = 0;
                if (event.button === mainPointer) {
                    const element = event.target;
                    element.setPointerCapture(event.pointerId);
                    rectRef.current = scrollbar.getBoundingClientRect();
                    prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
                    document.body.style.webkitUserSelect = "none";
                    if (context.viewport) context.viewport.style.scrollBehavior = "auto";
                    handleDragScroll(event);
                }
            }),
            onPointerMove: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerMove, handleDragScroll),
            onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, (event)=>{
                const element = event.target;
                if (element.hasPointerCapture(event.pointerId)) {
                    element.releasePointerCapture(event.pointerId);
                }
                document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
                if (context.viewport) context.viewport.style.scrollBehavior = "";
                rectRef.current = null;
            })
        })
    });
});
var THUMB_NAME = "ScrollAreaThumb";
var ScrollAreaThumb = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || scrollbarContext.hasThumb,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaThumbImpl, {
            ref: forwardedRef,
            ...thumbProps
        })
    });
});
var ScrollAreaThumbImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, style, ...thumbProps } = props;
    const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
    const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
    const { onThumbPositionChange } = scrollbarContext;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, (node)=>scrollbarContext.onThumbChange(node));
    const removeUnlinkedScrollListenerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](void 0);
    const debounceScrollEnd = useDebounceCallback(()=>{
        if (removeUnlinkedScrollListenerRef.current) {
            removeUnlinkedScrollListenerRef.current();
            removeUnlinkedScrollListenerRef.current = void 0;
        }
    }, 100);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const viewport = scrollAreaContext.viewport;
        if (viewport) {
            const handleScroll = ()=>{
                debounceScrollEnd();
                if (!removeUnlinkedScrollListenerRef.current) {
                    const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
                    removeUnlinkedScrollListenerRef.current = listener;
                    onThumbPositionChange();
                }
            };
            onThumbPositionChange();
            viewport.addEventListener("scroll", handleScroll);
            return ()=>viewport.removeEventListener("scroll", handleScroll);
        }
    }, [
        scrollAreaContext.viewport,
        debounceScrollEnd,
        onThumbPositionChange
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
        ...thumbProps,
        ref: composedRef,
        style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...style
        },
        onPointerDownCapture: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerDownCapture, (event)=>{
            const thumb = event.target;
            const thumbRect = thumb.getBoundingClientRect();
            const x = event.clientX - thumbRect.left;
            const y = event.clientY - thumbRect.top;
            scrollbarContext.onThumbPointerDown({
                x,
                y
            });
        }),
        onPointerUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    });
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner";
var ScrollAreaCorner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
    const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
    const hasCorner = context.type !== "scroll" && hasBothScrollbarsVisible;
    return hasCorner ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(ScrollAreaCornerImpl, {
        ...props,
        ref: forwardedRef
    }) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeScrollArea, ...cornerProps } = props;
    const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
    const [width, setWidth] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const [height, setHeight] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](0);
    const hasSize = Boolean(width && height);
    useResizeObserver(context.scrollbarX, ()=>{
        const height2 = context.scrollbarX?.offsetHeight || 0;
        context.onCornerHeightChange(height2);
        setHeight(height2);
    });
    useResizeObserver(context.scrollbarY, ()=>{
        const width2 = context.scrollbarY?.offsetWidth || 0;
        context.onCornerWidthChange(width2);
        setWidth(width2);
    });
    return hasSize ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Primitive"].div, {
        ...cornerProps,
        ref: forwardedRef,
        style: {
            width,
            height,
            position: "absolute",
            right: context.dir === "ltr" ? 0 : void 0,
            left: context.dir === "rtl" ? 0 : void 0,
            bottom: 0,
            ...props.style
        }
    }) : null;
});
function toInt(value) {
    return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
    const ratio = viewportSize / contentSize;
    return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
    const ratio = getThumbRatio(sizes.viewport, sizes.content);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
    return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const thumbCenter = thumbSizePx / 2;
    const offset = pointerOffset || thumbCenter;
    const thumbOffsetFromEnd = thumbSizePx - offset;
    const minPointerPos = sizes.scrollbar.paddingStart + offset;
    const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
    const maxScrollPos = sizes.content - sizes.viewport;
    const scrollRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const interpolate = linearScale([
        minPointerPos,
        maxPointerPos
    ], scrollRange);
    return interpolate(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
    const thumbSizePx = getThumbSize(sizes);
    const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
    const scrollbar = sizes.scrollbar.size - scrollbarPadding;
    const maxScrollPos = sizes.content - sizes.viewport;
    const maxThumbPos = scrollbar - thumbSizePx;
    const scrollClampRange = dir === "ltr" ? [
        0,
        maxScrollPos
    ] : [
        maxScrollPos * -1,
        0
    ];
    const scrollWithoutMomentum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$number$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(scrollPos, scrollClampRange);
    const interpolate = linearScale([
        0,
        maxScrollPos
    ], [
        0,
        maxThumbPos
    ]);
    return interpolate(scrollWithoutMomentum);
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
    return scrollPos > 0 && scrollPos < maxScrollPos;
}
var addUnlinkedScrollListener = (node, handler = ()=>{})=>{
    let prevPosition = {
        left: node.scrollLeft,
        top: node.scrollTop
    };
    let rAF = 0;
    (function loop() {
        const position = {
            left: node.scrollLeft,
            top: node.scrollTop
        };
        const isHorizontalScroll = prevPosition.left !== position.left;
        const isVerticalScroll = prevPosition.top !== position.top;
        if (isHorizontalScroll || isVerticalScroll) handler();
        prevPosition = position;
        rAF = window.requestAnimationFrame(loop);
    })();
    return ()=>window.cancelAnimationFrame(rAF);
};
function useDebounceCallback(callback, delay) {
    const handleCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(callback);
    const debounceTimerRef = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"](0);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>()=>window.clearTimeout(debounceTimerRef.current), []);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = window.setTimeout(handleCallback, delay);
    }, [
        handleCallback,
        delay
    ]);
}
function useResizeObserver(element, onResize) {
    const handleResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallbackRef"])(onResize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$v0$2d$random$2d$picker$2d$wheel$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let rAF = 0;
        if (element) {
            const resizeObserver = new ResizeObserver(()=>{
                cancelAnimationFrame(rAF);
                rAF = window.requestAnimationFrame(handleResize);
            });
            resizeObserver.observe(element);
            return ()=>{
                window.cancelAnimationFrame(rAF);
                resizeObserver.unobserve(element);
            };
        }
    }, [
        element,
        handleResize
    ]);
}
var Root = ScrollArea;
var Viewport = ScrollAreaViewport;
var Scrollbar = ScrollAreaScrollbar;
var Thumb = ScrollAreaThumb;
var Corner = ScrollAreaCorner;
;
 //# sourceMappingURL=index.mjs.map
}),
];

//# sourceMappingURL=624d1_3e912ede._.js.map