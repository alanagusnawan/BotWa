"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whatsapp = void 0;
var decrypt_1 = require("./helpers/decrypt");
var controls_layer_1 = require("./layers/controls.layer");
var Whatsapp = /** @class */ (function (_super) {
    __extends(Whatsapp, _super);
    function Whatsapp(page) {
        var _this = _super.call(this, page) || this;
        _this.page = page;
        return _this;
    }
    /**
        * Decrypts message file
        * @param data Message object
        * @returns Decrypted file buffer (null otherwise)
        */
    Whatsapp.prototype.downloadFile = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function (data) { return WAPI.downloadFile(data); }, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object.defineProperty(Whatsapp.prototype, "waPage", {
        /**
         * Get the puppeteer page instance
         * @returns The Whatsapp page
         */
        get: function () {
            return this.page;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clicks on 'use here' button (When it get unlaunched)
     * This method tracks the class of the button
     * Whatsapp web might change this class name over the time
     * Dont rely on this method
     */
    Whatsapp.prototype.useHere = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.waitForFunction(function () {
                            var useHereClass = '.S7_rT.FV2Qy';
                            return document.querySelector(useHereClass);
                        }, { timeout: 0 })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.page.evaluate(function () {
                                var useHereClass = '.S7_rT.FV2Qy';
                                document.querySelector(useHereClass).click();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Closes page and browser
     */
    Whatsapp.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.page) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.page.close()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.page.browser) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.page.browser().close()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Decrypts message file
     * @param message Message object
     * @returns Decrypted file buffer (null otherwise)
     */
    Whatsapp.prototype.decryptFile = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var url, encBase64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(message.isMedia || message.isMMS)) return [3 /*break*/, 2];
                        url = message.clientUrl;
                        return [4 /*yield*/, this.page.evaluate(function (url) {
                                return fetch(url)
                                    .then(function (response) { return response.arrayBuffer(); })
                                    .then(function (bytes) { return WAPI.arrayBufferToBase64(bytes); });
                            }, url)];
                    case 1:
                        encBase64 = _a.sent();
                        return [2 /*return*/, decrypt_1.decrypt(encBase64, message)];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    return Whatsapp;
}(controls_layer_1.ControlsLayer));
exports.Whatsapp = Whatsapp;
