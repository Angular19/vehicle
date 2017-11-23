webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n  <app-toolbar *ngIf=\"strCurrentPageName !== arrStrPageListTargeted[2] && bIsPageLoad\"></app-toolbar>\n  <app-navbar *ngIf=\"strCurrentPageName !== arrStrPageListTargeted[2] && bIsPageLoad\"></app-navbar>\n  <spinner-component></spinner-component>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router) {
        var _this = this;
        console.log('environment: ');
        console.log(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */]);
        this.bIsPageLoad = false;
        this.strCurrentPageName = '';
        this.arrStrPageListTargeted = ['estimate', 'more', 'welcome'];
        _router.events.subscribe(function (event) {
            var strUrl = event.url.toString();
            var arr = strUrl.split('/');
            arr.shift();
            if (arr.length > 0) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationStart */]) {
                    _this.strCurrentPageName = arr[0];
                    _this.bIsPageLoad = true;
                }
            }
            else {
                console.log('The url is not correct.');
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_select__ = __webpack_require__("../../../../angular2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_streaming__ = __webpack_require__("../../../../videogular2/streaming.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_videogular2_streaming___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_videogular2_streaming__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modals_player_modal_player_modal_service__ = __webpack_require__("../../../../../src/app/modals/player-modal/player-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modals_display_modal_display_modal_service__ = __webpack_require__("../../../../../src/app/modals/display-modal/display-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__modals_capture_modal_capture_modal_service__ = __webpack_require__("../../../../../src/app/modals/capture-modal/capture-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__modals_upload_modal_upload_modal_service__ = __webpack_require__("../../../../../src/app/modals/upload-modal/upload-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modals_show_img_modal_show_img_modal_service__ = __webpack_require__("../../../../../src/app/modals/show-img-modal/show-img-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__modals_disclaimer_modal_disclaimer_modal_service__ = __webpack_require__("../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modals_alert_modal_alert_modal_service__ = __webpack_require__("../../../../../src/app/modals/alert-modal/alert-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__modals_damage_modal_damage_modal_service__ = __webpack_require__("../../../../../src/app/modals/damage-modal/damage-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modals_confirm_modal_confirm_modal_service__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__modals_questions_modal_questions_modal_service__ = __webpack_require__("../../../../../src/app/modals/questions-modal/questions-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modals_player_modal_player_modal_component__ = __webpack_require__("../../../../../src/app/modals/player-modal/player-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__utilities_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__utilities_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/utilities/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__modals_display_modal_display_modal_component__ = __webpack_require__("../../../../../src/app/modals/display-modal/display-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__utilities_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/utilities/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__vehicle_vehicle_component__ = __webpack_require__("../../../../../src/app/vehicle/vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__utilities_dot_slider_dot_slider_component__ = __webpack_require__("../../../../../src/app/utilities/dot-slider/dot-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__zip_zip_component__ = __webpack_require__("../../../../../src/app/zip/zip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__next_next_component__ = __webpack_require__("../../../../../src/app/next/next.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__more_more_component__ = __webpack_require__("../../../../../src/app/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__identify_identify_component__ = __webpack_require__("../../../../../src/app/identify/identify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__modals_capture_modal_capture_modal_component__ = __webpack_require__("../../../../../src/app/modals/capture-modal/capture-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__photo_photo_component__ = __webpack_require__("../../../../../src/app/photo/photo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__utilities_img_img_component__ = __webpack_require__("../../../../../src/app/utilities/img/img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__modals_upload_modal_upload_modal_component__ = __webpack_require__("../../../../../src/app/modals/upload-modal/upload-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__modals_show_img_modal_show_img_modal_component__ = __webpack_require__("../../../../../src/app/modals/show-img-modal/show-img-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__disclaimer_disclaimer_component__ = __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__estimate_estimate_component__ = __webpack_require__("../../../../../src/app/estimate/estimate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__modals_disclaimer_modal_disclaimer_modal_component__ = __webpack_require__("../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__vehicle_model_vehicle_model_component__ = __webpack_require__("../../../../../src/app/vehicle-model/vehicle-model.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__get_vehicle_get_vehicle_component__ = __webpack_require__("../../../../../src/app/get-vehicle/get-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__damage_damage_component__ = __webpack_require__("../../../../../src/app/damage/damage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__utilities_car_map_car_map_component__ = __webpack_require__("../../../../../src/app/utilities/car-map/car-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__utilities_damage_location_damage_location_component__ = __webpack_require__("../../../../../src/app/utilities/damage-location/damage-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__modals_alert_modal_alert_modal_component__ = __webpack_require__("../../../../../src/app/modals/alert-modal/alert-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__modals_confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__modals_damage_modal_damage_modal_component__ = __webpack_require__("../../../../../src/app/modals/damage-modal/damage-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__utilities_image_map_image_map_component__ = __webpack_require__("../../../../../src/app/utilities/image-map/image-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__utilities_level_slider_level_slider_component__ = __webpack_require__("../../../../../src/app/utilities/level-slider/level-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__modals_questions_modal_questions_modal_component__ = __webpack_require__("../../../../../src/app/modals/questions-modal/questions-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































var appRoutes = [
    {
        path: 'welcome/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_30__welcome_welcome_component__["a" /* WelcomeComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_33__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'ps/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_33__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'vehicle/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_37__vehicle_vehicle_component__["a" /* VehicleComponent */]
    },
    {
        path: 'zip/ps/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_39__zip_zip_component__["a" /* ZipComponent */]
    },
    {
        path: 'next/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_40__next_next_component__["a" /* NextComponent */]
    },
    {
        path: 'more/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_41__more_more_component__["a" /* MoreComponent */]
    },
    {
        path: 'identify/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_42__identify_identify_component__["a" /* IdentifyComponent */]
    },
    {
        path: 'identify_retry/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_42__identify_identify_component__["a" /* IdentifyComponent */]
    },
    {
        path: 'identify_odometer/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_42__identify_identify_component__["a" /* IdentifyComponent */]
    },
    {
        path: 'confirm_odometer/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_42__identify_identify_component__["a" /* IdentifyComponent */]
    },
    {
        path: 'help',
        component: __WEBPACK_IMPORTED_MODULE_44__help_help_component__["a" /* HelpComponent */]
    },
    {
        path: 'photo/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_45__photo_photo_component__["a" /* PhotoComponent */]
    },
    {
        path: 'disclaimer',
        component: __WEBPACK_IMPORTED_MODULE_49__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */]
    },
    {
        path: 'disclaimer/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_49__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */]
    },
    {
        path: 'estimate/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_50__estimate_estimate_component__["a" /* EstimateComponent */]
    },
    {
        path: 'vehicle_model/ps/:slugId/:zipcode',
        component: __WEBPACK_IMPORTED_MODULE_52__vehicle_model_vehicle_model_component__["a" /* VehicleModelComponent */]
    },
    {
        path: 'get_vehicle/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_53__get_vehicle_get_vehicle_component__["a" /* GetVehicleComponent */]
    },
    {
        path: 'damage/:slugId',
        component: __WEBPACK_IMPORTED_MODULE_54__damage_damage_component__["a" /* DamageComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_29__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_30__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__modals_player_modal_player_modal_component__["a" /* PlayerModalComponent */],
            __WEBPACK_IMPORTED_MODULE_32__utilities_spinner_spinner_component__["a" /* SpinnerComponent */],
            __WEBPACK_IMPORTED_MODULE_33__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_34__utilities_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_35__modals_display_modal_display_modal_component__["a" /* DisplayModalComponent */],
            __WEBPACK_IMPORTED_MODULE_36__utilities_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_37__vehicle_vehicle_component__["a" /* VehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_38__utilities_dot_slider_dot_slider_component__["a" /* DotSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_39__zip_zip_component__["a" /* ZipComponent */],
            __WEBPACK_IMPORTED_MODULE_40__next_next_component__["a" /* NextComponent */],
            __WEBPACK_IMPORTED_MODULE_41__more_more_component__["a" /* MoreComponent */],
            __WEBPACK_IMPORTED_MODULE_42__identify_identify_component__["a" /* IdentifyComponent */],
            __WEBPACK_IMPORTED_MODULE_43__modals_capture_modal_capture_modal_component__["a" /* CaptureModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_44__help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_45__photo_photo_component__["a" /* PhotoComponent */],
            __WEBPACK_IMPORTED_MODULE_46__utilities_img_img_component__["a" /* ImgComponent */],
            __WEBPACK_IMPORTED_MODULE_47__modals_upload_modal_upload_modal_component__["a" /* UploadModalComponent */],
            __WEBPACK_IMPORTED_MODULE_48__modals_show_img_modal_show_img_modal_component__["a" /* ShowImgModalComponent */],
            __WEBPACK_IMPORTED_MODULE_49__disclaimer_disclaimer_component__["a" /* DisclaimerComponent */],
            __WEBPACK_IMPORTED_MODULE_50__estimate_estimate_component__["a" /* EstimateComponent */],
            __WEBPACK_IMPORTED_MODULE_51__modals_disclaimer_modal_disclaimer_modal_component__["a" /* DisclaimerModalComponent */],
            __WEBPACK_IMPORTED_MODULE_52__vehicle_model_vehicle_model_component__["a" /* VehicleModelComponent */],
            __WEBPACK_IMPORTED_MODULE_53__get_vehicle_get_vehicle_component__["a" /* GetVehicleComponent */],
            __WEBPACK_IMPORTED_MODULE_54__damage_damage_component__["a" /* DamageComponent */],
            __WEBPACK_IMPORTED_MODULE_55__utilities_car_map_car_map_component__["a" /* CarMapComponent */],
            __WEBPACK_IMPORTED_MODULE_56__utilities_damage_location_damage_location_component__["a" /* DamageLocationComponent */],
            __WEBPACK_IMPORTED_MODULE_57__modals_alert_modal_alert_modal_component__["a" /* AlertModalComponent */],
            __WEBPACK_IMPORTED_MODULE_58__modals_confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */],
            __WEBPACK_IMPORTED_MODULE_59__modals_damage_modal_damage_modal_component__["a" /* DamageModalComponent */],
            __WEBPACK_IMPORTED_MODULE_60__utilities_image_map_image_map_component__["a" /* ImageMapComponent */],
            __WEBPACK_IMPORTED_MODULE_61__utilities_level_slider_level_slider_component__["a" /* LevelSliderComponent */],
            __WEBPACK_IMPORTED_MODULE_62__modals_questions_modal_questions_modal_component__["a" /* QuestionsModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["e" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot(appRoutes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_3_ngx_modialog_plugins_bootstrap__["b" /* BootstrapModalModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_select__["SelectModule"],
            __WEBPACK_IMPORTED_MODULE_6_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_7_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_8_videogular2_buffering__["VgBufferingModule"],
            __WEBPACK_IMPORTED_MODULE_9_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_10_videogular2_streaming__["VgStreamingModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_forms__["ReactiveFormsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_18__utilities_spinner_spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_19__modals_player_modal_player_modal_service__["a" /* PlayerModalService */],
            __WEBPACK_IMPORTED_MODULE_20__modals_display_modal_display_modal_service__["a" /* DisplayModalService */],
            __WEBPACK_IMPORTED_MODULE_21__modals_capture_modal_capture_modal_service__["a" /* CaptureModalService */],
            __WEBPACK_IMPORTED_MODULE_22__modals_upload_modal_upload_modal_service__["a" /* UploadModalService */],
            __WEBPACK_IMPORTED_MODULE_23__modals_show_img_modal_show_img_modal_service__["a" /* ShowImgModalService */],
            __WEBPACK_IMPORTED_MODULE_24__modals_disclaimer_modal_disclaimer_modal_service__["a" /* DisclaimerModalService */],
            __WEBPACK_IMPORTED_MODULE_25__modals_alert_modal_alert_modal_service__["a" /* AlertModalService */],
            __WEBPACK_IMPORTED_MODULE_26__modals_damage_modal_damage_modal_service__["a" /* DamageModalService */],
            __WEBPACK_IMPORTED_MODULE_27__modals_confirm_modal_confirm_modal_service__["a" /* ConfirmModalService */],
            __WEBPACK_IMPORTED_MODULE_15__services_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_16__services_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_17__services_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_28__modals_questions_modal_questions_modal_service__["a" /* QuestionsModalService */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_31__modals_player_modal_player_modal_component__["a" /* PlayerModalComponent */],
            __WEBPACK_IMPORTED_MODULE_35__modals_display_modal_display_modal_component__["a" /* DisplayModalComponent */],
            __WEBPACK_IMPORTED_MODULE_43__modals_capture_modal_capture_modal_component__["a" /* CaptureModalComponent */],
            __WEBPACK_IMPORTED_MODULE_47__modals_upload_modal_upload_modal_component__["a" /* UploadModalComponent */],
            __WEBPACK_IMPORTED_MODULE_48__modals_show_img_modal_show_img_modal_component__["a" /* ShowImgModalComponent */],
            __WEBPACK_IMPORTED_MODULE_51__modals_disclaimer_modal_disclaimer_modal_component__["a" /* DisclaimerModalComponent */],
            __WEBPACK_IMPORTED_MODULE_57__modals_alert_modal_alert_modal_component__["a" /* AlertModalComponent */],
            __WEBPACK_IMPORTED_MODULE_58__modals_confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */],
            __WEBPACK_IMPORTED_MODULE_59__modals_damage_modal_damage_modal_component__["a" /* DamageModalComponent */],
            __WEBPACK_IMPORTED_MODULE_62__modals_questions_modal_questions_modal_component__["a" /* QuestionsModalComponent */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_29__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CoordiateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasStyleModel; });
var CoordiateModel = (function () {
    function CoordiateModel() {
    }
    return CoordiateModel;
}());

var CanvasStyleModel = (function () {
    function CanvasStyleModel() {
    }
    return CanvasStyleModel;
}());

//# sourceMappingURL=models.js.map

/***/ }),

/***/ "../../../../../src/app/damage/damage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n\tdisplay: block;\n\tpadding: 0 16px;\n}\n\nh2 {\n\tfont-size: 20px;\n\tfont-weight: 500;\n\tletter-spacing: 0.005em;\n\tmargin-bottom: 0;\n\tmargin-top: 0.83em;\n}\n\n#birdeye_area .car-canvas {\n\tpadding: 0px;\n\tmargin: 0px;\n\twidth: 100%;\n\theight: calc( 100% - 45px );\n}\n\n#birdeye_area .blue-btn-wrapper {\n\theight: 45px;\n}\n\n#body1 #birdeye_area {\n\theight: 100%;\n}\n\n#birdeye_area .damage-header {\n\theight: 15%;\n}\n\n#birdeye_area .damage-body {\n\theight: 85%;\n}\n\n#birdeye_area .damage-body .blue-btn-wrapper {\n\tmargin: 0;\n\tbackground-color: #007aff;\n\tcolor: #FFFFFF;\n}\n\n#birdeye_area .damage-body #next .next-btn-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t    -ms-flex-pack: justify;\n\t        justify-content: space-between;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row;\n\t        flex-flow: row;\n\tpadding: 0 20px;\n\theight: 100%;\n}\n#birdeye_area .damage-body #next .next-btn-wrapper .btn-description {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: column;\n\t        flex-flow: column;\n\t-webkit-box-align: start;\n\t    -ms-flex-align: start;\n\t        align-items: flex-start;\n\tfont-size: 12px;\n}\n#birdeye_area .damage-body #next .next-btn-wrapper .description-title {\n\tfont-size: 9px;\n\ttext-transform: uppercase;\n}\n#birdeye_area .damage-body #next .next-btn-wrapper .description-part {\n\tfont-size: 12px;\n}\n#birdeye_area .damage-body #next .next-btn-wrapper .btn-severity {\n    background: white;\n    color: #007aff;\n    font-size: 13px;\n    border-radius: 20px;\n\tpadding: 7px 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/damage/damage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\" id=\"body1\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group text-center\">\n      <div class=\"list-group-item-home flex-wrapper\" id=\"birdeye_area\" *ngIf=\"bIsLoading\">\n        <div class=\"damage-header flex-wrapper\">\n          <dot-slider\n          [sliderCount]=\"nTotoalStep\"\n          [currentSliderCounter]=\"nCurrentStep\"\n          ></dot-slider>\n          <h3 class=\"home-heading\">Select the damaged part(s)</h3>\n        </div>\n\n        <div class=\"damage-body flex-wrapper\">\n          <div class=\"car-canvas\">\n            <car-map\n            (showNextSeverity)=\"showNextSeverity($event)\"\n            (checkBookMark)=\"checkNextAbility($event)\"\n            (eventChangeLocation)=\"eventChangeLocation($event)\"\n            (initEventData)=\"initEventData($event)\"\n            [slug]=\"strSlug\"\n            [mapData]=\"mapData\"\n            ></car-map>\n          </div>\n          <div id=\"next\" class=\"blue-btn-wrapper\" #nextAreaElement>\n            <div class=\"next-btn-wrapper\" *ngIf=\"bIsSeverity\">\n              <div class=\"btn-description\">\n                <div class=\"description-title\">SELECTED PART:</div>\n                <div class=\"description-part\">{{strBtnDesc}}</div>\n              </div>\n\n              <a class=\"btn btn-primary btn-severity\" (click)=\"onNextSeverity()\">Next: <strong>Severity</strong> <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a>\n            </div>\n\n            <div class=\"next-btn-wrapper\" *ngIf=\"bIsNext && !bIsSeverity\" >\n              <div class=\"btn-description\">Add More Damage</div>\n              <a class=\"btn btn-primary btn-severity\" (click)=\"next();\">\n                Next\n              </a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n<span defaultOverlayTarget></span>"

/***/ }),

/***/ "../../../../../src/app/damage/damage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modals_alert_modal_alert_modal_service__ = __webpack_require__("../../../../../src/app/modals/alert-modal/alert-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_questions_modal_questions_modal_service__ = __webpack_require__("../../../../../src/app/modals/questions-modal/questions-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * This class represents the lazy loaded DamageComponent.
 */
var DamageComponent = (function () {
    function DamageComponent(activeRoute, router, _eventService, _viewContainer, _alertModalService, _questionsModalService, _dataService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this._eventService = _eventService;
        this._viewContainer = _viewContainer;
        this._alertModalService = _alertModalService;
        this._questionsModalService = _questionsModalService;
        this._dataService = _dataService;
        this.bIsNext = false;
        this.bIsLoading = false;
        this.bIsSeverity = false;
        this.bIsStart = false;
    }
    DamageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API;
        // activeRoute param
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
            _this.loadData('exterior');
        });
    };
    DamageComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        if (this._alertModalService) {
            this._alertModalService.closeDialog();
        }
        if (this._questionsModalService) {
            this._questionsModalService.closeDialog();
        }
    };
    DamageComponent.prototype.loadData = function (strLocation) {
        var _this = this;
        var postData = {
            code: 200,
            data: {
                slug: this.strSlug,
                call: 'preDamage'
            }
        };
        this._dataService.post('v1/data/question', postData)
            .subscribe(function (res) {
            if (res.hasOwnProperty('question') && res['question'].length > 0) {
                _this._questionsModalService.openDialog(res, _this._viewContainer)
                    .then(function (dialog) {
                    dialog.result.then(function (returnData) {
                        console.log(returnData);
                    });
                });
            }
            else {
                _this.getDataFromApi(strLocation);
            }
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    DamageComponent.prototype.getDataFromApi = function (strLocation) {
        var _this = this;
        var postData = {
            code: 200,
            data: {
                slug: this.strSlug,
                location: strLocation
            }
        };
        this._dataService.post('v1/data/birdseyeauto', postData)
            .subscribe(function (res) {
            _this.mapData = res;
            if (!_this.bIsStart) {
                _this._alertModalService.openDialog(0, res, _this._viewContainer);
            }
            _this.nTotoalStep = res.data.steps.totalStep;
            _this.nCurrentStep = res.data.steps.currentStep;
            var helpIcon = _this.strBackendApi + res.data.help.icon;
            var liveHelpIcon = _this.strBackendApi + res.data.liveHelp.icon;
            var logoIcon = _this.strBackendApi + res.data.ui.logo;
            var helpStatus, liveHelpStatus;
            if (res.data.liveHelp.on === 1) {
                liveHelpStatus = true;
            }
            else {
                liveHelpStatus = false;
            }
            if (res.data.help.on === 1) {
                helpStatus = true;
            }
            else {
                helpStatus = false;
            }
            _this._eventService.emit('load_topbar_data', {
                helpIcon: helpIcon,
                helpStatus: helpStatus,
                liveHelpIcon: liveHelpIcon,
                liveHelpStatus: liveHelpStatus,
                logoIcon: logoIcon,
                helpLink: res.data.help.link
            });
            _this.bIsLoading = true;
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    DamageComponent.prototype.eventChangeLocation = function (event) {
        this.bIsStart = true;
        this.bIsLoading = false;
        this.loadData(event);
    };
    DamageComponent.prototype.checkNextAbility = function ($event) {
        if ($event) {
            this._alertModalService.openDialog(1, this.mapData, this._viewContainer);
            this.bIsNext = true;
            this.bIsSeverity = false;
        }
    };
    DamageComponent.prototype.initEventData = function (event) {
        this.waitNextArea(event);
    };
    DamageComponent.prototype.waitNextArea = function (isAvailable, nCount) {
        var _this = this;
        if (nCount === void 0) { nCount = 0; }
        if (nCount > 50) {
            console.log('Time out to wait the next area in the damage page.');
        }
        else if (!this.nextAreaElement) {
            nCount++;
            setTimeout(function () { return _this.waitNextArea(isAvailable, nCount); }, 100);
        }
        else {
            this.bIsNext = isAvailable;
        }
    };
    DamageComponent.prototype.next = function () {
        this.router.navigate(['/photo', this.strSlug]);
    };
    DamageComponent.prototype.showNextSeverity = function (event) {
        this.bIsSeverity = event['status'];
        if (this.bIsSeverity) {
            this.strBtnDesc = event['desc'] + " (" + event['side'] + ")";
        }
    };
    DamageComponent.prototype.onNextSeverity = function () {
        this._eventService.emit('next_severity_event');
    };
    return DamageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
    __metadata("design:type", Object)
], DamageComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('nextAreaElement'),
    __metadata("design:type", Object)
], DamageComponent.prototype, "nextAreaElement", void 0);
DamageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-damage',
        template: __webpack_require__("../../../../../src/app/damage/damage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/damage/damage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_event_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__modals_alert_modal_alert_modal_service__["a" /* AlertModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modals_alert_modal_alert_modal_service__["a" /* AlertModalService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__modals_questions_modal_questions_modal_service__["a" /* QuestionsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modals_questions_modal_questions_modal_service__["a" /* QuestionsModalService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _g || Object])
], DamageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=damage.component.js.map

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\" *ngIf=\"bIsLoading\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group text-center\">\n      <div class=\"list-group-item-home\">\n        <div>\n          <i class=\"fa fa-align-justify feature-icon text-primary\"></i>\n        </div>\n        <div>\n          <h3 class=\"home-heading\">Disclaimer</h3>\n          <div *ngIf=\"!bIsExistSlug\">\n            <p>Call us</p>  \n          </div>\n          \n          <div *ngIf=\"bIsExistSlug\">\n            <p>vEstimate is an approximation of damages you entered. They are based on the anticipated details of the work to be done. It is possible for unexpected complications to cause some deviation from the estimate. If additional parts or labor are required you will be contacted immediately.</p>\n            <a class=\"btn btn-primary btn-block\" (click)=\"next()\" >\n              Next\n            </a>\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/disclaimer/disclaimer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This class represents the lazy loaded DisclaimerComponent.
 */
var DisclaimerComponent = (function () {
    function DisclaimerComponent(route, _spinner, router) {
        this.route = route;
        this._spinner = _spinner;
        this.router = router;
        this.strSlug = '';
        this.bIsLoading = false;
        this.bIsExistSlug = false;
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
            if (_this.strSlug) {
                _this.bIsExistSlug = true;
                _this._spinner.start();
                var that_1 = _this;
                setTimeout(function () {
                    that_1._spinner.stop();
                    that_1.bIsLoading = true;
                }, 3000);
            }
            else {
                _this.bIsLoading = true;
            }
        });
    };
    DisclaimerComponent.prototype.next = function () {
        this.router.navigate(['/estimate', this.strSlug]);
    };
    return DisclaimerComponent;
}());
DisclaimerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-disclaimer',
        template: __webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/disclaimer/disclaimer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DisclaimerComponent);

var _a, _b, _c;
//# sourceMappingURL=disclaimer.component.js.map

/***/ }),

/***/ "../../../../../src/app/estimate/estimate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.action-area {\n\tposition: fixed;\n    bottom: 60px;\n    width: calc( 100% - 10px );\n}\n\n.action-area .next-btn-area {\n\tborder: 1px solid #333;\n}\n\n.action-area button {\n\twidth: 280px;\n\tmargin: 3px 0;\n}\n\n.estimate-wrapper .estimate-body {\n  overflow: scroll;\n}\n\n.blue-btn-wrapper {\n  margin: 20px;\n}\n\n.blue-btn-wrapper a {\n  border-radius: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/estimate/estimate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable home\" *ngIf=\"bIsLoading\">\n  <div class=\"scrollable-content text-center estimate-wrapper flex-wrapper\">\n    <div class=\"estimate-header\" *ngIf=\"bIsDotSlider\">\n      <dot-slider\n      [sliderCount]=\"nTotalStep\"\n      [currentSliderCounter]=\"nCurrentStep\"\n      ></dot-slider>\n    </div>\n\n    <div class=\"estimate-body\" #displayElement>\n      <!-- <div [innerHtml]='estimateData'></div>   -->\n    </div>\n\n    <div class=\"blue-btn-wrapper\" *ngIf=\"bIsButtons\">\n      <a class=\"btn btn-primary btn-block\" (click)=\"next()\">\n        Next\n      </a>               \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/estimate/estimate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_disclaimer_modal_disclaimer_modal_service__ = __webpack_require__("../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * This class represents the lazy loaded EstimateComponent.
 */
var EstimateComponent = (function () {
    function EstimateComponent(_dataService, _storeService, activeRoute, _eventService, _router, _navbarService, _viewContainer, _disclaimerModal, _spinner, modal) {
        this._dataService = _dataService;
        this._storeService = _storeService;
        this.activeRoute = activeRoute;
        this._eventService = _eventService;
        this._router = _router;
        this._navbarService = _navbarService;
        this._viewContainer = _viewContainer;
        this._disclaimerModal = _disclaimerModal;
        this._spinner = _spinner;
        this.modal = modal;
        this.bIsLoading = false;
        this.bIsDotSlider = false;
        this.bIsButtons = false;
        this.strEstimateData = '';
        this._spinner.start();
        this.backendApi = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API;
    }
    EstimateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // activeRoute param
        this.activeRoute.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
            _this._storeService.set('slugID', _this.strSlug);
            var postData = {
                code: 200,
                data: {
                    slug: _this.strSlug
                }
            };
            _this._dataService.post('v1/estimate/estimate ', postData)
                .subscribe(function (res) {
                var data = res.data;
                if (data.steps) {
                    _this.bIsDotSlider = true;
                }
                else {
                    _this.bIsDotSlider = false;
                }
                var helpIcon = _this.backendApi + data.help.icon;
                var liveHelpIcon = _this.backendApi + data.liveHelp.icon;
                var logoIcon = _this.backendApi + data.ui.logo;
                var helpStatus, liveHelpStatus;
                if (data.liveHelp.on === 1) {
                    liveHelpStatus = true;
                }
                else {
                    liveHelpStatus = false;
                }
                if (data.help.on === 1) {
                    helpStatus = true;
                }
                else {
                    helpStatus = false;
                }
                if (data.hasOwnProperty('action')) {
                    _this.bIsButtons = true;
                }
                else {
                    _this.bIsButtons = false;
                }
                _this._eventService.emit('load_topbar_data', {
                    helpIcon: helpIcon,
                    helpStatus: helpStatus,
                    liveHelpIcon: liveHelpIcon,
                    liveHelpStatus: liveHelpStatus,
                    logoIcon: logoIcon,
                    helpLink: data.help.link
                });
                var estimateDataUrl = res.data.estimateHtml;
                var isShowEstimateModal = res.data.showDisclaimer;
                var strDisclaimer = res.data.disclaimer;
                _this._dataService.get(estimateDataUrl, false)
                    .subscribe(function (res) {
                    _this.strEstimateData = res._body;
                    _this.init();
                    _this.bIsLoading = true;
                    if (isShowEstimateModal) {
                        _this._disclaimerModal.openDialog(strDisclaimer, _this._viewContainer);
                    }
                    _this._spinner.stop();
                }, function (error) { return console.error('Unable to fetch brands', error); });
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    EstimateComponent.prototype.ngOnDestroy = function () {
        if (this._disclaimerModal) {
            this._disclaimerModal.closeDialog();
        }
    };
    EstimateComponent.prototype.init = function (counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        if (counter > 50) {
            console.log('Fail to load the estimate element.');
        }
        else if (!this.displayElement) {
            counter++;
            setTimeout(function () { return _this.init(counter); }, 50);
        }
        else {
            this.displayElement.nativeElement.innerHTML = '';
            this.displayElement.nativeElement.insertAdjacentHTML('beforeend', this.strEstimateData);
        }
    };
    EstimateComponent.prototype.next = function () {
        this._router.navigate(['/next', this.strSlug]);
    };
    return EstimateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('displayElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], EstimateComponent.prototype, "displayElement", void 0);
EstimateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-estimate',
        template: __webpack_require__("../../../../../src/app/estimate/estimate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/estimate/estimate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_store_service__["a" /* StoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_event_service__["a" /* EventService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__services_navbar_service__["a" /* NavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_navbar_service__["a" /* NavbarService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__modals_disclaimer_modal_disclaimer_modal_service__["a" /* DisclaimerModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__modals_disclaimer_modal_disclaimer_modal_service__["a" /* DisclaimerModalService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _l || Object])
], EstimateComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=estimate.component.js.map

/***/ }),

/***/ "../../../../../src/app/get-vehicle/get-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\n::-webkit-input-placeholder {\n  color: #000;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #000; \n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n  color: #000; \n}\n\n:-ms-input-placeholder {  \n  color: #000;  \n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.full-width {\n\twidth: 100%;\n}\n\nform select,\nform select:active,\nform select:hover,\nform select:focus {\n\theight: 2.5em;\n  color: black;\n  padding: 0 1em;\n}\n\nselect option:checked:after {\n  border-color: red;\n}\n\nform input {\n  border-radius: 0;\n  color: #000;\n\n}\n\n#alert_area {\n\tdisplay: none;\n}\n\nselect.disabled {\n  background: #eee;\n  border-color: #777 !important;\n}\n\n#vincode {\n  text-transform: uppercase;\n}\n\n.vehicle-model-wrapper .vehicle-model-header {\n  height: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.vehicle-model-wrapper .vehicle-model-body {\n  height: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0 10px;\n}\n\n.form-group .select-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-vehicle/get-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group\">\n      <div class=\"list-group-item-home vehicle-model-wrapper\">\n\n        <div class=\"vehicle-model-body\">\n          <form [formGroup]=\"vinForm\" validate class=\"vin-form\" *ngIf=\"bIsVinLoad\">\n          \t<fieldset>\n          \t\t<div class=\"form-group has-feedback\">\n          \t\t\t<h3 class=\"home-heading text-center\">Enter your VIN#</h3>\n                <input type=\"text\" class=\"form-control full-width\" name=\"vincode\" formControlName=\"vincode\" placeholder=\"VIN #\" pattern=\"^[A-Z0-9]{17}$\" (keyup)=\"keypressVin($event.target.value)\">\n                  <small class=\"-underline\">\n                    <a (click)=\"onVin()\">How do I find my VIN?</a>\n                  </small>\n                <small *ngIf=\"bIsVinError\" class=\"text-danger\">{{ strVinErrorText }}</small>\n          \t\t</div>\n          \t</fieldset>\n          </form>\n\n          <form [formGroup]=\"getVehicleForm\" (ngSubmit)=\"loadClaim()\" validate class=\"vin-form\" *ngIf=\"bIsYearsLoad\">\n            <fieldset>\n              <div class=\"form-group has-feedback\">\n                <h3 class=\"home-heading text-center\">Enter Year, Make & Model</h3>\n                <ng-select\n                formControlName=\"year\"\n                name=\"year\"\n                [options]=\"arrYears\"\n                (selected)=\"onYearsSelected($event)\"\n                placeholder=\"Year\">\n                </ng-select>\n              </div>\n\n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"make\"\n                name=\"make\"\n                [options]=\"arrMakes\"\n                (selected)=\"onMakesSelected($event)\"\n                [placeholder]=\"'Make'\">\n                </ng-select>\n              </div>\n              \n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"model\"\n                name=\"model\"\n                [options]=\"arrModels\"\n                (selected)=\"onModelsSelected($event)\"\n                [placeholder]=\"'Model'\">\n                </ng-select>\n              </div>\n              \n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"category\"\n                name=\"category\"\n                [options]=\"arrCategories\"\n                (selected)=\"onCategoriesSelected($event)\"\n                [placeholder]=\"'Category'\">\n                </ng-select>\n              </div>\n\n              <div class=\"alert alert-danger\" *ngIf=\"bIsVehicleError\">\n                {{ strVehicleErrorText }}\n              </div>\n\n              <button class=\"btn btn-primary btn-block\" *ngIf=\"nNextAvailable>=2\">\n                Next\n              </button>  \n            </fieldset>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/get-vehicle/get-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * This class represents the lazy loaded VehicleModelComponent.
 */
var GetVehicleComponent = (function () {
    function GetVehicleComponent(router, route, _dataService, _eventService, _storeService, _spinner, modal, vcRef) {
        this.router = router;
        this.route = route;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._storeService = _storeService;
        this._spinner = _spinner;
        this.modal = modal;
        this.vcRef = vcRef;
        modal.overlay.defaultViewContainer = vcRef;
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API;
        this.nNextAvailable = 0;
        this.bIsVinAvailable = false;
        this._spinner.start();
        this.nClaimYearID = -1;
        this.nClaimMakeID = -1;
        this.nClaimModelID = -1;
        this.nClaimCategoryID = -1;
        this.bIsVinRequire = false;
        this.bIsVinError = false;
        this.bIsVinAvailable = false;
        this.bIsYearsLoad = false;
        this.bIsVinLoad = false;
        this.arrYears = [];
        this.arrMakes = [];
        this.arrModels = [];
        this.arrCategories = [];
    }
    GetVehicleComponent.prototype.initVehicleData = function (data) {
        this.nTotoalStep = data.steps.totalStep;
        this.nCurrentStep = data.steps.currentStep;
        var strHelpIcon = this.strBackendApi + data.help.icon;
        var logoIcon = this.strBackendApi + data.ui.logo;
        var bIsHelpStatus = false;
        var bIsLiveHelpStatus = false;
        var strLiveHelpIcon = this.strBackendApi + data.liveHelp.icon;
        if (data.liveHelp.on === 1) {
            bIsLiveHelpStatus = true;
        }
        else {
            bIsLiveHelpStatus = false;
        }
        if (data.help.on === 1) {
            bIsHelpStatus = true;
        }
        else {
            bIsHelpStatus = false;
        }
        if (data.requireVIN === 1) {
            this.bIsVinRequire = true;
        }
        else {
            this.bIsVinRequire = false;
        }
        this._eventService.emit('load_topbar_data', {
            helpIcon: strHelpIcon,
            helpStatus: bIsHelpStatus,
            liveHelpIcon: strLiveHelpIcon,
            liveHelpStatus: bIsLiveHelpStatus,
            logoIcon: logoIcon,
            helpLink: data.help.link
        });
        this._spinner.stop();
    };
    GetVehicleComponent.prototype.initForm = function () {
        this.getVehicleForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            year: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            make: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            model: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])
        });
        this.getVehicleForm.get('make').disable();
        this.getVehicleForm.get('model').disable();
        this.getVehicleForm.get('category').disable();
        this.vinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            vincode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(17),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(17)
            ])
        });
        this.bIsVinLoad = true;
    };
    GetVehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinner.start();
        this.sub = this.route.params.subscribe(function (params) {
            _this.strSlugId = params['slugId'];
        });
        this.user = {
            vincode: ''
        };
        var postData = {
            code: 200,
            data: {
                slug: this.strSlugId
            }
        };
        this._dataService.post('v1/data/getvehicle', postData)
            .subscribe(function (res) {
            _this.initVehicleData(res.data);
        }, function (error) { return console.error('Unable to fetch brands', error); });
        this._dataService.get('v1/vehicle/years')
            .subscribe(function (res) {
            _this.arrYears = [];
            for (var key in res.data.years) {
                var value = parseInt(res.data.years[key]);
                _this.arrYears.push({ value: key, label: value });
            }
            _this.arrYears.sort(function (a, b) {
                return parseInt(b.label) - parseInt(a.label);
            });
            _this.bIsYearsLoad = true;
            _this.initForm();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onYearsSelected = function (event) {
        var _this = this;
        var year = event.value;
        this.arrMakes = [];
        this.arrModels = [];
        this.arrCategories = [];
        this.getVehicleForm.get('make').disable();
        this.getVehicleForm.get('model').disable();
        this.getVehicleForm.get('category').disable();
        this.nNextAvailable = 1;
        if (this.nNextAvailable === 3) {
            this.nNextAvailable = 2;
        }
        else {
            this.nNextAvailable = 1;
        }
        this.nClaimYearID = year;
        if (year === -1) {
            this.getVehicleForm.get('make').disable();
        }
        else {
            this._spinner.start();
            this.strClaimUrl = 'v1/vehicle/makesfromdata?year=' + year;
            this._dataService.get(this.strClaimUrl)
                .subscribe(function (res) {
                _this.getVehicleForm.get('make').enable();
                if (res.data instanceof Array) {
                    _this.arrMakes = res.data.map(function (item) {
                        return { value: item.make, label: item.make };
                    });
                }
                else {
                    console.log('The response data is no array in year select box');
                }
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    GetVehicleComponent.prototype.onMakesSelected = function (event) {
        var _this = this;
        var make = event.value;
        this.arrModels = [];
        this.arrCategories = [];
        this.getVehicleForm.get('model').disable();
        this.getVehicleForm.get('category').disable();
        this.nNextAvailable = 1;
        if (parseInt(make) === -1) {
            this.arrModels = [];
            this.arrCategories = [];
            this.nClaimModelID = -1;
            this.nClaimCategoryID = -1;
            this.getVehicleForm.get('model').disable();
            this.getVehicleForm.get('category').disable();
            return;
        }
        this._spinner.start();
        this.strClaimUrl = 'v1/vehicle/modelsfromdata?year=' + this.nClaimYearID;
        this.strClaimUrl += '&make=';
        this.strClaimUrl += make;
        this._dataService.get(this.strClaimUrl)
            .subscribe(function (res) {
            if (res.data instanceof Array) {
                _this.arrModels = res.data.map(function (item) {
                    return { value: item.model, label: item.model };
                });
            }
            else {
                console.log('The response data is no array in make select box');
            }
            _this.nClaimMakeID = make;
            _this.getVehicleForm.get('model').enable();
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onModelsSelected = function (event) {
        var _this = this;
        var model = event.value;
        this.arrCategories = [];
        this.getVehicleForm.get('category').disable();
        this.nNextAvailable = 1;
        if (parseInt(model) === -1) {
            this.arrCategories = [];
            this.nClaimCategoryID = -1;
            this.getVehicleForm.get('category').disable();
            return;
        }
        this._spinner.start();
        this.strClaimUrl = 'v1/vehicle/stylesfromdata?year=' + this.nClaimYearID;
        this.strClaimUrl += '&make=';
        this.strClaimUrl += this.nClaimMakeID;
        this.strClaimUrl += '&model=';
        this.strClaimUrl += model;
        this._dataService.get(this.strClaimUrl)
            .subscribe(function (res) {
            if (res.data instanceof Array) {
                _this.arrCategories = res.data.map(function (item) {
                    return { value: item.vehicleId, label: item.style };
                });
            }
            else {
                console.log('The response data is no array in make select box');
            }
            _this.nClaimModelID = model;
            _this.getVehicleForm.get('category').enable();
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onCategoriesSelected = function (event) {
        var category = event.value;
        if (parseInt(category) === -1) {
            return;
        }
        if (this.nNextAvailable === 0) {
            this.nNextAvailable = 1;
        }
        else {
            this.nNextAvailable = 2;
        }
        this.nClaimCategoryID = category;
    };
    GetVehicleComponent.prototype.keypressVin = function (value) {
        var _this = this;
        if ((/^[a-zA-Z0-9]*$/.test(value)) === false) {
            this.bIsVinError = true;
            this.alertError(1, 'Vincode should be alphanumberic and length should be 17.', 3000);
            this.vinForm.reset();
            return;
        }
        if (value.toString().length === 17) {
            this._spinner.start();
            this.strVinCode = value;
            this._dataService.get('v1/vehicle/vin?vin=' + value)
                .subscribe(function (res) {
                _this.getVehicleForm.get('make').enable();
                _this.getVehicleForm.get('model').enable();
                _this.getVehicleForm.get('category').enable();
                if (res.code === 200) {
                    _this.bIsVinAvailable = true;
                    _this.nClaimCategoryID = res.data.vehicleId;
                    _this.nNextAvailable = 3;
                    _this.arrYears = [{ value: res.data.year, label: res.data.year }];
                    _this.arrMakes = [{ value: res.data.make, label: res.data.make }];
                    _this.arrModels = [{ value: res.data.model, label: res.data.model }];
                    _this.arrCategories = [{ value: res.data.style, label: res.data.style }];
                    var that_1 = _this;
                    setTimeout(function () {
                        that_1.getVehicleForm.controls['year'].setValue(res.data.year);
                        that_1.getVehicleForm.controls['make'].setValue(res.data.make);
                        that_1.getVehicleForm.controls['model'].setValue(res.data.model);
                        that_1.getVehicleForm.controls['category'].setValue(res.data.style);
                    }, 200);
                }
                else {
                    _this.alertError(1, res.data.error, 3000);
                }
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
        else {
            this.bIsVinAvailable = false;
        }
    };
    GetVehicleComponent.prototype.alertError = function (nFormType, strErrorText, nTime) {
        if (nFormType === 0) {
            this.bIsVehicleError = true;
            this.strVehicleErrorText = strErrorText;
            var that_2 = this;
            setTimeout(function () { that_2.bIsVehicleError = false; }, nTime);
        }
        else {
            this.bIsVinError = true;
            this.strVinErrorText = strErrorText;
            var that_3 = this;
            setTimeout(function () { that_3.bIsVinError = false; }, nTime);
        }
    };
    GetVehicleComponent.prototype.loadClaim = function () {
        var _this = this;
        if (this.bIsVinRequire && !this.bIsVinAvailable) {
            this.alertError(0, 'Please enter a 17-digit VIN #', 3000);
            return;
        }
        this._spinner.start();
        var postData = {
            code: 200,
            data: {
                AutoVIN: this.strVinCode,
                AutoYear: this.getVehicleForm['value']['year'],
                AutoID: this.nClaimCategoryID,
                slug: this.strSlugId
            }
        };
        this._dataService.post('v1/data/savevehicle', postData)
            .subscribe(function (res) {
            _this._storeService.set('p_slug', res.data.slug);
            _this._spinner.stop();
            _this.router.navigate(['/damage', res.data.slug]);
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    GetVehicleComponent.prototype.onVin = function () {
        this.modal.alert()
            .size('sm')
            .showClose(true)
            .okBtnClass('hidden')
            .title('Vin Locations')
            .body("\n\t\t\t<div class=\"vin-modal-wrapper no-padding\">\n\t\t\t<img src=\"assets/img/vin_locations.png\">\n\t\t\t</div>\n\t\t\t")
            .open();
    };
    return GetVehicleComponent;
}());
GetVehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-get-vehicle',
        template: __webpack_require__("../../../../../src/app/get-vehicle/get-vehicle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/get-vehicle/get-vehicle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_event_service__["a" /* EventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_store_service__["a" /* StoreService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object])
], GetVehicleComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=get-vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group text-center\">\n      <div class=\"list-group-item-home\">\n        <div>\n          <i class=\"fa fa-check  feature-icon text-primary\"></i>\n        </div>\n        <div>\n          <h3 class=\"home-heading\">Help</h3>\n          <p>Call us</p>\n          <hr />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/help/help.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HelpComponent);

//# sourceMappingURL=help.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nul {\n  list-style-type: none;\n  padding: 0 0 0 8px;\n}\n\nh1 {\n  font-size: 26px;\n}\n\n.home-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  height: 100%;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.home-wrapper .home-header {\n\theight: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.home-wrapper .home-body {\n\theight: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home\">\n    <div class=\"text-center home-wrapper\">\n      <h1 class=\"home-header\">Vehicle Incident Report <small>v2.4</small></h1>\n      <div class=\"home-body\">\n        <div>\n          <i class=\"fa fa-flag-o feature-icon text-primary\"></i>\n        </div>\n        <div>\n          <h3 class=\"home-heading\">Enter your Claim # or VIN</h3>\n          You will be asked to provide photos and some basic information about the incident. \n          <form  [formGroup]=\"contactForm\" (ngSubmit)=\"next()\" validate class=\"contact-form\">\n            <fieldset>\n              <div class=\"form-group has-success has-feedback\">\n                <input type=\"number\" class=\"form-control\" name=\"claim_id\" formControlName=\"claim_id\" placeholder=\"Claim # or VIN\" required>\n              </div>\n\n              <div class=\"alert alert-danger\" *ngIf=\"bIsAlert\">\n                {{ strAlertText }}\n              </div>\n            </fieldset>\n            <hr>\n            <button class=\"btn btn-primary btn-block\">\n              Next\n            </button>          \n          </form>   \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * This class represents the lazy loaded HomeComponent.
 */
var HomeComponent = (function () {
    /**
    * Creates an instance of the HomeComponent
    */
    function HomeComponent(_dataService, route, router, _spinner, _storeService) {
        this._dataService = _dataService;
        this.route = route;
        this.router = router;
        this._spinner = _spinner;
        this._storeService = _storeService;
        this.strSlug = '';
        this.bIsAlert = false;
    }
    /**
    * Get the names OnInit
    */
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nClaimID = 194948;
        this.route.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
        });
        this.contactForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            claim_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])
        });
    };
    HomeComponent.prototype.next = function () {
        var _this = this;
        if (this.contactForm.valid && this.contactForm['value']['claim_id']) {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    profile_slug: this.strSlug,
                    Customer_Zip: 91701,
                    ClaimID: this.contactForm['value']['claim_id']
                }
            };
            this._dataService.post('v1/data/getclaim', postData)
                .subscribe(function (res) {
                // get the slug
                _this._spinner.stop();
                if (res.code === 200) {
                    _this._storeService.setTempData(res.data);
                    _this._storeService.set('p_slug', res.data.slug);
                    _this.router.navigate(['/vehicle', res.data.slug]);
                    _this.bIsAlert = false;
                }
                else {
                    _this.bIsAlert = true;
                    _this.strAlertText = res.data.message;
                }
            }, function (error) {
                _this._spinner.stop();
                console.error('Unable to fetch brands', error);
            });
        }
        else {
            this.bIsAlert = true;
            this.strAlertText = 'Please input the valid claim ID';
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/identify/identify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item-home.identify-area {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: relative;\n}\n\n.identify-area  .modal-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  z-index: 10;\n  height: 100%;\n  max-height: 100%;\n}\n\n.identify-area img {\n  display: inline-block;\n}\n\n.identify-area .identify-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 20%;\n  padding: 15px 0;\n}\n\n.identify-area .identify-body {\n  height: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.identify-area .identify-body .identify-content {\n  margin: 0 20px;\n  font-size: 11px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: calc( 100% - 50px);\n}\n\n.identify-area .identify-body .identify-content .desc-area {\n  height: 33.33%;\n  overflow-y: auto;\n}\n\n.identify-area .identify-body .identify-content .display-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50%;\n  max-width: 100%;\n}\n\n.identify-area .identify-body .identify-content .display-area img {\n  max-height: 100%; \n}\n\n.identify-area .identify-body .identify-content .take-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 16.67%;\n}\n\n.identify-area .identify-body .take-btn button {\n  font-size: 14px;\n  font-weight: bold;\n  background: #fce263;\n  border-radius: 5px;\n  box-shadow: 3px 3px 3px #888888;\n}\n\n.identify-area .identify-action {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 45px;\n}\n\n.identify-area .identify-action .find-btn {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  font-size: 10px;\n}\n\n.identify-area .identify-action .manual-btn {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.identify-area .identify-action button {\n  height: auto;\n  background: transparent;\n  border: none;\n  outline:none;\n}\n\n.identify-area .confirm-mileage {\n  width: 90%;\n}\n\n.identify-area .confirm-mileage .confirm-value {\n  position: relative;\n}\n\n.identify-area .confirm-mileage .confirm-value input {\n  border-color: #ccc;\n  border-radius: 5px;\n}\n\n.identify-area .confirm-mileage .confirm-value .confirm-btn {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  height: 30px;\n  background: #fce263;\n  font-weight: bold;\n  border-radius: 5px;\n}\n\n.take-photo-input {\n  display: none;\n}\n\n.identify-area .form-group {\n  color: #333;\n}\n\n.identify-area .form-group .form-group-label {\n  font-size: 16px;\n  text-align: left;\n  color: white;\n  margin-bottom: 5px;\n}\n\n.modal-title {\n  font-weight: bold;\n  text-align: left;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.identify-area .modal-header {\n  border: 0;\n}\n\n.identify-area .vin-form .btn-vin {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  height: 24px;\n  font-weight: bold;\n  background: #fce263;\n  padding: 2px 10px;\n}\n\n.identify-area .vin-form .vin-link-area {\n  text-align: left;\n  color: white;\n  margin-top: 10px;\n}\n\n.identify-area .vin-form .vin-link-area .find-vehicle-link {\n  color: #fce263;\n}\n\n\n.identify-area .modal-header .close {\n  display: inline-block;\n  height: auto;\n  font-size: 30px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.identify-area .modal-body {\n  padding: 10px;\n}\n\n.identify-area .modal-body .btn-vehicle {\n  background: transparent;\n  border: 1px solid white;\n  width: auto;\n  border-radius: 10px;\n  font-weight: bold;\n  margin-top: 15px;\n}\n\n.identify-area .modal-body .btn-vehicle:hover {\n  color: white;\n}\n\n.identify-area .btn.active.focus,\n.identify-area .btn.active:focus,\n.identify-area .btn.focus,\n.identify-area .btn:active.focus,\n.identify-area .btn:active:focus,\n.identify-area .btn:focus {\n  outline: none;\n  outline-offset: 0;\n}\n\n.identify-area .alert-danger {\n  border: 0;\n  text-align: left;\n}\n\n.identify-area form {\n  text-align: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/identify/identify.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group text-center\">\n      <div class=\"list-group-item-home identify-area\" *ngIf=\"bIsPageLoading\">\n        <div class=\"modal-wrapper\" *ngIf=\"bIsVinModal\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" (click)=\"bIsVinModal=false\">&times;</button>\n          </div>\n\n          <div class=\"modal-body\">\n            <div class=\"input-item\"  *ngIf=\"nModalType === 2\">\n              <form [formGroup]=\"getMilesForm\" (ngSubmit)=\"goWithMiles()\" validate class=\"vin-form\">\n                <fieldset>\n                  <div class=\"modal-title uppercase\">Your vehicle's mileage:</div>\n                  <div class=\"form-group has-feedback\">\n                    <input type=\"text\" class=\"form-control full-width\" name=\"mileage\" formControlName=\"mileage\">\n                    <button class=\"btn btn-vin\">\n                      Go\n                    </button>\n                    <div *ngIf=\"bIsVinErrorAlert\" class=\"alert alert-danger\">{{strErrorAlert}}</div>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n\n            <div class=\"input-item\"  *ngIf=\"nModalType === 1\">\n              <form [formGroup]=\"getVinForm\" (ngSubmit)=\"goWithVin()\" validate class=\"vin-form\">\n                <fieldset>\n                  <div class=\"modal-title uppercase\">Enter your vin:</div>\n                  <div class=\"form-group has-feedback\">\n                    <input type=\"text\" class=\"form-control full-width\" name=\"vincode\" formControlName=\"vincode\">\n                    <button class=\"btn btn-vin\">\n                      Go\n                    </button>\n\n                    <div class=\"vin-link-area\">\n                      Forgot Your Vin? <a (click)=\"onVin()\" class=\"find-vehicle-link\"> Find Vehicle -></a>\n                    </div>\n\n                    <div *ngIf=\"bIsVinErrorAlert\" class=\"alert alert-danger\">{{strErrorAlert}}</div>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n\n            <div class=\"input-item\" *ngIf=\"nModalType === 0\">\n              <form [formGroup]=\"getVehicleForm\" (ngSubmit)=\"showVehicle()\" validate class=\"vin-form\" *ngIf=\"bIsYearsLoad\">\n                <fieldset>\n                  <div class=\"modal-title uppercase\">Enter your vehicle details:</div>\n\n                  <div class=\"form-group has-feedback\">\n                    <ng-select\n                    formControlName=\"year\"\n                    name=\"year\"\n                    [options]=\"arrYears\"\n                    (selected)=\"onYearsSelected($event)\"\n                    placeholder=\"Year\">\n                    </ng-select>\n                  </div>\n\n                  <div class=\"form-group has-feedback\">\n                    <ng-select\n                    formControlName=\"make\"\n                    name=\"make\"\n                    [options]=\"arrMakes\"\n                    (selected)=\"onMakesSelected($event)\"\n                    [placeholder]=\"'Make'\">\n                    </ng-select>\n                  </div>\n                  \n                  <div class=\"form-group has-feedback\">\n                    <ng-select\n                    formControlName=\"model\"\n                    name=\"model\"\n                    [options]=\"arrModels\"\n                    (selected)=\"onModelsSelected($event)\"\n                    [placeholder]=\"'Model'\">\n                    </ng-select>\n                  </div>\n\n                  <div class=\"form-group has-feedback\">\n                    <ng-select\n                    formControlName=\"category\"\n                    name=\"category\"\n                    [options]=\"arrCategories\"\n                    (selected)=\"onCategoriesSelected($event)\"\n                    [placeholder]=\"'Category'\">\n                    </ng-select>\n                  </div>\n\n                  <div class=\"alert alert-danger\" *ngIf=\"bIsVinErrorAlert\">\n                    {{strErrorAlert}}\n                  </div>\n\n                  <button class=\"btn btn-block btn-vehicle\">\n                    Show Your Vehicle\n                  </button>  \n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"identify-header\">\n          <dot-slider\n          [sliderCount]=\"nTotoalStep\"\n          [currentSliderCounter]=\"nCurrentStep\"\n          ></dot-slider>\n          \n          <h3 class=\"home-heading\">{{strTitle}}</h3>\n        </div>\n\n        <div class=\"identify-body\">\n          <div class=\"identify-content\">\n            <div class=\"desc-area\" #descElement></div>\n\n            <div class=\"display-area\">\n              <img [src]=\"strImg\">\n            </div>\n\n            <div class=\"take-btn\" *ngIf=\"bIsTakePhoto\">\n              <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"take-photo-input\" #takePhoto/>\n              <button (click)=\"takePhoto.click()\"><i class=\"fa fa-camera\" aria-hidden=\"true\"></i> {{strBtnName}}</button>\n            </div>\n\n            <div class=\"confirm-mileage\" *ngIf=\"strCurrentPageName===arrStrPages[3]\">\n              <div class=\"confirm-message\">\n                {{strConfirmMsg}}\n              </div>\n\n              <div class=\"confirm-value\">\n                <input type=\"text\" name=\"\" [(ngModel)]=\"strConfirmValue\" class=\"full-width\">\n                <button class=\"confirm-btn\" (click)=\"confirmMileage()\">CONFIRM</button>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"identify-action btn-primary full-width\">\n            <div class=\"find-btn\" *ngIf=\"bIsFindBtn\">\n              <button (click)=\"findBtn()\">{{strFindBtn}}</button>\n            </div>\n\n            <div class=\"manual-btn\" *ngIf=\"bIsManualBtn\">\n              <button (click)=\"manualBtn(strManualBtnCallback)\">{{strManualBtn}}</button>\n            </div>\n          </div>\n        </div>\n          \n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/identify/identify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdentifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_capture_modal_capture_modal_service__ = __webpack_require__("../../../../../src/app/modals/capture-modal/capture-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * This class represents the lazy loaded IdentifyComponent.
 */
var IdentifyComponent = (function () {
    function IdentifyComponent(route, _dataService, _eventService, router, _spinner, _captureModal, _viewContainer) {
        this.route = route;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this.router = router;
        this._spinner = _spinner;
        this._captureModal = _captureModal;
        this._viewContainer = _viewContainer;
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API;
        this.nTotoalStep = 0;
        this.nCurrentStep = 0;
        this.nYearID = -1;
        this.nMakeID = -1;
        this.nModelID = -1;
        this.nCategoryID = -1;
        this.nModalType = -1;
        this.arrStrPages = ['identify', 'identify_retry', 'identify_odometer', 'confirm_odometer'];
        this.arrStrMaualCallbacks = ['manualVin', 'manualOdomter'];
        this.bIsTakePhoto = false;
        this.bIsVinModal = false;
        this.bIsVinErrorAlert = false;
        this.bIsYearsLoad = false;
        this.arrYears = [];
        this.arrMakes = [];
        this.arrModels = [];
        this.arrCategories = [];
    }
    IdentifyComponent.prototype.getEventData = function (data) {
        this.nTotoalStep = data.steps.totalStep;
        this.nCurrentStep = data.steps.currentStep;
        this.strLiveHelpIcon = this.strBackendApi + data.liveHelp.icon;
        this.strHelpIcon = this.strBackendApi + data.help.icon;
        var logoIcon = this.strBackendApi + data.ui.logo;
        this.strTitle = data.title;
        this.strDesc = data.desc;
        this.strImg = this.strBackendApi + data.img;
        this.strBtnName = data.button;
        this.strCallback = data.callback;
        if (this.strCurrentPageName === this.arrStrPages[0] || this.strCurrentPageName === this.arrStrPages[1]) {
            this.strBtnName = data.button;
            this.bIsTakePhoto = true;
        }
        else {
            if (data.take && data.take.on === 1) {
                this.strBtnName = data.take.button;
                this.bIsTakePhoto = true;
            }
            else {
                this.bIsTakePhoto = false;
            }
        }
        if (this.strCurrentPageName === this.arrStrPages[3]) {
            this.strConfirmMsg = data.message;
            this.strConfirmValue = data.miles;
        }
        if (data.liveHelp && data.liveHelp.on === 1) {
            this.bIsLiveHelpStatus = true;
        }
        else {
            this.bIsLiveHelpStatus = false;
        }
        if (data.help && data.help.on === 1) {
            this.bIsHelpStatus = true;
        }
        else {
            this.bIsHelpStatus = false;
        }
        if (data.find && data.find.on === 1) {
            this.bIsFindBtn = true;
            this.strFindBtn = data.find.button;
        }
        else {
            this.bIsFindBtn = false;
        }
        if (data.manual && data.manual.on === 1) {
            this.bIsManualBtn = true;
            this.strManualBtn = data.manual.button;
            this.strManualBtnCallback = data.manual.callback;
        }
        else {
            this.bIsManualBtn = false;
        }
        this._eventService.emit('load_topbar_data', {
            helpIcon: this.strHelpIcon,
            helpStatus: this.bIsHelpStatus,
            liveHelpIcon: this.strLiveHelpIcon,
            liveHelpStatus: this.bIsLiveHelpStatus,
            logoIcon: logoIcon,
            helpLink: data.help.link
        });
        this.bIsPageLoading = true;
        this.loadDescElement();
        this._spinner.stop();
    };
    IdentifyComponent.prototype.loadDescElement = function (nCount) {
        var _this = this;
        if (nCount === void 0) { nCount = 0; }
        if (nCount > 50) {
            console.log('Timeout to load the desc element');
        }
        else if (!this.descElement) {
            nCount++;
            setTimeout(function () { return _this.loadDescElement(nCount); }, 100);
        }
        else {
            this.descElement.nativeElement.innerHTML = this.strDesc;
            var url = this.strBackendApi + '/v1/data/' + this.strCallback;
            var postData_1;
            switch (this.strCurrentPageName) {
                case this.arrStrPages[0]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            type: 'VIN'
                        }
                    };
                    break;
                case this.arrStrPages[1]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            type: 'VIN'
                        }
                    };
                    break;
                case this.arrStrPages[2]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            type: 'Odometer'
                        }
                    };
                    break;
                case this.arrStrPages[3]:
                    postData_1 = {
                        code: 200,
                        data: {
                            slug: this.strSlug,
                            miles: this.strConfirmValue
                        }
                    };
                    break;
            }
            this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({ url: url });
            this.uploader.onBuildItemForm = function (fileItem, form) {
                form.append('data', JSON.stringify(postData_1));
            };
            this.uploader.onAfterAddingFile = function (fileItem) {
                fileItem.withCredentials = false;
                fileItem.upload();
                _this.openUploadProgressBar();
            };
        }
    };
    IdentifyComponent.prototype.openUploadProgressBar = function () {
        var _this = this;
        this._captureModal.openDialog(this.uploader, this._viewContainer)
            .then(function (dialog) {
            dialog.result.then(function (returnData) {
                if (returnData) {
                    if (returnData.code === 200) {
                        _this.manageData(returnData);
                    }
                    else {
                        console.log('To take a photo is raised the error.');
                    }
                }
            });
        });
    };
    IdentifyComponent.prototype.initForm = function () {
        this.getVehicleForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            year: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: null, disabled: false }, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            make: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: null, disabled: true }, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            model: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: null, disabled: true }, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ]),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: null, disabled: true }, [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])
        });
    };
    IdentifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bIsPageLoading = false;
        this._spinner.start();
        this.paramSub = this.route.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
            _this.strCurrentPageName = _this.router.url.split('/')[1];
            var url;
            switch (_this.strCurrentPageName) {
                case _this.arrStrPages[0]:
                    url = '/v1/data/requestvin';
                    break;
                case _this.arrStrPages[1]:
                    url = '/v1/data/vinretry';
                    break;
                case _this.arrStrPages[2]:
                    url = '/v1/data/requestodometer';
                    break;
                case _this.arrStrPages[3]:
                    url = '/v1/data/confirmodometer';
                    break;
            }
            _this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    slug: _this.strSlug
                }
            };
            _this._dataService.post(url, postData)
                .subscribe(function (res) {
                _this.getEventData(res.data);
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
        this._dataService.get('v1/vehicle/years')
            .subscribe(function (res) {
            _this.arrYears = [];
            for (var key in res.data.years) {
                var value = parseInt(res.data.years[key]);
                _this.arrYears.push({ value: key, label: value });
            }
            _this.arrYears.sort(function (a, b) {
                return parseInt(b.label) - parseInt(a.label);
            });
            _this.bIsYearsLoad = true;
            _this.initForm();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    IdentifyComponent.prototype.ngOnDestroy = function () {
        if (this.paramSub) {
            this.paramSub.unsubscribe();
        }
        if (this._captureModal) {
            this._captureModal.closeDialog();
        }
    };
    IdentifyComponent.prototype.manageData = function (res) {
        var that = this;
        switch (res.data.callback) {
            case 'vinretry':
                that.router.navigate(["/" + this.arrStrPages[1], res.data.slug]);
                break;
            case 'requestodometer':
                that.router.navigate(["/" + this.arrStrPages[2], res.data.slug]);
                break;
            case 'confirmodometer':
                that.router.navigate(["/" + this.arrStrPages[3], res.data.slug]);
                break;
            case 'getclaim':
                that.router.navigate(['/vehicle', res.data.slug]);
                break;
        }
    };
    IdentifyComponent.prototype.confirmMileage = function () {
        var _this = this;
        this._spinner.start();
        var postData = {
            code: 200,
            data: {
                miles: this.strConfirmValue,
                slug: this.strSlug
            }
        };
        this._dataService.post('v1/data/confirmodometersubmit', postData)
            .subscribe(function (res) {
            _this._spinner.stop();
            _this.manageData(res);
        }, function (error) {
            console.error('Unable to fetch brands', error);
            _this._spinner.stop();
        });
    };
    IdentifyComponent.prototype.findBtn = function () {
        this.bIsVinModal = this.bIsVinModal ? false : true;
        this.nModalType = 0;
    };
    IdentifyComponent.prototype.onYearsSelected = function (event) {
        var _this = this;
        console.log('----focusing');
        var year = event.value;
        this.arrMakes = [];
        this.arrModels = [];
        this.getVehicleForm.get('make').disable();
        this.getVehicleForm.get('model').disable();
        this.getVehicleForm.get('category').disable();
        this.nYearID = year;
        if (year === -1) {
            this.getVehicleForm.get('make').disable();
        }
        else {
            this._spinner.start();
            var strClaimUrl = 'v1/vehicle/makesfromdata?year=' + year;
            this._dataService.get(strClaimUrl)
                .subscribe(function (res) {
                _this.getVehicleForm.get('make').enable();
                if (res.data instanceof Array) {
                    _this.arrMakes = res.data.map(function (item) {
                        return { value: item.make, label: item.make };
                    });
                }
                else {
                    console.log('The response data is no array in year select box');
                }
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    IdentifyComponent.prototype.onMakesSelected = function (event) {
        var _this = this;
        var make = event.value;
        this.arrModels = [];
        this.getVehicleForm.get('model').disable();
        this.getVehicleForm.get('category').disable();
        if (parseInt(make) === -1) {
            this.arrModels = [];
            this.nModelID = -1;
            this.getVehicleForm.get('model').disable();
            this.getVehicleForm.get('category').disable();
            return;
        }
        this._spinner.start();
        var strClaimUrl = 'v1/vehicle/modelsfromdata?year=' + this.nYearID;
        strClaimUrl += '&make=';
        strClaimUrl += make;
        this._dataService.get(strClaimUrl)
            .subscribe(function (res) {
            if (res.data instanceof Array) {
                _this.arrModels = res.data.map(function (item) {
                    return { value: item.model, label: item.model };
                });
            }
            else {
                console.log('The response data is no array in make select box');
            }
            _this.nMakeID = make;
            _this.getVehicleForm.get('model').enable();
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    IdentifyComponent.prototype.onModelsSelected = function (event) {
        var _this = this;
        var model = event.value;
        this.arrCategories = [];
        this.getVehicleForm.get('category').disable();
        if (parseInt(model) === -1) {
            this.arrCategories = [];
            this.nCategoryID = -1;
            this.getVehicleForm.get('category').disable();
            return;
        }
        this._spinner.start();
        var strClaimUrl = 'v1/vehicle/stylesfromdata?year=' + this.nYearID;
        strClaimUrl += '&make=';
        strClaimUrl += this.nMakeID;
        strClaimUrl += '&model=';
        strClaimUrl += model;
        this._dataService.get(strClaimUrl)
            .subscribe(function (res) {
            if (res.data instanceof Array) {
                _this.arrCategories = res.data.map(function (item) {
                    return { value: item.vehicleId, label: item.style };
                });
            }
            else {
                console.log('The response data is no array in make select box');
            }
            _this.nModelID = model;
            _this.getVehicleForm.get('category').enable();
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    IdentifyComponent.prototype.onCategoriesSelected = function (event) {
        var category = event.value;
        if (parseInt(category) === -1) {
            return;
        }
        this.nCategoryID = category;
    };
    IdentifyComponent.prototype.alertError = function (text, time) {
        this.bIsVinErrorAlert = true;
        this.strErrorAlert = text;
        var that = this;
        setTimeout(function () { that.bIsVinErrorAlert = false; }, time);
    };
    IdentifyComponent.prototype.showVehicle = function () {
        var _this = this;
        if (!this.getVehicleForm.valid) {
            this.alertError('Please select all the fields.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    AutoYear: this.getVehicleForm['value']['year'],
                    AutoID: this.nCategoryID,
                    slug: this.strSlug
                }
            };
            this._dataService.post('v1/data/savevehicle', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this.manageData(res);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
            });
        }
    };
    IdentifyComponent.prototype.manualBtn = function (strCallback) {
        if (strCallback === this.arrStrMaualCallbacks[0]) {
            this.nModalType = 1;
            this.getVinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                vincode: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(17),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(17)
                ])
            });
        }
        else {
            this.nModalType = 2;
            this.getMilesForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
                mileage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('[0-9]*')
                ])
            });
        }
        this.bIsVinModal = true;
    };
    IdentifyComponent.prototype.goWithMiles = function () {
        var _this = this;
        if (!this.getMilesForm.valid) {
            this.alertError('The mileage must be numberic.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    miles: this.getMilesForm['value']['mileage'],
                    slug: this.strSlug
                }
            };
            this._dataService.post('v1/data/confirmodometersubmit', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this.router.navigate(['/vehicle', res.data.slug]);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
            });
        }
    };
    IdentifyComponent.prototype.goWithVin = function () {
        var _this = this;
        if (!this.getVinForm.valid || (/^[a-zA-Z0-9]*$/.test(this.getVinForm['value']['vincode'])) === false) {
            this.alertError('Vincode should be alphanumberic and length should be 17.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    AutoVIN: this.getVinForm['value']['vincode'],
                    slug: this.strSlug
                }
            };
            this._dataService.post('v1/data/savevehicle', postData)
                .subscribe(function (res) {
                _this._spinner.stop();
                _this.manageData(res);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
                _this.alertError('This Vincode is invalid.', 3000);
            });
        }
    };
    IdentifyComponent.prototype.onVin = function () {
        this.nModalType = 0;
    };
    return IdentifyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('descElement'),
    __metadata("design:type", Object)
], IdentifyComponent.prototype, "descElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('takePhoto'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], IdentifyComponent.prototype, "takePhoto", void 0);
IdentifyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-identify',
        template: __webpack_require__("../../../../../src/app/identify/identify.component.html"),
        styles: [__webpack_require__("../../../../../src/app/identify/identify.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_event_service__["a" /* EventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__modals_capture_modal_capture_modal_service__["a" /* CaptureModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__modals_capture_modal_capture_modal_service__["a" /* CaptureModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _h || Object])
], IdentifyComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=identify.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/alert-modal/alert-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-dialog {\n\tpadding: 1em;\n}\n\n.more-damage .button-area {\n  margin-bottom: 20px;\n}\n\n.more-damage .button-area a{\n  width: 230px;\n  text-align: center;\n}\n\n.more-damage .button-area .btn-warning {\n\tmargin-bottom: 1em;\n}\n\n.btn-warning \n{\n    background-color: #FFAE00 !important;\n}\n\n.damage-alert-modal .modal-body,\n.damage-alert-modal .modal-header {\n  padding: 20px 20px 0;\n}\n\n.damage-alert-modal .modal-wrapper .modal-body {\n  font-size: 17px;\n}\n\n.modal-wrapper .modal-body .img-area {\n  margin: 20px 0;\n}\n\n.modal-wrapper .modal-body .img-area img {\n  display: block;\n}\n\n.modal-wrapper .modal-action-area {\n  width: 100%;\n  border-top: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 0;\n}\n\n.home-heading.modal-header {\n  border: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.modal-action-area a {\n  font-size: 17px;\n}\n\n.damage-alert-modal .img-area .add-more-img {\n  margin: 50px 0;\n  width: 50px; \n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/alert-modal/alert-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center damage-alert-modal\">\n  <div class=\"select-damage modal-wrapper\" *ngIf=\"!modalType\">\n    <div class=\"home-heading modal-header\">\n      Selecting your Damage\n    </div>\n\n    <div class=\"modal-body\">\n      <div class=\"description\">\n        {{strDescription}}\n      </div>\n\n      <div class=\"img-area\">\n        <img [src]=\"strImgUrl\">\n      </div>\n    </div>\n\n    <div class=\"modal-action-area\">\n      <a class=\"btn\" (click)=\"onCancel()\">Begin</a>\n    </div>\n  </div>\n\n  <div class=\"more-damage modal-wrapper\" *ngIf=\"modalType\">\n    <div class=\"home-heading modal-header\" [innerHTML]=\"strTitle\"></div>\n\n    <div class=\"modal-body\">\n      <div class=\"description\" [innerHTML]=\"strDescription\"></div>\n\n      <div class=\"img-area align-item-center\">\n        <img class=\"add-more-img\" [src]=\"strImgUrl\">\n      </div>\n    </div>\n\n    <div class=\"button-area\">\n      <a class=\"btn\" (click)=\"onCancel()\" [ngStyle]=\"moreBtnObject['style']\" *ngIf=\"moreBtnObject['on'] === 1\"><span [innerHTML]=\"moreBtnObject['label']\"></span></a>\n      <a class=\"btn\" (click)=\"next()\" [ngStyle]=\"doneBtnObject['style']\" *ngIf=\"doneBtnObject['on'] === 1\"><span [innerHTML]=\"doneBtnObject['label']\"></span></a>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/alert-modal/alert-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertModalComponent = (function () {
    function AlertModalComponent(dialog, element, router) {
        this.dialog = dialog;
        this.element = element;
        this.router = router;
        this.context = dialog.context;
        if (dialog.context.nType === 0) {
            this.modalType = false;
            this.strDescription = this.context.alertData.data.popupIntro.description;
            this.strImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API + this.context.alertData.data.popupIntro.image;
        }
        else {
            this.doneBtnObject = {};
            this.moreBtnObject = {};
            this.modalType = true;
            var moreDdamageData = this.context.alertData.data.popupMoreDamage;
            this.strTitle = moreDdamageData['title'];
            this.strDescription = moreDdamageData['description'];
            this.strSlug = this.context.alertData.slug;
            this.strImgUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API + moreDdamageData.image;
            this.doneBtnObject['label'] = moreDdamageData['done_button']['button'];
            this.doneBtnObject['style'] = {
                color: moreDdamageData['done_button']['color'],
                background: moreDdamageData['done_button']['background_color']
            };
            this.doneBtnObject['on'] = moreDdamageData['done_button']['on'];
            this.moreBtnObject['label'] = moreDdamageData['more_button']['button'];
            this.moreBtnObject['style'] = {
                color: moreDdamageData['more_button']['color'],
                background: moreDdamageData['more_button']['background_color']
            };
            this.moreBtnObject['on'] = moreDdamageData['more_button']['on'];
        }
    }
    AlertModalComponent.prototype.ngOnInit = function () { };
    AlertModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    AlertModalComponent.prototype.beforeClose = function () {
        return false;
    };
    AlertModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    AlertModalComponent.prototype.next = function () {
        this.dialog.close();
        this.router.navigate(['/photo', this.strSlug]);
    };
    return AlertModalComponent;
}());
AlertModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert-modal',
        template: __webpack_require__("../../../../../src/app/modals/alert-modal/alert-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/alert-modal/alert-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AlertModalComponent);

var _a, _b, _c;
//# sourceMappingURL=alert-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/alert-modal/alert-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_modal_component__ = __webpack_require__("../../../../../src/app/modals/alert-modal/alert-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertModalService = (function () {
    function AlertModalService(modal) {
        this.modal = modal;
    }
    AlertModalService.prototype.openDialog = function (nType, alertData, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        this.modal.open(__WEBPACK_IMPORTED_MODULE_2__alert_modal_component__["a" /* AlertModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ nType: nType, alertData: alertData }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        })
            .catch(function () {
            _this.destroyModal();
        });
    };
    ;
    AlertModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    AlertModalService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.modal.overlay.defaultViewContainer) {
                this.modal.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
        }
    };
    return AlertModalService;
}());
AlertModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], AlertModalService);

var _a;
//# sourceMappingURL=alert-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/capture-modal/capture-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".captuure-wrapper #capture_file_input {\n\tdisplay: none;\n}\n\n.captuure-wrapper .modal-header button {\n\theight: auto;\n}\n\n.captuure-wrapper .modal-body {\n\tpadding: 10px;\n}\n\n.captuure-wrapper .modal-body .done-icon i {\n\tfont-size: 24px;\n}\n\n.captuure-wrapper .modal-body .progress {\n\tmargin: 0;\n}\n\n.captuure-wrapper .modal-action-area .upload-icon {\n    width: 20px;\n    margin-right: 5px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/capture-modal/capture-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"captuure-wrapper text-center upload-modal-area modal-wrapper\">\n\t<div class=\"modal-body\">\n\t\t<div class=\"img-wrapper\">\n\t  \t\t<div class=\"progress\" *ngIf=\"strCurrentStatus === arrStrSTATUSES[0]\">\n\t  \t\t\t<div class=\"progress-bar\" role=\"progressbar\" #fileProgress></div>\n\t  \t\t</div>\n\t  \t\t<div class=\"done-icon\" *ngIf=\"strCurrentStatus === arrStrSTATUSES[1]\">\n\t  \t\t\t<i class=\"fa fa-check-circle success\" [style.color]=\"'#007aff'\" aria-hidden=\"true\" *ngIf=\"bIsSuccessResult\"></i>\n\t  \t\t\t<i class=\"fa fa-times-circle error\" [style.color]=\"'red'\" aria-hidden=\"true\" *ngIf=\"!bIsSuccessResult\"></i>\n\t  \t\t</div>\n\t  \t</div>\n\t</div>\n\n\t<div class=\"modal-action-area pointer\">\n\t\t<div class=\"waiting-btn upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrSTATUSES[0]\">\n\t\tUploading ...\n\t\t</div>\n\n\t\t<div class=\"done-btn pointer upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrSTATUSES[1]\" [ngClass]=\"{'warning-btn': !bIsSuccessResult}\">\n\t  \t\t{{strResult}}\n\t  \t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/capture-modal/capture-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptureModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CaptureModalComponent = (function () {
    function CaptureModalComponent(dialog, renderer, router) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.router = router;
        this.arrStrSTATUSES = ['uploading', 'done'];
        this.bIsSuccessResult = false;
        this.strCurrentStatus = this.arrStrSTATUSES[0];
        this.context = dialog.context;
    }
    CaptureModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uploader = this.context.uploader;
        uploader.onProgressAll = function (progress) {
            if (_this.strCurrentStatus === _this.arrStrSTATUSES[0]) {
                if (_this.fileProgress) {
                    console.log(11111111);
                    _this.renderer.setElementStyle(_this.fileProgress.nativeElement, 'width', progress + '%');
                }
                else {
                    console.log('The file progress bar element is not exsited.');
                }
            }
        };
        uploader.onCompleteItem = function (item, res, status, headers) {
            res = JSON.parse(res);
            if (status === 500) {
                _this.bIsSuccessResult = false;
                _this.strResult = 'Fail to upload';
            }
            else {
                _this.bIsSuccessResult = true;
                _this.strResult = 'Success';
            }
            _this.strCurrentStatus = _this.arrStrSTATUSES[1];
            var that = _this;
            setTimeout(function () {
                that.dialog.close(res);
            }, 1000);
        };
    };
    CaptureModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    CaptureModalComponent.prototype.beforeClose = function () {
        return false;
    };
    CaptureModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    return CaptureModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileProgress'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], CaptureModalComponent.prototype, "fileProgress", void 0);
CaptureModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-content',
        template: __webpack_require__("../../../../../src/app/modals/capture-modal/capture-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/capture-modal/capture-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], CaptureModalComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=capture-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/capture-modal/capture-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptureModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capture_modal_component__ = __webpack_require__("../../../../../src/app/modals/capture-modal/capture-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CaptureModalService = (function () {
    function CaptureModalService(modal) {
        this.modal = modal;
    }
    CaptureModalService.prototype.openDialog = function (uploader, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__capture_modal_component__["a" /* CaptureModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ uploader: uploader }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        })
            .catch(function () {
            _this.destroyModal();
        });
    };
    ;
    CaptureModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    CaptureModalService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.modal.overlay.defaultViewContainer) {
                this.modal.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
        }
    };
    return CaptureModalService;
}());
CaptureModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], CaptureModalService);

var _a;
//# sourceMappingURL=capture-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-dialog {\n\tpadding: 1em;\n}\n\n.modal-dialog .title {\n\tfont-size: 16px;\n\tmargin-bottom: 1em;\n}\n\n.modal-dialog .home-heading {\n  color: #007aff;\n  font-size: 23px;\n  font-weight: bold;\n  margin-bottom: 20px; \n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center modal-dialog\">\n  <div class=\"title\">Are you sure you want to remove this damaged area.</div>\n  <div>\n    <a class=\"btn btn-primary\" #deleteMark (click)=\"DeleteMark()\">Yes</a>\n    <a class=\"btn btn-default\" (click)=\"Cancel()\">No</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmModalComponent = (function () {
    function ConfirmModalComponent(dialog, _storeService, _dataService) {
        this.dialog = dialog;
        this._storeService = _storeService;
        this._dataService = _dataService;
        this.carmapHandler = dialog.context.carmapHandler;
        this.markList = dialog.context.carmapHandler.markList;
        this.markId = dialog.context.markId;
    }
    ConfirmModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    ConfirmModalComponent.prototype.beforeClose = function () {
        return false;
    };
    ConfirmModalComponent.prototype.Cancel = function () {
        this.dialog.close();
    };
    ConfirmModalComponent.prototype.DeleteMark = function () {
        var _this = this;
        var deletedId = this.markList[this.markId].id;
        var postData = {
            code: 200,
            data: {
                slug: this.carmapHandler.slug,
                autoPartID: deletedId
            }
        };
        this._dataService.post('v1/data/autopartremove', postData)
            .subscribe(function (res) {
            _this.markList.splice(_this.markId, 1);
            _this.carmapHandler.carImgMap.deleteCheckMark(deletedId);
            _this.carmapHandler.carImgMap.updatePolygon(_this.markList);
            _this.carmapHandler.doneAutoPart(_this.markList);
            _this.dialog.close();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    return ConfirmModalComponent;
}());
ConfirmModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-confirm-modal',
        template: __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* StoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], ConfirmModalComponent);

var _a, _b, _c;
//# sourceMappingURL=confirm-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_modal_component__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmModalService = (function () {
    function ConfirmModalService(modal) {
        this.modal = modal;
    }
    ConfirmModalService.prototype.openDialog = function (carmapHandler, markId, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__confirm_modal_component__["a" /* ConfirmModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["l" /* overlayConfigFactory */])({ carmapHandler: carmapHandler,
            markId: markId }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        })
            .catch(function () {
            _this.destroyModal();
        });
    };
    ;
    ConfirmModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    ConfirmModalService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.modal.overlay.defaultViewContainer) {
                this.modal.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
        }
    };
    return ConfirmModalService;
}());
ConfirmModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], ConfirmModalService);

var _a;
//# sourceMappingURL=confirm-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/damage-modal/damage-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    font-size: 16px;\n}\n\n.modal-dialog {\n    padding: 1em;\n}\n\n.action-area {\n    font-size: 20px;\n}\n\n.button-area {\n    padding: 1em 0 2em 0;\n    display: list-item;\n    list-style-type: none;\n}\n\ninput {\n    margin: 0;\n    height: auto !important;\n}\n\nimg {\n    width: 100%;\n    height: auto;\n}\n\n.step {\n    display: none;\n}\n\n.progress-slider {\n    margin: 5px 0;\n}\n\n.dmg-btn {\n    border: 1px solid #333;\n    border-radius: 0;\n    width: 100%;\n    font-size: 15px;\n    padding: 6px 0;\n    color: #000;\n}\n\n.prvious-btn, .next-btn {\n    width: 120px;\n}\n\n.inline {\n    display: inline-block;\n}\n.img-block {\n    text-align: left;\n    padding: 8px;\n}\n\n.modal-dialog .home-heading {\n    color: #007aff;\n    font-size: 23px;\n    font-weight: bold;\n    margin-bottom: 20px; \n}\n\n#damage_modal h3 {\n    color: #007aff;\n    font-size: 23px;\n    font-weight: bold;\n    padding-bottom: 2px;\n    border-bottom: solid 1px;\n    margin-bottom: 10px;\n}\n\n.image-area {\n    cursor: pointer;\n}\n\n.step p\n{\n    margin: 5px 0 0 0;\n    color: #000;\n    font-size: 13px;\n    line-height: 105%;\n    \n}\n.clear\n{\n    clear: both;\n}\n\n.btn-less-damage\n{\n    background-color: #FFAE00;\n    border-color: #FFAE00;\n    border-radius: 0;\n    padding: 10px;\n}\n\n.btn-more-damage\n{\n    background-color: #FF0000;\n    border-color: #FF0000;\n    border-radius: 0;\n    padding: 10px;\n}\n\n.damage-modal-group .body {\n    display: -webkit-flex; /* Safari */\n    -webkit-flex-wrap: wrap; /* Safari 6.1+ */\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n}\n\n.damage-modal-group .body .progress-slider {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.damage-modal-group .body .step {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n}\n\n.damage-modal-group .body .step .image-area {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.damage-modal-group .modal-header {\n    margin-top: 1em;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    border: 0;\n}\n\n.damage-modal-group .modal-header .home-heading {\n    font-size: 18px;\n}\n\n.damage-modal-group .modal-header .header-description {\n    font-size: 16px;\n}\n\n.damage-modal-group .modal-header .confirm-description {\n    font-size: 15px;\n}\n\n.damage-modal-group .next-btn-wrap {\n    border-top: 1px solid #ddd;\n    padding: 7px 0;\n}\n\n.damage-modal-group .next-btn-wrap.next-back-btn-wrap {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.damage-modal-group .next-btn-wrap .btn {\n    font-size: 17px;\n}\n\n.damage-modal-group .question-header {\n    padding: 20px 0;\n    border-bottom: 1px solid #ddd;\n}\n\n.question-modal .body {\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1em;\n}\n\n.question-modal .header {\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 20px;\n}\n\n.question-modal .body.img-active {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-align: baseline;\n        -ms-flex-align: baseline;\n            align-items: baseline;\n    padding: 10px;\n}\n\n.question-modal .body.img-active .img-type {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n}\n\n.question-modal .body.img-active .img-type .img-block {\n}\n\n.question-modal .body.img-active .img-type .img-block img.active,\n.question-modal .body.img-active .img-type .img-block img:hover {\n    border: 2px solid #007aff;\n}\n\n.question-modal .body.img-active .img-type .img-question-content {\n    font-size: 12px;\n    font-weight: normal;\n}\n\n.question-modal .body .content {\n    font-size: 16px;\n}\n\n.description .damage-level-label {\n    font-size: 17px;\n    text-transform: none;\n}\n\n#damage_modal .close {\n    top: 10px;\n    right: 10px;\n    position: absolute;\n}\n\n.help-mark i {\n    color: #007aff;\n}\n\n.third-section .btn {\n    font-size: 17px;\n    font-weight: bold;\n}\n\n.select-sectiion label.img-block {\n    margin: 0;\n}\n\n.select-sectiion .img-question-content {\n    font-size: 16px;\n    font-weight: normal;\n}\n\n.header .confirm-description {\n    margin-bottom: 10px;\n}\n\n.imp-full-width {\n    width: 100% !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/damage-modal/damage-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"damage_modal\">\n  <div class=\"helper-area\" *ngIf=\"nQuestionType === 4\">\n    <div class=\"close\" (click)=\"closeHelper()\">\n      <span>&times;</span>\n    </div>\n    <div class=\"damage-modal-group modal-wrapper\">\n      <div class=\"modal-header\">\n        <div class=\"header-description\">{{ strHelperContent }}</div>  \n      </div>\n      \n      <div class=\"next-btn-wrap\">\n        <a class=\"btn btn-block\" (click)=\"closeHelper()\">\n          Close\n        </a>\n      </div>  \n    </div>\n  </div>\n\n  <div class=\"select-confirm-area\" *ngIf=\"nQuestionType === 5\">\n    <div class=\"damage-modal-group modal-wrapper\">\n      <div class=\"modal-header\">\n        <div class=\"confirm-description\">You have selected a Level {{ nSelectedLevel }}  Scrape as your damage. To keep select \"Next\" or choose \"Back\" to select another level...\n        <span class=\"help-mark\" (click)=\"helper()\">\n          <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n        </span>\n        </div>\n      </div>\n\n      <div class=\"body\">\n        <div class=\"image-area\">\n          <img src=\"{{host}}{{selectedImg.thumb}}\"/>\n        </div>\n      </div>\n      \n      <div class=\"next-btn-wrap next-back-btn-wrap\">\n        <a class=\"btn flex-1\" (click)=\"closeHelper(1)\">Back</a>\n        <a class=\"btn flex-1\" (click)=\"damageFinalized()\">Next</a>\n      </div>  \n    </div>\n  </div>\n\n  <div *ngIf=\"nQuestionType === 1\" class=\"autopart-area\"><!-- autopart -->\n    <div class=\"close\" (click)=\"closeModal()\">\n      <span>&times;</span>\n    </div>\n\n    <div class=\"damage-modal-group modal-wrapper\">\n      <div class=\"modal-header\"><!-- header -->\n        <div class=\"home-heading\">select damage severity</div>\n        <div class=\"header-description\">\n          Damage Level:{{arrObjDamageList[nSelectedLevel - nLevelMin]['shortName']}}(Lv.{{ nSelectedLevel }})\n          <span class=\"help-mark\" (click)=\"helper()\">\n            <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>\n          </span>\n        </div>  \n      </div><!-- header -->\n\n      <div class=\"body\"><!-- body -->\n        <div class=\"progress-slider\">\n          <level-slider [min]=\"nLevelMin\"\n          [max]=\"nLevelMax\"\n          [selectValue] =\"nSelectedLevel\"\n          (onLChange)=\"onChangeSlider($event)\"></level-slider>\n        </div>\n\n        <div class=\"step step{{colindex + nLevelMin}}\" *ngFor=\"let damage of arrObjDamageList; let colindex = index\">\n          <div class=\"image-area\" (click)=\"clickDoorDamage(damage, colindex);\">\n            <img src=\"{{host}}{{damage.thumb}}\" (load)=\"loadImg()\"/>\n          </div>\n          <div class=\"action-area\">\n            <div class=\"second-section row no-margin\">\n              <div class=\"col-xs-6 no-padding\" [ngClass]=\"{'imp-full-width': nSelectedLevel === nLevelMax}\">\n                <a class=\"btn btn-primary full-width btn-less-damage\" (click)=\"previousLevel(colindex)\" *ngIf=\"colindex!=0\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Less Damage</a>  \n              </div>\n              <div class=\"col-xs-6 no-padding\" [ngClass]=\"{'imp-full-width': nSelectedLevel === nLevelMin}\">\n                  <a class=\"btn btn-primary full-width btn-more-damage\" (click)=\"nextLevel(colindex)\"  *ngIf=\"colindex!=(nLoadImgTotal - 1)\">More Damage <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n\n            <div class=\"next-btn-wrap row no-margin\">\n              <a class=\"btn btn-block\" (click)=\"clickDoorDamage(damage, colindex)\">Next</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div><!-- body -->\n  </div><!-- autopart -->\n  \n  <div class=\"damage-modal-group modal-wrapper\" *ngIf=\"nQuestionType === 2\"><!-- select the area damaged-->\n    <div class=\"modal-header\">\n      <div class=\"home-heading\">Select damaged area(s)</div>\n      <div class=\"header-description\">{{ strModalDescription }}</div>  \n    </div>\n\n    <div class=\"modal-body\">\n      <damage-location\n      [damageLocationData]=\"objDamageData\"\n      [bIsNextStatus]=\"bIsNextStatus\"\n      (getAnswerId)=\"getLocationAnswer($event)\">\n      </damage-location>    \n    </div>\n    \n    <div class=\"next-btn-wrap\" *ngIf=\"bIsSelectedDamageLocation\">\n      <a class=\"btn btn-block\" (click)=\"damageAreaFinalized()\">\n        Next\n      </a>\n    </div>  \n  </div><!-- select the area damaged-->\n\n  <div *ngIf=\"nQuestionType === 3\"><!-- question area -->\n    <div class=\"damage-modal-group question-modal modal-wrapper\">\n      <div class=\"body\" [ngClass]=\"{'img-active': !bIsTextQuestionType}\">\n        <div class=\"content\">\n          {{damageQuestionData.question}}\n        </div>\n\n        <div class=\"select-sectiion\">\n          <!-- <div class=\"switch-type\" *ngIf=\"isTextQuestionType\">\n\n            <bSwitch\n              [switch-on-text]=\"'✓'\"\n              [switch-on-color]=\"'primary'\"\n              [switch-off-text]=\"'✕'\"\n              [switch-off-color]=\"'warning'\"\n              [switch-size]=\"'mini'\"\n              [switch-handle-width]=\"30\"\n              [(ngModel)]=\"questionState\"\n              (onChangeState)=\"onChangeState($event)\"\n            ></bSwitch>  \n          </div> -->\n\n          <div class=\"img-type\">\n            <label *ngFor=\"let answer of damageQuestionData.answer;\" class=\"img-block\" (click)=\"selectAnswer(answer.id)\">\n              <img src=\"{{host}}{{answer.img}}\" width=\"47\" [ngClass]=\"{active: nSelectedQuestionId === answer.id}\" *ngIf=\"!bIsTextQuestionType\">       \n              <div class=\"img-question-content\" *ngIf=\"!bIsTextQuestionType\">\n                {{answer.text}}\n              </div>\n              <div class=\"img-question-content\" *ngIf=\"bIsTextQuestionType\">\n                <input type=\"radio\" name=\"questionOption\" (click)=\"selectAnswer(answer.id)\" [checked]=\"nQuestionOption === answer.id\"/> {{answer.text}}\n              </div>\n            </label>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"next-btn-wrap\" *ngIf=\"nQuestionOption !== -1\">\n        <a class=\"btn btn-block\" (click)=\"damageQuestionsFinalized(damageQuestionData.callback);\">\n          Next\n        </a>  \n      </div> \n\n    </div>\n  </div><!-- question area -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/damage-modal/damage-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_damage_location_damage_location_component__ = __webpack_require__("../../../../../src/app/utilities/damage-location/damage-location.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DamageModalComponent = (function () {
    function DamageModalComponent(dialog, _dataService, _storeService, route, _spinner, _rootNode, _eventService) {
        this.dialog = dialog;
        this._dataService = _dataService;
        this._storeService = _storeService;
        this.route = route;
        this._spinner = _spinner;
        this._rootNode = _rootNode;
        this._eventService = _eventService;
        this.onClose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.modalE = null;
        this.damageQuestionData = {
            answer: '',
            message: '',
            callback: ''
        };
        this.context = dialog.context;
        this.nAutoPartID = dialog.context.autoPartID;
        this.imageMap = dialog.context.carMap.carImgMap;
        this.strSlug = this.context['carMap']['slug'];
        this.nQuestionType = 0;
        this.nLevelMin = 0;
        this.nLevelMax = 0;
        this.nImgLoadCount = 0;
        this.nLoadImgTotal = 0;
        this.nQuestionOption = -1;
        this.nDamageLevel = -1;
        this.nSelectedLevel = -1;
        this.nPreviousQuestionType = -1;
        this.arrIntDamageLocations = [];
        this.strHelperContent = '';
        this.objDamageData = {};
        this.bIsSelectedDamageLocation = false;
        this.bIsNextStatus = false;
    }
    DamageModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modalE = $(this._rootNode.nativeElement).closest('.modal');
        this.hideModal();
        if (!this.strSlug) {
            console.log('Slug id is not existied.');
            this.dialog.close();
        }
        else {
            var postData = {
                code: 200,
                data: {
                    slug: this.strSlug,
                    autoPartID: this.nAutoPartID
                }
            };
            this._dataService.post('v1/data/autopart', postData)
                .subscribe(function (res) {
                _this.host = _this._dataService.host;
                if (res.data.callback === 'saveautopartquestion') {
                    _this.damageQuestionData = res.data;
                    if (_this.damageQuestionData.answer[0].img) {
                        _this.bIsTextQuestionType = false;
                        _this.nSelectedQuestionId = -1;
                    }
                    else {
                        _this.bIsTextQuestionType = true;
                    }
                    _this.nQuestionType = 3;
                }
                else {
                    _this.arrObjDamageList = res.data.option;
                    _this.selectedImg = _this.arrObjDamageList[0];
                    _this.strModalHeader = res.data.header;
                    _this.strModalDescription = res.data.desc;
                    _this.nQuestionType = 1;
                    _this.nLoadImgTotal = _this.arrObjDamageList.length;
                    var answers = res.data.option.map(function (element) {
                        return element.answer;
                    });
                    var result = _this.getMinMax(answers);
                    _this.nLevelMin = result[0];
                    _this.nLevelMax = result[1];
                    _this.nSelectedLevel = parseInt(res.data.selected);
                    _this.displayCurrentStep(_this.nSelectedLevel);
                }
                _this.showModal();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    DamageModalComponent.prototype.getMinMax = function (data) {
        var max = Math.max.apply(Math, data);
        var min = Math.min.apply(Math, data);
        return [min, max];
    };
    DamageModalComponent.prototype.hideModal = function (count) {
        if (count === void 0) { count = 0; }
        if (this.modalE.length <= 0) {
            count++;
            var that_1 = this;
            setTimeout(function () {
                that_1.hideModal(count);
            });
        }
        else if (count > 50) {
            console.log('Fail to loading the modal.');
        }
        else {
            this._spinner.start();
            this.modalE.hide();
        }
    };
    DamageModalComponent.prototype.showModal = function () {
        this.modalE.show();
        this._spinner.stop();
    };
    DamageModalComponent.prototype.closeModal = function () {
        this.context.carMap.markList.splice(-1, 1);
        this.dialog.close();
    };
    DamageModalComponent.prototype.onChangeSlider = function (event) {
        this.displayCurrentStep(event.value);
    };
    /*
    display available step
    params:
    - level: damage level(counter)
    */
    DamageModalComponent.prototype.displayCurrentStep = function (level, count) {
        if (count === void 0) { count = 0; }
        this.nSelectedLevel = level;
        var stepClass = '#damage_modal .step';
        var availableStepClass = stepClass + '.step';
        availableStepClass += level;
        if ($(stepClass).length <= 0) {
            count++;
            var that_2 = this;
            setTimeout(function () {
                that_2.displayCurrentStep(level, count);
            }, 50);
        }
        else if (count > 50) {
            console.log('Fail to loading the step damage images.');
        }
        else {
            $(stepClass).hide();
            $(availableStepClass).show();
        }
    };
    /*
    go to next level of damaged images
    params:
    - level: damage level
    */
    DamageModalComponent.prototype.nextLevel = function (level) {
        level++;
        if (level > this.nLoadImgTotal) {
            level = this.nLevelMin;
        }
        else {
            level += this.nLevelMin;
        }
        this.displayCurrentStep(level);
    };
    /*
    go to previous level of damaged images
    params:
    - level: damage level
    */
    DamageModalComponent.prototype.previousLevel = function (level) {
        level--;
        if (level < 0) {
            level = this.nLevelMax;
        }
        else {
            level += this.nLevelMin;
        }
        this.displayCurrentStep(level);
    };
    /*
    show helper text
    params:
    - level: damage level
    */
    DamageModalComponent.prototype.helper = function () {
        this.nPreviousQuestionType = this.nQuestionType;
        this.nQuestionType = 4;
        this.strHelperContent = this.arrObjDamageList[this.nSelectedLevel - 1].help;
    };
    /*
    close helper modal
    params:
    - questionType: previous question type
    */
    DamageModalComponent.prototype.closeHelper = function (questionType) {
        if (questionType === void 0) { questionType = 0; }
        if (questionType === 0) {
            this.nQuestionType = this.nPreviousQuestionType;
        }
        else {
            this.nQuestionType = questionType;
        }
        this.displayCurrentStep(this.nSelectedLevel);
    };
    DamageModalComponent.prototype.loadImg = function () {
        this.nImgLoadCount++;
        if (this.nImgLoadCount >= this.nLoadImgTotal) {
            this.nImgLoadCount = 0;
        }
    };
    DamageModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DamageModalComponent.prototype.beforeClose = function () {
        return false;
    };
    DamageModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    DamageModalComponent.prototype.clickDoorDamage = function (door, index) {
        console.log(index);
        this.selectedImg = door;
        this.nDamageLevel = door.answer;
        $('.autopart-area > .step').css('border', 'none');
        this.nPreviousQuestionType = this.nQuestionType;
        this.nQuestionType = 5;
    };
    DamageModalComponent.prototype.damageFinalized = function () {
        var _this = this;
        this.hideModal();
        this.nQuestionType = 0;
        var postData = {
            code: 200,
            data: {
                slug: this.strSlug,
                autoPartID: this.nAutoPartID,
                damageLevel: this.nDamageLevel
            }
        };
        this._dataService.post('v1/data/savedamagelevel', postData)
            .subscribe(function (res) {
            if (res.data.callback === 'saveautopartquestion') {
                if (res.data.message === 'No more questions.') {
                    _this.dialog.close();
                    _this.waitForDMClose(1);
                }
                else {
                    _this.nQuestionType = 3;
                }
            }
            else {
                _this.nQuestionType = 2;
                _this.objDamageData = res;
                _this.strModalHeader = res.data.header;
                _this.strModalDescription = res.data.desc;
                _this.host = _this._dataService.host;
            }
            _this.showModal();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    /*
    insert the answer to the list
    */
    DamageModalComponent.prototype.insertAnswerToList = function ($event) {
        for (var i = 0; i < this.arrIntDamageLocations.length; i++) {
            if ($event.id === this.arrIntDamageLocations[i].id) {
                this.arrIntDamageLocations.splice(i, 1);
                return false;
            }
        }
        this.arrIntDamageLocations.push($event);
        return true;
    };
    /*
    get answer by clicking answer
    */
    DamageModalComponent.prototype.getLocationAnswer = function ($event) {
        this.insertAnswerToList($event);
        this.myDamageLocation.updateLocation(this.arrIntDamageLocations);
        if (this.arrIntDamageLocations.length > 0) {
            this.bIsSelectedDamageLocation = true;
            this.bIsNextStatus = true;
        }
        else {
            this.bIsSelectedDamageLocation = false;
            this.bIsNextStatus = false;
        }
    };
    DamageModalComponent.prototype.damageAreaFinalized = function () {
        var _this = this;
        this.hideModal();
        var damageLocationAnswerArray = [];
        for (var i = 0; i < this.arrIntDamageLocations.length; i++) {
            var resItem = {};
            resItem['id'] = this.arrIntDamageLocations[i].answer['data']['Answer'];
            if (this.arrIntDamageLocations[i].answer['intersect']) {
                resItem['intersects'] = this.arrIntDamageLocations[i].answer['intersect'];
            }
            damageLocationAnswerArray.push(resItem);
        }
        var postData = {
            code: 200,
            data: {
                slug: this.strSlug,
                autoPartId: this.nAutoPartID,
                damageLocation: damageLocationAnswerArray
            }
        };
        this._dataService.post('v1/data/savedamagelocation', postData)
            .subscribe(function (res) {
            _this.damageQuestionData = res.data;
            if (_this.damageQuestionData.message === 'No more questions.') {
                _this.dialog.close();
                _this.waitForDMClose(0);
            }
            else {
                _this.nQuestionType = 3;
                if (_this.damageQuestionData.answer[0].img) {
                    _this.bIsTextQuestionType = false;
                    _this.nSelectedQuestionId = -1;
                }
                else {
                    _this.bIsTextQuestionType = true;
                }
            }
            _this._eventService.emit('take_damage_screenshot', {
                slug: res.data.slug,
                autoPartId: _this.nAutoPartID
            });
            _this.showModal();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    // wait for closing the damage modal
    DamageModalComponent.prototype.waitForDMClose = function (nType, count) {
        var _this = this;
        if (count === void 0) { count = 0; }
        if (count > 30) {
            console.log('Timeout to wait for the damage modal close event');
        }
        else if (!this.context.carMap._damageModalService.bClose) {
            count++;
            setTimeout(function () { return _this.waitForDMClose(nType, count); }, 50);
        }
        else {
            if (nType === 0) {
                this.imageMap.displayCheckMark();
            }
            else {
                this.imageMap.updatePolygon(this.context.carMap.markList);
                this.imageMap.displayCheckMark();
            }
        }
    };
    DamageModalComponent.prototype.selectAnswer = function (id) {
        this.nQuestionOption = id;
        this.nSelectedQuestionId = id;
    };
    DamageModalComponent.prototype.onChangeState = function (event) {
        if (event.currentValue) {
            this.nQuestionOption = this.getQuestionId('yes');
        }
        else {
            this.nQuestionOption = this.getQuestionId('no');
        }
    };
    DamageModalComponent.prototype.getQuestionId = function (state) {
        var answerList = this.damageQuestionData.answer.filter(function (e) {
            return e.text.toLowerCase() === state;
        });
        return answerList[0].id;
    };
    DamageModalComponent.prototype.damageQuestionsFinalized = function (funcName) {
        var _this = this;
        this.hideModal();
        this.nQuestionType = 0;
        var postData = {
            code: 200,
            data: {
                slug: this.strSlug,
                autoPartId: this.nAutoPartID,
                questionId: this.damageQuestionData.questionId,
                answerId: this.nQuestionOption,
                claimDamageQuestionId: this.damageQuestionData.claimDamageQuestionId
            }
        };
        this._dataService.post('v1/data/saveautopartquestion', postData)
            .subscribe(function (res) {
            _this.showModal();
            _this.damageQuestionData = res.data;
            if (_this.damageQuestionData.message === 'No more questions.') {
                _this.dialog.close();
                _this.waitForDMClose(1);
            }
            else {
                _this.nQuestionType = 3;
                _this.nQuestionOption = -1;
            }
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    return DamageModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DamageModalComponent.prototype, "onClose", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__utilities_damage_location_damage_location_component__["a" /* DamageLocationComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__utilities_damage_location_damage_location_component__["a" /* DamageLocationComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utilities_damage_location_damage_location_component__["a" /* DamageLocationComponent */]) === "function" && _b || Object)
], DamageModalComponent.prototype, "myDamageLocation", void 0);
DamageModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-damage-modal',
        template: __webpack_require__("../../../../../src/app/modals/damage-modal/damage-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/damage-modal/damage-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === "function" && _j || Object])
], DamageModalComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=damage-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/damage-modal/damage-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__damage_modal_component__ = __webpack_require__("../../../../../src/app/modals/damage-modal/damage-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DamageModalService = (function () {
    function DamageModalService(modal) {
        this.modal = modal;
    }
    DamageModalService.prototype.openDialog = function (autoPartID, carMap, viewContainer) {
        var _this = this;
        this.bClose = false;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_3__damage_modal_component__["a" /* DamageModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["l" /* overlayConfigFactory */])({ autoPartID: autoPartID,
            carMap: carMap }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        })
            .then(function () {
            _this.destroyModal();
        })
            .catch(function () {
            _this.destroyModal();
        });
    };
    ;
    DamageModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    DamageModalService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.modal.overlay.defaultViewContainer) {
                this.modal.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
            this.bClose = true;
        }
    };
    return DamageModalService;
}());
DamageModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], DamageModalService);

var _a;
//# sourceMappingURL=damage-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".disclaimer-wrapper .home-heading {\n\tpadding: 20px;\n}\n\n.disclaimer-wrapper .disclaimer-body {\n\tpadding: 0 10px 10px;\n}\n\n.disclaimer-wrapper .next-back-btn-wrap {\n\tfont-size: 17px;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row;\n\t        flex-flow: row;\n\tborder-top: 1px solid #ccc;\n\tpadding: 10px 0;\n}\n\n.disclaimer-wrapper .next-back-btn-wrap .btn-cancel{\n\tcolor: #ccc;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"disclaimer-wrapper\">\n\t<div class=\"home-heading\">\n\t\tDisclaimer\n\t</div>\n\n\t<div class=\"disclaimer-body\" [innerHtml]='disclaimerData'></div>\n\n\t<div class=\"next-btn-wrap next-back-btn-wrap\">\n\t\t<a class=\"btn flex-1\" (click)=\"onCancel()\">I Agree</a>\n\t\t<a class=\"btn btn-cancel flex-1\" (click)=\"gotoHome()\">Cancel(I Do Not Agree)</a>\n    </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisclaimerModalComponent = (function () {
    function DisclaimerModalComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.context = dialog.context;
        this.disclaimerData = this.context.disclaimerData;
    }
    DisclaimerModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DisclaimerModalComponent.prototype.beforeClose = function () {
        return false;
    };
    DisclaimerModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    DisclaimerModalComponent.prototype.gotoHome = function () {
        this.dialog.close();
        this.router.navigate(['/']);
    };
    return DisclaimerModalComponent;
}());
DisclaimerModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-disclaimer-modal',
        template: __webpack_require__("../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], DisclaimerModalComponent);

var _a, _b;
//# sourceMappingURL=disclaimer-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisclaimerModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disclaimer_modal_component__ = __webpack_require__("../../../../../src/app/modals/disclaimer-modal/disclaimer-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisclaimerModalService = (function () {
    function DisclaimerModalService(modal) {
        this.modal = modal;
    }
    DisclaimerModalService.prototype.openDialog = function (disclaimerData, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__disclaimer_modal_component__["a" /* DisclaimerModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ disclaimerData: disclaimerData }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        })
            .catch(function () {
            _this.destroyModal();
        });
    };
    ;
    DisclaimerModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    DisclaimerModalService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.modal.overlay.defaultViewContainer) {
                this.modal.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
        }
    };
    return DisclaimerModalService;
}());
DisclaimerModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], DisclaimerModalService);

var _a;
//# sourceMappingURL=disclaimer-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/display-modal/display-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".display-wrapper {\n\tpadding: 0 10px;\n}\n\n.display-wrapper .display-body {\n\tmax-height: 300px;\n\toverflow: auto;\n}\n\n.display-wrapper .home-heading,\n.display-wrapper .next-btn-wrap {\n\tpadding: 10px 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/display-modal/display-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"display-wrapper modal-wrapper\">\n\t<div class=\"home-heading\">\n\t\tDisplay\n\t</div>\n\n\t<div class=\"display-body\" #displayElement></div>\n\n\t<div class=\"next-btn-wrap\">\n\t\t<a class=\"btn full-width\" (click)=\"onCancel()\">Close</a>\n    </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/display-modal/display-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisplayModalComponent = (function () {
    function DisplayModalComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.context = dialog.context;
        this.strHtml = this.context.strHtml;
        this.loadData();
    }
    DisplayModalComponent.prototype.loadData = function (counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        if (counter > 50) {
            console.log('Fail to load the display data');
        }
        else if (!this.displayElement) {
            counter++;
            setTimeout(function () { return _this.loadData(counter); }, 50);
        }
        else {
            this.displayElement.nativeElement.innerHTML = '';
            this.displayElement.nativeElement.insertAdjacentHTML('beforeend', this.strHtml);
        }
    };
    DisplayModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    DisplayModalComponent.prototype.beforeClose = function () {
        return false;
    };
    DisplayModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    DisplayModalComponent.prototype.gotoHome = function () {
        this.dialog.close();
        this.router.navigate(['/']);
    };
    return DisplayModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('displayElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], DisplayModalComponent.prototype, "displayElement", void 0);
DisplayModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-display-modal',
        template: __webpack_require__("../../../../../src/app/modals/display-modal/display-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/display-modal/display-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DisplayModalComponent);

var _a, _b, _c;
//# sourceMappingURL=display-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/display-modal/display-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display_modal_component__ = __webpack_require__("../../../../../src/app/modals/display-modal/display-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayModalService = (function () {
    function DisplayModalService(modal) {
        this.modal = modal;
    }
    DisplayModalService.prototype.openDialog = function (strHtml, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__display_modal_component__["a" /* DisplayModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ strHtml: strHtml }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        });
    };
    ;
    DisplayModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    return DisplayModalService;
}());
DisplayModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], DisplayModalService);

var _a;
//# sourceMappingURL=display-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/player-modal/player-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player-modal-wrapper .player-wrapper iframe {\n\twidth: 100%;\n\theight: auto;\n}\n\n.player-modal-wrapper .close-btn {\n\tposition: absolute;\n    top: -13px;\n    right: -13px;\n    z-index: 100;\n}\n\n.player-modal-wrapper .close-btn i {\n\tfont-size: 20px;\n\tcolor: #ccc;\n}\n\n.player-modal-wrapper .player-wrapper {\n}\n\n.player-modal-wrapper .player-wrapper video {\n\twidth: 100%;\n}\n\nvg-track-selector select.trackSelector {\n\tpadding: 0 !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/player-modal/player-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player-modal-wrapper modal-wrapper\" #playModalElement>\n\t<div class=\"close-btn\" (click)=\"closeModal()\">\n\t\t<i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n\t</div>\n\n\t<div class=\"modal-body\">\n\t\t<vg-player>\n\t\t    <vg-overlay-play></vg-overlay-play>\n\t\t    <vg-buffering></vg-buffering>\n\n\t\t    <vg-scrub-bar>\n\t\t        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n\t\t        <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n\t\t    </vg-scrub-bar>\n\n\t\t    <vg-controls [vgAutohide]=\"true\" [vgAutohideTime]=\"1.5\">\n\t\t        <vg-play-pause></vg-play-pause>\n\t\t        <vg-playback-button></vg-playback-button>\n\n\t\t        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n\t\t        <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n\t\t        <!-- <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n\t\t        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display> -->\n\n\t\t        <vg-track-selector></vg-track-selector>\n\t\t        <vg-mute></vg-mute>\n\t\t        <!-- <vg-volume></vg-volume> -->\n\n\t\t        <!-- <vg-fullscreen></vg-fullscreen> -->\n\t\t    </vg-controls>\n\n\t\t    <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" autoplay  vg-responsive=\"true\" vg-height=\"270\">\n\t\t        <source *ngFor=\"let video of sources\" [src]=\"video.src\" [type]=\"video.type\">\n\t\t    </video>\n\t\t</vg-player>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/player-modal/player-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerModalComponent = (function () {
    function PlayerModalComponent(dialog, el, renderer) {
        this.dialog = dialog;
        this.el = el;
        this.renderer = renderer;
        this.context = dialog.context;
        this.sources = [
            {
                src: 'https://new-api.virtualevaluator.net/explainer.mp4',
                type: 'video/mp4'
            }
        ];
        this.nPlayModalWidth = 0;
        this.nPlayModalHeight = 0;
    }
    PlayerModalComponent.prototype.adjustModalSize = function (nCounter) {
        var _this = this;
        if (nCounter === void 0) { nCounter = 0; }
        if (nCounter > 300) {
            console.log('Time out to wait for the play modal');
        }
        else if (!this.playModalElement ||
            (this.playModalElement && this.playModalElement.nativeElement.offsetWidth < 50) ||
            !this.media ||
            (this.media && this.media.nativeElement.readyState !== 4)) {
            nCounter++;
            setTimeout(function () { return _this.adjustModalSize(nCounter); }, 50);
        }
        else {
            var nRatio = 406 / 720;
            nRatio = parseFloat(nRatio.toFixed(2));
            var nTargetWidth = nRatio * this.playModalElement.nativeElement.offsetHeight;
            var nTargetHeight = nTargetWidth / nRatio;
            this.renderer.setElementStyle(this.playModalElement.nativeElement, 'width', nTargetWidth.toFixed(2) + 'px');
            // this.renderer.setElementStyle(this.playModalElement.nativeElement, 'height', nTargetHeight.toFixed(2) + 'px');
            this.nPlayModalWidth = nTargetWidth;
        }
    };
    PlayerModalComponent.prototype.ngOnInit = function () {
        this.adjustModalSize();
    };
    PlayerModalComponent.prototype.ngOnDestroy = function () {
    };
    PlayerModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    PlayerModalComponent.prototype.beforeClose = function () {
        return false;
    };
    PlayerModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    PlayerModalComponent.prototype.closeModal = function () {
        this.dialog.close();
    };
    return PlayerModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('playModalElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], PlayerModalComponent.prototype, "playModalElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('media'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], PlayerModalComponent.prototype, "media", void 0);
PlayerModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-player-modal',
        template: __webpack_require__("../../../../../src/app/modals/player-modal/player-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/player-modal/player-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object])
], PlayerModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=player-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/player-modal/player-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_modal_component__ = __webpack_require__("../../../../../src/app/modals/player-modal/player-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerModalService = (function () {
    function PlayerModalService(modal) {
        this.modal = modal;
    }
    PlayerModalService.prototype.openDialog = function (strImgURL, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__player_modal_component__["a" /* PlayerModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ strImgURL: strImgURL }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        });
    };
    ;
    PlayerModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    return PlayerModalService;
}());
PlayerModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], PlayerModalService);

var _a;
//# sourceMappingURL=player-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/questions-modal/questions-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".questions-modal .form-wrapper,\n.questions-modal .spinner {\n\tmargin: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/questions-modal/questions-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center questions-modal\">\n\t<div class=\"modal-wrapper\">\n\t\t<div class=\"modal-header text-center\">\n\t\t\tQuestions\n\t\t</div>\n\n\t\t<div class=\"modal-body\" *ngIf=\"bIsLoad; else templateName\">\n\t\t\t<div class=\"form-wrapper\">\n\t\t\t\t<form [formGroup]=\"questionForm\" (ngSubmit)=\"onSubmitForm()\" validate class=\"question-form\">\n\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let question of arrQuestions\">\n\t\t\t\t\t\t<div>{{ question['text'] }}</div>\n\t\t\t\t\t\t<ng-select *ngIf=\"question['answer_type'] === 'select'\"\n\t\t\t            formControlName=\"{{question['variable']}}\"\n\t\t\t            [options]=\"objQuestionOptions[question['variable']]\">\n\t\t\t            </ng-select>\n\n\t\t\t            <input type=\"text\" formControlName=\"{{question['variable']}}\" class=\"full-width form-control\" *ngIf=\"question['answer_type'] === 'input'\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<button class=\"btn btn-primary\">Next</button>\n\t\t\t\t\t\t<button class=\"btn btn-default\" (click)=\"onCancel($event)\">Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ng-template #templateName>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"spinner\">\n\t\t\t\t\t<i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ng-template>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/questions-modal/questions-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsModalComponent = (function () {
    function QuestionsModalComponent(dialog, _dataService) {
        this.dialog = dialog;
        this._dataService = _dataService;
        this.context = dialog.context;
        this.bIsLoad = false;
    }
    QuestionsModalComponent.prototype.ngOnInit = function () {
        this.createForm(this.context.objData);
    };
    QuestionsModalComponent.prototype.createForm = function (res) {
        this.strSlug = res['data']['slug'];
        this.arrQuestions = res['question'];
        if (this.arrQuestions && this.arrQuestions.length > 0) {
            this.questionForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({});
            this.objQuestionOptions = {};
            for (var q = 0; q < this.arrQuestions.length; q++) {
                var question = this.arrQuestions[q];
                console.log(question);
                if (question.hasOwnProperty('variable')) {
                    if (!this.objQuestionOptions.hasOwnProperty(question['variable'])) {
                        var arrAnswers = [];
                        var control = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
                        ]);
                        if (question.hasOwnProperty('answer') && question['answer'].length > 0 && question['answer_type'] === 'select') {
                            for (var i = 0; i < question['answer'].length; i++) {
                                var answer = question['answer'][i];
                                arrAnswers.push({ value: answer['id'], label: answer['text'] });
                            }
                            this.objQuestionOptions[question['variable']] = arrAnswers;
                            this.questionForm.addControl(question['variable'], control);
                            this.questionForm.controls[question['variable']].setValue(arrAnswers[0]['value']);
                        }
                        else {
                            this.questionForm.addControl(question['variable'], control);
                        }
                    }
                }
            }
            this.bIsLoad = true;
        }
        else {
            this.dialog.close();
        }
    };
    QuestionsModalComponent.prototype.onCancel = function (event) {
        event.preventDefault();
        this.dialog.close();
    };
    QuestionsModalComponent.prototype.onSubmitForm = function () {
        var _this = this;
        this.bIsLoad = false;
        var arrAnswers = [];
        for (var key in this.questionForm['value']) {
            arrAnswers.push((_a = {}, _a[key] = this.questionForm['value'][key], _a));
        }
        var postData = {
            code: 200,
            data: {
                slug: this.strSlug,
                call: 'preDamage',
                answers: arrAnswers
            }
        };
        this._dataService.post('v1/data/question', postData)
            .subscribe(function (res) {
            if (res.hasOwnProperty('question') && res['question'].length > 0) {
                _this.createForm(res);
            }
            else {
                _this.dialog.close();
            }
        }, function (error) { return console.error('Unable to fetch brands', error); });
        var _a;
    };
    return QuestionsModalComponent;
}());
QuestionsModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-questions-modal',
        template: __webpack_require__("../../../../../src/app/modals/questions-modal/questions-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/questions-modal/questions-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog__["c" /* DialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], QuestionsModalComponent);

var _a, _b;
//# sourceMappingURL=questions-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/questions-modal/questions-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_modal_component__ = __webpack_require__("../../../../../src/app/modals/questions-modal/questions-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsModalService = (function () {
    function QuestionsModalService(modal) {
        this.modal = modal;
    }
    QuestionsModalService.prototype.openDialog = function (objData, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__questions_modal_component__["a" /* QuestionsModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ objData: objData }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        })
            .catch(function () {
            _this.destroyModal();
        });
    };
    ;
    QuestionsModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    QuestionsModalService.prototype.destroyModal = function () {
        if (this.dialog && this.dialog.overlay) {
            if (this.modal.overlay.defaultViewContainer) {
                this.modal.overlay.defaultViewContainer.clear();
            }
            this.dialog = null;
        }
    };
    return QuestionsModalService;
}());
QuestionsModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], QuestionsModalService);

var _a;
//# sourceMappingURL=questions-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/show-img-modal/show-img-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-img-modal-area {\n\tposition: relative;\n\tmin-height: 100px;\n}\n\n.show-img-modal-area .close {\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n}\n\n.show-img-modal-area .close i {\n\tfont-size: 25px;\n}\n\n.show-img-modal-area .modal-action-area .upload-icon {\n\twidth: 30px;\n}\n\n.show-img-modal-area .modal-action-area .upload-title {\n\tmargin-left: 5px;\n}\n\n.show-img-modal-area .modal-body .progress {\n\tbackground: #aaa;\n    height: 5px;\n    margin: 30px 20px;\n}\n\n.show-img-modal-area .done-icon {\n\tmargin: 20px 0;\n}\n\n.show-img-modal-area .done-icon i {\n\tfont-size: 50px;\n}\n\n.show-img-modal-area .done-icon i.success {\n\tcolor: #007aff;\n}\n\n.show-img-modal-area .done-icon i.error {\n\tcolor: #ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/show-img-modal/show-img-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"show-img-modal-area modal-wrapper flex-wrapper\">\n\t<div class=\"close\" (click)=\"onCancel()\" *ngIf=\"strCurrentStatus === arrStrStatus[0]\">\n    \t<i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n    </div>\n\n    <div class=\"modal-header\">\n    \t{{strTitle}}\n    </div>\n\n    <div class=\"modal-body\">\n    \t<img [src]=\"strImgUrl\" *ngIf=\"strCurrentStatus === arrStrStatus[0]\">\n  \t\t<div class=\"progress\" *ngIf=\"strCurrentStatus === arrStrStatus[1]\">\n  \t\t\t<div class=\"progress-bar\" role=\"progressbar\" #fileProgress></div>\n  \t\t</div>\n  \t\t<div class=\"done-icon\" *ngIf=\"strCurrentStatus === arrStrStatus[2]\">\n  \t\t\t<i class=\"fa fa-check-circle success\" aria-hidden=\"true\" *ngIf=\"bIsSuccessResult\"></i>\n  \t\t\t<i class=\"fa fa-times-circle error\" aria-hidden=\"true\" *ngIf=\"!bIsSuccessResult\"></i>\n  \t\t</div>\n    </div>\n\n    <div class=\"modal-action-area\">\n    \t<div class=\"upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrStatus[0]\" (click)=\"fileUpload.click()\">\n    \t\t<img src=\"assets/img/upload.png\" class=\"upload-icon\">\n\t  \t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" id=\"upload_replace_photo\" class=\"hide\" #fileUpload />\n\t  \t\t<div class=\"upload-title\">Replace</div>\n    \t</div>\n\n\t  \t<div class=\"waiting-btn upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrStatus[1]\">\n\t  \t\tUploading ...\n\t  \t</div>\n\n\t  \t<div class=\"done-btn pointer upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrStatus[2]\" (click)=\"onClose()\" [ngClass]=\"{'text-danger': bIsSuccessResult}\">\n\t  \t\t{{strEndBtnString}}\n\t  \t</div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/show-img-modal/show-img-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowImgModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowImgModalComponent = (function () {
    function ShowImgModalComponent(dialog, renderer, router) {
        this.dialog = dialog;
        this.renderer = renderer;
        this.router = router;
        this.arrStrStatus = ['selecting', 'uploading', 'done'];
        this.context = dialog.context;
        this.strImgUrl = this.context.strImgUrl;
        this.strTitle = this.context.strTitle;
        this.bIsSuccessResult = false;
        this.strCurrentStatus = this.arrStrStatus[0];
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API;
    }
    ShowImgModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: this.strBackendApi + "/v1/data/fileupload" });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('data', JSON.stringify(_this.context.objPostData));
        };
        this.uploader.onProgressItem = function (fileItem, progress) {
            if (_this.strCurrentStatus === _this.arrStrStatus[1]) {
                _this.renderer.setElementStyle(_this.fileProgress.nativeElement, 'width', progress + '%');
            }
        };
        this.uploader.onCompleteItem = function (item, res, status, headers) {
            _this.strCurrentStatus = _this.arrStrStatus[2];
            if (status === 500) {
                _this.strEndBtnString = 'Fail to upload';
                _this.bIsSuccessResult = false;
                _this.strPhotoUrl = null;
            }
            else {
                res = JSON.parse(res);
                _this.strPhotoUrl = res.data.path;
                _this.strEndBtnString = 'Done!';
                _this.bIsSuccessResult = true;
            }
        };
        this.uploader.onAfterAddingFile = function (fileItem) {
            fileItem.withCredentials = false;
            fileItem.upload();
            _this.strCurrentStatus = _this.arrStrStatus[1];
        };
    };
    ShowImgModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    ShowImgModalComponent.prototype.beforeClose = function () {
        return false;
    };
    ShowImgModalComponent.prototype.onClose = function () {
        this.dialog.close({ status: true, url: this.strPhotoUrl });
    };
    ShowImgModalComponent.prototype.onCancel = function () {
        this.dialog.close({ status: false });
    };
    return ShowImgModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ShowImgModalComponent.prototype, "fileUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileProgress'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], ShowImgModalComponent.prototype, "fileProgress", void 0);
ShowImgModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show-img-modal',
        template: __webpack_require__("../../../../../src/app/modals/show-img-modal/show-img-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/show-img-modal/show-img-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["c" /* DialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ShowImgModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=show-img-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/show-img-modal/show-img-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowImgModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_img_modal_component__ = __webpack_require__("../../../../../src/app/modals/show-img-modal/show-img-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowImgModalService = (function () {
    function ShowImgModalService(modal) {
        this.modal = modal;
    }
    ShowImgModalService.prototype.openDialog = function (strTitle, strImgUrl, objPostData, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__show_img_modal_component__["a" /* ShowImgModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({
            strTitle: strTitle,
            strImgUrl: strImgUrl,
            objPostData: objPostData
        }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        });
    };
    ;
    ShowImgModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    return ShowImgModalService;
}());
ShowImgModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], ShowImgModalService);

var _a;
//# sourceMappingURL=show-img-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modals/upload-modal/upload-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-modal-area {\n}\n\n.upload-modal-area .close {\n\tposition: absolute;\n\ttop: 5px;\n\tright: 5px;\n}\n\n.upload-modal-area .title {\n\tfont-size: 17px;\n    padding: 10px 0;\n    border-bottom: 1px solid #ccc;\n    font-weight: bold;\n}\n\n.upload-modal-area .modal-body {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.upload-modal-area .modal-body .description {\n\tfont-size: 14px;\n    padding: 5px;\n}\n\n.upload-modal-area .modal-action-area .action-btn {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.upload-modal-area .modal-action-area .action-btn .upload-icon {\n\twidth: 30px;\n}\n\n.upload-modal-area .modal-action-area .action-btn .upload-title {\n    margin-left: 5px;\n}\n\n.upload-modal-area #upload_damage_photo {\n\tdisplay: none;\n}\n\n.upload-modal-area .img-wrapper .progress {\n\tbackground: #aaa;\n    height: 5px;\n    margin: 30px 20px;\n}\n\n.upload-modal-area .img-wrapper .done-icon {\n\tmargin: 20px 0;\n}\n\n.upload-modal-area .img-wrapper .done-icon i {\n\tfont-size: 50px;\n}\n\n.upload-modal-area .img-wrapper .done-icon i.success {\n\tcolor: #007aff;\n}\n\n.upload-modal-area .img-wrapper .done-icon i.error {\n\tcolor: #ff0000;\n}\n\n.upload-modal-area .waiting-btn,\n.upload-modal-area .done-btn {\n\tcolor: #007aff;\n\tfont-size: 17px;\n}\n\n.upload-modal-area .done-btn.warning-btn {\n\tcolor: #ff0000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/upload-modal/upload-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center upload-modal-area modal-wrapper flex-wrapper\">\n  <div class=\"close\" (click)=\"onCancel()\" *ngIf=\"strCurrentStatus === arrStrStatuses[0]\">\n    <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n  </div>\n\n  <div class=\"modal-header\" *ngIf=\"strCurrentStatus === arrStrStatuses[0]\">\n    {{strTitle}}\n  </div>\n\n  <div class=\"modal-body\">\n    <div class=\"description\" *ngIf=\"strCurrentStatus === arrStrStatuses[0]\">\n      {{strDescription}}\n    </div>\n\n    <div class=\"img-wrapper\">\n      <img [src]=\"strImgURL\" *ngIf=\"strCurrentStatus === arrStrStatuses[0]\">\n      <div class=\"progress\" *ngIf=\"strCurrentStatus === arrStrStatuses[1]\">\n        <div class=\"progress-bar\" role=\"progressbar\" #fileProgress></div>\n      </div>\n      <div class=\"done-icon\" *ngIf=\"strCurrentStatus === arrStrStatuses[2]\">\n        <i class=\"fa fa-check-circle success\" aria-hidden=\"true\" *ngIf=\"bIsSuccessResult\"></i>\n        <i class=\"fa fa-times-circle error\" aria-hidden=\"true\" *ngIf=\"!bIsSuccessResult\"></i>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"modal-action-area pointer\">\n    <div class=\"action-btn upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrStatuses[0]\" (click)=\"fileUpload.click()\">\n      <img src=\"assets/img/upload.png\" class=\"upload-icon\">\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" id=\"upload_damage_photo\" #fileUpload multiple accept=\"image/jpeg, image/png\" />\n      <div class=\"upload-title\">Upload</div>\n    </div>\n\n    <div class=\"waiting-btn upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrStatuses[1]\">\n      Uploading ...\n    </div>\n\n    <div class=\"done-btn pointer upload-action-wrapper\" *ngIf=\"strCurrentStatus === arrStrStatuses[2]\" (click)=\"onCancel()\" [ngClass]=\"{'warning-btn': !bIsSuccessResult}\">\n      {{strEndBtnString}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/upload-modal/upload-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadModalComponent = (function () {
    function UploadModalComponent(dialog, _eventService, renderer, router) {
        this.dialog = dialog;
        this._eventService = _eventService;
        this.renderer = renderer;
        this.router = router;
        this.context = dialog.context;
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].API;
        var nSelectedImgIndex = this.context.nIndex;
        this.arrsObjImgList = this.context.arrObjImgLIST;
        this.arrObjRequiredImgList = [];
        this.arrObjRequiredImgList.push(this.arrsObjImgList[nSelectedImgIndex]);
        for (var i = 0; i < this.arrsObjImgList.length; i++) {
            if (i !== nSelectedImgIndex
                && !this.arrsObjImgList[i]['uploaded']
                && !this.arrsObjImgList[i]['uploadStatus']) {
                this.arrObjRequiredImgList.push(this.arrsObjImgList[i]);
            }
        }
        this.arrPostDataList = [];
        for (var i = 0; i < this.arrObjRequiredImgList.length; i++) {
            this.arrPostDataList[i] = {
                code: 200,
                data: {
                    PhotoID: this.arrObjRequiredImgList[i].id,
                    UserID: 0,
                    slug: this.context.objPostData.data.slug
                }
            };
        }
        this.nCurrentUploadIndex = 0;
        this.nUploadedCounter = 0;
        this.changeInfo(this.nCurrentUploadIndex);
        this.arrStrStatuses = ['selecting', 'uploading', 'done'];
        this.strCurrentStatus = this.arrStrStatuses[0];
        this.bIsSuccessResult = false;
    }
    UploadModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nCurrentUploadIndex = 0;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({ url: this.strBackendApi + "/v1/data/fileupload" });
        this.uploader.onProgressAll = function (progress) {
            if (_this.strCurrentStatus === _this.arrStrStatuses[1]) {
                _this.renderer.setElementStyle(_this.fileProgress.nativeElement, 'width', progress + '%');
            }
        };
        this.uploader.onBuildItemForm = function (fileItem, form) {
            form.append('data', JSON.stringify(_this.arrPostDataList[fileItem.fileIndex]));
        };
        this.uploader.onAfterAddingFile = function (fileItem) {
            fileItem.withCredentials = false;
            fileItem.fileIndex = _this.nCurrentUploadIndex;
            var counter = _this.arrsObjImgList.indexOf(_this.arrObjRequiredImgList[_this.nCurrentUploadIndex]);
            _this.arrsObjImgList[counter].uploadStatus = true;
            fileItem.upload();
            _this.nCurrentUploadIndex++;
            if (_this.nCurrentUploadIndex < _this.arrObjRequiredImgList.length) {
                _this.changeInfo(_this.nCurrentUploadIndex);
            }
            else {
                _this.strCurrentStatus = _this.arrStrStatuses[1];
            }
        };
        this.uploader.onCompleteItem = function (item, res, status, headers) {
            var counter = _this.arrsObjImgList.indexOf(_this.arrObjRequiredImgList[item.fileIndex]);
            _this.arrsObjImgList[counter].uploadStatus = false;
            _this.nUploadedCounter++;
            if (status === 500) {
                _this.strCurrentStatus = _this.arrStrStatuses[2];
                _this.strEndBtnString = 'Fail to upload';
                _this.bIsSuccessResult = false;
            }
            else {
                res = JSON.parse(res);
                _this.arrsObjImgList[counter].required = false;
                _this.arrsObjImgList[counter].uploaded = true;
                _this.arrsObjImgList[counter].uploadedImgUrl = res.data.path;
                if (_this.nUploadedCounter >= _this.arrObjRequiredImgList.length) {
                    _this.strCurrentStatus = _this.arrStrStatuses[2];
                    _this.strEndBtnString = 'Done!';
                    _this.bIsSuccessResult = true;
                }
                _this._eventService.emit('uploaded_photo');
            }
        };
    };
    UploadModalComponent.prototype.beforeDismiss = function () {
        return false;
    };
    UploadModalComponent.prototype.beforeClose = function () {
        return false;
    };
    UploadModalComponent.prototype.onCancel = function () {
        this.dialog.close();
    };
    UploadModalComponent.prototype.changeInfo = function (index) {
        this.strTitle = this.arrObjRequiredImgList[index].text;
        this.strDescription = this.arrObjRequiredImgList[index].desc;
        this.strImgURL = this.strBackendApi + this.arrObjRequiredImgList[index].img;
    };
    return UploadModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileUpload'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], UploadModalComponent.prototype, "fileUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileProgress'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
], UploadModalComponent.prototype, "fileProgress", void 0);
UploadModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-modal',
        template: __webpack_require__("../../../../../src/app/modals/upload-modal/upload-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/upload-modal/upload-modal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog__["c" /* DialogRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _f || Object])
], UploadModalComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=upload-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/upload-modal/upload-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_modal_component__ = __webpack_require__("../../../../../src/app/modals/upload-modal/upload-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_modialog__ = __webpack_require__("../../../../ngx-modialog/bundle/ngx-modialog.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadModalService = (function () {
    function UploadModalService(modal) {
        this.modal = modal;
    }
    UploadModalService.prototype.openDialog = function (arrObjImgLIST, nIndex, objPostData, viewContainer) {
        var _this = this;
        this.modal.overlay.defaultViewContainer = viewContainer;
        return this.modal.open(__WEBPACK_IMPORTED_MODULE_2__upload_modal_component__["a" /* UploadModalComponent */], Object(__WEBPACK_IMPORTED_MODULE_3_ngx_modialog__["l" /* overlayConfigFactory */])({ arrObjImgLIST: arrObjImgLIST, nIndex: nIndex, objPostData: objPostData }, __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["a" /* BSModalContext */]))
            .then(function (dialog) {
            _this.dialog = dialog;
            return dialog;
        });
    };
    ;
    UploadModalService.prototype.closeDialog = function () {
        if (this.dialog) {
            this.dialog.close();
        }
    };
    return UploadModalService;
}());
UploadModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _a || Object])
], UploadModalService);

var _a;
//# sourceMappingURL=upload-modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/more/more.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollable.more-wrapper {\n\tpadding: 71px 0 108px;\n}\n\n.more-wrapper iframe {\n  border: none;\n}\n\n.more-wrapper .more-header {\n\theight: 15%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    text-align: center;\n}\n\n.more-wrapper .more-body {\n\theight: 85%;\n}\n\n.more-wrapper .more-body iframe {\n  height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/more/more.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable more-wrapper\">\n  <div class=\"scrollable-content\">\n    <div class=\"more-header\">\n      <h3 class=\"home-heading\">{{strTitle}}</h3>\n    </div>\n\n    <div class=\"more-body\">\n      <iframe width=\"100%\" [src]=\"iframeLink\">\n        <p>Your browser does not support iframes.</p>\n      </iframe>  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/more/more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * This class represents the lazy loaded MoreComponent.
 */
var MoreComponent = (function () {
    function MoreComponent(_router, _storeService, _eventService, domSanitizer) {
        this._router = _router;
        this._storeService = _storeService;
        this._eventService = _eventService;
        this.domSanitizer = domSanitizer;
    }
    MoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.init();
            }
        });
        this.init();
    };
    MoreComponent.prototype.init = function () {
        var link = this._storeService.get('more_aciton_link');
        this.strTitle = this._storeService.get('more_aciton_text');
        this.iframeLink = this.domSanitizer.bypassSecurityTrustResourceUrl(link);
        var toolbarData = this._storeService.getObject('load_topbar_data');
        if (toolbarData) {
            this._eventService.emit('load_topbar_data', toolbarData);
        }
    };
    return MoreComponent;
}());
MoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-more',
        template: __webpack_require__("../../../../../src/app/more/more.component.html"),
        styles: [__webpack_require__("../../../../../src/app/more/more.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* StoreService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], MoreComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=more.component.js.map

/***/ }),

/***/ "../../../../../src/app/next/next.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scrollable.next-wrapper {\n\tpadding: 71px 0 108px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/next/next.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable next-wrapper\" *ngIf=\"bIsPageLoading\">\n  <div class=\"scrollable-content\">\n    <div class=\"list-group text-center\"> \n      <div class=\"list-group-item-home\">\n        <div class=\"next-body\" #bodyElement>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/next/next.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * This class represents the lazy loaded NextComponent.
 */
var NextComponent = (function () {
    function NextComponent(_dataService, _storeService, activeRoute, _eventService, _navbarService, _viewContainer, _spinner) {
        this._dataService = _dataService;
        this._storeService = _storeService;
        this.activeRoute = activeRoute;
        this._eventService = _eventService;
        this._navbarService = _navbarService;
        this._viewContainer = _viewContainer;
        this._spinner = _spinner;
        this.bIsPageLoading = false;
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */]['API'];
        this._spinner.start();
    }
    NextComponent.prototype.ngOnInit = function () {
        var _this = this;
        // activeRoute param
        this.activeRoute.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
            _this._storeService.set('slugID', _this.strSlug);
            var postData = {
                code: 200,
                data: {
                    slug: _this.strSlug
                }
            };
            _this._dataService.post('v1/estimate/next ', postData)
                .subscribe(function (res) {
                var data = res.data;
                var helpIcon = _this.strBackendApi + data.help.icon;
                var liveHelpIcon = _this.strBackendApi + data.liveHelp.icon;
                var logoIcon = _this.strBackendApi + data.ui.logo;
                var helpStatus, liveHelpStatus;
                if (data.liveHelp.on === 1) {
                    liveHelpStatus = true;
                }
                else {
                    liveHelpStatus = false;
                }
                if (data.help.on === 1) {
                    helpStatus = true;
                }
                else {
                    helpStatus = false;
                }
                _this._eventService.emit('load_topbar_data', {
                    helpIcon: helpIcon,
                    helpStatus: helpStatus,
                    liveHelpIcon: liveHelpIcon,
                    liveHelpStatus: liveHelpStatus,
                    logoIcon: logoIcon,
                    helpLink: data.help.link
                });
                _this._storeService.setObject('load_topbar_data', {
                    helpIcon: helpIcon,
                    helpStatus: helpStatus,
                    liveHelpIcon: liveHelpIcon,
                    liveHelpStatus: liveHelpStatus,
                    logoIcon: logoIcon,
                    helpLink: data.help.link
                });
                var estimateDataUrl = res.data.estimateHtml;
                var actionButtons = res.data.action.btns;
                _this._navbarService.setData(actionButtons);
                _this._dataService.get(estimateDataUrl, false)
                    .subscribe(function (res) {
                    _this.estimateData = res._body;
                    _this.bIsPageLoading = true;
                    _this.renderNextBodyElement();
                    _this._spinner.stop();
                }, function (error) { return console.error('Unable to fetch brands', error); });
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    NextComponent.prototype.renderNextBodyElement = function (counter) {
        var _this = this;
        if (counter === void 0) { counter = 0; }
        if (counter > 50) {
            console.log('Fail to load the next body element.');
        }
        else if (!this.bodyElement) {
            counter++;
            setTimeout(function () { return _this.renderNextBodyElement(counter); }, 50);
        }
        else {
            this.bodyElement.nativeElement.innerHTML = '';
            this.bodyElement.nativeElement.insertAdjacentHTML('beforeend', this.estimateData);
        }
    };
    return NextComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bodyElement'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], NextComponent.prototype, "bodyElement", void 0);
NextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-next',
        template: __webpack_require__("../../../../../src/app/next/next.component.html"),
        styles: [__webpack_require__("../../../../../src/app/next/next.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__["a" /* NavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_navbar_service__["a" /* NavbarService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _h || Object])
], NextComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=next.component.js.map

/***/ }),

/***/ "../../../../../src/app/photo/photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.sample_img {\n  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%);\n}\n\n.sample_text {\n  top: -122px;\n  position: relative;\n  font-size: 24px;\n  font-weight: bold;\n  color: #000;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: #FFF;\n}\n\n#photo_alert {\n  display: none;\n}\n\n.photo-area.list-group-item-home {\n  height: auto;\n}\n\n.photo-area .photo-head {\n  height: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/photo/photo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group text-center\"> \n      <div class=\"list-group-item-home flex-wrapper photo-area\">\n        <div class=\"flex-wrapper photo-head\" *ngIf=\"bIsLoading\">\n          <dot-slider\n          [sliderCount]=\"nTotoalStep\"\n          [currentSliderCounter]=\"nCurrentStep\"\n          ></dot-slider>\n          <h3 class=\"home-heading\">Required Photos</h3>\n        </div>\n\n        <div class=\"flex-wrapper photo-body\">\n          <div class=\"location-area\">\n            <image-location\n            [slugId]=\"strSlugId\"\n            (checkStep)=\"getStepStatus($event)\"\n            (loadData)=\"getData($event)\"></image-location>\n          </div>\n\n          <div class=\"btn-area\">\n            <button class=\"btn btn-primary custom-btn btn-block\" (click)=\"next()\" [disabled]=\"!bIsNext\">\n              Next\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/photo/photo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This class represents the lazy loaded PhotoComponent.
 */
var PhotoComponent = (function () {
    function PhotoComponent(route, router) {
        this.route = route;
        this.router = router;
        this.bIsLoading = false;
        this.bIsNext = false;
    }
    PhotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.strSlugId = params['slugId'];
        });
    };
    PhotoComponent.prototype.next = function () {
        if (this.bIsNext) {
            this.router.navigate(['/estimate', this.strSlugId]);
        }
    };
    PhotoComponent.prototype.getData = function (event) {
        this.nTotoalStep = event.totalStep;
        this.nCurrentStep = event.currentStep;
        this.bIsLoading = true;
    };
    PhotoComponent.prototype.getStepStatus = function (event) {
        if (event) {
            this.bIsNext = true;
        }
        else {
            this.bIsNext = false;
        }
    };
    return PhotoComponent;
}());
PhotoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-photo',
        template: __webpack_require__("../../../../../src/app/photo/photo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/photo/photo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PhotoComponent);

var _a, _b;
//# sourceMappingURL=photo.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.host = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['API'] + '/';
    }
    DataService.prototype.get = function (url, jsonOption) {
        if (jsonOption === void 0) { jsonOption = true; }
        var getObservable = null;
        if (getObservable === null) {
            if (jsonOption) {
                getObservable = this.http.get(this.host + url, this._getJsonOptions())
                    .share()
                    .map(function (res) { return res.json(); })
                    .catch(this.handleError);
            }
            else {
                getObservable = this.http.get(this.host + url, this._getJsonOptions())
                    .share()
                    .catch(this.handleError);
            }
        }
        return getObservable;
    };
    DataService.prototype.post = function (url, data) {
        var postObservable = null;
        var postData = 'data=' + JSON.stringify(data);
        if (postObservable === null) {
            postObservable = this.http.post(this.host + url, postData, this._getJsonOptions())
                .share()
                .map(function (res) { return res.json(); })
                .catch(this.handleError);
        }
        return postObservable;
    };
    // put(url: string, data: any) {
    //   return this.http.put(this.host + url, JSON.stringify(data), this._getJsonOptions());
    // }
    // delete(url: string) {
    //   return this.http.delete(this.host + url, this._getJsonOptions());
    // }
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    DataService.prototype._getJsonOptions = function () {
        var jsonHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        jsonHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: jsonHeaders });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventService = (function () {
    function EventService() {
        var _this = this;
        this.listeners = {};
        this.subject = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventObserver = this.subject.asObservable();
        this.eventObserver.subscribe(function (_a) {
            var name = _a.name, args = _a.args;
            if (_this.listeners[name]) {
                for (var _i = 0, _b = _this.listeners[name]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    listener.callback(args);
                }
            }
        });
    }
    EventService.prototype.registerEvent = function (eventName, eventListener, callback) {
        if (!this.listeners[eventName])
            this.listeners[eventName] = [];
        var eventExist = false;
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var listener = _a[_i];
            if (listener.eventListener.constructor.name === eventListener.constructor.name) {
                eventExist = true;
                break;
            }
        }
        if (!eventExist) {
            this.listeners[eventName].push({ eventListener: eventListener, callback: callback });
        }
    };
    EventService.prototype.unregisterEvent = function (eventName, eventListener) {
        if (this.listeners[eventName]) {
            for (var i = 0; i < this.listeners[eventName].length; i++) {
                if (this.listeners[eventName][i].eventListener.constructor.name === eventListener.constructor.name) {
                    this.listeners[eventName].splice(i, 1);
                    break;
                }
            }
        }
    };
    EventService.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.subject.next({ name: name, args: args });
    };
    return EventService;
}());
EventService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], EventService);

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NavbarService = (function () {
    function NavbarService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    NavbarService.prototype.setData = function (data) {
        this.subject.next(data);
    };
    NavbarService.prototype.getEvent = function () {
        return this.subject.asObservable();
    };
    return NavbarService;
}());
NavbarService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NavbarService);

//# sourceMappingURL=navbar.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StoreService = (function () {
    function StoreService() {
    }
    StoreService.prototype.get = function (name) {
        return localStorage.getItem(name);
    };
    StoreService.prototype.getObject = function (name) {
        var retrievedObject = localStorage.getItem(name);
        return JSON.parse(retrievedObject);
    };
    StoreService.prototype.getTempData = function () {
        return this.tempData;
    };
    StoreService.prototype.set = function (name, value) {
        localStorage.setItem(name, value);
    };
    StoreService.prototype.setObject = function (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    };
    StoreService.prototype.setTempData = function (value) {
        this.tempData = value;
    };
    StoreService.prototype.removeItem = function (name) {
        localStorage.removeItem(name);
    };
    return StoreService;
}());
StoreService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StoreService);

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/car-map/car-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-area {\n  position: relative;\n}\n\n#car_img {\n  display: none;\n}\n\n#effect_canvas {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\topacity: 0.7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/car-map/car-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-area full-height\">\n  <div id=\"car_bg_wrap\" class=\"full-height\">\n  \t<image-map\n  \t[mapData]=\"mapData\"\n    [bPreShowDamages]=\"false\"\n    [mapStyle] = \"carMapStyle\"\n    [bCarmap]=\"true\"\n    (selectAutoPart)=\"selectAutoPart($event)\"\n    (doneAutoPart)=\"doneAutoPart()\"\n    (eventSwitchLocation)=\"eventSwitchLocation($event)\"\n    (initMarkList)=\"(initMarkList($event))\"\n    (clickOnImage)=\"clickOnImage($event)\"></image-map>\n  </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/car-map/car-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models__ = __webpack_require__("../../../../../src/app/core/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_map_image_map_component__ = __webpack_require__("../../../../../src/app/utilities/image-map/image-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modals_confirm_modal_confirm_modal_service__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_damage_modal_damage_modal_service__ = __webpack_require__("../../../../../src/app/modals/damage-modal/damage-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * This class represents the lazy loaded CarMapComponent.
 */
var CarMapComponent = (function () {
    function CarMapComponent(el, router, renderer, _dataService, _eventService, _viewContainer, _damageModalService, _confirmModalService) {
        this.el = el;
        this.router = router;
        this.renderer = renderer;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._viewContainer = _viewContainer;
        this._damageModalService = _damageModalService;
        this._confirmModalService = _confirmModalService;
        this.checkBookMark = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showNextSeverity = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventChangeLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initEventData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.backendApi = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API;
    }
    CarMapComponent.prototype.ngOnInit = function () { };
    CarMapComponent.prototype.ngOnChanges = function () {
        this.initComponent();
    };
    CarMapComponent.prototype.ngOnDestroy = function () {
        if (this._confirmModalService) {
            this._confirmModalService.closeDialog();
        }
        if (this._damageModalService) {
            this._damageModalService.closeDialog();
        }
    };
    CarMapComponent.prototype.initComponent = function () {
        this.carMapStyle = new __WEBPACK_IMPORTED_MODULE_2__core_models__["a" /* CanvasStyleModel */]();
        this.carMapStyle.bgColor = 'red';
        this.carMapStyle.bgOpacity = 0.6;
        this.carMapStyle.borderColor = 'black';
        this.carMapStyle.borderWidth = 1;
        this.carMapStyle.bgOverColor = 'blue';
        this.carMapStyle.bgOverOpacity = 0.6;
        this.carMapStyle.borderOverColor = 'black';
        this.carMapStyle.borderOverWidth = 1;
        this.markList = [];
    };
    /*
    insert the mark to the list
    */
    CarMapComponent.prototype.insertMarkToList = function ($event) {
        for (var i = 0; i < this.markList.length; i++) {
            if ($event.id === this.markList[i].id) {
                return i;
            }
        }
        this.markList.push($event);
        return -1;
    };
    /*
    init mark list from the api
    */
    CarMapComponent.prototype.initMarkList = function (event) {
        if (event.length > 0) {
            this.markList = event;
            this.initEventData.emit(true);
        }
        else {
            this.markList = [];
            this.initEventData.emit(false);
        }
    };
    /*
    click event on canvas
    */
    CarMapComponent.prototype.clickOnImage = function ($event) {
        var check = this.insertMarkToList($event);
        if (check !== -1) {
            this._confirmModalService.openDialog(this, check, this._viewContainer);
            return;
        }
        var value = $event.value;
        var autoPartId = value.AutoPartID;
        this._damageModalService.openDialog(autoPartId, this, this._viewContainer);
    };
    CarMapComponent.prototype.doneAutoPart = function (list) {
        if (list === void 0) { list = this.markList; }
        if (list.length > 0) {
            this.checkBookMark.emit(true);
        }
        else {
            this.checkBookMark.emit(false);
        }
    };
    CarMapComponent.prototype.selectAutoPart = function (event) {
        this.showNextSeverity.emit(event);
    };
    CarMapComponent.prototype.eventSwitchLocation = function (event) {
        this.eventChangeLocation.emit(event);
    };
    return CarMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__image_map_image_map_component__["a" /* ImageMapComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__image_map_image_map_component__["a" /* ImageMapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__image_map_image_map_component__["a" /* ImageMapComponent */]) === "function" && _a || Object)
], CarMapComponent.prototype, "carImgMap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CarMapComponent.prototype, "checkBookMark", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CarMapComponent.prototype, "showNextSeverity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CarMapComponent.prototype, "eventChangeLocation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CarMapComponent.prototype, "initEventData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('slug'),
    __metadata("design:type", String)
], CarMapComponent.prototype, "slug", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mapData'),
    __metadata("design:type", Object)
], CarMapComponent.prototype, "mapData", void 0);
CarMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'car-map',
        template: __webpack_require__("../../../../../src/app/utilities/car-map/car-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/car-map/car-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__modals_damage_modal_damage_modal_service__["a" /* DamageModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__modals_damage_modal_damage_modal_service__["a" /* DamageModalService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__modals_confirm_modal_confirm_modal_service__["a" /* ConfirmModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__modals_confirm_modal_confirm_modal_service__["a" /* ConfirmModalService */]) === "function" && _j || Object])
], CarMapComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=car-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/damage-location/damage-location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    width: 100%;\n}\n\n.damgage-location {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/damage-location/damage-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"damgage-location\" *ngIf=\"locationLoading\">\n    <image-map [mapData]=\"locationMapData\"\n    [bPreShowDamages]=\"true\"\n    [bIsNextStatus]=\"bIsNextStatus\"\n    [mapStyle] = \"locationMapStyle\"\n    [bCarmap]=\"false\"\n    (clickOnImage)=\"clickOnImage($event)\"\n    (loadImage)=\"loadedImage($event)\"></image-map>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/damage-location/damage-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models__ = __webpack_require__("../../../../../src/app/core/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_map_image_map_component__ = __webpack_require__("../../../../../src/app/utilities/image-map/image-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This class represents the lazy loaded CarMapComponent.
 */
var DamageLocationComponent = (function () {
    function DamageLocationComponent() {
        this.getAnswerId = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DamageLocationComponent.prototype.ngOnInit = function () {
        this.locationMapData = this.damageLocationData;
        this.locationLoading = true;
        this.locationMapStyle = new __WEBPACK_IMPORTED_MODULE_1__core_models__["a" /* CanvasStyleModel */]();
        this.locationMapStyle.bgColor = 'blue';
        this.locationMapStyle.bgOpacity = 0.75;
        this.locationMapStyle.borderColor = 'black';
        this.locationMapStyle.borderWidth = 2;
        this.locationMapStyle.bgOverColor = 'blue';
        this.locationMapStyle.bgOverOpacity = 0.5;
        this.locationMapStyle.borderOverColor = 'black';
        this.locationMapStyle.borderOverWidth = 2;
    };
    /*
    click event on canvas
    */
    DamageLocationComponent.prototype.clickOnImage = function ($event) {
        var value = $event.value;
        var id = $event.id;
        this.getAnswerId.emit({
            answer: value,
            id: id
        });
    };
    /*
    delete the select location
    */
    DamageLocationComponent.prototype.updateLocation = function (locationList) {
        this.myImgMapHandler.updatePolygon(locationList);
    };
    DamageLocationComponent.prototype.loadedImage = function () {
        this.loadImage.emit();
    };
    return DamageLocationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__image_map_image_map_component__["a" /* ImageMapComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__image_map_image_map_component__["a" /* ImageMapComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__image_map_image_map_component__["a" /* ImageMapComponent */]) === "function" && _a || Object)
], DamageLocationComponent.prototype, "myImgMapHandler", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DamageLocationComponent.prototype, "damageLocationData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DamageLocationComponent.prototype, "bIsNextStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DamageLocationComponent.prototype, "getAnswerId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DamageLocationComponent.prototype, "loadImage", void 0);
DamageLocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'damage-location',
        template: __webpack_require__("../../../../../src/app/utilities/damage-location/damage-location.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/damage-location/damage-location.component.css")]
    })
], DamageLocationComponent);

var _a;
//# sourceMappingURL=damage-location.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/dot-slider/dot-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dot-slider-area .dot-wrapper {\n\tposition: relative;\n\tmargin: auto;\n\twidth: 170px;\n    height: 3px;\n    background: #333;\n}\n\n.dot-slider-area .dot-wrapper .dot {\n\twidth: 16px;\n    height: 16px;\n    background: #fff;\n    border: 2px solid #333;\n    border-radius: 50%;\n    position: absolute;\n    left: -10px;\n    top: -6px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/dot-slider/dot-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dot-slider-area\">\n\t<div class=\"dot-wrapper\">\n\t\t<div class=\"dot dot-{{i}}\" *ngFor=\"let dot of arrNumSliderCounters;let i=index;\" [style.left.px]=\"dot\" [style.background-color]=\"arrStrSliderBgColors[i]\">\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/dot-slider/dot-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DotSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DotSliderComponent = (function () {
    function DotSliderComponent(el) {
        this.arrNumSliderCounters = [];
        this.arrStrSliderBgColors = [];
        this.el = el;
    }
    DotSliderComponent.prototype.ngOnInit = function () {
        if (this.sliderCount && this.currentSliderCounter) {
            this.initSlider(this.sliderCount, this.currentSliderCounter);
        }
    };
    DotSliderComponent.prototype.ngOnChanges = function () {
        if (this.sliderCount && this.currentSliderCounter) {
            this.initSlider(this.sliderCount, this.currentSliderCounter);
        }
    };
    DotSliderComponent.prototype.initSlider = function (totalCount, currentCouter) {
        var sliderW = this.el.nativeElement.querySelector('.dot-wrapper').offsetWidth;
        var stepW = sliderW / (totalCount - 1);
        var eleLeft = -6;
        for (var i = 0; i < totalCount; i++) {
            this.arrNumSliderCounters[i] = eleLeft + stepW * i;
            if (currentCouter > i) {
                this.arrStrSliderBgColors[i] = '#3497fd';
            }
            else {
                this.arrStrSliderBgColors[i] = '';
            }
        }
    };
    return DotSliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DotSliderComponent.prototype, "sliderCount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DotSliderComponent.prototype, "currentSliderCounter", void 0);
DotSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dot-slider',
        template: __webpack_require__("../../../../../src/app/utilities/dot-slider/dot-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/dot-slider/dot-slider.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DotSliderComponent);

var _a;
//# sourceMappingURL=dot-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/image-map/image-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n#image_map {\n  display: none;\n}\n\n.effect_canvas {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n}\n\n.height-auto {\n\theight: auto !important;\n}\n\n.map-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n}\n\n.map-wrapper .map-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%;\n    height: 20%;\n    min-height: 90px;\n}\n\n.map-wrapper .map-header .map-title {\n\twidth: 100%;\n\tmargin-bottom: 10px;\n}\n\n.map-wrapper .map-content {\n\theight: 80%;\n\twidth: 100%;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row;\n\t        flex-flow: row;\n}\n\n.map-wrapper .map-content.modal-map-content {\n\theight: auto;\n}\n\n.map-wrapper .map-content.modal-map-content .map-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: auto;\n}\n\n.map-wrapper .map-content.modal-map-content .map-container .wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.map-wrapper .map-content .autopart-area {\n\tfont-size: 11px;\n\theight: 100%;\n\tbackground: #ededed;\n    color: #949596;\n    overflow-y: auto;\n}\n.left-area\n{\n\ttext-align: right;\n}\n.right-area\n{\n\ttext-align: left;\n}\n.map-content .autopart-item {\n    border-bottom: 1px solid white;\n}\n\n.map-content .autopart-item .item-wrapper {\n\tpadding: 10px;\n\twidth: 100%;\n}\n\n.map-content .autopart-item.selected-item {\n\tbackground-color: orange;\n\tcolor: #000000;\n}\n\n.map-content .autopart-item.completed-item {\n\tbackground-color: black;\n\tcolor: white;\n}\n\n.map-content .left-area .autopart-item.selected-item {\n\ttext-align: right;\n}\n\n.map-content .right-area .autopart-item.selected-item {\n\ttext-align: left;\n}\n\n.map-wrapper .map-content .map-container {\n\theight: 100%\n}\n\n.map-wrapper .map-content .map-container .wrapper {\n\tdisplay: inline-block;\n\tposition: relative;\n}\n\n.map-wrapper .map-content .map-container img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.map-wrapper .map-header .action-area {\n\tposition: relative;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row;\n\t        flex-flow: row;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\n\tfont-size: 10px;\n\twidth: 70%;\n\tmin-width: 250px;\n    color: #007aff;\n}\n\n.map-wrapper .map-header .action-area.location-action-area {\n\tmin-width: 200px;\n\twidth: 60%;\n}\n\n.map-wrapper .map-header .action-area .slide-counter {\n\tposition: absolute;\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    color: white;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 11px;\n    top: -10px;\n}\n\n.map-wrapper .map-header .action-area .slide-counter.left-slide-counter {\n    left: -10px;\n}\n\n.map-wrapper .map-header .action-area .slide-counter.right-slide-counter {\n    right: -10px;\n}\n\n.map-wrapper .map-header .action-area .slide-counter.center-slide-counter {\n    left: calc( 50% - 10px );\n}\n\n.map-wrapper .map-header .action-area .action-item {\n\twidth: 33.33%;\n\tpadding: 6px 0;\n\tborder: 1px solid #007aff;\n}\n\n.map-wrapper .map-header .action-area .action-item.left-item {\n\tborder-bottom-left-radius: 10px;\n    border-top-left-radius: 10px;\n    border-right: 0;\n}\n\n.map-wrapper .map-header .action-area .action-item.right-item{\n\tborder-bottom-right-radius: 10px;\n    border-top-right-radius: 10px;\n    border-left: 0;\n}\n\n.map-wrapper .map-header .action-area .action-item.action-active {\n\tbackground: #007aff;\n    color: white;\n}\n\n.map-wrapper .map-header .action-area  .center-item{\n    border-left: 1px solid #007aff;\n    border-right: 1px solid #007aff;\n}\n\n.map-content.padding-10 {\n\tpadding: 10px;\n}\n\n.center-right-area.autopart-area {\n    padding: 200px 0 0 0;\n}\n\n.map-wrapper .map-header .map-title select {\n\tborder: 0;\n    background: transparent;\n    outline: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/image-map/image-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-wrapper full-width\" *ngIf=\"bIsMapImgLaod\" [ngClass]=\"{'height-auto': bPreShowDamages}\">\n\t<div class=\"map-header\" *ngIf=\"bIsColumnMethod\">\n\t\t<div class=\"location-action-area action-area\" *ngIf=\"bIsLocation\">\n\t\t\t<div class=\"action-item\" *ngFor=\"let location of arrObjLocations\" (click)=\"onSelectLocation(location['location'])\" [ngClass]=\"{'action-active': location['selected'] === 1}\">{{location['label']}}</div>\n\t\t</div>\n\n\t\t<div class=\"action-area\">\n\t\t\t<div class=\"action-item left-item\" (click)=\"onChangeSlider(0)\" [ngClass]=\"{'action-active': nSelectedSection ===0}\">Driver Slide</div>\n\t\t\t<div class=\"action-item center-item\" (click)=\"onChangeSlider(1)\" [ngClass]=\"{'action-active': nSelectedSection ===1}\">Center</div>\n\t\t\t<div class=\"action-item right-item\" (click)=\"onChangeSlider(2)\" [ngClass]=\"{'action-active': nSelectedSection ===2}\">Passenger Slide</div>\n\t\t\t<div class=\"slide-counter left-slide-counter\" *ngIf=\"nLeftSlideCounter > 0\">{{ nLeftSlideCounter }}</div>\n\t\t\t<div class=\"slide-counter center-slide-counter\" *ngIf=\"nCenterSlideCounter > 0\">{{ nCenterSlideCounter }}</div>\n\t\t\t<div class=\"slide-counter right-slide-counter\" *ngIf=\"nRightSlideCounter > 0\">{{ nRightSlideCounter }}</div>\n\t\t</div>\n\n\t\t<div class=\"map-title\" [ngClass]=\"{'text-left': nSelectedSection ===0, 'text-center': nSelectedSection ===1, 'text-right': nSelectedSection ===2}\">\n\t\t\t<strong class=\"uppercase\">\n\t\t\t\tselect part:\n\t\t\t</strong>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"map-content row no-margin clearfix\" *ngIf=\"!bPreShowDamages\">\n\t\t<div class=\"col-xs-3 no-padding autopart-area left-area\" *ngIf=\"bIsColumnMethod && nSelectedSection ===1\">\n\t\t\t<div class=\"autopart-item\" *ngFor=\"let slider of leftSliders;\" (click)=\"onSlider(slider['index'])\">\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"!slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['baseAutoPartColor'], 'color': slider['data']['baseTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['highlightAutoPartColor'], 'color': slider['data']['highlightTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['data']['complete'] == 1\" [ngStyle]=\"{'background-color': slider['data']['completeAutoPartColor'], 'color': slider['data']['completeTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-4 no-padding autopart-area left-area\" *ngIf=\"bIsColumnMethod && nSelectedSection ===0\">\n\t\t\t<div class=\"autopart-item\" *ngFor=\"let slider of leftSliders;\" (click)=\"onSlider(slider['index'])\">\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"!slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['baseAutoPartColor'], 'color': slider['data']['baseTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['highlightAutoPartColor'], 'color': slider['data']['highlightTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['data']['complete'] == 1\" [ngStyle]=\"{'background-color': slider['data']['completeAutoPartColor'], 'color': slider['data']['completeTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"no-padding map-container\" #mapContainer  [ngClass]=\"{'col-xs-6': nSelectedSection === 1, 'col-xs-8': nSelectedSection !== 1}\">\n\t\t\t<div class=\"wrapper\">\n\t\t\t\t<img src=\"{{strImgSrc}}\" id=\"{{strImageMapId}}_image_map\" (load)=\"loadImg()\" [style.width.px]=\"nMapW\" [style.height.px]=\"nMapH\">\n\t\t\t\t<canvas id=\"{{strImageMapId}}_image_canvas\" class=\"effect_canvas\"></canvas>\n\t\t\t\t<canvas id=\"{{strImageMapId}}_effect_canvas\" class=\"effect_canvas\" (click)=\"canvasClick($event)\"></canvas>\t\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-3 autopart-area center-right-area right-area\" *ngIf=\"bIsColumnMethod && nSelectedSection ===1\">\n\t\t\t<div class=\"autopart-item\" *ngFor=\"let slider of rightSliders;\" (click)=\"onSlider(slider['index'])\">\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"!slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['baseAutoPartColor'], 'color': slider['data']['baseTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['highlightAutoPartColor'], 'color': slider['data']['highlightTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['data']['complete'] == 1\" [ngStyle]=\"{'background-color': slider['data']['completeAutoPartColor'], 'color': slider['data']['completeTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-4 no-padding autopart-area right-area\" *ngIf=\"bIsColumnMethod && nSelectedSection === 2\">\n\t\t\t<div class=\"autopart-item\" *ngFor=\"let slider of rightSliders;\" (click)=\"onSlider(slider['index'])\">\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"!slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['baseAutoPartColor'], 'color': slider['data']['baseTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['selected'] && slider['data']['complete'] != 1\" [ngStyle]=\"{'background-color': slider['data']['highlightAutoPartColor'], 'color': slider['data']['highlightTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t\t<div class=\"item-wrapper\" *ngIf=\"slider['data']['complete'] == 1\" [ngStyle]=\"{'background-color': slider['data']['completeAutoPartColor'], 'color': slider['data']['completeTextColor'] }\">{{slider['data']['AutoPart']}}</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"map-content modal-map-content padding-10\" *ngIf=\"bPreShowDamages\">\n\t\t<div class=\"map-container full-width\" #mapContainer id=\"map_content_{{strImageMapId}}\">\n\t\t\t<div class=\"wrapper\">\n\t\t\t\t<img src=\"{{strImgSrc}}\" id=\"{{strImageMapId}}_image_map\" (load)=\"loadImg()\" [style.width.px]=\"nMapW\" [style.height.px]=\"nMapH\">\n\t\t\t\t<canvas id=\"{{strImageMapId}}_image_canvas\" class=\"effect_canvas\"></canvas>\n\t\t\t\t<canvas id=\"{{strImageMapId}}_effect_canvas\" class=\"effect_canvas\" (click)=\"canvasClick($event)\"></canvas>\t\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/image-map/image-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_models__ = __webpack_require__("../../../../../src/app/core/models.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * This class represents the lazy loaded ImageMapComponent.
 */
var ImageMapComponent = (function () {
    function ImageMapComponent(el, router, _dataService, _eventService, renderer, _changeDetectorRef) {
        this.el = el;
        this.router = router;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this.renderer = renderer;
        this._changeDetectorRef = _changeDetectorRef;
        this.clickOnImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.doneAutoPart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectAutoPart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventSwitchLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initMarkList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nCurrentSPIndex = -1;
        this.nCurrentDamageIndex = -1;
        this.nMapH = 0;
        this.nMapW = 0;
        this.nDescW = 0;
        this.nSelectedSection = 0;
        this.nLeftSlideCounter = 0;
        this.nCenterSlideCounter = 0;
        this.nRightSlideCounter = 0;
        this.bIsLoadFont = false;
        this.bIsOutlineMethod = false;
        this.bIsColumnMethod = false;
        this.bIsSelected = false;
        this.bIsLocation = false;
        this.bIsStartCalculate = false;
        this.leftSliders = [];
        this.rightSliders = [];
        this.arrObjLocations = [];
    }
    ImageMapComponent.prototype.ngAfterViewChecked = function () {
        if (this.bPreShowDamages && this.bIsStartCalculate) {
            if (Math.abs(this.nMapH - this.mapContainer.nativeElement.offsetHeight) > 5) {
                this.getMapContainerSize();
                this._changeDetectorRef.detectChanges();
            }
        }
    };
    ImageMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bIsMapImgLaod = false;
        this.strApiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API;
        this.selectedPolygonList = [];
        if (this.mapData) {
            this.objMapRatio = {
                x: this.mapData['data']['width'],
                y: this.mapData['data']['height']
            };
            this.mappingData(this.mapData);
            this.strImageMapId = this.uuid('0123456789abcdef');
            this.strImageId = this.strImageMapId + '_image_map';
            this.strImageCanvasId = this.strImageMapId + '_image_canvas';
            this.strEffectCanvasId = this.strImageMapId + '_effect_canvas';
        }
        else {
            console.log('Please refresh again to mapping image.');
        }
        if (!this.bPreShowDamages) {
            this._eventService.registerEvent('next_severity_event', this, function (args) {
                _this.clickOnImage.emit({ value: _this.mapList[_this.nCurrentSPIndex]['data'], id: _this.nCurrentSPIndex });
            });
        }
        else {
            this._eventService.registerEvent('take_damage_screenshot', this, function (args) {
                var data = args[0];
                _this.sendScreenshot(data['slug'], data['autoPartId']);
            });
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'flex');
        }
    };
    ImageMapComponent.prototype.ngOnChanges = function () {
        this.mappingData(this.mapData);
    };
    ImageMapComponent.prototype.ngOnDestroy = function () {
        if (!this.bPreShowDamages) {
            this._eventService.unregisterEvent('nex_severity_event', this);
        }
        else {
            this._eventService.unregisterEvent('take_damage_screenshot', this);
        }
    };
    /**
     * Draws a rounded rectangle using the current state of the canvas.
     * If you omit the last three params, it will draw a rectangle
     * outline with a 5 pixel border radius
     * @param {CanvasRenderingContext2D} ctx
     * @param {Number} x The top left x coordinate
     * @param {Number} y The top left y coordinate
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Number} radius The corner radius. Defaults to 5;
     * @param {Boolean} fill Whether to fill the rectangle. Defaults to false.
     * @param {Boolean} stroke Whether to stroke the rectangle. Defaults to true.
     */
    ImageMapComponent.prototype.roundRect = function (ctx, x, y, width, height, radius, fill, stroke) {
        if (radius === void 0) { radius = 5; }
        if (stroke === void 0) { stroke = true; }
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        if (stroke) {
            ctx.stroke();
        }
        if (fill) {
            ctx.fill();
        }
    };
    ImageMapComponent.prototype.drawPlusIcon = function (x, y, bigSize, detail, detailText, checked, iconUrl) {
        if (detail === void 0) { detail = false; }
        if (detailText === void 0) { detailText = ''; }
        if (checked === void 0) { checked = false; }
        if (iconUrl === void 0) { iconUrl = ''; }
        var ctx = this.mapCanvas.getContext('2d');
        var metrics = ctx.measureText(detailText);
        var detailTextWidth = metrics.width;
        var imgStartX = x * this.nCanvasToimageRateW;
        var imgStartY = y * this.nCanvasToimageRateH;
        var bLeftSituation = false;
        if (this.mapCanvas.width / 2 > imgStartX) {
            bLeftSituation = true;
        }
        else {
            bLeftSituation = false;
        }
        ctx.strokeStyle = '#017bff';
        ctx.fillStyle = 'rgba(255,255,255,1.0)';
        if (!detail) {
            this.roundRect(ctx, imgStartX, imgStartY, 20, 20, 10, true);
        }
        else {
            if (!bLeftSituation) {
                this.roundRect(ctx, (imgStartX - detailTextWidth - 10), imgStartY, detailTextWidth + 30, 20, 10, true);
                ctx.fillStyle = '#017bff';
                ctx.font = '12px';
                ctx.fillText(detailText, (imgStartX + 8 - detailTextWidth - 10), imgStartY + 14);
            }
            else {
                this.roundRect(ctx, imgStartX, imgStartY, detailTextWidth + 30, 20, 10, true);
                ctx.fillStyle = '#017bff';
                ctx.font = '12px';
                ctx.fillText(detailText, imgStartX + 18, imgStartY + 14);
            }
        }
        if (iconUrl && iconUrl !== '') {
            var ctxImg_1 = this.mapCanvas.getContext('2d');
            var imgW_1 = 14, imgH_1 = 14;
            var circleSize = 20;
            var spaceSize_1 = (circleSize - imgW_1) / 2;
            var img_1 = new Image();
            img_1.src = iconUrl;
            var that_1 = this;
            img_1.onload = function () {
                ctxImg_1.globalAlpha = 1;
                ctxImg_1.drawImage(img_1, imgStartX + spaceSize_1, imgStartY + spaceSize_1, imgW_1, imgH_1);
                that_1.bIsMapImgLaod = true;
            };
            img_1.onerror = function () {
                console.log('This image url is invalid: ' + img_1.src);
            };
        }
        else {
            var fontawesomeSize = ctx.measureText('\uF067').width;
            ctx.fillStyle = '#017bff';
            ctx.font = '10px FontAwesome';
            this.checkReady(ctx, imgStartX, imgStartY, checked, fontawesomeSize);
        }
    };
    ImageMapComponent.prototype.checkReady = function (ctx, imgStartX, imgStartY, checked, fontawesomeSize, count) {
        var _this = this;
        if (count === void 0) { count = 0; }
        var currentFontawesomeSize = ctx.measureText('\uF067').width;
        if (count > 20) {
            console.log('Time out to load the font awesome.');
        }
        else if (!this.bIsLoadFont && currentFontawesomeSize === fontawesomeSize) {
            count++;
            setTimeout(function () { return _this.checkReady(ctx, imgStartX, imgStartY, checked, currentFontawesomeSize, count); }, 100);
        }
        else {
            if (!checked) {
                ctx.fillText('\uF067', imgStartX + 6, imgStartY + 15);
            }
            else {
                ctx.fillText('\uF00C', imgStartX + 6, imgStartY + 15);
            }
            this.bIsLoadFont = true;
        }
    };
    /*
    mapping back end data to local variable
    */
    ImageMapComponent.prototype.mappingData = function (res) {
        var arrSelectedMapList = [];
        if (this.bPreShowDamages) {
            var mapList = res.data.map;
            this.strMapImg = res.data.img;
            this.strImgSrc = this.strApiUrl + this.strMapImg;
            this.mapList = [];
            var indexCounter = 0;
            var _loop_1 = function (item) {
                var parentPolygon = [];
                var parentObject = {};
                var polygonIndex;
                parentObject['parentData'] = mapList[item];
                mapList[item].Coordinates.split(',').forEach(function (e, i) {
                    if (i % 2 === 0) {
                        polygonIndex = i / 2;
                        parentPolygon[polygonIndex] = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
                        parentPolygon[polygonIndex].x = parseInt(e);
                    }
                    else {
                        parentPolygon[polygonIndex].y = parseInt(e);
                    }
                });
                parentObject['parentPolygons'] = parentPolygon;
                parentObject['index'] = indexCounter;
                if (mapList[item]['Title'] === 'Bound Box' && mapList[item]['child']) {
                    parentObject['child'] = [];
                    var _loop_2 = function (childItem) {
                        var childNewItem = {};
                        indexCounter++;
                        var childPolygon = [];
                        var childPolygonIndex;
                        mapList[item]['child'][childItem].Coordinates.split(',').forEach(function (childE, childI) {
                            if (childI % 2 === 0) {
                                childPolygonIndex = childI / 2;
                                childPolygon[childPolygonIndex] = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
                                childPolygon[childPolygonIndex].x = parseInt(childE);
                            }
                            else {
                                childPolygon[childPolygonIndex].y = parseInt(childE);
                            }
                        });
                        childNewItem['data'] = mapList[item]['child'][childItem];
                        childNewItem['polygons'] = childPolygon;
                        childNewItem['index'] = indexCounter;
                        parentObject['child'].push(childNewItem);
                    };
                    for (var childItem in mapList[item]['child']) {
                        _loop_2(childItem);
                    }
                    if (mapList[item]['sub']) {
                        parentObject['sub'] = [];
                        var _loop_3 = function (subItem) {
                            var subNewItem = {};
                            var subPolygon = [];
                            var subPolygonIndex;
                            mapList[item]['sub'][subItem].Coordinates.split(',').forEach(function (subE, subI) {
                                if (subI % 2 === 0) {
                                    subPolygonIndex = subI / 2;
                                    subPolygon[subPolygonIndex] = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
                                    subPolygon[subPolygonIndex].x = parseInt(subE);
                                }
                                else {
                                    subPolygon[subPolygonIndex].y = parseInt(subE);
                                }
                            });
                            subNewItem['data'] = mapList[item]['sub'][subItem];
                            subNewItem['polygons'] = subPolygon;
                            parentObject['sub'].push(subNewItem);
                        };
                        for (var subItem in mapList[item]['sub']) {
                            _loop_3(subItem);
                        }
                    }
                }
                this_1.mapList.push(parentObject);
                indexCounter++;
            };
            var this_1 = this;
            // catch coordinates from api
            for (var item in mapList) {
                _loop_1(item);
            }
        }
        else {
            if (res.data.hasOwnProperty('locations') && res.data['locations'].length > 0) {
                this.arrObjLocations = res.data['locations'];
                this.bIsLocation = true;
            }
            else {
                this.bIsLocation = false;
            }
            if (res['data']['method'] === 'outline') {
                this.bIsOutlineMethod = true;
                this.mapList = [];
                var mapList = res.data.map;
                this.strMapImg = res.data.img;
                this.strImgSrc = this.strApiUrl + this.strMapImg;
                var nListIndex = 0;
                var _loop_4 = function (item) {
                    var marker = [];
                    var polygon = [];
                    var polygonIndex;
                    mapList[item].Coordinates.split(',').forEach(function (e, i) {
                        marker.push(parseInt(e));
                        if (i % 2 === 0) {
                            polygonIndex = i / 2;
                            polygon[polygonIndex] = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
                            polygon[polygonIndex].x = parseInt(e);
                        }
                        else {
                            polygon[polygonIndex].y = parseInt(e);
                        }
                    });
                    this_2.mapList.push({
                        polygon: polygon,
                        data: mapList[item],
                        index: nListIndex,
                        selected: (mapList[item]['complete'] === 1) ? true : false
                    });
                    nListIndex++;
                };
                var this_2 = this;
                // catch coordinates from api
                for (var item in mapList) {
                    _loop_4(item);
                }
            }
            else if (res['data']['method'] === 'columns') {
                arrSelectedMapList = [];
                this.mapList = [];
                var mapList = res.data.map;
                this.strMapImg = res.data.img;
                this.strImgSrc = this.strApiUrl + this.strMapImg;
                var nListIndex = 0;
                var _loop_5 = function (item) {
                    var marker = [];
                    var polygon = [];
                    var polygonIndex;
                    mapList[item].Coordinates.split(',').forEach(function (e, i) {
                        marker.push(parseInt(e));
                        if (i % 2 === 0) {
                            polygonIndex = i / 2;
                            polygon[polygonIndex] = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
                            polygon[polygonIndex].x = parseInt(e);
                        }
                        else {
                            polygon[polygonIndex].y = parseInt(e);
                        }
                    });
                    this_3.mapList.push({
                        polygon: polygon,
                        data: mapList[item],
                        index: nListIndex,
                        selected: (mapList[item]['complete'] === 1) ? true : false
                    });
                    if (mapList[item]['complete'] === 1) {
                        arrSelectedMapList.push({
                            value: mapList[item],
                            id: nListIndex
                        });
                    }
                    nListIndex++;
                };
                var this_3 = this;
                // catch coordinates from api
                for (var item in mapList) {
                    _loop_5(item);
                }
                this.bIsOutlineMethod = true;
                this.bIsColumnMethod = true;
            }
            else {
                this.bIsOutlineMethod = false;
                this.mapList = [];
                var mapList = res.data.top_map;
                var nListIndex = 0;
                for (var item in mapList) {
                    this.mapList.push({
                        data: mapList[item],
                        index: nListIndex,
                        selected: (mapList[item]['complete'] === 1) ? true : false
                    });
                    nListIndex++;
                }
                this.strMapImg = res.data.top_img;
                this.strImgSrc = this.strApiUrl + this.strMapImg;
            }
        }
        this.bIsMapImgLaod = true;
        if (this.mapList) {
            this.loadCarImage();
            if (this.bIsColumnMethod) {
                this.initMarkList.emit(arrSelectedMapList);
            }
            if (!this.bPreShowDamages && this.bIsColumnMethod) {
                this.getSliderData();
            }
        }
        else {
            console.log('The map list data is not loaded.');
        }
    };
    ImageMapComponent.prototype.getSliderData = function () {
        var _this = this;
        this.leftSliders = [];
        this.rightSliders = [];
        switch (this.nSelectedSection) {
            case 0:
                // driver slider
                this.leftSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'left');
                });
                break;
            case 1:
                // center
                this.leftSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'left');
                });
                this.rightSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'right');
                });
                break;
            case 2:
                // passenger slider
                this.rightSliders = this.mapList.filter(function (item) {
                    return (item.data.section === _this.nSelectedSection) && (item.data.side === 'right');
                });
                break;
            default:
                console.log('The slider type is not existed');
                break;
        }
    };
    ImageMapComponent.prototype.loadImg = function () {
        this.loadImage.emit();
    };
    /*
    create id
    */
    ImageMapComponent.prototype.uuid = function (key) {
        if (key === void 0) { key = '0123456789abcdef'; }
        var chars = key.split('');
        var uuid = [], rnd = Math.random, r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; // version 4
        for (var i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }
        return uuid.join('');
    };
    //+++
    // checkPolygonSize(polygonList: CoordiateModel[]) {
    //   let min = polygonList[0].x + polygonList[0].y;
    //   let max = polygonList[0].x + polygonList[0].y;
    //   let minId = 0;
    //   let maxId = 0;
    //   for(let i=0; i<polygonList.length; i++) {
    //     if(min > (polygonList[i].x + polygonList[i].y)) {
    //       min = polygonList[i].x + polygonList[i].y;
    //       minId = i;
    //     }
    //     if(max < (polygonList[i].x + polygonList[i].y)) {
    //       max = polygonList[i].x + polygonList[i].y;
    //       maxId = i;
    //     }
    //   }
    //   if(max-min > 80) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    //+++
    /*
    draw all damage area
    */
    ImageMapComponent.prototype.drawAllDamageArea = function () {
        var ctx = this.mapCanvas.getContext('2d');
        ctx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
        if (this.bPreShowDamages) {
            var style = void 0;
            if (this.mapData.data.overlapAlpha &&
                this.mapData.data.overlapColor) {
                style = {
                    bgColor: this.mapData.data.overlapColor,
                    borderColor: 'black',
                    bgOpacity: this.mapData.data.overlapAlpha,
                    borderWidth: 2
                };
            }
            else {
                style = {
                    bgColor: 'blue',
                    borderColor: 'black',
                    bgOpacity: 0.1,
                    borderWidth: 2
                };
            }
            this.drawDamagePolygons(this.mapCanvas, style);
        }
        else {
            if (this.bIsOutlineMethod) {
                this.updateCheckMark();
            }
            else {
                this.drawDamageIcons(this.bIsLoadFont);
            }
        }
    };
    /*
    check if the current index is inside the selected polygon list
    */
    ImageMapComponent.prototype.checkPolygonIndex = function (index) {
        for (var i = 0; i < this.selectedPolygonList.length; i++) {
            if (this.selectedPolygonList[i]['id'] === index) {
                return true;
            }
        }
        return false;
    };
    /*
    draw entire damage polygons with limited rule
    */
    ImageMapComponent.prototype.drawDamagePolygons = function (canvas, style) {
        var selectedStyle;
        if (this.mapData.data.highlightAlpha &&
            this.mapData.data.highlightColor) {
            selectedStyle = {
                bgColor: this.mapData.data.highlightColor,
                borderColor: this.mapStyle.borderColor,
                bgOpacity: this.mapData.data.highlightAlpha,
                borderWidth: this.mapStyle.borderWidth
            };
        }
        else {
            selectedStyle = {
                bgColor: this.mapStyle.bgColor,
                borderColor: this.mapStyle.borderColor,
                bgOpacity: this.mapStyle.bgOpacity,
                borderWidth: this.mapStyle.borderWidth
            };
        }
        var ctx = canvas.getContext('2d');
        var canvasStyle;
        for (var i = 0; i < this.mapList.length; i++) {
            var item = this.mapList[i];
            if (item['parentData']['Title'] === 'Bound Box') {
                // save the unclipped context
                ctx.save();
                // define the path that will be clipped to
                ctx.beginPath();
                for (var c = 0; c < item['parentPolygons'].length; c++) {
                    if (c === 0) {
                        ctx.moveTo(item['parentPolygons'][c]['x'] * this.nCanvasToimageRateW, item['parentPolygons'][c]['y'] * this.nCanvasToimageRateH);
                    }
                    else {
                        ctx.lineTo(item['parentPolygons'][c]['x'] * this.nCanvasToimageRateW, item['parentPolygons'][c]['y'] * this.nCanvasToimageRateH);
                    }
                }
                ctx.closePath();
                // stroke the path
                // half of the stroke is outside the path
                // the outside stroke will survive the clipping that follows
                ctx.globalAlpha = 1.0;
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 2;
                ctx.stroke();
                // make the current path a clipping path
                ctx.clip();
                // draw the image which will be clipped except in the clipping path
                for (var j = 0; j < item['child'].length; j++) {
                    var bSelected = this.checkPolygonIndex(item['child'][j]['index']);
                    if (bSelected) {
                        canvasStyle = selectedStyle;
                    }
                    else {
                        canvasStyle = style;
                    }
                    this.drawPolygons(this.mapCanvas, item['child'][j]['polygons'], canvasStyle);
                }
                // restore the unclipped context (==undo the clipping path)
                ctx.restore();
            }
            else {
                var bSelected = this.checkPolygonIndex(item['index']);
                if (bSelected) {
                    canvasStyle = selectedStyle;
                }
                else {
                    canvasStyle = style;
                }
                this.drawPolygons(this.mapCanvas, item['parentPolygons'], canvasStyle);
            }
        }
    };
    ImageMapComponent.prototype.getMapContainerSize = function () {
        var $img = document.getElementById(this.strImageId);
        var nMapElementW = this.mapContainer.nativeElement.offsetWidth;
        var nMapElementH = this.mapContainer.nativeElement.offsetHeight;
        if (this.bPreShowDamages) {
            this.nMapH = this.objMapRatio.y / this.objMapRatio.x * nMapElementW;
            if (this.nMapH > 300) {
                this.nMapH = 300;
                this.nMapW = this.objMapRatio.x / this.objMapRatio.y * this.nMapH;
            }
            else {
                this.nMapW = nMapElementW;
            }
            if (this.bIsNextStatus) {
                this.nMapH = nMapElementH;
                this.nMapW = this.objMapRatio.x / this.objMapRatio.y * this.nMapH;
            }
            this.bIsStartCalculate = true;
        }
        else {
            var nScale = 1;
            if (this.bIsColumnMethod) {
                nScale = 0.9;
            }
            this.nMapH = this.mapContainer.nativeElement.offsetHeight * nScale;
            this.nMapW = this.objMapRatio.x / this.objMapRatio.y * this.nMapH;
            if (nMapElementW < this.nMapW) {
                this.nMapW = nMapElementW * nScale;
                this.nMapH = this.objMapRatio.y / this.objMapRatio.x * this.nMapW;
            }
        }
        this.mapCanvas.width = this.nMapW;
        this.mapCanvas.height = this.nMapH;
        this.effectCanvas.width = this.nMapW;
        this.effectCanvas.height = this.nMapH;
        this.nCanvasToimageRateW = this.nMapW / this.objMapRatio.x;
        this.nCanvasToimageRateH = this.nMapH / this.objMapRatio.y;
        var that = this;
        var img = new Image();
        img.src = this.strApiUrl + this.strMapImg;
        img.onload = function () {
            $img.width = that.objMapRatio.x;
            $img.height = that.objMapRatio.y;
            that.nCanvasToimageRateW = that.mapCanvas.width / img.width;
            that.nCanvasToimageRateH = that.mapCanvas.height / img.height;
            that.drawAllDamageArea();
        };
        img.onerror = function () {
            console.log('This image url is invalid: ' + img.src);
        };
    };
    /*
    load background car image to canvas
    */
    ImageMapComponent.prototype.loadCarImage = function (nCount) {
        var _this = this;
        if (nCount === void 0) { nCount = 0; }
        this.mapCanvas = document.getElementById(this.strImageCanvasId);
        this.effectCanvas = document.getElementById(this.strEffectCanvasId);
        if (nCount > 30) {
            console.log('Timeout to load the image!');
        }
        else if (!this.mapCanvas) {
            nCount++;
            setTimeout(function () { return _this.loadCarImage(nCount); }, 100);
        }
        else {
            this.getMapContainerSize();
        }
    };
    /*
    check if point is inside polygon
    params:
    - poly: the coordinate array where the polygon is covered
    - pt: the coordinate which is on current mouse
    return:
    true or false which point is in polygon
    */
    ImageMapComponent.prototype.isPointInPoly = function (poly, pt) {
        var inside = false;
        var x = pt.x;
        var y = pt.y;
        for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            var xi = poly[i].x, yi = poly[i].y;
            var xj = poly[j].x, yj = poly[j].y;
            var intersect = ((yi > y) !== (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect)
                inside = !inside;
        }
        return inside;
    };
    /*
    get the position (index) in damage array
    params:
    - mousePoint: the current mouse point coordinate
    return:
    index which is global polygonList array index
    */
    ImageMapComponent.prototype.getCurrentPosition = function (mousePoint) {
        var mousePointOnRate = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
        mousePointOnRate.x = mousePoint.x / this.nCanvasToimageRateW;
        mousePointOnRate.y = mousePoint.y / this.nCanvasToimageRateH;
        if (this.bPreShowDamages) {
            for (var i = 0; i < this.mapList.length; i++) {
                var item = this.mapList[i];
                if (item['parentData']['Title'] === 'Bound Box') {
                    for (var j = 0; j < item['child'].length; j++) {
                        if (this.isPointInPoly(item['child'][j]['polygons'], mousePointOnRate)) {
                            if (this.isPointInPoly(item['parentPolygons'], mousePointOnRate)) {
                                return item['child'][j]['index'];
                            }
                            else {
                                return -1;
                            }
                        }
                    }
                }
                else {
                    if (this.isPointInPoly(item['parentPolygons'], mousePointOnRate)) {
                        return item['index'];
                    }
                }
            }
        }
        else {
            if (this.bIsOutlineMethod) {
                var mousePointOnRate_1 = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
                mousePointOnRate_1.x = mousePoint.x / this.nCanvasToimageRateW;
                mousePointOnRate_1.y = mousePoint.y / this.nCanvasToimageRateH;
                for (var i = 0; i < this.mapList.length; i++) {
                    if (this.isPointInPoly(this.mapList[i]['polygon'], mousePointOnRate_1)) {
                        return i;
                    }
                }
                return -1;
            }
            else {
                for (var i = 0; i < this.mapList.length; i++) {
                    if (this.mapList[i]['data'].hasOwnProperty('x') && this.mapList[i]['data'].hasOwnProperty('y')) {
                        var pt = this.mapList[i]['data'];
                        var xRightDeviation = 20;
                        var yRightDeviation = 20;
                        var xOppositeDeviation = 0;
                        if (this.nCurrentDamageIndex === i) {
                            var startX = pt['x'] * this.nCanvasToimageRateW;
                            var ctx = this.mapCanvas.getContext('2d');
                            var metrics = ctx.measureText(pt['Part']);
                            var detailTextWidth = metrics.width;
                            if (this.mapCanvas.width / 2 < startX) {
                                xOppositeDeviation -= detailTextWidth;
                                xOppositeDeviation -= 10;
                            }
                            else {
                                xRightDeviation += detailTextWidth;
                                xRightDeviation += 10;
                            }
                        }
                        if ((pt['x'] + xOppositeDeviation) <= mousePointOnRate.x &&
                            pt['y'] <= mousePointOnRate.y &&
                            (pt['x'] + xRightDeviation) >= mousePointOnRate.x &&
                            (pt['y'] + yRightDeviation) >= mousePointOnRate.y) {
                            return i;
                        }
                    }
                    else {
                        console.log('X and Y of the map list is not existed');
                    }
                }
            }
        }
        return -1;
    };
    /*
    draw the polygon into canvas
    params:
    - coordinate: the coordinate array which cover the polygon
    - bgColor: the polygon background
    */
    ImageMapComponent.prototype.drawPolygons = function (canvas, polygon, style) {
        var ctx = canvas.getContext('2d');
        if (!polygon) {
            console.log('Not ready to draw polygon.');
            return;
        }
        for (var i = 0; i < polygon.length; i++) {
            if (i === 0) {
                ctx.beginPath();
                ctx.moveTo(polygon[i].x * this.nCanvasToimageRateW, polygon[i].y * this.nCanvasToimageRateH);
            }
            else {
                ctx.lineTo(polygon[i].x * this.nCanvasToimageRateW, polygon[i].y * this.nCanvasToimageRateH);
            }
        }
        ctx.closePath();
        ctx.globalAlpha = 1.0;
        ctx.strokeStyle = style.borderColor;
        ctx.lineWidth = style.borderWidth;
        ctx.stroke();
        ctx.globalAlpha = style.bgOpacity;
        ctx.fillStyle = style.bgColor;
        // ctx.globalCompositeOperation='destination-over';
        ctx.fill();
    };
    /*
    get polygon data with id in the map list
    */
    ImageMapComponent.prototype.getPolygonData = function (index) {
        for (var i = 0; i < this.mapList.length; i++) {
            var item = this.mapList[i];
            if (item['parentData'] && item['parentData']['Title'] === 'Bound Box') {
                for (var j = 0; j < item['child'].length; j++) {
                    if (item['child'][j]['index'] === index) {
                        return item['child'][j]['polygons'];
                    }
                }
            }
            else {
                if (item['index'] === index) {
                    return item['parentPolygons'];
                }
            }
        }
        return null;
    };
    /*
    delete polygon
    */
    ImageMapComponent.prototype.updatePolygon = function (polygon) {
        this.selectedPolygonList = polygon;
        this.drawAllDamageArea();
    };
    /*
    get checkmark postion
    */
    ImageMapComponent.prototype.getCheckMarkPostion = function (polygonId) {
        var position = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
        var sx = 0, sy = 0, sL = 0;
        var polygons = this.mapList[polygonId]['polygon'];
        for (var i = 0; i < polygons.length; i++) {
            var x0 = void 0, y0 = void 0, x1 = void 0, y1 = void 0;
            if (i === 0) {
                x0 = polygons[polygons.length - 1].x;
                y0 = polygons[polygons.length - 1].y;
            }
            else {
                x0 = polygons[i - 1].x;
                y0 = polygons[i - 1].y;
            }
            x1 = polygons[i].x;
            y1 = polygons[i].y;
            var L = Math.pow(Math.pow((x1 - x0), 2) + Math.pow((y1 - y0), 2), 0.5);
            sx += (x0 + x1) / 2 * L;
            sy += (y0 + y1) / 2 * L;
            sL += L;
        }
        position.x = sx / sL;
        position.y = sy / sL;
        return position;
    };
    /*
   draw checkmark
   */
    ImageMapComponent.prototype.drawCheckMark = function (polygonId) {
        if (!this.bIsOutlineMethod) {
            return;
        }
        var polygonPostion = this.getCheckMarkPostion(polygonId);
        var imgSrc = 'assets/img/checkmark.png';
        var ctxImg = this.mapCanvas.getContext('2d');
        var imgW = 16, imgH = 16;
        var imgStartX = polygonPostion.x * this.nCanvasToimageRateW - imgW / 2;
        var imgStartY = polygonPostion.y * this.nCanvasToimageRateW - imgH / 2;
        var img = new Image();
        img.src = imgSrc;
        var that = this;
        img.onload = function () {
            ctxImg.globalAlpha = 1;
            ctxImg.drawImage(img, imgStartX, imgStartY, imgW, imgH);
            that.bIsMapImgLaod = true;
        };
        img.onerror = function () {
            console.log('This image url is invalid: ' + img.src);
        };
    };
    /*
    draw all hint plus icons
    */
    ImageMapComponent.prototype.drawDamageIcons = function (isLoadFont) {
        if (isLoadFont === void 0) { isLoadFont = false; }
        var apiUrl = this.strApiUrl;
        for (var i = 0; i < this.mapList.length; i++) {
            // let status = this.checkPolygonSize(this.polygonList[i]);
            var bDetail = false;
            var strDetail = '';
            var bChecked = false;
            var iconUrl = '';
            var iconObj = this.mapList[i]['data'];
            if (i === this.nCurrentDamageIndex) {
                bDetail = true;
                if (iconObj.hasOwnProperty('Part')) {
                    strDetail = iconObj['Part'];
                }
            }
            if (iconObj.hasOwnProperty('Icon')) {
                iconUrl = apiUrl + iconObj['Icon'];
            }
            if (iconObj['data'] && iconObj['data']['complete'] === 1) {
                bChecked = true;
            }
            this.drawPlusIcon(iconObj.x, iconObj.y, false, bDetail, strDetail, bChecked, iconUrl);
        }
    };
    /*
    get the damage data with index
    */
    ImageMapComponent.prototype.getDamageData = function (index) {
        for (var i = 0; i < this.mapList.length; i++) {
            var item = this.mapList[i];
            if (item['parentData'] && item['parentData']['Title'] === 'Bound Box') {
                for (var j = 0; j < item['child'].length; j++) {
                    if (index === item['child'][j]['index']) {
                        var returnData = {};
                        returnData['data'] = item['child'][j]['data'];
                        if (item['sub']) {
                            var arrIntersects = [];
                            for (var c = 0; c < item['sub'].length; c++) {
                                if (this.checkIntersectionOfPolygons(item['child'][j]['polygons'], item['sub'][c]['polygons'])) {
                                    if (item['sub'][c]['data']['id']) {
                                        arrIntersects.push(item['sub'][c]['data']['id']);
                                    }
                                }
                            }
                            console.log(arrIntersects);
                            if (arrIntersects.length > 0) {
                                returnData['intersect'] = arrIntersects;
                            }
                        }
                        return returnData;
                    }
                }
            }
            else {
                if (index === item['index']) {
                    return {
                        data: item['parentData']
                    };
                }
            }
        }
        return null;
    };
    /*nex_severity_event
    click event on canvas
    */
    ImageMapComponent.prototype.canvasClick = function (event) {
        event = event || window.event;
        var currentP = new __WEBPACK_IMPORTED_MODULE_2__core_models__["b" /* CoordiateModel */]();
        currentP.x = event.offsetX;
        currentP.y = event.offsetY;
        var currentSelectedInd = this.getCurrentPosition(currentP);
        console.log('currentSelectedInd: ' + currentSelectedInd);
        if (currentSelectedInd < 0) {
            console.log('There is no image for the Current Position');
        }
        else {
            if (!this.bPreShowDamages) {
                if (this.bIsColumnMethod) {
                    // check if this panel is already completed
                    if (this.mapList[currentSelectedInd]['data']['complete'] === 1) {
                        this.clickOnImage.emit({ value: this.mapList[currentSelectedInd]['data'], id: currentSelectedInd });
                        return;
                    }
                    if (this.nCurrentSPIndex === currentSelectedInd) {
                        this.mapList[this.nCurrentSPIndex]['selected'] = this.mapList[this.nCurrentSPIndex]['selected'] ? false : true;
                        var ctx = this.mapCanvas.getContext('2d');
                        ctx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
                        this.drawAllDamageArea();
                        if (this.mapList[this.nCurrentSPIndex]['selected']) {
                            this.selectAutoPart.emit({
                                status: true,
                                desc: this.mapList[this.nCurrentSPIndex]['data']['AutoPart'],
                                side: this.mapList[this.nCurrentSPIndex]['data']['side']
                            });
                        }
                        else {
                            this.selectAutoPart.emit({ status: false });
                        }
                        return;
                    }
                }
                if (this.bIsSelected) {
                    this.mapList[this.nCurrentSPIndex]['selected'] = false;
                }
                this.nCurrentSPIndex = currentSelectedInd;
                if (this.bIsOutlineMethod) {
                    if (!this.bIsColumnMethod) {
                        this.clickOnImage.emit({ value: this.mapList[currentSelectedInd]['data'], id: currentSelectedInd });
                    }
                    else {
                        this.updateSelectionUI();
                    }
                }
                else {
                    if (currentSelectedInd === this.nCurrentDamageIndex) {
                        this.clickOnImage.emit({ value: this.mapList[currentSelectedInd], id: currentSelectedInd });
                    }
                    else {
                        this.nCurrentDamageIndex = currentSelectedInd;
                        this.drawDamageIcons();
                    }
                }
                this.bIsSelected = true;
            }
            else {
                var damageData = this.getDamageData(currentSelectedInd);
                if (damageData) {
                    console.log(damageData);
                    this.clickOnImage.emit({ value: damageData, id: currentSelectedInd });
                    this.loadCarImage();
                }
                else {
                    console.log('Can not find the damage data with the index');
                }
            }
        }
    };
    ImageMapComponent.prototype.updateSelectionUI = function () {
        this.mapList[this.nCurrentSPIndex]['selected'] = true;
        var nSection = parseInt(this.mapList[this.nCurrentSPIndex]['data']['section']);
        this.onChangeSlider(nSection);
        this.selectAutoPart.emit({
            status: true,
            desc: this.mapList[this.nCurrentSPIndex]['data']['AutoPart'],
            side: this.mapList[this.nCurrentSPIndex]['data']['side']
        });
    };
    /*
    display checkMark
    */
    ImageMapComponent.prototype.displayCheckMark = function () {
        this.mapList[this.nCurrentSPIndex]['data']['complete'] = 1;
        this.mapList[this.nCurrentSPIndex]['selected'] = true;
        this.bIsSelected = false;
        this.nCurrentDamageIndex = -1;
        this.drawAllDamageArea();
        this.doneAutoPart.emit();
    };
    /*
    update check mark with list
    */
    ImageMapComponent.prototype.updateCheckMark = function () {
        for (var i = 0; i < this.mapList.length; i++) {
            if (this.mapList[i]['selected'] || this.mapList[i]['data'] && this.mapList[i]['data']['complete'] === 1) {
                var style = {
                    bgColor: 'rgb(255, 232, 125)',
                    borderColor: 'transparent',
                    bgOpacity: 0.65,
                    borderWidth: 0
                };
                this.drawPolygons(this.mapCanvas, this.mapList[i]['polygon'], style);
            }
            if (this.mapList[i]['data'] && this.mapList[i]['data']['complete'] === 1) {
                this.drawCheckMark(i);
            }
        }
        this.getSlideCounts();
    };
    /*
    delete the check mark
    */
    ImageMapComponent.prototype.deleteCheckMark = function (markId) {
        this.mapList[markId]['data']['complete'] = 0;
        this.mapList[markId]['selected'] = false;
    };
    ImageMapComponent.prototype.checkIntersectionOfPolygons = function (fstPolygon, sndPolygon) {
        var result = false;
        result = this.checkPointsInsidePolygon(fstPolygon, sndPolygon);
        if (!result) {
            result = this.checkPointsInsidePolygon(sndPolygon, fstPolygon);
        }
        return result;
    };
    ImageMapComponent.prototype.checkPointsInsidePolygon = function (points, polygon) {
        for (var i = 0; i < points.length; i++) {
            if (this.isPointInPoly(polygon, points[i])) {
                return true;
            }
        }
        return false;
    };
    ImageMapComponent.prototype.getSlideCounts = function () {
        var selectedLefts = this.mapList.filter(function (item) {
            return (item.data.complete === 1) && (item.data.section === 0);
        });
        this.nLeftSlideCounter = selectedLefts.length;
        var selectedCenters = this.mapList.filter(function (item) {
            return (item.data.complete === 1) && (item.data.section === 1);
        });
        this.nCenterSlideCounter = selectedCenters.length;
        var selectedRights = this.mapList.filter(function (item) {
            return (item.data.complete === 1) && (item.data.section === 2);
        });
        this.nRightSlideCounter = selectedRights.length;
    };
    ImageMapComponent.prototype.sendScreenshot = function (strSlug, strAutoPartId) {
        if (strSlug) {
            var postData = {
                code: 200,
                data: {
                    slug: strSlug,
                    img: this.mapCanvas.toDataURL('image/png'),
                    width: this.mapCanvas.width,
                    height: this.mapCanvas.height,
                    url: this.strImgSrc,
                    autoPartId: strAutoPartId
                }
            };
            this._dataService.post('v1/data/snapshotupload', postData)
                .subscribe(function (res) {
                console.log('Success to upload the screenshot.');
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
        else {
            console.log('To send a screenshot, there is no slug.');
        }
    };
    ImageMapComponent.prototype.onChangeSlider = function (nSlider) {
        this.nSelectedSection = nSlider;
        this.getSliderData();
        this.loadCarImage();
    };
    ImageMapComponent.prototype.onSlider = function (nSlider) {
        // check if this panel is already completed
        if (this.mapList[nSlider]['data']['complete'] === 1) {
            this.clickOnImage.emit({ value: this.mapList[nSlider]['data'], id: nSlider });
            return;
        }
        if (this.nCurrentSPIndex === nSlider) {
            this.mapList[this.nCurrentSPIndex]['selected'] = this.mapList[this.nCurrentSPIndex]['selected'] ? false : true;
            var ctx = this.mapCanvas.getContext('2d');
            ctx.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
            this.drawAllDamageArea();
            if (this.mapList[this.nCurrentSPIndex]['selected']) {
                this.selectAutoPart.emit({
                    status: true,
                    desc: this.mapList[this.nCurrentSPIndex]['data']['AutoPart'],
                    side: this.mapList[this.nCurrentSPIndex]['data']['side']
                });
            }
            else {
                this.selectAutoPart.emit({ status: false });
            }
            return;
        }
        if (this.bIsSelected) {
            this.mapList[this.nCurrentSPIndex]['selected'] = false;
        }
        this.nCurrentSPIndex = nSlider;
        this.updateSelectionUI();
        this.bIsSelected = true;
    };
    ImageMapComponent.prototype.onSelectLocation = function (strLocation) {
        this.eventSwitchLocation.emit(strLocation);
    };
    return ImageMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "mapData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_models__["a" /* CanvasStyleModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_models__["a" /* CanvasStyleModel */]) === "function" && _a || Object)
], ImageMapComponent.prototype, "mapStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ImageMapComponent.prototype, "bCarmap", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ImageMapComponent.prototype, "bIsNextStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ImageMapComponent.prototype, "bPreShowDamages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "clickOnImage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "doneAutoPart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "selectAutoPart", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "loadImage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "eventSwitchLocation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "initMarkList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mapContainer'),
    __metadata("design:type", Object)
], ImageMapComponent.prototype, "mapContainer", void 0);
ImageMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'image-map',
        template: __webpack_require__("../../../../../src/app/utilities/image-map/image-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/image-map/image-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _g || Object])
], ImageMapComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=image-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/img/img.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo-list-wrapper .photo-item {\n\tborder-top: 1px solid #ddd;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 10px 30px;\n    font-size: 14px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #F7F7F7;\n}\n\n.photo-list-wrapper .green-icon {\n    color: green;\n}\n\n.photo-list-wrapper .photo-item:last-child {\n\tborder-bottom: 1px solid #ddd;\n}\n\n.photo-list-wrapper .photo-item .photo-action .action-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row;\n            flex-flow: row;\n    color: #017bff;\n}\n\n.photo-list-wrapper .photo-item .photo-text {\n    -webkit-box-flex: 5;\n        -ms-flex: 5;\n            flex: 5;\n\tfont-size: 14px;\n\tfont-weight: bold;\n    text-align: left;\n}\n\n.photo-list-wrapper .photo-item .photo-action {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3;\n}\n\n.photo-list-wrapper .photo-item .photo-action .action-icon {\n\tmargin-right: 10px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/img/img.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <accordion *ngIf=\"imgList.length > 0\">\n  <accordion-group *ngFor=\"let img of imgList; let colindex = index\" [isOpened]=\"isAccordionOpened[colindex]\">\n    <accordion-heading>\n      <h4 class=\"panel-title\">\n        {{img.text}}\n        <i class=\"fa fa-spinner fa-spin pull-right ng-hide\" id=\"loading_photo_1\" *ngIf=\"uploadStatus[colindex]===1\"></i>\n        <i class=\"fa fa-check pull-right\" style=\"color: green;\" id=\"done_photo_1\" *ngIf=\"uploadStatus[colindex]===2\"></i>\n        <i class=\"fa fa-asterisk pull-right text-danger\" aria-hidden=\"true\" *ngIf=\"photoRequires[colindex]===1 && uploadStatus[colindex]!==2\"></i>\n      </h4>\n    </accordion-heading>\n    <div class=\"panel-body\" style=\"text-align: center;\">\n      <img src=\"{{host}}{{img.img}}\" alt=\"{{img.text}}\" class=\"{{img.id}}\" id=\"img_photo_{{img.id}}\" />\n      <div class=\"sample_text\" id=\"sample_text_photo_{{img.id}}\">{{img.text}}</div>\n      <input id=\"photo_{{img.id}}\" type=\"file\" accept=\"image/*;capture=camera\" data-my-Directive name=\"file_{{img.id}}\" (change)=\"upload($event, img.id, colindex)\">\n    </div>\n  </accordion-group>\n</accordion> -->\n\n<div class=\"photo-list-wrapper flex-wrapper\" *ngIf=\"arrObjImgList.length > 0\">\n  <div class=\"photo-item\" *ngFor=\"let img of arrObjImgList; let itemIndex = index;\">\n    <div class=\"photo-text\">\n      <i class=\"fa fa-spinner fa-spin fa-3w fa-fw\" aria-hidden=\"true\" *ngIf=\"img.uploadStatus\"></i>\n      <i class=\"fa fa-check green-icon\" aria-hidden=\"true\" *ngIf=\"img.uploaded && !img.uploadStatus\"></i>\n      <i class=\"fa fa-asterisk\" aria-hidden=\"true\" *ngIf=\"img.required\"></i>{{img.text}}\n    </div>\n    <div class=\"photo-action pointer\">\n      <div class=\"action-wrapper\" (click)=\"openUploadModal(itemIndex)\">\n        <div class=\"action-icon\">\n          <i class=\"fa fa-camera\" aria-hidden=\"true\" *ngIf=\"!img.uploaded\"></i>\n          <i class=\"fa fa-check-circle\" aria-hidden=\"true\" *ngIf=\"img.uploaded\"></i>\n        </div>\n        <div class=\"action-text\">\n          <div *ngIf=\"!img.uploaded\">Add Photo</div>\n          <div *ngIf=\"img.uploaded\">View Photo</div>\n        </div>  \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/img/img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_upload_modal_upload_modal_service__ = __webpack_require__("../../../../../src/app/modals/upload-modal/upload-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_show_img_modal_show_img_modal_service__ = __webpack_require__("../../../../../src/app/modals/show-img-modal/show-img-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * This class represents the lazy loaded CarMapComponent.
 */
var ImgComponent = (function () {
    function ImgComponent(http, el, _dataService, _eventService, _spinner, _storeService, _uploadModalService, _showImgModalService, _viewContainer, modal) {
        this.http = http;
        this.el = el;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._spinner = _spinner;
        this._storeService = _storeService;
        this._uploadModalService = _uploadModalService;
        this._showImgModalService = _showImgModalService;
        this._viewContainer = _viewContainer;
        this.modal = modal;
        this.loadData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.checkStep = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._spinner.start();
        this.arrObjImgList = [];
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API;
        this.nSelectedItem = -1;
    }
    ImgComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._eventService.registerEvent('uploaded_photo', this, function (args) {
            _this.checkNextStep();
        });
        var postData = {
            code: 200,
            data: {
                slug: this.slugId
            }
        };
        this._dataService.post('v1/data/photosrequested', postData)
            .subscribe(function (res) {
            var data = res.data;
            var helpIcon = _this.strBackendApi + data.help.icon;
            var liveHelpIcon = _this.strBackendApi + data.liveHelp.icon;
            var logoIcon = _this.strBackendApi + data.ui.logo;
            var helpStatus, liveHelpStatus;
            if (data.liveHelp.on === 1) {
                liveHelpStatus = true;
            }
            else {
                liveHelpStatus = false;
            }
            if (data.help.on === 1) {
                helpStatus = true;
            }
            else {
                helpStatus = false;
            }
            _this._eventService.emit('load_topbar_data', {
                helpIcon: helpIcon,
                helpStatus: helpStatus,
                liveHelpIcon: liveHelpIcon,
                liveHelpStatus: liveHelpStatus,
                logoIcon: logoIcon,
                helpLink: data.help.link
            });
            _this.loadData.emit({
                totalStep: data.steps.totalStep,
                currentStep: data.steps.currentStep
            });
            // get the slug
            _this.arrObjImgList = res.data.photos.map(function (item) {
                item.uploadedImgUrl = '';
                item.uploaded = false;
                item.uploadStatus = false;
                return item;
            });
            _this.checkNextStep();
            _this.slugId = res.data.slug;
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    ImgComponent.prototype.ngOnDestroy = function () {
        this._eventService.unregisterEvent('uploaded_photo', this);
        if (this._showImgModalService) {
            this._showImgModalService.closeDialog();
        }
        if (this._uploadModalService) {
            this._uploadModalService.closeDialog();
        }
    };
    ImgComponent.prototype.checkNextStep = function () {
        var isNext = true;
        for (var i = 0; i < this.arrObjImgList.length; i++) {
            if (this.arrObjImgList[i].required) {
                isNext = false;
                break;
            }
        }
        this.checkStep.emit(isNext);
    };
    ImgComponent.prototype.openUploadModal = function (index) {
        var _this = this;
        this.nSelectedItem = index;
        var data = this.arrObjImgList[index];
        if (!data.hasOwnProperty('id')) {
            console.log('id property does not exist');
            return;
        }
        var postData = {
            code: 200,
            data: {
                slug: this.slugId,
                UserID: 0,
                PhotoID: data.id
            }
        };
        if (data.uploaded) {
            var title = data.text;
            var imgUrl = this.strBackendApi + data.uploadedImgUrl;
            this._showImgModalService.openDialog(title, imgUrl, postData, this._viewContainer)
                .then(function (dialog) {
                dialog.result.then(function (returnData) {
                    if (returnData.status) {
                        _this.arrObjImgList[index].uploadedImgUrl = returnData.url;
                    }
                });
            });
        }
        else {
            this._uploadModalService.openDialog(this.arrObjImgList, index, postData, this._viewContainer)
                .then(function (dialog) {
                dialog.result.then(function (returnData) {
                    _this.checkNextStep();
                });
            });
        }
    };
    return ImgComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('slugId'),
    __metadata("design:type", String)
], ImgComponent.prototype, "slugId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImgComponent.prototype, "loadData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ImgComponent.prototype, "checkStep", void 0);
ImgComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'image-location',
        template: __webpack_require__("../../../../../src/app/utilities/img/img.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/img/img.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_event_service__["a" /* EventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_store_service__["a" /* StoreService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__modals_upload_modal_upload_modal_service__["a" /* UploadModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__modals_upload_modal_upload_modal_service__["a" /* UploadModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__modals_show_img_modal_show_img_modal_service__["a" /* ShowImgModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__modals_show_img_modal_show_img_modal_service__["a" /* ShowImgModalService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _k || Object])
], ImgComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=img.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/level-slider/level-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.damage-level-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.damage-level-wrapper .barChart{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 2px;\n  background: blue;\n  color: #fff;\n  padding: 7px 0;\n}\n\n.damage-level-wrapper .barChart.active {\n  border: 2px solid #333;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/level-slider/level-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"damage-level-wrapper\" #damageLevelScreen>\n\t<div class=\"barChart\" *ngFor=\"let value of values; let i = index;\" [ngStyle]=\"{'background-image': gradients[i]}\" [ngClass]=\"{active: value ===selectValue}\" (click)=\"selectChart(value)\">\n\t\t<div class=\"text\">{{value}}</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/level-slider/level-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelSliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This class represents the lazy loaded ImageMapComponent.
 */
var LevelSliderComponent = (function () {
    function LevelSliderComponent(elRef) {
        this.elRef = elRef;
        this.STARTCOLOR = [255, 177, 0];
        this.ENDCOLOR = [255, 0, 0];
        this.onLChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoading = false;
    }
    LevelSliderComponent.prototype.ngOnChanges = function () {
        this.makeLevelBar();
    };
    LevelSliderComponent.prototype.makeLevelBar = function () {
        var totalWidth = this.damageLevelScreen.nativeElement.offsetWidth;
        var total = this.max - this.min;
        total++;
        var marginWidth = 2;
        this.values = [];
        this.colors = [];
        this.gradients = [];
        for (var i = 0; i <= total; i++) {
            var color = this.generateColor(i, total);
            this.colors.push(color);
        }
        for (var i = this.min; i <= this.max; i++) {
            this.values.push(i);
            var gradient = this.generateBarStyle(i);
            this.gradients.push(gradient);
        }
        this.isLoading = true;
    };
    LevelSliderComponent.prototype.generateColor = function (currentValue, total) {
        var r, g, b, rw, gw, bw;
        rw = (this.STARTCOLOR[0] - this.ENDCOLOR[0]) / total;
        gw = (this.STARTCOLOR[1] - this.ENDCOLOR[1]) / total;
        bw = (this.STARTCOLOR[2] - this.ENDCOLOR[2]) / total;
        r = this.STARTCOLOR[0] - rw * currentValue;
        g = this.STARTCOLOR[1] - gw * currentValue;
        b = this.STARTCOLOR[2] - bw * currentValue;
        r = Math.floor(r);
        g = Math.floor(g);
        b = Math.floor(b);
        var color = 'rgb(' + r;
        color += ',';
        color += g;
        color += ',';
        color += b;
        color += ')';
        return color;
    };
    LevelSliderComponent.prototype.generateBarStyle = function (index) {
        index = index - this.min;
        var style = 'linear-gradient(to right,';
        style += this.colors[index];
        style += ',';
        style += this.colors[index + 1];
        style += ')';
        return style;
    };
    LevelSliderComponent.prototype.selectChart = function (value) {
        this.onLChange.emit({ value: value });
        this.selectValue = value;
    };
    return LevelSliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LevelSliderComponent.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LevelSliderComponent.prototype, "min", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], LevelSliderComponent.prototype, "selectValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('damageLevelScreen'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], LevelSliderComponent.prototype, "damageLevelScreen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LevelSliderComponent.prototype, "onLChange", void 0);
LevelSliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'level-slider',
        template: __webpack_require__("../../../../../src/app/utilities/level-slider/level-slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/level-slider/level-slider.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], LevelSliderComponent);

var _a, _b;
//# sourceMappingURL=level-slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  border-color: #e1e1e1;\n  border-style: solid;\n  border-width: 0;\n  display: block;\n  padding: 0 16px;\n}\n\n.navbar-app.navbar-absolute-bottom {\n  border: none;\n}\n\nnav a {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 48px;\n  margin-right: 20px;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\nnav a.router-link-active {\n  color: #106cc8;\n}\n\n.action-btn-area {\n  margin: 2px 0 0;\n}\n\n.action-btn-area a.btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 18px;\n}\n\n.navbar-app .btn-item .btn {\n  height: 38px;\n  font-size: 17px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.navbar-app.drop {\n  height: 100% !important;\n  padding: 0 !important;\n  background: rgba(0,0,0,0.5);\n}\n\n.navbar-app.drop .action-btn-area {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n.navbar-app .drop-btn-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid;\n  border-radius: 15px;\n  width: 90%;\n  margin: auto;\n}\n\n.navbar-app .drop-btn-area .btn-item {\n  border-right: 1px solid;\n}\n\n.navbar-app .drop-btn-area .btn-item:last-child {\n  border-right: 0;\n}\n\n.navbar-app .drop-btn-area .action-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0;\n  line-height: 1.4em;\n  text-align: center;\n  height: 56px;\n  color: #333;\n}\n\n.navbar-app .drop-btn-area .action-link.active {\n  color: #007aff;\n}\n\n.navbar-app .drop-btn-area .action-link span {\n  width: 100%;\n}\n\n.navbar-app .drop-btn-area .more-btn-link {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row;\n          flex-flow: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.navbar-app .drop-btn-area .more-btn-link .action-btn-text {\n  margin-left: 1em;\n}\n\n.navbar-app .drop-btn-area a.btn:last-child {\n  border-bottom: 0;\n}\n\n.navbar-app .action-btn-area .btn-back {\n  text-transform: none;\n}\n\n.navbar-app .action-btn-area .btn-back i {\n  font-size: 25px;\n  margin-right: 5px;\n}\n\n.next-btn-area.drop a.btn-drop {\n  background-color: #333 !important;\n  border-radius: 0 !important;\n}\n\n.more-btn-area .next-btn-area {\n  margin: 0 0 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-app navbar-absolute-bottom\" #navbarApp *ngIf=\"(bIsActionVisible && bIsNextPage || bIsMorePage)\">\n\t<div class=\"action-btn-area\">\n    <div class=\"more-btn-area\">\n      <div class=\"drop-btn-area\">\n        <div *ngFor=\"let action of arrObjActionData;let i=index\" class=\"flex-1 btn-item\">\n          <a class=\"action-link\" (click)=\"moreAction(action.load, action.text, i)\" [ngClass]=\"{active: nSelectedMoreIndex === i}\">\n            <i class=\"fa fa-{{action.icon}}\" aria-hidden=\"true\"></i>\n            <span class=\"action-btn-text\">{{action.text}}</span>\n          </a>\n        </div>\n      </div> \n    </div>\n\n    <div class=\"row no-margin\">\n      <a class=\"btn btn-back col-xl-6 col-xl-offset-3\" (click)=\"gotoEstimate()\">\n        <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i>Back to vEstimate\n      </a>\n    </div>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/utilities/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__ = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(_navbarService, _storeService, _router) {
        this._navbarService = _navbarService;
        this._storeService = _storeService;
        this._router = _router;
        this.bIsActionVisible = false;
        this.bIsMorePage = false;
        this.bIsNextPage = false;
        this.bIsDrop = false;
        this.arrObjActionData = [];
        this.strHost = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */]['API'];
        this.strSlug = this._storeService.get('slugID');
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setActions(this._router.url);
        this._navbarService.getEvent().subscribe(function (data) {
            _this.bIsActionVisible = true;
            _this.arrObjActionData = data;
            for (var i = 0; i < _this.arrObjActionData.length; i++) {
                _this.arrObjActionData[i].text = _this.clearString(_this.arrObjActionData[i].text);
            }
            _this._storeService.setObject('action_data', _this.arrObjActionData);
        });
        if (this._storeService.getObject('action_data')) {
            this.arrObjActionData = this._storeService.getObject('action_data');
        }
    };
    NavbarComponent.prototype.setActions = function (strCurrentUri) {
        this.strCurrentUrl = strCurrentUri;
        this.nSelectedMoreIndex = -1;
        var arr = strCurrentUri.split('/');
        arr.shift();
        var strCurrentPageName = '';
        if (arr.length > 0) {
            strCurrentPageName = arr[0];
            if (strCurrentPageName === 'next') {
                this.bIsNextPage = true;
            }
            else if (strCurrentPageName === 'more') {
                this.bIsMorePage = true;
                var moreIndex = this._storeService.get('current_more_index');
                this.nSelectedMoreIndex = parseInt(moreIndex);
            }
        }
        else {
            console.log('The url is not correct.');
        }
    };
    NavbarComponent.prototype.clearString = function (str) {
        if (str) {
            str = str.replace(/&quot;/g, '"');
        }
        return str;
    };
    NavbarComponent.prototype.next = function () {
        this.bIsDrop = this.bIsDrop ? false : true;
    };
    NavbarComponent.prototype.moreAction = function (url, text, index) {
        this.nSelectedMoreIndex = index;
        this._storeService.set('current_more_index', index.toString());
        var link = this.strHost + url;
        this._storeService.set('more_aciton_text', text);
        this._storeService.set('more_aciton_link', link);
        this._storeService.set('back_aciton_link', this.strCurrentUrl);
        this._router.navigate(['/more', this.strSlug]);
        this.bIsDrop = false;
    };
    NavbarComponent.prototype.gotoEstimate = function () {
        this._router.navigate(['/estimate', this.strSlug]);
    };
    NavbarComponent.prototype.closeDrop = function (event) {
        if (this.bIsDrop && (event.target === this.navbarApp.nativeElement)) {
            this.bIsDrop = false;
        }
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('navbarApp'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], NavbarComponent.prototype, "navbarApp", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/utilities/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__["a" /* NavbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_navbar_service__["a" /* NavbarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_store_service__["a" /* StoreService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n\tposition: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"bIsActive\" class=\"app-content-loading\">\n  <i class=\"fa fa-spinner fa-spin\" #spinnerElement *ngIf=\"nType===0\"></i>\n  <img src=\"http://instantestimator.com/images/timer.gif\" *ngIf=\"type==1\" width=\"200\" style=\"margin-top: 250px;\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerComponent = (function () {
    function SpinnerComponent(_spinner, _changeDetectionRef) {
        this._spinner = _spinner;
        this._changeDetectionRef = _changeDetectionRef;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinner.status.subscribe(function (result) {
            _this.bIsActive = result.status;
            _this.nType = result.type;
            _this._changeDetectionRef.detectChanges();
        });
    };
    return SpinnerComponent;
}());
SpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'spinner-component',
        template: __webpack_require__("../../../../../src/app/utilities/spinner/spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/spinner/spinner.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__spinner_service__["a" /* SpinnerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object])
], SpinnerComponent);

var _a, _b;
//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/spinner/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpinnerService = (function () {
    function SpinnerService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._type = 0; // default spinner
        this._active = false;
    }
    SpinnerService.prototype.set_active = function (v, t) {
        this._active = v;
        this._type = t;
        this.status.next({ status: v, type: t });
    };
    SpinnerService.prototype.start = function (type) {
        if (type === void 0) { type = 0; }
        this.set_active(true, type);
    };
    SpinnerService.prototype.stop = function () {
        this.set_active(false, 0);
    };
    return SpinnerService;
}());
SpinnerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SpinnerService);

//# sourceMappingURL=spinner.service.js.map

/***/ }),

/***/ "../../../../../src/app/utilities/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  background-color: #FFF;\n  color: rgba(255, 255, 255, 0.87);\n  display: block;\n  padding: 0 16px;\n}\n.navbar-app {\n  background-color: #FFF;\n}\n.navbar-app.navbar-absolute-top {\n  height: 40px;\n}\n\nh1 {\n  display: inline;\n  font-size: 20px;\n  font-weight: normal;\n  letter-spacing: 0.1px;\n  line-height: 48px;\n}\n\n.navbar-app img.navbar-img {\n  height: 32px;\n  text-align: left;\n}\n\n.navbar-app .navbar-brand {\n  padding: 0;\n}\n\n.navbar-app .navbar-brand-center img.navbar-img {\n  text-align: left;\n  margin-left: 15px;\n}\n\n.navbar-app .live-help-link,\n.navbar-app .help-link {\n  padding: 0 17px;\n}\n\n.navbar-app .navbar-brand-center,\n.navbar-app .pull-left,\n.navbar-app .pull-right {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: left;\n      -ms-flex-pack: left;\n          justify-content: left;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utilities/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-app navbar-absolute-top\" *ngIf=\"bIsPageLoading\">\n    <div class=\"navbar-brand navbar-brand-center\" ui-yield-to=\"title\">\n        <img [src]=\"strLogoIcon\" alt=\"Virtual Evaluator\" class=\"navbar-img\" *ngIf=\"strLogoIcon\" />\n    </div>\n    <div class=\"btn-group pull-left\" *ngIf=\"bIsLiveHelp\">\n        <a class=\"btn btn-navbar live-help-link\" onclick=\"olark('api.box.expand')\">\n            <img [src]=\"strLiveHelpIcon\" class=\"navbar-img\">\n        </a>\n    <!--\n    <div ui-toggle=\"uiSidebarLeft\" class=\"btn sidebar-toggle\">\n    <i class=\"fa fa-bars\"></i> Menu\n    <a class=\"btn btn-navbar\" [routerLink]=\"['/help']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n    </div>\n    -->\n    </div>\n\n    <div class=\"btn-group dropdown pull-right\" *ngIf=\"bIsHelp\">\n        <a class=\"btn btn-navbar dropdown-toggle help-link\" data-toggle=\"dropdown\" (click)=\"drop()\">\n            <img [src]=\"strHelpIcon\" class=\"navbar-img\">\n        </a>\n        <ul class=\"dropdown-menu\" *ngIf=\"bIsDropDown\">\n            <li *ngFor=\"let helpLink of arrObjHelpLinks\">\n                <a onclick=\"olark('api.box.expand')\" (click)=\"drop()\" *ngIf=\"helpLink.link==='livechat'\">{{helpLink.text}}</a>\n                <a (click)=\"displayLink(helpLink.link)\" *ngIf=\"helpLink.link!=='livechat'\">{{helpLink.text}}</a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/utilities/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_display_modal_display_modal_service__ = __webpack_require__("../../../../../src/app/modals/display-modal/display-modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolbarComponent = (function () {
    function ToolbarComponent(_dataService, _eventService, _displayModal, _viewContainer, _spinner) {
        var _this = this;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this._displayModal = _displayModal;
        this._viewContainer = _viewContainer;
        this._spinner = _spinner;
        this.bIsPageLoading = false;
        this.bIsDropDown = false;
        this.strLogoIcon = '';
        this._eventService.registerEvent('load_topbar_data', this, function (args) {
            var data = args[0];
            _this.bIsHelp = data.helpStatus;
            _this.bIsLiveHelp = data.liveHelpStatus;
            _this.strHelpIcon = data.helpIcon;
            _this.strLiveHelpIcon = data.liveHelpIcon;
            _this.strLogoIcon = data.logoIcon;
            _this.arrObjHelpLinks = data.helpLink;
            var that = _this;
            setTimeout(function () {
                that.bIsPageLoading = true;
            });
        });
    }
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this._eventService.unregisterEvent('load_topbar_data', this);
        if (this._displayModal) {
            this._displayModal.closeDialog();
        }
    };
    ToolbarComponent.prototype.drop = function () {
        this.bIsDropDown = this.bIsDropDown ? false : true;
    };
    ToolbarComponent.prototype.displayLink = function (link) {
        var _this = this;
        this._spinner.start();
        this.drop();
        this._dataService.get(link, false)
            .subscribe(function (res) {
            if (res.status === 200) {
                _this._spinner.stop();
                _this._displayModal.openDialog(res._body, _this._viewContainer);
            }
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/utilities/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utilities/toolbar/toolbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_event_service__["a" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__modals_display_modal_display_modal_service__["a" /* DisplayModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modals_display_modal_display_modal_service__["a" /* DisplayModalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _e || Object])
], ToolbarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle-model/vehicle-model.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\n::-webkit-input-placeholder {\n  color: #000;\n}\n\n:-moz-placeholder { /* Firefox 18- */\n  color: #000; \n}\n\n::-moz-placeholder {  /* Firefox 19+ */\n  color: #000; \n}\n\n:-ms-input-placeholder {  \n  color: #000;  \n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.full-width {\n\twidth: 100%;\n}\n\nform select,\nform select:active,\nform select:hover,\nform select:focus {\n\theight: 2.5em;\n  color: black;\n  padding: 0 1em;\n}\n\nselect option:checked:after {\n  border-color: red;\n}\n\nform input {\n  border-radius: 0;\n  color: #000;\n\n}\n\n#alert_area {\n\tdisplay: none;\n}\n\nselect.disabled {\n  background: #eee;\n  border-color: #777 !important;\n}\n\n#vincode {\n  text-transform: uppercase;\n}\n\n.vehicle-model-wrapper .vehicle-model-header {\n  height: 20%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.vehicle-model-wrapper .vehicle-model-header i {\n  margin: 0;\n}\n\n.vehicle-model-wrapper .vehicle-model-body {\n  height: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-model/vehicle-model.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\" *ngIf=\"bIsPageLoading\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group\">\n      <div class=\"list-group-item-home vehicle-model-wrapper\">\n        <div class=\"text-center vehicle-model-header\">\n          <i class=\"fa fa-car feature-icon text-primary\"></i>\n        </div>\n\n        <div class=\"vehicle-model-body\">\n          <form [formGroup]=\"vinForm\" validate class=\"vin-form\">\n          \t<fieldset>\n          \t\t<div class=\"form-group has-feedback\">\n          \t\t\t<h3 class=\"home-heading text-center\">Enter your VIN#</h3>\n                <!-- <input type=\"text\" class=\"form-control full-width\" name=\"vincode\" id=\"vincode\" placeholder=\"VIN #\" [ngModel]=\"user.vincode\" vincode=\"ngModel\" pattern=\"^[A-Z0-9]{17}$\" [value] =\"vincodeValue\" (keyup)=\"keypressVin($event.target.value, vinForm)\"> -->\n                <input type=\"text\" class=\"form-control full-width\" name=\"vincode\" formControlName=\"vincode\" placeholder=\"VIN #\" pattern=\"^[A-Z0-9]{17}$\" (keyup)=\"keypressVin($event.target.value)\">\n          \t\t</div>\n              <div *ngIf=\"bIsVinError\" class=\"alert alert-danger\">{{ strVinErrorText }}</div>\n          \t</fieldset>\n          </form>\n\n          <form [formGroup]=\"claimForm\" (ngSubmit)=\"loadClaim()\" validate class=\"vin-form\">\n            <fieldset>\n              <div class=\"modal-title uppercase\">Enter Year, Make & Model</div>\n\n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"year\"\n                name=\"year\"\n                [options]=\"arrYears\"\n                (selected)=\"onYearsSelected($event)\"\n                placeholder=\"Year\">\n                </ng-select>\n              </div>\n\n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"make\"\n                name=\"make\"\n                [options]=\"arrMakes\"\n                (selected)=\"onMakesSelected($event)\"\n                [placeholder]=\"'Make'\">\n                </ng-select>\n              </div>\n              \n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"model\"\n                name=\"model\"\n                [options]=\"arrModels\"\n                (selected)=\"onModelsSelected($event)\"\n                [placeholder]=\"'Model'\">\n                </ng-select>\n              </div>\n\n              <div class=\"form-group has-feedback\">\n                <ng-select\n                formControlName=\"category\"\n                name=\"category\"\n                [options]=\"arrCategories\"\n                (selected)=\"onCategoriesSelected($event)\"\n                [placeholder]=\"'Category'\">\n                </ng-select>\n              </div>\n\n              <div *ngIf=\"bIsClaimError\" class=\"alert alert-danger\">{{ strClaimErrorText }}</div>\n\n              <button class=\"btn btn-primary btn-block\" *ngIf=\"nNextAvailable===2 || bIsVinPass\">\n                Next\n              </button>  \n            </fieldset>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vehicle-model/vehicle-model.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_store_service__ = __webpack_require__("../../../../../src/app/services/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * This class represents the lazy loaded VehicleModelComponent.
 */
var VehicleModelComponent = (function () {
    function VehicleModelComponent(router, route, _dataService, _storeService, _spinner) {
        this.router = router;
        this.route = route;
        this._dataService = _dataService;
        this._storeService = _storeService;
        this._spinner = _spinner;
        this.bIsPageLoading = false;
        this.bIsVinError = false;
        this.bIsClaimError = false;
        this.bIsVinPass = false;
        this.nNextAvailable = 0;
        this.nYearID = -1;
        this.nMakeID = -1;
        this.nModelID = -1;
        this.nCategoryID = -1;
    }
    VehicleModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinner.start();
        this._dataService.get('v1/vehicle/years')
            .subscribe(function (res) {
            _this.arrYears = [];
            if (res && res.data && res.data.years) {
                for (var key in res.data.years) {
                    var value = parseInt(res.data.years[key]);
                    _this.arrYears.push({ value: key, label: value });
                }
                _this.arrYears.sort(function (a, b) {
                    return parseInt(b.label) - parseInt(a.label);
                });
            }
            _this.initForm();
            _this._spinner.stop();
            _this.bIsPageLoading = true;
        }, function (error) { return console.error('Unable to fetch brands', error); });
        this.sub = this.route.params.subscribe(function (params) {
            _this.nZipcode = params['zipcode'];
            _this.strSlug = params['slugId'];
        });
        this.user = {
            vincode: ''
        };
    };
    VehicleModelComponent.prototype.initForm = function () {
        this.claimForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            year: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: null, disabled: false }, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            make: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: null, disabled: true }, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            model: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: null, disabled: true }, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ]),
            category: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: null, disabled: true }, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required
            ])
        });
        this.vinForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            vincode: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](null, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(17),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(17)
            ])
        });
    };
    VehicleModelComponent.prototype.onYearsSelected = function (event) {
        var _this = this;
        if (this.nNextAvailable === 0) {
            this.nNextAvailable = 1;
        }
        else {
            this.nNextAvailable = 2;
        }
        var year = event.value;
        this.arrMakes = [];
        this.arrModels = [];
        this.claimForm.get('make').disable();
        this.claimForm.get('model').disable();
        this.claimForm.get('category').disable();
        this.nYearID = year;
        if (year === -1) {
            this.claimForm.get('make').disable();
        }
        else {
            this._spinner.start();
            var strClaimUrl = 'v1/vehicle/makesfromdata?year=' + year;
            this._dataService.get(strClaimUrl)
                .subscribe(function (res) {
                _this.claimForm.get('make').enable();
                if (res.data instanceof Array) {
                    _this.arrMakes = res.data.map(function (item) {
                        return { value: item.make, label: item.make };
                    });
                }
                else {
                    console.log('The response data is no array in year select box');
                }
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    VehicleModelComponent.prototype.onMakesSelected = function (event) {
        var _this = this;
        var make = event.value;
        this.arrModels = [];
        this.claimForm.get('model').disable();
        this.claimForm.get('category').disable();
        if (parseInt(make) === -1) {
            this.arrModels = [];
            this.nModelID = -1;
            this.claimForm.get('model').disable();
            this.claimForm.get('category').disable();
            return;
        }
        this._spinner.start();
        var strClaimUrl = 'v1/vehicle/modelsfromdata?year=' + this.nYearID;
        strClaimUrl += '&make=';
        strClaimUrl += make;
        this._dataService.get(strClaimUrl)
            .subscribe(function (res) {
            if (res.data instanceof Array) {
                _this.arrModels = res.data.map(function (item) {
                    return { value: item.model, label: item.model };
                });
            }
            else {
                console.log('The response data is no array in make select box');
            }
            _this.nMakeID = make;
            _this.claimForm.get('model').enable();
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    VehicleModelComponent.prototype.onModelsSelected = function (event) {
        var _this = this;
        var model = event.value;
        this.arrCategories = [];
        this.claimForm.get('category').disable();
        if (parseInt(model) === -1) {
            this.arrCategories = [];
            this.nCategoryID = -1;
            this.claimForm.get('category').disable();
            return;
        }
        this._spinner.start();
        var strClaimUrl = 'v1/vehicle/stylesfromdata?year=' + this.nYearID;
        strClaimUrl += '&make=';
        strClaimUrl += this.nMakeID;
        strClaimUrl += '&model=';
        strClaimUrl += model;
        this._dataService.get(strClaimUrl)
            .subscribe(function (res) {
            if (res.data instanceof Array) {
                _this.arrCategories = res.data.map(function (item) {
                    return { value: item.vehicleId, label: item.style };
                });
            }
            else {
                console.log('The response data is no array in make select box');
            }
            _this.nModelID = model;
            _this.claimForm.get('category').enable();
            _this._spinner.stop();
        }, function (error) { return console.error('Unable to fetch brands', error); });
    };
    VehicleModelComponent.prototype.onCategoriesSelected = function (event) {
        var category = event.value;
        if (parseInt(category) === -1) {
            return;
        }
        if (this.nNextAvailable === 0) {
            this.nNextAvailable = 1;
        }
        else {
            this.nNextAvailable = 2;
        }
        this.nCategoryID = category;
    };
    VehicleModelComponent.prototype.alertError = function (nFormType, strErrorText, nTime) {
        if (nFormType === 0) {
            this.bIsClaimError = true;
            this.strClaimErrorText = strErrorText;
            var that_1 = this;
            setTimeout(function () { that_1.bIsClaimError = false; }, nTime);
        }
        else {
            this.bIsVinError = true;
            this.strVinErrorText = strErrorText;
            var that_2 = this;
            setTimeout(function () { that_2.bIsVinError = false; }, nTime);
        }
    };
    VehicleModelComponent.prototype.keypressVin = function (value) {
        var _this = this;
        if ((/^[a-zA-Z0-9]*$/.test(value)) === false) {
            this.bIsVinError = true;
            this.alertError(1, 'Vincode should be alphanumberic and length should be 17.', 3000);
            this.vinForm.reset();
            return;
        }
        if (value.toString().length === 17) {
            this._spinner.start();
            this._dataService.get('v1/vehicle/vin?vin=' + value)
                .subscribe(function (res) {
                console.log(res);
                if (res.code === 200) {
                    _this.bIsVinPass = true;
                }
                else {
                    _this.bIsVinPass = false;
                    _this.bIsVinError = true;
                    _this.alertError(1, res.data.error, 3000);
                }
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        }
    };
    VehicleModelComponent.prototype.loadClaim = function () {
        var _this = this;
        if (!this.claimForm.valid) {
            this.alertError(0, 'Please select all the fields.', 3000);
        }
        else {
            this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    Customer_Zip: this.nZipcode,
                    AutoYear: this.claimForm['value']['year'],
                    AutoID: this.nCategoryID
                }
            };
            this._dataService.post('v1/data/createclaim', postData)
                .subscribe(function (res) {
                _this._storeService.set('p_slug', res.data.slug);
                _this._spinner.stop();
                _this.router.navigate(['/damage', res.data.slug]);
            }, function (error) {
                console.error('Unable to fetch brands', error);
                _this._spinner.stop();
                _this.alertError(0, 'The api does not work properly.', 3000);
            });
        }
    };
    return VehicleModelComponent;
}());
VehicleModelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle-model',
        template: __webpack_require__("../../../../../src/app/vehicle-model/vehicle-model.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle-model/vehicle-model.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* StoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_store_service__["a" /* StoreService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _e || Object])
], VehicleModelComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=vehicle-model.component.js.map

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.vehicle-table tr th,\n.vehicle-table tr td {\n\tborder-top: none;\n}\n\n.vehicle-table tr td {\n\tborder-bottom: 1px solid #ccc;\n\ttext-align: left;\n}\n\n.vehicle-table i.fa {\n  color: #ccc;\n}\n\n.vehicle-table tr th {\n\tcolor: #007aff;\n}\n\n.vehicle-table .vehicle-title {\n\tdisplay: inline-block;\n\tborder-bottom: 1px dashed #007aff;\n}\n\n.vehicle-area .vehicle-header {\n  height: 35%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n\n.vehicle-area .vehicle-body {\n  height: 65%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-size: 14px;\n  padding: 0 30px;\n}\n\n.blue-btn-wrapper {\n  margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home\">\n    <div class=\"list-group text-center\">\n      <div class=\"list-group-item-home vehicle-area\" *ngIf=\"bIsPageLoading\">\n        <div class=\"vehicle-header\">\n          <dot-slider\n          [sliderCount]=\"nTotoalStep\"\n          [currentSliderCounter]=\"nCurrentStep\"\n          ></dot-slider>\n          <div class=\"car-img-wrapper\">\n            <img src=\"assets/img/car.png\" width=\"80px\">\n          </div>\n          <h3 class=\"home-heading\">Confirm your Vehicle</h3>\n        </div>\n\n        <div class=\"vehicle-body\">\n          <table class=\"table vehicle-table\" style=\"margin: 0 auto;\" *ngIf=\"bIsCheckPermission\">\n            <tr *ngIf=\"vehicleData.AutoVIN\">\n              <th><div class=\"vehicle-title\">VIN</div></th>\n              <td>\n                <div>{{vehicleData.AutoVIN}}</div>\n                <div></div>\n              </td>\n            </tr>\n            <tr *ngIf=\"vehicleData.Make\">\n              <th><div class=\"vehicle-title\">Make</div></th>\n              <td>\n                <div>{{vehicleData.Make}}</div>\n                <div></div>\n              </td>\n            </tr>\n            <tr *ngIf=\"vehicleData.Model\">\n              <th><div class=\"vehicle-title\">Model</div></th>\n              <td>\n                <div>{{vehicleData.Model}}</div>\n                <div></div>\n              </td>\n            </tr>\n            <tr *ngIf=\"vehicleData.AutoLicense\">\n              <th><div class=\"vehicle-title\">License</div></th>\n              <td>\n                <div>{{vehicleData.AutoLicense}}</div>\n                <div></div>\n              </td>\n            </tr>\n            <tr *ngIf=\"vehicleData.AutoMileage\">\n              <th><div class=\"vehicle-title\">Miles</div></th>\n              <td>\n                <div>{{vehicleData.AutoMileage | number : 0}}</div>\n                <div></div>\n              </td>\n            </tr>\n          </table>\n          <br />\n          <div class=\"blue-btn-wrapper\">\n            <a class=\"btn btn-primary btn-block main-btn\" (click)=\"next();\" >\n              Next\n            </a>\n            <small><a href=\"#\">Not your vehicle?</a></small>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/vehicle/vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_event_service__ = __webpack_require__("../../../../../src/app/services/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_display_modal_display_modal_service__ = __webpack_require__("../../../../../src/app/modals/display-modal/display-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VehicleComponent = (function () {
    function VehicleComponent(route, _dataService, _eventService, router, _spinner, _displayModal, _viewContainer) {
        this.route = route;
        this._dataService = _dataService;
        this._eventService = _eventService;
        this.router = router;
        this._spinner = _spinner;
        this._displayModal = _displayModal;
        this._viewContainer = _viewContainer;
        this.PEMISSIONDENIED = 'Permission denied.';
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */]['API'];
        this.nTotoalStep = 0;
        this.nCurrentStep = 0;
        this.bIsPageLoading = false;
        this.bIsCheckPermission = false;
    }
    VehicleComponent.prototype.initVehicleData = function (data) {
        this.nTotoalStep = data.steps.totalStep;
        this.nCurrentStep = data.steps.currentStep;
        this.strLiveHelpIcon = this.strBackendApi + data.liveHelp.icon;
        this.strHelpIcon = this.strBackendApi + data.help.icon;
        var logoIcon = this.strBackendApi + data.ui.logo;
        if (data.liveHelp.on === 1) {
            this.bIsLiveHelpStatus = true;
        }
        else {
            this.bIsLiveHelpStatus = false;
        }
        if (data.help.on === 1) {
            this.bIsHelpStatus = true;
        }
        else {
            this.bIsHelpStatus = false;
        }
        this._eventService.emit('load_topbar_data', {
            helpIcon: this.strHelpIcon,
            helpStatus: this.bIsHelpStatus,
            liveHelpIcon: this.strLiveHelpIcon,
            liveHelpStatus: this.bIsLiveHelpStatus,
            logoIcon: logoIcon,
            helpLink: data.help.link
        });
        this.bIsPageLoading = true;
        this._spinner.stop();
    };
    VehicleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._spinner.start();
        this.sub = this.route.params.subscribe(function (params) {
            _this.strSlug = params['slugId'];
            _this._spinner.start();
            var postData = {
                code: 200,
                data: {
                    slug: _this.strSlug
                }
            };
            _this._dataService.post('v1/data/getclaim', postData)
                .subscribe(function (res) {
                _this.initVehicleData(res.data);
                _this.vehicleData = res.data;
                _this.redirectWithPermissionIssue();
                _this.bIsCheckPermission = true;
                _this._spinner.stop();
            }, function (error) { return console.error('Unable to fetch brands', error); });
        });
    };
    VehicleComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        if (this._displayModal) {
            this._displayModal.closeDialog();
        }
    };
    VehicleComponent.prototype.redirectWithPermissionIssue = function () {
        var _this = this;
        if (this.vehicleData && this.vehicleData.message === this.PEMISSIONDENIED) {
            this._displayModal.openDialog(this.vehicleData.message, this._viewContainer)
                .then(function (dialog) {
                dialog.result.then(function (returnData) {
                    _this.router.navigate(['/']);
                });
            });
        }
    };
    //from vehicle to damage
    VehicleComponent.prototype.next = function () {
        this.router.navigate(['/damage', this.strSlug]);
    };
    return VehicleComponent;
}());
VehicleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vehicle',
        template: __webpack_require__("../../../../../src/app/vehicle/vehicle.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vehicle/vehicle.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_event_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__modals_display_modal_display_modal_service__["a" /* DisplayModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__modals_display_modal_display_modal_service__["a" /* DisplayModalService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object])
], VehicleComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=vehicle.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.welcome-page {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/person.png") + ");\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  background-color: #62AFCD;\n\tpadding: 20px 30px;\n}\n\n.welcome-page img {\n  display: inline-block;\n}\n\n.welcome-page .welcome-logo {\n\theight: 30%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.welcome-page .main-wrapper {\n\theight: 70%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    background-repeat: no-repeat;\n    background-position: center bottom;\n    background-size: initial;\n}\n\n.welcome-page .main-wrapper .desc-wrapper {\n  height: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.welcome-page .main-wrapper .play-wrapper {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 100%;\n  height: 70%;\n}\n\n.welcome-page .main-wrapper .play-img {\n}\n\n.welcome-page .main-wrapper .play-wrapper .img-wrapper {\n\tmargin: 20px 0;\n  max-width: 100%;\n  height: 80%;\n}\n\n.welcome-page .main-wrapper .play-wrapper .img-wrapper img {\n  max-height: 100%;\n}\n\n.welcome-page .main-wrapper .play-wrapper .content-wrapper {\n\ttext-transform: uppercase;\n  color: #fff;\n  height: 20%;\n}\n\n.welcome-page .main-wrapper .blue-btn-wrapper {\n  height: 40px;\n}\n\n.welcome-page .main-wrapper .blue-btn-wrapper button {\n\tfont-size: 20px;\n  display: block;\n}\n\n.welcome-page .main-wrapper .welcome-content {\n\tcolor: #fff;\n  font-size: 20px;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: calc( 100% - 40px );\n}\n\n.welcome-page .main-wrapper .play-wrapper  .content-wrapper {\n  font-size: 12px;\n}\n\n@media (max-width: 500px) {\n\t.welcome-page .main-wrapper {\n\t\tbackground-size: 82%;\n\t}\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\" *ngIf=\"bIsPageLoading\">\n    <div class=\"welcome-page scrollable-wrapper\" [style.height.px]=\"nPageHeight\">\n        <div class=\"welcome-logo\">\n            <img [src]=\"strLogoUrl\">\n        </div>\n\n        <div class=\"main-wrapper\">\n            <div class=\"welcome-content\">\n                <div class=\"desc-wrapper\">{{strWelcomeDescription}}</div>\n\n                <div class=\"play-wrapper\" *ngIf=\"bIsVideoLink\">\n                    <div class=\"img-wrapper\" (click)=\"player()\">\n                        <img [src]=\"strVideoLinkSrc\" class=\"play-img\">\n                    </div>\n                    <a class=\"content-wrapper\" (click)=\"player()\">{{strVideoLinkText}}</a>\n                </div>\n            </div>\n\n            <div class=\"blue-btn-wrapper\">\n                <button class=\"btn btn-primary full-width\" (click)=\"start()\">{{strBtnContent}}</button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__ = __webpack_require__("../../../../ngx-modialog/plugins/bootstrap/bundle/ngx-modialog-bootstrap.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__ = __webpack_require__("../../../../../src/app/utilities/spinner/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_player_modal_player_modal_service__ = __webpack_require__("../../../../../src/app/modals/player-modal/player-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * This class represents the lazy loaded WelcomeComponent.
 */
var WelcomeComponent = (function () {
    function WelcomeComponent(_dataService, _spinner, _activatedRoute, _router, _playerModal, _viewContainer, modal) {
        this._dataService = _dataService;
        this._spinner = _spinner;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this._playerModal = _playerModal;
        this._viewContainer = _viewContainer;
        this.modal = modal;
        modal.overlay.defaultViewContainer = _viewContainer;
        this.nPageHeight = window.innerHeight;
        this.strWelcomeDescription = '';
        this.strBtnContent = '';
        this.strLogoUrl = '';
        this.strCallback = '';
        this.strBackendApi = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['API'];
        this.bIsVideoLink = false;
        this.bIsPageLoading = false;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            _this.strSlugId = params['slugId'];
        });
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // is mobile..
            var objMobileInfo = this.getDeviceInfo();
            var postData = {
                code: 200,
                data: {
                    slug: this.strSlugId,
                    UserAgent_Device: objMobileInfo['os']['name'],
                    UserAgent_Specific: 'v' + objMobileInfo['os']['version'],
                }
            };
            alert(objMobileInfo['os']['name']);
            alert(objMobileInfo['os']['version']);
            this._dataService.post('v1/data/welcome', postData)
                .subscribe(function (res) {
                console.log('Mobile info is successfully sent');
            }, function (error) { return console.error('Unable to fetch brands', error); });
            this.getWelcomeData();
        }
        else {
            console.log('You are on PC');
            window.location.href = 'https://virtualevaluator.net/client/csl/';
        }
    };
    WelcomeComponent.prototype.getDeviceInfo = function () {
        var mobileModule = {
            options: [],
            header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor],
            dataos: [
                { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
                { name: 'Windows', value: 'Win', version: 'NT' },
                { name: 'iPhone', value: 'iPhone', version: 'OS' },
                { name: 'iPad', value: 'iPad', version: 'OS' },
                { name: 'Kindle', value: 'Silk', version: 'Silk' },
                { name: 'Android', value: 'Android', version: 'Android' },
                { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
                { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
                { name: 'Macintosh', value: 'Mac', version: 'OS X' },
                { name: 'Linux', value: 'Linux', version: 'rv' },
                { name: 'Palm', value: 'Palm', version: 'PalmOS' }
            ],
            databrowser: [
                { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
                { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
                { name: 'Safari', value: 'Safari', version: 'Version' },
                { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
                { name: 'Opera', value: 'Opera', version: 'Opera' },
                { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
                { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
            ],
            init: function () {
                var agent = this.header.join(' '), os = this.matchItem(agent, this.dataos), browser = this.matchItem(agent, this.databrowser);
                return { os: os, browser: browser };
            },
            matchItem: function (string, data) {
                var i = 0, j = 0, html = '', regex, regexv, match, matches, version;
                for (i = 0; i < data.length; i += 1) {
                    regex = new RegExp(data[i].value, 'i');
                    match = regex.test(string);
                    if (match) {
                        regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                        matches = string.match(regexv);
                        version = '';
                        if (matches) {
                            if (matches[1]) {
                                matches = matches[1];
                            }
                        }
                        if (matches) {
                            matches = matches.split(/[._]+/);
                            for (j = 0; j < matches.length; j += 1) {
                                if (j === 0) {
                                    version += matches[j] + '.';
                                }
                                else {
                                    version += matches[j];
                                }
                            }
                        }
                        else {
                            version = '0';
                        }
                        return {
                            name: data[i].name,
                            version: parseFloat(version)
                        };
                    }
                }
                return { name: 'unknown', version: 0 };
            }
        };
        var mobileInfo = mobileModule.init();
        return mobileInfo;
    };
    WelcomeComponent.prototype.ngOnDestroy = function () {
        if (this._playerModal) {
            this._playerModal.closeDialog();
        }
    };
    WelcomeComponent.prototype.getWelcomeData = function (nCounter) {
        var _this = this;
        if (nCounter === void 0) { nCounter = 0; }
        if (nCounter > 10) {
            console.log('Timeout to wait for the slug');
        }
        else {
            if (!this.strSlugId) {
                nCounter++;
                setTimeout(function () { return _this.getWelcomeData(nCounter); }, 30);
            }
            else {
                var postData = {
                    code: 200,
                    data: {
                        slug: this.strSlugId
                    }
                };
                this._spinner.start();
                this._dataService.post('v1/data/welcome', postData)
                    .subscribe(function (res) {
                    var data = res.data;
                    if (data.forward) {
                        window.location.href = data.forward;
                    }
                    _this.strLogoUrl = _this.strBackendApi + data.logo;
                    _this.strVideoLinkSrc = _this.strBackendApi + data.video_link_src;
                    _this.strVideoLinkText = data.video_link_text;
                    _this.strWelcomeDescription = data.desc;
                    _this.strBtnContent = data.next_btn;
                    _this.strCallback = data.callback;
                    _this.strVideoLink = data.video_link;
                    if (data.video === 0) {
                        _this.bIsVideoLink = false;
                    }
                    else {
                        _this.bIsVideoLink = true;
                    }
                    _this.bIsPageLoading = true;
                    _this._spinner.stop();
                }, function (error) { return console.error('Unable to fetch brands', error); });
            }
        }
    };
    WelcomeComponent.prototype.start = function () {
        var subUrl = '';
        if (this.strCallback === 'vin_photo') {
            subUrl = 'identify';
        }
        else {
            subUrl = '/' + this.strCallback;
        }
        this._router.navigate([subUrl, this.strSlugId]);
    };
    WelcomeComponent.prototype.player = function () {
        this._playerModal.openDialog('', this._viewContainer);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__utilities_spinner_spinner_service__["a" /* SpinnerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__modals_player_modal_player_modal_service__["a" /* PlayerModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__modals_player_modal_player_modal_service__["a" /* PlayerModalService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__["c" /* Modal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_modialog_plugins_bootstrap__["c" /* Modal */]) === "function" && _g || Object])
], WelcomeComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/zip/zip.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 0 16px;\n}\n\nh2 {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.005em;\n  margin-bottom: 0;\n  margin-top: 0.83em;\n}\n\n.zipcode-area {\n\twidth: 80%;\n  margin: auto;\n}\n\n.zipcode-area #zipcode {\n  border-color: #0051a8;\n  border-radius: 0;\n  height: 3em;\n}\n\n.description-area {\n\tpadding: 0px 20px;\n}\n\n.question-area {\n\tmargin-bottom: 10px;\n\tbackground: #BBDBFF;\n        border-radius: 8px;\n}\n.answer-area {\n\tmargin-bottom: 10px;\n\tbackground: #EFEFEF;\n        border-radius: 8px;\n}\n.description-area .group {\n\tpadding: 10px;\n}\n.legend \n{\n    width: 20px;\n    overflow: hidden;\n    float: left;\n    vertical-align: top;\n}\n\n.answer\n{\n    width: 88%;\n    overflow: hidden;\n    float: left;\n}\n\n.clear\n{\n    clear: both;\n}\n\n.list-group\n{\n  margin-bottom: 10px;\n}\n\n.zip-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zip/zip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollable\">\n  <div class=\"scrollable-content home zip-wrapper\">\n    <div class=\"text-center\">\n      <div class=\"list-group-item-home\">\n        <div>\n          <i class=\"fa fa-map-marker feature-icon text-primary\"></i>\n        </div>\n        <div>          \n          <form #zipForm=\"ngForm\" validate class=\"zip-form\"  (ngSubmit)=\"next(zipForm)\">\n      \t\t<div class=\"form-group zipcode-area\">\n      \t\t\t<h3 class=\"home-heading\">Enter your Zipcode</h3>\n      \t\t\t<input type=\"text\" class=\"form-control\" name=\"zipcode\" id=\"zipcode\" [ngModel]=\"user.zipcode\" \n\t\t\t        required  #zipcode=\"ngModel\" pattern=\"^\\d{5}(?:[-\\s]\\d{4})?$\">\n\t\t\t    <small [hidden]=\"zipcode.valid || (zipcode.pristine && !zipForm.submitted)\" class=\"text-danger\">\n\t\t\t        Zipcode is required and format should be like <i>12321</i>.\n\t\t\t    </small>\n      \t\t</div>\n      \t\t<button class=\"btn btn-primary btn-block\">\n              Next\n            </button>\n          </form>    \n        </div>\n      </div>\n    </div>\n\n    <div class=\"description-area\">\n\t  <div class=\"question-area group\">\n      <div class=\"legend\">\n        <h4>Q.</h4>\n      </div>\n      <div  class=\"answer\">\n        Why do I need to give my zip code?\n      </div>\n      <div class=\"clear\"></div>\n\t  </div>\n\n\t  <div class=\"answer-area group\">\n        <div class=\"legend\">\n          <h4>A.</h4>\n        </div>\n        <div  class=\"answer\">\n          Different regions and cities  have different pair rates, legal requirement and standardized practices that can potentially effect the cost of repair.\n        </div>\n      <div class=\"clear\"></div>\n    </div>\n\t</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/zip/zip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZipComponent = (function () {
    function ZipComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    ZipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.strSlugId = params['slugId'];
        });
        this.user = {
            zipcode: '',
            email: ''
        };
    };
    ZipComponent.prototype.next = function (form) {
        if (form.value.zipcode) {
            this.router.navigate(['/vehicle_model/ps', this.strSlugId,
                form.value.zipcode]);
        }
        else {
            alert('Please insert zipcode.');
        }
    };
    return ZipComponent;
}());
ZipComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-zip',
        template: __webpack_require__("../../../../../src/app/zip/zip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/zip/zip.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], ZipComponent);

var _a, _b;
//# sourceMappingURL=zip.component.js.map

/***/ }),

/***/ "../../../../../src/assets/img/person.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "person.d79ac08d7192724130b2.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    ENV: 'PROD',
    API: 'https://api.virtualevaluator.net'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */]['ENV'] === 'PROD') {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map