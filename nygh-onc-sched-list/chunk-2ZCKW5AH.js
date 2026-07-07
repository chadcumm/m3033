// src/app/models/dm-info.model.ts
function readLongText(result) {
  return result?.dmInfo?.[0]?.longText ?? result?.longText ?? result?.infoLongText;
}

export {
  readLongText
};
//# sourceMappingURL=chunk-2ZCKW5AH.js.map
