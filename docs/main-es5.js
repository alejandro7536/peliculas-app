(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-google-tag-manager */
      "./node_modules/angular-google-tag-manager/__ivy_ngcc__/fesm2015/angular-google-tag-manager.js");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(gtmService, router) {
          _classCallCheck(this, AppComponent);

          this.gtmService = gtmService;
          this.router = router;
          this.title = 'peliculasApp';
          gtmService.addGtmToDom();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.router.events.forEach(function (item) {
              if (item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                var gtmTag = {
                  event: 'page',
                  pageName: item.url
                };

                _this.gtmService.pushTag(gtmTag);
              }
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_2__["GoogleTagManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_2__["GoogleTagManagerService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/pages.module */
      "./src/app/pages/pages.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./routing.module */
      "./src/app/routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-google-tag-manager */
      "./node_modules/angular-google-tag-manager/__ivy_ngcc__/fesm2015/angular-google-tag-manager.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_8__["GoogleTagManagerModule"].forRoot({
          id: 'GTM-NLXMFDD'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_8__["GoogleTagManagerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _pages_pages_module__WEBPACK_IMPORTED_MODULE_4__["PagesModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_8__["GoogleTagManagerModule"].forRoot({
              id: 'GTM-NLXMFDD'
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/cast-slideshow/cast-slideshow.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/cast-slideshow/cast-slideshow.component.ts ***!
      \***********************************************************************/

    /*! exports provided: CastSlideshowComponent */

    /***/
    function srcAppComponentsCastSlideshowCastSlideshowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CastSlideshowComponent", function () {
        return CastSlideshowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! swiper */
      "./node_modules/swiper/swiper.esm.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../pipes/poster.pipe */
      "./src/app/pipes/poster.pipe.ts");

      function CastSlideshowComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "poster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var actor_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, actor_r1.profile_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", actor_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actor_r1.name);
        }
      }

      var CastSlideshowComponent = /*#__PURE__*/function () {
        function CastSlideshowComponent() {
          _classCallCheck(this, CastSlideshowComponent);
        }

        _createClass(CastSlideshowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
              slidesPerView: 6.3,
              freeMode: true,
              spaceBetween: 15
            });
          }
        }]);

        return CastSlideshowComponent;
      }();

      CastSlideshowComponent.ɵfac = function CastSlideshowComponent_Factory(t) {
        return new (t || CastSlideshowComponent)();
      };

      CastSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CastSlideshowComponent,
        selectors: [["app-cast-slideshow"]],
        inputs: {
          cast: "cast"
        },
        decls: 3,
        vars: 1,
        consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "card", "style", "width: 10rem;", "class", "swiper-slide text-center", 4, "ngFor", "ngForOf"], [1, "swiper-slide", "text-center", 2, "width", "10rem"], [1, "card-img-top", "shadow", 2, "border-radius", "12px", 3, "src", "alt"], [1, "card-body"], [1, "card-text"]],
        template: function CastSlideshowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CastSlideshowComponent_div_2_Template, 6, 5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cast);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_3__["PosterPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FzdC1zbGlkZXNob3cvY2FzdC1zbGlkZXNob3cuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CastSlideshowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cast-slideshow',
            templateUrl: './cast-slideshow.component.html',
            styleUrls: ['./cast-slideshow.component.css']
          }]
        }], function () {
          return [];
        }, {
          cast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./slideshow/slideshow.component */
      "./src/app/components/slideshow/slideshow.component.ts");
      /* harmony import */


      var _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./peliculas-poster-grid/peliculas-poster-grid.component */
      "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts");
      /* harmony import */


      var ng_starrating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng-starrating */
      "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./cast-slideshow/cast-slideshow.component */
      "./src/app/components/cast-slideshow/cast-slideshow.component.ts");
      /* harmony import */


      var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./loader/loader.component */
      "./src/app/components/loader/loader.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ComponentsModule
      });
      ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ComponentsModule_Factory(t) {
          return new (t || ComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_6__["RatingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowComponent"], _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasPosterGridComponent"], _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_6__["RatingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowComponent"], _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasPosterGridComponent"], _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowComponent"], _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasPosterGridComponent"], _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_6__["RatingModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
            exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowComponent"], _peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasPosterGridComponent"], _cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_8__["CastSlideshowComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/loader/loader.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/loader/loader.component.ts ***!
      \*******************************************************/

    /*! exports provided: LoaderComponent */

    /***/
    function srcAppComponentsLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
        return LoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LoaderComponent = /*#__PURE__*/function () {
        function LoaderComponent() {
          _classCallCheck(this, LoaderComponent);
        }

        _createClass(LoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoaderComponent;
      }();

      LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
        return new (t || LoaderComponent)();
      };

      LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoaderComponent,
        selectors: [["app-loader"]],
        decls: 4,
        vars: 0,
        consts: [[1, "loader"], ["src", "assets/img/loader.svg", "alt", "", 2, "height", "100px"], [1, "text-muted", 2, "font-family", "gilroyBold"]],
        template: function LoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cargando");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".loader[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 95vh;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogOTV2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loader',
            templateUrl: './loader.component.html',
            styleUrls: ['./loader.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/navbar/navbar.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(router) {
          _classCallCheck(this, NavbarComponent);

          this.router = router;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "buscarPelicula",
          value: function buscarPelicula(termino) {
            termino.trim();

            if (termino.length === 0) {
              return;
            }

            console.log(termino);
            this.router.navigate(['/buscar', termino]);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 15,
        vars: 0,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["routerLink", "/home", 1, "navbar-brand"], [2, "font-family", "gilroyBold", "font-weight", "bold", "color", "#484848"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mb-2", "mb-lg-0"], [1, "d-flex"], [1, "input-group", "mb-3"], ["type", "search", "placeholder", "Buscar pel\xEDcula", 1, "form-control", "shadow", 2, "border-top-left-radius", "10px", "border-bottom-left-radius", "10px", "border", "0 !important", "box-shadow", "inset 0 !important", 3, "keyup.enter"], ["txtBuscar", ""], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-success", "shadow", 2, "border-top-right-radius", "10px", "border-bottom-right-radius", "10px", "border", "0", 3, "click"], [1, "fa", "fa-search"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PelisApp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

              return ctx.buscarPelicula(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_13_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

              return ctx.buscarPelicula(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: PeliculasPosterGridComponent */

    /***/
    function srcAppComponentsPeliculasPosterGridPeliculasPosterGridComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeliculasPosterGridComponent", function () {
        return PeliculasPosterGridComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_starrating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng-starrating */
      "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");
      /* harmony import */


      var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/poster.pipe */
      "./src/app/pipes/poster.pipe.ts");

      function PeliculasPosterGridComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeliculasPosterGridComponent_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var movie_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onClick(movie_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "poster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "star-rating", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movie_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, movie_r1.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", movie_r1.vote_average);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 6, movie_r1.vote_average, "1.1-2"));
        }
      }

      var PeliculasPosterGridComponent = /*#__PURE__*/function () {
        function PeliculasPosterGridComponent(router) {
          _classCallCheck(this, PeliculasPosterGridComponent);

          this.router = router;
        }

        _createClass(PeliculasPosterGridComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.movies);
          }
        }, {
          key: "onClick",
          value: function onClick(movie) {
            this.router.navigate(['/pelicula', movie.id]);
          }
        }]);

        return PeliculasPosterGridComponent;
      }();

      PeliculasPosterGridComponent.ɵfac = function PeliculasPosterGridComponent_Factory(t) {
        return new (t || PeliculasPosterGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      PeliculasPosterGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PeliculasPosterGridComponent,
        selectors: [["app-peliculas-poster-grid"]],
        inputs: {
          movies: "movies"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["class", "col-md-3 mb-5 animate__animated animate__fadeIn", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-5", "animate__animated", "animate__fadeIn"], [1, "card", "shadow", "border-0", "info", "cursor", 3, "click"], [1, "img-fluid", "poster", 3, "src"], [1, "card-body"], [1, "card-title", "text-muted", 2, "font-size", "15px"], [1, "col-9"], ["totalstars", "10", "checkedcolor", "darkgoldenrod", "uncheckedcolor", "gray", "size", "14px", "readonly", "false", 3, "value"], [1, "col-3", "text-right"], [1, "badge", "bg-success"]],
        template: function PeliculasPosterGridComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeliculasPosterGridComponent_div_1_Template, 14, 9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ng_starrating__WEBPACK_IMPORTED_MODULE_3__["StarRatingComponent"]],
        pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_4__["PosterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
        styles: [".poster[_ngcontent-%COMP%]{\r\n  border-top-left-radius: 12px;\r\n  border-top-right-radius: 12px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n  border-bottom-left-radius: 12px !important;\r\n  border-bottom-right-radius: 12px !important;\r\n}\r\n\r\n.cursor[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZWxpY3VsYXMtcG9zdGVyLWdyaWQvcGVsaWN1bGFzLXBvc3Rlci1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BlbGljdWxhcy1wb3N0ZXItZ3JpZC9wZWxpY3VsYXMtcG9zdGVyLWdyaWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0ZXJ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmluZm97XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXJzb3J7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasPosterGridComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-peliculas-poster-grid',
            templateUrl: './peliculas-poster-grid.component.html',
            styleUrls: ['./peliculas-poster-grid.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/slideshow/slideshow.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/slideshow/slideshow.component.ts ***!
      \*************************************************************/

    /*! exports provided: SlideshowComponent */

    /***/
    function srcAppComponentsSlideshowSlideshowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function () {
        return SlideshowComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! swiper */
      "./node_modules/swiper/swiper.esm.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a2) {
        return {
          "background-size": "cover",
          "background-position": "top",
          "background-image": a2
        };
      };

      function SlideshowComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var movie_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, "url(https://image.tmdb.org/t/p/w500" + movie_r1.backdrop_path + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, movie_r1.overview, 0, 130), " ...");
        }
      }

      var SlideshowComponent = /*#__PURE__*/function () {
        function SlideshowComponent() {
          _classCallCheck(this, SlideshowComponent);
        }

        _createClass(SlideshowComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper-container', {
              loop: true,
              autoplay: {
                delay: 2500,
                disableOnInteraction: false
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSlideNext",
          value: function onSlideNext() {
            this.mySwiper.slideNext();
          }
        }, {
          key: "onSlidePrevius",
          value: function onSlidePrevius() {
            this.mySwiper.slidePrev();
          }
        }]);

        return SlideshowComponent;
      }();

      SlideshowComponent.ɵfac = function SlideshowComponent_Factory(t) {
        return new (t || SlideshowComponent)();
      };

      SlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlideshowComponent,
        selectors: [["app-slideshow"]],
        inputs: {
          movies: "movies"
        },
        decls: 7,
        vars: 1,
        consts: [[1, "swiper-container"], [1, "swiper-wrapper"], ["class", "swiper-slide", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-prev", 3, "click"], [1, "swiper-button-next", 3, "click"], [1, "swiper-scrollbar"], [1, "swiper-slide", 3, "ngStyle"], [1, "movie-description", "text-white"], [2, "margin-bottom", "0"]],
        template: function SlideshowComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlideshowComponent_div_2_Template, 7, 9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_div_click_4_listener() {
              return ctx.onSlidePrevius();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SlideshowComponent_Template_div_click_5_listener() {
              return ctx.onSlideNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movies);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: [".swiper-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 400px;\r\n}\r\n\r\n.swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.movie-description[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  \r\n  \r\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5), rgb(0,0,0));\r\n  \r\n  bottom: 0;\r\n  padding-top: 30px;\r\n  padding: 5px 30px;\r\n  position: absolute;\r\n  width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXNob3cvc2xpZGVzaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUU5QiwrQkFBK0I7RUFDL0IsdUZBQXVGO0VBQ3ZGLHFFQUFxRTtFQUNyRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVzs7QUFFYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzaG93L3NsaWRlc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLXByZXYsIC5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1vdmllLWRlc2NyaXB0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSxyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYigwLDAsMCkpO1xyXG4gIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSxyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYigwLDAsMCkpO1xyXG4gIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4IDMwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideshowComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-slideshow',
            templateUrl: './slideshow.component.html',
            styleUrls: ['./slideshow.component.css']
          }]
        }], function () {
          return [];
        }, {
          movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/buscar/buscar.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/pages/buscar/buscar.component.ts ***!
      \**************************************************/

    /*! exports provided: BuscarComponent */

    /***/
    function srcAppPagesBuscarBuscarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BuscarComponent", function () {
        return BuscarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/peliculas.service */
      "./src/app/services/peliculas.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/peliculas-poster-grid/peliculas-poster-grid.component */
      "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts");

      function BuscarComponent_app_peliculas_poster_grid_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-peliculas-poster-grid", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx_r0.movies);
        }
      }

      var BuscarComponent = /*#__PURE__*/function () {
        function BuscarComponent(activatedRoute, peliculaService) {
          _classCallCheck(this, BuscarComponent);

          this.activatedRoute = activatedRoute;
          this.peliculaService = peliculaService;
          this.movies = [];
        }

        _createClass(BuscarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.activatedRoute.params.subscribe(function (params) {
              _this2.termino = params.texto;

              _this2.peliculaService.buscarPelicula(params.texto).subscribe(function (movies) {
                return _this2.movies = movies;
              });
            });
          }
        }]);

        return BuscarComponent;
      }();

      BuscarComponent.ɵfac = function BuscarComponent_Factory(t) {
        return new (t || BuscarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]));
      };

      BuscarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BuscarComponent,
        selectors: [["app-buscar"]],
        decls: 6,
        vars: 2,
        consts: [[1, "container", "mt-5"], [1, "mb-3", 2, "font-family", "gilroyLight"], [1, "text-capitalize"], [3, "movies", 4, "ngIf"], [3, "movies"]],
        template: function BuscarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscando ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BuscarComponent_app_peliculas_poster_grid_5_Template, 1, 1, "app-peliculas-poster-grid", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.termino);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_4__["PeliculasPosterGridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1c2Nhci9idXNjYXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-buscar',
            templateUrl: './buscar.component.html',
            styleUrls: ['./buscar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/home/home.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/peliculas.service */
      "./src/app/services/peliculas.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/loader/loader.component */
      "./src/app/components/loader/loader.component.ts");
      /* harmony import */


      var _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/slideshow/slideshow.component */
      "./src/app/components/slideshow/slideshow.component.ts");
      /* harmony import */


      var _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/peliculas-poster-grid/peliculas-poster-grid.component */
      "./src/app/components/peliculas-poster-grid/peliculas-poster-grid.component.ts");

      function HomeComponent_app_loader_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
        }
      }

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-slideshow", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx_r1.moviesSlideshow);
        }
      }

      function HomeComponent_div_2_app_peliculas_poster_grid_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-peliculas-poster-grid", 2);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx_r3.movies);
        }
      }

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pel\xEDculas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_2_app_peliculas_poster_grid_3_Template, 1, 1, "app-peliculas-poster-grid", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.movies.length > 0);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(peliculasService) {
          _classCallCheck(this, HomeComponent);

          this.peliculasService = peliculasService;
          this.movies = [];
          this.moviesSlideshow = [];
          this.loading = false;
        }

        _createClass(HomeComponent, [{
          key: "onScroll",
          value: function onScroll() {
            var _this3 = this;

            var pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
            var max = document.documentElement.scrollHeight || document.body.scrollHeight;

            if (pos > max) {
              if (this.peliculasService.cargando) {
                return;
              }

              this.peliculasService.getCartelera().subscribe(function (res) {
                var _this3$movies;

                (_this3$movies = _this3.movies).push.apply(_this3$movies, _toConsumableArray(res));
              });
              console.log('Llamar servicio');
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.loading = true;
            this.peliculasService.getCartelera().subscribe(function (res) {
              _this4.movies = res;
              _this4.moviesSlideshow = res;
              _this4.loading = false;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.peliculasService.resetPage();
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__["PeliculasService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        hostBindings: function HomeComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HomeComponent_scroll_HostBindingHandler($event) {
              return ctx.onScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "movies"], [1, "container"], [1, "mt-5", 2, "font-family", "gilroyBold"], [3, "movies", 4, "ngIf"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_app_loader_0_Template, 1, 0, "app-loader", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 2, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movies.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _components_slideshow_slideshow_component__WEBPACK_IMPORTED_MODULE_4__["SlideshowComponent"], _components_peliculas_poster_grid_peliculas_poster_grid_component__WEBPACK_IMPORTED_MODULE_5__["PeliculasPosterGridComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_1__["PeliculasService"]
          }];
        }, {
          onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/pages/pages.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pages/pages.module.ts ***!
      \***************************************/

    /*! exports provided: PagesModule */

    /***/
    function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      "./src/app/pages/home/home.component.ts");
      /* harmony import */


      var _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pelicula/pelicula.component */
      "./src/app/pages/pelicula/pelicula.component.ts");
      /* harmony import */


      var _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./buscar/buscar.component */
      "./src/app/pages/buscar/buscar.component.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../pipes/pipes.module */
      "./src/app/pipes/pipes.module.ts");
      /* harmony import */


      var ng_starrating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-starrating */
      "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");

      var PagesModule = function PagesModule() {
        _classCallCheck(this, PagesModule);
      };

      PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PagesModule
      });
      PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__["PeliculaComponent"], _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__["PeliculaComponent"], _buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], ng_starrating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pages/pelicula/pelicula.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/pages/pelicula/pelicula.component.ts ***!
      \******************************************************/

    /*! exports provided: PeliculaComponent */

    /***/
    function srcAppPagesPeliculaPeliculaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeliculaComponent", function () {
        return PeliculaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/peliculas.service */
      "./src/app/services/peliculas.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ng_starrating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-starrating */
      "./node_modules/ng-starrating/__ivy_ngcc__/fesm2015/ng-starrating.js");
      /* harmony import */


      var _components_cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/cast-slideshow/cast-slideshow.component */
      "./src/app/components/cast-slideshow/cast-slideshow.component.ts");
      /* harmony import */


      var _pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../pipes/poster.pipe */
      "./src/app/pipes/poster.pipe.ts");

      function PeliculaComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "poster");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "star-rating", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeliculaComponent_div_1_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.regresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx_r0.movie.poster_path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.movie.vote_average);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, ctx_r0.movie.vote_average, "1.1-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.movie.overview);
        }
      }

      function PeliculaComponent_app_cast_slideshow_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cast-slideshow", 16);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cast", ctx_r1.cast);
        }
      }

      var PeliculaComponent = /*#__PURE__*/function () {
        function PeliculaComponent(activatedRoute, peliculasService, location, router) {
          _classCallCheck(this, PeliculaComponent);

          this.activatedRoute = activatedRoute;
          this.peliculasService = peliculasService;
          this.location = location;
          this.router = router;
          this.cast = [];
        }

        _createClass(PeliculaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            var id = this.activatedRoute.snapshot.params.id;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.peliculasService.getPeliculaDetalle(id), this.peliculasService.getCast(id)]).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  movie = _ref2[0],
                  cast = _ref2[1];

              if (!movie) {
                _this5.router.navigateByUrl('/home');

                return;
              }

              _this5.movie = movie;
              _this5.cast = cast.filter(function (actor) {
                return actor.profile_path != null;
              });
            }); // this.peliculasService.getPeliculaDetalle(id).subscribe(
            //   movie => {
            //     if (!movie) {
            //       this.router.navigateByUrl('/home');
            //       return;
            //     }
            //     this.movie = movie;
            //   }
            // );
            // this.peliculasService.getCast(id).subscribe( cast => {
            //   this.cast = cast.filter( actor => actor.profile_path != null);
            //   console.log(cast);
            // });
          }
        }, {
          key: "regresar",
          value: function regresar() {
            this.location.back();
          }
        }]);

        return PeliculaComponent;
      }();

      PeliculaComponent.ɵfac = function PeliculaComponent_Factory(t) {
        return new (t || PeliculaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      PeliculaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PeliculaComponent,
        selectors: [["app-pelicula"]],
        decls: 5,
        vars: 2,
        consts: [[1, "container"], ["class", "row mt-5 animate__animated animate__fadeIn", 4, "ngIf"], [1, "row", "mt-5"], [1, "col"], [3, "cast", 4, "ngIf"], [1, "row", "mt-5", "animate__animated", "animate__fadeIn"], [1, "col-md-3", "mb-3"], ["alt", "movie.titulo", 1, "image", "shadow", 3, "src"], [1, "col-md-9", "card-body"], [2, "font-family", "gilroyBold"], [1, "row"], ["totalstars", "10", "checkedcolor", "darkgoldenrod", "uncheckedcolor", "gray", "size", "14px", "readonly", "false", 3, "value"], [1, "col", "text-right"], [1, "badge", "bg-success"], [1, "row", "mt-2"], [1, "btn", "btn-outline-success", 3, "click"], [3, "cast"]],
        template: function PeliculaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeliculaComponent_div_1_Template, 22, 10, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeliculaComponent_app_cast_slideshow_4_Template, 1, 1, "app-cast-slideshow", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cast.length > 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_starrating__WEBPACK_IMPORTED_MODULE_5__["StarRatingComponent"], _components_cast_slideshow_cast_slideshow_component__WEBPACK_IMPORTED_MODULE_6__["CastSlideshowComponent"]],
        pipes: [_pipes_poster_pipe__WEBPACK_IMPORTED_MODULE_7__["PosterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]],
        styles: [".image[_ngcontent-%COMP%]{\r\n  height: 350px;\r\n  border-radius: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVsaWN1bGEvcGVsaWN1bGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZWxpY3VsYS9wZWxpY3VsYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdle1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculaComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-pelicula',
            templateUrl: './pelicula.component.html',
            styleUrls: ['./pelicula.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/pipes/pipes.module.ts":
    /*!***************************************!*\
      !*** ./src/app/pipes/pipes.module.ts ***!
      \***************************************/

    /*! exports provided: PipesModule */

    /***/
    function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
        return PipesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _poster_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./poster.pipe */
      "./src/app/pipes/poster.pipe.ts");

      var PipesModule = function PipesModule() {
        _classCallCheck(this, PipesModule);
      };

      PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PipesModule
      });
      PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PipesModule_Factory(t) {
          return new (t || PipesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
          declarations: [_poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_poster_pipe__WEBPACK_IMPORTED_MODULE_2__["PosterPipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/pipes/poster.pipe.ts":
    /*!**************************************!*\
      !*** ./src/app/pipes/poster.pipe.ts ***!
      \**************************************/

    /*! exports provided: PosterPipe */

    /***/
    function srcAppPipesPosterPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PosterPipe", function () {
        return PosterPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PosterPipe = /*#__PURE__*/function () {
        function PosterPipe() {
          _classCallCheck(this, PosterPipe);
        }

        _createClass(PosterPipe, [{
          key: "transform",
          value: function transform(poster) {
            // https://image.tmdb.org/t/p/w500/{{movie.poster_path}}
            var path = '';

            if (poster) {
              path = "https://image.tmdb.org/t/p/w500/".concat(poster);
            } else {
              path = './assets/img/no-image.jpg';
            }

            return path;
          }
        }]);

        return PosterPipe;
      }();

      PosterPipe.ɵfac = function PosterPipe_Factory(t) {
        return new (t || PosterPipe)();
      };

      PosterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "poster",
        type: PosterPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'poster'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/routing.module.ts":
    /*!***********************************!*\
      !*** ./src/app/routing.module.ts ***!
      \***********************************/

    /*! exports provided: RoutingModule */

    /***/
    function srcAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
        return RoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "./src/app/pages/home/home.component.ts");
      /* harmony import */


      var _pages_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/pelicula/pelicula.component */
      "./src/app/pages/pelicula/pelicula.component.ts");
      /* harmony import */


      var _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/buscar/buscar.component */
      "./src/app/pages/buscar/buscar.component.ts");

      var routes = [{
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'buscar/:texto',
        component: _pages_buscar_buscar_component__WEBPACK_IMPORTED_MODULE_4__["BuscarComponent"]
      }, {
        path: 'pelicula/:id',
        component: _pages_pelicula_pelicula_component__WEBPACK_IMPORTED_MODULE_3__["PeliculaComponent"]
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }];

      var RoutingModule = function RoutingModule() {
        _classCallCheck(this, RoutingModule);
      };

      RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RoutingModule
      });
      RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RoutingModule_Factory(t) {
          return new (t || RoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/peliculas.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/peliculas.service.ts ***!
      \***********************************************/

    /*! exports provided: PeliculasService */

    /***/
    function srcAppServicesPeliculasServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeliculasService", function () {
        return PeliculasService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var PeliculasService = /*#__PURE__*/function () {
        function PeliculasService(http) {
          _classCallCheck(this, PeliculasService);

          this.http = http;
          this.api_key = '7fc12056fe69f963bdf0012facb0a732';
          this.base_url = 'https://api.themoviedb.org/3';
          this.carteleraPage = 1;
          this.cargando = false;
        }

        _createClass(PeliculasService, [{
          key: "resetPage",
          value: function resetPage() {
            this.carteleraPage = 1;
          }
        }, {
          key: "getCartelera",
          value: function getCartelera() {
            var _this6 = this;

            if (this.cargando) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
              return;
            }

            this.cargando = true;
            return this.http.get("".concat(this.base_url, "/movie/now_playing"), {
              params: this.params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function () {
              _this6.carteleraPage++;
              _this6.cargando = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              return res.results;
            }));
          }
        }, {
          key: "buscarPelicula",
          value: function buscarPelicula(termino) {
            var params = Object.assign(Object.assign({}, this.params), {
              page: '1',
              query: termino
            });
            return this.http.get("".concat(this.base_url, "/search/movie"), {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              return res.results;
            }));
          }
        }, {
          key: "getPeliculaDetalle",
          value: function getPeliculaDetalle(id) {
            return this.http.get("".concat(this.base_url, "/movie/").concat(id), {
              params: this.params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
          }
        }, {
          key: "getCast",
          value: function getCast(id) {
            return this.http.get("".concat(this.base_url, "/movie/").concat(id, "/credits"), {
              params: this.params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              return res.cast;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }));
          }
        }, {
          key: "params",
          get: function get() {
            return {
              api_key: this.api_key,
              language: 'es-ES',
              page: this.carteleraPage.toString()
            };
          }
        }]);

        return PeliculasService;
      }();

      PeliculasService.ɵfac = function PeliculasService_Factory(t) {
        return new (t || PeliculasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      PeliculasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PeliculasService,
        factory: PeliculasService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeliculasService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\ZEPHYRUS\Documents\Proyectos Angular\peliculas-app\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map