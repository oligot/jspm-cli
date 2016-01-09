SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  globalEvaluationScope: false,

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "builder": "github:systemjs/builder@0.15",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "clean-css": "npm:clean-css@3.4.9",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "css": "github:systemjs/plugin-css@0.1.20",
    "d3": "github:mbostock/d3@3.5.12",
    "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
    "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
    "ember": "github:components/ember@1.13.2",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "github": "github:jspm/github@0.17",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "jquery": "github:components/jquery@2.1.4",
    "jspm": "github:jspm/jspm-cli@0.17",
    "jspm-registry": "npm:jspm-registry@0.4.0",
    "mocha": "npm:mocha@2.3.4",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "npm": "github:jspm/npm@0.17",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
    "rsvp": "npm:rsvp@3.1.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "systemjs": "github:systemjs/systemjs@master",
    "text": "github:systemjs/plugin-text@0.0.2",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "traceur": "github:jmcriffey/bower-traceur@0.0.95",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.95",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "voxel-demo": "npm:voxel-demo@0.0.1",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },

  packages: {
    "github:jspm/github@0.17": {
      "map": {
        "bluebird": "npm:bluebird@3.1.1",
        "expand-tilde": "npm:expand-tilde@1.2.0",
        "graceful-fs": "npm:graceful-fs@3.0.8",
        "mkdirp": "npm:mkdirp@0.5.1",
        "netrc": "npm:netrc@0.1.4",
        "request": "npm:request@2.53.0",
        "rimraf": "npm:rimraf@2.3.4",
        "semver": "npm:semver@5.1.0",
        "tar": "npm:tar@2.2.1",
        "which": "npm:which@1.2.1"
      }
    },
    "github:jspm/jspm-cli@0.17": {
      "map": {
        "bluebird": "npm:bluebird@3.1.1",
        "chalk": "npm:chalk@1.1.1",
        "core-js": "npm:core-js@1.2.6",
        "glob": "npm:glob@6.0.3",
        "graceful-fs": "npm:graceful-fs@4.1.2",
        "jspm-github": "github:jspm/github@0.17",
        "jspm-npm": "github:jspm/npm@0.17",
        "jspm-registry": "npm:jspm-registry@0.4.0",
        "liftoff": "npm:liftoff@2.2.0",
        "minimatch": "npm:minimatch@3.0.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "ncp": "npm:ncp@2.0.0",
        "proper-lockfile": "npm:proper-lockfile@1.1.1",
        "request": "npm:request@2.67.0",
        "rimraf": "npm:rimraf@2.5.0",
        "semver": "npm:semver@5.1.0",
        "systemjs": "github:systemjs/systemjs@master",
        "systemjs-builder": "github:systemjs/builder@0.15",
        "traceur": "npm:traceur@0.0.95",
        "uglify-js": "npm:uglify-js@2.6.1"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.0.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.0.2"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.0"
      }
    },
    "github:jspm/nodelibs-punycode@0.2.0-alpha": {
      "map": {
        "punycode-browserify": "npm:punycode@1.3.2"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "github:jspm/npm@0.17": {
      "map": {
        "bluebird": "npm:bluebird@3.1.1",
        "graceful-fs": "npm:graceful-fs@3.0.8",
        "mkdirp": "npm:mkdirp@0.5.1",
        "readdirp": "npm:readdirp@2.0.0",
        "request": "npm:request@2.58.0",
        "rmdir": "npm:rmdir@1.1.0",
        "semver": "npm:semver@5.1.0",
        "tar": "npm:tar@1.0.3",
        "traceur": "npm:traceur@0.0.95",
        "which": "npm:which@1.2.1"
      }
    },
    "github:systemjs/builder@0.15": {
      "map": {
        "bluebird": "npm:bluebird@3.1.1",
        "es6-template-strings": "npm:es6-template-strings@2.0.0",
        "glob": "npm:glob@6.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rollup": "npm:rollup@0.24.0",
        "source-map": "npm:source-map@0.5.3",
        "systemjs": "github:systemjs/systemjs@master",
        "traceur": "npm:traceur@0.0.95",
        "uglify-js": "npm:uglify-js@2.6.1"
      }
    },
    "github:systemjs/systemjs@master": {
      "map": {
        "es6-module-loader": "npm:es6-module-loader@0.17.10",
        "when": "npm:when@3.7.7"
      }
    },
    "github:twbs/bootstrap@3.3.6": {
      "map": {
        "jquery": "github:components/jquery@2.1.4"
      }
    },
    "npm:align-text@0.1.3": {
      "map": {
        "kind-of": "npm:kind-of@2.0.1",
        "longest": "npm:longest@1.0.1",
        "repeat-string": "npm:repeat-string@1.5.2"
      }
    },
    "npm:ao-mesher@0.2.10": {
      "map": {
        "cwise-compiler": "npm:cwise-compiler@0.1.0",
        "greedy-mesher": "npm:greedy-mesher@1.0.2",
        "ndarray": "npm:ndarray@1.0.18",
        "typedarray-pool": "npm:typedarray-pool@0.1.2"
      }
    },
    "npm:ao-shader@0.2.3": {
      "map": {
        "brfs": "npm:brfs@0.0.9",
        "gl-shader": "npm:gl-shader@0.0.6"
      }
    },
    "npm:asn1.js@4.3.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:bl@0.9.4": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.33"
      }
    },
    "npm:bl@1.0.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.0.5"
      }
    },
    "npm:block-stream@0.0.8": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:brace-expansion@1.1.2": {
      "map": {
        "balanced-match": "npm:balanced-match@0.3.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:brfs@0.0.9": {
      "map": {
        "escodegen": "npm:escodegen@0.0.17",
        "falafel": "npm:falafel@0.1.6",
        "through": "npm:through@2.2.7"
      }
    },
    "npm:browserify-aes@1.0.5": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.5",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "randombytes": "npm:randombytes@2.0.1"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.0.2",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@1.0.33"
      }
    },
    "npm:buffer@4.0.0": {
      "map": {
        "base64-js": "npm:base64-js@0.0.8",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:center-align@0.1.2": {
      "map": {
        "align-text": "npm:align-text@0.1.3",
        "lazy-cache": "npm:lazy-cache@0.2.7"
      }
    },
    "npm:chalk@1.1.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.1.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.4",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.0",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:clean-css@3.4.9": {
      "map": {
        "commander": "npm:commander@2.8.1",
        "source-map": "npm:source-map@0.4.4"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "center-align": "npm:center-align@0.1.2",
        "right-align": "npm:right-align@0.1.3",
        "wordwrap": "npm:wordwrap@0.0.2"
      }
    },
    "npm:combined-stream@0.0.7": {
      "map": {
        "delayed-stream": "npm:delayed-stream@0.0.5"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:commander@2.8.1": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "elliptic": "npm:elliptic@6.0.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.0",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.1"
      }
    },
    "npm:cwise-compiler@0.0.0": {
      "map": {
        "uniq": "npm:uniq@0.0.2"
      }
    },
    "npm:cwise-compiler@0.1.0": {
      "map": {
        "uniq": "npm:uniq@0.0.2"
      }
    },
    "npm:cwise-parser@0.0.1": {
      "map": {
        "esprima": "npm:esprima@1.0.4",
        "uniq": "npm:uniq@0.0.2"
      }
    },
    "npm:cwise@0.3.4": {
      "map": {
        "cwise-compiler": "npm:cwise-compiler@0.0.0",
        "cwise-parser": "npm:cwise-parser@0.0.1"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:dashdash@1.12.0": {
      "map": {
        "assert-plus": "npm:assert-plus@0.1.5"
      }
    },
    "npm:decamelize@1.1.2": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.4"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.1"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:elliptic@6.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:es5-ext@0.10.11": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.0",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11",
        "es6-symbol": "npm:es6-symbol@3.0.2"
      }
    },
    "npm:es6-module-loader@0.17.10": {
      "map": {
        "when": "npm:when@3.7.7"
      }
    },
    "npm:es6-symbol@3.0.2": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:es6-template-strings@2.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.11",
        "esniff": "npm:esniff@1.0.0"
      }
    },
    "npm:escodegen@0.0.17": {
      "map": {
        "esprima": "npm:esprima@1.0.4",
        "estraverse": "npm:estraverse@0.0.4",
        "source-map": "npm:source-map@0.5.3"
      }
    },
    "npm:esniff@1.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.11"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:expand-tilde@1.2.0": {
      "map": {
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:falafel@0.1.6": {
      "map": {
        "esprima": "npm:esprima@1.0.4"
      }
    },
    "npm:findup-sync@0.3.0": {
      "map": {
        "glob": "npm:glob@5.0.15"
      }
    },
    "npm:form-data@0.2.0": {
      "map": {
        "async": "npm:async@0.9.2",
        "combined-stream": "npm:combined-stream@0.0.7",
        "mime-types": "npm:mime-types@2.0.14"
      }
    },
    "npm:form-data@1.0.0-rc3": {
      "map": {
        "async": "npm:async@1.5.2",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.9"
      }
    },
    "npm:fstream@1.0.8": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.2",
        "inherits": "npm:inherits@2.0.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.0"
      }
    },
    "npm:game-shell@0.1.4": {
      "map": {
        "domready": "npm:domready@0.2.13",
        "invert-hash": "npm:invert-hash@0.0.0",
        "iota-array": "npm:iota-array@0.0.1",
        "lower-bound": "npm:lower-bound@0.0.3",
        "uniq": "npm:uniq@0.0.2",
        "vkey": "npm:vkey@0.0.3"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:gl-buffer@0.1.2": {
      "map": {
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-ops": "npm:ndarray-ops@1.1.1",
        "typedarray-pool": "npm:typedarray-pool@0.1.2"
      }
    },
    "npm:gl-now@0.0.4": {
      "map": {
        "game-shell": "npm:game-shell@0.1.4",
        "webglew": "npm:webglew@0.0.0"
      }
    },
    "npm:gl-shader@0.0.6": {
      "map": {
        "glsl-exports": "npm:glsl-exports@0.0.0",
        "uniq": "npm:uniq@0.0.2"
      }
    },
    "npm:gl-texture2d@0.1.12": {
      "map": {
        "bit-twiddle": "npm:bit-twiddle@0.0.2",
        "cwise-compiler": "npm:cwise-compiler@0.1.0",
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-ops": "npm:ndarray-ops@1.1.1",
        "typedarray-pool": "npm:typedarray-pool@1.1.0",
        "webglew": "npm:webglew@0.0.0"
      }
    },
    "npm:gl-tile-map@0.3.0": {
      "map": {
        "gl-texture2d": "npm:gl-texture2d@0.1.12",
        "ndarray": "npm:ndarray@1.0.18",
        "tile-mip-map": "npm:tile-mip-map@0.2.1",
        "webglew": "npm:webglew@0.0.0"
      }
    },
    "npm:gl-vao@0.0.3": {
      "map": {
        "webglew": "npm:webglew@0.0.0"
      }
    },
    "npm:glob@4.3.5": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@2.0.10",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:glob@4.5.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@2.0.10",
        "once": "npm:once@1.3.3"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:glob@6.0.3": {
      "map": {
        "inflight": "npm:inflight@1.0.4",
        "inherits": "npm:inherits@2.0.1",
        "minimatch": "npm:minimatch@3.0.0",
        "once": "npm:once@1.3.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0"
      }
    },
    "npm:glsl-exports@0.0.0": {
      "map": {
        "glsl-parser": "npm:glsl-parser@0.0.9",
        "glsl-tokenizer": "npm:glsl-tokenizer@0.0.9",
        "through": "npm:through@2.3.8"
      }
    },
    "npm:glsl-parser@0.0.9": {
      "map": {
        "glsl-tokenizer": "npm:glsl-tokenizer@0.0.9",
        "through": "npm:through@1.1.2"
      }
    },
    "npm:glsl-tokenizer@0.0.9": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:greedy-mesher@1.0.2": {
      "map": {
        "iota-array": "npm:iota-array@1.0.0",
        "typedarray-pool": "npm:typedarray-pool@1.1.0",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:har-validator@1.8.0": {
      "map": {
        "bluebird": "npm:bluebird@2.10.2",
        "chalk": "npm:chalk@1.1.1",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.12.3"
      }
    },
    "npm:har-validator@2.0.3": {
      "map": {
        "chalk": "npm:chalk@1.1.1",
        "commander": "npm:commander@2.9.0",
        "is-my-json-valid": "npm:is-my-json-valid@2.12.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:hawk@2.3.1": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9"
      }
    },
    "npm:hawk@3.1.2": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9"
      }
    },
    "npm:http-signature@0.10.1": {
      "map": {
        "asn1": "npm:asn1@0.1.11",
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3"
      }
    },
    "npm:http-signature@0.11.0": {
      "map": {
        "asn1": "npm:asn1@0.1.11",
        "assert-plus": "npm:assert-plus@0.1.5",
        "ctype": "npm:ctype@0.5.3"
      }
    },
    "npm:http-signature@1.1.0": {
      "map": {
        "assert-plus": "npm:assert-plus@0.1.5",
        "jsprim": "npm:jsprim@1.2.2",
        "sshpk": "npm:sshpk@1.7.2"
      }
    },
    "npm:inflight@1.0.4": {
      "map": {
        "once": "npm:once@1.3.3",
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:is-absolute@0.1.7": {
      "map": {
        "is-relative": "npm:is-relative@0.1.3"
      }
    },
    "npm:is-my-json-valid@2.12.3": {
      "map": {
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@2.0.0",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jspm-registry@0.4.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@3.0.8",
        "rimraf": "npm:rimraf@2.3.4",
        "rsvp": "npm:rsvp@3.1.0",
        "semver": "npm:semver@4.3.6"
      }
    },
    "npm:jsprim@1.2.2": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2",
        "json-schema": "npm:json-schema@0.2.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:kind-of@2.0.1": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.1"
      }
    },
    "npm:liftoff@2.2.0": {
      "map": {
        "extend": "npm:extend@2.0.1",
        "findup-sync": "npm:findup-sync@0.3.0",
        "flagged-respawn": "npm:flagged-respawn@0.3.1",
        "rechoir": "npm:rechoir@0.6.2",
        "resolve": "npm:resolve@1.1.6"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-types@2.0.14": {
      "map": {
        "mime-db": "npm:mime-db@1.12.0"
      }
    },
    "npm:mime-types@2.1.9": {
      "map": {
        "mime-db": "npm:mime-db@1.21.0"
      }
    },
    "npm:minimatch@2.0.10": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.2"
      }
    },
    "npm:minimatch@3.0.0": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.2"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:mocha@2.3.4": {
      "map": {
        "css": "github:systemjs/plugin-css@0.1.20"
      }
    },
    "npm:ndarray-downsample2x@0.1.1": {
      "map": {
        "cwise": "npm:cwise@0.3.4",
        "ndarray-fft": "npm:ndarray-fft@0.1.0",
        "ndarray-ops": "npm:ndarray-ops@1.1.1",
        "ndarray-scratch": "npm:ndarray-scratch@0.0.1"
      }
    },
    "npm:ndarray-fft@0.1.0": {
      "map": {
        "bit-twiddle": "npm:bit-twiddle@0.0.2",
        "cwise": "npm:cwise@0.3.4",
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-ops": "npm:ndarray-ops@1.1.1",
        "typedarray-pool": "npm:typedarray-pool@0.1.2"
      }
    },
    "npm:ndarray-fill@0.1.0": {
      "map": {
        "cwise": "npm:cwise@0.3.4"
      }
    },
    "npm:ndarray-ops@1.1.1": {
      "map": {
        "cwise-compiler": "npm:cwise-compiler@0.0.0"
      }
    },
    "npm:ndarray-scratch@0.0.1": {
      "map": {
        "ndarray": "npm:ndarray@1.0.18",
        "typedarray-pool": "npm:typedarray-pool@0.1.2"
      }
    },
    "npm:ndarray@1.0.18": {
      "map": {
        "iota-array": "npm:iota-array@1.0.0",
        "is-buffer": "npm:is-buffer@1.1.1"
      }
    },
    "npm:node.extend@1.0.8": {
      "map": {
        "is": "npm:is@0.2.7",
        "object-keys": "npm:object-keys@0.4.0"
      }
    },
    "npm:node.flow@1.2.3": {
      "map": {
        "node.extend": "npm:node.extend@1.0.8"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.1"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.3.0",
        "browserify-aes": "npm:browserify-aes@1.0.5",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:pinkie-promise@2.0.0": {
      "map": {
        "pinkie": "npm:pinkie@2.0.1"
      }
    },
    "npm:proper-lockfile@1.1.1": {
      "map": {
        "err-code": "npm:err-code@1.0.0",
        "extend": "npm:extend@3.0.0",
        "graceful-fs": "npm:graceful-fs@4.1.2",
        "retry": "npm:retry@0.8.0"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.6.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.1"
      }
    },
    "npm:readable-stream@1.0.33": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.0.5": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:readdirp@2.0.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.2",
        "minimatch": "npm:minimatch@2.0.10",
        "readable-stream": "npm:readable-stream@2.0.5"
      }
    },
    "npm:rechoir@0.6.2": {
      "map": {
        "resolve": "npm:resolve@1.1.6"
      }
    },
    "npm:request@2.53.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.5.0",
        "bl": "npm:bl@0.9.4",
        "caseless": "npm:caseless@0.9.0",
        "combined-stream": "npm:combined-stream@0.0.7",
        "forever-agent": "npm:forever-agent@0.5.2",
        "form-data": "npm:form-data@0.2.0",
        "hawk": "npm:hawk@2.3.1",
        "http-signature": "npm:http-signature@0.10.1",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.0.14",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.6.0",
        "qs": "npm:qs@2.3.3",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.1",
        "tunnel-agent": "npm:tunnel-agent@0.4.2"
      }
    },
    "npm:request@2.58.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.5.0",
        "bl": "npm:bl@0.9.4",
        "caseless": "npm:caseless@0.10.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@2.0.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc3",
        "har-validator": "npm:har-validator@1.8.0",
        "hawk": "npm:hawk@2.3.1",
        "http-signature": "npm:http-signature@0.11.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.0.14",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.0",
        "qs": "npm:qs@3.1.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.1",
        "tunnel-agent": "npm:tunnel-agent@0.4.2"
      }
    },
    "npm:request@2.67.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "bl": "npm:bl@1.0.0",
        "caseless": "npm:caseless@0.11.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@1.0.0-rc3",
        "har-validator": "npm:har-validator@2.0.3",
        "hawk": "npm:hawk@3.1.2",
        "http-signature": "npm:http-signature@1.1.0",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.9",
        "node-uuid": "npm:node-uuid@1.4.7",
        "oauth-sign": "npm:oauth-sign@0.8.0",
        "qs": "npm:qs@5.2.0",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.2.1",
        "tunnel-agent": "npm:tunnel-agent@0.4.2"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.3"
      }
    },
    "npm:rimraf@2.3.4": {
      "map": {
        "glob": "npm:glob@4.5.3"
      }
    },
    "npm:rimraf@2.5.0": {
      "map": {
        "glob": "npm:glob@6.0.3"
      }
    },
    "npm:rmdir@1.1.0": {
      "map": {
        "node.flow": "npm:node.flow@1.2.3"
      }
    },
    "npm:rollup@0.24.0": {
      "map": {
        "chalk": "npm:chalk@1.1.1",
        "minimist": "npm:minimist@1.2.0",
        "source-map-support": "npm:source-map-support@0.3.3"
      }
    },
    "npm:sha.js@2.4.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map-support@0.3.3": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.4.4": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:sshpk@1.7.2": {
      "map": {
        "asn1": "npm:asn1@0.2.3",
        "assert-plus": "npm:assert-plus@0.2.0",
        "dashdash": "npm:dashdash@1.12.0",
        "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
        "jodid25519": "npm:jodid25519@1.0.2",
        "jsbn": "npm:jsbn@0.1.0",
        "tweetnacl": "npm:tweetnacl@0.13.3"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.33"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.0.5"
      }
    },
    "npm:stream-http@2.0.2": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:strip-ansi@3.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:tar@1.0.3": {
      "map": {
        "block-stream": "npm:block-stream@0.0.8",
        "fstream": "npm:fstream@1.0.8",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "block-stream": "npm:block-stream@0.0.8",
        "fstream": "npm:fstream@1.0.8",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:tile-mip-map@0.2.1": {
      "map": {
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-downsample2x": "npm:ndarray-downsample2x@0.1.1",
        "ndarray-ops": "npm:ndarray-ops@1.1.1"
      }
    },
    "npm:traceur@0.0.95": {
      "map": {
        "commander": "npm:commander@2.6.0",
        "glob": "npm:glob@4.3.5",
        "rsvp": "npm:rsvp@3.1.0",
        "semver": "npm:semver@2.3.2",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:typedarray-pool@0.1.2": {
      "map": {
        "bit-twiddle": "npm:bit-twiddle@0.0.2",
        "dup": "npm:dup@0.0.0"
      }
    },
    "npm:typedarray-pool@1.1.0": {
      "map": {
        "bit-twiddle": "npm:bit-twiddle@1.0.2",
        "dup": "npm:dup@1.0.0"
      }
    },
    "npm:uglify-js@2.6.1": {
      "map": {
        "async": "npm:async@0.2.10",
        "source-map": "npm:source-map@0.5.3",
        "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
        "yargs": "npm:yargs@3.10.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:voxel-demo@0.0.1": {
      "map": {
        "ao-mesher": "npm:ao-mesher@0.2.10",
        "ao-shader": "npm:ao-shader@0.2.3",
        "gl-buffer": "npm:gl-buffer@0.1.2",
        "gl-matrix": "npm:gl-matrix@2.0.0",
        "gl-now": "npm:gl-now@0.0.4",
        "gl-shader": "npm:gl-shader@0.0.6",
        "gl-tile-map": "npm:gl-tile-map@0.3.0",
        "gl-vao": "npm:gl-vao@0.0.3",
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-fill": "npm:ndarray-fill@0.1.0",
        "ndarray-ops": "npm:ndarray-ops@1.1.1"
      }
    },
    "npm:which@1.2.1": {
      "map": {
        "is-absolute": "npm:is-absolute@0.1.7"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@2.1.0",
        "decamelize": "npm:decamelize@1.1.2",
        "window-size": "npm:window-size@0.1.0"
      }
    }
  }
});