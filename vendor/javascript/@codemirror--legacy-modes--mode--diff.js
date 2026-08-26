// @codemirror/legacy-modes/mode/diff@6.5.3 downloaded from https://ga.jspm.io/npm:@codemirror/legacy-modes@6.5.3/mode/diff.js

var e={"+":`inserted`,"-":`deleted`,"@":`meta`};const t={name:`diff`,token:function(t){var n=t.string.search(/[\t ]+?$/);if(!t.sol()||n===0)return t.skipToEnd(),(`error `+(e[t.string.charAt(0)]||``)).replace(/ $/,``);var r=e[t.peek()]||t.skipToEnd();return n===-1?t.skipToEnd():t.pos=n,r}};export{t as diff};

