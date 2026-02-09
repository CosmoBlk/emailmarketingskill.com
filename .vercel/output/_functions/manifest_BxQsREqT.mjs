import 'piccolore';
import { n as decodeKey } from './chunks/astro/server_DrUG3HW_.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_DXfHI9Wq.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_5DNykWv1.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/georgehartley/emailmarketingskill.com/","cacheDir":"file:///Users/georgehartley/emailmarketingskill.com/node_modules/.astro/","outDir":"file:///Users/georgehartley/emailmarketingskill.com/dist/","srcDir":"file:///Users/georgehartley/emailmarketingskill.com/src/","publicDir":"file:///Users/georgehartley/emailmarketingskill.com/public/","buildClientDir":"file:///Users/georgehartley/emailmarketingskill.com/dist/client/","buildServerDir":"file:///Users/georgehartley/emailmarketingskill.com/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/404","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/starlight/routes/static/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.B1D-nYk3.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.B1D-nYk3.js"}],"styles":[],"routeData":{"route":"/api/subscribe","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/subscribe\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"subscribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/subscribe.ts","pathname":"/api/subscribe","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://emailmarketingskill.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/routes/static/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/routes/static/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/routes/common.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/utils/routing/data.ts",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/utils/routing/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/utils/navigation.ts",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/SidebarPersister.astro",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/Sidebar.astro",{"propagation":"in-tree","containsHead":false}],["\u0000virtual:starlight/components/Sidebar",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/Page.astro",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/SidebarSublist.astro",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/utils/translations.ts",{"propagation":"in-tree","containsHead":false}],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/locals.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:middleware",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/subscribe@_@ts":"pages/api/subscribe.astro.mjs","\u0000@astro-page:node_modules/@astrojs/starlight/routes/static/index@_@astro":"pages/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BxQsREqT.mjs","/Users/georgehartley/emailmarketingskill.com/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/georgehartley/emailmarketingskill.com/.astro/content-modules.mjs":"chunks/content-modules_BLc6apii.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_5DvEHVQp.mjs","/Users/georgehartley/emailmarketingskill.com/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DAJzJ7E7.mjs","/Users/georgehartley/emailmarketingskill.com/src/content/docs/index.mdx?astroPropagatedAssets":"chunks/index_i6G4mEUF.mjs","/Users/georgehartley/emailmarketingskill.com/src/content/docs/index.mdx":"chunks/index_RbMJ8j_E.mjs","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts":"_astro/Page.astro_astro_type_script_index_0_lang.BHQeG8Vj.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts":"_astro/MobileMenuToggle.astro_astro_type_script_index_0_lang.CsfLbggW.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.hwBsy0Mo.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts":"_astro/LanguageSelect.astro_astro_type_script_index_0_lang.Ce-i7NLC.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeSelect.astro_astro_type_script_index_0_lang.Znk7Hhgg.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.D_Lfcn_I.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts":"_astro/Search.astro_astro_type_script_index_0_lang.cjYDvRdi.js","astro:scripts/page.js":"_astro/page.B1D-nYk3.js","/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts":"_astro/TableOfContents.astro_astro_type_script_index_0_lang.FuRcXuRY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts","const a=document.getElementById(\"starlight__sidebar\"),n=a?.querySelector(\"sl-sidebar-state-persist\"),o=\"sl-sidebar-state\",i=()=>{let t=[];const e=n?.dataset.hash||\"\";try{const s=sessionStorage.getItem(o),r=JSON.parse(s||\"{}\");Array.isArray(r.open)&&r.hash===e&&(t=r.open)}catch{}return{hash:e,open:t,scroll:a?.scrollTop||0}},c=t=>{try{sessionStorage.setItem(o,JSON.stringify(t))}catch{}},d=()=>c(i()),l=(t,e)=>{const s=i();s.open[e]=t,c(s)};n?.addEventListener(\"click\",t=>{if(!(t.target instanceof Element))return;const e=t.target.closest(\"summary\")?.closest(\"details\");if(!e)return;const s=e.querySelector(\"sl-sidebar-restore\"),r=parseInt(s?.dataset.index||\"\");isNaN(r)||l(!e.open,r)});addEventListener(\"visibilitychange\",()=>{document.visibilityState===\"hidden\"&&d()});addEventListener(\"pageHide\",d);"],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts","class s extends HTMLElement{constructor(){super(),this.btn=this.querySelector(\"button\"),this.btn.addEventListener(\"click\",()=>this.toggleExpanded());const t=this.closest(\"nav\");t&&t.addEventListener(\"keyup\",e=>this.closeOnEscape(e))}setExpanded(t){this.setAttribute(\"aria-expanded\",String(t)),document.body.toggleAttribute(\"data-mobile-menu-expanded\",t)}toggleExpanded(){this.setExpanded(this.getAttribute(\"aria-expanded\")!==\"true\")}closeOnEscape(t){t.code===\"Escape\"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define(\"starlight-menu-button\",s);"],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts","class s extends HTMLElement{constructor(){super();const e=this.querySelector(\"select\");e&&(e.addEventListener(\"change\",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)}),window.addEventListener(\"pageshow\",t=>{if(!t.persisted)return;const n=e.querySelector(\"option[selected]\")?.index;n!==e.selectedIndex&&(e.selectedIndex=n??0)}))}}customElements.define(\"starlight-lang-select\",s);"],["/Users/georgehartley/emailmarketingskill.com/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts","const r=\"starlight-theme\",o=e=>e===\"auto\"||e===\"dark\"||e===\"light\"?e:\"auto\",c=()=>o(typeof localStorage<\"u\"&&localStorage.getItem(r));function n(e){typeof localStorage<\"u\"&&localStorage.setItem(r,e===\"light\"||e===\"dark\"?e:\"\")}const l=()=>matchMedia(\"(prefers-color-scheme: light)\").matches?\"light\":\"dark\";function t(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e===\"auto\"?l():e,n(e)}matchMedia(\"(prefers-color-scheme: light)\").addEventListener(\"change\",()=>{c()===\"auto\"&&t(\"auto\")});class s extends HTMLElement{constructor(){super(),t(c()),this.querySelector(\"select\")?.addEventListener(\"change\",a=>{a.currentTarget instanceof HTMLSelectElement&&t(o(a.currentTarget.value))})}}customElements.define(\"starlight-theme-select\",s);"]],"assets":["/_astro/ec.v4551.css","/_astro/ec.0vx5m.js","/_astro/print.DNXP8c50.css","/_astro/index.JPuGpmUx.css","/favicon.svg","/_astro/MobileTableOfContents.astro_astro_type_script_index_0_lang.hwBsy0Mo.js","/_astro/Search.astro_astro_type_script_index_0_lang.cjYDvRdi.js","/_astro/TableOfContents.astro_astro_type_script_index_0_lang.FuRcXuRY.js","/_astro/page.B1D-nYk3.js","/_astro/ui-core.D_Lfcn_I.js","/_astro/page.B1D-nYk3.js","/404.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"bwXBRp+2qGv0T0NivgvmV8JrEfuhImDxHYXoCXa870k="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
