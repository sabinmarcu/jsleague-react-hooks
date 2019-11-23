exports.ids = ["react-syntax-highlighter_languages_highlight_clean"];
exports.modules = {

/***/ "../../node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js":
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/sabin/Desktop/jsleague-react-hooks/node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['clean','icl','dcl'],
    keywords: {
      keyword:
        'if let in with where case of class instance otherwise ' +
        'implementation definition system module from import qualified as ' +
        'special code inline foreign export ccall stdcall generic derive ' +
        'infix infixl infixr',
      literal:
        'True False'
    },
    contains: [

      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,

      {begin: '->|<-[|:]?|::|#!?|>>=|\\{\\||\\|\\}|:==|=:|\\.\\.|<>|`'} // relevance booster
    ]
  };
};

/***/ })

};;
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_clean.render-page.js.map