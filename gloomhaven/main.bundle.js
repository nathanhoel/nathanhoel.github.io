webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-tab-group {\n    width: 30%;\n    margin-right: 20px;\n    float: left;\n    position: relative;\n    z-index: 10;\n}\napp-tree {\n    width: 70%;\n    height: 100vh;\n    border: 1px solid #ccc;\n}\n@media (max-width: 767px) {\n    .wrapper {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n    mat-tab-group {\n        width: 100%;\n        float: none;\n        -webkit-box-ordinal-group: 3;\n            -ms-flex-order: 2;\n                order: 2;\n    }\n    app-tree {\n        width: 100%;\n        height: 70vh;\n        -webkit-box-ordinal-group: 2;\n            -ms-flex-order: 1;\n                order: 1;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <app-export-tree [scenarios]=\"scenarios\" (importScenarios)=\"handleScenariosImport($event)\"></app-export-tree>\n    <mat-tab-group>\n      <mat-tab label=\"Scenario\">\n        <app-scenario-info [selectedScenario]=\"selectedScenario\" (updateScenario)=\"handleScenarioUpdate($event)\"></app-scenario-info>\n      </mat-tab>\n      <mat-tab label=\"Override\">\n        <app-override></app-override>\n      </mat-tab>\n    </mat-tab-group>\n  \n  <app-tree [elements]=\"scenarios\" (selectScenario)=\"handleScenarioSelect($event)\"></app-tree>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_service__ = __webpack_require__("../../../../../src/app/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_logic_service__ = __webpack_require__("../../../../../src/app/tree-logic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function AppComponent(assetService, treeLogicService, snackBar) {
        this.assetService = assetService;
        this.treeLogicService = treeLogicService;
        this.snackBar = snackBar;
        this.selectedScenario = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetService.getScenariosJSON().subscribe(function (scenarios) { return _this.scenarios = scenarios; });
    };
    AppComponent.prototype.handleScenarioSelect = function (scenario) {
        var rawScenario = scenario.data();
        rawScenario.activePage = rawScenario.pages[0];
        rawScenario.imageUrl = this.getImageUrl(rawScenario.activePage);
        this.selectedScenario = rawScenario;
    };
    AppComponent.prototype.getNextScenarioPage = function () {
        var pages = this.selectedScenario.pages;
        var activeIndex = pages.indexOf(this.selectedScenario.activePage);
        activeIndex++;
        if (activeIndex === pages.length) {
            activeIndex = 0;
        }
        this.selectedScenario.activePage = pages[activeIndex];
        this.selectedScenario.imageUrl = this.getImageUrl(this.selectedScenario.activePage);
    };
    AppComponent.prototype.handleScenarioUpdate = function (scenario) {
        this.scenarios = this.treeLogicService.updateScenario(this.scenarios, scenario);
        this.assetService.setScenariosJSON(this.scenarios);
    };
    AppComponent.prototype.handleScenariosImport = function (scenarios) {
        scenarios.edges = this.scenarios.edges;
        this.scenarios = scenarios;
        this.assetService.setScenariosJSON(this.scenarios);
        this.snackBar.open('Scenarios Imported!', '', {
            duration: 1500,
        });
    };
    AppComponent.prototype.getImageUrl = function (activePage) {
        return "assets/scenarios/" + activePage + ".jpg";
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__asset_service__["a" /* AssetService */],
            __WEBPACK_IMPORTED_MODULE_2__tree_logic_service__["a" /* TreeLogicService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatSnackBar */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__export_tree_export_tree_component__ = __webpack_require__("../../../../../src/app/export-tree/export-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__override_override_component__ = __webpack_require__("../../../../../src/app/override/override.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__asset_service__ = __webpack_require__("../../../../../src/app/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scenario_info_scenario_info_component__ = __webpack_require__("../../../../../src/app/scenario-info/scenario-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tree_logic_service__ = __webpack_require__("../../../../../src/app/tree-logic.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__scenario_info_scenario_info_component__["a" /* ScenarioInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__scenario_info_scenario_info_component__["b" /* ScenarioInfoDialog */],
                __WEBPACK_IMPORTED_MODULE_5__export_tree_export_tree_component__["a" /* ExportTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__export_tree_export_tree_component__["b" /* ImportExportDialog */],
                __WEBPACK_IMPORTED_MODULE_9__override_override_component__["a" /* OverrideComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__scenario_info_scenario_info_component__["b" /* ScenarioInfoDialog */],
                __WEBPACK_IMPORTED_MODULE_5__export_tree_export_tree_component__["b" /* ImportExportDialog */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__asset_service__["a" /* AssetService */], __WEBPACK_IMPORTED_MODULE_12__tree_logic_service__["a" /* TreeLogicService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/asset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
    }
    AssetService.prototype.getScenariosJSON = function () {
        var _this = this;
        var encodedTree = localStorage.getItem('gloomhavenScenarioTree');
        return this.http.get('./assets/scenarios.json').map(function (response) {
            var scenarios = response.json();
            if (encodedTree) {
                scenarios.nodes = _this.getDecodedScenarios(encodedTree).nodes;
            }
            return scenarios;
        });
    };
    AssetService.prototype.getDecodedScenarios = function (encodedScenarios) {
        return JSON.parse(encodedScenarios);
    };
    AssetService.prototype.getEncodedScenarios = function (scenarios) {
        return JSON.stringify({ nodes: scenarios.nodes });
    };
    AssetService.prototype.setScenariosJSON = function (scenarios) {
        localStorage.setItem('gloomhavenScenarioTree', this.getEncodedScenarios(scenarios));
    };
    AssetService.prototype.getImageUrl = function (activePage) {
        return "assets/scenarios/" + activePage + ".jpg";
    };
    AssetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AssetService);
    return AssetService;
}());



/***/ }),

/***/ "../../../../../src/app/export-tree/export-tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    position: absolute;\n    top: 20px;\n    right: 45px;\n    z-index: 10;\n}\n@media (max-width: 767px) {\n    :host {\n        top: 15px;\n        right: 25px;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/export-tree/export-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-mini-fab color=\"primary\" (click)=\"showImportExportModal()\">\n  <mat-icon aria-label=\"Export or Import your encoded scenario tree data\">import_export</mat-icon>\n</button>"

/***/ }),

/***/ "../../../../../src/app/export-tree/export-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportTreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ImportExportDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asset_service__ = __webpack_require__("../../../../../src/app/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ExportTreeComponent = /** @class */ (function () {
    function ExportTreeComponent(dialog) {
        this.dialog = dialog;
        this.importScenarios = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ExportTreeComponent.prototype.ngOnInit = function () {
    };
    ExportTreeComponent.prototype.showImportExportModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ImportExportDialog, {
            width: '600px',
            height: '75vh',
            data: { scenarios: this.scenarios }
        });
        dialogRef.afterClosed().subscribe(function (scenarios) {
            if (scenarios) {
                _this.importScenarios.emit(scenarios);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], ExportTreeComponent.prototype, "scenarios", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], ExportTreeComponent.prototype, "importScenarios", void 0);
    ExportTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-export-tree',
            template: __webpack_require__("../../../../../src/app/export-tree/export-tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/export-tree/export-tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */]])
    ], ExportTreeComponent);
    return ExportTreeComponent;
}());

var ImportExportDialog = /** @class */ (function () {
    function ImportExportDialog(dialogRef, data, assetService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.assetService = assetService;
        this.encodedScenarios = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, this.validJSONValidator()]);
        this.importError = null;
        this.scenarios = data.scenarios;
        this.encodedScenarios.setValue(this.assetService.getEncodedScenarios(this.scenarios));
    }
    ImportExportDialog.prototype.importScenarios = function () {
        this.importError = null;
        try {
            var decodedScenarioJSON = this.assetService.getDecodedScenarios(this.encodedScenarios.value);
            this.dialogRef.close(decodedScenarioJSON);
        }
        catch (e) {
            this.importError = "Not a valid scenario JSON.";
        }
        this.encodedScenarios.updateValueAndValidity();
    };
    ImportExportDialog.prototype.validJSONValidator = function () {
        var _this = this;
        return function (control) {
            return _this.importError != null ? { 'validJSON': { value: _this.importError } } : null;
        };
    };
    ImportExportDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-import-export-dialog',
            template: __webpack_require__("../../../../../src/app/export-tree/import-export-dialog.html"),
            styles: ["\n  mat-form-field {\n    width: 100%;\n  }\n  mat-form-field textarea {\n    height: 150px;\n  }\n  "]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_2__asset_service__["a" /* AssetService */]])
    ], ImportExportDialog);
    return ImportExportDialog;
}());



/***/ }),

/***/ "../../../../../src/app/export-tree/import-export-dialog.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n      <p>Changes are saved automatically to your browser's local storage. However, you can save this data elsewhere by copying the encoded string below.</p>\n      <p>To import, paste your encoded string over the text below and click import.</p>\n      <form>\n            <mat-form-field>\n                  <textarea matInput placeholder=\"Import / Export\" [formControl]=\"encodedScenarios\" name=\"encodedScenarios\" required validJSON></textarea>\n                  <mat-error>{{ importError }}</mat-error>\n            </mat-form-field>\n     </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n      <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"importScenarios()\">Import</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__ = __webpack_require__("../../../material/esm5/divider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
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
                __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_divider__["a" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */]
            ],
            providers: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/override/override.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/override/override.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  coming soon!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/override/override.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverrideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverrideComponent = /** @class */ (function () {
    function OverrideComponent() {
    }
    OverrideComponent.prototype.ngOnInit = function () {
    };
    OverrideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-override',
            template: __webpack_require__("../../../../../src/app/override/override.component.html"),
            styles: [__webpack_require__("../../../../../src/app/override/override.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverrideComponent);
    return OverrideComponent;
}());



/***/ }),

/***/ "../../../../../src/app/scenario-info/scenario-info-dialog.html":
/***/ (function(module, exports) {

module.exports = "<p>Note: Click the image to view additional pages</p>\n<mat-dialog-content>\n        <img id=\"scenario-img\" class=\"someClass\" (click)=\"getNextScenarioPage()\" [src]=\"selectedScenario.imageUrl\">\n</mat-dialog-content>"

/***/ }),

/***/ "../../../../../src/app/scenario-info/scenario-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".faded {\n    opacity: .26;\n}\nh2 {\n    text-align: center;\n    color: #000000;\n    opacity: .87;\n}\nbutton[mat-raised-button] {\n    margin-bottom: 60px;\n    width: 40%;\n}\nmat-button-toggle-group {\n    width: 100%;\n    margin-bottom: 40px;\n}\nmat-button-toggle {\n    text-align: center;\n    width: 33.33334%;\n}\nmat-button-toggle.mat-button-toggle-checked {\n    background-color: #3f51b5;\n    color: #ffffff;\n    font-weight: 500;\n}\nmat-form-field {\n    width: 100%;\n}\nmat-form-field textarea {\n    height: 100px;\n}\n@media (max-width: 991px) {\n    button[mat-raised-button] {\n        width: 100%;\n    }\n    mat-button-toggle-group {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n    }\n    mat-button-toggle {\n        width: 100%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/scenario-info/scenario-info.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 *ngIf=\"selectedScenario == null; else isSelectedBlock\" class=\"faded\">Click a Scenario to View</h2>\n<ng-template #isSelectedBlock>\n    <div *ngIf=\"scenario.locked == 'true'; else isUnlockedBlock\">\n        <h2># {{selectedScenario.id}}</h2>\n        <button mat-raised-button color=\"primary\" type=\"button\" (click)=\"unlockScenario()\">Unlock</button>\n    </div>\n    <ng-template #isUnlockedBlock>\n        <h2>{{selectedScenario.name}}</h2>\n        <form (ngSubmit)=\"saveScenarioData(true)\" #scenarioForm=\"ngForm\">\n            <button mat-raised-button (click)=\"showScenarioModal()\" type=\"button\">View Scenario</button>\n        \n            <mat-button-toggle-group #group=\"matButtonToggleGroup\" [(ngModel)]=\"scenario.status\" name=\"status\">\n                <mat-button-toggle value=\"incomplete\">\n                    Incomplete\n                </mat-button-toggle>\n                <mat-button-toggle value=\"attempted\">\n                    Attempted\n                </mat-button-toggle>\n                <mat-button-toggle value=\"complete\">\n                    Complete\n                </mat-button-toggle>\n            </mat-button-toggle-group>\n            <mat-form-field>\n                <textarea matInput placeholder=\"Scenario Notes\" [(ngModel)]=\"scenario.notes\" name=\"notes\"></textarea>\n            </mat-form-field>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Save</button>\n        </form>\n    </ng-template>\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/scenario-info/scenario-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioInfoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ScenarioInfoDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_service__ = __webpack_require__("../../../../../src/app/asset.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ScenarioInfoComponent = /** @class */ (function () {
    function ScenarioInfoComponent(assetService, dialog, snackBar) {
        this.assetService = assetService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.updateScenario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.scenario = {
            id: '',
            status: 'incomplete',
            notes: '',
            locked: ''
        };
    }
    ScenarioInfoComponent.prototype.ngOnInit = function () {
    };
    ScenarioInfoComponent.prototype.ngOnChanges = function () {
        if (this.selectedScenario !== null) {
            this.scenario.id = this.selectedScenario.id;
            this.scenario.status = this.selectedScenario.status || "incomplete";
            this.scenario.notes = this.selectedScenario.notes || "";
            this.scenario.locked = this.selectedScenario.locked || "";
        }
    };
    ScenarioInfoComponent.prototype.showScenarioModal = function () {
        var dialogRef = this.dialog.open(ScenarioInfoDialog, {
            width: '900px',
            height: '100vh',
            data: { selectedScenario: this.selectedScenario }
        });
        dialogRef.afterClosed().subscribe(function () {
            console.log('The dialog was closed');
        });
    };
    ScenarioInfoComponent.prototype.saveScenarioData = function (showSnackBar) {
        this.updateScenario.emit(this.scenario);
        if (showSnackBar) {
            this.snackBar.open('Scenario Saved!', '', {
                duration: 1500,
            });
        }
    };
    ScenarioInfoComponent.prototype.unlockScenario = function () {
        this.scenario.locked = 'false';
        this.saveScenarioData(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], ScenarioInfoComponent.prototype, "selectedScenario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], ScenarioInfoComponent.prototype, "updateScenario", void 0);
    ScenarioInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-scenario-info',
            template: __webpack_require__("../../../../../src/app/scenario-info/scenario-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/scenario-info/scenario-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__asset_service__["a" /* AssetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatSnackBar */]])
    ], ScenarioInfoComponent);
    return ScenarioInfoComponent;
}());

var ScenarioInfoDialog = /** @class */ (function () {
    function ScenarioInfoDialog(dialogRef, data, assetService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.assetService = assetService;
        this.selectedScenario = data.selectedScenario;
    }
    ScenarioInfoDialog.prototype.close = function () {
        this.dialogRef.close();
    };
    ScenarioInfoDialog.prototype.getNextScenarioPage = function () {
        var pages = this.selectedScenario.pages;
        var activeIndex = pages.indexOf(this.selectedScenario.activePage);
        activeIndex++;
        if (activeIndex === pages.length) {
            activeIndex = 0;
        }
        this.selectedScenario.activePage = pages[activeIndex];
        this.selectedScenario.imageUrl = this.assetService.getImageUrl(this.selectedScenario.activePage);
    };
    ScenarioInfoDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-scenario-info-dialog',
            template: __webpack_require__("../../../../../src/app/scenario-info/scenario-info-dialog.html"),
            styles: ["\n    .mat-dialog-content {\n        max-height: 90vh;\n    }\n    #scenario-img {\n      width: 100%;\n    }\n  "]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__asset_service__["a" /* AssetService */]])
    ], ScenarioInfoDialog);
    return ScenarioInfoDialog;
}());



/***/ }),

/***/ "../../../../../src/app/tree-logic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeLogicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep__ = __webpack_require__("../../../../lodash.clonedeep/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeLogicService = /** @class */ (function () {
    function TreeLogicService() {
    }
    TreeLogicService.prototype.updateScenario = function (originalScenarios, updatedScenario) {
        var scenarios = __WEBPACK_IMPORTED_MODULE_1_lodash_clonedeep__(originalScenarios);
        var scenarioIndex = scenarios.nodes.findIndex(function (scenario) { return scenario.data.id === updatedScenario.id; });
        if (updatedScenario.status === 'complete') {
            this.showChildScenarios(scenarios, updatedScenario.id);
        }
        else if (scenarios.nodes[scenarioIndex].data.status === 'complete' && (updatedScenario.status === 'incomplete' || updatedScenario.status === 'attempted')) {
            this.hideChildScenarios(scenarios, updatedScenario.id);
        }
        scenarios.nodes[scenarioIndex].data.status = updatedScenario.status;
        scenarios.nodes[scenarioIndex].data.notes = updatedScenario.notes;
        scenarios.nodes[scenarioIndex].data.locked = updatedScenario.locked;
        return scenarios;
    };
    TreeLogicService.prototype.showChildScenarios = function (scenarios, parentId) {
        scenarios.edges.filter(function (edge) { return (edge.data.source === parentId && (edge.data.type === 'unlocks' || edge.data.type === 'linksto')); })
            .forEach(function (edge) {
            var scenarioIndex = scenarios.nodes.findIndex(function (scenario) { return scenario.data.id === edge.data.target; });
            if (scenarios.nodes[scenarioIndex].data.status === 'hidden') {
                scenarios.nodes[scenarioIndex].data.status = 'incomplete';
            }
        });
    };
    TreeLogicService.prototype.hideChildScenarios = function (scenarios, parentId) {
        var _this = this;
        scenarios.edges.filter(function (edge) { return (edge.data.source === parentId && (edge.data.type === 'unlocks' || edge.data.type === 'linksto')); })
            .forEach(function (edge) {
            var scenarioIndex = scenarios.nodes.findIndex(function (scenario) { return scenario.data.id === edge.data.target; });
            if (scenarios.nodes[scenarioIndex].data.status === 'incomplete') {
                scenarios.nodes[scenarioIndex].data.status = 'hidden';
                _this.hideChildScenarios(scenarios, scenarios.nodes[scenarioIndex].id);
            }
        });
    };
    TreeLogicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TreeLogicService);
    return TreeLogicService;
}());



/***/ }),

/***/ "../../../../../src/app/tree/tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#cy {\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cytoscape__ = __webpack_require__("../../../../cytoscape/dist/cytoscape.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cytoscape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cytoscape__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.selectScenario = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.hideLocked = true;
        this.initialLoad = true;
    }
    TreeComponent.prototype.ngOnChanges = function () {
        this.render();
    };
    TreeComponent.prototype.render = function () {
        var pan;
        var selectedNode = null;
        if (!this.initialLoad) {
            // Save current viewport pan location and selected node to re-set it after render
            pan = this.cy.pan();
            selectedNode = this.cy.nodes(':selected');
        }
        this.cy = __WEBPACK_IMPORTED_MODULE_1_cytoscape__({
            container: this.cyEl.nativeElement,
            elements: this.elements,
            zoomingEnabled: false,
            zoom: 0.5,
            userZoomingEnabled: true,
            boxSelectionEnabled: false,
            autounselectify: false,
            autolock: false,
            layout: {
                name: "preset"
            },
            style: __WEBPACK_IMPORTED_MODULE_1_cytoscape__["stylesheet"]()
                .selector('node')
                .css({
                'content': 'data(name)',
                'font-size': '1.33em',
                'font-weight': '600',
                'text-valign': 'top',
                'text-halign': 'center',
                'color': '#000',
                'text-outline-width': '0',
                'background-color': '#000',
                'text-outline-color': '#000',
                'opacity': '.87',
                'border-color': '#3f51b5',
                'border-style': 'solid'
            })
                .selector('node[locked = "true"]')
                .css({
                'content': function (ele) { return '#' + ele.data('id'); }
            })
                .selector('edge')
                .css({
                'curve-style': 'bezier',
                'target-arrow-shape': 'triangle',
                'target-arrow-color': '#000',
                'line-color': '#000',
                'width': 2,
                'opacity': '.87'
            })
                .selector('edge[type = "linksto"]')
                .css({
                'line-style': 'dashed'
            })
                .selector('edge[type = "requiredby"]')
                .css({
                'visibility': 'hidden',
                'line-color': '#69f0ae',
                'target-arrow-color': '#69f0ae'
            })
                .selector('edge[type = "blocks"]')
                .css({
                'visibility': 'hidden',
                'line-color': '#f44336',
                'target-arrow-color': '#f44336'
            })
        });
        // Center the tree on initial load
        if (this.initialLoad) {
            pan = { x: (this.cy.width() / 2), y: 50 };
        }
        this.cy.pan(pan);
        this.cy.on('tap', 'node', this.nodeClicked.bind(this));
        // Reselect previously selected node after each render
        if (selectedNode != null) {
            this.cy.$(selectedNode).select();
        }
        this.updateStyles();
        this.initialLoad = false;
    };
    TreeComponent.prototype.updateStyles = function () {
        this.setNodeVisibility();
        this.setEdgeVisibility();
        this.colorScenarios();
        this.checkSpecialCases();
    };
    TreeComponent.prototype.setNodeVisibility = function () {
        this.cy.nodes('[status != "hidden"]')
            .css({ 'visibility': 'visible' })
            .selectify();
        this.cy.nodes('[status = "hidden"]')
            .css({ 'visibility': 'hidden' });
    };
    TreeComponent.prototype.setEdgeVisibility = function () {
        // Set edges from non-complete nodes to hidden
        this.cy.nodes('[status = "incomplete"], [status = "attempted"], [status = "hidden"]')
            .outgoers('edge')
            .css({ 'visibility': 'hidden' });
        // Set unlock edges from complete nodes to visible
        this.cy.nodes('[status = "complete"]')
            .outgoers('edge[type = "unlocks"]')
            .css({ 'visibility': 'visible' });
        // Set requiredby edges from visible nodes to visible
        this.cy.nodes('[status != "hidden"]')
            .outgoers('edge[type = "requiredby"][target != "31"][target != "26"]')
            .css({ 'visibility': 'visible' });
        // Set requiredby edges from complete nodes to hidden (requirement met)
        this.cy.nodes('[status = "complete"]')
            .outgoers('edge[type = "requiredby"]')
            .css({ 'visibility': 'hidden' });
        // Set blocks edges from complete nodes to visible
        this.cy.nodes('[status = "complete"]')
            .outgoers('edge[type = "blocks"][target != "27"][target != "31"][target != "33"]')
            .css({ 'visibility': 'visible' });
        // Set blocks edges to complete nodes to hidden (completed nodes cannot be blocked)
        this.cy.nodes('[status = "complete"]')
            .incomers('edge[type = "blocks"]')
            .css({ 'visibility': 'hidden' });
        // Set edges coming into hidden nodes to be hidden (cleans up edges to nothing)
        this.cy.nodes('[status = "hidden"]')
            .incomers('edge')
            .css({ 'visibility': 'hidden' });
    };
    TreeComponent.prototype.colorScenarios = function () {
        // Incomplete nodes are black
        this.cy.nodes('[status = "incomplete"]').css({
            'color': '#000',
            'background-color': '#000',
            'border-width': '0px'
        });
        // complete nodes are purple
        this.cy.nodes('[status = "complete"]').css({
            'color': '#3f51b5',
            'background-color': '#3f51b5',
            'border-width': '0px'
        });
        // attempted nodes are an unfilled circle
        this.cy.nodes('[status = "attempted"]').css({
            'color': '#000',
            'background-color': '#fff',
            'border-width': '1px'
        });
        // selected nodes are pink
        this.cy.nodes(':selected').css({
            'color': '#ff4081',
            'background-color': '#ff4081',
            'border-width': '0px'
        });
        // Scenarios blocked by other scenarios being incomplete are grey
        this.cy.nodes('[status != "complete"]')
            .outgoers('edge[type = "requiredby"][target != "31"][target != "26"]')
            .targets('node[status != "complete"]')
            .css({
            'background-color': '#c9c9c9',
            'border-width': '0px'
        });
        // Scenarios blocked by other scenarios being complete are red
        this.cy.nodes('[status = "complete"]')
            .outgoers('edge[type = "blocks"][target != "27"][target != "31"][target != "33"]')
            .targets('node[status != "complete"]')
            .css({
            'background-color': '#f44336',
            'border-width': '0px'
        });
    };
    TreeComponent.prototype.checkSpecialCases = function () {
        var scenario21Complete = this.cy.nodes('#21').data('status') === 'complete';
        var scenario24Complete = this.cy.$('#24').data('status') === 'complete';
        var scenario42Complete = this.cy.$('#42').data('status') === 'complete';
        var scenario25Complete = this.cy.$('#25').data('status') === 'complete';
        var scenario35Complete = this.cy.$('#35').data('status') === 'complete';
        var scenario23Complete = this.cy.$('#23').data('status') === 'complete';
        var scenario43Complete = this.cy.$('#43').data('status') === 'complete';
        if (!scenario21Complete) {
            if (this.cy.nodes('#35').data('status') === 'complete') {
                if (this.cy.nodes('#27').data('status') === 'attempted' ||
                    this.cy.nodes('#27').data('status') === 'incomplete') {
                    this.cy.nodes('#35').outgoers('[type = "blocks"][target = "27"]').css({
                        'visibility': 'visible'
                    }).targets().css({
                        'background-color': '#f44336',
                        'border-width': '0px'
                    });
                }
                if (this.cy.nodes('#31').data('status') === 'attempted' ||
                    this.cy.nodes('#31').data('status') === 'incomplete') {
                    this.cy.nodes('#35').outgoers('[type = "blocks"][target = "31"]').css({
                        'visibility': 'visible'
                    }).targets().css({
                        'background-color': '#f44336',
                        'border-width': '0px'
                    });
                }
            }
        }
        if (!scenario24Complete || scenario42Complete) {
            if (this.cy.nodes('#34').data('status') === 'complete') {
                if (this.cy.nodes('#33').data('status') === 'attempted' ||
                    this.cy.nodes('#33').data('status') === 'incomplete') {
                    this.cy.nodes('#34').outgoers('[type = "blocks"][target = "33"]').css({
                        'visibility': 'visible'
                    }).targets().css({
                        'background-color': '#f44336',
                        'border-width': '0px'
                    });
                }
            }
        }
        if (!scenario25Complete) {
            if (this.cy.nodes('#42').data('status') === 'complete') {
                if (this.cy.nodes('#33').data('status') === 'attempted' ||
                    this.cy.nodes('#33').data('status') === 'incomplete') {
                    this.cy.nodes('#42').outgoers('[type = "blocks"][target = "33"]').css({
                        'visibility': 'visible'
                    }).targets().css({
                        'background-color': '#f44336',
                        'border-width': '0px'
                    });
                }
            }
        }
        if (scenario35Complete) {
            if (this.cy.nodes('#21').data('status') !== 'complete') {
                if (this.cy.nodes('#31').data('status') === 'attempted' ||
                    this.cy.nodes('#31').data('status') === 'incomplete') {
                    this.cy.nodes('#21').outgoers('[type = "requiredby"][target = "31"]').css({
                        'visibility': 'visible'
                    }).targets().css({
                        'background-color': '#c9c9c9',
                        'border-width': '0px'
                    });
                }
            }
        }
        if (!scenario23Complete && !scenario43Complete) {
            if (this.cy.nodes('#26').data('status') === 'attempted' ||
                this.cy.nodes('#26').data('status') === 'incomplete') {
                this.cy.nodes('#23, #43').outgoers('[type = "requiredby"][target = "26"]').css({
                    'visibility': 'visible',
                    'curve-style': 'unbundled-bezier',
                    'control-point-distances': '50 50 50'
                }).targets().css({
                    'background-color': '#c9c9c9',
                    'border-width': '0px'
                });
            }
        }
    };
    TreeComponent.prototype.nodeClicked = function (e) {
        var _this = this;
        var scenario = e.target;
        if (scenario.selectable()) {
            this.selectScenario.emit(scenario);
            window.setTimeout(function () { return _this.updateStyles(); }, 50);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "elements", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "selectScenario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('cy'),
        __metadata("design:type", Object)
    ], TreeComponent.prototype, "cyEl", void 0);
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-tree',
            template: '<div id="cy" #cy class="flex-item"></div>',
            styles: [__webpack_require__("../../../../../src/app/tree/tree.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map