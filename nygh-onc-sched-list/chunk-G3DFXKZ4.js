import {
  HelpContentService
} from "./chunk-QYEORAWY.js";
import {
  ConfigurationService,
  DecimalPipe,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-UOIJNSGV.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VK25UXFS.js";
import {
  Annotation,
  ChangeSet,
  Compartment,
  Decoration,
  EditorState,
  EditorView,
  Facet,
  GutterMarker,
  HighlightStyle,
  Prec,
  RangeSet,
  RangeSetBuilder,
  StateEffect,
  StateField,
  StyleModule,
  Transaction,
  ViewPlugin,
  WidgetType,
  autocompletion,
  bracketMatching,
  closeBrackets,
  closeBracketsKeymap,
  completionKeymap,
  crosshairCursor,
  defaultHighlightStyle,
  defaultKeymap,
  drawSelection,
  dropCursor,
  foldGutter,
  foldKeymap,
  gutter,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSelectionMatches,
  highlightSpecialChars,
  highlightWhitespace,
  history,
  historyKeymap,
  indentOnInput,
  indentUnit,
  indentWithTab,
  json,
  keymap,
  lineNumbers,
  lintKeymap,
  placeholder,
  rectangularSelection,
  searchKeymap,
  syntaxHighlighting,
  tags
} from "./chunk-LRT5K7PP.js";
import "./chunk-COG2N4FA.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@codemirror/theme-one-dark/dist/index.js
var chalky = "#e5c07b";
var coral = "#e06c75";
var cyan = "#56b6c2";
var invalid = "#ffffff";
var ivory = "#abb2bf";
var stone = "#7d8799";
var malibu = "#61afef";
var sage = "#98c379";
var whiskey = "#d19a66";
var violet = "#c678dd";
var darkBackground = "#21252b";
var highlightBackground = "#2c313a";
var background = "#282c34";
var tooltipBackground = "#353a42";
var selection = "#3E4451";
var cursor = "#528bff";
var oneDarkTheme = /* @__PURE__ */ EditorView.theme({
  "&": {
    color: ivory,
    backgroundColor: background
  },
  ".cm-content": {
    caretColor: cursor
  },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: selection },
  ".cm-panels": { backgroundColor: darkBackground, color: ivory },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": { backgroundColor: "#6699ff0b" },
  ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: background,
    color: stone,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: highlightBackground
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: tooltipBackground
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: tooltipBackground,
    borderBottomColor: tooltipBackground
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: highlightBackground,
      color: ivory
    }
  }
}, { dark: true });
var oneDarkHighlightStyle = /* @__PURE__ */ HighlightStyle.define([
  {
    tag: tags.keyword,
    color: violet
  },
  {
    tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
    color: coral
  },
  {
    tag: [/* @__PURE__ */ tags.function(tags.variableName), tags.labelName],
    color: malibu
  },
  {
    tag: [tags.color, /* @__PURE__ */ tags.constant(tags.name), /* @__PURE__ */ tags.standard(tags.name)],
    color: whiskey
  },
  {
    tag: [/* @__PURE__ */ tags.definition(tags.name), tags.separator],
    color: ivory
  },
  {
    tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
    color: chalky
  },
  {
    tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, /* @__PURE__ */ tags.special(tags.string)],
    color: cyan
  },
  {
    tag: [tags.meta, tags.comment],
    color: stone
  },
  {
    tag: tags.strong,
    fontWeight: "bold"
  },
  {
    tag: tags.emphasis,
    fontStyle: "italic"
  },
  {
    tag: tags.strikethrough,
    textDecoration: "line-through"
  },
  {
    tag: tags.link,
    color: stone,
    textDecoration: "underline"
  },
  {
    tag: tags.heading,
    fontWeight: "bold",
    color: coral
  },
  {
    tag: [tags.atom, tags.bool, /* @__PURE__ */ tags.special(tags.variableName)],
    color: whiskey
  },
  {
    tag: [tags.processingInstruction, tags.string, tags.inserted],
    color: sage
  },
  {
    tag: tags.invalid,
    color: invalid
  }
]);
var oneDark = [oneDarkTheme, /* @__PURE__ */ syntaxHighlighting(oneDarkHighlightStyle)];

// node_modules/codemirror/dist/index.js
var basicSetup = /* @__PURE__ */ (() => [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  crosshairCursor(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...completionKeymap,
    ...lintKeymap
  ])
])();
var minimalSetup = /* @__PURE__ */ (() => [
  highlightSpecialChars(),
  history(),
  drawSelection(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  keymap.of([
    ...defaultKeymap,
    ...historyKeymap
  ])
])();

// node_modules/@codemirror/merge/dist/index.js
var Change = class _Change {
  constructor(fromA, toA, fromB, toB) {
    this.fromA = fromA;
    this.toA = toA;
    this.fromB = fromB;
    this.toB = toB;
  }
  /**
  @internal
  */
  offset(offA, offB = offA) {
    return new _Change(this.fromA + offA, this.toA + offA, this.fromB + offB, this.toB + offB);
  }
};
function findDiff(a, fromA, toA, b, fromB, toB) {
  if (a == b)
    return [];
  let prefix = commonPrefix(a, fromA, toA, b, fromB, toB);
  let suffix = commonSuffix(a, fromA + prefix, toA, b, fromB + prefix, toB);
  fromA += prefix;
  toA -= suffix;
  fromB += prefix;
  toB -= suffix;
  let lenA = toA - fromA, lenB = toB - fromB;
  if (!lenA || !lenB)
    return [new Change(fromA, toA, fromB, toB)];
  if (lenA > lenB) {
    let found = a.slice(fromA, toA).indexOf(b.slice(fromB, toB));
    if (found > -1)
      return [
        new Change(fromA, fromA + found, fromB, fromB),
        new Change(fromA + found + lenB, toA, toB, toB)
      ];
  } else if (lenB > lenA) {
    let found = b.slice(fromB, toB).indexOf(a.slice(fromA, toA));
    if (found > -1)
      return [
        new Change(fromA, fromA, fromB, fromB + found),
        new Change(toA, toA, fromB + found + lenA, toB)
      ];
  }
  if (lenA == 1 || lenB == 1)
    return [new Change(fromA, toA, fromB, toB)];
  let half = halfMatch(a, fromA, toA, b, fromB, toB);
  if (half) {
    let [sharedA, sharedB, sharedLen] = half;
    return findDiff(a, fromA, sharedA, b, fromB, sharedB).concat(findDiff(a, sharedA + sharedLen, toA, b, sharedB + sharedLen, toB));
  }
  return findSnake(a, fromA, toA, b, fromB, toB);
}
var scanLimit = 1e9;
var timeout = 0;
var crude = false;
function findSnake(a, fromA, toA, b, fromB, toB) {
  let lenA = toA - fromA, lenB = toB - fromB;
  if (scanLimit < 1e9 && Math.min(lenA, lenB) > scanLimit * 16 || timeout > 0 && Date.now() > timeout) {
    if (Math.min(lenA, lenB) > scanLimit * 64)
      return [new Change(fromA, toA, fromB, toB)];
    return crudeMatch(a, fromA, toA, b, fromB, toB);
  }
  let off = Math.ceil((lenA + lenB) / 2);
  frontier1.reset(off);
  frontier2.reset(off);
  let match1 = (x, y) => a.charCodeAt(fromA + x) == b.charCodeAt(fromB + y);
  let match2 = (x, y) => a.charCodeAt(toA - x - 1) == b.charCodeAt(toB - y - 1);
  let test1 = (lenA - lenB) % 2 != 0 ? frontier2 : null, test2 = test1 ? null : frontier1;
  for (let depth = 0; depth < off; depth++) {
    if (depth > scanLimit || timeout > 0 && !(depth & 63) && Date.now() > timeout)
      return crudeMatch(a, fromA, toA, b, fromB, toB);
    let done = frontier1.advance(depth, lenA, lenB, off, test1, false, match1) || frontier2.advance(depth, lenA, lenB, off, test2, true, match2);
    if (done)
      return bisect(a, fromA, toA, fromA + done[0], b, fromB, toB, fromB + done[1]);
  }
  return [new Change(fromA, toA, fromB, toB)];
}
var Frontier = class {
  constructor() {
    this.vec = [];
  }
  reset(off) {
    this.len = off << 1;
    for (let i = 0; i < this.len; i++)
      this.vec[i] = -1;
    this.vec[off + 1] = 0;
    this.start = this.end = 0;
  }
  advance(depth, lenX, lenY, vOff, other, fromBack, match) {
    for (let k = -depth + this.start; k <= depth - this.end; k += 2) {
      let off = vOff + k;
      let x = k == -depth || k != depth && this.vec[off - 1] < this.vec[off + 1] ? this.vec[off + 1] : this.vec[off - 1] + 1;
      let y = x - k;
      while (x < lenX && y < lenY && match(x, y)) {
        x++;
        y++;
      }
      this.vec[off] = x;
      if (x > lenX) {
        this.end += 2;
      } else if (y > lenY) {
        this.start += 2;
      } else if (other) {
        let offOther = vOff + (lenX - lenY) - k;
        if (offOther >= 0 && offOther < this.len && other.vec[offOther] != -1) {
          if (!fromBack) {
            let xOther = lenX - other.vec[offOther];
            if (x >= xOther)
              return [x, y];
          } else {
            let xOther = other.vec[offOther];
            if (xOther >= lenX - x)
              return [xOther, vOff + xOther - offOther];
          }
        }
      }
    }
    return null;
  }
};
var frontier1 = /* @__PURE__ */ new Frontier();
var frontier2 = /* @__PURE__ */ new Frontier();
function bisect(a, fromA, toA, splitA, b, fromB, toB, splitB) {
  let stop = false;
  if (!validIndex(a, splitA) && ++splitA == toA)
    stop = true;
  if (!validIndex(b, splitB) && ++splitB == toB)
    stop = true;
  if (stop)
    return [new Change(fromA, toA, fromB, toB)];
  return findDiff(a, fromA, splitA, b, fromB, splitB).concat(findDiff(a, splitA, toA, b, splitB, toB));
}
function chunkSize(lenA, lenB) {
  let size = 1, max = Math.min(lenA, lenB);
  while (size < max)
    size = size << 1;
  return size;
}
function commonPrefix(a, fromA, toA, b, fromB, toB) {
  if (fromA == toA || fromA == toB || a.charCodeAt(fromA) != b.charCodeAt(fromB))
    return 0;
  let chunk = chunkSize(toA - fromA, toB - fromB);
  for (let pA = fromA, pB = fromB; ; ) {
    let endA = pA + chunk, endB = pB + chunk;
    if (endA > toA || endB > toB || a.slice(pA, endA) != b.slice(pB, endB)) {
      if (chunk == 1)
        return pA - fromA - (validIndex(a, pA) ? 0 : 1);
      chunk = chunk >> 1;
    } else if (endA == toA || endB == toB) {
      return endA - fromA;
    } else {
      pA = endA;
      pB = endB;
    }
  }
}
function commonSuffix(a, fromA, toA, b, fromB, toB) {
  if (fromA == toA || fromB == toB || a.charCodeAt(toA - 1) != b.charCodeAt(toB - 1))
    return 0;
  let chunk = chunkSize(toA - fromA, toB - fromB);
  for (let pA = toA, pB = toB; ; ) {
    let sA = pA - chunk, sB = pB - chunk;
    if (sA < fromA || sB < fromB || a.slice(sA, pA) != b.slice(sB, pB)) {
      if (chunk == 1)
        return toA - pA - (validIndex(a, pA) ? 0 : 1);
      chunk = chunk >> 1;
    } else if (sA == fromA || sB == fromB) {
      return toA - sA;
    } else {
      pA = sA;
      pB = sB;
    }
  }
}
function findMatch(a, fromA, toA, b, fromB, toB, size, divideTo) {
  let rangeB = b.slice(fromB, toB);
  let best = null;
  for (; ; ) {
    if (best || size < divideTo)
      return best;
    for (let start = fromA + size; ; ) {
      if (!validIndex(a, start))
        start++;
      let end = start + size;
      if (!validIndex(a, end))
        end += end == start + 1 ? 1 : -1;
      if (end >= toA)
        break;
      let seed = a.slice(start, end);
      let found = -1;
      while ((found = rangeB.indexOf(seed, found + 1)) != -1) {
        let prefixAfter = commonPrefix(a, end, toA, b, fromB + found + seed.length, toB);
        let suffixBefore = commonSuffix(a, fromA, start, b, fromB, fromB + found);
        let length = seed.length + prefixAfter + suffixBefore;
        if (!best || best[2] < length)
          best = [start - suffixBefore, fromB + found - suffixBefore, length];
      }
      start = end;
    }
    if (divideTo < 0)
      return best;
    size = size >> 1;
  }
}
function halfMatch(a, fromA, toA, b, fromB, toB) {
  let lenA = toA - fromA, lenB = toB - fromB;
  if (lenA < lenB) {
    let result = halfMatch(b, fromB, toB, a, fromA, toA);
    return result && [result[1], result[0], result[2]];
  }
  if (lenA < 4 || lenB * 2 < lenA)
    return null;
  return findMatch(a, fromA, toA, b, fromB, toB, Math.floor(lenA / 4), -1);
}
function crudeMatch(a, fromA, toA, b, fromB, toB) {
  crude = true;
  let lenA = toA - fromA, lenB = toB - fromB;
  let result;
  if (lenA < lenB) {
    let inv = findMatch(b, fromB, toB, a, fromA, toA, Math.floor(lenA / 6), 50);
    result = inv && [inv[1], inv[0], inv[2]];
  } else {
    result = findMatch(a, fromA, toA, b, fromB, toB, Math.floor(lenB / 6), 50);
  }
  if (!result)
    return [new Change(fromA, toA, fromB, toB)];
  let [sharedA, sharedB, sharedLen] = result;
  return findDiff(a, fromA, sharedA, b, fromB, sharedB).concat(findDiff(a, sharedA + sharedLen, toA, b, sharedB + sharedLen, toB));
}
function mergeAdjacent(changes, minGap) {
  for (let i = 1; i < changes.length; i++) {
    let prev = changes[i - 1], cur = changes[i];
    if (prev.toA > cur.fromA - minGap && prev.toB > cur.fromB - minGap) {
      changes[i - 1] = new Change(prev.fromA, cur.toA, prev.fromB, cur.toB);
      changes.splice(i--, 1);
    }
  }
}
function normalize(a, b, changes) {
  for (; ; ) {
    mergeAdjacent(changes, 1);
    let moved = false;
    for (let i = 0; i < changes.length; i++) {
      let ch = changes[i], pre, post;
      if (pre = commonPrefix(a, ch.fromA, ch.toA, b, ch.fromB, ch.toB))
        ch = changes[i] = new Change(ch.fromA + pre, ch.toA, ch.fromB + pre, ch.toB);
      if (post = commonSuffix(a, ch.fromA, ch.toA, b, ch.fromB, ch.toB))
        ch = changes[i] = new Change(ch.fromA, ch.toA - post, ch.fromB, ch.toB - post);
      let lenA = ch.toA - ch.fromA, lenB = ch.toB - ch.fromB;
      if (lenA && lenB)
        continue;
      let beforeLen = ch.fromA - (i ? changes[i - 1].toA : 0);
      let afterLen = (i < changes.length - 1 ? changes[i + 1].fromA : a.length) - ch.toA;
      if (!beforeLen || !afterLen)
        continue;
      let text = lenA ? a.slice(ch.fromA, ch.toA) : b.slice(ch.fromB, ch.toB);
      if (beforeLen <= text.length && a.slice(ch.fromA - beforeLen, ch.fromA) == text.slice(text.length - beforeLen)) {
        changes[i] = new Change(ch.fromA - beforeLen, ch.toA - beforeLen, ch.fromB - beforeLen, ch.toB - beforeLen);
        moved = true;
      } else if (afterLen <= text.length && a.slice(ch.toA, ch.toA + afterLen) == text.slice(0, afterLen)) {
        changes[i] = new Change(ch.fromA + afterLen, ch.toA + afterLen, ch.fromB + afterLen, ch.toB + afterLen);
        moved = true;
      }
    }
    if (!moved)
      break;
  }
  return changes;
}
function makePresentable(changes, a, b) {
  for (let posA = 0, i = 0; i < changes.length; i++) {
    let change = changes[i];
    let lenA = change.toA - change.fromA, lenB = change.toB - change.fromB;
    if (lenA && lenB || lenA > 3 || lenB > 3) {
      let nextChangeA = i == changes.length - 1 ? a.length : changes[i + 1].fromA;
      let maxScanBefore = change.fromA - posA, maxScanAfter = nextChangeA - change.toA;
      let boundBefore = findWordBoundaryBefore(a, change.fromA, maxScanBefore);
      let boundAfter = findWordBoundaryAfter(a, change.toA, maxScanAfter);
      let lenBefore = change.fromA - boundBefore, lenAfter = boundAfter - change.toA;
      if ((!lenA || !lenB) && lenBefore && lenAfter) {
        let changeLen = Math.max(lenA, lenB);
        let [changeText, changeFrom, changeTo] = lenA ? [a, change.fromA, change.toA] : [b, change.fromB, change.toB];
        if (changeLen > lenBefore && a.slice(boundBefore, change.fromA) == changeText.slice(changeTo - lenBefore, changeTo)) {
          change = changes[i] = new Change(boundBefore, boundBefore + lenA, change.fromB - lenBefore, change.toB - lenBefore);
          boundBefore = change.fromA;
          boundAfter = findWordBoundaryAfter(a, change.toA, nextChangeA - change.toA);
        } else if (changeLen > lenAfter && a.slice(change.toA, boundAfter) == changeText.slice(changeFrom, changeFrom + lenAfter)) {
          change = changes[i] = new Change(boundAfter - lenA, boundAfter, change.fromB + lenAfter, change.toB + lenAfter);
          boundAfter = change.toA;
          boundBefore = findWordBoundaryBefore(a, change.fromA, change.fromA - posA);
        }
        lenBefore = change.fromA - boundBefore;
        lenAfter = boundAfter - change.toA;
      }
      if (lenBefore || lenAfter) {
        change = changes[i] = new Change(change.fromA - lenBefore, change.toA + lenAfter, change.fromB - lenBefore, change.toB + lenAfter);
      } else if (!lenA) {
        let first = findLineBreakAfter(b, change.fromB, change.toB), len;
        let last = first < 0 ? -1 : findLineBreakBefore(b, change.toB, change.fromB);
        if (first > -1 && (len = first - change.fromB) <= maxScanAfter && b.slice(change.fromB, first) == b.slice(change.toB, change.toB + len))
          change = changes[i] = change.offset(len);
        else if (last > -1 && (len = change.toB - last) <= maxScanBefore && b.slice(change.fromB - len, change.fromB) == b.slice(last, change.toB))
          change = changes[i] = change.offset(-len);
      } else if (!lenB) {
        let first = findLineBreakAfter(a, change.fromA, change.toA), len;
        let last = first < 0 ? -1 : findLineBreakBefore(a, change.toA, change.fromA);
        if (first > -1 && (len = first - change.fromA) <= maxScanAfter && a.slice(change.fromA, first) == a.slice(change.toA, change.toA + len))
          change = changes[i] = change.offset(len);
        else if (last > -1 && (len = change.toA - last) <= maxScanBefore && a.slice(change.fromA - len, change.fromA) == a.slice(last, change.toA))
          change = changes[i] = change.offset(-len);
      }
    }
    posA = change.toA;
  }
  mergeAdjacent(changes, 3);
  return changes;
}
var wordChar;
try {
  wordChar = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}]", "u");
} catch (_) {
}
function asciiWordChar(code) {
  return code > 48 && code < 58 || code > 64 && code < 91 || code > 96 && code < 123;
}
function wordCharAfter(s, pos) {
  if (pos == s.length)
    return 0;
  let next = s.charCodeAt(pos);
  if (next < 192)
    return asciiWordChar(next) ? 1 : 0;
  if (!wordChar)
    return 0;
  if (!isSurrogate1(next) || pos == s.length - 1)
    return wordChar.test(String.fromCharCode(next)) ? 1 : 0;
  return wordChar.test(s.slice(pos, pos + 2)) ? 2 : 0;
}
function wordCharBefore(s, pos) {
  if (!pos)
    return 0;
  let prev = s.charCodeAt(pos - 1);
  if (prev < 192)
    return asciiWordChar(prev) ? 1 : 0;
  if (!wordChar)
    return 0;
  if (!isSurrogate2(prev) || pos == 1)
    return wordChar.test(String.fromCharCode(prev)) ? 1 : 0;
  return wordChar.test(s.slice(pos - 2, pos)) ? 2 : 0;
}
var MAX_SCAN = 8;
function findWordBoundaryAfter(s, pos, max) {
  if (pos == s.length || !wordCharBefore(s, pos))
    return pos;
  for (let cur = pos, end = pos + max, i = 0; i < MAX_SCAN; i++) {
    let size = wordCharAfter(s, cur);
    if (!size || cur + size > end)
      return cur;
    cur += size;
  }
  return pos;
}
function findWordBoundaryBefore(s, pos, max) {
  if (!pos || !wordCharAfter(s, pos))
    return pos;
  for (let cur = pos, end = pos - max, i = 0; i < MAX_SCAN; i++) {
    let size = wordCharBefore(s, cur);
    if (!size || cur - size < end)
      return cur;
    cur -= size;
  }
  return pos;
}
function findLineBreakBefore(s, pos, stop) {
  for (; pos != stop; pos--)
    if (s.charCodeAt(pos - 1) == 10)
      return pos;
  return -1;
}
function findLineBreakAfter(s, pos, stop) {
  for (; pos != stop; pos++)
    if (s.charCodeAt(pos) == 10)
      return pos;
  return -1;
}
var isSurrogate1 = (code) => code >= 55296 && code <= 56319;
var isSurrogate2 = (code) => code >= 56320 && code <= 57343;
function validIndex(s, index) {
  return !index || index == s.length || !isSurrogate1(s.charCodeAt(index - 1)) || !isSurrogate2(s.charCodeAt(index));
}
function diff(a, b, config) {
  var _a;
  let override = config === null || config === void 0 ? void 0 : config.override;
  if (override)
    return override(a, b);
  scanLimit = ((_a = config === null || config === void 0 ? void 0 : config.scanLimit) !== null && _a !== void 0 ? _a : 1e9) >> 1;
  timeout = (config === null || config === void 0 ? void 0 : config.timeout) ? Date.now() + config.timeout : 0;
  crude = false;
  return normalize(a, b, findDiff(a, 0, a.length, b, 0, b.length));
}
function diffIsPrecise() {
  return !crude;
}
function presentableDiff(a, b, config) {
  return makePresentable(diff(a, b, config), a, b);
}
var mergeConfig = /* @__PURE__ */ Facet.define({
  combine: (values) => values[0]
});
var setChunks = /* @__PURE__ */ StateEffect.define();
var computeChunks = /* @__PURE__ */ Facet.define();
var ChunkField = /* @__PURE__ */ StateField.define({
  create(state) {
    return null;
  },
  update(current, tr) {
    for (let e of tr.effects)
      if (e.is(setChunks))
        current = e.value;
    for (let comp of tr.state.facet(computeChunks))
      current = comp(current, tr);
    return current;
  }
});
var Chunk = class _Chunk {
  constructor(changes, fromA, toA, fromB, toB, precise = true) {
    this.changes = changes;
    this.fromA = fromA;
    this.toA = toA;
    this.fromB = fromB;
    this.toB = toB;
    this.precise = precise;
  }
  /**
  @internal
  */
  offset(offA, offB) {
    return offA || offB ? new _Chunk(this.changes, this.fromA + offA, this.toA + offA, this.fromB + offB, this.toB + offB, this.precise) : this;
  }
  /**
  Returns `fromA` if the chunk is empty in A, or the end of the
  last line in the chunk otherwise.
  */
  get endA() {
    return Math.max(this.fromA, this.toA - 1);
  }
  /**
  Returns `fromB` if the chunk is empty in B, or the end of the
  last line in the chunk otherwise.
  */
  get endB() {
    return Math.max(this.fromB, this.toB - 1);
  }
  /**
  Build a set of changed chunks for the given documents.
  */
  static build(a, b, conf) {
    let diff2 = presentableDiff(a.toString(), b.toString(), conf);
    return toChunks(diff2, a, b, 0, 0, diffIsPrecise());
  }
  /**
  Update a set of chunks for changes in document A. `a` should
  hold the updated document A.
  */
  static updateA(chunks, a, b, changes, conf) {
    return updateChunks(findRangesForChange(chunks, changes, true, b.length), chunks, a, b, conf);
  }
  /**
  Update a set of chunks for changes in document B.
  */
  static updateB(chunks, a, b, changes, conf) {
    return updateChunks(findRangesForChange(chunks, changes, false, a.length), chunks, a, b, conf);
  }
};
function fromLine(fromA, fromB, a, b) {
  let lineA = a.lineAt(fromA), lineB = b.lineAt(fromB);
  return lineA.to == fromA && lineB.to == fromB && fromA < a.length && fromB < b.length ? [fromA + 1, fromB + 1] : [lineA.from, lineB.from];
}
function toLine(toA, toB, a, b) {
  let lineA = a.lineAt(toA), lineB = b.lineAt(toB);
  return lineA.from == toA && lineB.from == toB ? [toA, toB] : [lineA.to + 1, lineB.to + 1];
}
function toChunks(changes, a, b, offA, offB, precise) {
  let chunks = [];
  for (let i = 0; i < changes.length; i++) {
    let change = changes[i];
    let [fromA, fromB] = fromLine(change.fromA + offA, change.fromB + offB, a, b);
    let [toA, toB] = toLine(change.toA + offA, change.toB + offB, a, b);
    let chunk = [change.offset(-fromA + offA, -fromB + offB)];
    while (i < changes.length - 1) {
      let next = changes[i + 1];
      let [nextA, nextB] = fromLine(next.fromA + offA, next.fromB + offB, a, b);
      if (nextA > toA + 1 && nextB > toB + 1)
        break;
      chunk.push(next.offset(-fromA + offA, -fromB + offB));
      [toA, toB] = toLine(next.toA + offA, next.toB + offB, a, b);
      i++;
    }
    chunks.push(new Chunk(chunk, fromA, Math.max(fromA, toA), fromB, Math.max(fromB, toB), precise));
  }
  return chunks;
}
var updateMargin = 1e3;
function findPos(chunks, pos, isA, start) {
  let lo = 0, hi = chunks.length;
  for (; ; ) {
    if (lo == hi) {
      let refA = 0, refB = 0;
      if (lo)
        ({ toA: refA, toB: refB } = chunks[lo - 1]);
      let off = pos - (isA ? refA : refB);
      return [refA + off, refB + off];
    }
    let mid = lo + hi >> 1, chunk = chunks[mid];
    let [from, to] = isA ? [chunk.fromA, chunk.toA] : [chunk.fromB, chunk.toB];
    if (from > pos)
      hi = mid;
    else if (to <= pos)
      lo = mid + 1;
    else
      return start ? [chunk.fromA, chunk.fromB] : [chunk.toA, chunk.toB];
  }
}
function findRangesForChange(chunks, changes, isA, otherLen) {
  let ranges = [];
  changes.iterChangedRanges((cFromA, cToA, cFromB, cToB) => {
    let fromA = 0, toA = isA ? changes.length : otherLen;
    let fromB = 0, toB = isA ? otherLen : changes.length;
    if (cFromA > updateMargin)
      [fromA, fromB] = findPos(chunks, cFromA - updateMargin, isA, true);
    if (cToA < changes.length - updateMargin)
      [toA, toB] = findPos(chunks, cToA + updateMargin, isA, false);
    let lenDiff = cToB - cFromB - (cToA - cFromA), last;
    let [diffA, diffB] = isA ? [lenDiff, 0] : [0, lenDiff];
    if (ranges.length && (last = ranges[ranges.length - 1]).toA >= fromA)
      ranges[ranges.length - 1] = {
        fromA: last.fromA,
        fromB: last.fromB,
        toA,
        toB,
        diffA: last.diffA + diffA,
        diffB: last.diffB + diffB
      };
    else
      ranges.push({ fromA, toA, fromB, toB, diffA, diffB });
  });
  return ranges;
}
function updateChunks(ranges, chunks, a, b, conf) {
  if (!ranges.length)
    return chunks;
  let result = [];
  for (let i = 0, offA = 0, offB = 0, chunkI = 0; ; i++) {
    let range = i == ranges.length ? null : ranges[i];
    let fromA = range ? range.fromA + offA : a.length, fromB = range ? range.fromB + offB : b.length;
    while (chunkI < chunks.length) {
      let next = chunks[chunkI];
      if (range && (next.toA + offA > fromA || next.toB + offB > fromB))
        break;
      result.push(next.offset(offA, offB));
      chunkI++;
    }
    if (!range)
      break;
    let toA = range.toA + offA + range.diffA, toB = range.toB + offB + range.diffB;
    let diff2 = presentableDiff(a.sliceString(fromA, toA), b.sliceString(fromB, toB), conf);
    for (let chunk of toChunks(diff2, a, b, fromA, fromB, diffIsPrecise()))
      result.push(chunk);
    offA += range.diffA;
    offB += range.diffB;
    while (chunkI < chunks.length) {
      let next = chunks[chunkI];
      if (next.fromA + offA > toA && next.fromB + offB > toB)
        break;
      chunkI++;
    }
  }
  return result;
}
var defaultDiffConfig = { scanLimit: 500 };
var decorateChunks = /* @__PURE__ */ ViewPlugin.fromClass(class {
  constructor(view) {
    ({ deco: this.deco, gutter: this.gutter } = getChunkDeco(view));
  }
  update(update) {
    if (update.docChanged || update.viewportChanged || chunksChanged(update.startState, update.state) || configChanged(update.startState, update.state))
      ({ deco: this.deco, gutter: this.gutter } = getChunkDeco(update.view));
  }
}, {
  decorations: (d) => d.deco
});
var changeGutter = /* @__PURE__ */ Prec.low(/* @__PURE__ */ gutter({
  class: "cm-changeGutter",
  markers: (view) => {
    var _a;
    return ((_a = view.plugin(decorateChunks)) === null || _a === void 0 ? void 0 : _a.gutter) || RangeSet.empty;
  }
}));
function chunksChanged(s1, s2) {
  return s1.field(ChunkField, false) != s2.field(ChunkField, false);
}
function configChanged(s1, s2) {
  return s1.facet(mergeConfig) != s2.facet(mergeConfig);
}
var changedLine = /* @__PURE__ */ Decoration.line({ class: "cm-changedLine" });
var changedText = /* @__PURE__ */ Decoration.mark({ class: "cm-changedText" });
var inserted = /* @__PURE__ */ Decoration.mark({ tagName: "ins", class: "cm-insertedLine" });
var deleted = /* @__PURE__ */ Decoration.mark({ tagName: "del", class: "cm-deletedLine" });
var changedLineGutterMarker = /* @__PURE__ */ new class extends GutterMarker {
  constructor() {
    super(...arguments);
    this.elementClass = "cm-changedLineGutter";
  }
}();
function buildChunkDeco(chunk, doc, isA, highlight, builder, gutterBuilder) {
  let from = isA ? chunk.fromA : chunk.fromB, to = isA ? chunk.toA : chunk.toB;
  let changeI = 0;
  if (from != to) {
    builder.add(from, from, changedLine);
    builder.add(from, to, isA ? deleted : inserted);
    if (gutterBuilder)
      gutterBuilder.add(from, from, changedLineGutterMarker);
    for (let iter = doc.iterRange(from, to - 1), pos = from; !iter.next().done; ) {
      if (iter.lineBreak) {
        pos++;
        builder.add(pos, pos, changedLine);
        if (gutterBuilder)
          gutterBuilder.add(pos, pos, changedLineGutterMarker);
        continue;
      }
      let lineEnd = pos + iter.value.length;
      if (highlight)
        while (changeI < chunk.changes.length) {
          let nextChange = chunk.changes[changeI];
          let nextFrom = from + (isA ? nextChange.fromA : nextChange.fromB);
          let nextTo = from + (isA ? nextChange.toA : nextChange.toB);
          let chFrom = Math.max(pos, nextFrom), chTo = Math.min(lineEnd, nextTo);
          if (chFrom < chTo)
            builder.add(chFrom, chTo, changedText);
          if (nextTo < lineEnd)
            changeI++;
          else
            break;
        }
      pos = lineEnd;
    }
  }
}
function getChunkDeco(view) {
  let chunks = view.state.field(ChunkField);
  let { side, highlightChanges, markGutter, overrideChunk } = view.state.facet(mergeConfig), isA = side == "a";
  let builder = new RangeSetBuilder();
  let gutterBuilder = markGutter ? new RangeSetBuilder() : null;
  let { from, to } = view.viewport;
  for (let chunk of chunks) {
    if ((isA ? chunk.fromA : chunk.fromB) >= to)
      break;
    if ((isA ? chunk.toA : chunk.toB) > from) {
      if (!overrideChunk || !overrideChunk(view.state, chunk, builder, gutterBuilder))
        buildChunkDeco(chunk, view.state.doc, isA, highlightChanges, builder, gutterBuilder);
    }
  }
  return { deco: builder.finish(), gutter: gutterBuilder && gutterBuilder.finish() };
}
var Spacer = class extends WidgetType {
  constructor(height) {
    super();
    this.height = height;
  }
  eq(other) {
    return this.height == other.height;
  }
  toDOM() {
    let elt = document.createElement("div");
    elt.className = "cm-mergeSpacer";
    elt.style.height = this.height + "px";
    return elt;
  }
  updateDOM(dom) {
    dom.style.height = this.height + "px";
    return true;
  }
  get estimatedHeight() {
    return this.height;
  }
  ignoreEvent() {
    return false;
  }
};
var adjustSpacers = /* @__PURE__ */ StateEffect.define({
  map: (value, mapping) => value.map(mapping)
});
var Spacers = /* @__PURE__ */ StateField.define({
  create: () => Decoration.none,
  update: (spacers, tr) => {
    for (let e of tr.effects)
      if (e.is(adjustSpacers))
        return e.value;
    return spacers.map(tr.changes);
  },
  provide: (f) => EditorView.decorations.from(f)
});
var epsilon = 0.01;
function compareSpacers(a, b) {
  if (a.size != b.size)
    return false;
  let iA = a.iter(), iB = b.iter();
  while (iA.value) {
    if (iA.from != iB.from || Math.abs(iA.value.spec.widget.height - iB.value.spec.widget.height) > 1)
      return false;
    iA.next();
    iB.next();
  }
  return true;
}
function updateSpacers(a, b, chunks) {
  let buildA = new RangeSetBuilder(), buildB = new RangeSetBuilder();
  let spacersA = a.state.field(Spacers).iter(), spacersB = b.state.field(Spacers).iter();
  let posA = 0, posB = 0, offA = 0, offB = 0, vpA = a.viewport, vpB = b.viewport;
  for (let chunkI = 0; ; chunkI++) {
    let chunk = chunkI < chunks.length ? chunks[chunkI] : null;
    let endA = chunk ? chunk.fromA : a.state.doc.length, endB = chunk ? chunk.fromB : b.state.doc.length;
    if (posA < endA) {
      let heightA = a.lineBlockAt(posA).top + offA;
      let heightB = b.lineBlockAt(posB).top + offB;
      let diff2 = heightA - heightB;
      if (diff2 < -epsilon) {
        offA -= diff2;
        buildA.add(posA, posA, Decoration.widget({
          widget: new Spacer(-diff2),
          block: true,
          side: -1
        }));
      } else if (diff2 > epsilon) {
        offB += diff2;
        buildB.add(posB, posB, Decoration.widget({
          widget: new Spacer(diff2),
          block: true,
          side: -1
        }));
      }
    }
    if (endA > posA + 1e3 && posA < vpA.from && endA > vpA.from && posB < vpB.from && endB > vpB.from) {
      let off = Math.min(vpA.from - posA, vpB.from - posB);
      posA += off;
      posB += off;
      chunkI--;
    } else if (!chunk) {
      break;
    } else {
      posA = chunk.toA;
      posB = chunk.toB;
    }
    while (spacersA.value && spacersA.from < posA) {
      offA -= spacersA.value.spec.widget.height;
      spacersA.next();
    }
    while (spacersB.value && spacersB.from < posB) {
      offB -= spacersB.value.spec.widget.height;
      spacersB.next();
    }
  }
  while (spacersA.value) {
    offA -= spacersA.value.spec.widget.height;
    spacersA.next();
  }
  while (spacersB.value) {
    offB -= spacersB.value.spec.widget.height;
    spacersB.next();
  }
  let docDiff = a.contentHeight + offA - (b.contentHeight + offB);
  if (docDiff < epsilon) {
    buildA.add(a.state.doc.length, a.state.doc.length, Decoration.widget({
      widget: new Spacer(-docDiff),
      block: true,
      side: 1
    }));
  } else if (docDiff > epsilon) {
    buildB.add(b.state.doc.length, b.state.doc.length, Decoration.widget({
      widget: new Spacer(docDiff),
      block: true,
      side: 1
    }));
  }
  let decoA = buildA.finish(), decoB = buildB.finish();
  if (!compareSpacers(decoA, a.state.field(Spacers)))
    a.dispatch({ effects: adjustSpacers.of(decoA) });
  if (!compareSpacers(decoB, b.state.field(Spacers)))
    b.dispatch({ effects: adjustSpacers.of(decoB) });
}
var uncollapseUnchanged = /* @__PURE__ */ StateEffect.define({
  map: (value, change) => change.mapPos(value)
});
var CollapseWidget = class extends WidgetType {
  constructor(lines) {
    super();
    this.lines = lines;
  }
  eq(other) {
    return this.lines == other.lines;
  }
  toDOM(view) {
    let outer = document.createElement("div");
    outer.className = "cm-collapsedLines";
    outer.textContent = view.state.phrase("$ unchanged lines", this.lines);
    outer.addEventListener("click", (e) => {
      let pos = view.posAtDOM(e.target);
      view.dispatch({ effects: uncollapseUnchanged.of(pos) });
      let { side, sibling } = view.state.facet(mergeConfig);
      if (sibling)
        sibling().dispatch({ effects: uncollapseUnchanged.of(mapPos(pos, view.state.field(ChunkField), side == "a")) });
    });
    return outer;
  }
  ignoreEvent(e) {
    return e instanceof MouseEvent;
  }
  get estimatedHeight() {
    return 27;
  }
  get type() {
    return "collapsed-unchanged-code";
  }
};
function mapPos(pos, chunks, isA) {
  let startOur = 0, startOther = 0;
  for (let i = 0; ; i++) {
    let next = i < chunks.length ? chunks[i] : null;
    if (!next || (isA ? next.fromA : next.fromB) >= pos)
      return startOther + (pos - startOur);
    [startOur, startOther] = isA ? [next.toA, next.toB] : [next.toB, next.toA];
  }
}
var CollapsedRanges = /* @__PURE__ */ StateField.define({
  create(state) {
    return Decoration.none;
  },
  update(deco, tr) {
    deco = deco.map(tr.changes);
    for (let e of tr.effects)
      if (e.is(uncollapseUnchanged))
        deco = deco.update({ filter: (from) => from != e.value });
    return deco;
  },
  provide: (f) => EditorView.decorations.from(f)
});
function collapseUnchanged({ margin = 3, minSize = 4 }) {
  return CollapsedRanges.init((state) => buildCollapsedRanges(state, margin, minSize));
}
function buildCollapsedRanges(state, margin, minLines) {
  let builder = new RangeSetBuilder();
  let isA = state.facet(mergeConfig).side == "a";
  let chunks = state.field(ChunkField);
  let prevLine = 1;
  for (let i = 0; ; i++) {
    let chunk = i < chunks.length ? chunks[i] : null;
    let collapseFrom = i ? prevLine + margin : 1;
    let collapseTo = chunk ? state.doc.lineAt(isA ? chunk.fromA : chunk.fromB).number - 1 - margin : state.doc.lines;
    let lines = collapseTo - collapseFrom + 1;
    if (lines >= minLines) {
      builder.add(state.doc.line(collapseFrom).from, state.doc.line(collapseTo).to, Decoration.replace({
        widget: new CollapseWidget(lines),
        block: true
      }));
    }
    if (!chunk)
      break;
    prevLine = state.doc.lineAt(Math.min(state.doc.length, isA ? chunk.toA : chunk.toB)).number;
  }
  return builder.finish();
}
var externalTheme = /* @__PURE__ */ EditorView.styleModule.of(/* @__PURE__ */ new StyleModule({
  ".cm-mergeView": {
    overflowY: "auto"
  },
  ".cm-mergeViewEditors": {
    display: "flex",
    alignItems: "stretch"
  },
  ".cm-mergeViewEditor": {
    flexGrow: 1,
    flexBasis: 0,
    overflow: "hidden"
  },
  ".cm-merge-revert": {
    width: "1.6em",
    flexGrow: 0,
    flexShrink: 0,
    position: "relative"
  },
  ".cm-merge-revert button": {
    position: "absolute",
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "center",
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer"
  }
}));
var baseTheme = /* @__PURE__ */ EditorView.baseTheme({
  ".cm-mergeView & .cm-scroller, .cm-mergeView &": {
    height: "auto !important",
    overflowY: "visible !important"
  },
  "&.cm-merge-a .cm-changedLine, .cm-deletedChunk": {
    backgroundColor: "rgba(160, 128, 100, .08)"
  },
  "&.cm-merge-b .cm-changedLine, .cm-inlineChangedLine": {
    backgroundColor: "rgba(100, 160, 128, .08)"
  },
  "&light.cm-merge-a .cm-changedText, &light .cm-deletedChunk .cm-deletedText": {
    background: "linear-gradient(#ee443366, #ee443366) bottom/100% 2px no-repeat"
  },
  "&dark.cm-merge-a .cm-changedText, &dark .cm-deletedChunk .cm-deletedText": {
    background: "linear-gradient(#ffaa9966, #ffaa9966) bottom/100% 2px no-repeat"
  },
  "&light.cm-merge-b .cm-changedText": {
    background: "linear-gradient(#22bb22aa, #22bb22aa) bottom/100% 2px no-repeat"
  },
  "&dark.cm-merge-b .cm-changedText": {
    background: "linear-gradient(#88ff88aa, #88ff88aa) bottom/100% 2px no-repeat"
  },
  "&.cm-merge-b .cm-deletedText": {
    background: "#ff000033"
  },
  ".cm-insertedLine, .cm-deletedLine, .cm-deletedLine del": {
    textDecoration: "none"
  },
  ".cm-deletedChunk": {
    paddingLeft: "6px",
    "& .cm-chunkButtons": {
      position: "absolute",
      insetInlineEnd: "5px"
    },
    "& button": {
      border: "none",
      cursor: "pointer",
      color: "white",
      margin: "0 2px",
      borderRadius: "3px",
      "&[name=accept]": { background: "#2a2" },
      "&[name=reject]": { background: "#d43" }
    }
  },
  ".cm-collapsedLines": {
    padding: "5px 5px 5px 10px",
    cursor: "pointer",
    "&:before": {
      content: '"\u299A"',
      marginInlineEnd: "7px"
    },
    "&:after": {
      content: '"\u299A"',
      marginInlineStart: "7px"
    }
  },
  "&light .cm-collapsedLines": {
    color: "#444",
    background: "linear-gradient(to bottom, transparent 0, #f3f3f3 30%, #f3f3f3 70%, transparent 100%)"
  },
  "&dark .cm-collapsedLines": {
    color: "#ddd",
    background: "linear-gradient(to bottom, transparent 0, #222 30%, #222 70%, transparent 100%)"
  },
  ".cm-changeGutter": { width: "3px", paddingLeft: "1px" },
  "&light.cm-merge-a .cm-changedLineGutter, &light .cm-deletedLineGutter": { background: "#e43" },
  "&dark.cm-merge-a .cm-changedLineGutter, &dark .cm-deletedLineGutter": { background: "#fa9" },
  "&light.cm-merge-b .cm-changedLineGutter": { background: "#2b2" },
  "&dark.cm-merge-b .cm-changedLineGutter": { background: "#8f8" },
  ".cm-inlineChangedLineGutter": { background: "#75d" }
});
var collapseCompartment = /* @__PURE__ */ new Compartment();
var configCompartment = /* @__PURE__ */ new Compartment();
var MergeView = class {
  /**
  Create a new merge view.
  */
  constructor(config) {
    this.revertDOM = null;
    this.revertToA = false;
    this.revertToLeft = false;
    this.measuring = -1;
    this.diffConf = config.diffConfig || defaultDiffConfig;
    let sharedExtensions = [
      Prec.low(decorateChunks),
      baseTheme,
      externalTheme,
      Spacers,
      EditorView.updateListener.of((update) => {
        if (this.measuring < 0 && (update.heightChanged || update.viewportChanged) && !update.transactions.some((tr) => tr.effects.some((e) => e.is(adjustSpacers))))
          this.measure();
      })
    ];
    let configA = [mergeConfig.of({
      side: "a",
      sibling: () => this.b,
      highlightChanges: config.highlightChanges !== false,
      markGutter: config.gutter !== false
    })];
    if (config.gutter !== false)
      configA.push(changeGutter);
    let stateA = EditorState.create({
      doc: config.a.doc,
      selection: config.a.selection,
      extensions: [
        config.a.extensions || [],
        EditorView.editorAttributes.of({ class: "cm-merge-a" }),
        configCompartment.of(configA),
        sharedExtensions
      ]
    });
    let configB = [mergeConfig.of({
      side: "b",
      sibling: () => this.a,
      highlightChanges: config.highlightChanges !== false,
      markGutter: config.gutter !== false
    })];
    if (config.gutter !== false)
      configB.push(changeGutter);
    let stateB = EditorState.create({
      doc: config.b.doc,
      selection: config.b.selection,
      extensions: [
        config.b.extensions || [],
        EditorView.editorAttributes.of({ class: "cm-merge-b" }),
        configCompartment.of(configB),
        sharedExtensions
      ]
    });
    this.chunks = Chunk.build(stateA.doc, stateB.doc, this.diffConf);
    let add = [
      ChunkField.init(() => this.chunks),
      collapseCompartment.of(config.collapseUnchanged ? collapseUnchanged(config.collapseUnchanged) : [])
    ];
    stateA = stateA.update({ effects: StateEffect.appendConfig.of(add) }).state;
    stateB = stateB.update({ effects: StateEffect.appendConfig.of(add) }).state;
    this.dom = document.createElement("div");
    this.dom.className = "cm-mergeView";
    this.editorDOM = this.dom.appendChild(document.createElement("div"));
    this.editorDOM.className = "cm-mergeViewEditors";
    let orientation = config.orientation || "a-b";
    let wrapA = document.createElement("div");
    wrapA.className = "cm-mergeViewEditor";
    let wrapB = document.createElement("div");
    wrapB.className = "cm-mergeViewEditor";
    this.editorDOM.appendChild(orientation == "a-b" ? wrapA : wrapB);
    this.editorDOM.appendChild(orientation == "a-b" ? wrapB : wrapA);
    this.a = new EditorView({
      state: stateA,
      parent: wrapA,
      root: config.root,
      dispatchTransactions: (trs) => this.dispatch(trs, this.a)
    });
    this.b = new EditorView({
      state: stateB,
      parent: wrapB,
      root: config.root,
      dispatchTransactions: (trs) => this.dispatch(trs, this.b)
    });
    this.setupRevertControls(!!config.revertControls, config.revertControls == "b-to-a", config.renderRevertControl);
    if (config.parent)
      config.parent.appendChild(this.dom);
    this.scheduleMeasure();
  }
  dispatch(trs, target) {
    if (trs.some((tr) => tr.docChanged)) {
      let last = trs[trs.length - 1];
      let changes = trs.reduce((chs, tr) => chs.compose(tr.changes), ChangeSet.empty(trs[0].startState.doc.length));
      this.chunks = target == this.a ? Chunk.updateA(this.chunks, last.newDoc, this.b.state.doc, changes, this.diffConf) : Chunk.updateB(this.chunks, this.a.state.doc, last.newDoc, changes, this.diffConf);
      target.update([...trs, last.state.update({ effects: setChunks.of(this.chunks) })]);
      let other = target == this.a ? this.b : this.a;
      other.update([other.state.update({ effects: setChunks.of(this.chunks) })]);
      this.scheduleMeasure();
    } else {
      target.update(trs);
    }
  }
  /**
  Reconfigure an existing merge view.
  */
  reconfigure(config) {
    if ("diffConfig" in config) {
      this.diffConf = config.diffConfig;
    }
    if ("orientation" in config) {
      let aB = config.orientation != "b-a";
      if (aB != (this.editorDOM.firstChild == this.a.dom.parentNode)) {
        let domA = this.a.dom.parentNode, domB = this.b.dom.parentNode;
        domA.remove();
        domB.remove();
        this.editorDOM.insertBefore(aB ? domA : domB, this.editorDOM.firstChild);
        this.editorDOM.appendChild(aB ? domB : domA);
        this.revertToLeft = !this.revertToLeft;
        if (this.revertDOM)
          this.revertDOM.textContent = "";
      }
    }
    if ("revertControls" in config || "renderRevertControl" in config) {
      let controls = !!this.revertDOM, toA = this.revertToA, render = this.renderRevert;
      if ("revertControls" in config) {
        controls = !!config.revertControls;
        toA = config.revertControls == "b-to-a";
      }
      if ("renderRevertControl" in config)
        render = config.renderRevertControl;
      this.setupRevertControls(controls, toA, render);
    }
    let highlight = "highlightChanges" in config, gutter2 = "gutter" in config, collapse = "collapseUnchanged" in config;
    if (highlight || gutter2 || collapse) {
      let effectsA = [], effectsB = [];
      if (highlight || gutter2) {
        let currentConfig = this.a.state.facet(mergeConfig);
        let markGutter = gutter2 ? config.gutter !== false : currentConfig.markGutter;
        let highlightChanges = highlight ? config.highlightChanges !== false : currentConfig.highlightChanges;
        effectsA.push(configCompartment.reconfigure([
          mergeConfig.of({ side: "a", sibling: () => this.b, highlightChanges, markGutter }),
          markGutter ? changeGutter : []
        ]));
        effectsB.push(configCompartment.reconfigure([
          mergeConfig.of({ side: "b", sibling: () => this.a, highlightChanges, markGutter }),
          markGutter ? changeGutter : []
        ]));
      }
      if (collapse) {
        let effect2 = collapseCompartment.reconfigure(config.collapseUnchanged ? collapseUnchanged(config.collapseUnchanged) : []);
        effectsA.push(effect2);
        effectsB.push(effect2);
      }
      this.a.dispatch({ effects: effectsA });
      this.b.dispatch({ effects: effectsB });
    }
    this.scheduleMeasure();
  }
  setupRevertControls(controls, toA, render) {
    this.revertToA = toA;
    this.revertToLeft = this.revertToA == (this.editorDOM.firstChild == this.a.dom.parentNode);
    this.renderRevert = render;
    if (!controls && this.revertDOM) {
      this.revertDOM.remove();
      this.revertDOM = null;
    } else if (controls && !this.revertDOM) {
      this.revertDOM = this.editorDOM.insertBefore(document.createElement("div"), this.editorDOM.firstChild.nextSibling);
      this.revertDOM.addEventListener("mousedown", (e) => this.revertClicked(e));
      this.revertDOM.className = "cm-merge-revert";
    } else if (this.revertDOM) {
      this.revertDOM.textContent = "";
    }
  }
  scheduleMeasure() {
    if (this.measuring < 0) {
      let win = this.dom.ownerDocument.defaultView || window;
      this.measuring = win.requestAnimationFrame(() => {
        this.measuring = -1;
        this.measure();
      });
    }
  }
  measure() {
    updateSpacers(this.a, this.b, this.chunks);
    if (this.revertDOM)
      this.updateRevertButtons();
  }
  updateRevertButtons() {
    let dom = this.revertDOM, next = dom.firstChild;
    let vpA = this.a.viewport, vpB = this.b.viewport;
    for (let i = 0; i < this.chunks.length; i++) {
      let chunk = this.chunks[i];
      if (chunk.fromA > vpA.to || chunk.fromB > vpB.to)
        break;
      if (chunk.fromA < vpA.from || chunk.fromB < vpB.from)
        continue;
      let top = this.a.lineBlockAt(chunk.fromA).top + "px";
      while (next && +next.dataset.chunk < i)
        next = rm(next);
      if (next && next.dataset.chunk == String(i)) {
        if (next.style.top != top)
          next.style.top = top;
        next = next.nextSibling;
      } else {
        dom.insertBefore(this.renderRevertButton(top, i), next);
      }
    }
    while (next)
      next = rm(next);
  }
  renderRevertButton(top, chunk) {
    let elt;
    if (this.renderRevert) {
      elt = this.renderRevert();
    } else {
      elt = document.createElement("button");
      let text = this.a.state.phrase("Revert this chunk");
      elt.setAttribute("aria-label", text);
      elt.setAttribute("title", text);
      elt.textContent = this.revertToLeft ? "\u21DC" : "\u21DD";
    }
    elt.style.top = top;
    elt.setAttribute("data-chunk", String(chunk));
    return elt;
  }
  revertClicked(e) {
    let target = e.target, chunk;
    while (target && target.parentNode != this.revertDOM)
      target = target.parentNode;
    if (target && (chunk = this.chunks[target.dataset.chunk])) {
      let [source, dest, srcFrom, srcTo, destFrom, destTo] = this.revertToA ? [this.b, this.a, chunk.fromB, chunk.toB, chunk.fromA, chunk.toA] : [this.a, this.b, chunk.fromA, chunk.toA, chunk.fromB, chunk.toB];
      let insert = source.state.sliceDoc(srcFrom, Math.max(srcFrom, srcTo - 1));
      if (srcFrom != srcTo && destTo <= dest.state.doc.length)
        insert += source.state.lineBreak;
      dest.dispatch({
        changes: { from: destFrom, to: Math.min(dest.state.doc.length, destTo), insert },
        userEvent: "revert"
      });
      e.preventDefault();
    }
  }
  /**
  Destroy this merge view.
  */
  destroy() {
    this.a.destroy();
    this.b.destroy();
    if (this.measuring > -1)
      (this.dom.ownerDocument.defaultView || window).cancelAnimationFrame(this.measuring);
    this.dom.remove();
  }
};
function rm(elt) {
  let next = elt.nextSibling;
  elt.remove();
  return next;
}

// node_modules/@acrodata/code-editor/fesm2022/acrodata-code-editor.mjs
var External = Annotation.define();
var CodeEditor = class _CodeEditor {
  constructor() {
    this._elementRef = inject(ElementRef);
    this.autoFocus = false;
    this.value = "";
    this.disabled = false;
    this.readonly = false;
    this.theme = "light";
    this.placeholder = "";
    this.indentWithTab = false;
    this.indentUnit = "";
    this.lineWrapping = false;
    this.highlightWhitespace = false;
    this.languages = [];
    this.language = "";
    this.setup = "basic";
    this.extensions = [];
    this.change = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._updateListener = EditorView.updateListener.of((vu) => {
      if (vu.docChanged && !vu.transactions.some((tr) => tr.annotation(External))) {
        const value = vu.state.doc.toString();
        this._onChange(value);
        this.change.emit(value);
      }
    });
    this._editableConf = new Compartment();
    this._readonlyConf = new Compartment();
    this._themeConf = new Compartment();
    this._placeholderConf = new Compartment();
    this._indentWithTabConf = new Compartment();
    this._indentUnitConf = new Compartment();
    this._lineWrappingConf = new Compartment();
    this._highlightWhitespaceConf = new Compartment();
    this._languageConf = new Compartment();
  }
  _getAllExtensions() {
    return [this._updateListener, this._editableConf.of([]), this._readonlyConf.of([]), this._themeConf.of([]), this._placeholderConf.of([]), this._indentWithTabConf.of([]), this._indentUnitConf.of([]), this._lineWrappingConf.of([]), this._highlightWhitespaceConf.of([]), this._languageConf.of([]), this.setup === "basic" ? basicSetup : this.setup === "minimal" ? minimalSetup : [], ...this.extensions];
  }
  ngOnChanges(changes) {
    if (!this.view) return;
    if (changes["value"]) {
      this.setValue(this.value);
    }
    if (changes["disabled"]) {
      this.setEditable(!this.disabled);
    }
    if (changes["readonly"]) {
      this.setReadonly(this.readonly);
    }
    if (changes["theme"]) {
      this.setTheme(this.theme);
    }
    if (changes["placeholder"]) {
      this.setPlaceholder(this.placeholder);
    }
    if (changes["indentWithTab"]) {
      this.setIndentWithTab(this.indentWithTab);
    }
    if (changes["indentUnit"]) {
      this.setIndentUnit(this.indentUnit);
    }
    if (changes["lineWrapping"]) {
      this.setLineWrapping(this.lineWrapping);
    }
    if (changes["highlightWhitespace"]) {
      this.setHighlightWhitespace(this.highlightWhitespace);
    }
    if (changes["language"]) {
      this.setLanguage(this.language);
    }
    if (changes["setup"] || changes["extensions"]) {
      this.setExtensions(this._getAllExtensions());
    }
  }
  ngOnInit() {
    this.state = EditorState.create({
      doc: this.value,
      extensions: this._getAllExtensions()
    });
    this.view = new EditorView({
      root: this.root,
      parent: this._elementRef.nativeElement,
      state: this.state
    });
    if (this.autoFocus) {
      this.view.focus();
    }
    this.view.contentDOM.addEventListener("focus", () => {
      this._onTouched();
      this.focus.emit();
    });
    this.view.contentDOM.addEventListener("blur", () => {
      this._onTouched();
      this.blur.emit();
    });
    this.setEditable(!this.disabled);
    this.setReadonly(this.readonly);
    this.setTheme(this.theme);
    this.setPlaceholder(this.placeholder);
    this.setIndentWithTab(this.indentWithTab);
    this.setIndentUnit(this.indentUnit);
    this.setLineWrapping(this.lineWrapping);
    this.setHighlightWhitespace(this.highlightWhitespace);
    this.setLanguage(this.language);
  }
  ngOnDestroy() {
    this.view.destroy();
  }
  writeValue(value) {
    if (this.view) {
      this.setValue(value);
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.setEditable(!isDisabled);
  }
  /** Sets editor's value. */
  setValue(value) {
    this.view.dispatch({
      changes: {
        from: 0,
        to: this.view.state.doc.length,
        insert: value
      },
      annotations: [Transaction.addToHistory.of(false), External.of(true)]
    });
  }
  _dispatchEffects(effects) {
    return this.view.dispatch({
      effects
    });
  }
  /** Sets the root extensions of the editor. */
  setExtensions(value) {
    this._dispatchEffects(StateEffect.reconfigure.of(value));
  }
  /** Sets editor's editable state. */
  setEditable(value) {
    this._dispatchEffects(this._editableConf.reconfigure(EditorView.editable.of(value)));
  }
  /** Sets editor's readonly state. */
  setReadonly(value) {
    this._dispatchEffects(this._readonlyConf.reconfigure(EditorState.readOnly.of(value)));
  }
  /** Sets editor's theme. */
  setTheme(value) {
    this._dispatchEffects(this._themeConf.reconfigure(value === "light" ? [] : value === "dark" ? oneDark : value));
  }
  /** Sets editor's placeholder. */
  setPlaceholder(value) {
    this._dispatchEffects(this._placeholderConf.reconfigure(value ? placeholder(value) : []));
  }
  /** Sets editor' indentWithTab. */
  setIndentWithTab(value) {
    this._dispatchEffects(this._indentWithTabConf.reconfigure(value ? keymap.of([indentWithTab]) : []));
  }
  /** Sets editor's indentUnit. */
  setIndentUnit(value) {
    this._dispatchEffects(this._indentUnitConf.reconfigure(value ? indentUnit.of(value) : []));
  }
  /** Sets editor's lineWrapping. */
  setLineWrapping(value) {
    this._dispatchEffects(this._lineWrappingConf.reconfigure(value ? EditorView.lineWrapping : []));
  }
  /** Sets editor's highlightWhitespace. */
  setHighlightWhitespace(value) {
    this._dispatchEffects(this._highlightWhitespaceConf.reconfigure(value ? highlightWhitespace() : []));
  }
  /** Sets editor's language dynamically. */
  setLanguage(lang) {
    if (!lang || lang == "plaintext") {
      this._dispatchEffects(this._languageConf.reconfigure([]));
      return;
    }
    if (this.languages.length === 0) {
      if (this.view) {
        console.error("No supported languages. Please set the `languages` prop at first.");
      }
      return;
    }
    const langDesc = this._findLanguage(lang);
    langDesc?.load().then((lang2) => {
      this._dispatchEffects(this._languageConf.reconfigure([lang2]));
    });
  }
  /** Find the language's extension by its name. Case insensitive. */
  _findLanguage(name) {
    for (const lang of this.languages) {
      for (const alias of [lang.name, ...lang.alias]) {
        if (name.toLowerCase() === alias.toLowerCase()) {
          return lang;
        }
      }
    }
    console.error("Language not found:", name);
    console.info("Supported language names:", this.languages.map((lang) => lang.name).join(", "));
    return null;
  }
  static {
    this.\u0275fac = function CodeEditor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeEditor)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CodeEditor,
      selectors: [["code-editor"]],
      hostAttrs: [1, "code-editor"],
      inputs: {
        root: "root",
        autoFocus: [2, "autoFocus", "autoFocus", booleanAttribute],
        value: "value",
        disabled: [2, "disabled", "disabled", booleanAttribute],
        readonly: [2, "readonly", "readonly", booleanAttribute],
        theme: "theme",
        placeholder: "placeholder",
        indentWithTab: [2, "indentWithTab", "indentWithTab", booleanAttribute],
        indentUnit: "indentUnit",
        lineWrapping: [2, "lineWrapping", "lineWrapping", booleanAttribute],
        highlightWhitespace: [2, "highlightWhitespace", "highlightWhitespace", booleanAttribute],
        languages: "languages",
        language: "language",
        setup: "setup",
        extensions: "extensions"
      },
      outputs: {
        change: "change",
        focus: "focus",
        blur: "blur"
      },
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _CodeEditor),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 0,
      vars: 0,
      template: function CodeEditor_Template(rf, ctx) {
      },
      styles: [".code-editor{display:block}.code-editor .cm-editor{height:100%}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditor, [{
    type: Component,
    args: [{
      selector: "code-editor",
      template: ``,
      host: {
        class: "code-editor"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CodeEditor),
        multi: true
      }],
      styles: [".code-editor{display:block}.code-editor .cm-editor{height:100%}\n"]
    }]
  }], null, {
    root: [{
      type: Input
    }],
    autoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    theme: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    indentWithTab: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indentUnit: [{
      type: Input
    }],
    lineWrapping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    highlightWhitespace: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    languages: [{
      type: Input
    }],
    language: [{
      type: Input
    }],
    setup: [{
      type: Input
    }],
    extensions: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }]
  });
})();
var DiffEditor = class _DiffEditor {
  constructor() {
    this._elementRef = inject(ElementRef);
    this.setup = "basic";
    this.originalValue = "";
    this.originalExtensions = [];
    this.modifiedValue = "";
    this.modifiedExtensions = [];
    this.highlightChanges = true;
    this.gutter = true;
    this.disabled = false;
    this.originalValueChange = new EventEmitter();
    this.originalFocus = new EventEmitter();
    this.originalBlur = new EventEmitter();
    this.modifiedValueChange = new EventEmitter();
    this.modifiedFocus = new EventEmitter();
    this.modifiedBlur = new EventEmitter();
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
    this._updateListener = (editor) => {
      return EditorView.updateListener.of((vu) => {
        if (vu.docChanged && !vu.transactions.some((tr) => tr.annotation(External))) {
          const value = vu.state.doc.toString();
          if (editor == "a") {
            this._onChange({
              original: value,
              modified: this.modifiedValue
            });
            this.originalValue = value;
            this.originalValueChange.emit(value);
          } else if (editor == "b") {
            this._onChange({
              original: this.originalValue,
              modified: value
            });
            this.modifiedValue = value;
            this.modifiedValueChange.emit(value);
          }
        }
      });
    };
    this._editableConf = new Compartment();
  }
  ngOnChanges(changes) {
    if (changes["originalValue"]) {
      this.setValue("a", this.originalValue);
    }
    if (changes["modifiedValue"]) {
      this.setValue("b", this.modifiedValue);
    }
    if (changes["orientation"]) {
      this.mergeView?.reconfigure({
        orientation: this.orientation
      });
    }
    if (changes["revertControls"]) {
      this.mergeView?.reconfigure({
        revertControls: this.revertControls
      });
    }
    if (changes["renderRevertControl"]) {
      this.mergeView?.reconfigure({
        renderRevertControl: this.renderRevertControl
      });
    }
    if (changes["highlightChanges"]) {
      this.mergeView?.reconfigure({
        highlightChanges: this.highlightChanges
      });
    }
    if (changes["gutter"]) {
      this.mergeView?.reconfigure({
        gutter: this.gutter
      });
    }
    if (changes["collapseUnchanged"]) {
      this.mergeView?.reconfigure({
        collapseUnchanged: this.collapseUnchanged
      });
    }
    if (changes["diffConfig"]) {
      this.mergeView?.reconfigure({
        diffConfig: this.diffConfig
      });
    }
    if (changes["disabled"]) {
      this.setEditable("a", !this.disabled);
      this.setEditable("b", !this.disabled);
    }
  }
  ngOnInit() {
    this.mergeView = new MergeView({
      parent: this._elementRef.nativeElement,
      a: {
        doc: this.originalValue,
        extensions: [this._updateListener("a"), this._editableConf.of([]), this.setup === "basic" ? basicSetup : this.setup === "minimal" ? minimalSetup : [], ...this.originalExtensions]
      },
      b: {
        doc: this.modifiedValue,
        extensions: [this._updateListener("b"), this._editableConf.of([]), this.setup === "basic" ? basicSetup : this.setup === "minimal" ? minimalSetup : [], ...this.modifiedExtensions]
      },
      orientation: this.orientation,
      revertControls: this.revertControls,
      renderRevertControl: this.renderRevertControl,
      highlightChanges: this.highlightChanges,
      gutter: this.gutter,
      collapseUnchanged: this.collapseUnchanged,
      diffConfig: this.diffConfig
    });
    this.mergeView?.a.contentDOM.addEventListener("focus", () => {
      this._onTouched();
      this.originalFocus.emit();
    });
    this.mergeView?.a.contentDOM.addEventListener("blur", () => {
      this._onTouched();
      this.originalBlur.emit();
    });
    this.mergeView?.b.contentDOM.addEventListener("focus", () => {
      this._onTouched();
      this.modifiedFocus.emit();
    });
    this.mergeView?.b.contentDOM.addEventListener("blur", () => {
      this._onTouched();
      this.modifiedBlur.emit();
    });
    this.setEditable("a", !this.disabled);
    this.setEditable("b", !this.disabled);
  }
  ngOnDestroy() {
    this.mergeView?.destroy();
  }
  writeValue(value) {
    if (this.mergeView && value != null && typeof value === "object") {
      this.originalValue = value.original;
      this.modifiedValue = value.modified;
      this.setValue("a", value.original);
      this.setValue("b", value.modified);
    }
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.setEditable("a", !isDisabled);
    this.setEditable("b", !isDisabled);
  }
  /** Sets diff-editor's value. */
  setValue(editor, value) {
    this.mergeView?.[editor].dispatch({
      changes: {
        from: 0,
        to: this.mergeView[editor].state.doc.length,
        insert: value
      }
    });
  }
  /** Sets diff-editor's editable state. */
  setEditable(editor, value) {
    this.mergeView?.[editor].dispatch({
      effects: this._editableConf.reconfigure(EditorView.editable.of(value))
    });
  }
  static {
    this.\u0275fac = function DiffEditor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DiffEditor)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _DiffEditor,
      selectors: [["diff-editor"]],
      hostAttrs: [1, "diff-editor"],
      inputs: {
        setup: "setup",
        originalValue: "originalValue",
        originalExtensions: "originalExtensions",
        modifiedValue: "modifiedValue",
        modifiedExtensions: "modifiedExtensions",
        orientation: "orientation",
        revertControls: "revertControls",
        renderRevertControl: "renderRevertControl",
        highlightChanges: [2, "highlightChanges", "highlightChanges", booleanAttribute],
        gutter: [2, "gutter", "gutter", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        collapseUnchanged: "collapseUnchanged",
        diffConfig: "diffConfig"
      },
      outputs: {
        originalValueChange: "originalValueChange",
        originalFocus: "originalFocus",
        originalBlur: "originalBlur",
        modifiedValueChange: "modifiedValueChange",
        modifiedFocus: "modifiedFocus",
        modifiedBlur: "modifiedBlur"
      },
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DiffEditor),
        multi: true
      }]), \u0275\u0275NgOnChangesFeature],
      decls: 0,
      vars: 0,
      template: function DiffEditor_Template(rf, ctx) {
      },
      styles: [".diff-editor{display:block}.diff-editor .cm-mergeView,.diff-editor .cm-mergeViewEditors{height:100%}.diff-editor .cm-mergeView .cm-editor,.diff-editor .cm-mergeView .cm-scroller{height:100%!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiffEditor, [{
    type: Component,
    args: [{
      selector: "diff-editor",
      template: ``,
      host: {
        class: "diff-editor"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DiffEditor),
        multi: true
      }],
      styles: [".diff-editor{display:block}.diff-editor .cm-mergeView,.diff-editor .cm-mergeViewEditors{height:100%}.diff-editor .cm-mergeView .cm-editor,.diff-editor .cm-mergeView .cm-scroller{height:100%!important}\n"]
    }]
  }], null, {
    setup: [{
      type: Input
    }],
    originalValue: [{
      type: Input
    }],
    originalExtensions: [{
      type: Input
    }],
    modifiedValue: [{
      type: Input
    }],
    modifiedExtensions: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    revertControls: [{
      type: Input
    }],
    renderRevertControl: [{
      type: Input
    }],
    highlightChanges: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    gutter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapseUnchanged: [{
      type: Input
    }],
    diffConfig: [{
      type: Input
    }],
    originalValueChange: [{
      type: Output
    }],
    originalFocus: [{
      type: Output
    }],
    originalBlur: [{
      type: Output
    }],
    modifiedValueChange: [{
      type: Output
    }],
    modifiedFocus: [{
      type: Output
    }],
    modifiedBlur: [{
      type: Output
    }]
  });
})();
var CodeEditorModule = class _CodeEditorModule {
  static {
    this.\u0275fac = function CodeEditorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CodeEditorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _CodeEditorModule,
      imports: [CodeEditor, DiffEditor],
      exports: [CodeEditor, DiffEditor]
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CodeEditorModule, [{
    type: NgModule,
    args: [{
      imports: [CodeEditor, DiffEditor],
      exports: [CodeEditor, DiffEditor]
    }]
  }], null, null);
})();

// src/app/components/advanced/vanilla-json-editor.ts
var _c0 = ["editorContainer"];
var VanillaJsonEditorComponent = class _VanillaJsonEditorComponent {
  editorContainer;
  content = {};
  readOnly = false;
  contentChange = new EventEmitter();
  editor = null;
  initialized = false;
  suppressChange = false;
  async ngAfterViewInit() {
    const { createJSONEditor } = await import("./chunk-UCWNXCSO.js");
    this.editor = createJSONEditor({
      target: this.editorContainer.nativeElement,
      props: {
        content: { json: this.content },
        mode: "tree",
        readOnly: this.readOnly,
        onChange: (updatedContent) => {
          if (this.suppressChange)
            return;
          const data = updatedContent.json !== void 0 ? updatedContent.json : JSON.parse(updatedContent.text);
          this.contentChange.emit(data);
        }
      }
    });
    this.initialized = true;
  }
  ngOnChanges(changes) {
    if (!this.initialized || !this.editor)
      return;
    if (changes["content"]) {
      this.suppressChange = true;
      this.editor.update({ content: { json: this.content } });
      this.suppressChange = false;
    }
    if (changes["readOnly"]) {
      this.editor.updateProps({ readOnly: this.readOnly });
    }
  }
  ngOnDestroy() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }
  static \u0275fac = function VanillaJsonEditorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VanillaJsonEditorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VanillaJsonEditorComponent, selectors: [["app-vanilla-json-editor"]], viewQuery: function VanillaJsonEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.editorContainer = _t.first);
    }
  }, inputs: { content: "content", readOnly: "readOnly" }, outputs: { contentChange: "contentChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 0, consts: [["editorContainer", ""], [1, "vanilla-editor-container"]], template: function VanillaJsonEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElement(0, "div", 1, 0);
    }
  }, styles: ["\n\n.vanilla-editor-container[_ngcontent-%COMP%] {\n  height: 500px;\n}\n.vanilla-editor-container   [_nghost-%COMP%]     .jse-main {\n  min-height: 500px;\n}\n/*# sourceMappingURL=vanilla-json-editor.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VanillaJsonEditorComponent, [{
    type: Component,
    args: [{ selector: "app-vanilla-json-editor", standalone: true, template: `<div #editorContainer class="vanilla-editor-container"></div>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:scss;109d2d9499334de8f92ecf8dcccda458a41649506acfcd7382b4fd6aab211bba;/Users/chadcummings/Github/chadcumm/nygh-onc-sched-list/src/app/components/advanced/vanilla-json-editor.ts */\n.vanilla-editor-container {\n  height: 500px;\n}\n.vanilla-editor-container :host ::ng-deep .jse-main {\n  min-height: 500px;\n}\n/*# sourceMappingURL=vanilla-json-editor.css.map */\n"] }]
  }], null, { editorContainer: [{
    type: ViewChild,
    args: ["editorContainer"]
  }], content: [{
    type: Input
  }], readOnly: [{
    type: Input
  }], contentChange: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VanillaJsonEditorComponent, { className: "VanillaJsonEditorComponent", filePath: "src/app/components/advanced/vanilla-json-editor.ts", lineNumber: 37 });
})();

// src/app/components/advanced/advanced.ts
var _forTrack0 = ($index, $item) => $item.value;
function AdvancedComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r1.label);
  }
}
function AdvancedComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading configuration...");
    \u0275\u0275elementEnd();
  }
}
function AdvancedComponent_Conditional_13_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r5.label);
  }
}
function AdvancedComponent_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 22);
    \u0275\u0275text(1, "Section:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "select", 23);
    \u0275\u0275listener("ngModelChange", function AdvancedComponent_Conditional_13_Conditional_3_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onSectionChange($event));
    });
    \u0275\u0275repeaterCreate(3, AdvancedComponent_Conditional_13_Conditional_3_For_4_Template, 2, 2, "option", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.selectedSection());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.sectionOptions());
  }
}
function AdvancedComponent_Conditional_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, "Loading help content...");
    \u0275\u0275elementEnd();
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 31);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx);
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "code-editor", 33);
    \u0275\u0275listener("ngModelChange", function AdvancedComponent_Conditional_13_Conditional_19_Conditional_1_Template_code_editor_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onCodeChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.editorContent())("extensions", ctx_r3.extensions);
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "app-vanilla-json-editor", 34);
    \u0275\u0275listener("contentChange", function AdvancedComponent_Conditional_13_Conditional_19_Conditional_2_Template_app_vanilla_json_editor_contentChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onTreeChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("content", ctx_r3.treeContent());
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Modified");
    \u0275\u0275elementEnd();
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Applied \u2014 not saved");
    \u0275\u0275elementEnd();
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, ctx_r3.editorContent().length), " chars ");
  }
}
function AdvancedComponent_Conditional_13_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdvancedComponent_Conditional_13_Conditional_19_Conditional_0_Template, 5, 1, "div", 24);
    \u0275\u0275conditionalCreate(1, AdvancedComponent_Conditional_13_Conditional_19_Conditional_1_Template, 2, 2, "div", 25)(2, AdvancedComponent_Conditional_13_Conditional_19_Conditional_2_Template, 2, 1, "div", 26);
    \u0275\u0275elementStart(3, "div", 27)(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, AdvancedComponent_Conditional_13_Conditional_19_Conditional_6_Template, 2, 0, "span", 29)(7, AdvancedComponent_Conditional_13_Conditional_19_Conditional_7_Template, 2, 0, "span", 29);
    \u0275\u0275elementStart(8, "span", 30);
    \u0275\u0275conditionalCreate(9, AdvancedComponent_Conditional_13_Conditional_19_Conditional_9_Template, 2, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_2_0 = ctx_r3.parseError()) ? 0 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.viewMode() === "code" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedSectionLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.hasEditorChanges() ? 6 : ctx_r3.hasUnsavedChanges() ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.viewMode() === "code" ? 9 : -1);
  }
}
function AdvancedComponent_Conditional_13_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusMessage());
  }
}
function AdvancedComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275conditionalCreate(3, AdvancedComponent_Conditional_13_Conditional_3_Template, 5, 1);
    \u0275\u0275elementStart(4, "div", 10)(5, "button", 11);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setViewMode("code"));
    });
    \u0275\u0275text(6, " Code ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setViewMode("tree"));
    });
    \u0275\u0275text(8, " Tree ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 13)(10, "button", 14);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.formatJson());
    });
    \u0275\u0275text(11, " Format ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 15);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copyToClipboard());
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 16);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.pasteFromClipboard());
    });
    \u0275\u0275text(15, " Paste ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.applyChanges());
    });
    \u0275\u0275text(17, " Apply ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(18, AdvancedComponent_Conditional_13_Conditional_18_Template, 2, 0, "div", 6)(19, AdvancedComponent_Conditional_13_Conditional_19_Template, 10, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18)(21, "button", 19);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275text(22, " Save ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 20);
    \u0275\u0275listener("click", function AdvancedComponent_Conditional_13_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.discard());
    });
    \u0275\u0275text(24, " Discard ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(25, AdvancedComponent_Conditional_13_Conditional_25_Template, 2, 1, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.documentKind() === "config" ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.viewMode() === "code");
    \u0275\u0275attribute("aria-pressed", ctx_r3.viewMode() === "code");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r3.viewMode() === "tree");
    \u0275\u0275property("disabled", !!ctx_r3.parseError() || ctx_r3.helpLoading());
    \u0275\u0275attribute("aria-pressed", ctx_r3.viewMode() === "tree");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !!ctx_r3.parseError() || ctx_r3.viewMode() === "tree" || ctx_r3.helpLoading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.helpLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.copyLabel(), " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.helpLoading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !!ctx_r3.parseError() || !ctx_r3.hasEditorChanges() || ctx_r3.helpLoading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.helpLoading() ? 18 : 19);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r3.hasUnsavedChanges() && !ctx_r3.hasEditorChanges() || !!ctx_r3.parseError() || ctx_r3.loading());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.hasUnsavedChanges() && !ctx_r3.hasEditorChanges());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.statusMessage() ? 25 : -1);
  }
}
var FULL_CONFIG = "FULL_CONFIG";
var KNOWN_SECTION_LABELS = {
  ACCESS_CONTROL: "Access Control",
  APPOINTMENT_TYPE_GROUPS: "Appointment Type Groups",
  REFRESH_INTERVAL_SECONDS: "Refresh Interval",
  CHART_LINK_ENCOUNTER_TYPE_CD: "Chart Link Encounter Type"
};
var SKIP_KEYS = /* @__PURE__ */ new Set(["UPDT_DT_TM"]);
function toTitleCase(key) {
  return key.split("_").map((w) => w.charAt(0) + w.slice(1).toLowerCase()).join(" ");
}
function stripTimestamp(config) {
  const _a = config, { UPDT_DT_TM } = _a, rest = __objRest(_a, ["UPDT_DT_TM"]);
  return JSON.stringify(rest);
}
var AdvancedComponent = class _AdvancedComponent {
  configService = inject(ConfigurationService);
  helpService = inject(HelpContentService);
  /** Which raw document is being edited: the app config, or the help content JSON */
  documentKind = signal("config", ...ngDevMode ? [{ debugName: "documentKind" }] : (
    /* istanbul ignore next */
    []
  ));
  documentOptions = [
    { value: "config", label: "App Configuration" },
    { value: "help", label: "Help Content" }
  ];
  /** Deep-cloned working copy of the live configuration; Apply stages into it */
  workingCopy = signal(null, ...ngDevMode ? [{ debugName: "workingCopy" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Deep-cloned working copy of the help sections; Apply stages into it (help document only) */
  helpWorkingSections = signal(null, ...ngDevMode ? [{ debugName: "helpWorkingSections" }] : (
    /* istanbul ignore next */
    []
  ));
  editorContent = signal("", ...ngDevMode ? [{ debugName: "editorContent" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedSection = signal(FULL_CONFIG, ...ngDevMode ? [{ debugName: "selectedSection" }] : (
    /* istanbul ignore next */
    []
  ));
  parseError = signal(null, ...ngDevMode ? [{ debugName: "parseError" }] : (
    /* istanbul ignore next */
    []
  ));
  hasEditorChanges = signal(false, ...ngDevMode ? [{ debugName: "hasEditorChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  copyLabel = signal("Copy", ...ngDevMode ? [{ debugName: "copyLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  viewMode = signal("code", ...ngDevMode ? [{ debugName: "viewMode" }] : (
    /* istanbul ignore next */
    []
  ));
  treeContent = signal({}, ...ngDevMode ? [{ debugName: "treeContent" }] : (
    /* istanbul ignore next */
    []
  ));
  statusMessage = signal(null, ...ngDevMode ? [{ debugName: "statusMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  originalContent = "";
  statusTimer = null;
  extensions = [json(), EditorView.lineWrapping];
  loading = computed(() => this.configService.loading(), ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Working copy differs from the live config (timestamp excluded), or help sections differ from baseline */
  hasUnsavedChanges = computed(() => {
    if (this.documentKind() === "help") {
      const wc2 = this.helpWorkingSections();
      if (!wc2)
        return false;
      const baseline = this.helpService.storedSections() ?? this.helpService.effectiveSections();
      return JSON.stringify(wc2) !== JSON.stringify(baseline);
    }
    const wc = this.workingCopy();
    const live = this.configService.configuration();
    if (!wc || !live)
      return false;
    return stripTimestamp(wc) !== stripTimestamp(live);
  }, ...ngDevMode ? [{ debugName: "hasUnsavedChanges" }] : (
    /* istanbul ignore next */
    []
  ));
  /** True while the help document is selected but its content hasn't arrived yet */
  helpLoading = computed(() => this.documentKind() === "help" && !this.helpService.loaded(), ...ngDevMode ? [{ debugName: "helpLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  sectionOptions = computed(() => {
    const options = [{ value: FULL_CONFIG, label: "Full Configuration" }];
    const wc = this.workingCopy();
    if (wc) {
      for (const key of Object.keys(wc)) {
        if (SKIP_KEYS.has(key))
          continue;
        options.push({ value: key, label: KNOWN_SECTION_LABELS[key] ?? toTitleCase(key) });
      }
    }
    return options;
  }, ...ngDevMode ? [{ debugName: "sectionOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Initialize the working copy once the live configuration arrives */
  initEffect = effect(() => {
    const live = this.configService.configuration();
    if (!live)
      return;
    untracked(() => {
      if (this.workingCopy() === null) {
        this.workingCopy.set(JSON.parse(JSON.stringify(live)));
        if (this.documentKind() === "config") {
          this.loadSection(this.selectedSection());
        }
      }
    });
  }, ...ngDevMode ? [{ debugName: "initEffect" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Seed the help editor once the service finishes loading, provided nothing has
   * already staged a working copy (helpWorkingSections set - e.g. by
   * onDocumentChange's synchronous seed, or a prior Apply). loadContent() is
   * async, so switching to 'help' before it resolves relies on this effect to
   * perform the seed once `loaded()` flips true.
   *
   * `helpWorkingSections` is read as a tracked dependency (not inside
   * untracked()) so the effect keeps its ability to seed even if that signal
   * changes across re-runs. Earlier this also gated on `!hasEditorChanges()`
   * read via untracked(): since that read established no dependency, a
   * transient true value at the exact moment `loaded()` flipped could
   * permanently skip the seed - the effect's only tracked deps (documentKind,
   * loaded) never change again once settled on 'help'/true, so it would never
   * get a second chance and the help document would stay unseeded forever.
   * onDocumentChange already resets hasEditorChanges synchronously before
   * relying on this effect, so that guard was redundant as well as unsafe.
   */
  helpSeedEffect = effect(() => {
    const kind = this.documentKind();
    const loaded = this.helpService.loaded();
    const alreadyStaged = this.helpWorkingSections() !== null;
    if (kind !== "help" || !loaded || alreadyStaged)
      return;
    untracked(() => this.seedHelpEditor());
  }, ...ngDevMode ? [{ debugName: "helpSeedEffect" }] : (
    /* istanbul ignore next */
    []
  ));
  get selectedSectionLabel() {
    if (this.documentKind() === "help")
      return "Full Document";
    return this.sectionOptions().find((o) => o.value === this.selectedSection())?.label ?? "Full Configuration";
  }
  ngOnInit() {
    if (!this.configService.isLoaded() && !this.configService.loading()) {
      this.configService.loadConfiguration();
    }
  }
  ngOnDestroy() {
    if (this.statusTimer)
      clearTimeout(this.statusTimer);
  }
  onSectionChange(section) {
    if (this.hasEditorChanges()) {
      if (!confirm("You have unapplied changes. Switch section and discard them?")) {
        return;
      }
    }
    this.selectedSection.set(section);
    this.loadSection(section);
  }
  onDocumentChange(kind) {
    if (kind === this.documentKind())
      return;
    if (this.hasEditorChanges()) {
      if (!confirm("You have unapplied changes. Switch section and discard them?")) {
        return;
      }
    }
    this.documentKind.set(kind);
    if (kind === "help") {
      if (this.helpWorkingSections() !== null) {
        this.loadHelpDocument();
      } else {
        this.parseError.set(null);
        this.hasEditorChanges.set(false);
        this.helpService.loadContent();
        if (this.helpService.loaded()) {
          this.seedHelpEditor();
        }
      }
    } else {
      this.loadSection(this.selectedSection());
    }
  }
  onEditorChange(value) {
    this.validateJson(value);
    this.hasEditorChanges.set(value !== this.originalContent);
  }
  onCodeChange(value) {
    this.editorContent.set(value);
    this.onEditorChange(value);
  }
  formatJson() {
    try {
      const parsed = JSON.parse(this.editorContent());
      const formatted = JSON.stringify(parsed, null, 2);
      this.editorContent.set(formatted);
      this.parseError.set(null);
      this.hasEditorChanges.set(formatted !== this.originalContent);
    } catch {
    }
  }
  copyToClipboard() {
    const text = this.viewMode() === "tree" ? JSON.stringify(this.treeContent(), null, 2) : this.editorContent();
    navigator.clipboard.writeText(text).then(() => {
      this.copyLabel.set("Copied!");
      setTimeout(() => this.copyLabel.set("Copy"), 2e3);
    }).catch(() => this.setStatus("Clipboard unavailable"));
  }
  pasteFromClipboard() {
    navigator.clipboard.readText().then((text) => {
      this.editorContent.set(text);
      this.validateJson(text);
      this.hasEditorChanges.set(text !== this.originalContent);
    }).catch(() => this.setStatus("Clipboard unavailable"));
  }
  setViewMode(mode) {
    if (mode === this.viewMode())
      return;
    if (mode === "tree") {
      if (this.parseError())
        return;
      try {
        this.treeContent.set(JSON.parse(this.editorContent()));
      } catch {
        return;
      }
    } else {
      const content = JSON.stringify(this.treeContent(), null, 2);
      this.editorContent.set(content);
      this.hasEditorChanges.set(content !== this.originalContent);
    }
    this.viewMode.set(mode);
  }
  onTreeChange(data) {
    this.treeContent.set(data);
    const newContent = JSON.stringify(data, null, 2);
    this.hasEditorChanges.set(newContent !== this.originalContent);
  }
  /** Stage current editor content into the working copy. Returns true on success. */
  applyChanges() {
    try {
      let parsed;
      if (this.viewMode() === "tree") {
        parsed = this.treeContent();
      } else {
        if (this.parseError())
          return false;
        parsed = JSON.parse(this.editorContent());
      }
      if (this.documentKind() === "help") {
        return this.applyHelpChanges(parsed);
      }
      const wc = this.workingCopy();
      if (!wc)
        return false;
      if (this.selectedSection() === FULL_CONFIG) {
        if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
          this.parseError.set("Full configuration must be a JSON object");
          return false;
        }
        this.workingCopy.set(parsed);
      } else {
        this.workingCopy.set(__spreadProps(__spreadValues({}, wc), { [this.selectedSection()]: parsed }));
      }
      this.originalContent = JSON.stringify(parsed, null, 2);
      this.editorContent.set(this.originalContent);
      this.treeContent.set(parsed);
      this.hasEditorChanges.set(false);
      this.setStatus("Changes applied (not yet saved)");
      return true;
    } catch (e) {
      this.parseError.set(e instanceof Error ? e.message : "Failed to apply changes");
      return false;
    }
  }
  save() {
    if (this.hasEditorChanges() && !this.applyChanges())
      return;
    if (this.documentKind() === "help") {
      const sections = this.helpWorkingSections();
      if (!sections)
        return;
      if (!confirm("Overwrite help content? This bypasses the Help Editor validation."))
        return;
      this.helpService.saveContent(JSON.parse(JSON.stringify(sections)));
      this.setStatus("Help content saved");
      return;
    }
    const wc = this.workingCopy();
    if (!wc)
      return;
    let message = "Overwrite live configuration? This bypasses the Config page validation.";
    if (!Array.isArray(wc.APPOINTMENT_TYPE_GROUPS)) {
      message += "\n\nWarning: APPOINTMENT_TYPE_GROUPS is missing or not an array.";
    }
    if (!confirm(message))
      return;
    this.configService.saveConfiguration(JSON.parse(JSON.stringify(wc)));
    this.setStatus("Configuration saved");
  }
  discard() {
    if (this.documentKind() === "help") {
      this.seedHelpEditor();
      this.setStatus("Changes discarded");
      return;
    }
    const live = this.configService.configuration();
    if (!live)
      return;
    this.workingCopy.set(JSON.parse(JSON.stringify(live)));
    if (!this.sectionOptions().some((o) => o.value === this.selectedSection())) {
      this.selectedSection.set(FULL_CONFIG);
    }
    this.loadSection(this.selectedSection());
    this.setStatus("Changes discarded");
  }
  /** Normalize the parsed editor value into help sections and stage them. Returns true on success. */
  applyHelpChanges(parsed) {
    let sections;
    if (Array.isArray(parsed)) {
      sections = parsed;
    } else if (parsed !== null && typeof parsed === "object" && Array.isArray(parsed["sections"])) {
      sections = parsed.sections;
    } else {
      this.parseError.set('Help content must be an array of sections, or an object with a "sections" array');
      return false;
    }
    const normalized = sections;
    this.helpWorkingSections.set(normalized);
    const wrapped = { sections: normalized };
    this.originalContent = JSON.stringify(wrapped, null, 2);
    this.editorContent.set(this.originalContent);
    this.treeContent.set(wrapped);
    this.hasEditorChanges.set(false);
    this.setStatus("Changes applied (not yet saved)");
    return true;
  }
  /** Seed the help working copy from the service's current stored/effective baseline, then load it. */
  seedHelpEditor() {
    const baseline = this.helpService.storedSections() ?? this.helpService.effectiveSections();
    this.helpWorkingSections.set(JSON.parse(JSON.stringify(baseline)));
    this.loadHelpDocument();
  }
  /** Load the editor from the current help working copy (help analog of loadSection). */
  loadHelpDocument() {
    const wrapped = { sections: this.helpWorkingSections() ?? [] };
    const content = JSON.stringify(wrapped, null, 2);
    this.editorContent.set(content);
    this.originalContent = content;
    this.treeContent.set(wrapped);
    this.parseError.set(null);
    this.hasEditorChanges.set(false);
  }
  loadSection(section) {
    const data = this.extractSection(section);
    const content = JSON.stringify(data, null, 2);
    this.editorContent.set(content);
    this.originalContent = content;
    this.treeContent.set(data);
    this.parseError.set(null);
    this.hasEditorChanges.set(false);
  }
  extractSection(section) {
    const wc = this.workingCopy();
    if (!wc)
      return {};
    if (section === FULL_CONFIG)
      return wc;
    return wc[section] ?? {};
  }
  validateJson(value) {
    try {
      JSON.parse(value);
      this.parseError.set(null);
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.parseError.set(e.message);
      }
    }
  }
  setStatus(message) {
    this.statusMessage.set(message);
    if (this.statusTimer)
      clearTimeout(this.statusTimer);
    this.statusTimer = setTimeout(() => this.statusMessage.set(null), 4e3);
  }
  static \u0275fac = function AdvancedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdvancedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdvancedComponent, selectors: [["app-advanced"]], decls: 14, vars: 2, consts: [[1, "advanced-container"], [1, "advanced-header"], [1, "document-picker"], ["for", "documentSelect", 1, "toolbar-label"], ["id", "documentSelect", 1, "toolbar-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "loading-msg"], [1, "json-editor-container"], [1, "editor-toolbar"], [1, "toolbar-left"], [1, "view-toggle"], ["type", "button", 1, "toggle-btn", 3, "click"], ["type", "button", 1, "toggle-btn", 3, "click", "disabled"], [1, "toolbar-right"], ["type", "button", "title", "Format JSON", 1, "toolbar-btn", 3, "click", "disabled"], ["type", "button", "title", "Copy JSON to clipboard", 1, "toolbar-btn", 3, "click", "disabled"], ["type", "button", "title", "Paste JSON from clipboard", 1, "toolbar-btn", 3, "click", "disabled"], ["type", "button", "title", "Stage JSON changes into the working copy", 1, "toolbar-btn", "toolbar-btn-primary", 3, "click", "disabled"], [1, "advanced-actions"], ["type", "button", 1, "fusion-button", 3, "click", "disabled"], ["type", "button", 1, "fusion-button", "fusion-outline", 3, "click", "disabled"], [1, "status-message"], ["for", "sectionSelect", 1, "toolbar-label"], ["id", "sectionSelect", 1, "toolbar-select", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "parse-error"], [1, "editor-wrapper"], [1, "editor-wrapper", "tree-editor-wrapper"], [1, "editor-status-bar"], [1, "status-section"], [1, "status-modified"], [1, "status-size"], [1, "parse-error-icon"], [1, "parse-error-text"], [3, "ngModelChange", "ngModel", "extensions"], [3, "contentChange", "content"]], template: function AdvancedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Advanced Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Direct access to the raw application configuration JSON. Changes here bypass the Config page's validation \u2014 use with care.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 2)(7, "label", 3);
      \u0275\u0275text(8, "Document:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "select", 4);
      \u0275\u0275listener("ngModelChange", function AdvancedComponent_Template_select_ngModelChange_9_listener($event) {
        return ctx.onDocumentChange($event);
      });
      \u0275\u0275repeaterCreate(10, AdvancedComponent_For_11_Template, 2, 2, "option", 5, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, AdvancedComponent_Conditional_12_Template, 2, 0, "div", 6)(13, AdvancedComponent_Conditional_13_Template, 26, 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngModel", ctx.documentKind());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.documentOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.documentKind() === "config" && !ctx.workingCopy() ? 12 : 13);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, CodeEditor, VanillaJsonEditorComponent, DecimalPipe], styles: ["\n\n.advanced-container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-width: 1100px;\n}\n.advanced-header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.advanced-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n}\n.advanced-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--fusion-text-light);\n}\n.document-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 0.75rem;\n}\n.loading-msg[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.json-editor-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.editor-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  flex-wrap: wrap;\n}\n.toolbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  white-space: nowrap;\n}\n.toolbar-select[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  background: white;\n  min-width: 200px;\n}\n.toolbar-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.view-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-left: 8px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: none;\n  border-right: 1px solid #ced4da;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toggle-btn[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #e9ecef;\n}\n.toggle-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toggle-btn.active[_ngcontent-%COMP%] {\n  background: #0078d4;\n  color: white;\n}\n.toolbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.toolbar-btn[_ngcontent-%COMP%] {\n  padding: 4px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toolbar-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.toolbar-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toolbar-btn.toolbar-btn-primary[_ngcontent-%COMP%] {\n  background: #0078d4;\n  color: white;\n  border-color: #0078d4;\n}\n.toolbar-btn.toolbar-btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #005a9e;\n  border-color: #005a9e;\n}\n.parse-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f8d7da;\n  border-bottom: 1px solid #f5c6cb;\n  color: #721c24;\n  font-size: 13px;\n}\n.parse-error-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.parse-error-text[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.editor-wrapper[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n.editor-wrapper   [_nghost-%COMP%]     .cm-editor {\n  height: 500px;\n  font-size: 13px;\n}\n.editor-wrapper   [_nghost-%COMP%]     .cm-scroller {\n  overflow: auto;\n}\n.tree-editor-wrapper   [_nghost-%COMP%]     .jse-main {\n  min-height: 500px;\n  max-height: 500px;\n  overflow: auto;\n}\n.editor-status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 4px 12px;\n  background: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  font-size: 12px;\n  color: #6c757d;\n}\n.status-modified[_ngcontent-%COMP%] {\n  color: #856404;\n  background: #fff3cd;\n  padding: 1px 8px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.status-size[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.advanced-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n}\n.status-message[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=advanced.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdvancedComponent, [{
    type: Component,
    args: [{ selector: "app-advanced", standalone: true, imports: [DecimalPipe, FormsModule, CodeEditor, VanillaJsonEditorComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="advanced-container">
  <div class="advanced-header">
    <h2>Advanced Configuration</h2>
    <p>Direct access to the raw application configuration JSON. Changes here bypass the Config page's validation \u2014 use with care.</p>
  </div>

  <!-- Document picker: outside the config-load gate so Help Content stays reachable
       even when the configuration is slow to load or fails -->
  <div class="document-picker">
    <label for="documentSelect" class="toolbar-label">Document:</label>
    <select
      id="documentSelect"
      class="toolbar-select"
      [ngModel]="documentKind()"
      (ngModelChange)="onDocumentChange($event)">
      @for (option of documentOptions; track option.value) {
        <option [value]="option.value">{{ option.label }}</option>
      }
    </select>
  </div>

  @if (documentKind() === 'config' && !workingCopy()) {
    <div class="loading-msg">Loading configuration...</div>
  } @else {
    <div class="json-editor-container">
      <!-- Toolbar -->
      <div class="editor-toolbar">
        <div class="toolbar-left">
          @if (documentKind() === 'config') {
            <label for="sectionSelect" class="toolbar-label">Section:</label>
            <select
              id="sectionSelect"
              class="toolbar-select"
              [ngModel]="selectedSection()"
              (ngModelChange)="onSectionChange($event)">
              @for (option of sectionOptions(); track option.value) {
                <option [value]="option.value">{{ option.label }}</option>
              }
            </select>
          }

          <div class="view-toggle">
            <button
              type="button"
              class="toggle-btn"
              [class.active]="viewMode() === 'code'"
              [attr.aria-pressed]="viewMode() === 'code'"
              (click)="setViewMode('code')">
              Code
            </button>
            <button
              type="button"
              class="toggle-btn"
              [class.active]="viewMode() === 'tree'"
              [attr.aria-pressed]="viewMode() === 'tree'"
              [disabled]="!!parseError() || helpLoading()"
              (click)="setViewMode('tree')">
              Tree
            </button>
          </div>
        </div>

        <div class="toolbar-right">
          <button
            type="button"
            class="toolbar-btn"
            (click)="formatJson()"
            [disabled]="!!parseError() || viewMode() === 'tree' || helpLoading()"
            title="Format JSON">
            Format
          </button>
          <button
            type="button"
            class="toolbar-btn"
            (click)="copyToClipboard()"
            [disabled]="helpLoading()"
            title="Copy JSON to clipboard">
            {{ copyLabel() }}
          </button>
          <button
            type="button"
            class="toolbar-btn"
            (click)="pasteFromClipboard()"
            [disabled]="helpLoading()"
            title="Paste JSON from clipboard">
            Paste
          </button>
          <button
            type="button"
            class="toolbar-btn toolbar-btn-primary"
            (click)="applyChanges()"
            [disabled]="!!parseError() || !hasEditorChanges() || helpLoading()"
            title="Stage JSON changes into the working copy">
            Apply
          </button>
        </div>
      </div>

      @if (helpLoading()) {
        <div class="loading-msg">Loading help content...</div>
      } @else {
        <!-- Parse Error Banner -->
        @if (parseError(); as error) {
          <div class="parse-error" role="alert">
            <span class="parse-error-icon">!</span>
            <span class="parse-error-text">{{ error }}</span>
          </div>
        }

        <!-- Editor -->
        @if (viewMode() === 'code') {
          <div class="editor-wrapper">
            <code-editor
              [ngModel]="editorContent()"
              [extensions]="extensions"
              (ngModelChange)="onCodeChange($event)" />
          </div>
        } @else {
          <div class="editor-wrapper tree-editor-wrapper">
            <app-vanilla-json-editor
              [content]="treeContent()"
              (contentChange)="onTreeChange($event)" />
          </div>
        }

        <!-- Status Bar -->
        <div class="editor-status-bar">
          <span class="status-section">{{ selectedSectionLabel }}</span>
          @if (hasEditorChanges()) {
            <span class="status-modified">Modified</span>
          } @else if (hasUnsavedChanges()) {
            <span class="status-modified">Applied \u2014 not saved</span>
          }
          <span class="status-size">
            @if (viewMode() === 'code') {
              {{ editorContent().length | number }} chars
            }
          </span>
        </div>
      }
    </div>

    <div class="advanced-actions">
      <button
        class="fusion-button"
        type="button"
        [disabled]="(!hasUnsavedChanges() && !hasEditorChanges()) || !!parseError() || loading()"
        (click)="save()">
        Save
      </button>
      <button
        class="fusion-button fusion-outline"
        type="button"
        [disabled]="!hasUnsavedChanges() && !hasEditorChanges()"
        (click)="discard()">
        Discard
      </button>
      @if (statusMessage()) {
        <span class="status-message">{{ statusMessage() }}</span>
      }
    </div>
  }
</div>
`, styles: ["/* src/app/components/advanced/advanced.scss */\n.advanced-container {\n  padding: 1rem;\n  max-width: 1100px;\n}\n.advanced-header {\n  margin-bottom: 1rem;\n}\n.advanced-header h2 {\n  margin: 0 0 0.25rem;\n  font-size: 1.25rem;\n}\n.advanced-header p {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--fusion-text-light);\n}\n.document-picker {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 0.75rem;\n}\n.loading-msg {\n  padding: 1.25rem;\n  color: var(--fusion-text-light);\n  font-size: 0.875rem;\n}\n.json-editor-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #dee2e6;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.editor-toolbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 12px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  flex-wrap: wrap;\n}\n.toolbar-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.toolbar-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #495057;\n  white-space: nowrap;\n}\n.toolbar-select {\n  padding: 4px 8px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  background: white;\n  min-width: 200px;\n}\n.toolbar-select:focus {\n  outline: none;\n  border-color: #0078d4;\n  box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.1);\n}\n.view-toggle {\n  display: inline-flex;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-left: 8px;\n}\n.toggle-btn {\n  padding: 4px 12px;\n  border: none;\n  border-right: 1px solid #ced4da;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toggle-btn:last-child {\n  border-right: none;\n}\n.toggle-btn:hover:not(:disabled):not(.active) {\n  background: #e9ecef;\n}\n.toggle-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toggle-btn.active {\n  background: #0078d4;\n  color: white;\n}\n.toolbar-right {\n  display: flex;\n  gap: 6px;\n}\n.toolbar-btn {\n  padding: 4px 12px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  background: white;\n  color: #495057;\n  transition: all 0.15s;\n}\n.toolbar-btn:hover:not(:disabled) {\n  background: #e9ecef;\n  border-color: #adb5bd;\n}\n.toolbar-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.toolbar-btn.toolbar-btn-primary {\n  background: #0078d4;\n  color: white;\n  border-color: #0078d4;\n}\n.toolbar-btn.toolbar-btn-primary:hover:not(:disabled) {\n  background: #005a9e;\n  border-color: #005a9e;\n}\n.parse-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: #f8d7da;\n  border-bottom: 1px solid #f5c6cb;\n  color: #721c24;\n  font-size: 13px;\n}\n.parse-error-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  background: #721c24;\n  color: white;\n  border-radius: 50%;\n  font-size: 11px;\n  font-weight: bold;\n  flex-shrink: 0;\n}\n.parse-error-text {\n  font-family: monospace;\n}\n.editor-wrapper {\n  min-height: 500px;\n}\n.editor-wrapper :host ::ng-deep .cm-editor {\n  height: 500px;\n  font-size: 13px;\n}\n.editor-wrapper :host ::ng-deep .cm-scroller {\n  overflow: auto;\n}\n.tree-editor-wrapper :host ::ng-deep .jse-main {\n  min-height: 500px;\n  max-height: 500px;\n  overflow: auto;\n}\n.editor-status-bar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 4px 12px;\n  background: #f8f9fa;\n  border-top: 1px solid #dee2e6;\n  font-size: 12px;\n  color: #6c757d;\n}\n.status-modified {\n  color: #856404;\n  background: #fff3cd;\n  padding: 1px 8px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.status-size {\n  margin-left: auto;\n}\n.advanced-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding-top: 0.75rem;\n}\n.status-message {\n  font-size: 0.875rem;\n  color: var(--fusion-text-muted);\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=advanced.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdvancedComponent, { className: "AdvancedComponent", filePath: "src/app/components/advanced/advanced.ts", lineNumber: 52 });
})();
export {
  AdvancedComponent
};
//# sourceMappingURL=chunk-G3DFXKZ4.js.map
