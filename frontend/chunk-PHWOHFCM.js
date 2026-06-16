import {
  MatDivider
} from "./chunk-GWDTIECY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-2LYLMMA2.js";
import {
  ConfirmationDialogComponent
} from "./chunk-SOPE5OMF.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef
} from "./chunk-EDA7LVKI.js";
import {
  CommonHttpModule
} from "./chunk-RW2EUPUP.js";
import {
  CdkTextareaAutosize,
  MatFormField,
  MatLabel,
  TextFieldModule
} from "./chunk-ECWSDFUO.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-7AWYGOUC.js";
import {
  MatSnackBarModule,
  SnackbarService
} from "./chunk-UXPMPTRZ.js";
import {
  LoaderService
} from "./chunk-3T2C4MET.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  MatButtonModule,
  MatIconButton,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-56DUDJD6.js";
import {
  MatOption
} from "./chunk-BAX6ITZM.js";
import {
  DomSanitizer
} from "./chunk-K7GFJLXC.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  catchError,
  forkJoin,
  from,
  inject,
  map,
  mergeMap,
  of,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7YW2NURN.js";
import {
  __async,
  __commonJS,
  __toESM
} from "./chunk-KBUIKKCC.js";

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    "use strict";
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1) validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    "use strict";
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// (disabled):node_modules/buffer/index.js
var require_buffer = __commonJS({
  "(disabled):node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        var proto = {
          foo: function() {
            return 42;
          }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer.isBuffer(this)) return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer.isBuffer(this)) return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf;
    }
    function Buffer(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from2(arg, encodingOrOffset, length);
    }
    Buffer.poolSize = 8192;
    function from2(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b) return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer.from = function(value, encodingOrOffset, length) {
      return from2(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer.alloc(+length);
    }
    Buffer.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer.prototype;
    };
    Buffer.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b) return 0;
      var x = a.length;
      var y = b.length;
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    Buffer.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer.alloc(0);
      }
      var i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            Buffer.from(buf).copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      var len = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0) return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding) encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer.prototype.swap16 = function swap16() {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer.prototype.swap32 = function swap32() {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer.prototype.swap64 = function swap64() {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0) return "";
      if (arguments.length === 0) return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer.prototype.toLocaleString = Buffer.prototype.toString;
    Buffer.prototype.equals = function equals(b) {
      if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
      if (this === b) return true;
      return Buffer.compare(this, b) === 0;
    };
    Buffer.prototype.inspect = function inspect() {
      var str = "";
      var max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max) str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
    }
    Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target) return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y) return -1;
      if (y < x) return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0) return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
      }
      if (typeof val === "string") {
        val = Buffer.from(val, encoding);
      }
      if (Buffer.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found) return i;
        }
      }
      return -1;
    }
    Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0) encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining) length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding) encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len = buf.length;
      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;
      var out = "";
      for (var i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer.prototype.slice = function slice(start, end) {
      var len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start) end = start;
      var newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
      if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      var val = this[offset + --byteLength2];
      var mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) checkOffset(offset, byteLength2, this.length);
      var i = byteLength2;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul) val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128)) return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
    }
    Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var mul = 1;
      var i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      var i = byteLength2 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
      if (value < 0) value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0) value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError("Index out of range");
      if (offset < 0) throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer.isBuffer(target)) throw new TypeError("argument should be a Buffer");
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;
      if (end === start) return 0;
      if (target.length === 0 || this.length === 0) return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length) throw new RangeError("Index out of range");
      if (end < 0) throw new RangeError("sourceEnd out of bounds");
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
      }
      return len;
    };
    Buffer.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val) val = 0;
      var i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2) return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1) bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0) break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0) break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0) break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0) break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      var alphabet = "0123456789abcdef";
      var table = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var i16 = i * 16;
        for (var j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
  }
});

// node_modules/js-md5/src/md5.js
var require_md5 = __commonJS({
  "node_modules/js-md5/src/md5.js"(exports, module) {
    "use strict";
    (function() {
      "use strict";
      var INPUT_ERROR = "input is invalid type";
      var FINALIZE_ERROR = "finalize already called";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_MD5_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [128, 32768, 8388608, -2147483648];
      var SHIFT = [0, 8, 16, 24];
      var OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"];
      var BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
      var blocks = [], buffer8;
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        buffer8 = new Uint8Array(buffer);
        blocks = new Uint32Array(buffer);
      }
      var isArray = Array.isArray;
      if (root.JS_MD5_NO_NODE_JS || !isArray) {
        isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      var isView = ArrayBuffer.isView;
      if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !isView)) {
        isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var formatMessage = function(message) {
        var type = typeof message;
        if (type === "string") {
          return [message, true];
        }
        if (type !== "object" || message === null) {
          throw new Error(INPUT_ERROR);
        }
        if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          return [new Uint8Array(message), false];
        }
        if (!isArray(message) && !isView(message)) {
          throw new Error(INPUT_ERROR);
        }
        return [message, false];
      };
      var createOutputMethod = function(outputType) {
        return function(message) {
          return new Md5(true).update(message)[outputType]();
        };
      };
      var createMethod = function() {
        var method = createOutputMethod("hex");
        if (NODE_JS) {
          method = nodeWrap(method);
        }
        method.create = function() {
          return new Md5();
        };
        method.update = function(message) {
          return method.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createOutputMethod(type);
        }
        return method;
      };
      var nodeWrap = function(method) {
        var crypto = require_crypto();
        var Buffer = require_buffer().Buffer;
        var bufferFrom;
        if (Buffer.from && !root.JS_MD5_NO_BUFFER_FROM) {
          bufferFrom = Buffer.from;
        } else {
          bufferFrom = function(message) {
            return new Buffer(message);
          };
        }
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash("md5").update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw new Error(INPUT_ERROR);
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (isArray(message) || isView(message) || message.constructor === Buffer) {
            return crypto.createHash("md5").update(bufferFrom(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType) {
        return function(key, message) {
          return new HmacMd5(key, true).update(message)[outputType]();
        };
      };
      var createHmacMethod = function() {
        var method = createHmacOutputMethod("hex");
        method.create = function(key) {
          return new HmacMd5(key);
        };
        method.update = function(key, message) {
          return method.create(key).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method[type] = createHmacOutputMethod(type);
        }
        return method;
      };
      function Md5(sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
          this.buffer8 = buffer8;
        } else {
          if (ARRAY_BUFFER) {
            var buffer2 = new ArrayBuffer(68);
            this.buffer8 = new Uint8Array(buffer2);
            this.blocks = new Uint32Array(buffer2);
          } else {
            this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          }
        }
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
      }
      Md5.prototype.update = function(message) {
        if (this.finalized) {
          throw new Error(FINALIZE_ERROR);
        }
        var result = formatMessage(message);
        message = result[0];
        var isString = result[1];
        var code, index = 0, i, length = message.length, blocks2 = this.blocks;
        var buffer82 = this.buffer8;
        while (index < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = blocks2[16];
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (isString) {
            if (ARRAY_BUFFER) {
              for (i = this.start; index < length && i < 64; ++index) {
                code = message.charCodeAt(index);
                if (code < 128) {
                  buffer82[i++] = code;
                } else if (code < 2048) {
                  buffer82[i++] = 192 | code >>> 6;
                  buffer82[i++] = 128 | code & 63;
                } else if (code < 55296 || code >= 57344) {
                  buffer82[i++] = 224 | code >>> 12;
                  buffer82[i++] = 128 | code >>> 6 & 63;
                  buffer82[i++] = 128 | code & 63;
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                  buffer82[i++] = 240 | code >>> 18;
                  buffer82[i++] = 128 | code >>> 12 & 63;
                  buffer82[i++] = 128 | code >>> 6 & 63;
                  buffer82[i++] = 128 | code & 63;
                }
              }
            } else {
              for (i = this.start; index < length && i < 64; ++index) {
                code = message.charCodeAt(index);
                if (code < 128) {
                  blocks2[i >>> 2] |= code << SHIFT[i++ & 3];
                } else if (code < 2048) {
                  blocks2[i >>> 2] |= (192 | code >>> 6) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else if (code < 55296 || code >= 57344) {
                  blocks2[i >>> 2] |= (224 | code >>> 12) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                } else {
                  code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index) & 1023);
                  blocks2[i >>> 2] |= (240 | code >>> 18) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code >>> 12 & 63) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code >>> 6 & 63) << SHIFT[i++ & 3];
                  blocks2[i >>> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
                }
              }
            }
          } else {
            if (ARRAY_BUFFER) {
              for (i = this.start; index < length && i < 64; ++index) {
                buffer82[i++] = message[index];
              }
            } else {
              for (i = this.start; index < length && i < 64; ++index) {
                blocks2[i >>> 2] |= message[index] << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Md5.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[i >>> 2] |= EXTRA[i & 3];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = blocks2[16];
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.bytes << 3;
        blocks2[15] = this.hBytes << 3 | this.bytes >>> 29;
        this.hash();
      };
      Md5.prototype.hash = function() {
        var a, b, c, d, bc, da, blocks2 = this.blocks;
        if (this.first) {
          a = blocks2[0] - 680876937;
          a = (a << 7 | a >>> 25) - 271733879 << 0;
          d = (-1732584194 ^ a & 2004318071) + blocks2[1] - 117830708;
          d = (d << 12 | d >>> 20) + a << 0;
          c = (-271733879 ^ d & (a ^ -271733879)) + blocks2[2] - 1126478375;
          c = (c << 17 | c >>> 15) + d << 0;
          b = (a ^ c & (d ^ a)) + blocks2[3] - 1316259209;
          b = (b << 22 | b >>> 10) + c << 0;
        } else {
          a = this.h0;
          b = this.h1;
          c = this.h2;
          d = this.h3;
          a += (d ^ b & (c ^ d)) + blocks2[0] - 680876936;
          a = (a << 7 | a >>> 25) + b << 0;
          d += (c ^ a & (b ^ c)) + blocks2[1] - 389564586;
          d = (d << 12 | d >>> 20) + a << 0;
          c += (b ^ d & (a ^ b)) + blocks2[2] + 606105819;
          c = (c << 17 | c >>> 15) + d << 0;
          b += (a ^ c & (d ^ a)) + blocks2[3] - 1044525330;
          b = (b << 22 | b >>> 10) + c << 0;
        }
        a += (d ^ b & (c ^ d)) + blocks2[4] - 176418897;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[5] + 1200080426;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[6] - 1473231341;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[7] - 45705983;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (d ^ b & (c ^ d)) + blocks2[8] + 1770035416;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[9] - 1958414417;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[10] - 42063;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[11] - 1990404162;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (d ^ b & (c ^ d)) + blocks2[12] + 1804603682;
        a = (a << 7 | a >>> 25) + b << 0;
        d += (c ^ a & (b ^ c)) + blocks2[13] - 40341101;
        d = (d << 12 | d >>> 20) + a << 0;
        c += (b ^ d & (a ^ b)) + blocks2[14] - 1502002290;
        c = (c << 17 | c >>> 15) + d << 0;
        b += (a ^ c & (d ^ a)) + blocks2[15] + 1236535329;
        b = (b << 22 | b >>> 10) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[1] - 165796510;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[6] - 1069501632;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[11] + 643717713;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[0] - 373897302;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[5] - 701558691;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[10] + 38016083;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[15] - 660478335;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[4] - 405537848;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[9] + 568446438;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[14] - 1019803690;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[3] - 187363961;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[8] + 1163531501;
        b = (b << 20 | b >>> 12) + c << 0;
        a += (c ^ d & (b ^ c)) + blocks2[13] - 1444681467;
        a = (a << 5 | a >>> 27) + b << 0;
        d += (b ^ c & (a ^ b)) + blocks2[2] - 51403784;
        d = (d << 9 | d >>> 23) + a << 0;
        c += (a ^ b & (d ^ a)) + blocks2[7] + 1735328473;
        c = (c << 14 | c >>> 18) + d << 0;
        b += (d ^ a & (c ^ d)) + blocks2[12] - 1926607734;
        b = (b << 20 | b >>> 12) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[5] - 378558;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[8] - 2022574463;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[11] + 1839030562;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[14] - 35309556;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[1] - 1530992060;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[4] + 1272893353;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[7] - 155497632;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[10] - 1094730640;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[13] + 681279174;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[0] - 358537222;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[3] - 722521979;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[6] + 76029189;
        b = (b << 23 | b >>> 9) + c << 0;
        bc = b ^ c;
        a += (bc ^ d) + blocks2[9] - 640364487;
        a = (a << 4 | a >>> 28) + b << 0;
        d += (bc ^ a) + blocks2[12] - 421815835;
        d = (d << 11 | d >>> 21) + a << 0;
        da = d ^ a;
        c += (da ^ b) + blocks2[15] + 530742520;
        c = (c << 16 | c >>> 16) + d << 0;
        b += (da ^ c) + blocks2[2] - 995338651;
        b = (b << 23 | b >>> 9) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[0] - 198630844;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[7] + 1126891415;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[14] - 1416354905;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[5] - 57434055;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[12] + 1700485571;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[3] - 1894986606;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[10] - 1051523;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[1] - 2054922799;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[8] + 1873313359;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[15] - 30611744;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[6] - 1560198380;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[13] + 1309151649;
        b = (b << 21 | b >>> 11) + c << 0;
        a += (c ^ (b | ~d)) + blocks2[4] - 145523070;
        a = (a << 6 | a >>> 26) + b << 0;
        d += (b ^ (a | ~c)) + blocks2[11] - 1120210379;
        d = (d << 10 | d >>> 22) + a << 0;
        c += (a ^ (d | ~b)) + blocks2[2] + 718787259;
        c = (c << 15 | c >>> 17) + d << 0;
        b += (d ^ (c | ~a)) + blocks2[9] - 343485551;
        b = (b << 21 | b >>> 11) + c << 0;
        if (this.first) {
          this.h0 = a + 1732584193 << 0;
          this.h1 = b - 271733879 << 0;
          this.h2 = c - 1732584194 << 0;
          this.h3 = d + 271733878 << 0;
          this.first = false;
        } else {
          this.h0 = this.h0 + a << 0;
          this.h1 = this.h1 + b << 0;
          this.h2 = this.h2 + c << 0;
          this.h3 = this.h3 + d << 0;
        }
      };
      Md5.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        return HEX_CHARS[h0 >>> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h0 >>> 12 & 15] + HEX_CHARS[h0 >>> 8 & 15] + HEX_CHARS[h0 >>> 20 & 15] + HEX_CHARS[h0 >>> 16 & 15] + HEX_CHARS[h0 >>> 28 & 15] + HEX_CHARS[h0 >>> 24 & 15] + HEX_CHARS[h1 >>> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h1 >>> 12 & 15] + HEX_CHARS[h1 >>> 8 & 15] + HEX_CHARS[h1 >>> 20 & 15] + HEX_CHARS[h1 >>> 16 & 15] + HEX_CHARS[h1 >>> 28 & 15] + HEX_CHARS[h1 >>> 24 & 15] + HEX_CHARS[h2 >>> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h2 >>> 12 & 15] + HEX_CHARS[h2 >>> 8 & 15] + HEX_CHARS[h2 >>> 20 & 15] + HEX_CHARS[h2 >>> 16 & 15] + HEX_CHARS[h2 >>> 28 & 15] + HEX_CHARS[h2 >>> 24 & 15] + HEX_CHARS[h3 >>> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h3 >>> 12 & 15] + HEX_CHARS[h3 >>> 8 & 15] + HEX_CHARS[h3 >>> 20 & 15] + HEX_CHARS[h3 >>> 16 & 15] + HEX_CHARS[h3 >>> 28 & 15] + HEX_CHARS[h3 >>> 24 & 15];
      };
      Md5.prototype.toString = Md5.prototype.hex;
      Md5.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3;
        return [h0 & 255, h0 >>> 8 & 255, h0 >>> 16 & 255, h0 >>> 24 & 255, h1 & 255, h1 >>> 8 & 255, h1 >>> 16 & 255, h1 >>> 24 & 255, h2 & 255, h2 >>> 8 & 255, h2 >>> 16 & 255, h2 >>> 24 & 255, h3 & 255, h3 >>> 8 & 255, h3 >>> 16 & 255, h3 >>> 24 & 255];
      };
      Md5.prototype.array = Md5.prototype.digest;
      Md5.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer2 = new ArrayBuffer(16);
        var blocks2 = new Uint32Array(buffer2);
        blocks2[0] = this.h0;
        blocks2[1] = this.h1;
        blocks2[2] = this.h2;
        blocks2[3] = this.h3;
        return buffer2;
      };
      Md5.prototype.buffer = Md5.prototype.arrayBuffer;
      Md5.prototype.base64 = function() {
        var v1, v2, v3, base64Str = "", bytes = this.array();
        for (var i = 0; i < 15; ) {
          v1 = bytes[i++];
          v2 = bytes[i++];
          v3 = bytes[i++];
          base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
        }
        v1 = bytes[i];
        base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + "==";
        return base64Str;
      };
      function HmacMd5(key, sharedMemory) {
        var i, result = formatMessage(key);
        key = result[0];
        if (result[1]) {
          var bytes = [], length = key.length, index = 0, code;
          for (i = 0; i < length; ++i) {
            code = key.charCodeAt(i);
            if (code < 128) {
              bytes[index++] = code;
            } else if (code < 2048) {
              bytes[index++] = 192 | code >>> 6;
              bytes[index++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index++] = 224 | code >>> 12;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key.charCodeAt(++i) & 1023);
              bytes[index++] = 240 | code >>> 18;
              bytes[index++] = 128 | code >>> 12 & 63;
              bytes[index++] = 128 | code >>> 6 & 63;
              bytes[index++] = 128 | code & 63;
            }
          }
          key = bytes;
        }
        if (key.length > 64) {
          key = new Md5(true).update(key).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Md5.call(this, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacMd5.prototype = new Md5();
      HmacMd5.prototype.finalize = function() {
        Md5.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Md5.call(this, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Md5.prototype.finalize.call(this);
        }
      };
      var exports2 = createMethod();
      exports2.md5 = exports2;
      exports2.md5.hmac = createHmacMethod();
      if (COMMON_JS) {
        module.exports = exports2;
      } else {
        root.md5 = exports2;
        if (AMD) {
          define(function() {
            return exports2;
          });
        }
      }
    })();
  }
});

// node_modules/file-saver/dist/FileSaver.min.js
var require_FileSaver_min = __commonJS({
  "node_modules/file-saver/dist/FileSaver.min.js"(exports, module) {
    "use strict";
    (function(a, b) {
      if ("function" == typeof define && define.amd) define([], b);
      else if ("undefined" != typeof exports) b();
      else {
        b(), a.FileSaver = {
          exports: {}
        }.exports;
      }
    })(exports, function() {
      "use strict";
      function b(a2, b2) {
        return "undefined" == typeof b2 ? b2 = {
          autoBom: false
        } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = {
          autoBom: !b2
        }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], {
          type: a2.type
        }) : a2;
      }
      function c(a2, b2, c2) {
        var d2 = new XMLHttpRequest();
        d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
          g(d2.response, b2, c2);
        }, d2.onerror = function() {
          console.error("could not download file");
        }, d2.send();
      }
      function d(a2) {
        var b2 = new XMLHttpRequest();
        b2.open("HEAD", a2, false);
        try {
          b2.send();
        } catch (a3) {
        }
        return 200 <= b2.status && 299 >= b2.status;
      }
      function e(a2) {
        try {
          a2.dispatchEvent(new MouseEvent("click"));
        } catch (c2) {
          var b2 = document.createEvent("MouseEvents");
          b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
        }
      }
      var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof global && global.global === global ? global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
      } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
          i.revokeObjectURL(j.href);
        }, 4e4), setTimeout(function() {
          e(j);
        }, 0));
      } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
        if (g2 = g2 || f2.name || "download", "string" != typeof f2) navigator.msSaveOrOpenBlob(b(f2, h), g2);
        else if (d(f2)) c(f2, g2, h);
        else {
          var i = document.createElement("a");
          i.href = f2, i.target = "_blank", setTimeout(function() {
            e(i);
          });
        }
      } : function(b2, d2, e2, g2) {
        if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2) return c(b2, d2, e2);
        var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
          var k = new FileReader();
          k.onloadend = function() {
            var a2 = k.result;
            a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
          }, k.readAsDataURL(b2);
        } else {
          var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
          g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
            l.revokeObjectURL(m);
          }, 4e4);
        }
      });
      f.saveAs = g.saveAs = g, "undefined" != typeof module && (module.exports = g);
    });
  }
});

// src/app/components/file-upload/file-upload.service.ts
var FileUploadService = class _FileUploadService {
  http;
  constructor(http) {
    this.http = http;
  }
  getPresignedUrl(data) {
    return this.http.post("file_upload", data).pipe(map((response) => {
      return response;
    }));
  }
  uploadImageToS3(presignedUrl, file) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", file.type);
    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: file,
      redirect: "follow"
    };
    const uploadFile = fetch(presignedUrl, requestOptions).then((response) => {
      if (!response.ok) {
        throw new Error("Upload failed: " + response.statusText);
      }
      if (response.status === 200) {
        return response.text();
      }
      return null;
    }).then((text) => {
      if (text) {
        try {
          return JSON.parse(text);
        } catch (error) {
          console.error("Failed to parse JSON from response:", error);
          return null;
        }
      }
      return null;
    }).catch((error) => {
      throw error;
    });
    return from(uploadFile);
  }
  fileUploadToDb(data) {
    return this.http.post("file_upload_save", data).pipe(map((response) => {
      return response;
    }));
  }
  fileDataFromDb(data) {
    return this.http.post("list_of_uploaded_files", data).pipe(map((response) => {
      return response;
    }));
  }
  deleteFileFromDb(fileId) {
    return this.http.delete(`file_delete/${fileId}`, {}).pipe(map((response) => {
      return response;
    }));
  }
  downloadReport(data, disbursement_id) {
    return this.http.postForReport("report_generation", data, { responseType: "blob" }).pipe(map((response) => {
      const fileURL = URL.createObjectURL(response);
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = `${disbursement_id}_${data.report_type}.pdf`;
      link.click();
      URL.revokeObjectURL(fileURL);
      return response;
    }), catchError((error) => {
      if (error?.error instanceof Blob) {
        return from(error.error.text()).pipe(mergeMap((errorText) => {
          let errMsg2 = "Something went wrong. Please try again later.";
          try {
            const errorJson = JSON.parse(errorText);
            errMsg2 = errorJson?.error || errorJson?.details || errMsg2;
          } catch (e) {
            console.error("Error parsing blob response:", e);
          }
          return throwError(() => new Error(errMsg2));
        }));
      }
      const errMsg = error?.error?.error || error?.error?.details || error?.message || "Something went wrong. Please try again later.";
      return throwError(() => new Error(errMsg));
    }));
  }
  fileDataForCommunicationHistory(data) {
    return this.http.post("list_of_uploaded_files_comm_hist", data).pipe(map((response) => {
      return response;
    }));
  }
  static \u0275fac = function FileUploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadService)(\u0275\u0275inject(CommonHttpModule));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileUploadService, factory: _FileUploadService.\u0275fac, providedIn: "root" });
};

// src/app/components/file-upload/file-display/file-display.component.ts
var FileDisplayComponent = class _FileDisplayComponent {
  data;
  dialogRef;
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  closePreview() {
    this.dialogRef.close();
  }
  static \u0275fac = function FileDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileDisplayComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileDisplayComponent, selectors: [["app-file-display"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "preview-display"], [1, "preview-header"], ["type", "button", 1, "close-preview", 3, "click"], ["width", "100%", "width", "800px", "height", "600px", "frameborder", "0", 3, "src"]], template: function FileDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function FileDisplayComponent_Template_button_click_4_listener() {
        return ctx.closePreview();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(7, "iframe", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.name);
      \u0275\u0275advance(4);
      \u0275\u0275property("src", ctx.data.url, \u0275\u0275sanitizeResourceUrl);
    }
  }, dependencies: [MatIcon], styles: ["\n\n.preview-display[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n}\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  background: #f5f5f5;\n  border-bottom: 1px solid #e0e0e0;\n}\n.close-preview[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #666;\n}\n.preview-display[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  background-color: #f1f1f1;\n}\n.close-preview[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n}\niframe[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n/*# sourceMappingURL=file-display.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileDisplayComponent, { className: "FileDisplayComponent" });
})();

// src/app/components/file-upload/file-upload.component.ts
var import_js_md5 = __toESM(require_md5());
var import_file_saver = __toESM(require_FileSaver_min());

// src/app/constants/file-upload.constants.ts
var fileUploadEnvironment = "dev";

// src/app/components/file-upload/file-upload.component.ts
var _c0 = (a0) => ({ "disabled-section": a0 });
var _c1 = (a0) => ({ "blue": a0 });
function FileUploadComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " No files uploaded. Please select files to upload. ");
    \u0275\u0275elementEnd();
  }
}
function FileUploadComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "mat-icon");
    \u0275\u0275text(4, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28)(6, "div", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "span", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 32);
    \u0275\u0275listener("click", function FileUploadComponent_div_7_div_1_Template_button_click_11_listener() {
      const file_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.preview(file_r2, "preview"));
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 33);
    \u0275\u0275listener("click", function FileUploadComponent_div_7_div_1_Template_button_click_14_listener() {
      const file_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFile(file_r2));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 34)(18, "mat-icon");
    \u0275\u0275text(19, "sync");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 35);
    \u0275\u0275listener("click", function FileUploadComponent_div_7_div_1_Template_button_click_20_listener() {
      const file_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSelectedFile(file_r2));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22, "delete");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const file_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(file_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canPreview(file_r2, "preview"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, file_r2.sync === "Y"));
  }
}
function FileUploadComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, FileUploadComponent_div_7_div_1_Template, 23, 6, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.previewFiles);
  }
}
function FileUploadComponent_div_8_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "mat-icon");
    \u0275\u0275text(3, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function FileUploadComponent_div_8_div_4_div_1_Template_button_click_10_listener() {
      const file_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.preview(file_r5, "preview"));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275listener("click", function FileUploadComponent_div_8_div_4_div_1_Template_button_click_13_listener() {
      const file_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.downloadFile(file_r5));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 35);
    \u0275\u0275listener("click", function FileUploadComponent_div_8_div_4_div_1_Template_button_click_16_listener() {
      const file_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteSelectedFile(file_r5));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(file_r5.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r5.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canPreview(file_r5, "preview"));
  }
}
function FileUploadComponent_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, FileUploadComponent_div_8_div_4_div_1_Template, 19, 3, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pdaPreviewFiles);
  }
}
function FileUploadComponent_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1, " No files uploaded For PDA. Please select files to upload. ");
    \u0275\u0275elementEnd();
  }
}
function FileUploadComponent_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "mat-icon");
    \u0275\u0275text(3, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30)(8, "span", 31);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275listener("click", function FileUploadComponent_div_8_div_10_Template_button_click_10_listener() {
      const file_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.preview(file_r7, "preview"));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 33);
    \u0275\u0275listener("click", function FileUploadComponent_div_8_div_10_Template_button_click_13_listener() {
      const file_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.downloadFile(file_r7));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 35);
    \u0275\u0275listener("click", function FileUploadComponent_div_8_div_10_Template_button_click_16_listener() {
      const file_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteSelectedFile(file_r7));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(file_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(file_r7.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canPreview(file_r7, "preview"));
  }
}
function FileUploadComponent_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " No files uploaded For FDA. Please select files to upload. ");
    \u0275\u0275elementEnd();
  }
}
function FileUploadComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 36)(2, "span", 37);
    \u0275\u0275text(3, "PDA");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FileUploadComponent_div_8_div_4_Template, 2, 1, "div", 38)(5, FileUploadComponent_div_8_div_5_Template, 2, 0, "div", 39);
    \u0275\u0275element(6, "mat-divider", 40);
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8, "FDA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 41);
    \u0275\u0275template(10, FileUploadComponent_div_8_div_10_Template, 19, 3, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FileUploadComponent_div_8_div_11_Template, 2, 0, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.pdaPreviewFiles.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pdaPreviewFiles.length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.fdaPreviewFiles);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.fdaPreviewFiles.length === 0);
  }
}
function FileUploadComponent_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 45)(1, "mat-label");
    \u0275\u0275text(2, "Select PDA or FDA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 46)(4, "mat-option", 47);
    \u0275\u0275text(5, "PDA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 48);
    \u0275\u0275text(7, "FDA");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formControl", ctx_r2.fileUploadFor);
  }
}
function FileUploadComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "mat-icon", 50);
    \u0275\u0275text(2, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Uploading...");
    \u0275\u0275elementEnd()();
  }
}
function FileUploadComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-icon", 52);
    \u0275\u0275text(2, "cloud_upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Drag and drop files here or");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 53, 0);
    \u0275\u0275listener("change", function FileUploadComponent_div_23_Template_input_change_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 54);
    \u0275\u0275listener("click", function FileUploadComponent_div_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const fileInput_r9 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(fileInput_r9.click());
    });
    \u0275\u0275text(8, "Choose Files");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("accept", ctx_r2.allowedTypes)("disabled", ctx_r2.isDisabled);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.isDisabled);
  }
}
function FileUploadComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.successMessage);
  }
}
function FileUploadComponent_div_28_div_1_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function FileUploadComponent_div_28_div_1_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const i_r13 = \u0275\u0275nextContext().index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFile(i_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FileUploadComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 27)(2, "mat-icon");
    \u0275\u0275text(3, "image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28)(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 30);
    \u0275\u0275element(8, "textarea", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function FileUploadComponent_div_28_div_1_Template_button_click_9_listener() {
      const file_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.preview(file_r11, "upload"));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, FileUploadComponent_div_28_div_1_button_12_Template, 3, 0, "button", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r11 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", i_r13);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(file_r11.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.canPreview(file_r11, "upload"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.isUploadMode);
  }
}
function FileUploadComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275template(1, FileUploadComponent_div_28_div_1_Template, 13, 4, "div", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.selectedFiles);
  }
}
function FileUploadComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 62);
    \u0275\u0275listener("click", function FileUploadComponent_div_29_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.upload());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Upload ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 63);
    \u0275\u0275listener("click", function FileUploadComponent_div_29_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Clear All ");
    \u0275\u0275elementEnd()();
  }
}
var FileUploadComponent = class _FileUploadComponent {
  dialogRef;
  snackBar;
  fb;
  sanitizer;
  dialog;
  existingdata;
  fileUploadService;
  selectedFiles = [];
  maxFileSizeMB = 5;
  allowedTypes = ".pdf,.jpg,.jpeg,.png";
  allowedMimeTypes = [
    "application/pdf",
    "image/jpeg",
    "image/png",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];
  errorMessage = "";
  successMessage = "";
  isLoading = false;
  isDragOver = false;
  previewUrl = null;
  isUploadMode = true;
  previewFiles = [];
  fileHash = "";
  loader = inject(LoaderService);
  fileUploadForm;
  fileUploadFor = new FormControl("");
  isDisabled = true;
  pdaPreviewFiles = [];
  fdaPreviewFiles = [];
  constructor(dialogRef, snackBar, fb, sanitizer, dialog, existingdata, fileUploadService) {
    this.dialogRef = dialogRef;
    this.snackBar = snackBar;
    this.fb = fb;
    this.sanitizer = sanitizer;
    this.dialog = dialog;
    this.existingdata = existingdata;
    this.fileUploadService = fileUploadService;
    this.isUploadMode = existingdata?.isUploadMode ?? true;
    this.selectedFiles = existingdata?.files || [];
    this.fileUploadForm = this.fb.group({
      files: this.fb.array([])
    });
    this.existingdata.isDisbursment ? this.isDisabled = true : this.isDisabled = false;
    this.fileUploadFor.valueChanges.subscribe((value) => {
      if (value === "FDA" && this.existingdata.fdaId === null) {
        this.snackBar.showWarning("Please create FDA first before uploading files.");
        this.isDisabled = true;
      } else if (value === "PDA" && this.existingdata.pdaId === null) {
        this.snackBar.showWarning("Pda is not Found for this disbursement.");
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    });
  }
  get filesArray() {
    return this.fileUploadForm.get("files");
  }
  ngOnInit() {
    this.getUploadedFiles();
  }
  // close Dialog for the component when used for upload by Rahul
  closeDialog() {
    this.dialogRef.close();
  }
  // Drag and Drop Handlers by Rahul
  onDragOver(event) {
    event.preventDefault();
    this.isDragOver = true;
  }
  onDragLeave(event) {
    event.preventDefault();
    this.isDragOver = false;
  }
  onDrop(event) {
    event.preventDefault();
    this.isDragOver = false;
    const files = event.dataTransfer?.files;
    if (files?.length)
      this.processFiles(Array.from(files));
  }
  // End of Drag and Drop Handlers by Rahul
  //After Selecting files using file input by Rahul
  onFileSelected(event) {
    const files = event.target.files;
    if (files) {
      const selectingFiles = Array.from(files);
      this.clearMessages();
      this.processFiles(selectingFiles);
    }
  }
  // method to process the selected files
  processFiles(files) {
    this.clearMessages();
    const validFiles = files.filter((file) => this.validateFile(file)).map((file) => {
      const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:T.]/g, "").slice(0, 14);
      const fileNameWithoutExtension = file.name.substring(0, file.name.lastIndexOf("."));
      const fileExtension = file.name.substring(file.name.lastIndexOf("."));
      const newFileName = `${fileNameWithoutExtension}_${timestamp}${fileExtension}`;
      const renamedFile = new File([file], newFileName, { type: file.type });
      return renamedFile;
    });
    validFiles.forEach(() => {
      this.filesArray.push(this.fb.group({
        description: ["", Validators.required]
      }));
    });
    this.selectedFiles = [...this.selectedFiles, ...validFiles];
    validFiles.length > 0 ? this.successMessage = `${this.selectedFiles.length} valid file(s) processed` : "";
  }
  // method to validate the selected file by Rahul
  validateFile(file) {
    const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
    if (nameWithoutExt.length > 90) {
      this.snackBar.showError("File name length exceeded files are not allowed.");
      return false;
    }
    if (file.size > this.maxFileSizeMB * 1024 * 1024) {
      this.snackBar.showError(" File size exceeded files are not allowed.");
      return false;
    }
    if (!this.allowedMimeTypes.includes(file.type)) {
      this.errorMessage = `${file.name} is invalid file type`;
      this.snackBar.showError("Invalid file types are not allowed");
      return false;
    }
    return true;
  }
  //After Validating File submit for upload by Rahul
  upload() {
    return __async(this, null, function* () {
      if (!this.selectedFiles.length)
        return;
      this.isLoading = true;
      this.clearMessages();
      const filePaths = this.generateFilePath(fileUploadEnvironment, this.existingdata.disbursementId, this.existingdata.isDisbursment ? this.fileUploadFor.value === "PDA" ? `PDA-${this.existingdata.pdaId}` : this.fileUploadFor.value === "FDA" ? `FDA-${this.existingdata.fdaId}` : "" : this.existingdata.pdaOrFda === "PDA" ? `PDA-${this.existingdata.pdaId}` : `FDA-${this.existingdata.fdaId}`, this.selectedFiles);
      const data = { file_path: filePaths };
      this.fileUploadService.getPresignedUrl(data).subscribe({
        next: (res) => {
          const presignedUrls = res.presigned_url;
          const uploadObservables = this.selectedFiles.map((file, index) => {
            return this.fileUploadService.uploadImageToS3(presignedUrls[index], file).pipe(map(() => ({ success: true, file, index })), catchError((err) => {
              return of({ success: false, file, index, error: err });
            }));
          });
          forkJoin(uploadObservables).subscribe({
            next: (results) => __async(this, null, function* () {
              const failedUploads = results.filter((result) => !result.success);
              const successfulUploads = results.filter((result) => result.success);
              if (failedUploads.length > 0) {
                this.isLoading = false;
                const failedFileNames = failedUploads.map((result) => result.file.name).join(", ");
                this.snackBar.showError(`Failed to upload: ${failedFileNames}`);
                return;
              }
              const metadata = {
                pda_fda_flag: this.existingdata.isDisbursment ? this.fileUploadFor.value : this.existingdata?.pdaOrFda,
                disbursement_seq: this.existingdata?.disbursement_seq,
                source_type: this.existingdata?.source_type || "",
                files: yield Promise.all(successfulUploads.map((result) => __async(this, null, function* () {
                  return {
                    file_name: result.file.name,
                    md5_file: yield this.generateMD5Hash(result.file),
                    file_path: filePaths[result.index],
                    file_description: this.fileUploadForm.value.files[result.index].description,
                    sync: "N"
                  };
                })))
              };
              yield this.saveFileMetadataToDB(metadata);
              this.isLoading = false;
            }),
            error: (err) => {
              this.isLoading = false;
              this.snackBar.showError("Upload failed. Please try again.");
            }
          });
        },
        error: (err) => {
          this.isLoading = false;
          const errMsg = err?.error?.error || "Something went wrong. Please try again later.";
          this.snackBar.showError(errMsg);
        }
      });
    });
  }
  // Function to generate MD5 hash for the file (you need to implement or import an MD5 hashing library)
  generateMD5Hash(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const arrayBuffer = reader.result;
        const md5Hash = (0, import_js_md5.md5)(arrayBuffer);
        resolve(md5Hash);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  }
  // method to save the filedata after uloading the file to S3 bucket
  saveFileMetadataToDB(metadata) {
    this.loader.showDialogLoader();
    this.fileUploadService.fileUploadToDb(metadata).subscribe({
      next: (res) => {
        this.snackBar.showSuccess(res.message || "File metadata saved to DB successfully");
        this.loader.hideDialogLoader();
        this.isLoading = false;
        this.selectedFiles = [];
        this.filesArray.clear();
        this.getUploadedFiles();
      },
      error: (err) => {
        this.isLoading = false;
        const errMsg = err?.error?.error || "Error saving file metadata to DB";
        this.snackBar.showError(errMsg);
        this.loader.hideDialogLoader();
        this.isLoading = false;
      }
    });
  }
  // method to generate the file path for the files to be uploaded
  generateFilePath(env, dId, pdaId, files) {
    return files.map((file) => `${env}/${dId}/${pdaId}/${file.name}`);
  }
  // File Preview Functionality 
  preview(file, uploadOrPreview) {
    if (this.canPreview(file, uploadOrPreview)) {
      let url = void 0;
      if (file instanceof File) {
        url = URL.createObjectURL(file);
        this.openPreviewDialog(url, file.name);
      } else if ("presigned_url" in file && typeof file.presigned_url === "string") {
        this.previewWithRetry(file, file.presigned_url);
        return;
      }
      if (!url) {
        this.snackBar.showError("Cannot preview this file.");
        return;
      }
    }
  }
  previewWithRetry(file, presignedUrl) {
    fetch(presignedUrl, { method: "GET" }).then((response) => {
      if (response.status === 403) {
        this.refreshPresignedUrlAndPreview(file);
        return;
      }
      if (response.status === 404) {
        this.snackBar.showError("File not found.");
        return;
      }
      if (response.ok) {
        this.openPreviewDialog(presignedUrl, file.name);
      } else {
        throw new Error(`HTTP ${response.status}`);
      }
    }).catch(() => {
      this.snackBar.showError("Cannot preview this file.");
    });
  }
  refreshPresignedUrlAndPreview(file) {
    const data = {
      disbursement_seq: this.existingdata?.disbursement_seq,
      pda_fda_flag: this.existingdata.isDisbursment ? "DIS" : this.existingdata?.pdaId ? "PDA" : "FDA"
    };
    this.fileUploadService.fileDataFromDb(data).subscribe({
      next: (res) => {
        const updatedFile = res.find((f) => f.file_id === file.file_id);
        if (updatedFile?.presigned_url) {
          this.openPreviewDialog(updatedFile.presigned_url, file.name);
        } else {
          this.snackBar.showError("Unable to refresh preview link.");
        }
      },
      error: () => {
        this.snackBar.showError("Error refreshing preview link.");
      }
    });
  }
  openPreviewDialog(url, fileName) {
    this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    const data = {
      url: this.previewUrl,
      name: fileName
    };
    this.dialog.open(FileDisplayComponent, {
      data,
      width: "100vw",
      height: "100vh",
      maxHeight: "100vh",
      maxWidth: "100vw"
    });
  }
  // Remove file from the selected list by Rahul
  removeFile(index) {
    if (!this.isUploadMode && this.selectedFiles.length === 1) {
      this.snackBar.showSuccess("File deleted successfully");
    } else {
      this.selectedFiles.splice(index, 1);
      this.clearMessages();
    }
  }
  // Cancel the upload and clear selected files by Rahul
  cancel() {
    this.selectedFiles = [];
    this.clearMessages();
  }
  // Clear messages by Rahul
  clearMessages() {
    this.errorMessage = "";
    this.successMessage = "";
  }
  //Allow preview for images and PDFs only in upload mode and Allow preview for images in preview mode
  canPreview(file, uploadOrPreview) {
    if (uploadOrPreview === "upload" && file instanceof File) {
      return file.type.startsWith("image/") || file.type === "application/pdf";
    }
    if (uploadOrPreview === "preview" && "presigned_url" in file && typeof file.presigned_url === "string") {
      const previewFile = file;
      const presignedUrl = previewFile.presigned_url;
      const containsValidExtension = presignedUrl.includes(".pdf") || presignedUrl.includes(".png") || presignedUrl.includes(".jpg") || presignedUrl.includes(".jpeg");
      return containsValidExtension;
    }
    return false;
  }
  // method to get the uploaded files from DB
  getUploadedFiles() {
    const data = {
      disbursement_seq: this.existingdata?.disbursement_seq,
      pda_fda_flag: this.existingdata.isDisbursment ? "DIS" : this.existingdata?.pdaId ? "PDA" : "FDA"
    };
    this.loader.showDialogLoader();
    this.fileUploadService.fileDataFromDb(data).subscribe({
      next: (res) => {
        this.existingdata.isDisbursment ? this.assignPreviewFiles(res) : this.previewFiles = res || [];
        this.loader.hideDialogLoader();
      },
      error: (err) => {
        this.loader.hideDialogLoader();
        const errMsg = err?.error?.error || "Error fetching files from DB";
        this.snackBar.showError(errMsg);
      }
    });
  }
  // method to assign preview files to PDA and FDA arrays
  assignPreviewFiles(res) {
    this.pdaPreviewFiles = res.filter((file) => {
      return file.complete_file_path?.includes("/PDA-");
    });
    this.fdaPreviewFiles = res.filter((file) => {
      return file.complete_file_path?.includes("/FDA-");
    });
    this.previewFiles = [...this.pdaPreviewFiles, ...this.fdaPreviewFiles];
  }
  // method to delete the  selected file
  deleteSelectedFile(file) {
    const dialogRefChild = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        header: "Confirm Delete",
        text: "Do you want to delete the file?"
      }
    });
    dialogRefChild.afterClosed().subscribe((result) => {
      if (result) {
        this.loader.showDialogLoader();
        this.fileUploadService.deleteFileFromDb(file.file_id).subscribe({
          next: (res) => {
            this.loader.showDialogLoader();
            this.snackBar.showSuccess(res.message || "File deleted successfully");
            this.getUploadedFiles();
          },
          error: (err) => {
            this.loader.hideDialogLoader();
            const errMsg = err?.error?.error || "Error deleting file from DB";
            this.snackBar.showError(errMsg);
          }
        });
      }
    });
  }
  // method to download the file from S3 using presigned URL
  downloadFile(file) {
    this.downloadWithRetry(file, file.presigned_url);
  }
  downloadWithRetry(file, presignedUrl) {
    if (!presignedUrl) {
      this.snackBar.showError("Error while downloading the file.");
      return;
    }
    fetch(presignedUrl).then((response) => {
      if (response.status === 403) {
        this.refreshPresignedUrlAndDownload(file);
        return;
      }
      if (response.status === 404) {
        this.snackBar.showError("File not found.");
        return;
      }
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.blob();
    }).then((blob) => {
      if (blob) {
        (0, import_file_saver.saveAs)(blob, file.name);
      }
    }).catch((err) => {
      this.snackBar.showError("Error while downloading the file.");
    });
  }
  refreshPresignedUrlAndDownload(file) {
    const data = {
      disbursement_seq: this.existingdata?.disbursement_seq,
      pda_fda_flag: this.existingdata.isDisbursment ? "DIS" : this.existingdata?.pdaId ? "PDA" : "FDA"
    };
    this.fileUploadService.fileDataFromDb(data).subscribe({
      next: (res) => {
        const updatedFile = res.find((f) => f.file_id === file.file_id);
        if (updatedFile?.presigned_url) {
          this.downloadWithRetry(file, updatedFile.presigned_url);
        } else {
          this.snackBar.showError("Unable to refresh download link.");
        }
      },
      error: () => {
        this.snackBar.showError("Error refreshing download link.");
      }
    });
  }
  static \u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SnackbarService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(FileUploadService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["app-file-upload"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 30, vars: 17, consts: [["fileInput", ""], [1, "image-dialog"], [1, "preview-section"], [1, "dialog-header"], [1, "dialog-body"], ["class", "message", 4, "ngIf"], ["class", "preview-section-scroll", 4, "ngIf"], [4, "ngIf"], [1, "container"], [3, "vertical"], [1, "image-section"], ["appearance", "outline", "style", "width: 180px;", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Close", 1, "close-icon", 3, "click"], [1, "upload-section"], [1, "upload-card", 3, "dragover", "dragleave", "drop", "ngClass"], ["class", "loading", 4, "ngIf"], ["class", "upload-area", 4, "ngIf"], ["class", "success", "role", "alert", 4, "ngIf"], [1, "info"], [3, "ngSubmit", "formGroup"], ["formArrayName", "files", "class", "upload-preview-scroll", 4, "ngIf"], ["class", "dialog-footer", 4, "ngIf"], [1, "message"], [1, "preview-section-scroll"], ["class", "files-list-preview", 4, "ngFor", "ngForOf"], [1, "files-list-preview"], [1, "file-item"], [1, "file-content"], [1, "file-info"], [1, "file-name"], [1, "description"], ["placeholder", "Add description...", 2, "font-size", "14px"], ["type", "button", 1, "preview-btn", 3, "click", "disabled"], ["type", "button", 1, "download-btn", 3, "click"], ["type", "button", 1, "sync-btn", 3, "ngClass"], ["type", "button", 1, "remove-btn", 3, "click"], [1, "preview-container"], [2, "margin-bottom", "10px"], ["class", "preview-pda-part", 4, "ngIf"], ["class", "message", "style", "margin-bottom: 10px;", 4, "ngIf"], [2, "margin-top", "10px", "margin-bottom", "10px"], [1, "preview-fda-part"], ["class", "file-item", 4, "ngFor", "ngForOf"], [1, "preview-pda-part"], [1, "message", 2, "margin-bottom", "10px"], ["appearance", "outline", 2, "width", "180px"], [3, "formControl"], ["value", "PDA"], ["value", "FDA"], [1, "loading"], [1, "spin"], [1, "upload-area"], [1, "upload-icon"], ["type", "file", "multiple", "", "hidden", "", 3, "change", "accept", "disabled"], ["type", "button", 1, "choose-btn", 3, "click", "disabled"], ["role", "alert", 1, "success"], ["formArrayName", "files", 1, "upload-preview-scroll"], ["class", "file-item", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "file-item", 3, "formGroupName"], ["placeholder", "Add description...", "cdkTextareaAutosize", "", "formControlName", "description"], ["type", "button", "class", "remove-btn", 3, "click", 4, "ngIf"], [1, "dialog-footer"], ["type", "button", 1, "btn", "upload", 3, "click"], ["type", "button", 1, "btn", "cancel", 3, "click"]], template: function FileUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h6");
      \u0275\u0275text(4, " Preview Files");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275template(6, FileUploadComponent_div_6_Template, 2, 0, "div", 5)(7, FileUploadComponent_div_7_Template, 2, 1, "div", 6)(8, FileUploadComponent_div_8_Template, 12, 4, "div", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 8);
      \u0275\u0275element(10, "mat-divider", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "div", 3)(13, "h6");
      \u0275\u0275text(14, " Upload Files");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, FileUploadComponent_mat_form_field_15_Template, 8, 1, "mat-form-field", 11);
      \u0275\u0275elementStart(16, "button", 12);
      \u0275\u0275listener("click", function FileUploadComponent_Template_button_click_16_listener() {
        return ctx.closeDialog();
      });
      \u0275\u0275elementStart(17, "mat-icon");
      \u0275\u0275text(18, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 4)(20, "div", 13)(21, "div", 14);
      \u0275\u0275listener("dragover", function FileUploadComponent_Template_div_dragover_21_listener($event) {
        return ctx.onDragOver($event);
      })("dragleave", function FileUploadComponent_Template_div_dragleave_21_listener($event) {
        return ctx.onDragLeave($event);
      })("drop", function FileUploadComponent_Template_div_drop_21_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275template(22, FileUploadComponent_div_22_Template, 5, 0, "div", 15)(23, FileUploadComponent_div_23_Template, 9, 3, "div", 16)(24, FileUploadComponent_div_24_Template, 5, 1, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "small", 18);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "form", 19);
      \u0275\u0275listener("ngSubmit", function FileUploadComponent_Template_form_ngSubmit_27_listener() {
        return ctx.upload();
      });
      \u0275\u0275template(28, FileUploadComponent_div_28_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(29, FileUploadComponent_div_29_Template, 9, 0, "div", 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.previewFiles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewFiles.length && !ctx.existingdata.isDisbursment);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.previewFiles.length && ctx.existingdata.isDisbursment);
      \u0275\u0275advance(2);
      \u0275\u0275property("vertical", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.existingdata.isDisbursment);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("drag-over", ctx.isDragOver);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(15, _c0, ctx.isDisabled));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Supported: PDF, JPG, PNG, DOCX, XLSX (Max: ", ctx.maxFileSizeMB, "MB each, File name length \u2264 50 characters) ");
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.fileUploadForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFiles.length && !ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFiles.length && !ctx.isLoading);
    }
  }, dependencies: [MatSnackBarModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, CommonModule, NgClass, NgForOf, NgIf, MatIconModule, MatIcon, MatButtonModule, MatIconButton, MatDivider, TextFieldModule, CdkTextareaAutosize, MatFormField, MatSelectModule, MatLabel, MatSelect, MatOption], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-left: 25px;\n  margin-right: 10px;\n  box-sizing: border-box;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.dialog-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.dialog-header[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  margin-top: 20px;\n}\n.dialog-header[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  padding: 4px;\n  margin-top: 15px;\n}\n.close-icon[_ngcontent-%COMP%] {\n  color: red;\n  background: none;\n  border: none;\n}\n.upload-card[_ngcontent-%COMP%] {\n  border: 2px dashed var(--color-border-dark-4);\n  border-radius: 8px;\n  padding: 2px;\n  text-align: center;\n  background: var(--color-bg-dark-4);\n  min-height: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.upload-card.drag-over[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background: var(--color-bg-light-4);\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  font-size: 48px;\n  color: var(--color-action);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.upload-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 5px;\n}\n.upload-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-action);\n  padding: 2px;\n}\n.choose-btn[_ngcontent-%COMP%] {\n  background: var(--color-action);\n  color: white;\n  border: none;\n  padding: 12px 24px;\n  border-radius: 6px;\n  cursor: pointer;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  transition: background-color 0.3s ease;\n}\n.choose-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n}\n.file-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 20px;\n  background: var(--color-bg-dark-1);\n  border-radius: 6px;\n}\n.file-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n}\n.file-size[_ngcontent-%COMP%] {\n  color: var(--color-text-light-1);\n  font-size: 12px;\n  margin-top: -8px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n  justify-content: center;\n  position: sticky;\n  bottom: 0;\n  background: var(--color-bg-dark-1);\n  padding: 10px 0;\n}\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}\n.upload[_ngcontent-%COMP%] {\n  background: var(--color-success);\n  color: white;\n  height: 33px;\n  transition: opacity 0.3s ease;\n}\n.upload[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.preview[_ngcontent-%COMP%] {\n  background: #2196f3;\n  color: white;\n}\n.preview[_ngcontent-%COMP%]:disabled {\n  background: #ccc;\n  cursor: not-allowed;\n}\n.cancel[_ngcontent-%COMP%] {\n  background: var(--app-status-error);\n  color: white;\n  height: 33px;\n  transition: opacity 0.3s ease;\n}\n.cancel[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n.success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--color-success);\n  background: var(--color-bg-dark-2);\n  padding: 12px;\n  border-radius: 6px;\n  height: 6px;\n}\n.info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 15px;\n  color: var(--color-text-dark-5);\n}\n.file-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  background: var(--color-bg-dark-5);\n  border-radius: 4px;\n  flex: 1;\n  height: auto;\n}\n.file-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.preview-btn[_ngcontent-%COMP%], \n.remove-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n}\n.preview-btn[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n.preview-btn[_ngcontent-%COMP%]:disabled {\n  color: var(--color-bg-dark-5);\n  cursor: not-allowed;\n}\n.remove-btn[_ngcontent-%COMP%] {\n  color: var(--app-status-error);\n}\n.upload-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-bottom: 0;\n}\n.upload-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], \n.preview-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 15px 0;\n  color: var(--color-white);\n  font-weight: 500;\n}\n.image-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  width: 100%;\n}\n.preview-section[_ngcontent-%COMP%], \n.image-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 15px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.file-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 15px;\n}\n.file-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.description[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.preview-btn[_ngcontent-%COMP%], \n.remove-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.preview-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.files-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.file-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  gap: 15px;\n}\n.file-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.description[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  padding: 5px;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.preview-btn[_ngcontent-%COMP%], \n.remove-btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.files-list-preview[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  width: 100%;\n}\n.message[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.upload-preview-scroll[_ngcontent-%COMP%] {\n  height: 270px;\n  overflow-y: auto;\n}\n.preview-section-scroll[_ngcontent-%COMP%] {\n  height: 535px;\n  overflow-y: auto;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n}\nmat-divider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.download-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 4px;\n  color: var(--color-white);\n}\n.disabled-section[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n.preview-pda-part[_ngcontent-%COMP%], \n.preview-fda-part[_ngcontent-%COMP%] {\n  height: 210px;\n  overflow-y: auto;\n}\n.sync-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-white);\n}\n.sync-btn.blue[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=file-upload.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent" });
})();

export {
  FileDisplayComponent,
  require_FileSaver_min,
  FileUploadService,
  FileUploadComponent
};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

js-md5/src/md5.js:
  (**
   * [js-md5]{@link https://github.com/emn178/js-md5}
   *
   * @namespace md5
   * @version 0.8.3
   * @author Chen, Yi-Cyuan [emn178@gmail.com]
   * @copyright Chen, Yi-Cyuan 2014-2023
   * @license MIT
   *)
*/
//# sourceMappingURL=chunk-PHWOHFCM.js.map
