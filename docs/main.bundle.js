webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".main-container {\n    overflow: hidden;\n}\n.title-container {\n}\n.title-container table {\n    width: 100%;\n}\n.clear-playlist {\n    text-align: right;\n}\n.title-container .title {\n    text-align: center;\n}\n.cross-line {\n    display: inline-block;\n    width: 23px;\n    height: 3px;\n    background: #FFF;\n    position: absolute;\n    z-index: 99;\n    -webkit-transform: rotate(39deg);\n            transform: rotate(39deg);\n    top: 18px;\n    left: 10px;\n}\nspan.volumn-control {\n    display: inline-block;\n    width: 15%;\n    position: relative;\n    text-align: right;\n}\n.volumn-control i.cross-line {\n    left: 26px;\n    background: #CCC;\n}\nspan.loop-control {\n    display: inline-block;\n    width: 15%;\n    position: relative;\n}\nspan.play-control {\n    text-align: center;\n    display: inline-block;\n    width: 70%;\n}\n.control-progress-bar {\n    width: 100%;\n}\n.control-bar {\n    width: 100%;\n}\n.control-time {\n    width: 100%;\n}\n.control-time .current {\n    float: left;\n}\n.control-time .duration {\n    float: right;\n    clear : right;\n}\n.control-time marquee {\n    display: block;\n}\n.mat-list-item.mat-list-item {\n    padding: 10px;\n    border-bottom: 1px solid #CCC;\n}\n.play-control-container {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n}\n.browse-container {\n  \n    \n    overflow-y: scroll;\n    overflow-x: hidden;\n    height: 70vh;\n    display:block;\n}\n.browse-container .mat-list {\n    padding-top: 0;\n}\n.browse-container .mat-list-item.mat-list-item {\n    color : #FFF;\n}\n.browse-container .mat-list-item.mat-list-item.active {\n    display: block;\n    background: #717171;\n    width: 100%;\n    margin: 0;\n    color: #FFF;\n}\n/* @media (max-width: 320px){\n    .browse-container {\n        height: 70vh;\n    }\n}\n@media (max-width: 599px){\n    .browse-container {\n        height: 73vh;\n    }\n} */\n.browse-container .mat-list-item.mat-list-item span.file-control {\n    display: inline-block;\n    width: 30px;\n}\n.browse-container .mat-list-item.mat-list-item  span.file-remove {\n    display: inline-block;\n    width: 30px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n<div class=\"title-container\">\n<mat-toolbar color=\"primary\">\n    <mat-toolbar-row >\n        <table >\n          <tr>\n            <td><span class=\"add-list\"><button mat-icon-button  (click)=\"openAudioSelector()\"><i class=\"fas fa-plus-circle\"></i></button></span></td>\n            <td class=\"title\"><span >Media Player</span></td>\n            <td class=\"clear-playlist\"><span ><button mat-icon-button (click)=\"clearAll()\"><i class=\"fas fa-times-circle\"></i></button></span></td>\n          </tr>\n        </table>\n      <input type=\"file\" #selectAudios (change)=\"onChange($event)\"  multiple style=\"display:none;\" accept=\".mp3, .wav\"/>\n      \n    </mat-toolbar-row>\n</mat-toolbar>\n</div>\n<div class=\"browse-container\">\n    \n    <mat-list *ngIf=\"files.length > 0\">\n        <mat-list-item class=\"mat-list-item {{ (audio.active == index)?'active':'' }}\" *ngFor=\"let file of files; let index = index;\" (click)=\"loadAudio(index)\">\n          <span class=\"file-control\">\n              <i class=\"fas {{ (audio.active == index && audio.player.paused == false)?'fa-pause':'fa-play' }}\"></i>\n          </span>\n          <span class=\"file-remove\" *ngIf=\"audio.active != index\" (click)=\"removeFromPlayList(index)\"><i class=\"fas fa-times\"></i></span>\n          <span class=\"file-name\">{{ file.name | slice:0:40 }}</span>\n          \n        </mat-list-item>\n      </mat-list>\n</div>\n<div class=\"play-control-container\">\n<mat-progress-bar *ngIf=\"audio.player.paused== false\" mode=\"determinate\" color=\"accent\" [value]=\"progessValue\"></mat-progress-bar>\n\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row >\n      <div class=\"control-time\" *ngIf=\"files.length > 0 && audio.current!=''\">\n          <span class=\"current\">{{ audio.current }}</span>\n          <span class=\"duration\">{{ audio.duration }}</span>\n          <marquee >{{ files[audio.active].name }}</marquee>\n        </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row>\n    <div class=\"control-bar\">\n      <span class=\"loop-control\">\n        <i class=\"cross-line\" *ngIf=\"!audio.loop\"></i>\n        <button mat-icon-button (click)=\"setLoop()\"><i class=\"fas fa-retweet\"></i></button>\n      </span>\n      <span class=\"play-control\">\n        <button mat-icon-button (click)=\"prevNextAudioChange('prev')\" [disabled]=\"audio.active == 0 || files.length == 1\"><i class=\"fas fa-fast-backward\"></i></button>\n        <button mat-icon-button (click)=\"playForwardBackwardAudio('backward')\"><i class=\"fas fa-backward\"></i></button>\n        <button mat-icon-button (click)=\"playPauseAudio()\"><i class=\"fas {{ (audio.player.paused==false)?'fa-pause':'fa-play' }}\"></i></button>\n        <button mat-icon-button (click)=\"playForwardBackwardAudio('forward')\"><i class=\"fas fa-forward\"></i></button>\n        <button mat-icon-button  (click)=\"prevNextAudioChange('next')\" [disabled]=\"audio.active == (files.length-1) || files.length == 1\"><i class=\"fas fa-fast-forward\"></i></button>\n      </span>\n      <span class=\"volumn-control\">\n        <i class=\"cross-line\" *ngIf=\"!audio.volumn\"></i>\n        <button mat-icon-button  (click)=\"setVolumn()\"><i class=\"fas fa-volume-up\"></i></button>\n      </span>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.progessValue = 0;
        this.files = [];
        this.audio = {
            player: null,
            active: 0,
            current: '',
            duration: '',
            volumn: true,
            loop: true
        };
        this.audio.player = new Audio();
    }
    AppComponent.prototype.setVolumn = function () {
        this.audio.volumn = (this.audio.volumn == true) ? false : true;
        this.audio.player.muted = (this.audio.volumn == true) ? false : true;
        ;
    };
    AppComponent.prototype.setLoop = function () {
        this.audio.loop = (this.audio.loop == true) ? false : true;
    };
    AppComponent.prototype.openAudioSelector = function () {
        this.audioSelectorRef.nativeElement.click();
    };
    AppComponent.prototype.clearAll = function () {
        if (this.audio.player.paused == false) {
            this.audio.player.pause();
        }
        this.files = [];
        this.audio.current = "";
        this.audio.duration = "";
        this.progessValue = 0;
    };
    AppComponent.prototype.loadAudio = function (index) {
        this.audio.active = index;
        var file = this.files[index];
        var audioComponentObj = this;
        audioComponentObj.audio.player.src = file.file;
        audioComponentObj.audio.player.load();
        audioComponentObj.playPauseAudio();
    };
    AppComponent.prototype.playPauseAudio = function () {
        var _this = this;
        if (this.audio.player.paused == true) {
            this.audio.player.play();
            this.audioInterval = setInterval(function () {
                if (_this.audio.player.ended) {
                    clearInterval(_this.audioInterval);
                    if (_this.audio.active < (_this.files.length - 1)) {
                        _this.audio.active++;
                        _this.loadAudio(_this.audio.active);
                    }
                    else if (_this.audio.loop == true) {
                        _this.audio.active = 0;
                        _this.loadAudio(_this.audio.active);
                    }
                }
                else {
                    _this.audio.current = _this.msToHMS(_this.audio.player.currentTime);
                    _this.audio.duration = _this.msToHMS(_this.audio.player.duration);
                    _this.progessValue = (_this.audio.player.currentTime.toFixed(2) * 100) / _this.audio.player.duration;
                }
            }, 1000);
        }
        else {
            clearInterval(this.audioInterval);
            this.audio.player.pause();
        }
    };
    AppComponent.prototype.playForwardBackwardAudio = function (type) {
        var currentTime = this.audio.player.currentTime;
        if (type == 'backward') {
            currentTime -= 3;
            if (currentTime < 0) {
                currentTime = 0;
            }
        }
        else if (type == 'forward') {
            currentTime += 3;
            if (currentTime > this.audio.player.duration) {
                currentTime = this.audio.player.duration;
            }
        }
        this.audio.player.currentTime = currentTime;
    };
    AppComponent.prototype.msToHMS = function (seconds) {
        var returnStr = '';
        if (seconds > 3600) {
            var h = parseInt((seconds / 3600).toString());
            if (h < 10) {
                returnStr += "0";
            }
            returnStr += h + " : ";
            seconds = seconds % 3600;
        }
        var m = parseInt((seconds / 60).toString());
        ;
        if (m < 10) {
            returnStr += "0";
        }
        returnStr += m + " : ";
        var s = parseInt((seconds % 60).toString());
        if (s < 10) {
            returnStr += "0";
        }
        returnStr += s;
        return returnStr;
    };
    AppComponent.prototype.onChange = function (event, input) {
        var _this = this;
        var allPromises = [];
        var filesList = event.target.files;
        var _loop_1 = function (file) {
            allPromises.push(new Promise(function (resolve, reject) {
                var reader = new FileReader();
                var audioComponentObj = _this;
                reader.onload = function (e) {
                    resolve({
                        name: file.name,
                        file: this.result
                    });
                };
                reader.readAsDataURL(file);
            }));
        };
        // console.log(filesList);
        for (var _i = 0, filesList_1 = filesList; _i < filesList_1.length; _i++) {
            var file = filesList_1[_i];
            _loop_1(file);
        }
        Promise.all(allPromises).then(function (fileList) {
            _this.files = _this.files.concat(fileList);
            if (_this.audio.player.paused == true && _this.audio.active == 0) {
                _this.loadAudio(0);
            }
            event.target.value = '';
        });
    };
    AppComponent.prototype.prevNextAudioChange = function (type) {
        if (type == 'prev') {
            if (this.audio.active > 0) {
                this.audio.active -= 1;
            }
        }
        else if (type == 'next') {
            if (this.audio.active < (this.files.length - 1)) {
                this.audio.active += 1;
            }
            else if (this.audio.loop == true) {
                this.audio.active = 0;
            }
        }
        this.loadAudio(this.audio.active);
    };
    AppComponent.prototype.removeFromPlayList = function (index) {
        this.files.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('selectAudios'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "audioSelectorRef", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_material_module__ = __webpack_require__("./src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_material_module__["a" /* MaterialModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatGridListModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatGridListModule */]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map