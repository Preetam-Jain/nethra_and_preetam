// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lsveV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "cbf799db6d77bf5c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hPp0z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _swiperBundleMinMjs = require("swiper/swiper-bundle.min.mjs");
var _swiperBundleMinMjsDefault = parcelHelpers.interopDefault(_swiperBundleMinMjs);
var _swiperBundleMinCss = require("swiper/swiper-bundle.min.css");
const timelineSwiper = new (0, _swiperBundleMinMjsDefault.default)(".timeline .swiper-container", {
    direction: "vertical",
    loop: false,
    speed: 1600,
    effect: "card",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            let year = document.querySelectorAll(".swiper-slide")[index].getAttribute("data-year");
            return '<span class="' + className + '">' + year + "</span>";
        }
    },
    mousewheel: {
        enabled: true
    }
});
let swiperWrapper = document.getElementsByClassName("swiper-wrapper")[0];
let slides = [];
for(let i = 0; i < 22; i++)slides.push(document.getElementById(`${i}`));
console.log(`first slides: ${slides}`);
let head = 0;
let tail = 9;
let currentSlide = 0;
for(let i = 10; i < slides.length; i++){
    console.log(`removing: ${slides[i]}`);
    slides[i].remove();
}
timelineSwiper.update();
timelineSwiper.on("slideChangeTransitionEnd", function() {
    let slidesMoved = timelineSwiper.activeIndex - timelineSwiper.previousIndex;
    if (slidesMoved > 0) {
        currentSlide += slidesMoved;
        if (timelineSwiper.activeIndex === 9 && currentSlide != slides.length - 1) {
            slides[head].remove();
            head++;
            timelineSwiper.updateSlides();
            swiperWrapper.appendChild(slides[tail + 1]);
            tail++;
            timelineSwiper.updateSlides();
            timelineSwiper.activeIndex--;
            timelineSwiper.update();
        }
    } else {
        currentSlide += slidesMoved;
        if (timelineSwiper.activeIndex === 0 && currentSlide != 0) {
            slides[tail].remove();
            tail--;
            timelineSwiper.updateSlides();
            swiperWrapper.prepend(slides[head - 1]);
            head--;
            timelineSwiper.updateSlides();
            timelineSwiper.activeIndex++;
            timelineSwiper.update();
        }
    }
});

},{"swiper/swiper-bundle.min.mjs":"lPavB","swiper/swiper-bundle.min.css":"girFM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPavB":[function(require,module,exports) {
/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _swiperCoreMinMjs.S));
parcelHelpers.export(exports, "default", ()=>(0, _swiperCoreMinMjs.S));
var _swiperCoreMinMjs = require("./shared/swiper-core.min.mjs");
var _virtualMinMjs = require("./modules/virtual.min.mjs");
var _virtualMinMjsDefault = parcelHelpers.interopDefault(_virtualMinMjs);
var _keyboardMinMjs = require("./modules/keyboard.min.mjs");
var _keyboardMinMjsDefault = parcelHelpers.interopDefault(_keyboardMinMjs);
var _mousewheelMinMjs = require("./modules/mousewheel.min.mjs");
var _mousewheelMinMjsDefault = parcelHelpers.interopDefault(_mousewheelMinMjs);
var _navigationMinMjs = require("./modules/navigation.min.mjs");
var _navigationMinMjsDefault = parcelHelpers.interopDefault(_navigationMinMjs);
var _paginationMinMjs = require("./modules/pagination.min.mjs");
var _paginationMinMjsDefault = parcelHelpers.interopDefault(_paginationMinMjs);
var _scrollbarMinMjs = require("./modules/scrollbar.min.mjs");
var _scrollbarMinMjsDefault = parcelHelpers.interopDefault(_scrollbarMinMjs);
var _parallaxMinMjs = require("./modules/parallax.min.mjs");
var _parallaxMinMjsDefault = parcelHelpers.interopDefault(_parallaxMinMjs);
var _zoomMinMjs = require("./modules/zoom.min.mjs");
var _zoomMinMjsDefault = parcelHelpers.interopDefault(_zoomMinMjs);
var _controllerMinMjs = require("./modules/controller.min.mjs");
var _controllerMinMjsDefault = parcelHelpers.interopDefault(_controllerMinMjs);
var _a11YMinMjs = require("./modules/a11y.min.mjs");
var _a11YMinMjsDefault = parcelHelpers.interopDefault(_a11YMinMjs);
var _historyMinMjs = require("./modules/history.min.mjs");
var _historyMinMjsDefault = parcelHelpers.interopDefault(_historyMinMjs);
var _hashNavigationMinMjs = require("./modules/hash-navigation.min.mjs");
var _hashNavigationMinMjsDefault = parcelHelpers.interopDefault(_hashNavigationMinMjs);
var _autoplayMinMjs = require("./modules/autoplay.min.mjs");
var _autoplayMinMjsDefault = parcelHelpers.interopDefault(_autoplayMinMjs);
var _thumbsMinMjs = require("./modules/thumbs.min.mjs");
var _thumbsMinMjsDefault = parcelHelpers.interopDefault(_thumbsMinMjs);
var _freeModeMinMjs = require("./modules/free-mode.min.mjs");
var _freeModeMinMjsDefault = parcelHelpers.interopDefault(_freeModeMinMjs);
var _gridMinMjs = require("./modules/grid.min.mjs");
var _gridMinMjsDefault = parcelHelpers.interopDefault(_gridMinMjs);
var _manipulationMinMjs = require("./modules/manipulation.min.mjs");
var _manipulationMinMjsDefault = parcelHelpers.interopDefault(_manipulationMinMjs);
var _effectFadeMinMjs = require("./modules/effect-fade.min.mjs");
var _effectFadeMinMjsDefault = parcelHelpers.interopDefault(_effectFadeMinMjs);
var _effectCubeMinMjs = require("./modules/effect-cube.min.mjs");
var _effectCubeMinMjsDefault = parcelHelpers.interopDefault(_effectCubeMinMjs);
var _effectFlipMinMjs = require("./modules/effect-flip.min.mjs");
var _effectFlipMinMjsDefault = parcelHelpers.interopDefault(_effectFlipMinMjs);
var _effectCoverflowMinMjs = require("./modules/effect-coverflow.min.mjs");
var _effectCoverflowMinMjsDefault = parcelHelpers.interopDefault(_effectCoverflowMinMjs);
var _effectCreativeMinMjs = require("./modules/effect-creative.min.mjs");
var _effectCreativeMinMjsDefault = parcelHelpers.interopDefault(_effectCreativeMinMjs);
var _effectCardsMinMjs = require("./modules/effect-cards.min.mjs");
var _effectCardsMinMjsDefault = parcelHelpers.interopDefault(_effectCardsMinMjs);
const modules = [
    (0, _virtualMinMjsDefault.default),
    (0, _keyboardMinMjsDefault.default),
    (0, _mousewheelMinMjsDefault.default),
    (0, _navigationMinMjsDefault.default),
    (0, _paginationMinMjsDefault.default),
    (0, _scrollbarMinMjsDefault.default),
    (0, _parallaxMinMjsDefault.default),
    (0, _zoomMinMjsDefault.default),
    (0, _controllerMinMjsDefault.default),
    (0, _a11YMinMjsDefault.default),
    (0, _historyMinMjsDefault.default),
    (0, _hashNavigationMinMjsDefault.default),
    (0, _autoplayMinMjsDefault.default),
    (0, _thumbsMinMjsDefault.default),
    (0, _freeModeMinMjsDefault.default),
    (0, _gridMinMjsDefault.default),
    (0, _manipulationMinMjsDefault.default),
    (0, _effectFadeMinMjsDefault.default),
    (0, _effectCubeMinMjsDefault.default),
    (0, _effectFlipMinMjsDefault.default),
    (0, _effectCoverflowMinMjsDefault.default),
    (0, _effectCreativeMinMjsDefault.default),
    (0, _effectCardsMinMjsDefault.default)
];
(0, _swiperCoreMinMjs.S).use(modules);

},{"./shared/swiper-core.min.mjs":"5yFv0","./modules/virtual.min.mjs":"gtD4C","./modules/keyboard.min.mjs":"g564D","./modules/mousewheel.min.mjs":"a1h1i","./modules/navigation.min.mjs":"kRi9Q","./modules/pagination.min.mjs":"56ScH","./modules/scrollbar.min.mjs":"hsCU0","./modules/parallax.min.mjs":"26fXf","./modules/zoom.min.mjs":"1OJfQ","./modules/controller.min.mjs":"gDERx","./modules/a11y.min.mjs":"8Xwor","./modules/history.min.mjs":"fnAE4","./modules/hash-navigation.min.mjs":"8JnJn","./modules/autoplay.min.mjs":"9xfb8","./modules/thumbs.min.mjs":"6ESRs","./modules/free-mode.min.mjs":"eOW0L","./modules/grid.min.mjs":"dI2Xv","./modules/manipulation.min.mjs":"i7tKB","./modules/effect-fade.min.mjs":"7b8YE","./modules/effect-cube.min.mjs":"4Xe5q","./modules/effect-flip.min.mjs":"q2K6E","./modules/effect-coverflow.min.mjs":"1wJjZ","./modules/effect-creative.min.mjs":"gJMVE","./modules/effect-cards.min.mjs":"dfbka","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yFv0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "S", ()=>Swiper);
parcelHelpers.export(exports, "d", ()=>defaults);
var _ssrWindowEsmMinMjs = require("./ssr-window.esm.min.mjs");
var _utilsMinMjs = require("./utils.min.mjs");
let support, deviceCached, browser;
function calcSupport() {
    const e = (0, _ssrWindowEsmMinMjs.a)(), t = (0, _ssrWindowEsmMinMjs.g)();
    return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    };
}
function getSupport() {
    return support || (support = calcSupport()), support;
}
function calcDevice(e) {
    let { userAgent: t } = void 0 === e ? {} : e;
    const s = getSupport(), i = (0, _ssrWindowEsmMinMjs.a)(), r = i.navigator.platform, n = t || i.navigator.userAgent, a = {
        ios: !1,
        android: !1
    }, l = i.screen.width, o = i.screen.height, d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let c = n.match(/(iPad).*OS\s([\d_]+)/);
    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = "Win32" === r;
    let m = "MacIntel" === r;
    return !c && m && s.touch && [
        "1024x1366",
        "1366x1024",
        "834x1194",
        "1194x834",
        "834x1112",
        "1112x834",
        "768x1024",
        "1024x768",
        "820x1180",
        "1180x820",
        "810x1080",
        "1080x810"
    ].indexOf(`${l}x${o}`) >= 0 && (c = n.match(/(Version)\/([\d.]+)/), c || (c = [
        0,
        1,
        "13_0_0"
    ]), m = !1), d && !h && (a.os = "android", a.android = !0), (c || u || p) && (a.os = "ios", a.ios = !0), a;
}
function getDevice(e) {
    return void 0 === e && (e = {}), deviceCached || (deviceCached = calcDevice(e)), deviceCached;
}
function calcBrowser() {
    const e = (0, _ssrWindowEsmMinMjs.a)(), t = getDevice();
    let s = !1;
    function i() {
        const t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
    }
    if (i()) {
        const t = String(e.navigator.userAgent);
        if (t.includes("Version/")) {
            const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e)=>Number(e));
            s = e < 16 || 16 === e && i < 2;
        }
    }
    const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent), n = i();
    return {
        isSafari: s || n,
        needPerspectiveFix: s,
        need3dFix: n || r && t.ios,
        isWebView: r
    };
}
function getBrowser() {
    return browser || (browser = calcBrowser()), browser;
}
function Resize(e) {
    let { swiper: t, on: s, emit: i } = e;
    const r = (0, _ssrWindowEsmMinMjs.a)();
    let n = null, a = null;
    const l = ()=>{
        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
    }, o = ()=>{
        t && !t.destroyed && t.initialized && i("orientationchange");
    };
    s("init", ()=>{
        t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e)=>{
            a = r.requestAnimationFrame(()=>{
                const { width: s, height: i } = t;
                let r = s, n = i;
                e.forEach((e)=>{
                    let { contentBoxSize: s, contentRect: i, target: a } = e;
                    a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize);
                }), r === s && n === i || l();
            });
        }), n.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", o));
    }), s("destroy", ()=>{
        a && r.cancelAnimationFrame(a), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", o);
    });
}
function Observer(e) {
    let { swiper: t, extendParams: s, on: i, emit: r } = e;
    const n = [], a = (0, _ssrWindowEsmMinMjs.a)(), l = function(e, s) {
        void 0 === s && (s = {});
        const i = new (a.MutationObserver || a.WebkitMutationObserver)((e)=>{
            if (t.__preventObserver__) return;
            if (1 === e.length) return void r("observerUpdate", e[0]);
            const s = function() {
                r("observerUpdate", e[0]);
            };
            a.requestAnimationFrame ? a.requestAnimationFrame(s) : a.setTimeout(s, 0);
        });
        i.observe(e, {
            attributes: void 0 === s.attributes || s.attributes,
            childList: void 0 === s.childList || s.childList,
            characterData: void 0 === s.characterData || s.characterData
        }), n.push(i);
    };
    s({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), i("init", ()=>{
        if (t.params.observer) {
            if (t.params.observeParents) {
                const e = (0, _utilsMinMjs.a)(t.hostEl);
                for(let t = 0; t < e.length; t += 1)l(e[t]);
            }
            l(t.hostEl, {
                childList: t.params.observeSlideChildren
            }), l(t.wrapperEl, {
                attributes: !1
            });
        }
    }), i("destroy", ()=>{
        n.forEach((e)=>{
            e.disconnect();
        }), n.splice(0, n.length);
    });
}
var eventsEmitter = {
    on (e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const r = s ? "unshift" : "push";
        return e.split(" ").forEach((e)=>{
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
        }), i;
    },
    once (e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function r() {
            i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
            for(var s = arguments.length, n = new Array(s), a = 0; a < s; a++)n[a] = arguments[a];
            t.apply(i, n);
        }
        return r.__emitterProxy = t, i.on(e, r, s);
    },
    onAny (e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny (e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off (e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e)=>{
            void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((i, r)=>{
                (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1);
            });
        }), s) : s;
    },
    emit () {
        const e = this;
        if (!e.eventsListeners || e.destroyed) return e;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for(var r = arguments.length, n = new Array(r), a = 0; a < r; a++)n[a] = arguments[a];
        "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
        return (Array.isArray(t) ? t : t.split(" ")).forEach((t)=>{
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e)=>{
                e.apply(i, [
                    t,
                    ...s
                ]);
            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e)=>{
                e.apply(i, s);
            });
        }), e;
    }
};
function updateSize() {
    const e = this;
    let t, s;
    const i = e.el;
    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, _utilsMinMjs.o)(i, "padding-left") || 0, 10) - parseInt((0, _utilsMinMjs.o)(i, "padding-right") || 0, 10), s = s - parseInt((0, _utilsMinMjs.o)(i, "padding-top") || 0, 10) - parseInt((0, _utilsMinMjs.o)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
    }));
}
function updateSlides() {
    const e = this;
    function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
    }
    const s = e.params, { wrapperEl: i, slidesEl: r, size: n, rtlTranslate: a, wrongRTL: l } = e, o = e.virtual && s.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, c = (0, _utilsMinMjs.e)(r, `.${e.params.slideClass}, swiper-slide`), p = o ? e.virtual.slides.length : c.length;
    let u = [];
    const h = [], m = [];
    let f = s.slidesOffsetBefore;
    "function" == typeof f && (f = s.slidesOffsetBefore.call(e));
    let v = s.slidesOffsetAfter;
    "function" == typeof v && (v = s.slidesOffsetAfter.call(e));
    const g = e.snapGrid.length, w = e.slidesGrid.length;
    let S = s.spaceBetween, T = -f, b = 0, x = 0;
    if (void 0 === n) return;
    "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * n : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, c.forEach((e)=>{
        a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
    }), s.centeredSlides && s.cssMode && ((0, _utilsMinMjs.s)(i, "--swiper-centered-offset-before", ""), (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-after", ""));
    const y = s.grid && s.grid.rows > 1 && e.grid;
    let E;
    y ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
    const C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e)=>void 0 !== s.breakpoints[e].slidesPerView).length > 0;
    for(let i = 0; i < p; i += 1){
        let r;
        if (E = 0, c[i] && (r = c[i]), y && e.grid.updateSlide(i, r, c), !c[i] || "none" !== (0, _utilsMinMjs.o)(r, "display")) {
            if ("auto" === s.slidesPerView) {
                C && (c[i].style[e.getDirectionLabel("width")] = "");
                const n = getComputedStyle(r), a = r.style.transform, l = r.style.webkitTransform;
                if (a && (r.style.transform = "none"), l && (r.style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? (0, _utilsMinMjs.f)(r, "width", !0) : (0, _utilsMinMjs.f)(r, "height", !0);
                else {
                    const e = t(n, "width"), s = t(n, "padding-left"), i = t(n, "padding-right"), a = t(n, "margin-left"), l = t(n, "margin-right"), o = n.getPropertyValue("box-sizing");
                    if (o && "border-box" === o) E = e + a + l;
                    else {
                        const { clientWidth: t, offsetWidth: n } = r;
                        E = e + s + i + a + l + (n - t);
                    }
                }
                a && (r.style.transform = a), l && (r.style.webkitTransform = l), s.roundLengths && (E = Math.floor(E));
            } else E = (n - (s.slidesPerView - 1) * S) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), c[i] && (c[i].style[e.getDirectionLabel("width")] = `${E}px`);
            c[i] && (c[i].swiperSlideSize = E), m.push(E), s.centeredSlides ? (T = T + E / 2 + b / 2 + S, 0 === b && 0 !== i && (T = T - n / 2 - S), 0 === i && (T = T - n / 2 - S), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), x % s.slidesPerGroup == 0 && u.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(T), h.push(T), T = T + E + S), e.virtualSize += E + S, b = E, x += 1;
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, n) + v, a && l && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = `${e.virtualSize + S}px`), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize + S}px`), y && e.grid.updateWrapperSize(E, u), !s.centeredSlides) {
        const t = [];
        for(let i = 0; i < u.length; i += 1){
            let r = u[i];
            s.roundLengths && (r = Math.floor(r)), u[i] <= e.virtualSize - n && t.push(r);
        }
        u = t, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
    }
    if (o && s.loop) {
        const t = m[0] + S;
        if (s.slidesPerGroup > 1) {
            const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup), r = t * s.slidesPerGroup;
            for(let e = 0; e < i; e += 1)u.push(u[u.length - 1] + r);
        }
        for(let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)1 === s.slidesPerGroup && u.push(u[u.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t;
    }
    if (0 === u.length && (u = [
        0
    ]), 0 !== S) {
        const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter((e, t)=>!(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e)=>{
            e.style[t] = `${S}px`;
        });
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t)=>{
            e += t + (S || 0);
        }), e -= S;
        const t = e - n;
        u = u.map((e)=>e <= 0 ? -f : e > t ? t + v : e);
    }
    if (s.centerInsufficientSlides) {
        let e = 0;
        m.forEach((t)=>{
            e += t + (S || 0);
        }), e -= S;
        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (e + t < n) {
            const s = (n - e - t) / 2;
            u.forEach((e, t)=>{
                u[t] = e - s;
            }), h.forEach((e, t)=>{
                h[t] = e + s;
            });
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: h,
        slidesSizesGrid: m
    }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-before", -u[0] + "px"), (0, _utilsMinMjs.s)(i, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
        const t = -e.snapGrid[0], s = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map((e)=>e + t), e.slidesGrid = e.slidesGrid.map((e)=>e + s);
    }
    if (p !== d && e.emit("slidesLengthChange"), u.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
        const t = `${s.containerModifierClass}backface-hidden`, i = e.el.classList.contains(t);
        p <= s.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t);
    }
}
function updateAutoHeight(e) {
    const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
    let r, n = 0;
    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
    const a = (e)=>i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e)=>{
            s.push(e);
        });
        else for(r = 0; r < Math.ceil(t.params.slidesPerView); r += 1){
            const e = t.activeIndex + r;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
        }
    } else s.push(a(t.activeIndex));
    for(r = 0; r < s.length; r += 1)if (void 0 !== s[r]) {
        const e = s[r].offsetHeight;
        n = e > n ? e : n;
    }
    (n || 0 === n) && (t.wrapperEl.style.height = `${n}px`);
}
function updateSlidesOffset() {
    const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for(let i = 0; i < t.length; i += 1)t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
}
const toggleSlideClasses$1 = (e, t, s)=>{
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function updateSlidesProgress(e) {
    void 0 === e && (e = this && this.translate || 0);
    const t = this, s = t.params, { slides: i, rtlTranslate: r, snapGrid: n } = t;
    if (0 === i.length) return;
    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
    let a = -e;
    r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    let l = s.spaceBetween;
    "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
    for(let e = 0; e < i.length; e += 1){
        const o = i[e];
        let d = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l), u = -(a - d), h = u + t.slidesSizesGrid[e], m = u >= 0 && u <= t.size - t.slidesSizesGrid[e], f = u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size;
        f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e)), toggleSlideClasses$1(o, f, s.slideVisibleClass), toggleSlideClasses$1(o, m, s.slideFullyVisibleClass), o.progress = r ? -c : c, o.originalProgress = r ? -p : p;
    }
}
function updateProgress(e) {
    const t = this;
    if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * s || 0;
    }
    const s = t.params, i = t.maxTranslate() - t.minTranslate();
    let { progress: r, isBeginning: n, isEnd: a, progressLoop: l } = t;
    const o = n, d = a;
    if (0 === i) r = 0, n = !0, a = !0;
    else {
        r = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1, l = Math.abs(e - t.maxTranslate()) < 1;
        n = s || r <= 0, a = l || r >= 1, s && (r = 0), l && (r = 1);
    }
    if (s.loop) {
        const s = t.getSlideIndexByData(0), i = t.getSlideIndexByData(t.slides.length - 1), r = t.slidesGrid[s], n = t.slidesGrid[i], a = t.slidesGrid[t.slidesGrid.length - 1], o = Math.abs(e);
        l = o >= r ? (o - r) / a : (o + a - n) / a, l > 1 && (l -= 1);
    }
    Object.assign(t, {
        progress: r,
        progressLoop: l,
        isBeginning: n,
        isEnd: a
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (o && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
}
const toggleSlideClasses = (e, t, s)=>{
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
};
function updateSlidesClasses() {
    const e = this, { slides: t, params: s, slidesEl: i, activeIndex: r } = e, n = e.virtual && s.virtual.enabled, a = e.grid && s.grid && s.grid.rows > 1, l = (e)=>(0, _utilsMinMjs.e)(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
    let o, d, c;
    if (n) {
        if (s.loop) {
            let t = r - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`);
        } else o = l(`[data-swiper-slide-index="${r}"]`);
    } else a ? (o = t.filter((e)=>e.column === r)[0], c = t.filter((e)=>e.column === r + 1)[0], d = t.filter((e)=>e.column === r - 1)[0]) : o = t[r];
    o && (a || (c = (0, _utilsMinMjs.p)(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), d = (0, _utilsMinMjs.q)(o, `.${s.slideClass}, swiper-slide`)[0], s.loop)), t.forEach((e)=>{
        toggleSlideClasses(e, e === o, s.slideActiveClass), toggleSlideClasses(e, e === c, s.slideNextClass), toggleSlideClasses(e, e === d, s.slidePrevClass);
    }), e.emitSlidesClasses();
}
const processLazyPreloader = (e, t)=>{
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
    if (s) {
        let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(()=>{
            s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove());
        })), t && t.remove();
    }
}, unlazy = (e, t)=>{
    if (!e.slides[t]) return;
    const s = e.slides[t].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
}, preload = (e)=>{
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const s = e.slides.length;
    if (!s || !t || t < 0) return;
    t = Math.min(t, s);
    const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), r = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
        const s = r, n = [
            s - t
        ];
        return n.push(...Array.from({
            length: t
        }).map((e, t)=>s + i + t)), void e.slides.forEach((t, s)=>{
            n.includes(t.column) && unlazy(e, s);
        });
    }
    const n = r + i - 1;
    if (e.params.rewind || e.params.loop) for(let i = r - t; i <= n + t; i += 1){
        const t = (i % s + s) % s;
        (t < r || t > n) && unlazy(e, t);
    }
    else for(let i = Math.max(r - t, 0); i <= Math.min(n + t, s - 1); i += 1)i !== r && (i > n || i < r) && unlazy(e, i);
};
function getActiveIndexByTranslate(e) {
    const { slidesGrid: t, params: s } = e, i = e.rtlTranslate ? e.translate : -e.translate;
    let r;
    for(let e = 0; e < t.length; e += 1)void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? r = e : i >= t[e] && i < t[e + 1] && (r = e + 1) : i >= t[e] && (r = e);
    return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
}
function updateActiveIndex(e) {
    const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { snapGrid: i, params: r, activeIndex: n, realIndex: a, snapIndex: l } = t;
    let o, d = e;
    const c = (e)=>{
        let s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
    };
    if (void 0 === d && (d = getActiveIndexByTranslate(t)), i.indexOf(s) >= 0) o = i.indexOf(s);
    else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / r.slidesPerGroup);
    }
    if (o >= i.length && (o = i.length - 1), d === n && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
    if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
    const p = t.grid && r.grid && r.grid.rows > 1;
    let u;
    if (t.virtual && r.virtual.enabled && r.loop) u = c(d);
    else if (p) {
        const e = t.slides.filter((e)=>e.column === d)[0];
        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / r.grid.rows);
    } else if (t.slides[d]) {
        const e = t.slides[d].getAttribute("data-swiper-slide-index");
        u = e ? parseInt(e, 10) : d;
    } else u = d;
    Object.assign(t, {
        previousSnapIndex: l,
        snapIndex: o,
        previousRealIndex: a,
        realIndex: u,
        previousIndex: n,
        activeIndex: d
    }), t.initialized && preload(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
}
function updateClickedSlide(e, t) {
    const s = this, i = s.params;
    let r = e.closest(`.${i.slideClass}, swiper-slide`);
    !r && s.isElement && t && t.length > 1 && t.includes(e) && [
        ...t.slice(t.indexOf(e) + 1, t.length)
    ].forEach((e)=>{
        !r && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (r = e);
    });
    let n, a = !1;
    if (r) {
        for(let e = 0; e < s.slides.length; e += 1)if (s.slides[e] === r) {
            a = !0, n = e;
            break;
        }
    }
    if (!r || !a) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
    s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
};
function getSwiperTranslate(e) {
    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
    const { params: t, rtlTranslate: s, translate: i, wrapperEl: r } = this;
    if (t.virtualTranslate) return s ? -i : i;
    if (t.cssMode) return i;
    let n = (0, _utilsMinMjs.j)(r, e);
    return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0;
}
function setTranslate(e, t) {
    const s = this, { rtlTranslate: i, params: r, wrapperEl: n, progress: a } = s;
    let l = 0, o = 0;
    let d;
    s.isHorizontal() ? l = i ? -e : e : o = e, r.roundLengths && (l = Math.floor(l), o = Math.floor(o)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : o, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -o : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : o -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${o}px, 0px)`);
    const c = s.maxTranslate() - s.minTranslate();
    d = 0 === c ? 0 : (e - s.minTranslate()) / c, d !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function minTranslate() {
    return -this.snapGrid[0];
}
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function translateTo(e, t, s, i, r) {
    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
    const n = this, { params: a, wrapperEl: l } = n;
    if (n.animating && a.preventInteractionOnTransition) return !1;
    const o = n.minTranslate(), d = n.maxTranslate();
    let c;
    if (c = i && e > o ? o : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
        const e = n.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
            if (!n.support.smoothScroll) return (0, _utilsMinMjs.r)({
                swiper: n,
                targetPosition: -c,
                side: e ? "left" : "top"
            }), !0;
            l.scrollTo({
                [e ? "left" : "top"]: -c,
                behavior: "smooth"
            });
        }
        return !0;
    }
    return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"));
    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
};
function setTransition(e, t) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
}
function transitionEmit(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: r } = e;
    const { activeIndex: n, previousIndex: a } = t;
    let l = i;
    if (l || (l = n > a ? "next" : n < a ? "prev" : "reset"), t.emit(`transition${r}`), s && n !== a) {
        if ("reset" === l) return void t.emit(`slideResetTransition${r}`);
        t.emit(`slideChangeTransition${r}`), "next" === l ? t.emit(`slideNextTransition${r}`) : t.emit(`slidePrevTransition${r}`);
    }
}
function transitionStart(e, t) {
    void 0 === e && (e = !0);
    const s = this, { params: i } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), transitionEmit({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "Start"
    }));
}
function transitionEnd(e, t) {
    void 0 === e && (e = !0);
    const s = this, { params: i } = s;
    s.animating = !1, i.cssMode || (s.setTransition(0), transitionEmit({
        swiper: s,
        runCallbacks: e,
        direction: t,
        step: "End"
    }));
}
var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
};
function slideTo(e, t, s, i, r) {
    void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
    const n = this;
    let a = e;
    a < 0 && (a = 0);
    const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = n;
    if (!m && !i && !r || n.destroyed || n.animating && l.preventInteractionOnTransition) return !1;
    void 0 === t && (t = n.params.speed);
    const f = Math.min(n.params.slidesPerGroupSkip, a);
    let v = f + Math.floor((a - f) / n.params.slidesPerGroup);
    v >= o.length && (v = o.length - 1);
    const g = -o[v];
    if (l.normalizeSlideIndex) for(let e = 0; e < d.length; e += 1){
        const t = -Math.floor(100 * g), s = Math.floor(100 * d[e]), i = Math.floor(100 * d[e + 1]);
        void 0 !== d[e + 1] ? t >= s && t < i - (i - s) / 2 ? a = e : t >= s && t < i && (a = e + 1) : t >= s && (a = e);
    }
    if (n.initialized && a !== p) {
        if (!n.allowSlideNext && (u ? g > n.translate && g > n.minTranslate() : g < n.translate && g < n.minTranslate())) return !1;
        if (!n.allowSlidePrev && g > n.translate && g > n.maxTranslate() && (p || 0) !== a) return !1;
    }
    let w;
    if (a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(g), w = a > p ? "next" : a < p ? "prev" : "reset", u && -g === n.translate || !u && g === n.translate) return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(g), "reset" !== w && (n.transitionStart(s, w), n.transitionEnd(s, w)), !1;
    if (l.cssMode) {
        const e = n.isHorizontal(), s = u ? g : -g;
        if (0 === t) {
            const t = n.virtual && n.params.virtual.enabled;
            t && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), t && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(()=>{
                h[e ? "scrollLeft" : "scrollTop"] = s;
            })) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(()=>{
                n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
            });
        } else {
            if (!n.support.smoothScroll) return (0, _utilsMinMjs.r)({
                swiper: n,
                targetPosition: s,
                side: e ? "left" : "top"
            }), !0;
            h.scrollTo({
                [e ? "left" : "top"]: s,
                behavior: "smooth"
            });
        }
        return !0;
    }
    return n.setTransition(t), n.setTranslate(g), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, w), 0 === t ? n.transitionEnd(s, w) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, w));
    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function slideToLoop(e, t, s, i) {
    if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) e = parseInt(e, 10);
    const r = this;
    if (r.destroyed) return;
    void 0 === t && (t = r.params.speed);
    const n = r.grid && r.params.grid && r.params.grid.rows > 1;
    let a = e;
    if (r.params.loop) {
        if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;
        else {
            let e;
            if (n) {
                const t = a * r.params.grid.rows;
                e = r.slides.filter((e)=>1 * e.getAttribute("data-swiper-slide-index") === t)[0].column;
            } else e = r.getSlideIndexByData(a);
            const t = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, { centeredSlides: s } = r.params;
            let l = r.params.slidesPerView;
            "auto" === l ? l = r.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(r.params.slidesPerView, 10)), s && l % 2 == 0 && (l += 1));
            let o = t - e < l;
            if (s && (o = o || e < Math.ceil(l / 2)), i && s && "auto" !== r.params.slidesPerView && !n && (o = !1), o) {
                const i = s ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                r.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? r.realIndex : void 0
                });
            }
            if (n) {
                const e = a * r.params.grid.rows;
                a = r.slides.filter((t)=>1 * t.getAttribute("data-swiper-slide-index") === e)[0].column;
            } else a = r.getSlideIndexByData(a);
        }
    }
    return requestAnimationFrame(()=>{
        r.slideTo(a, t, s, i);
    }), r;
}
function slideNext(e, t, s) {
    void 0 === t && (t = !0);
    const i = this, { enabled: r, params: n, animating: a } = i;
    if (!r || i.destroyed) return i;
    void 0 === e && (e = i.params.speed);
    let l = n.slidesPerGroup;
    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l, d = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (a && !d && n.loopPreventsSliding) return !1;
        if (i.loopFix({
            direction: "next"
        }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame(()=>{
            i.slideTo(i.activeIndex + o, e, t, s);
        }), !0;
    }
    return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s);
}
function slidePrev(e, t, s) {
    void 0 === t && (t = !0);
    const i = this, { params: r, snapGrid: n, slidesGrid: a, rtlTranslate: l, enabled: o, animating: d } = i;
    if (!o || i.destroyed) return i;
    void 0 === e && (e = i.params.speed);
    const c = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
    }
    const u = p(l ? i.translate : -i.translate), h = n.map((e)=>p(e));
    let m = n[h.indexOf(u) - 1];
    if (void 0 === m && r.cssMode) {
        let e;
        n.forEach((t, s)=>{
            u >= t && (e = s);
        }), void 0 !== e && (m = n[e > 0 ? e - 1 : e]);
    }
    let f = 0;
    if (void 0 !== m && (f = a.indexOf(m), f < 0 && (f = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), r.rewind && i.isBeginning) {
        const r = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(r, e, t, s);
    }
    return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame(()=>{
        i.slideTo(f, e, t, s);
    }), !0) : i.slideTo(f, e, t, s);
}
function slideReset(e, t, s) {
    void 0 === t && (t = !0);
    const i = this;
    if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s);
}
function slideToClosest(e, t, s, i) {
    void 0 === t && (t = !0), void 0 === i && (i = .5);
    const r = this;
    if (r.destroyed) return;
    void 0 === e && (e = r.params.speed);
    let n = r.activeIndex;
    const a = Math.min(r.params.slidesPerGroupSkip, n), l = a + Math.floor((n - a) / r.params.slidesPerGroup), o = r.rtlTranslate ? r.translate : -r.translate;
    if (o >= r.snapGrid[l]) {
        const e = r.snapGrid[l];
        o - e > (r.snapGrid[l + 1] - e) * i && (n += r.params.slidesPerGroup);
    } else {
        const e = r.snapGrid[l - 1];
        o - e <= (r.snapGrid[l] - e) * i && (n -= r.params.slidesPerGroup);
    }
    return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
}
function slideToClickedSlide() {
    const e = this;
    if (e.destroyed) return;
    const { params: t, slidesEl: s } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r, n = e.clickedIndex;
    const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = e.getSlideIndex((0, _utilsMinMjs.e)(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), (0, _utilsMinMjs.n)(()=>{
            e.slideTo(n);
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = e.getSlideIndex((0, _utilsMinMjs.e)(s, `${a}[data-swiper-slide-index="${r}"]`)[0]), (0, _utilsMinMjs.n)(()=>{
            e.slideTo(n);
        })) : e.slideTo(n);
    } else e.slideTo(n);
}
var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
};
function loopCreate(e) {
    const t = this, { params: s, slidesEl: i } = t;
    if (!s.loop || t.virtual && t.params.virtual.enabled) return;
    const r = ()=>{
        (0, _utilsMinMjs.e)(i, `.${s.slideClass}, swiper-slide`).forEach((e, t)=>{
            e.setAttribute("data-swiper-slide-index", t);
        });
    }, n = t.grid && s.grid && s.grid.rows > 1, a = s.slidesPerGroup * (n ? s.grid.rows : 1), l = t.slides.length % a != 0, o = n && t.slides.length % s.grid.rows != 0, d = (e)=>{
        for(let i = 0; i < e; i += 1){
            const e = t.isElement ? (0, _utilsMinMjs.c)("swiper-slide", [
                s.slideBlankClass
            ]) : (0, _utilsMinMjs.c)("div", [
                s.slideClass,
                s.slideBlankClass
            ]);
            t.slidesEl.append(e);
        }
    };
    if (l) {
        if (s.loopAddBlankSlides) d(a - t.slides.length % a), t.recalcSlides(), t.updateSlides();
        else (0, _utilsMinMjs.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r();
    } else if (o) {
        if (s.loopAddBlankSlides) d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides();
        else (0, _utilsMinMjs.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        r();
    } else r();
    t.loopFix({
        slideRealIndex: e,
        direction: s.centeredSlides ? void 0 : "next"
    });
}
function loopFix(e) {
    let { slideRealIndex: t, slideTo: s = !0, direction: i, setTranslate: r, activeSlideIndex: n, byController: a, byMousewheel: l } = void 0 === e ? {} : e;
    const o = this;
    if (!o.params.loop) return;
    o.emit("beforeLoopFix");
    const { slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: h } = o, { centeredSlides: m } = h;
    if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && h.virtual.enabled) return s && (h.centeredSlides || 0 !== o.snapIndex ? h.centeredSlides && o.snapIndex < h.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
    let f = h.slidesPerView;
    "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(h.slidesPerView, 10)), m && f % 2 == 0 && (f += 1));
    const v = h.slidesPerGroupAuto ? f : h.slidesPerGroup;
    let g = v;
    g % v != 0 && (g += v - g % v), g += h.loopAdditionalSlides, o.loopedSlides = g;
    const w = o.grid && h.grid && h.grid.rows > 1;
    d.length < f + g ? (0, _utilsMinMjs.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && "row" === h.grid.fill && (0, _utilsMinMjs.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const S = [], T = [];
    let b = o.activeIndex;
    void 0 === n ? n = o.getSlideIndex(d.filter((e)=>e.classList.contains(h.slideActiveClass))[0]) : b = n;
    const x = "next" === i || !i, y = "prev" === i || !i;
    let E = 0, C = 0;
    const M = w ? Math.ceil(d.length / h.grid.rows) : d.length, P = (w ? d[n].column : n) + (m && void 0 === r ? -f / 2 + .5 : 0);
    if (P < g) {
        E = Math.max(g - P, v);
        for(let e = 0; e < g - P; e += 1){
            const t = e - Math.floor(e / M) * M;
            if (w) {
                const e = M - t - 1;
                for(let t = d.length - 1; t >= 0; t -= 1)d[t].column === e && S.push(t);
            } else S.push(M - t - 1);
        }
    } else if (P + f > M - g) {
        C = Math.max(P - (M - 2 * g), v);
        for(let e = 0; e < C; e += 1){
            const t = e - Math.floor(e / M) * M;
            w ? d.forEach((e, s)=>{
                e.column === t && T.push(s);
            }) : T.push(t);
        }
    }
    if (o.__preventObserver__ = !0, requestAnimationFrame(()=>{
        o.__preventObserver__ = !1;
    }), y && S.forEach((e)=>{
        d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1;
    }), x && T.forEach((e)=>{
        d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1;
    }), o.recalcSlides(), "auto" === h.slidesPerView ? o.updateSlides() : w && (S.length > 0 && y || T.length > 0 && x) && o.slides.forEach((e, t)=>{
        o.grid.updateSlide(t, e, o.slides);
    }), h.watchSlidesProgress && o.updateSlidesOffset(), s) {
        if (S.length > 0 && y) {
            if (void 0 === t) {
                const e = o.slidesGrid[b], t = o.slidesGrid[b + E] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(b + Math.ceil(E), 0, !1, !0), r && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
            } else if (r) {
                const e = w ? S.length / h.grid.rows : S.length;
                o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
            }
        } else if (T.length > 0 && x) {
            if (void 0 === t) {
                const e = o.slidesGrid[b], t = o.slidesGrid[b - C] - e;
                l ? o.setTranslate(o.translate - t) : (o.slideTo(b - C, 0, !1, !0), r && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t));
            } else {
                const e = w ? T.length / h.grid.rows : T.length;
                o.slideTo(o.activeIndex - e, 0, !1, !0);
            }
        }
    }
    if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !a) {
        const e = {
            slideRealIndex: t,
            direction: i,
            setTranslate: r,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach((t)=>{
            !t.destroyed && t.params.loop && t.loopFix({
                ...e,
                slideTo: t.params.slidesPerView === h.slidesPerView && s
            });
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
            ...e,
            slideTo: o.controller.control.params.slidesPerView === h.slidesPerView && s
        });
    }
    o.emit("loopFix");
}
function loopDestroy() {
    const e = this, { params: t, slidesEl: s } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled) return;
    e.recalcSlides();
    const i = [];
    e.slides.forEach((e)=>{
        const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        i[t] = e;
    }), e.slides.forEach((e)=>{
        e.removeAttribute("data-swiper-slide-index");
    }), i.forEach((e)=>{
        s.append(e);
    }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
};
function setGrabCursor(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(()=>{
        t.__preventObserver__ = !1;
    });
}
function unsetGrabCursor() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(()=>{
        e.__preventObserver__ = !1;
    }));
}
var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
};
function closestElement(e, t) {
    return void 0 === t && (t = this), function t(s) {
        if (!s || s === (0, _ssrWindowEsmMinMjs.g)() || s === (0, _ssrWindowEsmMinMjs.a)()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        const i = s.closest(e);
        return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
    }(t);
}
function preventEdgeSwipe(e, t, s) {
    const i = (0, _ssrWindowEsmMinMjs.a)(), { params: r } = e, n = r.edgeSwipeDetection, a = r.edgeSwipeThreshold;
    return !n || !(s <= a || s >= i.innerWidth - a) || "prevent" === n && (t.preventDefault(), !0);
}
function onTouchStart(e) {
    const t = this, s = (0, _ssrWindowEsmMinMjs.g)();
    let i = e;
    i.originalEvent && (i = i.originalEvent);
    const r = t.touchEventsData;
    if ("pointerdown" === i.type) {
        if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
        r.pointerId = i.pointerId;
    } else "touchstart" === i.type && 1 === i.targetTouches.length && (r.touchId = i.targetTouches[0].identifier);
    if ("touchstart" === i.type) return void preventEdgeSwipe(t, i, i.targetTouches[0].pageX);
    const { params: n, touches: a, enabled: l } = t;
    if (!l) return;
    if (!n.simulateTouch && "mouse" === i.pointerType) return;
    if (t.animating && n.preventInteractionOnTransition) return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let o = i.target;
    if ("wrapper" === n.touchEventsTarget && !t.wrapperEl.contains(o)) return;
    if ("which" in i && 3 === i.which) return;
    if ("button" in i && i.button > 0) return;
    if (r.isTouched && r.isMoved) return;
    const d = !!n.noSwipingClass && "" !== n.noSwipingClass, c = i.composedPath ? i.composedPath() : i.path;
    d && i.target && i.target.shadowRoot && c && (o = c[0]);
    const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, u = !(!i.target || !i.target.shadowRoot);
    if (n.noSwiping && (u ? closestElement(p, o) : o.closest(p))) return void (t.allowClick = !0);
    if (n.swipeHandler && !o.closest(n.swipeHandler)) return;
    a.currentX = i.pageX, a.currentY = i.pageY;
    const h = a.currentX, m = a.currentY;
    if (!preventEdgeSwipe(t, i, h)) return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), a.startX = h, a.startY = m, r.touchStartTime = (0, _utilsMinMjs.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
    let f = !0;
    o.matches(r.focusableElements) && (f = !1, "SELECT" === o.nodeName && (r.isTouched = !1)), s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== o && s.activeElement.blur();
    const v = f && t.allowTouchMove && n.touchStartPreventDefault;
    !n.touchStartForcePreventDefault && !v || o.isContentEditable || i.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i);
}
function onTouchMove(e) {
    const t = (0, _ssrWindowEsmMinMjs.g)(), s = this, i = s.touchEventsData, { params: r, touches: n, rtlTranslate: a, enabled: l } = s;
    if (!l) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    let o, d = e;
    if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type) {
        if (null !== i.touchId) return;
        if (d.pointerId !== i.pointerId) return;
    }
    if ("touchmove" === d.type) {
        if (o = [
            ...d.changedTouches
        ].filter((e)=>e.identifier === i.touchId)[0], !o || o.identifier !== i.touchId) return;
    } else o = d;
    if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", d));
    const c = o.pageX, p = o.pageY;
    if (d.preventedByNestedSwiper) return n.startX = c, void (n.startY = p);
    if (!s.allowTouchMove) return d.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p
    }), i.touchStartTime = (0, _utilsMinMjs.d)()));
    if (r.touchReleaseOnEdges && !r.loop) {
        if (s.isVertical()) {
            if (p < n.startY && s.translate <= s.maxTranslate() || p > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
        } else if (c < n.startX && s.translate <= s.maxTranslate() || c > n.startX && s.translate >= s.minTranslate()) return;
    }
    if (t.activeElement && d.target === t.activeElement && d.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
    i.allowTouchCallbacks && s.emit("touchMove", d), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = c, n.currentY = p;
    const u = n.currentX - n.startX, h = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(u ** 2 + h ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
        let e;
        s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", d), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling || "touchmove" === d.type && i.preventTouchMoveFromPointerMove) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    s.allowClick = !1, !r.cssMode && d.cancelable && d.preventDefault(), r.touchMoveStopPropagation && !r.nested && d.stopPropagation();
    let m = s.isHorizontal() ? u : h, f = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (m = Math.abs(m) * (a ? 1 : -1), f = Math.abs(f) * (a ? 1 : -1)), n.diff = m, m *= r.touchRatio, a && (m = -m, f = -f);
    const v = s.touchesDirection;
    s.swipeDirection = m > 0 ? "prev" : "next", s.touchesDirection = f > 0 ? "prev" : "next";
    const g = s.params.loop && !r.cssMode, w = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
    if (!i.isMoved) {
        if (g && w && s.loopFix({
            direction: s.swipeDirection
        }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const e = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
                detail: {
                    bySwiperTouchMove: !0
                }
            });
            s.wrapperEl.dispatchEvent(e);
        }
        i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d);
    }
    if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && v !== s.touchesDirection && g && w && Math.abs(m) >= 1) return Object.assign(n, {
        startX: c,
        startY: p,
        currentX: c,
        currentY: p,
        startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
    s.emit("sliderMove", d), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
    let S = !0, T = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (T = 0), m > 0 ? (g && w && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
        direction: "prev",
        setTranslate: !0,
        activeSlideIndex: 0
    }), i.currentTranslate > s.minTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** T))) : m < 0 && (g && w && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
        direction: "next",
        setTranslate: !0,
        activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
    }), i.currentTranslate < s.maxTranslate() && (S = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** T))), S && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
        if (!(Math.abs(m) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }
    r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
}
function onTouchEnd(e) {
    const t = this, s = t.touchEventsData;
    let i, r = e;
    r.originalEvent && (r = r.originalEvent);
    if ("touchend" === r.type || "touchcancel" === r.type) {
        if (i = [
            ...r.changedTouches
        ].filter((e)=>e.identifier === s.touchId)[0], !i || i.identifier !== s.touchId) return;
    } else {
        if (null !== s.touchId) return;
        if (r.pointerId !== s.pointerId) return;
        i = r;
    }
    if ([
        "pointercancel",
        "pointerout",
        "pointerleave",
        "contextmenu"
    ].includes(r.type)) {
        if (!([
            "pointercancel",
            "contextmenu"
        ].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    s.pointerId = null, s.touchId = null;
    const { params: n, touches: a, rtlTranslate: l, slidesGrid: o, enabled: d } = t;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === r.pointerType) return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const c = (0, _utilsMinMjs.d)(), p = c - s.touchStartTime;
    if (t.allowClick) {
        const e = r.path || r.composedPath && r.composedPath();
        t.updateClickedSlide(e && e[0] || r.target, e), t.emit("tap click", r), p < 300 && c - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
    }
    if (s.lastClickTime = (0, _utilsMinMjs.d)(), (0, _utilsMinMjs.n)(()=>{
        t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    let u;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = n.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
    if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
        currentPos: u
    });
    const h = u >= -t.maxTranslate() && !t.params.loop;
    let m = 0, f = t.slidesSizesGrid[0];
    for(let e = 0; e < o.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup){
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== o[e + t] ? (h || u >= o[e] && u < o[e + t]) && (m = e, f = o[e + t] - o[e]) : (h || u >= o[e]) && (m = e, f = o[o.length - 1] - o[o.length - 2]);
    }
    let v = null, g = null;
    n.rewind && (t.isBeginning ? g = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
    const w = (u - o[m]) / f, S = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (p > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (w >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? v : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - n.longSwipesRatio ? t.slideTo(m + S) : null !== g && w < 0 && Math.abs(w) > n.longSwipesRatio ? t.slideTo(g) : t.slideTo(m));
    } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + S), "prev" === t.swipeDirection && t.slideTo(null !== g ? g : m));
    }
}
function onResize() {
    const e = this, { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: r, snapGrid: n } = e, a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const l = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(()=>{
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function onClick(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function onScroll() {
    const e = this, { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let r;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    const n = e.maxTranslate() - e.minTranslate();
    r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function onLoad(e) {
    const t = this;
    processLazyPreloader(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
}
function onDocumentTouchStart() {
    const e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const events = (e, t)=>{
    const s = (0, _ssrWindowEsmMinMjs.g)(), { params: i, el: r, wrapperEl: n, device: a } = e, l = !!i.nested, o = "on" === t ? "addEventListener" : "removeEventListener", d = t;
    r && "string" != typeof r && (s[o]("touchstart", e.onDocumentTouchStart, {
        passive: !1,
        capture: l
    }), r[o]("touchstart", e.onTouchStart, {
        passive: !1
    }), r[o]("pointerdown", e.onTouchStart, {
        passive: !1
    }), s[o]("touchmove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[o]("pointermove", e.onTouchMove, {
        passive: !1,
        capture: l
    }), s[o]("touchend", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerup", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointercancel", e.onTouchEnd, {
        passive: !0
    }), s[o]("touchcancel", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerout", e.onTouchEnd, {
        passive: !0
    }), s[o]("pointerleave", e.onTouchEnd, {
        passive: !0
    }), s[o]("contextmenu", e.onTouchEnd, {
        passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && r[o]("click", e.onClick, !0), i.cssMode && n[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, !0) : e[d]("observerUpdate", onResize, !0), r[o]("load", e.onLoad, {
        capture: !0
    }));
};
function attachEvents() {
    const e = this, { params: t } = e;
    e.onTouchStart = onTouchStart.bind(e), e.onTouchMove = onTouchMove.bind(e), e.onTouchEnd = onTouchEnd.bind(e), e.onDocumentTouchStart = onDocumentTouchStart.bind(e), t.cssMode && (e.onScroll = onScroll.bind(e)), e.onClick = onClick.bind(e), e.onLoad = onLoad.bind(e), events(e, "on");
}
function detachEvents() {
    events(this, "off");
}
var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
};
const isGridEnabled = (e, t)=>e.grid && t.grid && t.grid.rows > 1;
function setBreakpoint() {
    const e = this, { realIndex: t, initialized: s, params: i, el: r } = e, n = i.breakpoints;
    if (!n || n && 0 === Object.keys(n).length) return;
    const a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
    if (!a || e.currentBreakpoint === a) return;
    const l = (a in n ? n[a] : void 0) || e.originalParams, o = isGridEnabled(e, i), d = isGridEnabled(e, l), c = e.params.grabCursor, p = l.grabCursor, u = i.enabled;
    o && !d ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (r.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), c && !p ? e.unsetGrabCursor() : !c && p && e.setGrabCursor(), [
        "navigation",
        "pagination",
        "scrollbar"
    ].forEach((t)=>{
        if (void 0 === l[t]) return;
        const s = i[t] && i[t].enabled, r = l[t] && l[t].enabled;
        s && !r && e[t].disable(), !s && r && e[t].enable();
    });
    const h = l.direction && l.direction !== i.direction, m = i.loop && (l.slidesPerView !== i.slidesPerView || h), f = i.loop;
    h && s && e.changeDirection(), (0, _utilsMinMjs.u)(e.params, l);
    const v = e.params.enabled, g = e.params.loop;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }), u && !v ? e.disable() : !u && v && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", l), s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && g ? (e.loopCreate(t), e.updateSlides()) : f && !g && e.loopDestroy()), e.emit("breakpoint", l);
}
function getBreakpoint(e, t, s) {
    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
    let i = !1;
    const r = (0, _ssrWindowEsmMinMjs.a)(), n = "window" === t ? r.innerHeight : s.clientHeight, a = Object.keys(e).map((e)=>{
        if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return {
                value: n * t,
                point: e
            };
        }
        return {
            value: e,
            point: e
        };
    });
    a.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
    for(let e = 0; e < a.length; e += 1){
        const { point: n, value: l } = a[e];
        "window" === t ? r.matchMedia(`(min-width: ${l}px)`).matches && (i = n) : l <= s.clientWidth && (i = n);
    }
    return i || "max";
}
var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
};
function prepareClasses(e, t) {
    const s = [];
    return e.forEach((e)=>{
        "object" == typeof e ? Object.keys(e).forEach((i)=>{
            e[i] && s.push(t + i);
        }) : "string" == typeof e && s.push(t + e);
    }), s;
}
function addClasses() {
    const e = this, { classNames: t, params: s, rtl: i, el: r, device: n } = e, a = prepareClasses([
        "initialized",
        s.direction,
        {
            "free-mode": e.params.freeMode && s.freeMode.enabled
        },
        {
            autoheight: s.autoHeight
        },
        {
            rtl: i
        },
        {
            grid: s.grid && s.grid.rows > 1
        },
        {
            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
        },
        {
            android: n.android
        },
        {
            ios: n.ios
        },
        {
            "css-mode": s.cssMode
        },
        {
            centered: s.cssMode && s.centeredSlides
        },
        {
            "watch-progress": s.watchSlidesProgress
        }
    ], s.containerModifierClass);
    t.push(...a), r.classList.add(...t), e.emitContainerClasses();
}
function removeClasses() {
    const { el: e, classNames: t } = this;
    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses());
}
var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
};
function checkOverflow() {
    const e = this, { isLocked: t, params: s } = e, { slidesOffsetBefore: i } = s;
    if (i) {
        const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
        e.isLocked = e.size > s;
    } else e.isLocked = 1 === e.snapGrid.length;
    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var checkOverflow$1 = {
    checkOverflow: checkOverflow
}, defaults = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
};
function moduleExtendParams(e, t) {
    return function(s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0], r = s[i];
        "object" == typeof r && null !== r ? (!0 === e[i] && (e[i] = {
            enabled: !0
        }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), [
            "pagination",
            "scrollbar"
        ].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
        }), (0, _utilsMinMjs.u)(t, s)) : (0, _utilsMinMjs.u)(t, s)) : (0, _utilsMinMjs.u)(t, s);
    };
}
const prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes
}, extendedDefaults = {};
class Swiper {
    constructor(){
        let e, t;
        for(var s = arguments.length, i = new Array(s), r = 0; r < s; r++)i[r] = arguments[r];
        1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, _utilsMinMjs.u)({}, t), e && !t.el && (t.el = e);
        const n = (0, _ssrWindowEsmMinMjs.g)();
        if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
            const e = [];
            return n.querySelectorAll(t.el).forEach((s)=>{
                const i = (0, _utilsMinMjs.u)({}, t, {
                    el: s
                });
                e.push(new Swiper(i));
            }), e;
        }
        const a = this;
        a.__swiper__ = !0, a.support = getSupport(), a.device = getDevice({
            userAgent: t.userAgent
        }), a.browser = getBrowser(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [
            ...a.__modules__
        ], t.modules && Array.isArray(t.modules) && a.modules.push(...t.modules);
        const l = {};
        a.modules.forEach((e)=>{
            e({
                params: t,
                swiper: a,
                extendParams: moduleExtendParams(t, l),
                on: a.on.bind(a),
                once: a.once.bind(a),
                off: a.off.bind(a),
                emit: a.emit.bind(a)
            });
        });
        const o = (0, _utilsMinMjs.u)({}, defaults, l);
        return a.params = (0, _utilsMinMjs.u)({}, o, extendedDefaults, t), a.originalParams = (0, _utilsMinMjs.u)({}, a.params), a.passedParams = (0, _utilsMinMjs.u)({}, t), a.params && a.params.on && Object.keys(a.params.on).forEach((e)=>{
            a.on(e, a.params.on[e]);
        }), a.params && a.params.onAny && a.onAny(a.params.onAny), Object.assign(a, {
            enabled: a.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: ()=>"horizontal" === a.params.direction,
            isVertical: ()=>"vertical" === a.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment () {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: a.params.allowSlideNext,
            allowSlidePrev: a.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: a.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: !0,
            allowTouchMove: a.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), a.emit("_swiper"), a.params.init && a.init(), a;
    }
    getDirectionLabel(e) {
        return this.isHorizontal() ? e : ({
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        })[e];
    }
    getSlideIndex(e) {
        const { slidesEl: t, params: s } = this, i = (0, _utilsMinMjs.e)(t, `.${s.slideClass}, swiper-slide`), r = (0, _utilsMinMjs.h)(i[0]);
        return (0, _utilsMinMjs.h)(e) - r;
    }
    getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.filter((t)=>1 * t.getAttribute("data-swiper-slide-index") === e)[0]);
    }
    recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = (0, _utilsMinMjs.e)(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(), r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
        e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
        const t = this;
        return t.destroyed ? "" : e.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s)=>{
            const i = e.getSlideClasses(s);
            t.push({
                slideEl: s,
                classNames: i
            }), e.emit("_slideClass", s, i);
        }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const { params: s, slides: i, slidesGrid: r, slidesSizesGrid: n, size: a, activeIndex: l } = this;
        let o = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
            let e, t = i[l] ? Math.ceil(i[l].swiperSlideSize) : 0;
            for(let s = l + 1; s < i.length; s += 1)i[s] && !e && (t += Math.ceil(i[s].swiperSlideSize), o += 1, t > a && (e = !0));
            for(let s = l - 1; s >= 0; s -= 1)i[s] && !e && (t += i[s].swiperSlideSize, o += 1, t > a && (e = !0));
        } else if ("current" === e) for(let e = l + 1; e < i.length; e += 1)(t ? r[e] + n[e] - r[l] < a : r[e] - r[l] < a) && (o += 1);
        else for(let e = l - 1; e >= 0; e -= 1)r[l] - r[e] < a && (o += 1);
        return o;
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let r;
        if (s.breakpoints && e.setBreakpoint(), [
            ...e.el.querySelectorAll('[loading="lazy"]')
        ].forEach((t)=>{
            t.complete && processLazyPreloader(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();
        else {
            if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                r = e.slideTo(t.length - 1, 0, !1, !0);
            } else r = e.slideTo(e.activeIndex, 0, !1, !0);
            r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this, i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${i}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t)=>{
            "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
    }
    changeLanguageDirection(e) {
        const t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        const i = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let r = (()=>{
            if (s && s.shadowRoot && s.shadowRoot.querySelector) return s.shadowRoot.querySelector(i());
            return (0, _utilsMinMjs.e)(s, i())[0];
        })();
        return !r && t.params.createElements && (r = (0, _utilsMinMjs.c)("div", t.params.wrapperClass), s.append(r), (0, _utilsMinMjs.e)(s, `.${t.params.slideClass}`).forEach((e)=>{
            r.append(e);
        })), Object.assign(t, {
            el: s,
            wrapperEl: r,
            slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
            hostEl: t.isElement ? s.parentNode.host : s,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, _utilsMinMjs.o)(s, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, _utilsMinMjs.o)(s, "direction")),
            wrongRTL: "-webkit-box" === (0, _utilsMinMjs.o)(r, "display")
        }), !0;
    }
    init(e) {
        const t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
        const s = [
            ...t.el.querySelectorAll('[loading="lazy"]')
        ];
        return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e)=>{
            e.complete ? processLazyPreloader(t, e) : e.addEventListener("load", (e)=>{
                processLazyPreloader(t, e.target);
            });
        }), preload(t), t.initialized = !0, preload(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this, { params: i, el: r, wrapperEl: n, slides: a } = s;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach((e)=>{
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
            s.off(e);
        }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), (0, _utilsMinMjs.v)(s)), s.destroyed = !0), null;
    }
    static extendDefaults(e) {
        (0, _utilsMinMjs.u)(extendedDefaults, e);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return defaults;
    }
    static installModule(e) {
        Swiper.prototype.__modules__ || (Swiper.prototype.__modules__ = []);
        const t = Swiper.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach((e)=>Swiper.installModule(e)), Swiper) : (Swiper.installModule(e), Swiper);
    }
}
Object.keys(prototypes).forEach((e)=>{
    Object.keys(prototypes[e]).forEach((t)=>{
        Swiper.prototype[t] = prototypes[e][t];
    });
}), Swiper.use([
    Resize,
    Observer
]);

},{"./ssr-window.esm.min.mjs":"kCr4Q","./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kCr4Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>getWindow);
parcelHelpers.export(exports, "g", ()=>getDocument);
function isObject(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
}
function extend(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((n)=>{
        void 0 === e[n] ? e[n] = t[n] : isObject(t[n]) && isObject(e[n]) && Object.keys(t[n]).length > 0 && extend(e[n], t[n]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ""
    },
    querySelector: ()=>null,
    querySelectorAll: ()=>[],
    getElementById: ()=>null,
    createEvent: ()=>({
            initEvent () {}
        }),
    createElement: ()=>({
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName: ()=>[]
        }),
    createElementNS: ()=>({}),
    importNode: ()=>null,
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function getDocument() {
    const e = "undefined" != typeof document ? document : {};
    return extend(e, ssrDocument), e;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle: ()=>({
            getPropertyValue: ()=>""
        }),
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia: ()=>({}),
    requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame (e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
    }
};
function getWindow() {
    const e = "undefined" != typeof window ? window : {};
    return extend(e, ssrWindow), e;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9Ma1d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>elementParents);
parcelHelpers.export(exports, "b", ()=>elementOffset);
parcelHelpers.export(exports, "c", ()=>createElement);
parcelHelpers.export(exports, "d", ()=>now);
parcelHelpers.export(exports, "e", ()=>elementChildren);
parcelHelpers.export(exports, "f", ()=>elementOuterSize);
parcelHelpers.export(exports, "g", ()=>getSlideTransformEl);
parcelHelpers.export(exports, "h", ()=>elementIndex);
parcelHelpers.export(exports, "i", ()=>classesToTokens);
parcelHelpers.export(exports, "j", ()=>getTranslate);
parcelHelpers.export(exports, "k", ()=>elementTransitionEnd);
parcelHelpers.export(exports, "l", ()=>isObject);
parcelHelpers.export(exports, "m", ()=>makeElementsArray);
parcelHelpers.export(exports, "n", ()=>nextTick);
parcelHelpers.export(exports, "o", ()=>elementStyle);
parcelHelpers.export(exports, "p", ()=>elementNextAll);
parcelHelpers.export(exports, "q", ()=>elementPrevAll);
parcelHelpers.export(exports, "r", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "s", ()=>setCSSProperty);
parcelHelpers.export(exports, "t", ()=>showWarning);
parcelHelpers.export(exports, "u", ()=>extend);
parcelHelpers.export(exports, "v", ()=>deleteProps);
var _ssrWindowEsmMinMjs = require("./ssr-window.esm.min.mjs");
function classesToTokens(e) {
    return void 0 === e && (e = ""), e.trim().split(" ").filter((e)=>!!e.trim());
}
function deleteProps(e) {
    const t = e;
    Object.keys(t).forEach((e)=>{
        try {
            t[e] = null;
        } catch (e) {}
        try {
            delete t[e];
        } catch (e) {}
    });
}
function nextTick(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
}
function now() {
    return Date.now();
}
function getComputedStyle(e) {
    const t = (0, _ssrWindowEsmMinMjs.a)();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function getTranslate(e, t) {
    void 0 === t && (t = "x");
    const n = (0, _ssrWindowEsmMinMjs.a)();
    let r, o, l;
    const s = getComputedStyle(e);
    return n.WebKitCSSMatrix ? (o = s.transform || s.webkitTransform, o.split(",").length > 6 && (o = o.split(", ").map((e)=>e.replace(",", ".")).join(", ")), l = new n.WebKitCSSMatrix("none" === o ? "" : o)) : (l = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = l.toString().split(",")), "x" === t && (o = n.WebKitCSSMatrix ? l.m41 : 16 === r.length ? parseFloat(r[12]) : parseFloat(r[4])), "y" === t && (o = n.WebKitCSSMatrix ? l.m42 : 16 === r.length ? parseFloat(r[13]) : parseFloat(r[5])), o || 0;
}
function isObject(e) {
    return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
}
function isNode(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
}
function extend() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [
        "__proto__",
        "constructor",
        "prototype"
    ];
    for(let n = 1; n < arguments.length; n += 1){
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (null != r && !isNode(r)) {
            const n = Object.keys(Object(r)).filter((e)=>t.indexOf(e) < 0);
            for(let t = 0, o = n.length; t < o; t += 1){
                const o = n[t], l = Object.getOwnPropertyDescriptor(r, o);
                void 0 !== l && l.enumerable && (isObject(e[o]) && isObject(r[o]) ? r[o].__swiper__ ? e[o] = r[o] : extend(e[o], r[o]) : !isObject(e[o]) && isObject(r[o]) ? (e[o] = {}, r[o].__swiper__ ? e[o] = r[o] : extend(e[o], r[o])) : e[o] = r[o]);
            }
        }
    }
    return e;
}
function setCSSProperty(e, t, n) {
    e.style.setProperty(t, n);
}
function animateCSSModeScroll(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const o = (0, _ssrWindowEsmMinMjs.a)(), l = -t.translate;
    let s, i = null;
    const a = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", o.cancelAnimationFrame(t.cssModeFrameID);
    const c = n > l ? "next" : "prev", m = (e, t)=>"next" === c && e >= t || "prev" === c && e <= t, u = ()=>{
        s = (new Date).getTime(), null === i && (i = s);
        const e = Math.max(Math.min((s - i) / a, 1), 0), c = .5 - Math.cos(e * Math.PI) / 2;
        let p = l + c * (n - l);
        if (m(p, n) && (p = n), t.wrapperEl.scrollTo({
            [r]: p
        }), m(p, n)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [r]: p
            });
        }), void o.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = o.requestAnimationFrame(u);
    };
    u();
}
function getSlideTransformEl(e) {
    return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e;
}
function elementChildren(e, t) {
    return void 0 === t && (t = ""), [
        ...e.children
    ].filter((e)=>e.matches(t));
}
function showWarning(e) {
    try {
        return void console.warn(e);
    } catch (e) {}
}
function createElement(e, t) {
    void 0 === t && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...Array.isArray(t) ? t : classesToTokens(t)), n;
}
function elementOffset(e) {
    const t = (0, _ssrWindowEsmMinMjs.a)(), n = (0, _ssrWindowEsmMinMjs.g)(), r = e.getBoundingClientRect(), o = n.body, l = e.clientTop || o.clientTop || 0, s = e.clientLeft || o.clientLeft || 0, i = e === t ? t.scrollY : e.scrollTop, a = e === t ? t.scrollX : e.scrollLeft;
    return {
        top: r.top + i - l,
        left: r.left + a - s
    };
}
function elementPrevAll(e, t) {
    const n = [];
    for(; e.previousElementSibling;){
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), e = r;
    }
    return n;
}
function elementNextAll(e, t) {
    const n = [];
    for(; e.nextElementSibling;){
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), e = r;
    }
    return n;
}
function elementStyle(e, t) {
    return (0, _ssrWindowEsmMinMjs.a)().getComputedStyle(e, null).getPropertyValue(t);
}
function elementIndex(e) {
    let t, n = e;
    if (n) {
        for(t = 0; null !== (n = n.previousSibling);)1 === n.nodeType && (t += 1);
        return t;
    }
}
function elementParents(e, t) {
    const n = [];
    let r = e.parentElement;
    for(; r;)t ? r.matches(t) && n.push(r) : n.push(r), r = r.parentElement;
    return n;
}
function elementTransitionEnd(e, t) {
    t && e.addEventListener("transitionend", function n(r) {
        r.target === e && (t.call(e, r), e.removeEventListener("transitionend", n));
    });
}
function elementOuterSize(e, t, n) {
    const r = (0, _ssrWindowEsmMinMjs.a)();
    return n ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(r.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
function makeElementsArray(e) {
    return (Array.isArray(e) ? e : [
        e
    ]).filter((e)=>!!e);
}

},{"./ssr-window.esm.min.mjs":"kCr4Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gtD4C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Virtual(e) {
    let s, { swiper: t, extendParams: i, on: r, emit: a } = e;
    i({
        virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: !0,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    const l = (0, _ssrWindowEsmMinMjs.g)();
    t.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    const d = l.createElement("div");
    function n(e, s) {
        const i = t.params.virtual;
        if (i.cache && t.virtual.cache[s]) return t.virtual.cache[s];
        let r;
        return i.renderSlide ? (r = i.renderSlide.call(t, e, s), "string" == typeof r && (d.innerHTML = r, r = d.children[0])) : r = t.isElement ? (0, _utilsMinMjs.c)("swiper-slide") : (0, _utilsMinMjs.c)("div", t.params.slideClass), r.setAttribute("data-swiper-slide-index", s), i.renderSlide || (r.innerHTML = e), i.cache && (t.virtual.cache[s] = r), r;
    }
    function c(e, s) {
        const { slidesPerView: i, slidesPerGroup: r, centeredSlides: l, loop: d, initialSlide: c } = t.params;
        if (s && !d && c > 0) return;
        const { addSlidesBefore: o, addSlidesAfter: u } = t.params.virtual, { from: p, to: h, slides: f, slidesGrid: v, offset: m } = t.virtual;
        t.params.cssMode || t.updateActiveIndex();
        const g = t.activeIndex || 0;
        let E, x, w;
        E = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", l ? (x = Math.floor(i / 2) + r + u, w = Math.floor(i / 2) + r + o) : (x = i + (r - 1) + u, w = (d ? i : r) + o);
        let S = g - w, b = g + x;
        d || (S = Math.max(S, 0), b = Math.min(b, f.length - 1));
        let A = (t.slidesGrid[S] || 0) - (t.slidesGrid[0] || 0);
        function M() {
            t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), a("virtualUpdate");
        }
        if (d && g >= w ? (S -= w, l || (A += t.slidesGrid[0])) : d && g < w && (S = -w, l && (A += t.slidesGrid[0])), Object.assign(t.virtual, {
            from: S,
            to: b,
            offset: A,
            slidesGrid: t.slidesGrid,
            slidesBefore: w,
            slidesAfter: x
        }), p === S && h === b && !e) return t.slidesGrid !== v && A !== m && t.slides.forEach((e)=>{
            e.style[E] = A - Math.abs(t.cssOverflowAdjustment()) + "px";
        }), t.updateProgress(), void a("virtualUpdate");
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
            offset: A,
            from: S,
            to: b,
            slides: function() {
                const e = [];
                for(let s = S; s <= b; s += 1)e.push(f[s]);
                return e;
            }()
        }), void (t.params.virtual.renderExternalUpdate ? M() : a("virtualUpdate"));
        const y = [], P = [], j = (e)=>{
            let s = e;
            return e < 0 ? s = f.length + e : s >= f.length && (s -= f.length), s;
        };
        if (e) t.slides.filter((e)=>e.matches(`.${t.params.slideClass}, swiper-slide`)).forEach((e)=>{
            e.remove();
        });
        else for(let e = p; e <= h; e += 1)if (e < S || e > b) {
            const s = j(e);
            t.slides.filter((e)=>e.matches(`.${t.params.slideClass}[data-swiper-slide-index="${s}"], swiper-slide[data-swiper-slide-index="${s}"]`)).forEach((e)=>{
                e.remove();
            });
        }
        const C = d ? -f.length : 0, G = d ? 2 * f.length : f.length;
        for(let s = C; s < G; s += 1)if (s >= S && s <= b) {
            const t = j(s);
            void 0 === h || e ? P.push(t) : (s > h && P.push(t), s < p && y.push(t));
        }
        if (P.forEach((e)=>{
            t.slidesEl.append(n(f[e], e));
        }), d) for(let e = y.length - 1; e >= 0; e -= 1){
            const s = y[e];
            t.slidesEl.prepend(n(f[s], s));
        }
        else y.sort((e, s)=>s - e), y.forEach((e)=>{
            t.slidesEl.prepend(n(f[e], e));
        });
        (0, _utilsMinMjs.e)(t.slidesEl, ".swiper-slide, swiper-slide").forEach((e)=>{
            e.style[E] = A - Math.abs(t.cssOverflowAdjustment()) + "px";
        }), M();
    }
    r("beforeInit", ()=>{
        if (!t.params.virtual.enabled) return;
        let e;
        if (void 0 === t.passedParams.virtual.slides) {
            const s = [
                ...t.slidesEl.children
            ].filter((e)=>e.matches(`.${t.params.slideClass}, swiper-slide`));
            s && s.length && (t.virtual.slides = [
                ...s
            ], e = !0, s.forEach((e, s)=>{
                e.setAttribute("data-swiper-slide-index", s), t.virtual.cache[s] = e, e.remove();
            }));
        }
        e || (t.virtual.slides = t.params.virtual.slides), t.classNames.push(`${t.params.containerModifierClass}virtual`), t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0, c(!1, !0);
    }), r("setTranslate", ()=>{
        t.params.virtual.enabled && (t.params.cssMode && !t._immediateVirtual ? (clearTimeout(s), s = setTimeout(()=>{
            c();
        }, 100)) : c());
    }), r("init update resize", ()=>{
        t.params.virtual.enabled && t.params.cssMode && (0, _utilsMinMjs.s)(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
    }), Object.assign(t.virtual, {
        appendSlide: function(e) {
            if ("object" == typeof e && "length" in e) for(let s = 0; s < e.length; s += 1)e[s] && t.virtual.slides.push(e[s]);
            else t.virtual.slides.push(e);
            c(!0);
        },
        prependSlide: function(e) {
            const s = t.activeIndex;
            let i = s + 1, r = 1;
            if (Array.isArray(e)) {
                for(let s = 0; s < e.length; s += 1)e[s] && t.virtual.slides.unshift(e[s]);
                i = s + e.length, r = e.length;
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache, s = {};
                Object.keys(e).forEach((t)=>{
                    const i = e[t], a = i.getAttribute("data-swiper-slide-index");
                    a && i.setAttribute("data-swiper-slide-index", parseInt(a, 10) + r), s[parseInt(t, 10) + r] = i;
                }), t.virtual.cache = s;
            }
            c(!0), t.slideTo(i, 0);
        },
        removeSlide: function(e) {
            if (null == e) return;
            let s = t.activeIndex;
            if (Array.isArray(e)) for(let i = e.length - 1; i >= 0; i -= 1)t.params.virtual.cache && (delete t.virtual.cache[e[i]], Object.keys(t.virtual.cache).forEach((s)=>{
                s > e && (t.virtual.cache[s - 1] = t.virtual.cache[s], t.virtual.cache[s - 1].setAttribute("data-swiper-slide-index", s - 1), delete t.virtual.cache[s]);
            })), t.virtual.slides.splice(e[i], 1), e[i] < s && (s -= 1), s = Math.max(s, 0);
            else t.params.virtual.cache && (delete t.virtual.cache[e], Object.keys(t.virtual.cache).forEach((s)=>{
                s > e && (t.virtual.cache[s - 1] = t.virtual.cache[s], t.virtual.cache[s - 1].setAttribute("data-swiper-slide-index", s - 1), delete t.virtual.cache[s]);
            })), t.virtual.slides.splice(e, 1), e < s && (s -= 1), s = Math.max(s, 0);
            c(!0), t.slideTo(s, 0);
        },
        removeAllSlides: function() {
            t.virtual.slides = [], t.params.virtual.cache && (t.virtual.cache = {}), c(!0), t.slideTo(0, 0);
        },
        update: c
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g564D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Keyboard(e) {
    let { swiper: t, extendParams: n, on: a, emit: r } = e;
    const l = (0, _ssrWindowEsmMinMjs.g)(), i = (0, _ssrWindowEsmMinMjs.a)();
    function o(e) {
        if (!t.enabled) return;
        const { rtlTranslate: n } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const o = a.keyCode || a.charCode, s = t.params.keyboard.pageUpDown, d = s && 33 === o, f = s && 34 === o, m = 37 === o, b = 39 === o, c = 38 === o, p = 40 === o;
        if (!t.allowSlideNext && (t.isHorizontal() && b || t.isVertical() && p || f)) return !1;
        if (!t.allowSlidePrev && (t.isHorizontal() && m || t.isVertical() && c || d)) return !1;
        if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (d || f || m || b || c || p)) {
                let e = !1;
                if ((0, _utilsMinMjs.a)(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === (0, _utilsMinMjs.a)(t.el, `.${t.params.slideActiveClass}`).length) return;
                const a = t.el, r = a.clientWidth, l = a.clientHeight, o = i.innerWidth, s = i.innerHeight, d = (0, _utilsMinMjs.b)(a);
                n && (d.left -= a.scrollLeft);
                const f = [
                    [
                        d.left,
                        d.top
                    ],
                    [
                        d.left + r,
                        d.top
                    ],
                    [
                        d.left,
                        d.top + l
                    ],
                    [
                        d.left + r,
                        d.top + l
                    ]
                ];
                for(let t = 0; t < f.length; t += 1){
                    const n = f[t];
                    if (n[0] >= 0 && n[0] <= o && n[1] >= 0 && n[1] <= s) {
                        if (0 === n[0] && 0 === n[1]) continue;
                        e = !0;
                    }
                }
                if (!e) return;
            }
            t.isHorizontal() ? ((d || f || m || b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((f || b) && !n || (d || m) && n) && t.slideNext(), ((d || m) && !n || (f || b) && n) && t.slidePrev()) : ((d || f || c || p) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (f || p) && t.slideNext(), (d || c) && t.slidePrev()), r("keyPress", o);
        }
    }
    function s() {
        t.keyboard.enabled || (l.addEventListener("keydown", o), t.keyboard.enabled = !0);
    }
    function d() {
        t.keyboard.enabled && (l.removeEventListener("keydown", o), t.keyboard.enabled = !1);
    }
    t.keyboard = {
        enabled: !1
    }, n({
        keyboard: {
            enabled: !1,
            onlyInViewport: !0,
            pageUpDown: !0
        }
    }), a("init", ()=>{
        t.params.keyboard.enabled && s();
    }), a("destroy", ()=>{
        t.keyboard.enabled && d();
    }), Object.assign(t.keyboard, {
        enable: s,
        disable: d
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a1h1i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Mousewheel(e) {
    let { swiper: t, extendParams: a, on: s, emit: n } = e;
    const l = (0, _ssrWindowEsmMinMjs.a)();
    let i;
    a({
        mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
            noMousewheelClass: "swiper-no-mousewheel"
        }
    }), t.mousewheel = {
        enabled: !1
    };
    let r, o = (0, _utilsMinMjs.d)();
    const d = [];
    function m() {
        t.enabled && (t.mouseEntered = !0);
    }
    function p() {
        t.enabled && (t.mouseEntered = !1);
    }
    function u(e) {
        return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && (0, _utilsMinMjs.d)() - o < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && (0, _utilsMinMjs.d)() - o < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), n("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), n("scroll", e.raw)), o = (new l.Date).getTime(), !1));
    }
    function h(e) {
        let a = e, s = !0;
        if (!t.enabled) return;
        if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
        const l = t.params.mousewheel;
        t.params.cssMode && a.preventDefault();
        let o = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (o = document.querySelector(t.params.mousewheel.eventsTarget));
        const m = o && o.contains(a.target);
        if (!t.mouseEntered && !m && !l.releaseOnEdges) return !0;
        a.originalEvent && (a = a.originalEvent);
        let p = 0;
        const h = t.rtlTranslate ? -1 : 1, c = function(e) {
            let t = 0, a = 0, s = 0, n = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), s = 10 * t, n = 10 * a, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = n, n = 0), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !a && (a = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: s,
                pixelY: n
            };
        }(a);
        if (l.forceToAxis) {
            if (t.isHorizontal()) {
                if (!(Math.abs(c.pixelX) > Math.abs(c.pixelY))) return !0;
                p = -c.pixelX * h;
            } else {
                if (!(Math.abs(c.pixelY) > Math.abs(c.pixelX))) return !0;
                p = -c.pixelY;
            }
        } else p = Math.abs(c.pixelX) > Math.abs(c.pixelY) ? -c.pixelX * h : -c.pixelY;
        if (0 === p) return !0;
        l.invert && (p = -p);
        let w = t.getTranslate() + p * l.sensitivity;
        if (w >= t.minTranslate() && (w = t.minTranslate()), w <= t.maxTranslate() && (w = t.maxTranslate()), s = !!t.params.loop || !(w === t.minTranslate() || w === t.maxTranslate()), s && t.params.nested && a.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
            const e = {
                time: (0, _utilsMinMjs.d)(),
                delta: Math.abs(p),
                direction: Math.sign(p)
            }, s = r && e.time < r.time + 500 && e.delta <= r.delta && e.direction === r.direction;
            if (!s) {
                r = void 0;
                let o = t.getTranslate() + p * l.sensitivity;
                const m = t.isBeginning, u = t.isEnd;
                if (o >= t.minTranslate() && (o = t.minTranslate()), o <= t.maxTranslate() && (o = t.maxTranslate()), t.setTransition(0), t.setTranslate(o), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!m && t.isBeginning || !u && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
                    direction: e.direction < 0 ? "next" : "prev",
                    byMousewheel: !0
                }), t.params.freeMode.sticky) {
                    clearTimeout(i), i = void 0, d.length >= 15 && d.shift();
                    const a = d.length ? d[d.length - 1] : void 0, s = d[0];
                    if (d.push(e), a && (e.delta > a.delta || e.direction !== a.direction)) d.splice(0);
                    else if (d.length >= 15 && e.time - s.time < 500 && s.delta - e.delta >= 1 && e.delta <= 6) {
                        const a = p > 0 ? .8 : .2;
                        r = e, d.splice(0), i = (0, _utilsMinMjs.n)(()=>{
                            t.slideToClosest(t.params.speed, !0, void 0, a);
                        }, 0);
                    }
                    i || (i = (0, _utilsMinMjs.n)(()=>{
                        r = e, d.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5);
                    }, 500));
                }
                if (s || n("scroll", a), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), l.releaseOnEdges && (o === t.minTranslate() || o === t.maxTranslate())) return !0;
            }
        } else {
            const a = {
                time: (0, _utilsMinMjs.d)(),
                delta: Math.abs(p),
                direction: Math.sign(p),
                raw: e
            };
            d.length >= 2 && d.shift();
            const s = d.length ? d[d.length - 1] : void 0;
            if (d.push(a), s ? (a.direction !== s.direction || a.delta > s.delta || a.time > s.time + 150) && u(a) : u(a), function(e) {
                const a = t.params.mousewheel;
                if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;
                return !1;
            }(a)) return !0;
        }
        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
    }
    function c(e) {
        let a = t.el;
        "container" !== t.params.mousewheel.eventsTarget && (a = document.querySelector(t.params.mousewheel.eventsTarget)), a[e]("mouseenter", m), a[e]("mouseleave", p), a[e]("wheel", h);
    }
    function w() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", h), !0) : !t.mousewheel.enabled && (c("addEventListener"), t.mousewheel.enabled = !0, !0);
    }
    function f() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, h), !0) : !!t.mousewheel.enabled && (c("removeEventListener"), t.mousewheel.enabled = !1, !0);
    }
    s("init", ()=>{
        !t.params.mousewheel.enabled && t.params.cssMode && f(), t.params.mousewheel.enabled && w();
    }), s("destroy", ()=>{
        t.params.cssMode && w(), t.mousewheel.enabled && f();
    }), Object.assign(t.mousewheel, {
        enable: w,
        disable: f
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kRi9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Navigation(a) {
    let { swiper: e, extendParams: n, on: i, emit: t } = a;
    function s(a) {
        let n;
        return a && "string" == typeof a && e.isElement && (n = e.el.querySelector(a), n) ? n : (a && ("string" == typeof a && (n = [
            ...document.querySelectorAll(a)
        ]), e.params.uniqueNavElements && "string" == typeof a && n && n.length > 1 && 1 === e.el.querySelectorAll(a).length ? n = e.el.querySelector(a) : n && 1 === n.length && (n = n[0])), a && !n ? a : n);
    }
    function l(a, n) {
        const i = e.params.navigation;
        (a = (0, _utilsMinMjs.m)(a)).forEach((a)=>{
            a && (a.classList[n ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === a.tagName && (a.disabled = n), e.params.watchOverflow && e.enabled && a.classList[e.isLocked ? "add" : "remove"](i.lockClass));
        });
    }
    function r() {
        const { nextEl: a, prevEl: n } = e.navigation;
        if (e.params.loop) return l(n, !1), void l(a, !1);
        l(n, e.isBeginning && !e.params.rewind), l(a, e.isEnd && !e.params.rewind);
    }
    function o(a) {
        a.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), t("navigationPrev"));
    }
    function d(a) {
        a.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), t("navigationNext"));
    }
    function c() {
        const a = e.params.navigation;
        if (e.params.navigation = (0, _createElementIfNotDefinedMinMjs.c)(e, e.originalParams.navigation, e.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        }), !a.nextEl && !a.prevEl) return;
        let n = s(a.nextEl), i = s(a.prevEl);
        Object.assign(e.navigation, {
            nextEl: n,
            prevEl: i
        }), n = (0, _utilsMinMjs.m)(n), i = (0, _utilsMinMjs.m)(i);
        const t = (n, i)=>{
            n && n.addEventListener("click", "next" === i ? d : o), !e.enabled && n && n.classList.add(...a.lockClass.split(" "));
        };
        n.forEach((a)=>t(a, "next")), i.forEach((a)=>t(a, "prev"));
    }
    function m() {
        let { nextEl: a, prevEl: n } = e.navigation;
        a = (0, _utilsMinMjs.m)(a), n = (0, _utilsMinMjs.m)(n);
        const i = (a, n)=>{
            a.removeEventListener("click", "next" === n ? d : o), a.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        a.forEach((a)=>i(a, "next")), n.forEach((a)=>i(a, "prev"));
    }
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    }), e.navigation = {
        nextEl: null,
        prevEl: null
    }, i("init", ()=>{
        !1 === e.params.navigation.enabled ? p() : (c(), r());
    }), i("toEdge fromEdge lock unlock", ()=>{
        r();
    }), i("destroy", ()=>{
        m();
    }), i("enable disable", ()=>{
        let { nextEl: a, prevEl: n } = e.navigation;
        a = (0, _utilsMinMjs.m)(a), n = (0, _utilsMinMjs.m)(n), e.enabled ? r() : [
            ...a,
            ...n
        ].filter((a)=>!!a).forEach((a)=>a.classList.add(e.params.navigation.lockClass));
    }), i("click", (a, n)=>{
        let { nextEl: i, prevEl: s } = e.navigation;
        i = (0, _utilsMinMjs.m)(i), s = (0, _utilsMinMjs.m)(s);
        const l = n.target;
        let r = s.includes(l) || i.includes(l);
        if (e.isElement && !r) {
            const a = n.path || n.composedPath && n.composedPath();
            a && (r = a.find((a)=>i.includes(a) || s.includes(a)));
        }
        if (e.params.navigation.hideOnClick && !r) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l))) return;
            let a;
            i.length ? a = i[0].classList.contains(e.params.navigation.hiddenClass) : s.length && (a = s[0].classList.contains(e.params.navigation.hiddenClass)), t(!0 === a ? "navigationShow" : "navigationHide"), [
                ...i,
                ...s
            ].filter((a)=>!!a).forEach((a)=>a.classList.toggle(e.params.navigation.hiddenClass));
        }
    });
    const p = ()=>{
        e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), m();
    };
    Object.assign(e.navigation, {
        enable: ()=>{
            e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), r();
        },
        disable: p,
        update: r,
        init: c,
        destroy: m
    });
}

},{"../shared/create-element-if-not-defined.min.mjs":"6zDwV","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6zDwV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createElementIfNotDefined);
var _utilsMinMjs = require("./utils.min.mjs");
function createElementIfNotDefined(e, t, n, a) {
    return e.params.createElements && Object.keys(a).forEach((l)=>{
        if (!n[l] && !0 === n.auto) {
            let r = (0, _utilsMinMjs.e)(e.el, `.${a[l]}`)[0];
            r || (r = (0, _utilsMinMjs.c)("div", a[l]), r.className = a[l], e.el.append(r)), n[l] = r, t[l] = r;
        }
    }), n;
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56ScH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Pagination(e) {
    let { swiper: a, extendParams: s, on: l, emit: t } = e;
    const i = "swiper-pagination";
    let n;
    s({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e)=>e,
            formatFractionTotal: (e)=>e,
            bulletClass: `${i}-bullet`,
            bulletActiveClass: `${i}-bullet-active`,
            modifierClass: `${i}-`,
            currentClass: `${i}-current`,
            totalClass: `${i}-total`,
            hiddenClass: `${i}-hidden`,
            progressbarFillClass: `${i}-progressbar-fill`,
            progressbarOppositeClass: `${i}-progressbar-opposite`,
            clickableClass: `${i}-clickable`,
            lockClass: `${i}-lock`,
            horizontalClass: `${i}-horizontal`,
            verticalClass: `${i}-vertical`,
            paginationDisabledClass: `${i}-disabled`
        }
    }), a.pagination = {
        el: null,
        bullets: []
    };
    let r = 0;
    function o() {
        return !a.params.pagination.el || !a.pagination.el || Array.isArray(a.pagination.el) && 0 === a.pagination.el.length;
    }
    function p(e, s) {
        const { bulletActiveClass: l } = a.params.pagination;
        e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${l}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${l}-${s}-${s}`));
    }
    function c(e) {
        const s = e.target.closest((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass));
        if (!s) return;
        e.preventDefault();
        const l = (0, _utilsMinMjs.h)(s) * a.params.slidesPerGroup;
        if (a.params.loop) {
            if (a.realIndex === l) return;
            a.slideToLoop(l);
        } else a.slideTo(l);
    }
    function d() {
        const e = a.rtl, s = a.params.pagination;
        if (o()) return;
        let l, i, c = a.pagination.el;
        c = (0, _utilsMinMjs.m)(c);
        const d = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.slides.length, m = a.params.loop ? Math.ceil(d / a.params.slidesPerGroup) : a.snapGrid.length;
        if (a.params.loop ? (i = a.previousRealIndex || 0, l = a.params.slidesPerGroup > 1 ? Math.floor(a.realIndex / a.params.slidesPerGroup) : a.realIndex) : void 0 !== a.snapIndex ? (l = a.snapIndex, i = a.previousSnapIndex) : (i = a.previousIndex || 0, l = a.activeIndex || 0), "bullets" === s.type && a.pagination.bullets && a.pagination.bullets.length > 0) {
            const t = a.pagination.bullets;
            let o, d, m;
            if (s.dynamicBullets && (n = (0, _utilsMinMjs.f)(t[0], a.isHorizontal() ? "width" : "height", !0), c.forEach((e)=>{
                e.style[a.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px";
            }), s.dynamicMainBullets > 1 && void 0 !== i && (r += l - (i || 0), r > s.dynamicMainBullets - 1 ? r = s.dynamicMainBullets - 1 : r < 0 && (r = 0)), o = Math.max(l - r, 0), d = o + (Math.min(t.length, s.dynamicMainBullets) - 1), m = (d + o) / 2), t.forEach((e)=>{
                const a = [
                    ...[
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((e)=>`${s.bulletActiveClass}${e}`)
                ].map((e)=>"string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                e.classList.remove(...a);
            }), c.length > 1) t.forEach((e)=>{
                const t = (0, _utilsMinMjs.h)(e);
                t === l ? e.classList.add(...s.bulletActiveClass.split(" ")) : a.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (t >= o && t <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), t === o && p(e, "prev"), t === d && p(e, "next"));
            });
            else {
                const e = t[l];
                if (e && e.classList.add(...s.bulletActiveClass.split(" ")), a.isElement && t.forEach((e, a)=>{
                    e.setAttribute("part", a === l ? "bullet-active" : "bullet");
                }), s.dynamicBullets) {
                    const e = t[o], a = t[d];
                    for(let e = o; e <= d; e += 1)t[e] && t[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                    p(e, "prev"), p(a, "next");
                }
            }
            if (s.dynamicBullets) {
                const l = Math.min(t.length, s.dynamicMainBullets + 4), i = (n * l - n) / 2 - m * n, r = e ? "right" : "left";
                t.forEach((e)=>{
                    e.style[a.isHorizontal() ? r : "top"] = `${i}px`;
                });
            }
        }
        c.forEach((e, i)=>{
            if ("fraction" === s.type && (e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.currentClass)).forEach((e)=>{
                e.textContent = s.formatFractionCurrent(l + 1);
            }), e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.totalClass)).forEach((e)=>{
                e.textContent = s.formatFractionTotal(m);
            })), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? a.isHorizontal() ? "vertical" : "horizontal" : a.isHorizontal() ? "horizontal" : "vertical";
                const i = (l + 1) / m;
                let n = 1, r = 1;
                "horizontal" === t ? n = i : r = i, e.querySelectorAll((0, _classesToSelectorMinMjs.c)(s.progressbarFillClass)).forEach((e)=>{
                    e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`, e.style.transitionDuration = `${a.params.speed}ms`;
                });
            }
            "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(a, l + 1, m), 0 === i && t("paginationRender", e)) : (0 === i && t("paginationRender", e), t("paginationUpdate", e)), a.params.watchOverflow && a.enabled && e.classList[a.isLocked ? "add" : "remove"](s.lockClass);
        });
    }
    function m() {
        const e = a.params.pagination;
        if (o()) return;
        const s = a.virtual && a.params.virtual.enabled ? a.virtual.slides.length : a.grid && a.params.grid.rows > 1 ? a.slides.length / Math.ceil(a.params.grid.rows) : a.slides.length;
        let l = a.pagination.el;
        l = (0, _utilsMinMjs.m)(l);
        let i = "";
        if ("bullets" === e.type) {
            let l = a.params.loop ? Math.ceil(s / a.params.slidesPerGroup) : a.snapGrid.length;
            a.params.freeMode && a.params.freeMode.enabled && l > s && (l = s);
            for(let s = 0; s < l; s += 1)e.renderBullet ? i += e.renderBullet.call(a, s, e.bulletClass) : i += `<${e.bulletElement} ${a.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`;
        }
        "fraction" === e.type && (i = e.renderFraction ? e.renderFraction.call(a, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (i = e.renderProgressbar ? e.renderProgressbar.call(a, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.pagination.bullets = [], l.forEach((s)=>{
            "custom" !== e.type && (s.innerHTML = i || ""), "bullets" === e.type && a.pagination.bullets.push(...s.querySelectorAll((0, _classesToSelectorMinMjs.c)(e.bulletClass)));
        }), "custom" !== e.type && t("paginationRender", l[0]);
    }
    function u() {
        a.params.pagination = (0, _createElementIfNotDefinedMinMjs.c)(a, a.originalParams.pagination, a.params.pagination, {
            el: "swiper-pagination"
        });
        const e = a.params.pagination;
        if (!e.el) return;
        let s;
        "string" == typeof e.el && a.isElement && (s = a.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [
            ...document.querySelectorAll(e.el)
        ]), s || (s = e.el), s && 0 !== s.length && (a.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [
            ...a.el.querySelectorAll(e.el)
        ], s.length > 1 && (s = s.filter((e)=>(0, _utilsMinMjs.a)(e, ".swiper")[0] === a.el)[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(a.pagination, {
            el: s
        }), s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), r = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", c), a.enabled || s.classList.add(e.lockClass);
        }));
    }
    function g() {
        const e = a.params.pagination;
        if (o()) return;
        let s = a.pagination.el;
        s && (s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(a.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", c));
        })), a.pagination.bullets && a.pagination.bullets.forEach((a)=>a.classList.remove(...e.bulletActiveClass.split(" ")));
    }
    l("changeDirection", ()=>{
        if (!a.pagination || !a.pagination.el) return;
        const e = a.params.pagination;
        let { el: s } = a.pagination;
        s = (0, _utilsMinMjs.m)(s), s.forEach((s)=>{
            s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(a.isHorizontal() ? e.horizontalClass : e.verticalClass);
        });
    }), l("init", ()=>{
        !1 === a.params.pagination.enabled ? b() : (u(), m(), d());
    }), l("activeIndexChange", ()=>{
        void 0 === a.snapIndex && d();
    }), l("snapIndexChange", ()=>{
        d();
    }), l("snapGridLengthChange", ()=>{
        m(), d();
    }), l("destroy", ()=>{
        g();
    }), l("enable disable", ()=>{
        let { el: e } = a.pagination;
        e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList[a.enabled ? "remove" : "add"](a.params.pagination.lockClass)));
    }), l("lock unlock", ()=>{
        d();
    }), l("click", (e, s)=>{
        const l = s.target, i = (0, _utilsMinMjs.m)(a.pagination.el);
        if (a.params.pagination.el && a.params.pagination.hideOnClick && i && i.length > 0 && !l.classList.contains(a.params.pagination.bulletClass)) {
            if (a.navigation && (a.navigation.nextEl && l === a.navigation.nextEl || a.navigation.prevEl && l === a.navigation.prevEl)) return;
            const e = i[0].classList.contains(a.params.pagination.hiddenClass);
            t(!0 === e ? "paginationShow" : "paginationHide"), i.forEach((e)=>e.classList.toggle(a.params.pagination.hiddenClass));
        }
    });
    const b = ()=>{
        a.el.classList.add(a.params.pagination.paginationDisabledClass);
        let { el: e } = a.pagination;
        e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList.add(a.params.pagination.paginationDisabledClass))), g();
    };
    Object.assign(a.pagination, {
        enable: ()=>{
            a.el.classList.remove(a.params.pagination.paginationDisabledClass);
            let { el: e } = a.pagination;
            e && (e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>e.classList.remove(a.params.pagination.paginationDisabledClass))), u(), m(), d();
        },
        disable: b,
        render: m,
        update: d,
        init: u,
        destroy: g
    });
}

},{"../shared/classes-to-selector.min.mjs":"a0Ggo","../shared/create-element-if-not-defined.min.mjs":"6zDwV","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0Ggo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>classesToSelector);
function classesToSelector(e) {
    return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hsCU0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
var _createElementIfNotDefinedMinMjs = require("../shared/create-element-if-not-defined.min.mjs");
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
function Scrollbar(s) {
    let { swiper: l, extendParams: e, on: a, emit: r } = s;
    const t = (0, _ssrWindowEsmMinMjs.g)();
    let o, n, i, c, p = !1, m = null, d = null;
    function b() {
        if (!l.params.scrollbar.el || !l.scrollbar.el) return;
        const { scrollbar: s, rtlTranslate: e } = l, { dragEl: a, el: r } = s, t = l.params.scrollbar, o = l.params.loop ? l.progressLoop : l.progress;
        let c = n, p = (i - n) * o;
        e ? (p = -p, p > 0 ? (c = n - p, p = 0) : -p + n > i && (c = i + p)) : p < 0 ? (c = n + p, p = 0) : p + n > i && (c = i - p), l.isHorizontal() ? (a.style.transform = `translate3d(${p}px, 0, 0)`, a.style.width = `${c}px`) : (a.style.transform = `translate3d(0px, ${p}px, 0)`, a.style.height = `${c}px`), t.hide && (clearTimeout(m), r.style.opacity = 1, m = setTimeout(()=>{
            r.style.opacity = 0, r.style.transitionDuration = "400ms";
        }, 1e3));
    }
    function u() {
        if (!l.params.scrollbar.el || !l.scrollbar.el) return;
        const { scrollbar: s } = l, { dragEl: e, el: a } = s;
        e.style.width = "", e.style.height = "", i = l.isHorizontal() ? a.offsetWidth : a.offsetHeight, c = l.size / (l.virtualSize + l.params.slidesOffsetBefore - (l.params.centeredSlides ? l.snapGrid[0] : 0)), n = "auto" === l.params.scrollbar.dragSize ? i * c : parseInt(l.params.scrollbar.dragSize, 10), l.isHorizontal() ? e.style.width = `${n}px` : e.style.height = `${n}px`, a.style.display = c >= 1 ? "none" : "", l.params.scrollbar.hide && (a.style.opacity = 0), l.params.watchOverflow && l.enabled && s.el.classList[l.isLocked ? "add" : "remove"](l.params.scrollbar.lockClass);
    }
    function f(s) {
        return l.isHorizontal() ? s.clientX : s.clientY;
    }
    function g(s) {
        const { scrollbar: e, rtlTranslate: a } = l, { el: r } = e;
        let t;
        t = (f(s) - (0, _utilsMinMjs.b)(r)[l.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (i - n), t = Math.max(Math.min(t, 1), 0), a && (t = 1 - t);
        const c = l.minTranslate() + (l.maxTranslate() - l.minTranslate()) * t;
        l.updateProgress(c), l.setTranslate(c), l.updateActiveIndex(), l.updateSlidesClasses();
    }
    function y(s) {
        const e = l.params.scrollbar, { scrollbar: a, wrapperEl: t } = l, { el: n, dragEl: i } = a;
        p = !0, o = s.target === i ? f(s) - s.target.getBoundingClientRect()[l.isHorizontal() ? "left" : "top"] : null, s.preventDefault(), s.stopPropagation(), t.style.transitionDuration = "100ms", i.style.transitionDuration = "100ms", g(s), clearTimeout(d), n.style.transitionDuration = "0ms", e.hide && (n.style.opacity = 1), l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", s);
    }
    function h(s) {
        const { scrollbar: e, wrapperEl: a } = l, { el: t, dragEl: o } = e;
        p && (s.preventDefault && s.cancelable ? s.preventDefault() : s.returnValue = !1, g(s), a.style.transitionDuration = "0ms", t.style.transitionDuration = "0ms", o.style.transitionDuration = "0ms", r("scrollbarDragMove", s));
    }
    function T(s) {
        const e = l.params.scrollbar, { scrollbar: a, wrapperEl: t } = l, { el: o } = a;
        p && (p = !1, l.params.cssMode && (l.wrapperEl.style["scroll-snap-type"] = "", t.style.transitionDuration = ""), e.hide && (clearTimeout(d), d = (0, _utilsMinMjs.n)(()=>{
            o.style.opacity = 0, o.style.transitionDuration = "400ms";
        }, 1e3)), r("scrollbarDragEnd", s), e.snapOnRelease && l.slideToClosest());
    }
    function v(s) {
        const { scrollbar: e, params: a } = l, r = e.el;
        if (!r) return;
        const o = r, n = !!a.passiveListeners && {
            passive: !1,
            capture: !1
        }, i = !!a.passiveListeners && {
            passive: !0,
            capture: !1
        };
        if (!o) return;
        const c = "on" === s ? "addEventListener" : "removeEventListener";
        o[c]("pointerdown", y, n), t[c]("pointermove", h, n), t[c]("pointerup", T, i);
    }
    function D() {
        const { scrollbar: s, el: e } = l;
        l.params.scrollbar = (0, _createElementIfNotDefinedMinMjs.c)(l, l.originalParams.scrollbar, l.params.scrollbar, {
            el: "swiper-scrollbar"
        });
        const a = l.params.scrollbar;
        if (!a.el) return;
        let r, o;
        if ("string" == typeof a.el && l.isElement && (r = l.el.querySelector(a.el)), r || "string" != typeof a.el) r || (r = a.el);
        else if (r = t.querySelectorAll(a.el), !r.length) return;
        l.params.uniqueNavElements && "string" == typeof a.el && r.length > 1 && 1 === e.querySelectorAll(a.el).length && (r = e.querySelector(a.el)), r.length > 0 && (r = r[0]), r.classList.add(l.isHorizontal() ? a.horizontalClass : a.verticalClass), r && (o = r.querySelector((0, _classesToSelectorMinMjs.c)(l.params.scrollbar.dragClass)), o || (o = (0, _utilsMinMjs.c)("div", l.params.scrollbar.dragClass), r.append(o))), Object.assign(s, {
            el: r,
            dragEl: o
        }), a.draggable && l.params.scrollbar.el && l.scrollbar.el && v("on"), r && r.classList[l.enabled ? "remove" : "add"](...(0, _utilsMinMjs.i)(l.params.scrollbar.lockClass));
    }
    function C() {
        const s = l.params.scrollbar, e = l.scrollbar.el;
        e && e.classList.remove(...(0, _utilsMinMjs.i)(l.isHorizontal() ? s.horizontalClass : s.verticalClass)), l.params.scrollbar.el && l.scrollbar.el && v("off");
    }
    e({
        scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
            scrollbarDisabledClass: "swiper-scrollbar-disabled",
            horizontalClass: "swiper-scrollbar-horizontal",
            verticalClass: "swiper-scrollbar-vertical"
        }
    }), l.scrollbar = {
        el: null,
        dragEl: null
    }, a("changeDirection", ()=>{
        if (!l.scrollbar || !l.scrollbar.el) return;
        const s = l.params.scrollbar;
        let { el: e } = l.scrollbar;
        e = (0, _utilsMinMjs.m)(e), e.forEach((e)=>{
            e.classList.remove(s.horizontalClass, s.verticalClass), e.classList.add(l.isHorizontal() ? s.horizontalClass : s.verticalClass);
        });
    }), a("init", ()=>{
        !1 === l.params.scrollbar.enabled ? E() : (D(), u(), b());
    }), a("update resize observerUpdate lock unlock changeDirection", ()=>{
        u();
    }), a("setTranslate", ()=>{
        b();
    }), a("setTransition", (s, e)=>{
        !function(s) {
            l.params.scrollbar.el && l.scrollbar.el && (l.scrollbar.dragEl.style.transitionDuration = `${s}ms`);
        }(e);
    }), a("enable disable", ()=>{
        const { el: s } = l.scrollbar;
        s && s.classList[l.enabled ? "remove" : "add"](...(0, _utilsMinMjs.i)(l.params.scrollbar.lockClass));
    }), a("destroy", ()=>{
        C();
    });
    const E = ()=>{
        l.el.classList.add(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.add(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), C();
    };
    Object.assign(l.scrollbar, {
        enable: ()=>{
            l.el.classList.remove(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), l.scrollbar.el && l.scrollbar.el.classList.remove(...(0, _utilsMinMjs.i)(l.params.scrollbar.scrollbarDisabledClass)), D(), u(), b();
        },
        disable: E,
        updateSize: u,
        setTranslate: b,
        init: D,
        destroy: C
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","../shared/create-element-if-not-defined.min.mjs":"6zDwV","../shared/classes-to-selector.min.mjs":"a0Ggo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26fXf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Parallax(a) {
    let { swiper: e, extendParams: t, on: l } = a;
    t({
        parallax: {
            enabled: !1
        }
    });
    const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", s = (a, t)=>{
        const { rtl: l } = e, r = l ? -1 : 1, s = a.getAttribute("data-swiper-parallax") || "0";
        let i = a.getAttribute("data-swiper-parallax-x"), p = a.getAttribute("data-swiper-parallax-y");
        const n = a.getAttribute("data-swiper-parallax-scale"), o = a.getAttribute("data-swiper-parallax-opacity"), d = a.getAttribute("data-swiper-parallax-rotate");
        if (i || p ? (i = i || "0", p = p || "0") : e.isHorizontal() ? (i = s, p = "0") : (p = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * r + "%" : i * t * r + "px", p = p.indexOf("%") >= 0 ? parseInt(p, 10) * t + "%" : p * t + "px", null != o) {
            const e = o - (o - 1) * (1 - Math.abs(t));
            a.style.opacity = e;
        }
        let x = `translate3d(${i}, ${p}, 0px)`;
        if (null != n) x += ` scale(${n - (n - 1) * (1 - Math.abs(t))})`;
        if (d && null != d) x += ` rotate(${d * t * -1}deg)`;
        a.style.transform = x;
    }, i = ()=>{
        const { el: a, slides: t, progress: l, snapGrid: i, isElement: p } = e, n = (0, _utilsMinMjs.e)(a, r);
        e.isElement && n.push(...(0, _utilsMinMjs.e)(e.hostEl, r)), n.forEach((a)=>{
            s(a, l);
        }), t.forEach((a, t)=>{
            let p = a.progress;
            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (p += Math.ceil(t / 2) - l * (i.length - 1)), p = Math.min(Math.max(p, -1), 1), a.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((a)=>{
                s(a, p);
            });
        });
    };
    l("beforeInit", ()=>{
        e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    }), l("init", ()=>{
        e.params.parallax.enabled && i();
    }), l("setTranslate", ()=>{
        e.params.parallax.enabled && i();
    }), l("setTransition", (a, t)=>{
        e.params.parallax.enabled && function(a) {
            void 0 === a && (a = e.params.speed);
            const { el: t, hostEl: l } = e, s = [
                ...t.querySelectorAll(r)
            ];
            e.isElement && s.push(...l.querySelectorAll(r)), s.forEach((e)=>{
                let t = parseInt(e.getAttribute("data-swiper-parallax-duration"), 10) || a;
                0 === a && (t = 0), e.style.transitionDuration = `${t}ms`;
            });
        }(t);
    });
}

},{"../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1OJfQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Zoom(e) {
    let { swiper: t, extendParams: i, on: a, emit: r } = e;
    const s = (0, _ssrWindowEsmMinMjs.a)();
    i({
        zoom: {
            enabled: !1,
            limitToOriginalSize: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
        }
    }), t.zoom = {
        enabled: !1
    };
    let o, n, l = 1, m = !1;
    const c = [], d = {
        originX: 0,
        originY: 0,
        slideEl: void 0,
        slideWidth: void 0,
        slideHeight: void 0,
        imageEl: void 0,
        imageWrapEl: void 0,
        maxRatio: 3
    }, u = {
        isTouched: void 0,
        isMoved: void 0,
        currentX: void 0,
        currentY: void 0,
        minX: void 0,
        minY: void 0,
        maxX: void 0,
        maxY: void 0,
        width: void 0,
        height: void 0,
        startX: void 0,
        startY: void 0,
        touchesStart: {},
        touchesCurrent: {}
    }, p = {
        x: void 0,
        y: void 0,
        prevPositionX: void 0,
        prevPositionY: void 0,
        prevTime: void 0
    };
    let g, h = 1;
    function E() {
        if (c.length < 2) return 1;
        const e = c[0].pageX, t = c[0].pageY, i = c[1].pageX, a = c[1].pageY;
        return Math.sqrt((i - e) ** 2 + (a - t) ** 2);
    }
    function v() {
        const e = t.params.zoom, i = d.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
        if (e.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
            const e = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
            return Math.min(e, i);
        }
        return i;
    }
    function f(e) {
        const i = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
        return !!e.target.matches(i) || t.slides.filter((t)=>t.contains(e.target)).length > 0;
    }
    function x(e) {
        if ("mouse" === e.pointerType && c.splice(0, c.length), !f(e)) return;
        const i = t.params.zoom;
        if (o = !1, n = !1, c.push(e), !(c.length < 2)) {
            if (o = !0, d.scaleStart = E(), !d.slideEl) {
                d.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), d.slideEl || (d.slideEl = t.slides[t.activeIndex]);
                let a = d.slideEl.querySelector(`.${i.containerClass}`);
                if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = a, d.imageWrapEl = a ? (0, _utilsMinMjs.a)(d.imageEl, `.${i.containerClass}`)[0] : void 0, !d.imageWrapEl) return void (d.imageEl = void 0);
                d.maxRatio = v();
            }
            if (d.imageEl) {
                const [e, t] = function() {
                    if (c.length < 2) return {
                        x: null,
                        y: null
                    };
                    const e = d.imageEl.getBoundingClientRect();
                    return [
                        (c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - e.x - s.scrollX) / l,
                        (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - e.y - s.scrollY) / l
                    ];
                }();
                d.originX = e, d.originY = t, d.imageEl.style.transitionDuration = "0ms";
            }
            m = !0;
        }
    }
    function X(e) {
        if (!f(e)) return;
        const i = t.params.zoom, a = t.zoom, r = c.findIndex((t)=>t.pointerId === e.pointerId);
        r >= 0 && (c[r] = e), c.length < 2 || (n = !0, d.scaleMove = E(), d.imageEl && (a.scale = d.scaleMove / d.scaleStart * l, a.scale > d.maxRatio && (a.scale = d.maxRatio - 1 + (a.scale - d.maxRatio + 1) ** .5), a.scale < i.minRatio && (a.scale = i.minRatio + 1 - (i.minRatio - a.scale + 1) ** .5), d.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`));
    }
    function Y(e) {
        if (!f(e)) return;
        if ("mouse" === e.pointerType && "pointerout" === e.type) return;
        const i = t.params.zoom, a = t.zoom, r = c.findIndex((t)=>t.pointerId === e.pointerId);
        r >= 0 && c.splice(r, 1), o && n && (o = !1, n = !1, d.imageEl && (a.scale = Math.max(Math.min(a.scale, d.maxRatio), i.minRatio), d.imageEl.style.transitionDuration = `${t.params.speed}ms`, d.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, l = a.scale, m = !1, a.scale > 1 && d.slideEl ? d.slideEl.classList.add(`${i.zoomedSlideClass}`) : a.scale <= 1 && d.slideEl && d.slideEl.classList.remove(`${i.zoomedSlideClass}`), 1 === a.scale && (d.originX = 0, d.originY = 0, d.slideEl = void 0)));
    }
    function y() {
        t.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function z(e) {
        if (!f(e) || !function(e) {
            const i = `.${t.params.zoom.containerClass}`;
            return !!e.target.matches(i) || [
                ...t.hostEl.querySelectorAll(i)
            ].filter((t)=>t.contains(e.target)).length > 0;
        }(e)) return;
        const i = t.zoom;
        if (!d.imageEl) return;
        if (!u.isTouched || !d.slideEl) return;
        u.isMoved || (u.width = d.imageEl.offsetWidth || d.imageEl.clientWidth, u.height = d.imageEl.offsetHeight || d.imageEl.clientHeight, u.startX = (0, _utilsMinMjs.j)(d.imageWrapEl, "x") || 0, u.startY = (0, _utilsMinMjs.j)(d.imageWrapEl, "y") || 0, d.slideWidth = d.slideEl.offsetWidth, d.slideHeight = d.slideEl.offsetHeight, d.imageWrapEl.style.transitionDuration = "0ms");
        const a = u.width * i.scale, r = u.height * i.scale;
        u.minX = Math.min(d.slideWidth / 2 - a / 2, 0), u.maxX = -u.minX, u.minY = Math.min(d.slideHeight / 2 - r / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = c.length > 0 ? c[0].pageX : e.pageX, u.touchesCurrent.y = c.length > 0 ? c[0].pageY : e.pageY;
        if (Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (t.allowClick = !1), !u.isMoved && !m) {
            if (t.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) return u.isTouched = !1, void y();
            if (!t.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) return u.isTouched = !1, void y();
        }
        e.cancelable && e.preventDefault(), e.stopPropagation(), clearTimeout(g), t.touchEventsData.preventTouchMoveFromPointerMove = !0, g = setTimeout(()=>{
            y();
        }), u.isMoved = !0;
        const s = (i.scale - l) / (d.maxRatio - t.params.zoom.minRatio), { originX: o, originY: n } = d;
        u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + s * (u.width - 2 * o), u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + s * (u.height - 2 * n), u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** .8), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** .8), u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** .8), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** .8), p.prevPositionX || (p.prevPositionX = u.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = u.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (u.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (u.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(u.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(u.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = u.touchesCurrent.x, p.prevPositionY = u.touchesCurrent.y, p.prevTime = Date.now(), d.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
    }
    function C() {
        const e = t.zoom;
        d.slideEl && t.activeIndex !== t.slides.indexOf(d.slideEl) && (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"), d.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, l = 1, d.slideEl = void 0, d.imageEl = void 0, d.imageWrapEl = void 0, d.originX = 0, d.originY = 0);
    }
    function M(e) {
        const i = t.zoom, a = t.params.zoom;
        if (!d.slideEl) {
            e && e.target && (d.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), d.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? d.slideEl = (0, _utilsMinMjs.e)(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : d.slideEl = t.slides[t.activeIndex]);
            let i = d.slideEl.querySelector(`.${a.containerClass}`);
            i && (i = i.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = i, d.imageWrapEl = i ? (0, _utilsMinMjs.a)(d.imageEl, `.${a.containerClass}`)[0] : void 0;
        }
        if (!d.imageEl || !d.imageWrapEl) return;
        let r, o, n, m, c, p, g, h, E, f, x, X, Y, y, z, C, M, w;
        t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), d.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === u.touchesStart.x && e ? (r = e.pageX, o = e.pageY) : (r = u.touchesStart.x, o = u.touchesStart.y);
        const W = "number" == typeof e ? e : null;
        1 === l && W && (r = void 0, o = void 0);
        const b = v();
        i.scale = W || b, l = W || b, !e || 1 === l && W ? (g = 0, h = 0) : (M = d.slideEl.offsetWidth, w = d.slideEl.offsetHeight, n = (0, _utilsMinMjs.b)(d.slideEl).left + s.scrollX, m = (0, _utilsMinMjs.b)(d.slideEl).top + s.scrollY, c = n + M / 2 - r, p = m + w / 2 - o, E = d.imageEl.offsetWidth || d.imageEl.clientWidth, f = d.imageEl.offsetHeight || d.imageEl.clientHeight, x = E * i.scale, X = f * i.scale, Y = Math.min(M / 2 - x / 2, 0), y = Math.min(w / 2 - X / 2, 0), z = -Y, C = -y, g = c * i.scale, h = p * i.scale, g < Y && (g = Y), g > z && (g = z), h < y && (h = y), h > C && (h = C)), W && 1 === i.scale && (d.originX = 0, d.originY = 0), d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = `translate3d(${g}px, ${h}px,0)`, d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`;
    }
    function w() {
        const e = t.zoom, i = t.params.zoom;
        if (!d.slideEl) {
            t.params.virtual && t.params.virtual.enabled && t.virtual ? d.slideEl = (0, _utilsMinMjs.e)(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : d.slideEl = t.slides[t.activeIndex];
            let e = d.slideEl.querySelector(`.${i.containerClass}`);
            e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), d.imageEl = e, d.imageWrapEl = e ? (0, _utilsMinMjs.a)(d.imageEl, `.${i.containerClass}`)[0] : void 0;
        }
        d.imageEl && d.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, l = 1, d.imageWrapEl.style.transitionDuration = "300ms", d.imageWrapEl.style.transform = "translate3d(0,0,0)", d.imageEl.style.transitionDuration = "300ms", d.imageEl.style.transform = "translate3d(0,0,0) scale(1)", d.slideEl.classList.remove(`${i.zoomedSlideClass}`), d.slideEl = void 0, d.originX = 0, d.originY = 0);
    }
    function W(e) {
        const i = t.zoom;
        i.scale && 1 !== i.scale ? w() : M(e);
    }
    function b() {
        return {
            passiveListener: !!t.params.passiveListeners && {
                passive: !0,
                capture: !1
            },
            activeListenerWithCapture: !t.params.passiveListeners || {
                passive: !1,
                capture: !0
            }
        };
    }
    function S() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const { passiveListener: i, activeListenerWithCapture: a } = b();
        t.wrapperEl.addEventListener("pointerdown", x, i), t.wrapperEl.addEventListener("pointermove", X, a), [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((e)=>{
            t.wrapperEl.addEventListener(e, Y, i);
        }), t.wrapperEl.addEventListener("pointermove", z, a);
    }
    function $() {
        const e = t.zoom;
        if (!e.enabled) return;
        e.enabled = !1;
        const { passiveListener: i, activeListenerWithCapture: a } = b();
        t.wrapperEl.removeEventListener("pointerdown", x, i), t.wrapperEl.removeEventListener("pointermove", X, a), [
            "pointerup",
            "pointercancel",
            "pointerout"
        ].forEach((e)=>{
            t.wrapperEl.removeEventListener(e, Y, i);
        }), t.wrapperEl.removeEventListener("pointermove", z, a);
    }
    Object.defineProperty(t.zoom, "scale", {
        get: ()=>h,
        set (e) {
            if (h !== e) {
                const t = d.imageEl, i = d.slideEl;
                r("zoomChange", e, t, i);
            }
            h = e;
        }
    }), a("init", ()=>{
        t.params.zoom.enabled && S();
    }), a("destroy", ()=>{
        $();
    }), a("touchStart", (e, i)=>{
        t.zoom.enabled && function(e) {
            const i = t.device;
            if (!d.imageEl) return;
            if (u.isTouched) return;
            i.android && e.cancelable && e.preventDefault(), u.isTouched = !0;
            const a = c.length > 0 ? c[0] : e;
            u.touchesStart.x = a.pageX, u.touchesStart.y = a.pageY;
        }(i);
    }), a("touchEnd", (e, i)=>{
        t.zoom.enabled && function() {
            const e = t.zoom;
            if (!d.imageEl) return;
            if (!u.isTouched || !u.isMoved) return u.isTouched = !1, void (u.isMoved = !1);
            u.isTouched = !1, u.isMoved = !1;
            let i = 300, a = 300;
            const r = p.x * i, s = u.currentX + r, o = p.y * a, n = u.currentY + o;
            0 !== p.x && (i = Math.abs((s - u.currentX) / p.x)), 0 !== p.y && (a = Math.abs((n - u.currentY) / p.y));
            const l = Math.max(i, a);
            u.currentX = s, u.currentY = n;
            const m = u.width * e.scale, c = u.height * e.scale;
            u.minX = Math.min(d.slideWidth / 2 - m / 2, 0), u.maxX = -u.minX, u.minY = Math.min(d.slideHeight / 2 - c / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), d.imageWrapEl.style.transitionDuration = `${l}ms`, d.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
        }();
    }), a("doubleTap", (e, i)=>{
        !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && W(i);
    }), a("transitionEnd", ()=>{
        t.zoom.enabled && t.params.zoom.enabled && C();
    }), a("slideChange", ()=>{
        t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
    }), Object.assign(t.zoom, {
        enable: S,
        disable: $,
        in: M,
        out: w,
        toggle: W
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDERx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Controller(t) {
    let { swiper: e, extendParams: n, on: r } = t;
    function o(t, e) {
        const n = function() {
            let t, e, n;
            return (r, o)=>{
                for(e = -1, t = r.length; t - e > 1;)n = t + e >> 1, r[n] <= o ? e = n : t = n;
                return t;
            };
        }();
        let r, o;
        return this.x = t, this.y = e, this.lastIndex = t.length - 1, this.interpolate = function(t) {
            return t ? (o = n(this.x, t), r = o - 1, (t - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0;
        }, this;
    }
    function l() {
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    }
    n({
        controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
        }
    }), e.controller = {
        control: void 0
    }, r("beforeInit", ()=>{
        if ("undefined" != typeof window && ("string" == typeof e.params.controller.control || e.params.controller.control instanceof HTMLElement)) {
            const t = document.querySelector(e.params.controller.control);
            if (t && t.swiper) e.controller.control = t.swiper;
            else if (t) {
                const n = (r)=>{
                    e.controller.control = r.detail[0], e.update(), t.removeEventListener("init", n);
                };
                t.addEventListener("init", n);
            }
        } else e.controller.control = e.params.controller.control;
    }), r("update", ()=>{
        l();
    }), r("resize", ()=>{
        l();
    }), r("observerUpdate", ()=>{
        l();
    }), r("setTranslate", (t, n, r)=>{
        e.controller.control && !e.controller.control.destroyed && e.controller.setTranslate(n, r);
    }), r("setTransition", (t, n, r)=>{
        e.controller.control && !e.controller.control.destroyed && e.controller.setTransition(n, r);
    }), Object.assign(e.controller, {
        setTranslate: function(t, n) {
            const r = e.controller.control;
            let l, s;
            const i = e.constructor;
            function a(t) {
                if (t.destroyed) return;
                const n = e.rtlTranslate ? -e.translate : e.translate;
                "slide" === e.params.controller.by && (!function(t) {
                    e.controller.spline = e.params.loop ? new o(e.slidesGrid, t.slidesGrid) : new o(e.snapGrid, t.snapGrid);
                }(t), s = -e.controller.spline.interpolate(-n)), s && "container" !== e.params.controller.by || (l = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), !Number.isNaN(l) && Number.isFinite(l) || (l = 1), s = (n - e.minTranslate()) * l + t.minTranslate()), e.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, e), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            if (Array.isArray(r)) for(let t = 0; t < r.length; t += 1)r[t] !== n && r[t] instanceof i && a(r[t]);
            else r instanceof i && n !== r && a(r);
        },
        setTransition: function(t, n) {
            const r = e.constructor, o = e.controller.control;
            let l;
            function s(n) {
                n.destroyed || (n.setTransition(t, e), 0 !== t && (n.transitionStart(), n.params.autoHeight && (0, _utilsMinMjs.n)(()=>{
                    n.updateAutoHeight();
                }), (0, _utilsMinMjs.k)(n.wrapperEl, ()=>{
                    o && n.transitionEnd();
                })));
            }
            if (Array.isArray(o)) for(l = 0; l < o.length; l += 1)o[l] !== n && o[l] instanceof r && s(o[l]);
            else o instanceof r && n !== o && s(o);
        }
    });
}

},{"../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Xwor":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _classesToSelectorMinMjs = require("../shared/classes-to-selector.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function A11y(e) {
    let { swiper: a, extendParams: t, on: i } = e;
    t({
        a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            slideLabelMessage: "{{index}} / {{slidesLength}}",
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: "group",
            id: null
        }
    }), a.a11y = {
        clicked: !1
    };
    let n, s, r = null, l = (new Date).getTime();
    function o(e) {
        const a = r;
        0 !== a.length && (a.innerHTML = "", a.innerHTML = e);
    }
    function c(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("tabIndex", "0");
        });
    }
    function d(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("tabIndex", "-1");
        });
    }
    function m(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("role", a);
        });
    }
    function p(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-roledescription", a);
        });
    }
    function g(e, a) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-label", a);
        });
    }
    function u(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-disabled", !0);
        });
    }
    function E(e) {
        (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
            e.setAttribute("aria-disabled", !1);
        });
    }
    function f(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const t = a.params.a11y, i = e.target;
        if (!a.pagination || !a.pagination.el || i !== a.pagination.el && !a.pagination.el.contains(e.target) || e.target.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass))) {
            if (a.navigation && a.navigation.prevEl && a.navigation.nextEl) {
                const e = (0, _utilsMinMjs.m)(a.navigation.prevEl);
                (0, _utilsMinMjs.m)(a.navigation.nextEl).includes(i) && (a.isEnd && !a.params.loop || a.slideNext(), a.isEnd ? o(t.lastSlideMessage) : o(t.nextSlideMessage)), e.includes(i) && (a.isBeginning && !a.params.loop || a.slidePrev(), a.isBeginning ? o(t.firstSlideMessage) : o(t.prevSlideMessage));
            }
            a.pagination && i.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletClass)) && i.click();
        }
    }
    function v() {
        return a.pagination && a.pagination.bullets && a.pagination.bullets.length;
    }
    function y() {
        return v() && a.params.pagination.clickable;
    }
    const b = (e, a, t)=>{
        c(e), "BUTTON" !== e.tagName && (m(e, "button"), e.addEventListener("keydown", f)), g(e, t), function(e, a) {
            (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
                e.setAttribute("aria-controls", a);
            });
        }(e, a);
    }, h = (e)=>{
        s && s !== e.target && !s.contains(e.target) && (n = !0), a.a11y.clicked = !0;
    }, A = ()=>{
        n = !1, requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                a.destroyed || (a.a11y.clicked = !1);
            });
        });
    }, k = (e)=>{
        l = (new Date).getTime();
    }, M = (e)=>{
        if (a.a11y.clicked) return;
        if ((new Date).getTime() - l < 100) return;
        const t = e.target.closest(`.${a.params.slideClass}, swiper-slide`);
        if (!t || !a.slides.includes(t)) return;
        s = t;
        const i = a.slides.indexOf(t) === a.activeIndex, r = a.params.watchSlidesProgress && a.visibleSlides && a.visibleSlides.includes(t);
        i || r || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (a.isHorizontal() ? a.el.scrollLeft = 0 : a.el.scrollTop = 0, requestAnimationFrame(()=>{
            n || (a.params.loop ? a.slideToLoop(parseInt(t.getAttribute("data-swiper-slide-index")), 0) : a.slideTo(a.slides.indexOf(t), 0), n = !1);
        }));
    }, x = ()=>{
        const e = a.params.a11y;
        e.itemRoleDescriptionMessage && p(a.slides, e.itemRoleDescriptionMessage), e.slideRole && m(a.slides, e.slideRole);
        const t = a.slides.length;
        e.slideLabelMessage && a.slides.forEach((i, n)=>{
            const s = a.params.loop ? parseInt(i.getAttribute("data-swiper-slide-index"), 10) : n;
            g(i, e.slideLabelMessage.replace(/\{\{index\}\}/, s + 1).replace(/\{\{slidesLength\}\}/, t));
        });
    }, L = ()=>{
        const e = a.params.a11y;
        a.el.append(r);
        const t = a.el;
        e.containerRoleDescriptionMessage && p(t, e.containerRoleDescriptionMessage), e.containerMessage && g(t, e.containerMessage);
        const i = a.wrapperEl, n = e.id || i.getAttribute("id") || `swiper-wrapper-${s = 16, void 0 === s && (s = 16), "x".repeat(s).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16))}`;
        var s;
        const l = a.params.autoplay && a.params.autoplay.enabled ? "off" : "polite";
        var o;
        o = n, (0, _utilsMinMjs.m)(i).forEach((e)=>{
            e.setAttribute("id", o);
        }), function(e, a) {
            (e = (0, _utilsMinMjs.m)(e)).forEach((e)=>{
                e.setAttribute("aria-live", a);
            });
        }(i, l), x();
        let { nextEl: c, prevEl: d } = a.navigation ? a.navigation : {};
        if (c = (0, _utilsMinMjs.m)(c), d = (0, _utilsMinMjs.m)(d), c && c.forEach((a)=>b(a, n, e.nextSlideMessage)), d && d.forEach((a)=>b(a, n, e.prevSlideMessage)), y()) (0, _utilsMinMjs.m)(a.pagination.el).forEach((e)=>{
            e.addEventListener("keydown", f);
        });
        (0, _ssrWindowEsmMinMjs.g)().addEventListener("visibilitychange", k), a.el.addEventListener("focus", M, !0), a.el.addEventListener("focus", M, !0), a.el.addEventListener("pointerdown", h, !0), a.el.addEventListener("pointerup", A, !0);
    };
    i("beforeInit", ()=>{
        r = (0, _utilsMinMjs.c)("span", a.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true");
    }), i("afterInit", ()=>{
        a.params.a11y.enabled && L();
    }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ()=>{
        a.params.a11y.enabled && x();
    }), i("fromEdge toEdge afterInit lock unlock", ()=>{
        a.params.a11y.enabled && function() {
            if (a.params.loop || a.params.rewind || !a.navigation) return;
            const { nextEl: e, prevEl: t } = a.navigation;
            t && (a.isBeginning ? (u(t), d(t)) : (E(t), c(t))), e && (a.isEnd ? (u(e), d(e)) : (E(e), c(e)));
        }();
    }), i("paginationUpdate", ()=>{
        a.params.a11y.enabled && function() {
            const e = a.params.a11y;
            v() && a.pagination.bullets.forEach((t)=>{
                a.params.pagination.clickable && (c(t), a.params.pagination.renderBullet || (m(t, "button"), g(t, e.paginationBulletMessage.replace(/\{\{index\}\}/, (0, _utilsMinMjs.h)(t) + 1)))), t.matches((0, _classesToSelectorMinMjs.c)(a.params.pagination.bulletActiveClass)) ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current");
            });
        }();
    }), i("destroy", ()=>{
        a.params.a11y.enabled && function() {
            r && r.remove();
            let { nextEl: e, prevEl: t } = a.navigation ? a.navigation : {};
            e = (0, _utilsMinMjs.m)(e), t = (0, _utilsMinMjs.m)(t), e && e.forEach((e)=>e.removeEventListener("keydown", f)), t && t.forEach((e)=>e.removeEventListener("keydown", f)), y() && (0, _utilsMinMjs.m)(a.pagination.el).forEach((e)=>{
                e.removeEventListener("keydown", f);
            });
            (0, _ssrWindowEsmMinMjs.g)().removeEventListener("visibilitychange", k), a.el && "string" != typeof a.el && (a.el.removeEventListener("focus", M, !0), a.el.removeEventListener("pointerdown", h, !0), a.el.removeEventListener("pointerup", A, !0));
        }();
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/classes-to-selector.min.mjs":"a0Ggo","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnAE4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
function History(e) {
    let { swiper: t, extendParams: a, on: s } = e;
    a({
        history: {
            enabled: !1,
            root: "",
            replaceState: !1,
            key: "slides",
            keepQuery: !1
        }
    });
    let r = !1, i = {};
    const l = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o = (e)=>{
        const t = (0, _ssrWindowEsmMinMjs.a)();
        let a;
        a = e ? new URL(e) : t.location;
        const s = a.pathname.slice(1).split("/").filter((e)=>"" !== e), r = s.length;
        return {
            key: s[r - 2],
            value: s[r - 1]
        };
    }, n = (e, a)=>{
        const s = (0, _ssrWindowEsmMinMjs.a)();
        if (!r || !t.params.history.enabled) return;
        let i;
        i = t.params.url ? new URL(t.params.url) : s.location;
        const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${a}"]`) : t.slides[a];
        let n = l(o.getAttribute("data-history"));
        if (t.params.history.root.length > 0) {
            let a = t.params.history.root;
            "/" === a[a.length - 1] && (a = a.slice(0, a.length - 1)), n = `${a}/${e ? `${e}/` : ""}${n}`;
        } else i.pathname.includes(e) || (n = `${e ? `${e}/` : ""}${n}`);
        t.params.history.keepQuery && (n += i.search);
        const p = s.history.state;
        p && p.value === n || (t.params.history.replaceState ? s.history.replaceState({
            value: n
        }, null, n) : s.history.pushState({
            value: n
        }, null, n));
    }, p = (e, a, s)=>{
        if (a) for(let r = 0, i = t.slides.length; r < i; r += 1){
            const i = t.slides[r];
            if (l(i.getAttribute("data-history")) === a) {
                const a = t.getSlideIndex(i);
                t.slideTo(a, e, s);
            }
        }
        else t.slideTo(0, e, s);
    }, d = ()=>{
        i = o(t.params.url), p(t.params.speed, i.value, !1);
    };
    s("init", ()=>{
        t.params.history.enabled && (()=>{
            const e = (0, _ssrWindowEsmMinMjs.a)();
            if (t.params.history) {
                if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
                r = !0, i = o(t.params.url), i.key || i.value ? (p(0, i.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", d)) : t.params.history.replaceState || e.addEventListener("popstate", d);
            }
        })();
    }), s("destroy", ()=>{
        t.params.history.enabled && (()=>{
            const e = (0, _ssrWindowEsmMinMjs.a)();
            t.params.history.replaceState || e.removeEventListener("popstate", d);
        })();
    }), s("transitionEnd _freeModeNoMomentumRelease", ()=>{
        r && n(t.params.history.key, t.activeIndex);
    }), s("slideChange", ()=>{
        r && t.params.cssMode && n(t.params.history.key, t.activeIndex);
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JnJn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function HashNavigation(a) {
    let { swiper: e, extendParams: t, emit: s, on: i } = a, n = !1;
    const r = (0, _ssrWindowEsmMinMjs.g)(), h = (0, _ssrWindowEsmMinMjs.a)();
    t({
        hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1,
            getSlideIndex (a, t) {
                if (e.virtual && e.params.virtual.enabled) {
                    const a = e.slides.filter((a)=>a.getAttribute("data-hash") === t)[0];
                    if (!a) return 0;
                    return parseInt(a.getAttribute("data-swiper-slide-index"), 10);
                }
                return e.getSlideIndex((0, _utilsMinMjs.e)(e.slidesEl, `.${e.params.slideClass}[data-hash="${t}"], swiper-slide[data-hash="${t}"]`)[0]);
            }
        }
    });
    const d = ()=>{
        s("hashChange");
        const a = r.location.hash.replace("#", ""), t = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex];
        if (a !== (t ? t.getAttribute("data-hash") : "")) {
            const t = e.params.hashNavigation.getSlideIndex(e, a);
            if (void 0 === t || Number.isNaN(t)) return;
            e.slideTo(t);
        }
    }, l = ()=>{
        if (!n || !e.params.hashNavigation.enabled) return;
        const a = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], t = a ? a.getAttribute("data-hash") || a.getAttribute("data-history") : "";
        e.params.hashNavigation.replaceState && h.history && h.history.replaceState ? (h.history.replaceState(null, null, `#${t}` || ""), s("hashSet")) : (r.location.hash = t || "", s("hashSet"));
    };
    i("init", ()=>{
        e.params.hashNavigation.enabled && (()=>{
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
            n = !0;
            const a = r.location.hash.replace("#", "");
            if (a) {
                const t = 0, s = e.params.hashNavigation.getSlideIndex(e, a);
                e.slideTo(s || 0, t, e.params.runCallbacksOnInit, !0);
            }
            e.params.hashNavigation.watchState && h.addEventListener("hashchange", d);
        })();
    }), i("destroy", ()=>{
        e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && h.removeEventListener("hashchange", d);
    }), i("transitionEnd _freeModeNoMomentumRelease", ()=>{
        n && l();
    }), i("slideChange", ()=>{
        n && e.params.cssMode && l();
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xfb8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
function Autoplay(e) {
    let a, t, { swiper: n, extendParams: i, on: r, emit: o, params: s } = e;
    n.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    }, i({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let l, p, u, d, y, m, c, g, v = s && s.autoplay ? s.autoplay.delay : 3e3, T = s && s.autoplay ? s.autoplay.delay : 3e3, f = (new Date).getTime();
    function w(e) {
        n && !n.destroyed && n.wrapperEl && e.target === n.wrapperEl && (n.wrapperEl.removeEventListener("transitionend", w), g || e.detail && e.detail.bySwiperTouchMove || S());
    }
    const b = ()=>{
        if (n.destroyed || !n.autoplay.running) return;
        n.autoplay.paused ? p = !0 : p && (T = l, p = !1);
        const e = n.autoplay.paused ? l : f + T - (new Date).getTime();
        n.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / v), t = requestAnimationFrame(()=>{
            b();
        });
    }, E = (e)=>{
        if (n.destroyed || !n.autoplay.running) return;
        cancelAnimationFrame(t), b();
        let i = void 0 === e ? n.params.autoplay.delay : e;
        v = n.params.autoplay.delay, T = n.params.autoplay.delay;
        const r = (()=>{
            let e;
            if (e = n.virtual && n.params.virtual.enabled ? n.slides.filter((e)=>e.classList.contains("swiper-slide-active"))[0] : n.slides[n.activeIndex], !e) return;
            return parseInt(e.getAttribute("data-swiper-autoplay"), 10);
        })();
        !Number.isNaN(r) && r > 0 && void 0 === e && (i = r, v = r, T = r), l = i;
        const s = n.params.speed, p = ()=>{
            n && !n.destroyed && (n.params.autoplay.reverseDirection ? !n.isBeginning || n.params.loop || n.params.rewind ? (n.slidePrev(s, !0, !0), o("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(n.slides.length - 1, s, !0, !0), o("autoplay")) : !n.isEnd || n.params.loop || n.params.rewind ? (n.slideNext(s, !0, !0), o("autoplay")) : n.params.autoplay.stopOnLastSlide || (n.slideTo(0, s, !0, !0), o("autoplay")), n.params.cssMode && (f = (new Date).getTime(), requestAnimationFrame(()=>{
                E();
            })));
        };
        return i > 0 ? (clearTimeout(a), a = setTimeout(()=>{
            p();
        }, i)) : requestAnimationFrame(()=>{
            p();
        }), i;
    }, L = ()=>{
        f = (new Date).getTime(), n.autoplay.running = !0, E(), o("autoplayStart");
    }, D = ()=>{
        n.autoplay.running = !1, clearTimeout(a), cancelAnimationFrame(t), o("autoplayStop");
    }, O = (e, t)=>{
        if (n.destroyed || !n.autoplay.running) return;
        clearTimeout(a), e || (c = !0);
        const i = ()=>{
            o("autoplayPause"), n.params.autoplay.waitForTransition ? n.wrapperEl.addEventListener("transitionend", w) : S();
        };
        if (n.autoplay.paused = !0, t) return m && (l = n.params.autoplay.delay), m = !1, void i();
        const r = l || n.params.autoplay.delay;
        l = r - ((new Date).getTime() - f), n.isEnd && l < 0 && !n.params.loop || (l < 0 && (l = 0), i());
    }, S = ()=>{
        n.isEnd && l < 0 && !n.params.loop || n.destroyed || !n.autoplay.running || (f = (new Date).getTime(), c ? (c = !1, E(l)) : E(), n.autoplay.paused = !1, o("autoplayResume"));
    }, M = ()=>{
        if (n.destroyed || !n.autoplay.running) return;
        const e = (0, _ssrWindowEsmMinMjs.g)();
        "hidden" === e.visibilityState && (c = !0, O(!0)), "visible" === e.visibilityState && S();
    }, h = (e)=>{
        "mouse" === e.pointerType && (c = !0, g = !0, n.animating || n.autoplay.paused || O(!0));
    }, A = (e)=>{
        "mouse" === e.pointerType && (g = !1, n.autoplay.paused && S());
    };
    r("init", ()=>{
        n.params.autoplay.enabled && (n.params.autoplay.pauseOnMouseEnter && (n.el.addEventListener("pointerenter", h), n.el.addEventListener("pointerleave", A)), (0, _ssrWindowEsmMinMjs.g)().addEventListener("visibilitychange", M), L());
    }), r("destroy", ()=>{
        n.el && "string" != typeof n.el && (n.el.removeEventListener("pointerenter", h), n.el.removeEventListener("pointerleave", A)), (0, _ssrWindowEsmMinMjs.g)().removeEventListener("visibilitychange", M), n.autoplay.running && D();
    }), r("_freeModeStaticRelease", ()=>{
        (d || c) && S();
    }), r("_freeModeNoMomentumRelease", ()=>{
        n.params.autoplay.disableOnInteraction ? D() : O(!0, !0);
    }), r("beforeTransitionStart", (e, a, t)=>{
        !n.destroyed && n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? O(!0, !0) : D());
    }), r("sliderFirstMove", ()=>{
        !n.destroyed && n.autoplay.running && (n.params.autoplay.disableOnInteraction ? D() : (u = !0, d = !1, c = !1, y = setTimeout(()=>{
            c = !0, d = !0, O(!0);
        }, 200)));
    }), r("touchEnd", ()=>{
        if (!n.destroyed && n.autoplay.running && u) {
            if (clearTimeout(y), clearTimeout(a), n.params.autoplay.disableOnInteraction) return d = !1, void (u = !1);
            d && n.params.cssMode && S(), d = !1, u = !1;
        }
    }), r("slideChange", ()=>{
        !n.destroyed && n.autoplay.running && (m = !0);
    }), Object.assign(n.autoplay, {
        start: L,
        stop: D,
        pause: O,
        resume: S
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ESRs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _ssrWindowEsmMinMjs = require("../shared/ssr-window.esm.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function Thumb(e) {
    let { swiper: s, extendParams: i, on: t } = e;
    i({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
        }
    });
    let r = !1, a = !1;
    function l() {
        const e = s.thumbs.swiper;
        if (!e || e.destroyed) return;
        const i = e.clickedIndex, t = e.clickedSlide;
        if (t && t.classList.contains(s.params.thumbs.slideThumbActiveClass)) return;
        if (null == i) return;
        let r;
        r = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : i, s.params.loop ? s.slideToLoop(r) : s.slideTo(r);
    }
    function n() {
        const { thumbs: e } = s.params;
        if (r) return !1;
        r = !0;
        const i = s.constructor;
        if (e.swiper instanceof i) s.thumbs.swiper = e.swiper, Object.assign(s.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), Object.assign(s.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
        }), s.thumbs.swiper.update();
        else if ((0, _utilsMinMjs.l)(e.swiper)) {
            const t = Object.assign({}, e.swiper);
            Object.assign(t, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), s.thumbs.swiper = new i(t), a = !0;
        }
        return s.thumbs.swiper.el.classList.add(s.params.thumbs.thumbsContainerClass), s.thumbs.swiper.on("tap", l), !0;
    }
    function d(e) {
        const i = s.thumbs.swiper;
        if (!i || i.destroyed) return;
        const t = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
        let r = 1;
        const a = s.params.thumbs.slideThumbActiveClass;
        if (s.params.slidesPerView > 1 && !s.params.centeredSlides && (r = s.params.slidesPerView), s.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.forEach((e)=>e.classList.remove(a)), i.params.loop || i.params.virtual && i.params.virtual.enabled) for(let e = 0; e < r; e += 1)(0, _utilsMinMjs.e)(i.slidesEl, `[data-swiper-slide-index="${s.realIndex + e}"]`).forEach((e)=>{
            e.classList.add(a);
        });
        else for(let e = 0; e < r; e += 1)i.slides[s.realIndex + e] && i.slides[s.realIndex + e].classList.add(a);
        const l = s.params.thumbs.autoScrollOffset, n = l && !i.params.loop;
        if (s.realIndex !== i.realIndex || n) {
            const r = i.activeIndex;
            let a, d;
            if (i.params.loop) {
                const e = i.slides.filter((e)=>e.getAttribute("data-swiper-slide-index") === `${s.realIndex}`)[0];
                a = i.slides.indexOf(e), d = s.activeIndex > s.previousIndex ? "next" : "prev";
            } else a = s.realIndex, d = a > s.previousIndex ? "next" : "prev";
            n && (a += "next" === d ? l : -1 * l), i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(a) < 0 && (i.params.centeredSlides ? a = a > r ? a - Math.floor(t / 2) + 1 : a + Math.floor(t / 2) - 1 : a > r && i.params.slidesPerGroup, i.slideTo(a, e ? 0 : void 0));
        }
    }
    s.thumbs = {
        swiper: null
    }, t("beforeInit", ()=>{
        const { thumbs: e } = s.params;
        if (e && e.swiper) {
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                const i = (0, _ssrWindowEsmMinMjs.g)(), t = ()=>{
                    const t = "string" == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                    if (t && t.swiper) e.swiper = t.swiper, n(), d(!0);
                    else if (t) {
                        const i = (r)=>{
                            e.swiper = r.detail[0], t.removeEventListener("init", i), n(), d(!0), e.swiper.update(), s.update();
                        };
                        t.addEventListener("init", i);
                    }
                    return t;
                }, r = ()=>{
                    if (s.destroyed) return;
                    t() || requestAnimationFrame(r);
                };
                requestAnimationFrame(r);
            } else n(), d(!0);
        }
    }), t("slideChange update resize observerUpdate", ()=>{
        d();
    }), t("setTransition", (e, i)=>{
        const t = s.thumbs.swiper;
        t && !t.destroyed && t.setTransition(i);
    }), t("beforeDestroy", ()=>{
        const e = s.thumbs.swiper;
        e && !e.destroyed && a && e.destroy();
    }), Object.assign(s.thumbs, {
        init: n,
        update: d
    });
}

},{"../shared/ssr-window.esm.min.mjs":"kCr4Q","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOW0L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsMinMjs = require("../shared/utils.min.mjs");
function freeMode(e) {
    let { swiper: t, extendParams: o, emit: n, once: s } = e;
    o({
        freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
        }
    }), Object.assign(t, {
        freeMode: {
            onTouchStart: function() {
                if (t.params.cssMode) return;
                const e = t.getTranslate();
                t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate
                });
            },
            onTouchMove: function() {
                if (t.params.cssMode) return;
                const { touchEventsData: e, touches: o } = t;
                0 === e.velocities.length && e.velocities.push({
                    position: o[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime
                }), e.velocities.push({
                    position: o[t.isHorizontal() ? "currentX" : "currentY"],
                    time: (0, _utilsMinMjs.d)()
                });
            },
            onTouchEnd: function(e) {
                let { currentPos: o } = e;
                if (t.params.cssMode) return;
                const { params: i, wrapperEl: a, rtlTranslate: r, snapGrid: l, touchEventsData: m } = t, c = (0, _utilsMinMjs.d)() - m.touchStartTime;
                if (o < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (o > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                else {
                    if (i.freeMode.momentum) {
                        if (m.velocities.length > 1) {
                            const e = m.velocities.pop(), o = m.velocities.pop(), n = e.position - o.position, s = e.time - o.time;
                            t.velocity = n / s, t.velocity /= 2, Math.abs(t.velocity) < i.freeMode.minimumVelocity && (t.velocity = 0), (s > 150 || (0, _utilsMinMjs.d)() - e.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        t.velocity *= i.freeMode.momentumVelocityRatio, m.velocities.length = 0;
                        let e = 1e3 * i.freeMode.momentumRatio;
                        const o = t.velocity * e;
                        let c = t.translate + o;
                        r && (c = -c);
                        let d, u = !1;
                        const f = 20 * Math.abs(t.velocity) * i.freeMode.momentumBounceRatio;
                        let p;
                        if (c < t.maxTranslate()) i.freeMode.momentumBounce ? (c + t.maxTranslate() < -f && (c = t.maxTranslate() - f), d = t.maxTranslate(), u = !0, m.allowMomentumBounce = !0) : c = t.maxTranslate(), i.loop && i.centeredSlides && (p = !0);
                        else if (c > t.minTranslate()) i.freeMode.momentumBounce ? (c - t.minTranslate() > f && (c = t.minTranslate() + f), d = t.minTranslate(), u = !0, m.allowMomentumBounce = !0) : c = t.minTranslate(), i.loop && i.centeredSlides && (p = !0);
                        else if (i.freeMode.sticky) {
                            let e;
                            for(let t = 0; t < l.length; t += 1)if (l[t] > -c) {
                                e = t;
                                break;
                            }
                            c = Math.abs(l[e] - c) < Math.abs(l[e - 1] - c) || "next" === t.swipeDirection ? l[e] : l[e - 1], c = -c;
                        }
                        if (p && s("transitionEnd", ()=>{
                            t.loopFix();
                        }), 0 !== t.velocity) {
                            if (e = r ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity), i.freeMode.sticky) {
                                const o = Math.abs((r ? -c : c) - t.translate), n = t.slidesSizesGrid[t.activeIndex];
                                e = o < n ? i.speed : o < 2 * n ? 1.5 * i.speed : 2.5 * i.speed;
                            }
                        } else if (i.freeMode.sticky) return void t.slideToClosest();
                        i.freeMode.momentumBounce && u ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, _utilsMinMjs.k)(a, ()=>{
                            t && !t.destroyed && m.allowMomentumBounce && (n("momentumBounce"), t.setTransition(i.speed), setTimeout(()=>{
                                t.setTranslate(d), (0, _utilsMinMjs.k)(a, ()=>{
                                    t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        })) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(c), t.setTransition(e), t.setTranslate(c), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, _utilsMinMjs.k)(a, ()=>{
                            t && !t.destroyed && t.transitionEnd();
                        }))) : t.updateProgress(c), t.updateActiveIndex(), t.updateSlidesClasses();
                    } else {
                        if (i.freeMode.sticky) return void t.slideToClosest();
                        i.freeMode && n("_freeModeNoMomentumRelease");
                    }
                    (!i.freeMode.momentum || c >= i.longSwipesMs) && (n("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                }
            }
        }
    });
}

},{"../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dI2Xv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid(e) {
    let i, r, a, t, { swiper: s, extendParams: l, on: o } = e;
    l({
        grid: {
            rows: 1,
            fill: "column"
        }
    });
    const n = ()=>{
        let e = s.params.spaceBetween;
        return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * s.size : "string" == typeof e && (e = parseFloat(e)), e;
    };
    o("init", ()=>{
        t = s.params.grid && s.params.grid.rows > 1;
    }), o("update", ()=>{
        const { params: e, el: i } = s, r = e.grid && e.grid.rows > 1;
        t && !r ? (i.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, s.emitContainerClasses()) : !t && r && (i.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && i.classList.add(`${e.containerModifierClass}grid-column`), s.emitContainerClasses()), t = r;
    }), s.grid = {
        initSlides: (e)=>{
            const { slidesPerView: t } = s.params, { rows: l, fill: o } = s.params.grid, n = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : e.length;
            a = Math.floor(n / l), i = Math.floor(n / l) === n / l ? n : Math.ceil(n / l) * l, "auto" !== t && "row" === o && (i = Math.max(i, t * l)), r = i / l;
        },
        unsetSlides: ()=>{
            s.slides && s.slides.forEach((e)=>{
                e.swiperSlideGridSet && (e.style.height = "", e.style[s.getDirectionLabel("margin-top")] = "");
            });
        },
        updateSlide: (e, t, l)=>{
            const { slidesPerGroup: o } = s.params, d = n(), { rows: p, fill: c } = s.params.grid, g = s.virtual && s.params.virtual.enabled ? s.virtual.slides.length : l.length;
            let u, h, m;
            if ("row" === c && o > 1) {
                const r = Math.floor(e / (o * p)), a = e - p * o * r, s = 0 === r ? o : Math.min(Math.ceil((g - r * p * o) / p), o);
                m = Math.floor(a / s), h = a - m * s + r * o, u = h + m * i / p, t.style.order = u;
            } else "column" === c ? (h = Math.floor(e / p), m = e - h * p, (h > a || h === a && m === p - 1) && (m += 1, m >= p && (m = 0, h += 1))) : (m = Math.floor(e / r), h = e - m * r);
            t.row = m, t.column = h, t.style.height = `calc((100% - ${(p - 1) * d}px) / ${p})`, t.style[s.getDirectionLabel("margin-top")] = 0 !== m ? d && `${d}px` : "", t.swiperSlideGridSet = !0;
        },
        updateWrapperSize: (e, r)=>{
            const { centeredSlides: a, roundLengths: t } = s.params, l = n(), { rows: o } = s.params.grid;
            if (s.virtualSize = (e + l) * i, s.virtualSize = Math.ceil(s.virtualSize / o) - l, s.params.cssMode || (s.wrapperEl.style[s.getDirectionLabel("width")] = `${s.virtualSize + l}px`), a) {
                const e = [];
                for(let i = 0; i < r.length; i += 1){
                    let a = r[i];
                    t && (a = Math.floor(a)), r[i] < s.virtualSize + r[0] && e.push(a);
                }
                r.splice(0, r.length), r.push(...e);
            }
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7tKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
function appendSlide(e) {
    const l = this, { params: o, slidesEl: i } = l;
    o.loop && l.loopDestroy();
    const t = (e)=>{
        if ("string" == typeof e) {
            const l = document.createElement("div");
            l.innerHTML = e, i.append(l.children[0]), l.innerHTML = "";
        } else i.append(e);
    };
    if ("object" == typeof e && "length" in e) for(let l = 0; l < e.length; l += 1)e[l] && t(e[l]);
    else t(e);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update();
}
function prependSlide(e) {
    const l = this, { params: o, activeIndex: i, slidesEl: t } = l;
    o.loop && l.loopDestroy();
    let n = i + 1;
    const d = (e)=>{
        if ("string" == typeof e) {
            const l = document.createElement("div");
            l.innerHTML = e, t.prepend(l.children[0]), l.innerHTML = "";
        } else t.prepend(e);
    };
    if ("object" == typeof e && "length" in e) {
        for(let l = 0; l < e.length; l += 1)e[l] && d(e[l]);
        n = i + e.length;
    } else d(e);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update(), l.slideTo(n, 0, !1);
}
function addSlide(e, l) {
    const o = this, { params: i, activeIndex: t, slidesEl: n } = o;
    let d = t;
    i.loop && (d -= o.loopedSlides, o.loopDestroy(), o.recalcSlides());
    const s = o.slides.length;
    if (e <= 0) return void o.prependSlide(l);
    if (e >= s) return void o.appendSlide(l);
    let p = d > e ? d + 1 : d;
    const r = [];
    for(let l = s - 1; l >= e; l -= 1){
        const e = o.slides[l];
        e.remove(), r.unshift(e);
    }
    if ("object" == typeof l && "length" in l) {
        for(let e = 0; e < l.length; e += 1)l[e] && n.append(l[e]);
        p = d > e ? d + l.length : d;
    } else n.append(l);
    for(let e = 0; e < r.length; e += 1)n.append(r[e]);
    o.recalcSlides(), i.loop && o.loopCreate(), i.observer && !o.isElement || o.update(), i.loop ? o.slideTo(p + o.loopedSlides, 0, !1) : o.slideTo(p, 0, !1);
}
function removeSlide(e) {
    const l = this, { params: o, activeIndex: i } = l;
    let t = i;
    o.loop && (t -= l.loopedSlides, l.loopDestroy());
    let n, d = t;
    if ("object" == typeof e && "length" in e) {
        for(let o = 0; o < e.length; o += 1)n = e[o], l.slides[n] && l.slides[n].remove(), n < d && (d -= 1);
        d = Math.max(d, 0);
    } else n = e, l.slides[n] && l.slides[n].remove(), n < d && (d -= 1), d = Math.max(d, 0);
    l.recalcSlides(), o.loop && l.loopCreate(), o.observer && !l.isElement || l.update(), o.loop ? l.slideTo(d + l.loopedSlides, 0, !1) : l.slideTo(d, 0, !1);
}
function removeAllSlides() {
    const e = this, l = [];
    for(let o = 0; o < e.slides.length; o += 1)l.push(o);
    e.removeSlide(l);
}
function Manipulation(e) {
    let { swiper: l } = e;
    Object.assign(l, {
        appendSlide: appendSlide.bind(l),
        prependSlide: prependSlide.bind(l),
        addSlide: addSlide.bind(l),
        removeSlide: removeSlide.bind(l),
        removeAllSlides: removeAllSlides.bind(l)
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7b8YE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectFade(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        fadeEffect: {
            crossFade: !1
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "fade",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { slides: e } = t, s = t.params.fadeEffect;
            for(let a = 0; a < e.length; a += 1){
                const e = t.slides[a];
                let r = -e.swiperSlideOffset;
                t.params.virtualTranslate || (r -= t.translate);
                let i = 0;
                t.isHorizontal() || (i = r, r = 0);
                const f = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0), n = (0, _effectTargetMinMjs.e)(s, e);
                n.style.opacity = f, n.style.transform = `translate3d(${r}px, ${i}px, 0px)`;
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`;
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s,
                allSlides: !0
            });
        },
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ccCbC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectInit);
function effectInit(e) {
    const { effect: s, swiper: a, on: t, setTranslate: r, setTransition: i, overwriteParams: n, perspective: o, recreateShadows: f, getEffectParams: l } = e;
    let c;
    t("beforeInit", ()=>{
        if (a.params.effect !== s) return;
        a.classNames.push(`${a.params.containerModifierClass}${s}`), o && o() && a.classNames.push(`${a.params.containerModifierClass}3d`);
        const e = n ? n() : {};
        Object.assign(a.params, e), Object.assign(a.originalParams, e);
    }), t("setTranslate", ()=>{
        a.params.effect === s && r();
    }), t("setTransition", (e, t)=>{
        a.params.effect === s && i(t);
    }), t("transitionEnd", ()=>{
        if (a.params.effect === s && f) {
            if (!l || !l().slideShadows) return;
            a.slides.forEach((e)=>{
                e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e)=>e.remove());
            }), f();
        }
    }), t("virtualUpdate", ()=>{
        a.params.effect === s && (a.slides.length || (c = !0), requestAnimationFrame(()=>{
            c && a.slides && a.slides.length && (r(), c = !1);
        }));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70LY6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectTarget);
var _utilsMinMjs = require("./utils.min.mjs");
function effectTarget(e, i) {
    const t = (0, _utilsMinMjs.g)(i);
    return t !== i && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t;
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3AS5h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "e", ()=>effectVirtualTransitionEnd);
var _utilsMinMjs = require("./utils.min.mjs");
function effectVirtualTransitionEnd(e) {
    let { swiper: t, duration: n, transformElements: r, allSlides: i } = e;
    const { activeIndex: a } = t;
    if (t.params.virtualTranslate && 0 !== n) {
        let e, n = !1;
        e = i ? r : r.filter((e)=>{
            const n = e.classList.contains("swiper-slide-transform") ? ((e)=>{
                if (!e.parentElement) return t.slides.filter((t)=>t.shadowRoot && t.shadowRoot === e.parentNode)[0];
                return e.parentElement;
            })(e) : e;
            return t.getSlideIndex(n) === a;
        }), e.forEach((e)=>{
            (0, _utilsMinMjs.k)(e, ()=>{
                if (n) return;
                if (!t || t.destroyed) return;
                n = !0, t.animating = !1;
                const e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0
                });
                t.wrapperEl.dispatchEvent(e);
            });
        });
    }
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Xe5q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCube(e) {
    let { swiper: t, extendParams: s, on: a } = e;
    s({
        cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
        }
    });
    const r = (e, t, s)=>{
        let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), r = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        a || (a = (0, _utilsMinMjs.c)("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), r || (r = (0, _utilsMinMjs.c)("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(r)), a && (a.style.opacity = Math.max(-t, 0)), r && (r.style.opacity = Math.max(t, 0));
    };
    (0, _effectInitMinMjs.e)({
        effect: "cube",
        swiper: t,
        on: a,
        setTranslate: ()=>{
            const { el: e, wrapperEl: s, slides: a, width: o, height: i, rtlTranslate: l, size: d, browser: n } = t, p = t.params.cubeEffect, c = t.isHorizontal(), w = t.virtual && t.params.virtual.enabled;
            let h, f = 0;
            p.shadow && (c ? (h = t.wrapperEl.querySelector(".swiper-cube-shadow"), h || (h = (0, _utilsMinMjs.c)("div", "swiper-cube-shadow"), t.wrapperEl.append(h)), h.style.height = `${o}px`) : (h = e.querySelector(".swiper-cube-shadow"), h || (h = (0, _utilsMinMjs.c)("div", "swiper-cube-shadow"), e.append(h))));
            for(let e = 0; e < a.length; e += 1){
                const s = a[e];
                let o = e;
                w && (o = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
                let i = 90 * o, n = Math.floor(i / 360);
                l && (i = -i, n = Math.floor(-i / 360));
                const h = Math.max(Math.min(s.progress, 1), -1);
                let m = 0, u = 0, b = 0;
                o % 4 == 0 ? (m = 4 * -n * d, b = 0) : (o - 1) % 4 == 0 ? (m = 0, b = 4 * -n * d) : (o - 2) % 4 == 0 ? (m = d + 4 * n * d, b = d) : (o - 3) % 4 == 0 && (m = -d, b = 3 * d + 4 * d * n), l && (m = -m), c || (u = m, m = 0);
                const x = `rotateX(${c ? 0 : -i}deg) rotateY(${c ? i : 0}deg) translate3d(${m}px, ${u}px, ${b}px)`;
                h <= 1 && h > -1 && (f = 90 * o + 90 * h, l && (f = 90 * -o - 90 * h), t.browser && t.browser.need3dFix && Math.abs(f) / 90 % 2 == 1 && (f += .001)), s.style.transform = x, p.slideShadows && r(s, h, c);
            }
            if (s.style.transformOrigin = `50% 50% -${d / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${d / 2}px`, p.shadow) {
                if (c) h.style.transform = `translate3d(0px, ${o / 2 + p.shadowOffset}px, ${-o / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${p.shadowScale})`;
                else {
                    const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale, a = p.shadowScale / t, r = p.shadowOffset;
                    h.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${i / 2 + r}px, ${-i / 2 / a}px) rotateX(-89.99deg)`;
                }
            }
            const m = (n.isSafari || n.isWebView) && n.needPerspectiveFix ? -d / 2 : 0;
            s.style.transform = `translate3d(0px,0,${m}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${m}px`);
        },
        setTransition: (e)=>{
            const { el: s, slides: a } = t;
            if (a.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), t.params.cubeEffect.shadow && !t.isHorizontal()) {
                const t = s.querySelector(".swiper-cube-shadow");
                t && (t.style.transitionDuration = `${e}ms`);
            }
        },
        recreateShadows: ()=>{
            const e = t.isHorizontal();
            t.slides.forEach((t)=>{
                const s = Math.max(Math.min(t.progress, 1), -1);
                r(t, s, e);
            });
        },
        getEffectParams: ()=>t.params.cubeEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
    });
}

},{"../shared/effect-init.min.mjs":"ccCbC","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"q2K6E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectFlip(e) {
    let { swiper: t, extendParams: s, on: r } = e;
    s({
        flipEffect: {
            slideShadows: !0,
            limitRotation: !0
        }
    });
    const a = (e, s)=>{
        let r = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"), a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
        r || (r = (0, _createShadowMinMjs.c)("flip", e, t.isHorizontal() ? "left" : "top")), a || (a = (0, _createShadowMinMjs.c)("flip", e, t.isHorizontal() ? "right" : "bottom")), r && (r.style.opacity = Math.max(-s, 0)), a && (a.style.opacity = Math.max(s, 0));
    };
    (0, _effectInitMinMjs.e)({
        effect: "flip",
        swiper: t,
        on: r,
        setTranslate: ()=>{
            const { slides: e, rtlTranslate: s } = t, r = t.params.flipEffect;
            for(let i = 0; i < e.length; i += 1){
                const o = e[i];
                let l = o.progress;
                t.params.flipEffect.limitRotation && (l = Math.max(Math.min(o.progress, 1), -1));
                const f = o.swiperSlideOffset;
                let n = -180 * l, d = 0, p = t.params.cssMode ? -f - t.translate : -f, m = 0;
                t.isHorizontal() ? s && (n = -n) : (m = p, p = 0, d = -n, n = 0), t.browser && t.browser.need3dFix && (Math.abs(n) / 90 % 2 == 1 && (n += .001), Math.abs(d) / 90 % 2 == 1 && (d += .001)), o.style.zIndex = -Math.abs(Math.round(l)) + e.length, r.slideShadows && a(o, l);
                const c = `translate3d(${p}px, ${m}px, 0px) rotateX(${d}deg) rotateY(${n}deg)`;
                (0, _effectTargetMinMjs.e)(r, o).style.transform = c;
            }
        },
        setTransition: (e)=>{
            const s = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            s.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: s
            });
        },
        recreateShadows: ()=>{
            t.params.flipEffect, t.slides.forEach((e)=>{
                let s = e.progress;
                t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), a(e, s);
            });
        },
        getEffectParams: ()=>t.params.flipEffect,
        perspective: ()=>!0,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NWMW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "c", ()=>createShadow);
var _utilsMinMjs = require("./utils.min.mjs");
function createShadow(e, t, r) {
    const s = `swiper-slide-shadow${r ? `-${r}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`, a = (0, _utilsMinMjs.g)(t);
    let i = a.querySelector(`.${s.split(" ").join(".")}`);
    return i || (i = (0, _utilsMinMjs.c)("div", s.split(" ")), a.append(i)), i;
}

},{"./utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wJjZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCoverflow(e) {
    let { swiper: t, extendParams: s, on: r } = e;
    s({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "coverflow",
        swiper: t,
        on: r,
        setTranslate: ()=>{
            const { width: e, height: s, slides: r, slidesSizesGrid: a } = t, o = t.params.coverflowEffect, i = t.isHorizontal(), l = t.translate, f = i ? e / 2 - l : s / 2 - l, d = i ? o.rotate : -o.rotate, h = o.depth;
            for(let e = 0, s = r.length; e < s; e += 1){
                const s = r[e], l = a[e], c = (f - s.swiperSlideOffset - l / 2) / l, n = "function" == typeof o.modifier ? o.modifier(c) : c * o.modifier;
                let w = i ? d * n : 0, p = i ? 0 : d * n, m = -h * Math.abs(n), b = o.stretch;
                "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(o.stretch) / 100 * l);
                let g = i ? 0 : b * n, y = i ? b * n : 0, S = 1 - (1 - o.scale) * Math.abs(n);
                Math.abs(y) < .001 && (y = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(w) < .001 && (w = 0), Math.abs(p) < .001 && (p = 0), Math.abs(S) < .001 && (S = 0), t.browser && t.browser.need3dFix && (Math.abs(w) / 90 % 2 == 1 && (w += .001), Math.abs(p) / 90 % 2 == 1 && (p += .001));
                const u = `translate3d(${y}px,${g}px,${m}px)  rotateX(${p}deg) rotateY(${w}deg) scale(${S})`;
                if ((0, _effectTargetMinMjs.e)(o, s).style.transform = u, s.style.zIndex = 1 - Math.abs(Math.round(n)), o.slideShadows) {
                    let e = i ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top"), t = i ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
                    e || (e = (0, _createShadowMinMjs.c)("coverflow", s, i ? "left" : "top")), t || (t = (0, _createShadowMinMjs.c)("coverflow", s, i ? "right" : "bottom")), e && (e.style.opacity = n > 0 ? n : 0), t && (t.style.opacity = -n > 0 ? -n : 0);
                }
            }
        },
        setTransition: (e)=>{
            t.slides.map((e)=>(0, _utilsMinMjs.g)(e)).forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            });
        },
        perspective: ()=>!0,
        overwriteParams: ()=>({
                watchSlidesProgress: !0
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gJMVE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCreative(e) {
    let { swiper: t, extendParams: r, on: s } = e;
    r({
        creativeEffect: {
            limitProgress: 1,
            shadowPerProgress: !1,
            progressMultiplier: 1,
            perspective: !0,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const a = (e)=>"string" == typeof e ? e : `${e}px`;
    (0, _effectInitMinMjs.e)({
        effect: "creative",
        swiper: t,
        on: s,
        setTranslate: ()=>{
            const { slides: e, wrapperEl: r, slidesSizesGrid: s } = t, i = t.params.creativeEffect, { progressMultiplier: o } = i, l = t.params.centeredSlides;
            if (l) {
                const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                r.style.transform = `translateX(calc(50% - ${e}px))`;
            }
            for(let r = 0; r < e.length; r += 1){
                const s = e[r], n = s.progress, c = Math.min(Math.max(s.progress, -i.limitProgress), i.limitProgress);
                let f = c;
                l || (f = Math.min(Math.max(s.originalProgress, -i.limitProgress), i.limitProgress));
                const m = s.swiperSlideOffset, p = [
                    t.params.cssMode ? -m - t.translate : -m,
                    0,
                    0
                ], d = [
                    0,
                    0,
                    0
                ];
                let h = !1;
                t.isHorizontal() || (p[1] = p[0], p[0] = 0);
                let g = {
                    translate: [
                        0,
                        0,
                        0
                    ],
                    rotate: [
                        0,
                        0,
                        0
                    ],
                    scale: 1,
                    opacity: 1
                };
                c < 0 ? (g = i.next, h = !0) : c > 0 && (g = i.prev, h = !0), p.forEach((e, t)=>{
                    p[t] = `calc(${e}px + (${a(g.translate[t])} * ${Math.abs(c * o)}))`;
                }), d.forEach((e, r)=>{
                    let s = g.rotate[r] * Math.abs(c * o);
                    t.browser && t.browser.need3dFix && Math.abs(s) / 90 % 2 == 1 && (s += .001), d[r] = s;
                }), s.style.zIndex = -Math.abs(Math.round(n)) + e.length;
                const w = p.join(", "), y = `rotateX(${d[0]}deg) rotateY(${d[1]}deg) rotateZ(${d[2]}deg)`, M = f < 0 ? `scale(${1 + (1 - g.scale) * f * o})` : `scale(${1 - (1 - g.scale) * f * o})`, u = f < 0 ? 1 + (1 - g.opacity) * f * o : 1 - (1 - g.opacity) * f * o, v = `translate3d(${w}) ${y} ${M}`;
                if (h && g.shadow || !h) {
                    let e = s.querySelector(".swiper-slide-shadow");
                    if (!e && g.shadow && (e = (0, _createShadowMinMjs.c)("creative", s)), e) {
                        const t = i.shadowPerProgress ? c * (1 / i.limitProgress) : c;
                        e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                    }
                }
                const E = (0, _effectTargetMinMjs.e)(i, s);
                E.style.transform = v, E.style.opacity = u, g.origin && (E.style.transformOrigin = g.origin);
            }
        },
        setTransition: (e)=>{
            const r = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            r.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: r,
                allSlides: !0
            });
        },
        perspective: ()=>t.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfbka":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowMinMjs = require("../shared/create-shadow.min.mjs");
var _effectInitMinMjs = require("../shared/effect-init.min.mjs");
var _effectTargetMinMjs = require("../shared/effect-target.min.mjs");
var _effectVirtualTransitionEndMinMjs = require("../shared/effect-virtual-transition-end.min.mjs");
var _utilsMinMjs = require("../shared/utils.min.mjs");
function EffectCards(e) {
    let { swiper: t, extendParams: a, on: s } = e;
    a({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    (0, _effectInitMinMjs.e)({
        effect: "cards",
        swiper: t,
        on: s,
        setTranslate: ()=>{
            const { slides: e, activeIndex: a, rtlTranslate: s } = t, r = t.params.cardsEffect, { startTranslate: i, isTouched: n } = t.touchEventsData, o = s ? -t.translate : t.translate;
            for(let l = 0; l < e.length; l += 1){
                const d = e[l], f = d.progress, c = Math.min(Math.max(f, -4), 4);
                let m = d.swiperSlideOffset;
                t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (m -= e[0].swiperSlideOffset);
                let p = t.params.cssMode ? -m - t.translate : -m, h = 0;
                const M = -100 * Math.abs(c);
                let u = 1, w = -r.perSlideRotate * c, S = r.perSlideOffset - .75 * Math.abs(c);
                const $ = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, E = ($ === a || $ === a - 1) && c > 0 && c < 1 && (n || t.params.cssMode) && o < i, T = ($ === a || $ === a + 1) && c < 0 && c > -1 && (n || t.params.cssMode) && o > i;
                if (E || T) {
                    const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                    w += -28 * c * e, u += -0.5 * e, S += 96 * e, h = -25 * e * Math.abs(c) + "%";
                }
                if (p = c < 0 ? `calc(${p}px ${s ? "-" : "+"} (${S * Math.abs(c)}%))` : c > 0 ? `calc(${p}px ${s ? "-" : "+"} (-${S * Math.abs(c)}%))` : `${p}px`, !t.isHorizontal()) {
                    const e = h;
                    h = p, p = e;
                }
                const g = c < 0 ? "" + (1 + (1 - u) * c) : "" + (1 - (1 - u) * c), x = `\n        translate3d(${p}, ${h}, ${M}px)\n        rotateZ(${r.rotate ? s ? -w : w : 0}deg)\n        scale(${g})\n      `;
                if (r.slideShadows) {
                    let e = d.querySelector(".swiper-slide-shadow");
                    e || (e = (0, _createShadowMinMjs.c)("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1));
                }
                d.style.zIndex = -Math.abs(Math.round(f)) + e.length;
                (0, _effectTargetMinMjs.e)(r, d).style.transform = x;
            }
        },
        setTransition: (e)=>{
            const a = t.slides.map((e)=>(0, _utilsMinMjs.g)(e));
            a.forEach((t)=>{
                t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t)=>{
                    t.style.transitionDuration = `${e}ms`;
                });
            }), (0, _effectVirtualTransitionEndMinMjs.e)({
                swiper: t,
                duration: e,
                transformElements: a
            });
        },
        perspective: ()=>!0,
        overwriteParams: ()=>({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
    });
}

},{"../shared/create-shadow.min.mjs":"7NWMW","../shared/effect-init.min.mjs":"ccCbC","../shared/effect-target.min.mjs":"70LY6","../shared/effect-virtual-transition-end.min.mjs":"3AS5h","../shared/utils.min.mjs":"9Ma1d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"girFM":[function() {},{}]},["lsveV","hPp0z"], "hPp0z", "parcelRequireb960")

//# sourceMappingURL=index.6d77bf5c.js.map
