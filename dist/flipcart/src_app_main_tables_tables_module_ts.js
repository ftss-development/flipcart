"use strict";
(self["webpackChunkflipcart"] = self["webpackChunkflipcart"] || []).push([["src_app_main_tables_tables_module_ts"],{

/***/ 12716:
/*!****************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesComponent": () => (/* binding */ DatatablesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/tables/datatables/i18n/de */ 67084);
/* harmony import */ var app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/tables/datatables/i18n/en */ 12228);
/* harmony import */ var app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/main/tables/datatables/i18n/fr */ 18383);
/* harmony import */ var app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/i18n/pt */ 49767);
/* harmony import */ var app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/datatables.snippetcode */ 29239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 7502);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 63305);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 1570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.component */ 3090);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ctrl/ngx-csv */ 30839);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/pipes/initials.pipe */ 16516);























const _c0 = ["tableRowDetails"];
function DatatablesComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_36_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35); const allRowsSelected_r32 = restoredCtx.allRowsSelected; const selectFn_r33 = restoredCtx.selectFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](selectFn_r33(!allRowsSelected_r32)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r32 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", allRowsSelected_r32);
} }
function DatatablesComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 62)(1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_37_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const onCheckboxChangeFn_r39 = restoredCtx.onCheckboxChangeFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](onCheckboxChangeFn_r39($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r36 = ctx.rowIndex;
    const isSelected_r38 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "rowChkbxRef", rowIndex_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", isSelected_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "rowChkbxRef", rowIndex_r36, "");
} }
function DatatablesComponent_ng_template_39_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r42.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1, a2, a3, a4) { return { "bg-light-primary": a0, "bg-light-success": a1, "bg-light-danger": a2, "bg-light-warning": a3, "bg-light-info": a4 }; };
function DatatablesComponent_ng_template_39_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r42 = ctx_r48.row;
    const name_r43 = ctx_r48.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r42.status == "1", row_r42.status == "2", row_r42.status == "3", row_r42.status == "4", row_r42.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r43));
} }
function DatatablesComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_39_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_39_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r42 = ctx.row;
    const name_r43 = ctx.value;
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r42.avatar.length > 0)("ngIfElse", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", name_r43, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r42.post, "");
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "badge-light-primary": a0, "badge-light-success": a1, "badge-light-danger": a2, "badge-light-warning": a3, "badge-light-info": a4 }; };
function DatatablesComponent_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r49 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r49 == "1", status_r49 == "2", status_r49 == "3", status_r49 == "4", status_r49 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r49 == 1 ? "Current" : status_r49 == 2 ? "Professional" : status_r49 == 3 ? "Rejected" : status_r49 == 4 ? "Resigned" : status_r49 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_53_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r52.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_53_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    const row_r52 = ctx_r59.row;
    const value_r51 = ctx_r59.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r52.status == "1", row_r52.status == "2", row_r52.status == "3", row_r52.status == "4", row_r52.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, value_r51));
} }
function DatatablesComponent_ng_template_53_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_53_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r61); const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r60.editingName[rowIndex_r50 + "-full_name"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_53_div_0_div_2_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DatatablesComponent_ng_template_53_div_0_ng_template_3_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 69)(6, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r52 = ctx_r63.row;
    const value_r51 = ctx_r63.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r52.avatar.length > 0)("ngIfElse", _r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](value_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r52.post, "");
} }
function DatatablesComponent_ng_template_53_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_53_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r66); const rowIndex_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r64.inlineEditingUpdateName($event, "full_name", rowIndex_r50)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r51);
} }
function DatatablesComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_53_div_0_Template, 10, 4, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_53_input_1_Template, 1, 1, "input", 86);
} if (rf & 2) {
    const rowIndex_r50 = ctx.rowIndex;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.editingName[rowIndex_r50 + "-full_name"]);
} }
function DatatablesComponent_ng_template_55_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_55_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r73.editingStatus[rowIndex_r68 + "-status"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, value_r70 == "1", value_r70 == "2", value_r70 == "3", value_r70 == "4", value_r70 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r70 == 1 ? "Current" : value_r70 == 2 ? "Professional" : value_r70 == 3 ? "Rejected" : value_r70 == 4 ? "Resigned" : value_r70 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_55_select_1_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_55_select_1_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r77.editingStatus[rowIndex_r68 + "-status"] = false)); })("change", function DatatablesComponent_ng_template_55_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78); const rowIndex_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r80.inlineEditingUpdateStatus($event, "status", rowIndex_r68)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Resigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const value_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r70);
} }
function DatatablesComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_55_div_0_Template, 3, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_55_select_1_Template, 11, 1, "select", 90);
} if (rf & 2) {
    const rowIndex_r68 = ctx.rowIndex;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.editingStatus[rowIndex_r68 + "-status"]);
} }
function DatatablesComponent_ng_template_57_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_57_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r89); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r88.editingAge[rowIndex_r84 + "-age"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r83, " ");
} }
function DatatablesComponent_ng_template_57_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_57_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r94); const rowIndex_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r92.inlineEditingUpdateAge($event, "age", rowIndex_r84)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r83);
} }
function DatatablesComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_57_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_57_input_1_Template, 1, 1, "input", 97);
} if (rf & 2) {
    const rowIndex_r84 = ctx.rowIndex;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.editingAge[rowIndex_r84 + "-age"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.editingAge[rowIndex_r84 + "-age"]);
} }
function DatatablesComponent_ng_template_59_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("dblclick", function DatatablesComponent_ng_template_59_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r102); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"]((ctx_r101.editingSalary[rowIndex_r97 + "-salary"] = true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", value_r96, " ");
} }
function DatatablesComponent_ng_template_59_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function DatatablesComponent_ng_template_59_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r107); const rowIndex_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().rowIndex; const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r105.inlineEditingUpdateSalary($event, "salary", rowIndex_r97)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", value_r96);
} }
function DatatablesComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, DatatablesComponent_ng_template_59_div_0_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_59_input_1_Template, 1, 1, "input", 86);
} if (rf & 2) {
    const rowIndex_r97 = ctx.rowIndex;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r8.editingSalary[rowIndex_r97 + "-salary"]);
} }
function DatatablesComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 99)(1, "div")(2, "span")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "City : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 100)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Experience : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "span", 100)(11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Start Date : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r109 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.experience, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r109.start_date, "");
} }
function DatatablesComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DatatablesComponent_ng_template_71_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r114); const row_r111 = restoredCtx.row; const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r113.rowDetailsToggleExpand(row_r111)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expanded_r112 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("datatable-icon-right", !expanded_r112)("datatable-icon-down", expanded_r112);
} }
function DatatablesComponent_ng_template_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r115.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_73_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r115 = ctx_r121.row;
    const name_r116 = ctx_r121.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r115.status == "1", row_r115.status == "2", row_r115.status == "3", row_r115.status == "4", row_r115.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r116));
} }
function DatatablesComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_73_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_73_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r115 = ctx.row;
    const name_r116 = ctx.value;
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r115.avatar.length > 0)("ngIfElse", _r118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r115.post, "");
} }
function DatatablesComponent_ng_template_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r122 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r122 == "1", status_r122 == "2", status_r122 == "3", status_r122 == "4", status_r122 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r122 == 1 ? "Current" : status_r122 == 2 ? "Professional" : status_r122 == 3 ? "Rejected" : status_r122 == 4 ? "Resigned" : status_r122 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_89_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 102)(1, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_89_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r127); const allRowsSelected_r124 = restoredCtx.allRowsSelected; const selectFn_r125 = restoredCtx.selectFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](selectFn_r125(!allRowsSelected_r124)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const allRowsSelected_r124 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", allRowsSelected_r124);
} }
function DatatablesComponent_ng_template_90_Template(rf, ctx) { if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 102)(1, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function DatatablesComponent_ng_template_90_Template_input_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r133); const onCheckboxChangeFn_r131 = restoredCtx.onCheckboxChangeFn; return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](onCheckboxChangeFn_r131($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowIndex_r128 = ctx.rowIndex;
    const isSelected_r130 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "rowCustomChkbxRef", rowIndex_r128, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("checked", isSelected_r130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("for", "rowCustomChkbxRef", rowIndex_r128, "");
} }
function DatatablesComponent_ng_template_92_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r134.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_92_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r134 = ctx_r140.row;
    const name_r135 = ctx_r140.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r134.status == "1", row_r134.status == "2", row_r134.status == "3", row_r134.status == "4", row_r134.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r135));
} }
function DatatablesComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_92_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_92_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r134 = ctx.row;
    const name_r135 = ctx.value;
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r134.avatar.length > 0)("ngIfElse", _r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r134.post, "");
} }
function DatatablesComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r141 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r141 == "1", status_r141 == "2", status_r141 == "3", status_r141 == "4", status_r141 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r141 == 1 ? "Current" : status_r141 == 2 ? "Professional" : status_r141 == 3 ? "Rejected" : status_r141 == 4 ? "Resigned" : status_r141 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_li_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sel_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", sel_r142.full_name, " ");
} }
function DatatablesComponent_li_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_116_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r143.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_116_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r143 = ctx_r149.row;
    const name_r144 = ctx_r149.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r143.status == "1", row_r143.status == "2", row_r143.status == "3", row_r143.status == "4", row_r143.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r144));
} }
function DatatablesComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_116_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_116_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r143 = ctx.row;
    const name_r144 = ctx.value;
    const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r143.avatar.length > 0)("ngIfElse", _r146);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r143.post, "");
} }
function DatatablesComponent_ng_template_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r150 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r150 == "1", status_r150 == "2", status_r150 == "3", status_r150 == "4", status_r150 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r150 == 1 ? "Current" : status_r150 == 2 ? "Professional" : status_r150 == 3 ? "Rejected" : status_r150 == 4 ? "Resigned" : status_r150 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DatatablesComponent_ng_template_134_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("src", "assets/images/portrait/small/", row_r151.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
} }
function DatatablesComponent_ng_template_134_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "initials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const row_r151 = ctx_r157.row;
    const name_r152 = ctx_r157.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](4, _c1, row_r151.status == "1", row_r151.status == "2", row_r151.status == "3", row_r151.status == "4", row_r151.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, name_r152));
} }
function DatatablesComponent_ng_template_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DatatablesComponent_ng_template_134_div_1_Template, 2, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DatatablesComponent_ng_template_134_ng_template_2_Template, 4, 10, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 69)(5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const row_r151 = ctx.row;
    const name_r152 = ctx.value;
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", row_r151.avatar.length > 0)("ngIfElse", _r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](name_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r151.post, "");
} }
function DatatablesComponent_ng_template_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r158 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction5"](2, _c2, status_r158 == "1", status_r158 == "2", status_r158 == "3", status_r158 == "4", status_r158 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", status_r158 == 1 ? "Current" : status_r158 == 2 ? "Professional" : status_r158 == 3 ? "Rejected" : status_r158 == 4 ? "Resigned" : status_r158 == 5 ? "Applied" : "Applied", " ");
} }
function DatatablesComponent_ng_template_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14)(1, "div", 76)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 79)(5, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class DatatablesComponent {
    /**
     * Constructor
     *
     * @param {DatatablesService} _datatablesService
     * @param {CoreTranslationService} _coreTranslationService
     */
    constructor(_datatablesService, _coreTranslationService) {
        this._datatablesService = _datatablesService;
        this._coreTranslationService = _coreTranslationService;
        this.tempData = [];
        this.selected = [];
        this.basicSelectedOption = 10;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.ColumnMode;
        this.expanded = {};
        this.editingName = {};
        this.editingStatus = {};
        this.editingAge = {};
        this.editingSalary = {};
        this.chkBoxSelected = [];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.SelectionType;
        // snippet code variables
        this._snippetCodeKitchenSink = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeKitchenSink;
        this._snippetCodeInlineEditing = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeInlineEditing;
        this._snippetCodeRowDetails = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeRowDetails;
        this._snippetCodeCustomCheckbox = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeCustomCheckbox;
        this._snippetCodeResponsive = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeResponsive;
        this._snippetCodeMultilangual = app_main_tables_datatables_datatables_snippetcode__WEBPACK_IMPORTED_MODULE_4__.snippetCodeMultilangual;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this._coreTranslationService.translate(app_main_tables_datatables_i18n_en__WEBPACK_IMPORTED_MODULE_1__.locale, app_main_tables_datatables_i18n_fr__WEBPACK_IMPORTED_MODULE_2__.locale, app_main_tables_datatables_i18n_de__WEBPACK_IMPORTED_MODULE_0__.locale, app_main_tables_datatables_i18n_pt__WEBPACK_IMPORTED_MODULE_3__.locale);
    }
    // Public Methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Inline editing Name
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateName(event, cell, rowIndex) {
        this.editingName[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Age
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateAge(event, cell, rowIndex) {
        this.editingAge[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Salary
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateSalary(event, cell, rowIndex) {
        this.editingSalary[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Inline editing Status
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    inlineEditingUpdateStatus(event, cell, rowIndex) {
        this.editingStatus[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
    }
    /**
     * Search (filter)
     *
     * @param event
     */
    filterUpdate(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        const temp = this.tempData.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.kitchenSinkRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    /**
     * Row Details Toggle
     *
     * @param row
     */
    rowDetailsToggleExpand(row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    }
    /**
     * For ref only, log selected values
     *
     * @param selected
     */
    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }
    /**
     * For ref only, log activate events
     *
     * @param selected
     */
    onActivate(event) {
        // console.log('Activate Event', event);
    }
    /**
     * Custom Chkbox On Select
     *
     * @param { selected }
     */
    customChkboxOnSelect({ selected }) {
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        this.chkBoxSelected.push(...selected);
    }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        this._datatablesService.onDatatablessChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(response => {
            this.rows = response;
            this.tempData = this.rows;
            this.kitchenSinkRows = this.rows;
            this.exportCSVData = this.rows;
        });
        // content header
        this.contentHeader = {
            headerTitle: 'Datatables',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Forms & Tables',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Datatables',
                        isLink: false
                    }
                ]
            }
        };
    }
}
DatatablesComponent.ɵfac = function DatatablesComponent_Factory(t) { return new (t || DatatablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_5__.DatatablesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.CoreTranslationService)); };
DatatablesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DatatablesComponent, selectors: [["app-datatables"]], viewQuery: function DatatablesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
    } }, decls: 145, vars: 129, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "ngx-datatable-kitchen-sink"], [3, "snippetCode"], [1, "card-title"], [1, "row"], [1, "col-12", "mb-50"], ["rippleEffect", "", 1, "btn", "btn-primary", "ml-1"], ["data-feather", "plus", 1, "mr-0", "mr-sm-1"], [1, "d-none", "d-sm-inline-block"], ["csvLink", "", "rippleEffect", "", 1, "btn", "btn-outline-secondary", "float-right", "mr-1", 3, "data"], [1, "col-md-6", "col-12"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], [1, "d-flex", "align-items-center"], [1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "col-md-6", "col-12", "d-flex", "justify-content-md-end"], [1, "d-flex", "align-items-center", "justify-content-end", "pr-1", "pb-1", "pl-1", "pl-md-0", "pb-md-0"], ["type", "search", "placeholder", "Search", 1, "form-control", "ml-25", 3, "keyup", "search"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH", "selectionType", "activate", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "Name", "prop", "full_name", 3, "width"], ["name", "Email", "prop", "email", 3, "width"], ["name", "Date", "prop", "start_date", 3, "width"], ["name", "Salary", "prop", "salary", 3, "width"], ["name", "Status", "prop", "status", 3, "width"], ["name", "Actions", 3, "width", "sortable"], ["id", "ngx-datatable-inline-editing"], [1, "bootstrap", "core-bootstrap", 3, "headerHeight", "rowHeight", "limit", "columnMode", "footerHeight", "rows", "scrollbarH"], ["name", "Age", "prop", "age", 3, "width"], ["id", "ngx-datatable-row-details"], [1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", "scrollbarH"], ["tableRowDetails", ""], [3, "rowHeight"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["id", "ngx-datatable-custom-checkbox"], [1, "col-12"], [1, "bootstrap", "core-bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "scrollbarH", "select", "activate"], [1, "selected-column", "col-12", "mt-1"], [1, "w-100"], [1, "mx-1"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "ngx-datatable-Responsive"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "rowHeight", "footerHeight", "limit", "rows", "scrollbarH"], ["table", ""], ["name", "Action", 3, "width", "sortable"], ["id", "ngx-datatable-multi-purpose"], [1, "card-body"], [1, "card-text"], ["prop", "full_name", 3, "name", "width"], ["prop", "email", 3, "name", "width"], ["prop", "age", 3, "name", "width"], ["prop", "status", 3, "name", "width"], [3, "name", "width", "sortable"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "headerChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerChkbxRef", 1, "custom-control-label"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id", "change"], [1, "custom-control-label", 3, "for"], [4, "ngIf", "ngIfElse"], ["customAvatar", ""], [1, "cell-line-height"], [1, "font-medium-1", "font-weight-bold", "line-height-1", "mb-25"], [1, "text-muted", "font-small-2"], ["height", "32", "width", "32", "alt", "datatable-avatar", 1, "rounded-circle", "mr-1", 3, "src"], [1, "avatar", "mr-1", "ml-0", 3, "ngClass"], [1, "avatar-content"], [1, "badge", "badge-pill", 3, "ngClass"], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "dropdownBrowserState", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "hide-arrow"], ["data-feather", "more-vertical", 1, "text-primary", "cursor-pointer", "mr-50"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBrowserState", 1, "dropdown-menu-right"], ["href", "javascript:void(0)", "ngbDropdownItem", "", 1, "d-flex", "align-items-center"], ["data-feather", "file-text", 1, "mr-50"], ["data-feather", "archive", 1, "mr-50"], ["data-feather", "trash-2", 1, "mr-50"], ["data-feather", "edit", 1, "text-primary", "cursor-pointer"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "class", "form-control form-control-sm", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], [1, "font-medium-1", "line-height-1", "mb-0"], ["autofocus", "", "type", "text", 1, "form-control", "form-control-sm", 3, "value", "blur"], ["class", "form-control form-control-sm", 3, "value", "blur", "change", 4, "ngIf"], [1, "form-control", "form-control-sm", 3, "value", "blur", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["autofocus", "", "class", "form-control form-control-sm", "type", "number", 3, "value", "blur", 4, "ngIf"], ["autofocus", "", "type", "number", 1, "form-control", "form-control-sm", 3, "value", "blur"], [1, "ml-75", "pl-5", "pt-75"], [1, "ml-1"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 1, "text-body", 3, "click"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["type", "checkbox", "id", "headerCustomChkbxRef", 1, "custom-control-input", 3, "checked", "change"], ["for", "headerCustomChkbxRef", 1, "custom-control-label"]], template: function DatatablesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-content-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "section", 3)(4, "core-card-snippet", 4)(5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Kitchen Sink");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "Add New Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Export CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 12)(16, "div", 13)(17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function DatatablesComponent_Template_select_ngModelChange_19_listener($event) { return ctx.basicSelectedOption = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, " entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function DatatablesComponent_Template_input_keyup_33_listener($event) { return ctx.filterUpdate($event); })("search", function DatatablesComponent_Template_input_search_33_listener($event) { return ctx.filterUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "ngx-datatable", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("activate", function DatatablesComponent_Template_ngx_datatable_activate_34_listener($event) { return ctx.onActivate($event); })("select", function DatatablesComponent_Template_ngx_datatable_select_34_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, DatatablesComponent_ng_template_36_Template, 3, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, DatatablesComponent_ng_template_37_Template, 3, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, DatatablesComponent_ng_template_39_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "ngx-datatable-column", 28)(41, "ngx-datatable-column", 29)(42, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, DatatablesComponent_ng_template_44_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, DatatablesComponent_ng_template_46_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "section", 33)(48, "core-card-snippet", 4)(49, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Inline Editing");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "ngx-datatable", 34)(52, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, DatatablesComponent_ng_template_53_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, DatatablesComponent_ng_template_55_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, DatatablesComponent_ng_template_57_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, DatatablesComponent_ng_template_59_Template, 2, 2, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, DatatablesComponent_ng_template_61_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "section", 36)(63, "core-card-snippet", 4)(64, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "Row Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "ngx-datatable", 37, 38)(68, "ngx-datatable-row-detail", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](69, DatatablesComponent_ng_template_69_Template, 14, 3, "ng-template", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "ngx-datatable-column", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](71, DatatablesComponent_ng_template_71_Template, 1, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](73, DatatablesComponent_ng_template_73_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](74, "ngx-datatable-column", 28)(75, "ngx-datatable-column", 35)(76, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](78, DatatablesComponent_ng_template_78_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](80, DatatablesComponent_ng_template_80_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "section", 42)(82, "core-card-snippet", 4)(83, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "Custom Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 6)(86, "div", 43)(87, "ngx-datatable", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) { return ctx.customChkboxOnSelect($event); })("activate", function DatatablesComponent_Template_ngx_datatable_activate_87_listener($event) { return ctx.onActivate($event); })("select", function DatatablesComponent_Template_ngx_datatable_select_87_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "ngx-datatable-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](89, DatatablesComponent_ng_template_89_Template, 3, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](90, DatatablesComponent_ng_template_90_Template, 3, 3, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](92, DatatablesComponent_ng_template_92_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](93, "ngx-datatable-column", 28)(94, "ngx-datatable-column", 35)(95, "ngx-datatable-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](97, DatatablesComponent_ng_template_97_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "ngx-datatable-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](99, DatatablesComponent_ng_template_99_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](101, "hr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, " Selections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](107, DatatablesComponent_li_107_Template, 2, 1, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](108, DatatablesComponent_li_108_Template, 2, 0, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "section", 50)(110, "core-card-snippet", 4)(111, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "ngx-datatable", 51, 52)(115, "ngx-datatable-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](116, DatatablesComponent_ng_template_116_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](117, "ngx-datatable-column", 28)(118, "ngx-datatable-column", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](119, "ngx-datatable-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](120, DatatablesComponent_ng_template_120_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "ngx-datatable-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](122, DatatablesComponent_ng_template_122_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "section", 54)(124, "core-card-snippet", 4)(125, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](126, "Multilangual");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](127, "div", 55)(128, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](129, "Select preffered language from navbar to change the table language.");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](130, "ngx-datatable", 51, 52)(132, "ngx-datatable-column", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](134, DatatablesComponent_ng_template_134_Template, 9, 4, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](135, "ngx-datatable-column", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](137, "ngx-datatable-column", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](139, "ngx-datatable-column", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](141, DatatablesComponent_ng_template_141_Template, 2, 8, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "ngx-datatable-column", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](144, DatatablesComponent_ng_template_144_Template, 15, 0, "ng-template", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeKitchenSink);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("data", ctx.exportCSVData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.basicSelectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.kitchenSinkRows)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("scrollbarH", true)("selectionType", ctx.SelectionType.checkbox)("limit", ctx.basicSelectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeInlineEditing);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("headerHeight", 40)("rowHeight", 58)("limit", 10)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 100)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeRowDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rowHeight", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeCustomCheckbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("footerHeight", 50)("rowHeight", 58)("limit", 10)("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.checkbox)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.chkBoxSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !(ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeResponsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("snippetCode", ctx._snippetCodeMultilangual);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 40)("rowHeight", 58)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](133, 119, "HEADER.NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](136, 121, "HEADER.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](138, 123, "HEADER.AGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](140, 125, "HEADER.STATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](143, 127, "HEADER.ACTIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("width", 120)("sortable", false);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultClassDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_7__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_8__.FeatherIconDirective, app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_9__.ContentHeaderComponent, _core_components_card_snippet_card_snippet_component__WEBPACK_IMPORTED_MODULE_10__.CoreCardSnippetComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableRowDetailDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DatatableRowDetailTemplateDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__.DataTableColumnCellDirective, _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_20__.CsvDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _core_pipes_initials_pipe__WEBPACK_IMPORTED_MODULE_11__.InitialsPipe], styles: ["@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\nbootstrap table theme\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-feature-settings: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}.ngx-datatable.bootstrap .datatable-header {\n  height: auto !important;\n  height: initial !important;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}.ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}.ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}.ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}.ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}.bg-white {\n  background-color: #ffffff !important;\n}.bg-white .card-header,\n.bg-white .card-footer {\n  background-color: transparent;\n}.border-white {\n  border: 1px solid #ffffff !important;\n}.border-top-white {\n  border-top: 1px solid #ffffff;\n}.border-bottom-white {\n  border-bottom: 1px solid #ffffff;\n}.border-left-white {\n  border-left: 1px solid #ffffff;\n}.border-right-white {\n  border-right: 1px solid #ffffff;\n}.bg-white.badge-glow,\n.border-white.badge-glow,\n.badge-white.badge-glow {\n  box-shadow: 0px 0px 10px #ffffff;\n}.overlay-white {\n  background: #ffffff; /* The Fallback */\n  background: rgba(255, 255, 255, 0.6);\n}input:focus ~ .bg-white {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ffffff !important;\n}.bg-black {\n  background-color: #000000 !important;\n}.bg-black .card-header,\n.bg-black .card-footer {\n  background-color: transparent;\n}.border-black {\n  border: 1px solid #000000 !important;\n}.border-top-black {\n  border-top: 1px solid #000000;\n}.border-bottom-black {\n  border-bottom: 1px solid #000000;\n}.border-left-black {\n  border-left: 1px solid #000000;\n}.border-right-black {\n  border-right: 1px solid #000000;\n}.bg-black.badge-glow,\n.border-black.badge-glow,\n.badge-black.badge-glow {\n  box-shadow: 0px 0px 10px #000000;\n}.overlay-black {\n  background: #000000; /* The Fallback */\n  background: rgba(0, 0, 0, 0.6);\n}input:focus ~ .bg-black {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #000000 !important;\n}.bg-dark {\n  background-color: #4b4b4b !important;\n}.bg-dark .card-header,\n.bg-dark .card-footer {\n  background-color: transparent;\n}.alert-dark {\n  background: rgba(75, 75, 75, 0.12) !important;\n  color: #4b4b4b !important;\n}.alert-dark .alert-heading {\n  box-shadow: rgba(75, 75, 75, 0.4) 0px 6px 15px -7px;\n}.alert-dark .alert-link {\n  color: #3e3e3e !important;\n}.alert-dark .close {\n  color: #4b4b4b !important;\n}.border-dark {\n  border: 1px solid #4b4b4b !important;\n}.border-top-dark {\n  border-top: 1px solid #4b4b4b;\n}.border-bottom-dark {\n  border-bottom: 1px solid #4b4b4b;\n}.border-left-dark {\n  border-left: 1px solid #4b4b4b;\n}.border-right-dark {\n  border-right: 1px solid #4b4b4b;\n}.bg-dark.badge-glow,\n.border-dark.badge-glow,\n.badge-dark.badge-glow {\n  box-shadow: 0px 0px 10px #4b4b4b;\n}.badge.badge-light-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n  color: #4b4b4b !important;\n}.overlay-dark {\n  background: #4b4b4b; /* The Fallback */\n  background: rgba(75, 75, 75, 0.6);\n}.btn-dark {\n  border-color: #4b4b4b !important;\n  background-color: #4b4b4b !important;\n  color: #fff !important;\n}.btn-dark:focus, .btn-dark:active, .btn-dark.active {\n  color: #fff;\n  background-color: #343434 !important;\n}.btn-dark:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #4b4b4b;\n}.btn-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-dark {\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-flat-dark:hover {\n  color: #4b4b4b;\n}.btn-flat-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.12);\n}.btn-flat-dark:active, .btn-flat-dark.active, .btn-flat-dark:focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-flat-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-dark {\n  background-color: #4b4b4b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-dark:hover:not(.disabled):not(:disabled) {\n  background-color: #626262;\n}.btn-relief-dark:active, .btn-relief-dark.active, .btn-relief-dark:focus {\n  background-color: #343434;\n}.btn-relief-dark:hover {\n  color: #fff;\n}.btn-relief-dark:active, .btn-relief-dark.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-dark {\n  border: 1px solid #4b4b4b !important;\n  background-color: transparent;\n  color: #4b4b4b;\n}.btn-outline-dark:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(75, 75, 75, 0.04);\n  color: #4b4b4b;\n}.btn-outline-dark:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .btn-outline-dark:not(:disabled):not(.disabled):focus {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b4b4b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-dark.dropdown-toggle {\n  background-color: rgba(75, 75, 75, 0.2);\n  color: #4b4b4b;\n}.btn-outline-dark.waves-effect .waves-ripple,\n.btn-flat-dark.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(75, 75, 75, 0.2) 0, rgba(75, 75, 75, 0.3) 40%, rgba(75, 75, 75, 0.4) 50%, rgba(75, 75, 75, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-dark {\n  background-color: #4b4b4b;\n}.modal.modal-dark .modal-header .modal-title {\n  color: #4b4b4b;\n}.modal.modal-dark .modal-header .close {\n  color: #4b4b4b !important;\n}.progress-bar-dark {\n  background-color: rgba(75, 75, 75, 0.12);\n}.progress-bar-dark .progress-bar {\n  background-color: #4b4b4b;\n}.timeline .timeline-point-dark {\n  border-color: #4b4b4b !important;\n}.timeline .timeline-point-dark i,\n.timeline .timeline-point-dark svg {\n  stroke: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator {\n  background-color: #4b4b4b !important;\n}.timeline .timeline-point-dark.timeline-point-indicator:before {\n  background: rgba(75, 75, 75, 0.12) !important;\n}.divider.divider-dark .divider-text:before, .divider.divider-dark .divider-text:after {\n  border-color: #4b4b4b !important;\n}input:focus ~ .bg-dark {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #4b4b4b !important;\n}.custom-control-dark .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #4b4b4b;\n  background-color: #4b4b4b;\n}.custom-control-dark.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-dark.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-dark.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(75, 75, 75, 0.4) !important;\n}.custom-control-dark .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(75, 75, 75, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-dark .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #4b4b4b !important;\n}.custom-switch-dark .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #4b4b4b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-dark .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #4b4b4b !important;\n  border-color: #4b4b4b !important;\n}.text-dark.text-darken-1 {\n  color: #343434 !important;\n}.bg-dark.bg-darken-1 {\n  background-color: #343434 !important;\n}.border-dark.border-darken-1 {\n  border: 1px solid #343434 !important;\n}.border-top-dark.border-top-darken-1 {\n  border-top: 1px solid #343434 !important;\n}.border-bottom-dark.border-bottom-darken-1 {\n  border-bottom: 1px solid #343434 !important;\n}.border-left-dark.border-left-darken-1 {\n  border-left: 1px solid #343434 !important;\n}.border-right-dark.border-right-darken-1 {\n  border-right: 1px solid #343434 !important;\n}.overlay-dark.overlay-darken-1 {\n  background: #343434; /* The Fallback */\n  background: rgba(52, 52, 52, 0.6);\n}.text-dark.text-darken-2 {\n  color: #1e1e1e !important;\n}.bg-dark.bg-darken-2 {\n  background-color: #1e1e1e !important;\n}.border-dark.border-darken-2 {\n  border: 1px solid #1e1e1e !important;\n}.border-top-dark.border-top-darken-2 {\n  border-top: 1px solid #1e1e1e !important;\n}.border-bottom-dark.border-bottom-darken-2 {\n  border-bottom: 1px solid #1e1e1e !important;\n}.border-left-dark.border-left-darken-2 {\n  border-left: 1px solid #1e1e1e !important;\n}.border-right-dark.border-right-darken-2 {\n  border-right: 1px solid #1e1e1e !important;\n}.overlay-dark.overlay-darken-2 {\n  background: #1e1e1e; /* The Fallback */\n  background: rgba(30, 30, 30, 0.6);\n}.text-dark.text-darken-3 {\n  color: #626262 !important;\n}.bg-dark.bg-darken-3 {\n  background-color: #626262 !important;\n}.border-dark.border-darken-3 {\n  border: 1px solid #626262 !important;\n}.border-top-dark.border-top-darken-3 {\n  border-top: 1px solid #626262 !important;\n}.border-bottom-dark.border-bottom-darken-3 {\n  border-bottom: 1px solid #626262 !important;\n}.border-left-dark.border-left-darken-3 {\n  border-left: 1px solid #626262 !important;\n}.border-right-dark.border-right-darken-3 {\n  border-right: 1px solid #626262 !important;\n}.overlay-dark.overlay-darken-3 {\n  background: #626262; /* The Fallback */\n  background: rgba(98, 98, 98, 0.6);\n}.bg-light {\n  background-color: #f6f6f6 !important;\n}.bg-light .card-header,\n.bg-light .card-footer {\n  background-color: transparent;\n}.border-light {\n  border: 1px solid #f6f6f6 !important;\n}.border-top-light {\n  border-top: 1px solid #f6f6f6;\n}.border-bottom-light {\n  border-bottom: 1px solid #f6f6f6;\n}.border-left-light {\n  border-left: 1px solid #f6f6f6;\n}.border-right-light {\n  border-right: 1px solid #f6f6f6;\n}.bg-light.badge-glow,\n.border-light.badge-glow,\n.badge-light.badge-glow {\n  box-shadow: 0px 0px 10px #f6f6f6;\n}.overlay-light {\n  background: #f6f6f6; /* The Fallback */\n  background: rgba(246, 246, 246, 0.6);\n}input:focus ~ .bg-light {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #f6f6f6 !important;\n}.text-primary.text-lighten-5 {\n  color: #dedbfb !important;\n}.bg-primary.bg-lighten-5 {\n  background-color: #dedbfb !important;\n}.border-primary.border-lighten-5 {\n  border: 1px solid #dedbfb !important;\n}.border-top-primary.border-top-lighten-5 {\n  border-top: 1px solid #dedbfb !important;\n}.border-bottom-primary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #dedbfb !important;\n}.border-left-primary.border-left-lighten-5 {\n  border-left: 1px solid #dedbfb !important;\n}.border-right-primary.border-right-lighten-5 {\n  border-right: 1px solid #dedbfb !important;\n}.overlay-primary.overlay-lighten-5 {\n  background: #dedbfb; /* The Fallback */\n  background: rgba(222, 219, 251, 0.6);\n}.text-primary.text-lighten-4 {\n  color: #c9c4f9 !important;\n}.bg-primary.bg-lighten-4 {\n  background-color: #c9c4f9 !important;\n}.border-primary.border-lighten-4 {\n  border: 1px solid #c9c4f9 !important;\n}.border-top-primary.border-top-lighten-4 {\n  border-top: 1px solid #c9c4f9 !important;\n}.border-bottom-primary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #c9c4f9 !important;\n}.border-left-primary.border-left-lighten-4 {\n  border-left: 1px solid #c9c4f9 !important;\n}.border-right-primary.border-right-lighten-4 {\n  border-right: 1px solid #c9c4f9 !important;\n}.overlay-primary.overlay-lighten-4 {\n  background: #c9c4f9; /* The Fallback */\n  background: rgba(201, 196, 249, 0.6);\n}.text-primary.text-lighten-3 {\n  color: #b3adf7 !important;\n}.bg-primary.bg-lighten-3 {\n  background-color: #b3adf7 !important;\n}.border-primary.border-lighten-3 {\n  border: 1px solid #b3adf7 !important;\n}.border-top-primary.border-top-lighten-3 {\n  border-top: 1px solid #b3adf7 !important;\n}.border-bottom-primary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #b3adf7 !important;\n}.border-left-primary.border-left-lighten-3 {\n  border-left: 1px solid #b3adf7 !important;\n}.border-right-primary.border-right-lighten-3 {\n  border-right: 1px solid #b3adf7 !important;\n}.overlay-primary.overlay-lighten-3 {\n  background: #b3adf7; /* The Fallback */\n  background: rgba(179, 173, 247, 0.6);\n}.text-primary.text-lighten-2 {\n  color: #9e95f5 !important;\n}.bg-primary.bg-lighten-2 {\n  background-color: #9e95f5 !important;\n}.border-primary.border-lighten-2 {\n  border: 1px solid #9e95f5 !important;\n}.border-top-primary.border-top-lighten-2 {\n  border-top: 1px solid #9e95f5 !important;\n}.border-bottom-primary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9e95f5 !important;\n}.border-left-primary.border-left-lighten-2 {\n  border-left: 1px solid #9e95f5 !important;\n}.border-right-primary.border-right-lighten-2 {\n  border-right: 1px solid #9e95f5 !important;\n}.overlay-primary.overlay-lighten-2 {\n  background: #9e95f5; /* The Fallback */\n  background: rgba(158, 149, 245, 0.6);\n}.text-primary.text-lighten-1 {\n  color: #887ef2 !important;\n}.bg-primary.bg-lighten-1 {\n  background-color: #887ef2 !important;\n}.border-primary.border-lighten-1 {\n  border: 1px solid #887ef2 !important;\n}.border-top-primary.border-top-lighten-1 {\n  border-top: 1px solid #887ef2 !important;\n}.border-bottom-primary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #887ef2 !important;\n}.border-left-primary.border-left-lighten-1 {\n  border-left: 1px solid #887ef2 !important;\n}.border-right-primary.border-right-lighten-1 {\n  border-right: 1px solid #887ef2 !important;\n}.overlay-primary.overlay-lighten-1 {\n  background: #887ef2; /* The Fallback */\n  background: rgba(136, 126, 242, 0.6);\n}.bg-primary {\n  background-color: #7367f0 !important;\n}.bg-primary .card-header,\n.bg-primary .card-footer {\n  background-color: transparent;\n}.alert-primary {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367f0 !important;\n}.alert-primary .alert-heading {\n  box-shadow: rgba(115, 103, 240, 0.4) 0px 6px 15px -7px;\n}.alert-primary .alert-link {\n  color: #5e50ee !important;\n}.alert-primary .close {\n  color: #7367f0 !important;\n}.bg-light-primary {\n  background: rgba(115, 103, 240, 0.12) !important;\n  color: #7367f0 !important;\n}.bg-light-primary.fc-h-event, .bg-light-primary.fc-v-event {\n  border-color: rgba(115, 103, 240, 0.1);\n}.bg-light-primary .fc-list-event-dot,\n.bg-light-primary .fc-daygrid-event-dot {\n  border-color: #7367f0 !important;\n}.bg-light-primary.fc-list-event:hover td {\n  background: rgba(115, 103, 240, 0.1) !important;\n}.bg-light-primary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-primary {\n  color: #7367f0 !important;\n}.border-primary {\n  border: 1px solid #7367f0 !important;\n}.border-top-primary {\n  border-top: 1px solid #7367f0;\n}.border-bottom-primary {\n  border-bottom: 1px solid #7367f0;\n}.border-left-primary {\n  border-left: 1px solid #7367f0;\n}.border-right-primary {\n  border-right: 1px solid #7367f0;\n}.bg-primary.badge-glow,\n.border-primary.badge-glow,\n.badge-primary.badge-glow {\n  box-shadow: 0px 0px 10px #7367f0;\n}.badge.badge-light-primary {\n  background-color: rgba(115, 103, 240, 0.12);\n  color: #7367f0 !important;\n}.overlay-primary {\n  background: #7367f0; /* The Fallback */\n  background: rgba(115, 103, 240, 0.6);\n}.btn-primary {\n  border-color: #7367f0 !important;\n  background-color: #7367f0 !important;\n  color: #fff !important;\n}.btn-primary:focus, .btn-primary:active, .btn-primary.active {\n  color: #fff;\n  background-color: #5e50ee !important;\n}.btn-primary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #7367f0;\n}.btn-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-primary {\n  background-color: transparent;\n  color: #7367f0;\n}.btn-flat-primary:hover {\n  color: #7367f0;\n}.btn-flat-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(115, 103, 240, 0.12);\n}.btn-flat-primary:active, .btn-flat-primary.active, .btn-flat-primary:focus {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-flat-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-primary {\n  background-color: #7367f0;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-primary:hover:not(.disabled):not(:disabled) {\n  background-color: #887ef2;\n}.btn-relief-primary:active, .btn-relief-primary.active, .btn-relief-primary:focus {\n  background-color: #5e50ee;\n}.btn-relief-primary:hover {\n  color: #fff;\n}.btn-relief-primary:active, .btn-relief-primary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-primary {\n  border: 1px solid #7367f0 !important;\n  background-color: transparent;\n  color: #7367f0;\n}.btn-outline-primary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(115, 103, 240, 0.04);\n  color: #7367f0;\n}.btn-outline-primary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .btn-outline-primary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-outline-primary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-primary.dropdown-toggle {\n  background-color: rgba(115, 103, 240, 0.2);\n  color: #7367f0;\n}.btn-outline-primary.waves-effect .waves-ripple,\n.btn-flat-primary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(115, 103, 240, 0.2) 0, rgba(115, 103, 240, 0.3) 40%, rgba(115, 103, 240, 0.4) 50%, rgba(115, 103, 240, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-primary {\n  background-color: #7367f0;\n}.modal.modal-primary .modal-header .modal-title {\n  color: #7367f0;\n}.modal.modal-primary .modal-header .close {\n  color: #7367f0 !important;\n}.pagination-primary .page-item.active .page-link {\n  background: #7367f0 !important;\n  color: #fff;\n}.pagination-primary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-primary .page-item .page-link:hover {\n  color: #7367f0;\n}.pagination-primary .page-item.prev-item .page-link:hover, .pagination-primary .page-item.next-item .page-link:hover {\n  background: #7367f0;\n  color: #fff;\n}.pagination-primary .page-item.next-item .page-link:active:after, .pagination-primary .page-item.next-item .page-link:hover:after, .pagination-primary .page-item.next .page-link:active:after, .pagination-primary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-primary .page-item.prev-item .page-link:active:before, .pagination-primary .page-item.prev-item .page-link:hover:before, .pagination-primary .page-item.prev .page-link:active:before, .pagination-primary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%237367f0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-primary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #7367f0 !important;\n  border-color: #7367f0;\n  box-shadow: 0 4px 18px -4px rgba(115, 103, 240, 0.65);\n}.progress-bar-primary {\n  background-color: rgba(115, 103, 240, 0.12);\n}.progress-bar-primary .progress-bar {\n  background-color: #7367f0;\n}.timeline .timeline-point-primary {\n  border-color: #7367f0 !important;\n}.timeline .timeline-point-primary i,\n.timeline .timeline-point-primary svg {\n  stroke: #7367f0 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator {\n  background-color: #7367f0 !important;\n}.timeline .timeline-point-primary.timeline-point-indicator:before {\n  background: rgba(115, 103, 240, 0.12) !important;\n}.divider.divider-primary .divider-text:before, .divider.divider-primary .divider-text:after {\n  border-color: #7367f0 !important;\n}input:focus ~ .bg-primary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #7367f0 !important;\n}.custom-control-primary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #7367f0;\n  background-color: #7367f0;\n}.custom-control-primary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-primary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-primary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(115, 103, 240, 0.4) !important;\n}.custom-control-primary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(115, 103, 240, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-primary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #7367f0 !important;\n}.custom-switch-primary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #7367f0 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-primary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #7367f0 !important;\n  border-color: #7367f0 !important;\n}.text-primary.text-darken-1 {\n  color: #5e50ee !important;\n}.bg-primary.bg-darken-1 {\n  background-color: #5e50ee !important;\n}.border-primary.border-darken-1 {\n  border: 1px solid #5e50ee !important;\n}.border-top-primary.border-top-darken-1 {\n  border-top: 1px solid #5e50ee !important;\n}.border-bottom-primary.border-bottom-darken-1 {\n  border-bottom: 1px solid #5e50ee !important;\n}.border-left-primary.border-left-darken-1 {\n  border-left: 1px solid #5e50ee !important;\n}.border-right-primary.border-right-darken-1 {\n  border-right: 1px solid #5e50ee !important;\n}.overlay-primary.overlay-darken-1 {\n  background: #5e50ee; /* The Fallback */\n  background: rgba(94, 80, 238, 0.6);\n}.text-primary.text-darken-2 {\n  color: #4839eb !important;\n}.bg-primary.bg-darken-2 {\n  background-color: #4839eb !important;\n}.border-primary.border-darken-2 {\n  border: 1px solid #4839eb !important;\n}.border-top-primary.border-top-darken-2 {\n  border-top: 1px solid #4839eb !important;\n}.border-bottom-primary.border-bottom-darken-2 {\n  border-bottom: 1px solid #4839eb !important;\n}.border-left-primary.border-left-darken-2 {\n  border-left: 1px solid #4839eb !important;\n}.border-right-primary.border-right-darken-2 {\n  border-right: 1px solid #4839eb !important;\n}.overlay-primary.overlay-darken-2 {\n  background: #4839eb; /* The Fallback */\n  background: rgba(72, 57, 235, 0.6);\n}.text-primary.text-darken-3 {\n  color: #3321e9 !important;\n}.bg-primary.bg-darken-3 {\n  background-color: #3321e9 !important;\n}.border-primary.border-darken-3 {\n  border: 1px solid #3321e9 !important;\n}.border-top-primary.border-top-darken-3 {\n  border-top: 1px solid #3321e9 !important;\n}.border-bottom-primary.border-bottom-darken-3 {\n  border-bottom: 1px solid #3321e9 !important;\n}.border-left-primary.border-left-darken-3 {\n  border-left: 1px solid #3321e9 !important;\n}.border-right-primary.border-right-darken-3 {\n  border-right: 1px solid #3321e9 !important;\n}.overlay-primary.overlay-darken-3 {\n  background: #3321e9; /* The Fallback */\n  background: rgba(51, 33, 233, 0.6);\n}.text-primary.text-darken-4 {\n  color: #2716db !important;\n}.bg-primary.bg-darken-4 {\n  background-color: #2716db !important;\n}.border-primary.border-darken-4 {\n  border: 1px solid #2716db !important;\n}.border-top-primary.border-top-darken-4 {\n  border-top: 1px solid #2716db !important;\n}.border-bottom-primary.border-bottom-darken-4 {\n  border-bottom: 1px solid #2716db !important;\n}.border-left-primary.border-left-darken-4 {\n  border-left: 1px solid #2716db !important;\n}.border-right-primary.border-right-darken-4 {\n  border-right: 1px solid #2716db !important;\n}.overlay-primary.overlay-darken-4 {\n  background: #2716db; /* The Fallback */\n  background: rgba(39, 22, 219, 0.6);\n}.text-primary.text-accent-1 {\n  color: #bdfdff !important;\n}.bg-primary.bg-accent-1 {\n  background-color: #bdfdff !important;\n}.border-primary.border-accent-1 {\n  border: 1px solid #bdfdff !important;\n}.border-top-primary.border-top-accent-1 {\n  border-top: 1px solid #bdfdff !important;\n}.border-bottom-primary.border-bottom-accent-1 {\n  border-bottom: 1px solid #bdfdff !important;\n}.border-left-primary.border-left-accent-1 {\n  border-left: 1px solid #bdfdff !important;\n}.border-right-primary.border-right-accent-1 {\n  border-right: 1px solid #bdfdff !important;\n}.overlay-primary.overlay-accent-1 {\n  background: #bdfdff; /* The Fallback */\n  background: rgba(189, 253, 255, 0.6);\n}.text-primary.text-accent-2 {\n  color: #8afbff !important;\n}.bg-primary.bg-accent-2 {\n  background-color: #8afbff !important;\n}.border-primary.border-accent-2 {\n  border: 1px solid #8afbff !important;\n}.border-top-primary.border-top-accent-2 {\n  border-top: 1px solid #8afbff !important;\n}.border-bottom-primary.border-bottom-accent-2 {\n  border-bottom: 1px solid #8afbff !important;\n}.border-left-primary.border-left-accent-2 {\n  border-left: 1px solid #8afbff !important;\n}.border-right-primary.border-right-accent-2 {\n  border-right: 1px solid #8afbff !important;\n}.overlay-primary.overlay-accent-2 {\n  background: #8afbff; /* The Fallback */\n  background: rgba(138, 251, 255, 0.6);\n}.text-primary.text-accent-3 {\n  color: #57faff !important;\n}.bg-primary.bg-accent-3 {\n  background-color: #57faff !important;\n}.border-primary.border-accent-3 {\n  border: 1px solid #57faff !important;\n}.border-top-primary.border-top-accent-3 {\n  border-top: 1px solid #57faff !important;\n}.border-bottom-primary.border-bottom-accent-3 {\n  border-bottom: 1px solid #57faff !important;\n}.border-left-primary.border-left-accent-3 {\n  border-left: 1px solid #57faff !important;\n}.border-right-primary.border-right-accent-3 {\n  border-right: 1px solid #57faff !important;\n}.overlay-primary.overlay-accent-3 {\n  background: #57faff; /* The Fallback */\n  background: rgba(87, 250, 255, 0.6);\n}.text-primary.text-accent-4 {\n  color: #3df9ff !important;\n}.bg-primary.bg-accent-4 {\n  background-color: #3df9ff !important;\n}.border-primary.border-accent-4 {\n  border: 1px solid #3df9ff !important;\n}.border-top-primary.border-top-accent-4 {\n  border-top: 1px solid #3df9ff !important;\n}.border-bottom-primary.border-bottom-accent-4 {\n  border-bottom: 1px solid #3df9ff !important;\n}.border-left-primary.border-left-accent-4 {\n  border-left: 1px solid #3df9ff !important;\n}.border-right-primary.border-right-accent-4 {\n  border-right: 1px solid #3df9ff !important;\n}.overlay-primary.overlay-accent-4 {\n  background: #3df9ff; /* The Fallback */\n  background: rgba(61, 249, 255, 0.6);\n}.text-secondary.text-lighten-5 {\n  color: #c4c6c8 !important;\n}.bg-secondary.bg-lighten-5 {\n  background-color: #c4c6c8 !important;\n}.border-secondary.border-lighten-5 {\n  border: 1px solid #c4c6c8 !important;\n}.border-top-secondary.border-top-lighten-5 {\n  border-top: 1px solid #c4c6c8 !important;\n}.border-bottom-secondary.border-bottom-lighten-5 {\n  border-bottom: 1px solid #c4c6c8 !important;\n}.border-left-secondary.border-left-lighten-5 {\n  border-left: 1px solid #c4c6c8 !important;\n}.border-right-secondary.border-right-lighten-5 {\n  border-right: 1px solid #c4c6c8 !important;\n}.overlay-secondary.overlay-lighten-5 {\n  background: #c4c6c8; /* The Fallback */\n  background: rgba(196, 198, 200, 0.6);\n}.text-secondary.text-lighten-4 {\n  color: #b7b9bc !important;\n}.bg-secondary.bg-lighten-4 {\n  background-color: #b7b9bc !important;\n}.border-secondary.border-lighten-4 {\n  border: 1px solid #b7b9bc !important;\n}.border-top-secondary.border-top-lighten-4 {\n  border-top: 1px solid #b7b9bc !important;\n}.border-bottom-secondary.border-bottom-lighten-4 {\n  border-bottom: 1px solid #b7b9bc !important;\n}.border-left-secondary.border-left-lighten-4 {\n  border-left: 1px solid #b7b9bc !important;\n}.border-right-secondary.border-right-lighten-4 {\n  border-right: 1px solid #b7b9bc !important;\n}.overlay-secondary.overlay-lighten-4 {\n  background: #b7b9bc; /* The Fallback */\n  background: rgba(183, 185, 188, 0.6);\n}.text-secondary.text-lighten-3 {\n  color: #aaacb0 !important;\n}.bg-secondary.bg-lighten-3 {\n  background-color: #aaacb0 !important;\n}.border-secondary.border-lighten-3 {\n  border: 1px solid #aaacb0 !important;\n}.border-top-secondary.border-top-lighten-3 {\n  border-top: 1px solid #aaacb0 !important;\n}.border-bottom-secondary.border-bottom-lighten-3 {\n  border-bottom: 1px solid #aaacb0 !important;\n}.border-left-secondary.border-left-lighten-3 {\n  border-left: 1px solid #aaacb0 !important;\n}.border-right-secondary.border-right-lighten-3 {\n  border-right: 1px solid #aaacb0 !important;\n}.overlay-secondary.overlay-lighten-3 {\n  background: #aaacb0; /* The Fallback */\n  background: rgba(170, 172, 176, 0.6);\n}.text-secondary.text-lighten-2 {\n  color: #9ca0a4 !important;\n}.bg-secondary.bg-lighten-2 {\n  background-color: #9ca0a4 !important;\n}.border-secondary.border-lighten-2 {\n  border: 1px solid #9ca0a4 !important;\n}.border-top-secondary.border-top-lighten-2 {\n  border-top: 1px solid #9ca0a4 !important;\n}.border-bottom-secondary.border-bottom-lighten-2 {\n  border-bottom: 1px solid #9ca0a4 !important;\n}.border-left-secondary.border-left-lighten-2 {\n  border-left: 1px solid #9ca0a4 !important;\n}.border-right-secondary.border-right-lighten-2 {\n  border-right: 1px solid #9ca0a4 !important;\n}.overlay-secondary.overlay-lighten-2 {\n  background: #9ca0a4; /* The Fallback */\n  background: rgba(156, 160, 164, 0.6);\n}.text-secondary.text-lighten-1 {\n  color: #8f9397 !important;\n}.bg-secondary.bg-lighten-1 {\n  background-color: #8f9397 !important;\n}.border-secondary.border-lighten-1 {\n  border: 1px solid #8f9397 !important;\n}.border-top-secondary.border-top-lighten-1 {\n  border-top: 1px solid #8f9397 !important;\n}.border-bottom-secondary.border-bottom-lighten-1 {\n  border-bottom: 1px solid #8f9397 !important;\n}.border-left-secondary.border-left-lighten-1 {\n  border-left: 1px solid #8f9397 !important;\n}.border-right-secondary.border-right-lighten-1 {\n  border-right: 1px solid #8f9397 !important;\n}.overlay-secondary.overlay-lighten-1 {\n  background: #8f9397; /* The Fallback */\n  background: rgba(143, 147, 151, 0.6);\n}.bg-secondary {\n  background-color: #82868b !important;\n}.bg-secondary .card-header,\n.bg-secondary .card-footer {\n  background-color: transparent;\n}.alert-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.alert-secondary .alert-heading {\n  box-shadow: rgba(130, 134, 139, 0.4) 0px 6px 15px -7px;\n}.alert-secondary .alert-link {\n  color: #75797e !important;\n}.alert-secondary .close {\n  color: #82868b !important;\n}.bg-light-secondary {\n  background: rgba(130, 134, 139, 0.12) !important;\n  color: #82868b !important;\n}.bg-light-secondary.fc-h-event, .bg-light-secondary.fc-v-event {\n  border-color: rgba(130, 134, 139, 0.1);\n}.bg-light-secondary .fc-list-event-dot,\n.bg-light-secondary .fc-daygrid-event-dot {\n  border-color: #82868b !important;\n}.bg-light-secondary.fc-list-event:hover td {\n  background: rgba(130, 134, 139, 0.1) !important;\n}.bg-light-secondary.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-secondary {\n  color: #82868b !important;\n}.border-secondary {\n  border: 1px solid #82868b !important;\n}.border-top-secondary {\n  border-top: 1px solid #82868b;\n}.border-bottom-secondary {\n  border-bottom: 1px solid #82868b;\n}.border-left-secondary {\n  border-left: 1px solid #82868b;\n}.border-right-secondary {\n  border-right: 1px solid #82868b;\n}.bg-secondary.badge-glow,\n.border-secondary.badge-glow,\n.badge-secondary.badge-glow {\n  box-shadow: 0px 0px 10px #82868b;\n}.badge.badge-light-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n  color: #82868b !important;\n}.overlay-secondary {\n  background: #82868b; /* The Fallback */\n  background: rgba(130, 134, 139, 0.6);\n}.btn-secondary {\n  border-color: #82868b !important;\n  background-color: #82868b !important;\n  color: #fff !important;\n}.btn-secondary:focus, .btn-secondary:active, .btn-secondary.active {\n  color: #fff;\n  background-color: #75797e !important;\n}.btn-secondary:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #82868b;\n}.btn-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-secondary {\n  background-color: transparent;\n  color: #82868b;\n}.btn-flat-secondary:hover {\n  color: #82868b;\n}.btn-flat-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.12);\n}.btn-flat-secondary:active, .btn-flat-secondary.active, .btn-flat-secondary:focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-flat-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-secondary {\n  background-color: #82868b;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: #8f9397;\n}.btn-relief-secondary:active, .btn-relief-secondary.active, .btn-relief-secondary:focus {\n  background-color: #75797e;\n}.btn-relief-secondary:hover {\n  color: #fff;\n}.btn-relief-secondary:active, .btn-relief-secondary.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-secondary {\n  border: 1px solid #82868b !important;\n  background-color: transparent;\n  color: #82868b;\n}.btn-outline-secondary:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(130, 134, 139, 0.04);\n  color: #82868b;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .btn-outline-secondary:not(:disabled):not(.disabled):focus {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-secondary.dropdown-toggle {\n  background-color: rgba(130, 134, 139, 0.2);\n  color: #82868b;\n}.btn-outline-secondary.waves-effect .waves-ripple,\n.btn-flat-secondary.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(130, 134, 139, 0.2) 0, rgba(130, 134, 139, 0.3) 40%, rgba(130, 134, 139, 0.4) 50%, rgba(130, 134, 139, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-secondary {\n  background-color: #82868b;\n}.modal.modal-secondary .modal-header .modal-title {\n  color: #82868b;\n}.modal.modal-secondary .modal-header .close {\n  color: #82868b !important;\n}.pagination-secondary .page-item.active .page-link {\n  background: #82868b !important;\n  color: #fff;\n}.pagination-secondary .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-secondary .page-item .page-link:hover {\n  color: #82868b;\n}.pagination-secondary .page-item.prev-item .page-link:hover, .pagination-secondary .page-item.next-item .page-link:hover {\n  background: #82868b;\n  color: #fff;\n}.pagination-secondary .page-item.next-item .page-link:active:after, .pagination-secondary .page-item.next-item .page-link:hover:after, .pagination-secondary .page-item.next .page-link:active:after, .pagination-secondary .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-secondary .page-item.prev-item .page-link:active:before, .pagination-secondary .page-item.prev-item .page-link:hover:before, .pagination-secondary .page-item.prev .page-link:active:before, .pagination-secondary .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2382868b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-secondary .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #82868b !important;\n  border-color: #82868b;\n  box-shadow: 0 4px 18px -4px rgba(130, 134, 139, 0.65);\n}.progress-bar-secondary {\n  background-color: rgba(130, 134, 139, 0.12);\n}.progress-bar-secondary .progress-bar {\n  background-color: #82868b;\n}.timeline .timeline-point-secondary {\n  border-color: #82868b !important;\n}.timeline .timeline-point-secondary i,\n.timeline .timeline-point-secondary svg {\n  stroke: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator {\n  background-color: #82868b !important;\n}.timeline .timeline-point-secondary.timeline-point-indicator:before {\n  background: rgba(130, 134, 139, 0.12) !important;\n}.divider.divider-secondary .divider-text:before, .divider.divider-secondary .divider-text:after {\n  border-color: #82868b !important;\n}input:focus ~ .bg-secondary {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #82868b !important;\n}.custom-control-secondary .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #82868b;\n  background-color: #82868b;\n}.custom-control-secondary.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-secondary.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-secondary.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(130, 134, 139, 0.4) !important;\n}.custom-control-secondary .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(130, 134, 139, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-secondary .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #82868b !important;\n}.custom-switch-secondary .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #82868b !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-secondary .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #82868b !important;\n  border-color: #82868b !important;\n}.text-secondary.text-darken-1 {\n  color: #75797e !important;\n}.bg-secondary.bg-darken-1 {\n  background-color: #75797e !important;\n}.border-secondary.border-darken-1 {\n  border: 1px solid #75797e !important;\n}.border-top-secondary.border-top-darken-1 {\n  border-top: 1px solid #75797e !important;\n}.border-bottom-secondary.border-bottom-darken-1 {\n  border-bottom: 1px solid #75797e !important;\n}.border-left-secondary.border-left-darken-1 {\n  border-left: 1px solid #75797e !important;\n}.border-right-secondary.border-right-darken-1 {\n  border-right: 1px solid #75797e !important;\n}.overlay-secondary.overlay-darken-1 {\n  background: #75797e; /* The Fallback */\n  background: rgba(117, 121, 126, 0.6);\n}.text-secondary.text-darken-2 {\n  color: #696d71 !important;\n}.bg-secondary.bg-darken-2 {\n  background-color: #696d71 !important;\n}.border-secondary.border-darken-2 {\n  border: 1px solid #696d71 !important;\n}.border-top-secondary.border-top-darken-2 {\n  border-top: 1px solid #696d71 !important;\n}.border-bottom-secondary.border-bottom-darken-2 {\n  border-bottom: 1px solid #696d71 !important;\n}.border-left-secondary.border-left-darken-2 {\n  border-left: 1px solid #696d71 !important;\n}.border-right-secondary.border-right-darken-2 {\n  border-right: 1px solid #696d71 !important;\n}.overlay-secondary.overlay-darken-2 {\n  background: #696d71; /* The Fallback */\n  background: rgba(105, 109, 113, 0.6);\n}.text-secondary.text-darken-3 {\n  color: #5d6064 !important;\n}.bg-secondary.bg-darken-3 {\n  background-color: #5d6064 !important;\n}.border-secondary.border-darken-3 {\n  border: 1px solid #5d6064 !important;\n}.border-top-secondary.border-top-darken-3 {\n  border-top: 1px solid #5d6064 !important;\n}.border-bottom-secondary.border-bottom-darken-3 {\n  border-bottom: 1px solid #5d6064 !important;\n}.border-left-secondary.border-left-darken-3 {\n  border-left: 1px solid #5d6064 !important;\n}.border-right-secondary.border-right-darken-3 {\n  border-right: 1px solid #5d6064 !important;\n}.overlay-secondary.overlay-darken-3 {\n  background: #5d6064; /* The Fallback */\n  background: rgba(93, 96, 100, 0.6);\n}.text-secondary.text-darken-4 {\n  color: #505357 !important;\n}.bg-secondary.bg-darken-4 {\n  background-color: #505357 !important;\n}.border-secondary.border-darken-4 {\n  border: 1px solid #505357 !important;\n}.border-top-secondary.border-top-darken-4 {\n  border-top: 1px solid #505357 !important;\n}.border-bottom-secondary.border-bottom-darken-4 {\n  border-bottom: 1px solid #505357 !important;\n}.border-left-secondary.border-left-darken-4 {\n  border-left: 1px solid #505357 !important;\n}.border-right-secondary.border-right-darken-4 {\n  border-right: 1px solid #505357 !important;\n}.overlay-secondary.overlay-darken-4 {\n  background: #505357; /* The Fallback */\n  background: rgba(80, 83, 87, 0.6);\n}.text-success.text-lighten-5 {\n  color: #88e7b2 !important;\n}.bg-success.bg-lighten-5 {\n  background-color: #88e7b2 !important;\n}.border-success.border-lighten-5 {\n  border: 1px solid #88e7b2 !important;\n}.border-top-success.border-top-lighten-5 {\n  border-top: 1px solid #88e7b2 !important;\n}.border-bottom-success.border-bottom-lighten-5 {\n  border-bottom: 1px solid #88e7b2 !important;\n}.border-left-success.border-left-lighten-5 {\n  border-left: 1px solid #88e7b2 !important;\n}.border-right-success.border-right-lighten-5 {\n  border-right: 1px solid #88e7b2 !important;\n}.overlay-success.overlay-lighten-5 {\n  background: #88e7b2; /* The Fallback */\n  background: rgba(136, 231, 178, 0.6);\n}.text-success.text-lighten-4 {\n  color: #72e3a4 !important;\n}.bg-success.bg-lighten-4 {\n  background-color: #72e3a4 !important;\n}.border-success.border-lighten-4 {\n  border: 1px solid #72e3a4 !important;\n}.border-top-success.border-top-lighten-4 {\n  border-top: 1px solid #72e3a4 !important;\n}.border-bottom-success.border-bottom-lighten-4 {\n  border-bottom: 1px solid #72e3a4 !important;\n}.border-left-success.border-left-lighten-4 {\n  border-left: 1px solid #72e3a4 !important;\n}.border-right-success.border-right-lighten-4 {\n  border-right: 1px solid #72e3a4 !important;\n}.overlay-success.overlay-lighten-4 {\n  background: #72e3a4; /* The Fallback */\n  background: rgba(114, 227, 164, 0.6);\n}.text-success.text-lighten-3 {\n  color: #5dde97 !important;\n}.bg-success.bg-lighten-3 {\n  background-color: #5dde97 !important;\n}.border-success.border-lighten-3 {\n  border: 1px solid #5dde97 !important;\n}.border-top-success.border-top-lighten-3 {\n  border-top: 1px solid #5dde97 !important;\n}.border-bottom-success.border-bottom-lighten-3 {\n  border-bottom: 1px solid #5dde97 !important;\n}.border-left-success.border-left-lighten-3 {\n  border-left: 1px solid #5dde97 !important;\n}.border-right-success.border-right-lighten-3 {\n  border-right: 1px solid #5dde97 !important;\n}.overlay-success.overlay-lighten-3 {\n  background: #5dde97; /* The Fallback */\n  background: rgba(93, 222, 151, 0.6);\n}.text-success.text-lighten-2 {\n  color: #48da89 !important;\n}.bg-success.bg-lighten-2 {\n  background-color: #48da89 !important;\n}.border-success.border-lighten-2 {\n  border: 1px solid #48da89 !important;\n}.border-top-success.border-top-lighten-2 {\n  border-top: 1px solid #48da89 !important;\n}.border-bottom-success.border-bottom-lighten-2 {\n  border-bottom: 1px solid #48da89 !important;\n}.border-left-success.border-left-lighten-2 {\n  border-left: 1px solid #48da89 !important;\n}.border-right-success.border-right-lighten-2 {\n  border-right: 1px solid #48da89 !important;\n}.overlay-success.overlay-lighten-2 {\n  background: #48da89; /* The Fallback */\n  background: rgba(72, 218, 137, 0.6);\n}.text-success.text-lighten-1 {\n  color: #33d67c !important;\n}.bg-success.bg-lighten-1 {\n  background-color: #33d67c !important;\n}.border-success.border-lighten-1 {\n  border: 1px solid #33d67c !important;\n}.border-top-success.border-top-lighten-1 {\n  border-top: 1px solid #33d67c !important;\n}.border-bottom-success.border-bottom-lighten-1 {\n  border-bottom: 1px solid #33d67c !important;\n}.border-left-success.border-left-lighten-1 {\n  border-left: 1px solid #33d67c !important;\n}.border-right-success.border-right-lighten-1 {\n  border-right: 1px solid #33d67c !important;\n}.overlay-success.overlay-lighten-1 {\n  background: #33d67c; /* The Fallback */\n  background: rgba(51, 214, 124, 0.6);\n}.bg-success {\n  background-color: #28c76f !important;\n}.bg-success .card-header,\n.bg-success .card-footer {\n  background-color: transparent;\n}.alert-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.alert-success .alert-heading {\n  box-shadow: rgba(40, 199, 111, 0.4) 0px 6px 15px -7px;\n}.alert-success .alert-link {\n  color: #24b263 !important;\n}.alert-success .close {\n  color: #28c76f !important;\n}.bg-light-success {\n  background: rgba(40, 199, 111, 0.12) !important;\n  color: #28c76f !important;\n}.bg-light-success.fc-h-event, .bg-light-success.fc-v-event {\n  border-color: rgba(40, 199, 111, 0.1);\n}.bg-light-success .fc-list-event-dot,\n.bg-light-success .fc-daygrid-event-dot {\n  border-color: #28c76f !important;\n}.bg-light-success.fc-list-event:hover td {\n  background: rgba(40, 199, 111, 0.1) !important;\n}.bg-light-success.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-success {\n  color: #28c76f !important;\n}.border-success {\n  border: 1px solid #28c76f !important;\n}.border-top-success {\n  border-top: 1px solid #28c76f;\n}.border-bottom-success {\n  border-bottom: 1px solid #28c76f;\n}.border-left-success {\n  border-left: 1px solid #28c76f;\n}.border-right-success {\n  border-right: 1px solid #28c76f;\n}.bg-success.badge-glow,\n.border-success.badge-glow,\n.badge-success.badge-glow {\n  box-shadow: 0px 0px 10px #28c76f;\n}.badge.badge-light-success {\n  background-color: rgba(40, 199, 111, 0.12);\n  color: #28c76f !important;\n}.overlay-success {\n  background: #28c76f; /* The Fallback */\n  background: rgba(40, 199, 111, 0.6);\n}.btn-success {\n  border-color: #28c76f !important;\n  background-color: #28c76f !important;\n  color: #fff !important;\n}.btn-success:focus, .btn-success:active, .btn-success.active {\n  color: #fff;\n  background-color: #24b263 !important;\n}.btn-success:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #28c76f;\n}.btn-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-success {\n  background-color: transparent;\n  color: #28c76f;\n}.btn-flat-success:hover {\n  color: #28c76f;\n}.btn-flat-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.12);\n}.btn-flat-success:active, .btn-flat-success.active, .btn-flat-success:focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-flat-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-success {\n  background-color: #28c76f;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-success:hover:not(.disabled):not(:disabled) {\n  background-color: #33d67c;\n}.btn-relief-success:active, .btn-relief-success.active, .btn-relief-success:focus {\n  background-color: #24b263;\n}.btn-relief-success:hover {\n  color: #fff;\n}.btn-relief-success:active, .btn-relief-success.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-success {\n  border: 1px solid #28c76f !important;\n  background-color: transparent;\n  color: #28c76f;\n}.btn-outline-success:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(40, 199, 111, 0.04);\n  color: #28c76f;\n}.btn-outline-success:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .btn-outline-success:not(:disabled):not(.disabled):focus {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-success.dropdown-toggle {\n  background-color: rgba(40, 199, 111, 0.2);\n  color: #28c76f;\n}.btn-outline-success.waves-effect .waves-ripple,\n.btn-flat-success.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(40, 199, 111, 0.2) 0, rgba(40, 199, 111, 0.3) 40%, rgba(40, 199, 111, 0.4) 50%, rgba(40, 199, 111, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-success {\n  background-color: #28c76f;\n}.modal.modal-success .modal-header .modal-title {\n  color: #28c76f;\n}.modal.modal-success .modal-header .close {\n  color: #28c76f !important;\n}.pagination-success .page-item.active .page-link {\n  background: #28c76f !important;\n  color: #fff;\n}.pagination-success .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-success .page-item .page-link:hover {\n  color: #28c76f;\n}.pagination-success .page-item.prev-item .page-link:hover, .pagination-success .page-item.next-item .page-link:hover {\n  background: #28c76f;\n  color: #fff;\n}.pagination-success .page-item.next-item .page-link:active:after, .pagination-success .page-item.next-item .page-link:hover:after, .pagination-success .page-item.next .page-link:active:after, .pagination-success .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-success .page-item.prev-item .page-link:active:before, .pagination-success .page-item.prev-item .page-link:hover:before, .pagination-success .page-item.prev .page-link:active:before, .pagination-success .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2328c76f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-success .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #28c76f !important;\n  border-color: #28c76f;\n  box-shadow: 0 4px 18px -4px rgba(40, 199, 111, 0.65);\n}.progress-bar-success {\n  background-color: rgba(40, 199, 111, 0.12);\n}.progress-bar-success .progress-bar {\n  background-color: #28c76f;\n}.timeline .timeline-point-success {\n  border-color: #28c76f !important;\n}.timeline .timeline-point-success i,\n.timeline .timeline-point-success svg {\n  stroke: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator {\n  background-color: #28c76f !important;\n}.timeline .timeline-point-success.timeline-point-indicator:before {\n  background: rgba(40, 199, 111, 0.12) !important;\n}.divider.divider-success .divider-text:before, .divider.divider-success .divider-text:after {\n  border-color: #28c76f !important;\n}input:focus ~ .bg-success {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #28c76f !important;\n}.custom-control-success .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #28c76f;\n  background-color: #28c76f;\n}.custom-control-success.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-success.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-success.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(40, 199, 111, 0.4) !important;\n}.custom-control-success .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(40, 199, 111, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-success .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #28c76f !important;\n}.custom-switch-success .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #28c76f !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-success .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #28c76f !important;\n  border-color: #28c76f !important;\n}.text-success.text-darken-1 {\n  color: #24b263 !important;\n}.bg-success.bg-darken-1 {\n  background-color: #24b263 !important;\n}.border-success.border-darken-1 {\n  border: 1px solid #24b263 !important;\n}.border-top-success.border-top-darken-1 {\n  border-top: 1px solid #24b263 !important;\n}.border-bottom-success.border-bottom-darken-1 {\n  border-bottom: 1px solid #24b263 !important;\n}.border-left-success.border-left-darken-1 {\n  border-left: 1px solid #24b263 !important;\n}.border-right-success.border-right-darken-1 {\n  border-right: 1px solid #24b263 !important;\n}.overlay-success.overlay-darken-1 {\n  background: #24b263; /* The Fallback */\n  background: rgba(36, 178, 99, 0.6);\n}.text-success.text-darken-2 {\n  color: #1f9d57 !important;\n}.bg-success.bg-darken-2 {\n  background-color: #1f9d57 !important;\n}.border-success.border-darken-2 {\n  border: 1px solid #1f9d57 !important;\n}.border-top-success.border-top-darken-2 {\n  border-top: 1px solid #1f9d57 !important;\n}.border-bottom-success.border-bottom-darken-2 {\n  border-bottom: 1px solid #1f9d57 !important;\n}.border-left-success.border-left-darken-2 {\n  border-left: 1px solid #1f9d57 !important;\n}.border-right-success.border-right-darken-2 {\n  border-right: 1px solid #1f9d57 !important;\n}.overlay-success.overlay-darken-2 {\n  background: #1f9d57; /* The Fallback */\n  background: rgba(31, 157, 87, 0.6);\n}.text-success.text-darken-3 {\n  color: #1b874b !important;\n}.bg-success.bg-darken-3 {\n  background-color: #1b874b !important;\n}.border-success.border-darken-3 {\n  border: 1px solid #1b874b !important;\n}.border-top-success.border-top-darken-3 {\n  border-top: 1px solid #1b874b !important;\n}.border-bottom-success.border-bottom-darken-3 {\n  border-bottom: 1px solid #1b874b !important;\n}.border-left-success.border-left-darken-3 {\n  border-left: 1px solid #1b874b !important;\n}.border-right-success.border-right-darken-3 {\n  border-right: 1px solid #1b874b !important;\n}.overlay-success.overlay-darken-3 {\n  background: #1b874b; /* The Fallback */\n  background: rgba(27, 135, 75, 0.6);\n}.text-success.text-darken-4 {\n  color: #177240 !important;\n}.bg-success.bg-darken-4 {\n  background-color: #177240 !important;\n}.border-success.border-darken-4 {\n  border: 1px solid #177240 !important;\n}.border-top-success.border-top-darken-4 {\n  border-top: 1px solid #177240 !important;\n}.border-bottom-success.border-bottom-darken-4 {\n  border-bottom: 1px solid #177240 !important;\n}.border-left-success.border-left-darken-4 {\n  border-left: 1px solid #177240 !important;\n}.border-right-success.border-right-darken-4 {\n  border-right: 1px solid #177240 !important;\n}.overlay-success.overlay-darken-4 {\n  background: #177240; /* The Fallback */\n  background: rgba(23, 114, 64, 0.6);\n}.text-success.text-accent-1 {\n  color: #e1fff1 !important;\n}.bg-success.bg-accent-1 {\n  background-color: #e1fff1 !important;\n}.border-success.border-accent-1 {\n  border: 1px solid #e1fff1 !important;\n}.border-top-success.border-top-accent-1 {\n  border-top: 1px solid #e1fff1 !important;\n}.border-bottom-success.border-bottom-accent-1 {\n  border-bottom: 1px solid #e1fff1 !important;\n}.border-left-success.border-left-accent-1 {\n  border-left: 1px solid #e1fff1 !important;\n}.border-right-success.border-right-accent-1 {\n  border-right: 1px solid #e1fff1 !important;\n}.overlay-success.overlay-accent-1 {\n  background: #e1fff1; /* The Fallback */\n  background: rgba(225, 255, 241, 0.6);\n}.text-success.text-accent-2 {\n  color: #aeffd9 !important;\n}.bg-success.bg-accent-2 {\n  background-color: #aeffd9 !important;\n}.border-success.border-accent-2 {\n  border: 1px solid #aeffd9 !important;\n}.border-top-success.border-top-accent-2 {\n  border-top: 1px solid #aeffd9 !important;\n}.border-bottom-success.border-bottom-accent-2 {\n  border-bottom: 1px solid #aeffd9 !important;\n}.border-left-success.border-left-accent-2 {\n  border-left: 1px solid #aeffd9 !important;\n}.border-right-success.border-right-accent-2 {\n  border-right: 1px solid #aeffd9 !important;\n}.overlay-success.overlay-accent-2 {\n  background: #aeffd9; /* The Fallback */\n  background: rgba(174, 255, 217, 0.6);\n}.text-success.text-accent-3 {\n  color: #7bffc1 !important;\n}.bg-success.bg-accent-3 {\n  background-color: #7bffc1 !important;\n}.border-success.border-accent-3 {\n  border: 1px solid #7bffc1 !important;\n}.border-top-success.border-top-accent-3 {\n  border-top: 1px solid #7bffc1 !important;\n}.border-bottom-success.border-bottom-accent-3 {\n  border-bottom: 1px solid #7bffc1 !important;\n}.border-left-success.border-left-accent-3 {\n  border-left: 1px solid #7bffc1 !important;\n}.border-right-success.border-right-accent-3 {\n  border-right: 1px solid #7bffc1 !important;\n}.overlay-success.overlay-accent-3 {\n  background: #7bffc1; /* The Fallback */\n  background: rgba(123, 255, 193, 0.6);\n}.text-success.text-accent-4 {\n  color: #62ffb5 !important;\n}.bg-success.bg-accent-4 {\n  background-color: #62ffb5 !important;\n}.border-success.border-accent-4 {\n  border: 1px solid #62ffb5 !important;\n}.border-top-success.border-top-accent-4 {\n  border-top: 1px solid #62ffb5 !important;\n}.border-bottom-success.border-bottom-accent-4 {\n  border-bottom: 1px solid #62ffb5 !important;\n}.border-left-success.border-left-accent-4 {\n  border-left: 1px solid #62ffb5 !important;\n}.border-right-success.border-right-accent-4 {\n  border-right: 1px solid #62ffb5 !important;\n}.overlay-success.overlay-accent-4 {\n  background: #62ffb5; /* The Fallback */\n  background: rgba(98, 255, 181, 0.6);\n}.text-info.text-lighten-5 {\n  color: #69efff !important;\n}.bg-info.bg-lighten-5 {\n  background-color: #69efff !important;\n}.border-info.border-lighten-5 {\n  border: 1px solid #69efff !important;\n}.border-top-info.border-top-lighten-5 {\n  border-top: 1px solid #69efff !important;\n}.border-bottom-info.border-bottom-lighten-5 {\n  border-bottom: 1px solid #69efff !important;\n}.border-left-info.border-left-lighten-5 {\n  border-left: 1px solid #69efff !important;\n}.border-right-info.border-right-lighten-5 {\n  border-right: 1px solid #69efff !important;\n}.overlay-info.overlay-lighten-5 {\n  background: #69efff; /* The Fallback */\n  background: rgba(105, 239, 255, 0.6);\n}.text-info.text-lighten-4 {\n  color: #4fecff !important;\n}.bg-info.bg-lighten-4 {\n  background-color: #4fecff !important;\n}.border-info.border-lighten-4 {\n  border: 1px solid #4fecff !important;\n}.border-top-info.border-top-lighten-4 {\n  border-top: 1px solid #4fecff !important;\n}.border-bottom-info.border-bottom-lighten-4 {\n  border-bottom: 1px solid #4fecff !important;\n}.border-left-info.border-left-lighten-4 {\n  border-left: 1px solid #4fecff !important;\n}.border-right-info.border-right-lighten-4 {\n  border-right: 1px solid #4fecff !important;\n}.overlay-info.overlay-lighten-4 {\n  background: #4fecff; /* The Fallback */\n  background: rgba(79, 236, 255, 0.6);\n}.text-info.text-lighten-3 {\n  color: #36e9ff !important;\n}.bg-info.bg-lighten-3 {\n  background-color: #36e9ff !important;\n}.border-info.border-lighten-3 {\n  border: 1px solid #36e9ff !important;\n}.border-top-info.border-top-lighten-3 {\n  border-top: 1px solid #36e9ff !important;\n}.border-bottom-info.border-bottom-lighten-3 {\n  border-bottom: 1px solid #36e9ff !important;\n}.border-left-info.border-left-lighten-3 {\n  border-left: 1px solid #36e9ff !important;\n}.border-right-info.border-right-lighten-3 {\n  border-right: 1px solid #36e9ff !important;\n}.overlay-info.overlay-lighten-3 {\n  background: #36e9ff; /* The Fallback */\n  background: rgba(54, 233, 255, 0.6);\n}.text-info.text-lighten-2 {\n  color: #1ce7ff !important;\n}.bg-info.bg-lighten-2 {\n  background-color: #1ce7ff !important;\n}.border-info.border-lighten-2 {\n  border: 1px solid #1ce7ff !important;\n}.border-top-info.border-top-lighten-2 {\n  border-top: 1px solid #1ce7ff !important;\n}.border-bottom-info.border-bottom-lighten-2 {\n  border-bottom: 1px solid #1ce7ff !important;\n}.border-left-info.border-left-lighten-2 {\n  border-left: 1px solid #1ce7ff !important;\n}.border-right-info.border-right-lighten-2 {\n  border-right: 1px solid #1ce7ff !important;\n}.overlay-info.overlay-lighten-2 {\n  background: #1ce7ff; /* The Fallback */\n  background: rgba(28, 231, 255, 0.6);\n}.text-info.text-lighten-1 {\n  color: #03e4ff !important;\n}.bg-info.bg-lighten-1 {\n  background-color: #03e4ff !important;\n}.border-info.border-lighten-1 {\n  border: 1px solid #03e4ff !important;\n}.border-top-info.border-top-lighten-1 {\n  border-top: 1px solid #03e4ff !important;\n}.border-bottom-info.border-bottom-lighten-1 {\n  border-bottom: 1px solid #03e4ff !important;\n}.border-left-info.border-left-lighten-1 {\n  border-left: 1px solid #03e4ff !important;\n}.border-right-info.border-right-lighten-1 {\n  border-right: 1px solid #03e4ff !important;\n}.overlay-info.overlay-lighten-1 {\n  background: #03e4ff; /* The Fallback */\n  background: rgba(3, 228, 255, 0.6);\n}.bg-info {\n  background-color: #00cfe8 !important;\n}.bg-info .card-header,\n.bg-info .card-footer {\n  background-color: transparent;\n}.alert-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.alert-info .alert-heading {\n  box-shadow: rgba(0, 207, 232, 0.4) 0px 6px 15px -7px;\n}.alert-info .alert-link {\n  color: #00b8cf !important;\n}.alert-info .close {\n  color: #00cfe8 !important;\n}.bg-light-info {\n  background: rgba(0, 207, 232, 0.12) !important;\n  color: #00cfe8 !important;\n}.bg-light-info.fc-h-event, .bg-light-info.fc-v-event {\n  border-color: rgba(0, 207, 232, 0.1);\n}.bg-light-info .fc-list-event-dot,\n.bg-light-info .fc-daygrid-event-dot {\n  border-color: #00cfe8 !important;\n}.bg-light-info.fc-list-event:hover td {\n  background: rgba(0, 207, 232, 0.1) !important;\n}.bg-light-info.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-info {\n  color: #00cfe8 !important;\n}.border-info {\n  border: 1px solid #00cfe8 !important;\n}.border-top-info {\n  border-top: 1px solid #00cfe8;\n}.border-bottom-info {\n  border-bottom: 1px solid #00cfe8;\n}.border-left-info {\n  border-left: 1px solid #00cfe8;\n}.border-right-info {\n  border-right: 1px solid #00cfe8;\n}.bg-info.badge-glow,\n.border-info.badge-glow,\n.badge-info.badge-glow {\n  box-shadow: 0px 0px 10px #00cfe8;\n}.badge.badge-light-info {\n  background-color: rgba(0, 207, 232, 0.12);\n  color: #00cfe8 !important;\n}.overlay-info {\n  background: #00cfe8; /* The Fallback */\n  background: rgba(0, 207, 232, 0.6);\n}.btn-info {\n  border-color: #00cfe8 !important;\n  background-color: #00cfe8 !important;\n  color: #fff !important;\n}.btn-info:focus, .btn-info:active, .btn-info.active {\n  color: #fff;\n  background-color: #00b8cf !important;\n}.btn-info:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #00cfe8;\n}.btn-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-info {\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-flat-info:hover {\n  color: #00cfe8;\n}.btn-flat-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.12);\n}.btn-flat-info:active, .btn-flat-info.active, .btn-flat-info:focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-flat-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-info {\n  background-color: #00cfe8;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-info:hover:not(.disabled):not(:disabled) {\n  background-color: #03e4ff;\n}.btn-relief-info:active, .btn-relief-info.active, .btn-relief-info:focus {\n  background-color: #00b8cf;\n}.btn-relief-info:hover {\n  color: #fff;\n}.btn-relief-info:active, .btn-relief-info.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-info {\n  border: 1px solid #00cfe8 !important;\n  background-color: transparent;\n  color: #00cfe8;\n}.btn-outline-info:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(0, 207, 232, 0.04);\n  color: #00cfe8;\n}.btn-outline-info:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .btn-outline-info:not(:disabled):not(.disabled):focus {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-info.dropdown-toggle {\n  background-color: rgba(0, 207, 232, 0.2);\n  color: #00cfe8;\n}.btn-outline-info.waves-effect .waves-ripple,\n.btn-flat-info.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(0, 207, 232, 0.2) 0, rgba(0, 207, 232, 0.3) 40%, rgba(0, 207, 232, 0.4) 50%, rgba(0, 207, 232, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-info {\n  background-color: #00cfe8;\n}.modal.modal-info .modal-header .modal-title {\n  color: #00cfe8;\n}.modal.modal-info .modal-header .close {\n  color: #00cfe8 !important;\n}.pagination-info .page-item.active .page-link {\n  background: #00cfe8 !important;\n  color: #fff;\n}.pagination-info .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-info .page-item .page-link:hover {\n  color: #00cfe8;\n}.pagination-info .page-item.prev-item .page-link:hover, .pagination-info .page-item.next-item .page-link:hover {\n  background: #00cfe8;\n  color: #fff;\n}.pagination-info .page-item.next-item .page-link:active:after, .pagination-info .page-item.next-item .page-link:hover:after, .pagination-info .page-item.next .page-link:active:after, .pagination-info .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-info .page-item.prev-item .page-link:active:before, .pagination-info .page-item.prev-item .page-link:hover:before, .pagination-info .page-item.prev .page-link:active:before, .pagination-info .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300cfe8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-info .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #00cfe8 !important;\n  border-color: #00cfe8;\n  box-shadow: 0 4px 18px -4px rgba(0, 207, 232, 0.65);\n}.progress-bar-info {\n  background-color: rgba(0, 207, 232, 0.12);\n}.progress-bar-info .progress-bar {\n  background-color: #00cfe8;\n}.timeline .timeline-point-info {\n  border-color: #00cfe8 !important;\n}.timeline .timeline-point-info i,\n.timeline .timeline-point-info svg {\n  stroke: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator {\n  background-color: #00cfe8 !important;\n}.timeline .timeline-point-info.timeline-point-indicator:before {\n  background: rgba(0, 207, 232, 0.12) !important;\n}.divider.divider-info .divider-text:before, .divider.divider-info .divider-text:after {\n  border-color: #00cfe8 !important;\n}input:focus ~ .bg-info {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #00cfe8 !important;\n}.custom-control-info .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #00cfe8;\n  background-color: #00cfe8;\n}.custom-control-info.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-info.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-info.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(0, 207, 232, 0.4) !important;\n}.custom-control-info .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 207, 232, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-info .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #00cfe8 !important;\n}.custom-switch-info .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #00cfe8 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-info .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #00cfe8 !important;\n  border-color: #00cfe8 !important;\n}.text-info.text-darken-1 {\n  color: #00b8cf !important;\n}.bg-info.bg-darken-1 {\n  background-color: #00b8cf !important;\n}.border-info.border-darken-1 {\n  border: 1px solid #00b8cf !important;\n}.border-top-info.border-top-darken-1 {\n  border-top: 1px solid #00b8cf !important;\n}.border-bottom-info.border-bottom-darken-1 {\n  border-bottom: 1px solid #00b8cf !important;\n}.border-left-info.border-left-darken-1 {\n  border-left: 1px solid #00b8cf !important;\n}.border-right-info.border-right-darken-1 {\n  border-right: 1px solid #00b8cf !important;\n}.overlay-info.overlay-darken-1 {\n  background: #00b8cf; /* The Fallback */\n  background: rgba(0, 184, 207, 0.6);\n}.text-info.text-darken-2 {\n  color: #00a1b5 !important;\n}.bg-info.bg-darken-2 {\n  background-color: #00a1b5 !important;\n}.border-info.border-darken-2 {\n  border: 1px solid #00a1b5 !important;\n}.border-top-info.border-top-darken-2 {\n  border-top: 1px solid #00a1b5 !important;\n}.border-bottom-info.border-bottom-darken-2 {\n  border-bottom: 1px solid #00a1b5 !important;\n}.border-left-info.border-left-darken-2 {\n  border-left: 1px solid #00a1b5 !important;\n}.border-right-info.border-right-darken-2 {\n  border-right: 1px solid #00a1b5 !important;\n}.overlay-info.overlay-darken-2 {\n  background: #00a1b5; /* The Fallback */\n  background: rgba(0, 161, 181, 0.6);\n}.text-info.text-darken-3 {\n  color: #008b9c !important;\n}.bg-info.bg-darken-3 {\n  background-color: #008b9c !important;\n}.border-info.border-darken-3 {\n  border: 1px solid #008b9c !important;\n}.border-top-info.border-top-darken-3 {\n  border-top: 1px solid #008b9c !important;\n}.border-bottom-info.border-bottom-darken-3 {\n  border-bottom: 1px solid #008b9c !important;\n}.border-left-info.border-left-darken-3 {\n  border-left: 1px solid #008b9c !important;\n}.border-right-info.border-right-darken-3 {\n  border-right: 1px solid #008b9c !important;\n}.overlay-info.overlay-darken-3 {\n  background: #008b9c; /* The Fallback */\n  background: rgba(0, 139, 156, 0.6);\n}.text-info.text-darken-4 {\n  color: #007482 !important;\n}.bg-info.bg-darken-4 {\n  background-color: #007482 !important;\n}.border-info.border-darken-4 {\n  border: 1px solid #007482 !important;\n}.border-top-info.border-top-darken-4 {\n  border-top: 1px solid #007482 !important;\n}.border-bottom-info.border-bottom-darken-4 {\n  border-bottom: 1px solid #007482 !important;\n}.border-left-info.border-left-darken-4 {\n  border-left: 1px solid #007482 !important;\n}.border-right-info.border-right-darken-4 {\n  border-right: 1px solid #007482 !important;\n}.overlay-info.overlay-darken-4 {\n  background: #007482; /* The Fallback */\n  background: rgba(0, 116, 130, 0.6);\n}.text-info.text-accent-1 {\n  color: #feffff !important;\n}.bg-info.bg-accent-1 {\n  background-color: #feffff !important;\n}.border-info.border-accent-1 {\n  border: 1px solid #feffff !important;\n}.border-top-info.border-top-accent-1 {\n  border-top: 1px solid #feffff !important;\n}.border-bottom-info.border-bottom-accent-1 {\n  border-bottom: 1px solid #feffff !important;\n}.border-left-info.border-left-accent-1 {\n  border-left: 1px solid #feffff !important;\n}.border-right-info.border-right-accent-1 {\n  border-right: 1px solid #feffff !important;\n}.overlay-info.overlay-accent-1 {\n  background: #feffff; /* The Fallback */\n  background: rgba(254, 255, 255, 0.6);\n}.text-info.text-accent-2 {\n  color: #cbf5ff !important;\n}.bg-info.bg-accent-2 {\n  background-color: #cbf5ff !important;\n}.border-info.border-accent-2 {\n  border: 1px solid #cbf5ff !important;\n}.border-top-info.border-top-accent-2 {\n  border-top: 1px solid #cbf5ff !important;\n}.border-bottom-info.border-bottom-accent-2 {\n  border-bottom: 1px solid #cbf5ff !important;\n}.border-left-info.border-left-accent-2 {\n  border-left: 1px solid #cbf5ff !important;\n}.border-right-info.border-right-accent-2 {\n  border-right: 1px solid #cbf5ff !important;\n}.overlay-info.overlay-accent-2 {\n  background: #cbf5ff; /* The Fallback */\n  background: rgba(203, 245, 255, 0.6);\n}.text-info.text-accent-3 {\n  color: #98ecff !important;\n}.bg-info.bg-accent-3 {\n  background-color: #98ecff !important;\n}.border-info.border-accent-3 {\n  border: 1px solid #98ecff !important;\n}.border-top-info.border-top-accent-3 {\n  border-top: 1px solid #98ecff !important;\n}.border-bottom-info.border-bottom-accent-3 {\n  border-bottom: 1px solid #98ecff !important;\n}.border-left-info.border-left-accent-3 {\n  border-left: 1px solid #98ecff !important;\n}.border-right-info.border-right-accent-3 {\n  border-right: 1px solid #98ecff !important;\n}.overlay-info.overlay-accent-3 {\n  background: #98ecff; /* The Fallback */\n  background: rgba(152, 236, 255, 0.6);\n}.text-info.text-accent-4 {\n  color: #7fe7ff !important;\n}.bg-info.bg-accent-4 {\n  background-color: #7fe7ff !important;\n}.border-info.border-accent-4 {\n  border: 1px solid #7fe7ff !important;\n}.border-top-info.border-top-accent-4 {\n  border-top: 1px solid #7fe7ff !important;\n}.border-bottom-info.border-bottom-accent-4 {\n  border-bottom: 1px solid #7fe7ff !important;\n}.border-left-info.border-left-accent-4 {\n  border-left: 1px solid #7fe7ff !important;\n}.border-right-info.border-right-accent-4 {\n  border-right: 1px solid #7fe7ff !important;\n}.overlay-info.overlay-accent-4 {\n  background: #7fe7ff; /* The Fallback */\n  background: rgba(127, 231, 255, 0.6);\n}.text-warning.text-lighten-5 {\n  color: #ffe0c3 !important;\n}.bg-warning.bg-lighten-5 {\n  background-color: #ffe0c3 !important;\n}.border-warning.border-lighten-5 {\n  border: 1px solid #ffe0c3 !important;\n}.border-top-warning.border-top-lighten-5 {\n  border-top: 1px solid #ffe0c3 !important;\n}.border-bottom-warning.border-bottom-lighten-5 {\n  border-bottom: 1px solid #ffe0c3 !important;\n}.border-left-warning.border-left-lighten-5 {\n  border-left: 1px solid #ffe0c3 !important;\n}.border-right-warning.border-right-lighten-5 {\n  border-right: 1px solid #ffe0c3 !important;\n}.overlay-warning.overlay-lighten-5 {\n  background: #ffe0c3; /* The Fallback */\n  background: rgba(255, 224, 195, 0.6);\n}.text-warning.text-lighten-4 {\n  color: #ffd3a9 !important;\n}.bg-warning.bg-lighten-4 {\n  background-color: #ffd3a9 !important;\n}.border-warning.border-lighten-4 {\n  border: 1px solid #ffd3a9 !important;\n}.border-top-warning.border-top-lighten-4 {\n  border-top: 1px solid #ffd3a9 !important;\n}.border-bottom-warning.border-bottom-lighten-4 {\n  border-bottom: 1px solid #ffd3a9 !important;\n}.border-left-warning.border-left-lighten-4 {\n  border-left: 1px solid #ffd3a9 !important;\n}.border-right-warning.border-right-lighten-4 {\n  border-right: 1px solid #ffd3a9 !important;\n}.overlay-warning.overlay-lighten-4 {\n  background: #ffd3a9; /* The Fallback */\n  background: rgba(255, 211, 169, 0.6);\n}.text-warning.text-lighten-3 {\n  color: #ffc690 !important;\n}.bg-warning.bg-lighten-3 {\n  background-color: #ffc690 !important;\n}.border-warning.border-lighten-3 {\n  border: 1px solid #ffc690 !important;\n}.border-top-warning.border-top-lighten-3 {\n  border-top: 1px solid #ffc690 !important;\n}.border-bottom-warning.border-bottom-lighten-3 {\n  border-bottom: 1px solid #ffc690 !important;\n}.border-left-warning.border-left-lighten-3 {\n  border-left: 1px solid #ffc690 !important;\n}.border-right-warning.border-right-lighten-3 {\n  border-right: 1px solid #ffc690 !important;\n}.overlay-warning.overlay-lighten-3 {\n  background: #ffc690; /* The Fallback */\n  background: rgba(255, 198, 144, 0.6);\n}.text-warning.text-lighten-2 {\n  color: #ffb976 !important;\n}.bg-warning.bg-lighten-2 {\n  background-color: #ffb976 !important;\n}.border-warning.border-lighten-2 {\n  border: 1px solid #ffb976 !important;\n}.border-top-warning.border-top-lighten-2 {\n  border-top: 1px solid #ffb976 !important;\n}.border-bottom-warning.border-bottom-lighten-2 {\n  border-bottom: 1px solid #ffb976 !important;\n}.border-left-warning.border-left-lighten-2 {\n  border-left: 1px solid #ffb976 !important;\n}.border-right-warning.border-right-lighten-2 {\n  border-right: 1px solid #ffb976 !important;\n}.overlay-warning.overlay-lighten-2 {\n  background: #ffb976; /* The Fallback */\n  background: rgba(255, 185, 118, 0.6);\n}.text-warning.text-lighten-1 {\n  color: #ffac5d !important;\n}.bg-warning.bg-lighten-1 {\n  background-color: #ffac5d !important;\n}.border-warning.border-lighten-1 {\n  border: 1px solid #ffac5d !important;\n}.border-top-warning.border-top-lighten-1 {\n  border-top: 1px solid #ffac5d !important;\n}.border-bottom-warning.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ffac5d !important;\n}.border-left-warning.border-left-lighten-1 {\n  border-left: 1px solid #ffac5d !important;\n}.border-right-warning.border-right-lighten-1 {\n  border-right: 1px solid #ffac5d !important;\n}.overlay-warning.overlay-lighten-1 {\n  background: #ffac5d; /* The Fallback */\n  background: rgba(255, 172, 93, 0.6);\n}.bg-warning {\n  background-color: #ff9f43 !important;\n}.bg-warning .card-header,\n.bg-warning .card-footer {\n  background-color: transparent;\n}.alert-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.alert-warning .alert-heading {\n  box-shadow: rgba(255, 159, 67, 0.4) 0px 6px 15px -7px;\n}.alert-warning .alert-link {\n  color: #ff922a !important;\n}.alert-warning .close {\n  color: #ff9f43 !important;\n}.bg-light-warning {\n  background: rgba(255, 159, 67, 0.12) !important;\n  color: #ff9f43 !important;\n}.bg-light-warning.fc-h-event, .bg-light-warning.fc-v-event {\n  border-color: rgba(255, 159, 67, 0.1);\n}.bg-light-warning .fc-list-event-dot,\n.bg-light-warning .fc-daygrid-event-dot {\n  border-color: #ff9f43 !important;\n}.bg-light-warning.fc-list-event:hover td {\n  background: rgba(255, 159, 67, 0.1) !important;\n}.bg-light-warning.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-warning {\n  color: #ff9f43 !important;\n}.border-warning {\n  border: 1px solid #ff9f43 !important;\n}.border-top-warning {\n  border-top: 1px solid #ff9f43;\n}.border-bottom-warning {\n  border-bottom: 1px solid #ff9f43;\n}.border-left-warning {\n  border-left: 1px solid #ff9f43;\n}.border-right-warning {\n  border-right: 1px solid #ff9f43;\n}.bg-warning.badge-glow,\n.border-warning.badge-glow,\n.badge-warning.badge-glow {\n  box-shadow: 0px 0px 10px #ff9f43;\n}.badge.badge-light-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n  color: #ff9f43 !important;\n}.overlay-warning {\n  background: #ff9f43; /* The Fallback */\n  background: rgba(255, 159, 67, 0.6);\n}.btn-warning {\n  border-color: #ff9f43 !important;\n  background-color: #ff9f43 !important;\n  color: #fff !important;\n}.btn-warning:focus, .btn-warning:active, .btn-warning.active {\n  color: #fff;\n  background-color: #ff922a !important;\n}.btn-warning:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ff9f43;\n}.btn-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-warning {\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-flat-warning:hover {\n  color: #ff9f43;\n}.btn-flat-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.12);\n}.btn-flat-warning:active, .btn-flat-warning.active, .btn-flat-warning:focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-flat-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-warning {\n  background-color: #ff9f43;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-warning:hover:not(.disabled):not(:disabled) {\n  background-color: #ffac5d;\n}.btn-relief-warning:active, .btn-relief-warning.active, .btn-relief-warning:focus {\n  background-color: #ff922a;\n}.btn-relief-warning:hover {\n  color: #fff;\n}.btn-relief-warning:active, .btn-relief-warning.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-warning {\n  border: 1px solid #ff9f43 !important;\n  background-color: transparent;\n  color: #ff9f43;\n}.btn-outline-warning:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(255, 159, 67, 0.04);\n  color: #ff9f43;\n}.btn-outline-warning:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .btn-outline-warning:not(:disabled):not(.disabled):focus {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-warning.dropdown-toggle {\n  background-color: rgba(255, 159, 67, 0.2);\n  color: #ff9f43;\n}.btn-outline-warning.waves-effect .waves-ripple,\n.btn-flat-warning.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(255, 159, 67, 0.2) 0, rgba(255, 159, 67, 0.3) 40%, rgba(255, 159, 67, 0.4) 50%, rgba(255, 159, 67, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-warning {\n  background-color: #ff9f43;\n}.modal.modal-warning .modal-header .modal-title {\n  color: #ff9f43;\n}.modal.modal-warning .modal-header .close {\n  color: #ff9f43 !important;\n}.pagination-warning .page-item.active .page-link {\n  background: #ff9f43 !important;\n  color: #fff;\n}.pagination-warning .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-warning .page-item .page-link:hover {\n  color: #ff9f43;\n}.pagination-warning .page-item.prev-item .page-link:hover, .pagination-warning .page-item.next-item .page-link:hover {\n  background: #ff9f43;\n  color: #fff;\n}.pagination-warning .page-item.next-item .page-link:active:after, .pagination-warning .page-item.next-item .page-link:hover:after, .pagination-warning .page-item.next .page-link:active:after, .pagination-warning .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-warning .page-item.prev-item .page-link:active:before, .pagination-warning .page-item.prev-item .page-link:hover:before, .pagination-warning .page-item.prev .page-link:active:before, .pagination-warning .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ff9f43' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-warning .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ff9f43 !important;\n  border-color: #ff9f43;\n  box-shadow: 0 4px 18px -4px rgba(255, 159, 67, 0.65);\n}.progress-bar-warning {\n  background-color: rgba(255, 159, 67, 0.12);\n}.progress-bar-warning .progress-bar {\n  background-color: #ff9f43;\n}.timeline .timeline-point-warning {\n  border-color: #ff9f43 !important;\n}.timeline .timeline-point-warning i,\n.timeline .timeline-point-warning svg {\n  stroke: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator {\n  background-color: #ff9f43 !important;\n}.timeline .timeline-point-warning.timeline-point-indicator:before {\n  background: rgba(255, 159, 67, 0.12) !important;\n}.divider.divider-warning .divider-text:before, .divider.divider-warning .divider-text:after {\n  border-color: #ff9f43 !important;\n}input:focus ~ .bg-warning {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ff9f43 !important;\n}.custom-control-warning .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ff9f43;\n  background-color: #ff9f43;\n}.custom-control-warning.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-warning.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-warning.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(255, 159, 67, 0.4) !important;\n}.custom-control-warning .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(255, 159, 67, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-warning .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ff9f43 !important;\n}.custom-switch-warning .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ff9f43 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-warning .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ff9f43 !important;\n  border-color: #ff9f43 !important;\n}.text-warning.text-darken-1 {\n  color: #ff922a !important;\n}.bg-warning.bg-darken-1 {\n  background-color: #ff922a !important;\n}.border-warning.border-darken-1 {\n  border: 1px solid #ff922a !important;\n}.border-top-warning.border-top-darken-1 {\n  border-top: 1px solid #ff922a !important;\n}.border-bottom-warning.border-bottom-darken-1 {\n  border-bottom: 1px solid #ff922a !important;\n}.border-left-warning.border-left-darken-1 {\n  border-left: 1px solid #ff922a !important;\n}.border-right-warning.border-right-darken-1 {\n  border-right: 1px solid #ff922a !important;\n}.overlay-warning.overlay-darken-1 {\n  background: #ff922a; /* The Fallback */\n  background: rgba(255, 146, 42, 0.6);\n}.text-warning.text-darken-2 {\n  color: #ff8510 !important;\n}.bg-warning.bg-darken-2 {\n  background-color: #ff8510 !important;\n}.border-warning.border-darken-2 {\n  border: 1px solid #ff8510 !important;\n}.border-top-warning.border-top-darken-2 {\n  border-top: 1px solid #ff8510 !important;\n}.border-bottom-warning.border-bottom-darken-2 {\n  border-bottom: 1px solid #ff8510 !important;\n}.border-left-warning.border-left-darken-2 {\n  border-left: 1px solid #ff8510 !important;\n}.border-right-warning.border-right-darken-2 {\n  border-right: 1px solid #ff8510 !important;\n}.overlay-warning.overlay-darken-2 {\n  background: #ff8510; /* The Fallback */\n  background: rgba(255, 133, 16, 0.6);\n}.text-warning.text-darken-3 {\n  color: #f67800 !important;\n}.bg-warning.bg-darken-3 {\n  background-color: #f67800 !important;\n}.border-warning.border-darken-3 {\n  border: 1px solid #f67800 !important;\n}.border-top-warning.border-top-darken-3 {\n  border-top: 1px solid #f67800 !important;\n}.border-bottom-warning.border-bottom-darken-3 {\n  border-bottom: 1px solid #f67800 !important;\n}.border-left-warning.border-left-darken-3 {\n  border-left: 1px solid #f67800 !important;\n}.border-right-warning.border-right-darken-3 {\n  border-right: 1px solid #f67800 !important;\n}.overlay-warning.overlay-darken-3 {\n  background: #f67800; /* The Fallback */\n  background: rgba(246, 120, 0, 0.6);\n}.text-warning.text-darken-4 {\n  color: #dc6c00 !important;\n}.bg-warning.bg-darken-4 {\n  background-color: #dc6c00 !important;\n}.border-warning.border-darken-4 {\n  border: 1px solid #dc6c00 !important;\n}.border-top-warning.border-top-darken-4 {\n  border-top: 1px solid #dc6c00 !important;\n}.border-bottom-warning.border-bottom-darken-4 {\n  border-bottom: 1px solid #dc6c00 !important;\n}.border-left-warning.border-left-darken-4 {\n  border-left: 1px solid #dc6c00 !important;\n}.border-right-warning.border-right-darken-4 {\n  border-right: 1px solid #dc6c00 !important;\n}.overlay-warning.overlay-darken-4 {\n  background: #dc6c00; /* The Fallback */\n  background: rgba(220, 108, 0, 0.6);\n}.text-warning.text-accent-1 {\n  color: #fff5ef !important;\n}.bg-warning.bg-accent-1 {\n  background-color: #fff5ef !important;\n}.border-warning.border-accent-1 {\n  border: 1px solid #fff5ef !important;\n}.border-top-warning.border-top-accent-1 {\n  border-top: 1px solid #fff5ef !important;\n}.border-bottom-warning.border-bottom-accent-1 {\n  border-bottom: 1px solid #fff5ef !important;\n}.border-left-warning.border-left-accent-1 {\n  border-left: 1px solid #fff5ef !important;\n}.border-right-warning.border-right-accent-1 {\n  border-right: 1px solid #fff5ef !important;\n}.overlay-warning.overlay-accent-1 {\n  background: #fff5ef; /* The Fallback */\n  background: rgba(255, 245, 239, 0.6);\n}.text-warning.text-accent-2 {\n  color: #ffe5d8 !important;\n}.bg-warning.bg-accent-2 {\n  background-color: #ffe5d8 !important;\n}.border-warning.border-accent-2 {\n  border: 1px solid #ffe5d8 !important;\n}.border-top-warning.border-top-accent-2 {\n  border-top: 1px solid #ffe5d8 !important;\n}.border-bottom-warning.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffe5d8 !important;\n}.border-left-warning.border-left-accent-2 {\n  border-left: 1px solid #ffe5d8 !important;\n}.border-right-warning.border-right-accent-2 {\n  border-right: 1px solid #ffe5d8 !important;\n}.overlay-warning.overlay-accent-2 {\n  background: #ffe5d8; /* The Fallback */\n  background: rgba(255, 229, 216, 0.6);\n}.text-warning.text-accent-3 {\n  color: #fff6f3 !important;\n}.bg-warning.bg-accent-3 {\n  background-color: #fff6f3 !important;\n}.border-warning.border-accent-3 {\n  border: 1px solid #fff6f3 !important;\n}.border-top-warning.border-top-accent-3 {\n  border-top: 1px solid #fff6f3 !important;\n}.border-bottom-warning.border-bottom-accent-3 {\n  border-bottom: 1px solid #fff6f3 !important;\n}.border-left-warning.border-left-accent-3 {\n  border-left: 1px solid #fff6f3 !important;\n}.border-right-warning.border-right-accent-3 {\n  border-right: 1px solid #fff6f3 !important;\n}.overlay-warning.overlay-accent-3 {\n  background: #fff6f3; /* The Fallback */\n  background: rgba(255, 246, 243, 0.6);\n}.text-warning.text-accent-4 {\n  color: #ffe3da !important;\n}.bg-warning.bg-accent-4 {\n  background-color: #ffe3da !important;\n}.border-warning.border-accent-4 {\n  border: 1px solid #ffe3da !important;\n}.border-top-warning.border-top-accent-4 {\n  border-top: 1px solid #ffe3da !important;\n}.border-bottom-warning.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffe3da !important;\n}.border-left-warning.border-left-accent-4 {\n  border-left: 1px solid #ffe3da !important;\n}.border-right-warning.border-right-accent-4 {\n  border-right: 1px solid #ffe3da !important;\n}.overlay-warning.overlay-accent-4 {\n  background: #ffe3da; /* The Fallback */\n  background: rgba(255, 227, 218, 0.6);\n}.text-danger.text-lighten-5 {\n  color: #f8c6c6 !important;\n}.bg-danger.bg-lighten-5 {\n  background-color: #f8c6c6 !important;\n}.border-danger.border-lighten-5 {\n  border: 1px solid #f8c6c6 !important;\n}.border-top-danger.border-top-lighten-5 {\n  border-top: 1px solid #f8c6c6 !important;\n}.border-bottom-danger.border-bottom-lighten-5 {\n  border-bottom: 1px solid #f8c6c6 !important;\n}.border-left-danger.border-left-lighten-5 {\n  border-left: 1px solid #f8c6c6 !important;\n}.border-right-danger.border-right-lighten-5 {\n  border-right: 1px solid #f8c6c6 !important;\n}.overlay-danger.overlay-lighten-5 {\n  background: #f8c6c6; /* The Fallback */\n  background: rgba(248, 198, 198, 0.6);\n}.text-danger.text-lighten-4 {\n  color: #f5afaf !important;\n}.bg-danger.bg-lighten-4 {\n  background-color: #f5afaf !important;\n}.border-danger.border-lighten-4 {\n  border: 1px solid #f5afaf !important;\n}.border-top-danger.border-top-lighten-4 {\n  border-top: 1px solid #f5afaf !important;\n}.border-bottom-danger.border-bottom-lighten-4 {\n  border-bottom: 1px solid #f5afaf !important;\n}.border-left-danger.border-left-lighten-4 {\n  border-left: 1px solid #f5afaf !important;\n}.border-right-danger.border-right-lighten-4 {\n  border-right: 1px solid #f5afaf !important;\n}.overlay-danger.overlay-lighten-4 {\n  background: #f5afaf; /* The Fallback */\n  background: rgba(245, 175, 175, 0.6);\n}.text-danger.text-lighten-3 {\n  color: #f29899 !important;\n}.bg-danger.bg-lighten-3 {\n  background-color: #f29899 !important;\n}.border-danger.border-lighten-3 {\n  border: 1px solid #f29899 !important;\n}.border-top-danger.border-top-lighten-3 {\n  border-top: 1px solid #f29899 !important;\n}.border-bottom-danger.border-bottom-lighten-3 {\n  border-bottom: 1px solid #f29899 !important;\n}.border-left-danger.border-left-lighten-3 {\n  border-left: 1px solid #f29899 !important;\n}.border-right-danger.border-right-lighten-3 {\n  border-right: 1px solid #f29899 !important;\n}.overlay-danger.overlay-lighten-3 {\n  background: #f29899; /* The Fallback */\n  background: rgba(242, 152, 153, 0.6);\n}.text-danger.text-lighten-2 {\n  color: #f08182 !important;\n}.bg-danger.bg-lighten-2 {\n  background-color: #f08182 !important;\n}.border-danger.border-lighten-2 {\n  border: 1px solid #f08182 !important;\n}.border-top-danger.border-top-lighten-2 {\n  border-top: 1px solid #f08182 !important;\n}.border-bottom-danger.border-bottom-lighten-2 {\n  border-bottom: 1px solid #f08182 !important;\n}.border-left-danger.border-left-lighten-2 {\n  border-left: 1px solid #f08182 !important;\n}.border-right-danger.border-right-lighten-2 {\n  border-right: 1px solid #f08182 !important;\n}.overlay-danger.overlay-lighten-2 {\n  background: #f08182; /* The Fallback */\n  background: rgba(240, 129, 130, 0.6);\n}.text-danger.text-lighten-1 {\n  color: #ed6b6c !important;\n}.bg-danger.bg-lighten-1 {\n  background-color: #ed6b6c !important;\n}.border-danger.border-lighten-1 {\n  border: 1px solid #ed6b6c !important;\n}.border-top-danger.border-top-lighten-1 {\n  border-top: 1px solid #ed6b6c !important;\n}.border-bottom-danger.border-bottom-lighten-1 {\n  border-bottom: 1px solid #ed6b6c !important;\n}.border-left-danger.border-left-lighten-1 {\n  border-left: 1px solid #ed6b6c !important;\n}.border-right-danger.border-right-lighten-1 {\n  border-right: 1px solid #ed6b6c !important;\n}.overlay-danger.overlay-lighten-1 {\n  background: #ed6b6c; /* The Fallback */\n  background: rgba(237, 107, 108, 0.6);\n}.bg-danger {\n  background-color: #ea5455 !important;\n}.bg-danger .card-header,\n.bg-danger .card-footer {\n  background-color: transparent;\n}.alert-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.alert-danger .alert-heading {\n  box-shadow: rgba(234, 84, 85, 0.4) 0px 6px 15px -7px;\n}.alert-danger .alert-link {\n  color: #e73d3e !important;\n}.alert-danger .close {\n  color: #ea5455 !important;\n}.bg-light-danger {\n  background: rgba(234, 84, 85, 0.12) !important;\n  color: #ea5455 !important;\n}.bg-light-danger.fc-h-event, .bg-light-danger.fc-v-event {\n  border-color: rgba(234, 84, 85, 0.1);\n}.bg-light-danger .fc-list-event-dot,\n.bg-light-danger .fc-daygrid-event-dot {\n  border-color: #ea5455 !important;\n}.bg-light-danger.fc-list-event:hover td {\n  background: rgba(234, 84, 85, 0.1) !important;\n}.bg-light-danger.fc-list-event .fc-list-event-title {\n  color: #6e6b7b;\n}.avatar.bg-light-danger {\n  color: #ea5455 !important;\n}.border-danger {\n  border: 1px solid #ea5455 !important;\n}.border-top-danger {\n  border-top: 1px solid #ea5455;\n}.border-bottom-danger {\n  border-bottom: 1px solid #ea5455;\n}.border-left-danger {\n  border-left: 1px solid #ea5455;\n}.border-right-danger {\n  border-right: 1px solid #ea5455;\n}.bg-danger.badge-glow,\n.border-danger.badge-glow,\n.badge-danger.badge-glow {\n  box-shadow: 0px 0px 10px #ea5455;\n}.badge.badge-light-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n  color: #ea5455 !important;\n}.overlay-danger {\n  background: #ea5455; /* The Fallback */\n  background: rgba(234, 84, 85, 0.6);\n}.btn-danger {\n  border-color: #ea5455 !important;\n  background-color: #ea5455 !important;\n  color: #fff !important;\n}.btn-danger:focus, .btn-danger:active, .btn-danger.active {\n  color: #fff;\n  background-color: #e73d3e !important;\n}.btn-danger:hover:not(.disabled):not(:disabled) {\n  box-shadow: 0 8px 25px -8px #ea5455;\n}.btn-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-flat-danger {\n  background-color: transparent;\n  color: #ea5455;\n}.btn-flat-danger:hover {\n  color: #ea5455;\n}.btn-flat-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.12);\n}.btn-flat-danger:active, .btn-flat-danger.active, .btn-flat-danger:focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-flat-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.btn-relief-danger {\n  background-color: #ea5455;\n  box-shadow: inset 0 -3px 0 0 rgba(34, 41, 47, 0.2);\n  color: #fff;\n  transition: all 0.2s ease;\n}.btn-relief-danger:hover:not(.disabled):not(:disabled) {\n  background-color: #ed6b6c;\n}.btn-relief-danger:active, .btn-relief-danger.active, .btn-relief-danger:focus {\n  background-color: #e73d3e;\n}.btn-relief-danger:hover {\n  color: #fff;\n}.btn-relief-danger:active, .btn-relief-danger.active {\n  outline: none;\n  box-shadow: none;\n  transform: translateY(3px);\n}.btn-outline-danger {\n  border: 1px solid #ea5455 !important;\n  background-color: transparent;\n  color: #ea5455;\n}.btn-outline-danger:hover:not(.disabled):not(:disabled) {\n  background-color: rgba(234, 84, 85, 0.04);\n  color: #ea5455;\n}.btn-outline-danger:not(:disabled):not(.disabled):active:focus {\n  box-shadow: none;\n}.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .btn-outline-danger:not(:disabled):not(.disabled):focus {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}.show > .btn-outline-danger.dropdown-toggle {\n  background-color: rgba(234, 84, 85, 0.2);\n  color: #ea5455;\n}.btn-outline-danger.waves-effect .waves-ripple,\n.btn-flat-danger.waves-effect .waves-ripple {\n  background: radial-gradient(rgba(234, 84, 85, 0.2) 0, rgba(234, 84, 85, 0.3) 40%, rgba(234, 84, 85, 0.4) 50%, rgba(234, 84, 85, 0.5) 60%, rgba(255, 255, 255, 0) 70%);\n}.bullet.bullet-danger {\n  background-color: #ea5455;\n}.modal.modal-danger .modal-header .modal-title {\n  color: #ea5455;\n}.modal.modal-danger .modal-header .close {\n  color: #ea5455 !important;\n}.pagination-danger .page-item.active .page-link {\n  background: #ea5455 !important;\n  color: #fff;\n}.pagination-danger .page-item.active .page-link:hover {\n  color: #fff;\n}.pagination-danger .page-item .page-link:hover {\n  color: #ea5455;\n}.pagination-danger .page-item.prev-item .page-link:hover, .pagination-danger .page-item.next-item .page-link:hover {\n  background: #ea5455;\n  color: #fff;\n}.pagination-danger .page-item.next-item .page-link:active:after, .pagination-danger .page-item.next-item .page-link:hover:after, .pagination-danger .page-item.next .page-link:active:after, .pagination-danger .page-item.next .page-link:hover:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.pagination-danger .page-item.prev-item .page-link:active:before, .pagination-danger .page-item.prev-item .page-link:hover:before, .pagination-danger .page-item.prev .page-link:active:before, .pagination-danger .page-item.prev .page-link:hover:before {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ea5455' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-left'%3E%3Cpolyline points='15 18 9 12 15 6'%3E%3C/polyline%3E%3C/svg%3E\") !important;\n}.nav-pill-danger .nav-item .nav-link.active {\n  color: #fff;\n  background-color: #ea5455 !important;\n  border-color: #ea5455;\n  box-shadow: 0 4px 18px -4px rgba(234, 84, 85, 0.65);\n}.progress-bar-danger {\n  background-color: rgba(234, 84, 85, 0.12);\n}.progress-bar-danger .progress-bar {\n  background-color: #ea5455;\n}.timeline .timeline-point-danger {\n  border-color: #ea5455 !important;\n}.timeline .timeline-point-danger i,\n.timeline .timeline-point-danger svg {\n  stroke: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator {\n  background-color: #ea5455 !important;\n}.timeline .timeline-point-danger.timeline-point-indicator:before {\n  background: rgba(234, 84, 85, 0.12) !important;\n}.divider.divider-danger .divider-text:before, .divider.divider-danger .divider-text:after {\n  border-color: #ea5455 !important;\n}input:focus ~ .bg-danger {\n  box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.21rem #ea5455 !important;\n}.custom-control-danger .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger .custom-control-input:active ~ .custom-control-label::before {\n  border-color: #ea5455;\n  background-color: #ea5455;\n}.custom-control-danger.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-checkbox .custom-control-input:focus ~ .custom-control-label::before, .custom-control-danger.custom-radio .custom-control-input:checked ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:active ~ .custom-control-label::before,\n.custom-control-danger.custom-radio .custom-control-input:focus ~ .custom-control-label::before {\n  box-shadow: 0 2px 4px 0 rgba(234, 84, 85, 0.4) !important;\n}.custom-control-danger .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(234, 84, 85, 0.65) !important;\n  border: none;\n  box-shadow: none !important;\n}.custom-control-danger .custom-control-input:focus ~ .custom-control-label::before {\n  border-color: #ea5455 !important;\n}.custom-switch-danger .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #ea5455 !important;\n  color: #fff;\n  transition: all 0.2s ease-out;\n}.select2-danger .select2-container--default .select2-selection--multiple .select2-selection__choice {\n  background: #ea5455 !important;\n  border-color: #ea5455 !important;\n}.text-danger.text-darken-1 {\n  color: #e73d3e !important;\n}.bg-danger.bg-darken-1 {\n  background-color: #e73d3e !important;\n}.border-danger.border-darken-1 {\n  border: 1px solid #e73d3e !important;\n}.border-top-danger.border-top-darken-1 {\n  border-top: 1px solid #e73d3e !important;\n}.border-bottom-danger.border-bottom-darken-1 {\n  border-bottom: 1px solid #e73d3e !important;\n}.border-left-danger.border-left-darken-1 {\n  border-left: 1px solid #e73d3e !important;\n}.border-right-danger.border-right-darken-1 {\n  border-right: 1px solid #e73d3e !important;\n}.overlay-danger.overlay-darken-1 {\n  background: #e73d3e; /* The Fallback */\n  background: rgba(231, 61, 62, 0.6);\n}.text-danger.text-darken-2 {\n  color: #e42728 !important;\n}.bg-danger.bg-darken-2 {\n  background-color: #e42728 !important;\n}.border-danger.border-darken-2 {\n  border: 1px solid #e42728 !important;\n}.border-top-danger.border-top-darken-2 {\n  border-top: 1px solid #e42728 !important;\n}.border-bottom-danger.border-bottom-darken-2 {\n  border-bottom: 1px solid #e42728 !important;\n}.border-left-danger.border-left-darken-2 {\n  border-left: 1px solid #e42728 !important;\n}.border-right-danger.border-right-darken-2 {\n  border-right: 1px solid #e42728 !important;\n}.overlay-danger.overlay-darken-2 {\n  background: #e42728; /* The Fallback */\n  background: rgba(228, 39, 40, 0.6);\n}.text-danger.text-darken-3 {\n  color: #d71a1c !important;\n}.bg-danger.bg-darken-3 {\n  background-color: #d71a1c !important;\n}.border-danger.border-darken-3 {\n  border: 1px solid #d71a1c !important;\n}.border-top-danger.border-top-darken-3 {\n  border-top: 1px solid #d71a1c !important;\n}.border-bottom-danger.border-bottom-darken-3 {\n  border-bottom: 1px solid #d71a1c !important;\n}.border-left-danger.border-left-darken-3 {\n  border-left: 1px solid #d71a1c !important;\n}.border-right-danger.border-right-darken-3 {\n  border-right: 1px solid #d71a1c !important;\n}.overlay-danger.overlay-darken-3 {\n  background: #d71a1c; /* The Fallback */\n  background: rgba(215, 26, 28, 0.6);\n}.text-danger.text-darken-4 {\n  color: #c01819 !important;\n}.bg-danger.bg-darken-4 {\n  background-color: #c01819 !important;\n}.border-danger.border-darken-4 {\n  border: 1px solid #c01819 !important;\n}.border-top-danger.border-top-darken-4 {\n  border-top: 1px solid #c01819 !important;\n}.border-bottom-danger.border-bottom-darken-4 {\n  border-bottom: 1px solid #c01819 !important;\n}.border-left-danger.border-left-darken-4 {\n  border-left: 1px solid #c01819 !important;\n}.border-right-danger.border-right-darken-4 {\n  border-right: 1px solid #c01819 !important;\n}.overlay-danger.overlay-darken-4 {\n  background: #c01819; /* The Fallback */\n  background: rgba(192, 24, 25, 0.6);\n}.text-danger.text-accent-1 {\n  color: #ffeef1 !important;\n}.bg-danger.bg-accent-1 {\n  background-color: #ffeef1 !important;\n}.border-danger.border-accent-1 {\n  border: 1px solid #ffeef1 !important;\n}.border-top-danger.border-top-accent-1 {\n  border-top: 1px solid #ffeef1 !important;\n}.border-bottom-danger.border-bottom-accent-1 {\n  border-bottom: 1px solid #ffeef1 !important;\n}.border-left-danger.border-left-accent-1 {\n  border-left: 1px solid #ffeef1 !important;\n}.border-right-danger.border-right-accent-1 {\n  border-right: 1px solid #ffeef1 !important;\n}.overlay-danger.overlay-accent-1 {\n  background: #ffeef1; /* The Fallback */\n  background: rgba(255, 238, 241, 0.6);\n}.text-danger.text-accent-2 {\n  color: #ffd6db !important;\n}.bg-danger.bg-accent-2 {\n  background-color: #ffd6db !important;\n}.border-danger.border-accent-2 {\n  border: 1px solid #ffd6db !important;\n}.border-top-danger.border-top-accent-2 {\n  border-top: 1px solid #ffd6db !important;\n}.border-bottom-danger.border-bottom-accent-2 {\n  border-bottom: 1px solid #ffd6db !important;\n}.border-left-danger.border-left-accent-2 {\n  border-left: 1px solid #ffd6db !important;\n}.border-right-danger.border-right-accent-2 {\n  border-right: 1px solid #ffd6db !important;\n}.overlay-danger.overlay-accent-2 {\n  background: #ffd6db; /* The Fallback */\n  background: rgba(255, 214, 219, 0.6);\n}.text-danger.text-accent-3 {\n  color: #ffecee !important;\n}.bg-danger.bg-accent-3 {\n  background-color: #ffecee !important;\n}.border-danger.border-accent-3 {\n  border: 1px solid #ffecee !important;\n}.border-top-danger.border-top-accent-3 {\n  border-top: 1px solid #ffecee !important;\n}.border-bottom-danger.border-bottom-accent-3 {\n  border-bottom: 1px solid #ffecee !important;\n}.border-left-danger.border-left-accent-3 {\n  border-left: 1px solid #ffecee !important;\n}.border-right-danger.border-right-accent-3 {\n  border-right: 1px solid #ffecee !important;\n}.overlay-danger.overlay-accent-3 {\n  background: #ffecee; /* The Fallback */\n  background: rgba(255, 236, 238, 0.6);\n}.text-danger.text-accent-4 {\n  color: #ffd3d7 !important;\n}.bg-danger.bg-accent-4 {\n  background-color: #ffd3d7 !important;\n}.border-danger.border-accent-4 {\n  border: 1px solid #ffd3d7 !important;\n}.border-top-danger.border-top-accent-4 {\n  border-top: 1px solid #ffd3d7 !important;\n}.border-bottom-danger.border-bottom-accent-4 {\n  border-bottom: 1px solid #ffd3d7 !important;\n}.border-left-danger.border-left-accent-4 {\n  border-left: 1px solid #ffd3d7 !important;\n}.border-right-danger.border-right-accent-4 {\n  border-right: 1px solid #ffd3d7 !important;\n}.overlay-danger.overlay-accent-4 {\n  background: #ffd3d7; /* The Fallback */\n  background: rgba(255, 211, 215, 0.6);\n}.bg-gradient-dark,\n.btn-gradient-dark {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #4b4b4b, #1e1e1e);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.dark-layout .bg-gradient-dark,\n.dark-layout .btn-gradient-dark {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-dark:hover, .bg-gradient-dark:active,\n.btn-gradient-dark:hover,\n.btn-gradient-dark:active {\n  color: #fff;\n}.bg-gradient-dark:hover:not(.disabled):not(:disabled),\n.btn-gradient-dark:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-dark:active,\n.btn-gradient-dark:active {\n  transform: translateY(0);\n}.bg-gradient-dark:active, .bg-gradient-dark:focus,\n.btn-gradient-dark:active,\n.btn-gradient-dark:focus {\n  background-image: linear-gradient(47deg, #1e1e1e, #4b4b4b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary,\n.btn-gradient-primary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #7367f0, #9e95f5);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-primary:hover, .bg-gradient-primary:active,\n.btn-gradient-primary:hover,\n.btn-gradient-primary:active {\n  color: #fff;\n}.bg-gradient-primary:hover:not(.disabled):not(:disabled),\n.btn-gradient-primary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-primary:active,\n.btn-gradient-primary:active {\n  transform: translateY(0);\n}.bg-gradient-primary:active, .bg-gradient-primary:focus,\n.btn-gradient-primary:active,\n.btn-gradient-primary:focus {\n  background-image: linear-gradient(47deg, #4839eb, #7367f0);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary,\n.btn-gradient-secondary {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #82868b, #9ca0a4);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-secondary:hover, .bg-gradient-secondary:active,\n.btn-gradient-secondary:hover,\n.btn-gradient-secondary:active {\n  color: #fff;\n}.bg-gradient-secondary:hover:not(.disabled):not(:disabled),\n.btn-gradient-secondary:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-secondary:active,\n.btn-gradient-secondary:active {\n  transform: translateY(0);\n}.bg-gradient-secondary:active, .bg-gradient-secondary:focus,\n.btn-gradient-secondary:active,\n.btn-gradient-secondary:focus {\n  background-image: linear-gradient(47deg, #696d71, #82868b);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success,\n.btn-gradient-success {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #28c76f, #48da89);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-success:hover, .bg-gradient-success:active,\n.btn-gradient-success:hover,\n.btn-gradient-success:active {\n  color: #fff;\n}.bg-gradient-success:hover:not(.disabled):not(:disabled),\n.btn-gradient-success:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-success:active,\n.btn-gradient-success:active {\n  transform: translateY(0);\n}.bg-gradient-success:active, .bg-gradient-success:focus,\n.btn-gradient-success:active,\n.btn-gradient-success:focus {\n  background-image: linear-gradient(47deg, #1f9d57, #28c76f);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info,\n.btn-gradient-info {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #00cfe8, #1ce7ff);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-info:hover, .bg-gradient-info:active,\n.btn-gradient-info:hover,\n.btn-gradient-info:active {\n  color: #fff;\n}.bg-gradient-info:hover:not(.disabled):not(:disabled),\n.btn-gradient-info:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-info:active,\n.btn-gradient-info:active {\n  transform: translateY(0);\n}.bg-gradient-info:active, .bg-gradient-info:focus,\n.btn-gradient-info:active,\n.btn-gradient-info:focus {\n  background-image: linear-gradient(47deg, #00a1b5, #00cfe8);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning,\n.btn-gradient-warning {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ff9f43, #ffb976);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-warning:hover, .bg-gradient-warning:active,\n.btn-gradient-warning:hover,\n.btn-gradient-warning:active {\n  color: #fff;\n}.bg-gradient-warning:hover:not(.disabled):not(:disabled),\n.btn-gradient-warning:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-warning:active,\n.btn-gradient-warning:active {\n  transform: translateY(0);\n}.bg-gradient-warning:active, .bg-gradient-warning:focus,\n.btn-gradient-warning:active,\n.btn-gradient-warning:focus {\n  background-image: linear-gradient(47deg, #ff8510, #ff9f43);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger,\n.btn-gradient-danger {\n  color: #fff;\n  transition: all 0.2s ease;\n  background-image: linear-gradient(47deg, #ea5455, #f08182);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.bg-gradient-danger:hover, .bg-gradient-danger:active,\n.btn-gradient-danger:hover,\n.btn-gradient-danger:active {\n  color: #fff;\n}.bg-gradient-danger:hover:not(.disabled):not(:disabled),\n.btn-gradient-danger:hover:not(.disabled):not(:disabled) {\n  transform: translateY(-2px);\n}.bg-gradient-danger:active,\n.btn-gradient-danger:active {\n  transform: translateY(0);\n}.bg-gradient-danger:active, .bg-gradient-danger:focus,\n.btn-gradient-danger:active,\n.btn-gradient-danger:focus {\n  background-image: linear-gradient(47deg, #e42728, #ea5455);\n  background-repeat: repeat-x;\n  background-repeat: repeat;\n}.ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #f3f2f7;\n  text-transform: uppercase;\n  height: 40px !important;\n  border-top: 1px solid #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n  padding: 0.75rem 1rem;\n  font-weight: bold;\n  font-size: 0.8rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell-template-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  letter-spacing: 1px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-header .sort-btn:before {\n  font-size: 1.3rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #ebe9f1;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: transparent;\n  background-color: initial;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #f6f6f6;\n  color: #6e6b7b;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem 1rem;\n  display: flex;\n  align-items: center;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #fff;\n  color: #636363;\n  overflow: hidden;\n  margin-bottom: 1rem;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #636363;\n  line-height: 20px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover {\n  vertical-align: sub;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active:hover a {\n  background-color: #7367f0 !important;\n  color: #fff !important;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  padding: 5px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: transparent !important;\n  color: #7367f0 !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 2px 0px 11px 0px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #fff;\n  color: #636363;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  background-color: #f3f2f7;\n  border-top-left-radius: 28px;\n  border-bottom-left-radius: 28px;\n  border-top-right-radius: 28px;\n  border-bottom-right-radius: 28px;\n  height: 36px;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-footer .page-count {\n  color: #b9b9c3;\n}.ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}.ngx-datatable.bootstrap.core-bootstrap .datatable-body-cell {\n  overflow: visible !important;\n}@media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}@media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: inline;\n    display: initial;\n  }\n  .mobile-hidden {\n    display: none;\n  }\n}@media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n  .mobile-hidden {\n    display: inline;\n    display: initial;\n  }\n}.dark-layout .datatable-header-inner,\n.dark-layout .datatable-header {\n  background-color: #343d55 !important;\n  border-top: 1px solid #3b4253 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: #283046 !important;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager ul li.disabled a {\n  color: #636363;\n}.dark-layout .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager a {\n  color: #b4b7bd;\n}.dark-layout .datatable-body-row {\n  border-color: #3b4253 !important;\n}.dark-layout .datatable-body-row.active {\n  background-color: #283046 !important;\n  color: inherit !important;\n}.dark-layout .datatable-body {\n  background-color: #283046 !important;\n}.dark-layout .pager {\n  background-color: #242b3d !important;\n}.datatable-scroll {\n  width: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYW5ndWxhclxcbGlic1xcZGF0YXRhYmxlcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAc3dpbWxhbmVcXG5neC1kYXRhdGFibGVcXHRoZW1lc1xcYm9vdHN0cmFwLnNjc3MiLCJkYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxjb2xvcnNcXF9wYWxldHRlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1peGluc1xcaGV4MnJnYi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXEBjb3JlXFxzY3NzXFxiYXNlXFxjb3JlXFxjb2xvcnNcXHBhbGV0dGUtdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXG1peGluc1xcYWxlcnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxAY29yZVxcc2Nzc1xcYmFzZVxcYm9vdHN0cmFwLWV4dGVuZGVkXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvcmVcXGNvbG9yc1xccGFsZXR0ZS1ncmFkaWVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfZ3JhZGllbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcQGNvcmVcXHNjc3NcXGJhc2VcXGNvbXBvbmVudHNcXF92YXJpYWJsZXMtZGFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNckI7O0NBQUEsQ0ZFUjtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBZ0M7RUFDaEM7NEZBQ3NHO0VBQ3RHLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIsQ0FFQTtFQUNFLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5Qix3Q0FBK0I7RUFBL0IsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0dwR0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNDRixDREFFO0VBQ0UsdUJBQUE7RUFBQSwwQkFBQTtBQ0VKLENEREk7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNHTixDREZNO0VBQ0UsaUJBQUE7QUNJUixDRENJO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ0NOLENEQU07RUFDRSxxQ0FBQTtBQ0VSLENEQU07RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNFUixDREFNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRVIsQ0RDSTtFQUdFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0ROLENESUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZKLENER0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ROLENER0k7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNETixDREdRO0VBQ0UsZ0JBQUE7QUNEVixDREtjO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0hoQixDRFNNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNQUixDRFNNOzs7O0VBSUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1BSLENEY007RUFDRSxpQkFBQTtBQ1pSLENDckNNO0VBQ0Usb0NBQUE7QUR3Q1IsQ0N0Q1E7O0VBRUUsNkJBQUE7QUR3Q1YsQ0NzQk07RUFDRSxvQ0FBQTtBRG5CUixDQ3NCTTtFQUNFLDZCQUFBO0FEbkJSLENDc0JNO0VBQ0UsZ0NBQUE7QURuQlIsQ0NzQk07RUFDRSw4QkFBQTtBRG5CUixDQ3NCTTtFQUNFLCtCQUFBO0FEbkJSLENDMEJROzs7RUFDRSxnQ0FBQTtBRHJCVixDQ3FDTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ5SEYsQ0NrVU07RUFDRSxpRUFBQTtBRC9UUixDQ2hGTTtFQUNFLG9DQUFBO0FEbUZSLENDakZROztFQUVFLDZCQUFBO0FEbUZWLENDckJNO0VBQ0Usb0NBQUE7QUR3QlIsQ0NyQk07RUFDRSw2QkFBQTtBRHdCUixDQ3JCTTtFQUNFLGdDQUFBO0FEd0JSLENDckJNO0VBQ0UsOEJBQUE7QUR3QlIsQ0NyQk07RUFDRSwrQkFBQTtBRHdCUixDQ2pCUTs7O0VBQ0UsZ0NBQUE7QURzQlYsQ0NOTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsOEJBQUE7QUZvS0YsQ0N1Uk07RUFDRSxpRUFBQTtBRHBSUixDQzNITTtFQUNFLG9DQUFBO0FEOEhSLENDNUhROztFQUVFLDZCQUFBO0FEOEhWLENDeEhRO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtBRDJIVixDQ3pIVTtFRzNEUixtREFBQTtBSnVMRixDQ3hIVTtFQUNFLHlCQUFBO0FEMEhaLENDdEhVO0VBQ0UseUJBQUE7QUR3SFosQ0M5RU07RUFDRSxvQ0FBQTtBRGlGUixDQzlFTTtFQUNFLDZCQUFBO0FEaUZSLENDOUVNO0VBQ0UsZ0NBQUE7QURpRlIsQ0M5RU07RUFDRSw4QkFBQTtBRGlGUixDQzlFTTtFQUNFLCtCQUFBO0FEaUZSLENDMUVROzs7RUFDRSxnQ0FBQTtBRCtFVixDQ3ZFVTtFQUNFLHdDQUFBO0VBQ0EseUJBQUE7QUQwRVosQ0NwRU07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGa09GLENDbkVRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEc0VWLENDcEVVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QURvRVosQ0NqRVU7RUFDRSxtQ0FBQTtBRG1FWixDQ2hFVTtFQUNFLGdCQUFBO0FEa0VaLENDM0RRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSHVJVCxDQzVEVTtFQUNFLGNFNUVIO0FIMElULENDM0RVO0VBQ0Usd0NBQUE7QUQ2RFosQ0MxRFU7RUFHRSx1Q0FBQTtFQUNBLGNFdkZIO0FIaUpULENDdkRVO0VBQ0UsK1NBQUE7QUR5RFosQ0NsRFE7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRHFEVixDQ25EWTtFQUNFLHlCQUFBO0FEcURkLENDOUNVO0VBR0UseUJBQUE7QUQ4Q1osQ0MzQ1U7RUFDRSxXSTlOSjtBTDJRUixDQzNDVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FENENaLENDckNRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIK0tULENDdENVO0VBQ0Usd0NBQUE7RUFDQSxjRTNJSDtBSG1MVCxDQ3RDVTtFQUNFLGdCQUFBO0FEd0NaLENDdENVO0VBR0UsdUNBQUE7RUFDQSxjRXBKSDtBSDBMVCxDQ25DVTtFQUNFLCtTQUFBO0FEcUNaLENDbENVO0VBQ0UsdUNBQUE7RUFDQSxjRTdKSDtBSGlNVCxDQzFCWTs7RUFDRSxpS0FBQTtBRDhCZCxDQ2ZVO0VBQ0UseUJFeExIO0FIME1ULENDUmM7RUFDRSxjRW5NUDtBSDhNVCxDQ1RjO0VBQ0UseUJBQUE7QURXaEIsQ0M0RVE7RUFDRSx3Q0FBQTtBRHpFVixDQzJFVTtFQUNFLHlCRWpTSDtBSHdOVCxDQ2lGVTtFQUNFLGdDQUFBO0FEOUVaLENDZ0ZZOztFQUVFLDBCQUFBO0FEOUVkLENDaUZZO0VBQ0Usb0NBQUE7QUQvRWQsQ0NnRmM7RUFDRSw2Q0FBQTtBRDlFaEIsQ0N5Rlk7RUFFRSxnQ0FBQTtBRHZGZCxDQ2lHTTtFQUNFLGlFQUFBO0FEOUZSLENDb0dVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUhvUFQsQ0NxR1k7Ozs7O0VBR0Usd0RBQUE7QURqR2QsQ0NvR1U7RUFDRSxtREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRGxHWixDQ29HVTtFQUNFLGdDQUFBO0FEbEdaLENDMEdVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRHZHWixDQ2lIYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUQ5R2hCLENDcUhNO0VBQ0UseUJBQUE7QURsSFIsQ0NxSE07RUFDRSxvQ0FBQTtBRGxIUixDQ3FITTtFQUNFLG9DQUFBO0FEbEhSLENDcUhNO0VBQ0Usd0NBQUE7QURsSFIsQ0NxSE07RUFDRSwyQ0FBQTtBRGxIUixDQ3FITTtFQUNFLHlDQUFBO0FEbEhSLENDcUhNO0VBQ0UsMENBQUE7QURsSFIsQ0NxSE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixpQ0FBQTtBRitaRixDQ29GTTtFQUNFLHlCQUFBO0FEakZSLENDb0ZNO0VBQ0Usb0NBQUE7QURqRlIsQ0NvRk07RUFDRSxvQ0FBQTtBRGpGUixDQ29GTTtFQUNFLHdDQUFBO0FEakZSLENDb0ZNO0VBQ0UsMkNBQUE7QURqRlIsQ0NvRk07RUFDRSx5Q0FBQTtBRGpGUixDQ29GTTtFQUNFLDBDQUFBO0FEakZSLENDb0ZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsaUNBQUE7QUZnY0YsQ0NtRE07RUFDRSx5QkFBQTtBRGhEUixDQ21ETTtFQUNFLG9DQUFBO0FEaERSLENDbURNO0VBQ0Usb0NBQUE7QURoRFIsQ0NtRE07RUFDRSx3Q0FBQTtBRGhEUixDQ21ETTtFQUNFLDJDQUFBO0FEaERSLENDbURNO0VBQ0UseUNBQUE7QURoRFIsQ0NtRE07RUFDRSwwQ0FBQTtBRGhEUixDQ21ETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGaWVGLENDcGJNO0VBQ0Usb0NBQUE7QUR1YlIsQ0NyYlE7O0VBRUUsNkJBQUE7QUR1YlYsQ0N6WE07RUFDRSxvQ0FBQTtBRDRYUixDQ3pYTTtFQUNFLDZCQUFBO0FENFhSLENDelhNO0VBQ0UsZ0NBQUE7QUQ0WFIsQ0N6WE07RUFDRSw4QkFBQTtBRDRYUixDQ3pYTTtFQUNFLCtCQUFBO0FENFhSLENDclhROzs7RUFDRSxnQ0FBQTtBRDBYVixDQzFXTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ3Z0JGLENDN0VNO0VBQ0UsaUVBQUE7QURnRlIsQ0N6Qk07RUFDRSx5QkFBQTtBRDRCUixDQ3pCTTtFQUNFLG9DQUFBO0FENEJSLENDekJNO0VBQ0Usb0NBQUE7QUQ0QlIsQ0N6Qk07RUFDRSx3Q0FBQTtBRDRCUixDQ3pCTTtFQUNFLDJDQUFBO0FENEJSLENDekJNO0VBQ0UseUNBQUE7QUQ0QlIsQ0N6Qk07RUFDRSwwQ0FBQTtBRDRCUixDQ3pCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGNmlCRixDQzFETTtFQUNFLHlCQUFBO0FENkRSLENDMURNO0VBQ0Usb0NBQUE7QUQ2RFIsQ0MxRE07RUFDRSxvQ0FBQTtBRDZEUixDQzFETTtFQUNFLHdDQUFBO0FENkRSLENDMURNO0VBQ0UsMkNBQUE7QUQ2RFIsQ0MxRE07RUFDRSx5Q0FBQTtBRDZEUixDQzFETTtFQUNFLDBDQUFBO0FENkRSLENDMURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY4a0JGLENDM0ZNO0VBQ0UseUJBQUE7QUQ4RlIsQ0MzRk07RUFDRSxvQ0FBQTtBRDhGUixDQzNGTTtFQUNFLG9DQUFBO0FEOEZSLENDM0ZNO0VBQ0Usd0NBQUE7QUQ4RlIsQ0MzRk07RUFDRSwyQ0FBQTtBRDhGUixDQzNGTTtFQUNFLHlDQUFBO0FEOEZSLENDM0ZNO0VBQ0UsMENBQUE7QUQ4RlIsQ0MzRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRittQkYsQ0M1SE07RUFDRSx5QkFBQTtBRCtIUixDQzVITTtFQUNFLG9DQUFBO0FEK0hSLENDNUhNO0VBQ0Usb0NBQUE7QUQrSFIsQ0M1SE07RUFDRSx3Q0FBQTtBRCtIUixDQzVITTtFQUNFLDJDQUFBO0FEK0hSLENDNUhNO0VBQ0UseUNBQUE7QUQrSFIsQ0M1SE07RUFDRSwwQ0FBQTtBRCtIUixDQzVITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGZ3BCRixDQzdKTTtFQUNFLHlCQUFBO0FEZ0tSLENDN0pNO0VBQ0Usb0NBQUE7QURnS1IsQ0M3Sk07RUFDRSxvQ0FBQTtBRGdLUixDQzdKTTtFQUNFLHdDQUFBO0FEZ0tSLENDN0pNO0VBQ0UsMkNBQUE7QURnS1IsQ0M3Sk07RUFDRSx5Q0FBQTtBRGdLUixDQzdKTTtFQUNFLDBDQUFBO0FEZ0tSLENDN0pNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZpckJGLENDcG9CTTtFQUNFLG9DQUFBO0FEdW9CUixDQ3JvQlE7O0VBRUUsNkJBQUE7QUR1b0JWLENDam9CUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QURvb0JWLENDbG9CVTtFRzNEUixzREFBQTtBSmdzQkYsQ0Nqb0JVO0VBQ0UseUJBQUE7QURtb0JaLENDL25CVTtFQUNFLHlCQUFBO0FEaW9CWixDQzFuQlE7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FENm5CVixDQzFuQlU7RUFFRSxzQ0FBQTtBRDJuQlosQ0N4bkJVOztFQUVFLGdDQUFBO0FEMG5CWixDQ3RuQlk7RUFDRSwrQ0FBQTtBRHduQmQsQ0NybkJZO0VBQ0UsY0lFRDtBTHFuQmIsQ0MvbUJRO0VBQ0UseUJBQUE7QURrbkJWLENDN21CTTtFQUNFLG9DQUFBO0FEZ25CUixDQzdtQk07RUFDRSw2QkFBQTtBRGduQlIsQ0M3bUJNO0VBQ0UsZ0NBQUE7QURnbkJSLENDN21CTTtFQUNFLDhCQUFBO0FEZ25CUixDQzdtQk07RUFDRSwrQkFBQTtBRGduQlIsQ0N6bUJROzs7RUFDRSxnQ0FBQTtBRDhtQlYsQ0N0bUJVO0VBQ0UsMkNBQUE7RUFDQSx5QkFBQTtBRHltQlosQ0NubUJNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRml3QkYsQ0NsbUJRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEcW1CVixDQ25tQlU7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRG1tQlosQ0NobUJVO0VBQ0UsbUNBQUE7QURrbUJaLENDL2xCVTtFQUNFLGdCQUFBO0FEaW1CWixDQzFsQlE7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIc3FCVCxDQzNsQlU7RUFDRSxjRTVFSDtBSHlxQlQsQ0MxbEJVO0VBQ0UsMkNBQUE7QUQ0bEJaLENDemxCVTtFQUdFLDBDQUFBO0VBQ0EsY0V2Rkg7QUhnckJULENDdGxCVTtFQUNFLCtTQUFBO0FEd2xCWixDQ2psQlE7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRG9sQlYsQ0M5a0JZO0VBQ0UseUJBQUE7QURnbEJkLENDN2tCVTtFQUdFLHlCQUFBO0FENmtCWixDQzFrQlU7RUFDRSxXSTlOSjtBTDB5QlIsQ0Mxa0JVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUQya0JaLENDcGtCUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSDhzQlQsQ0Nya0JVO0VBQ0UsMkNBQUE7RUFDQSxjRTNJSDtBSGt0QlQsQ0Nya0JVO0VBQ0UsZ0JBQUE7QUR1a0JaLENDcmtCVTtFQUdFLDBDQUFBO0VBQ0EsY0VwSkg7QUh5dEJULENDbGtCVTtFQUNFLCtTQUFBO0FEb2tCWixDQ2prQlU7RUFDRSwwQ0FBQTtFQUNBLGNFN0pIO0FIZ3VCVCxDQ3pqQlk7O0VBQ0UsNktBQUE7QUQ2akJkLENDOWlCVTtFQUNFLHlCRXhMSDtBSHl1QlQsQ0N2aUJjO0VBQ0UsY0VuTVA7QUg2dUJULENDeGlCYztFQUNFLHlCQUFBO0FEMGlCaEIsQ0M5aEJjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTDQxQlIsQ0MvaEJnQjtFQUNFLFdJOVRWO0FMKzFCUixDQzNoQmM7RUFDRSxjRTlOUDtBSDJ2QlQsQ0N2aEJjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMczJCUixDQ2poQmtCO0VBQ0UsMlRBQUE7QURtaEJwQixDQ3JnQmtCO0VBQ0UsMlRBQUE7QUR1Z0JwQixDQ3JmYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLHFEQUFBO0FEd2ZoQixDQy9lUTtFQUNFLDJDQUFBO0FEa2ZWLENDaGZVO0VBQ0UseUJFalNIO0FIbXhCVCxDQzFlVTtFQUNFLGdDQUFBO0FENmVaLENDM2VZOztFQUVFLDBCQUFBO0FENmVkLENDMWVZO0VBQ0Usb0NBQUE7QUQ0ZWQsQ0MzZWM7RUFDRSxnREFBQTtBRDZlaEIsQ0NsZVk7RUFFRSxnQ0FBQTtBRG9lZCxDQzFkTTtFQUNFLGlFQUFBO0FENmRSLENDdmRVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUgreUJULENDdGRZOzs7OztFQUdFLDJEQUFBO0FEMGRkLENDdmRVO0VBQ0Usc0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUR5ZFosQ0N2ZFU7RUFDRSxnQ0FBQTtBRHlkWixDQ2pkVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QURvZFosQ0MxY2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FENmNoQixDQ3RjTTtFQUNFLHlCQUFBO0FEeWNSLENDdGNNO0VBQ0Usb0NBQUE7QUR5Y1IsQ0N0Y007RUFDRSxvQ0FBQTtBRHljUixDQ3RjTTtFQUNFLHdDQUFBO0FEeWNSLENDdGNNO0VBQ0UsMkNBQUE7QUR5Y1IsQ0N0Y007RUFDRSx5Q0FBQTtBRHljUixDQ3RjTTtFQUNFLDBDQUFBO0FEeWNSLENDdGNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUYwOUJGLENDdmVNO0VBQ0UseUJBQUE7QUQwZVIsQ0N2ZU07RUFDRSxvQ0FBQTtBRDBlUixDQ3ZlTTtFQUNFLG9DQUFBO0FEMGVSLENDdmVNO0VBQ0Usd0NBQUE7QUQwZVIsQ0N2ZU07RUFDRSwyQ0FBQTtBRDBlUixDQ3ZlTTtFQUNFLHlDQUFBO0FEMGVSLENDdmVNO0VBQ0UsMENBQUE7QUQwZVIsQ0N2ZU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjIvQkYsQ0N4Z0JNO0VBQ0UseUJBQUE7QUQyZ0JSLENDeGdCTTtFQUNFLG9DQUFBO0FEMmdCUixDQ3hnQk07RUFDRSxvQ0FBQTtBRDJnQlIsQ0N4Z0JNO0VBQ0Usd0NBQUE7QUQyZ0JSLENDeGdCTTtFQUNFLDJDQUFBO0FEMmdCUixDQ3hnQk07RUFDRSx5Q0FBQTtBRDJnQlIsQ0N4Z0JNO0VBQ0UsMENBQUE7QUQyZ0JSLENDeGdCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGNGhDRixDQ3ppQk07RUFDRSx5QkFBQTtBRDRpQlIsQ0N6aUJNO0VBQ0Usb0NBQUE7QUQ0aUJSLENDemlCTTtFQUNFLG9DQUFBO0FENGlCUixDQ3ppQk07RUFDRSx3Q0FBQTtBRDRpQlIsQ0N6aUJNO0VBQ0UsMkNBQUE7QUQ0aUJSLENDemlCTTtFQUNFLHlDQUFBO0FENGlCUixDQ3ppQk07RUFDRSwwQ0FBQTtBRDRpQlIsQ0N6aUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY2akNGLENDMWtCTTtFQUNFLHlCQUFBO0FENmtCUixDQzFrQk07RUFDRSxvQ0FBQTtBRDZrQlIsQ0Mxa0JNO0VBQ0Usb0NBQUE7QUQ2a0JSLENDMWtCTTtFQUNFLHdDQUFBO0FENmtCUixDQzFrQk07RUFDRSwyQ0FBQTtBRDZrQlIsQ0Mxa0JNO0VBQ0UseUNBQUE7QUQ2a0JSLENDMWtCTTtFQUNFLDBDQUFBO0FENmtCUixDQzFrQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjhsQ0YsQ0MzbUJNO0VBQ0UseUJBQUE7QUQ4bUJSLENDM21CTTtFQUNFLG9DQUFBO0FEOG1CUixDQzNtQk07RUFDRSxvQ0FBQTtBRDhtQlIsQ0MzbUJNO0VBQ0Usd0NBQUE7QUQ4bUJSLENDM21CTTtFQUNFLDJDQUFBO0FEOG1CUixDQzNtQk07RUFDRSx5Q0FBQTtBRDhtQlIsQ0MzbUJNO0VBQ0UsMENBQUE7QUQ4bUJSLENDM21CTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGK25DRixDQzVvQk07RUFDRSx5QkFBQTtBRCtvQlIsQ0M1b0JNO0VBQ0Usb0NBQUE7QUQrb0JSLENDNW9CTTtFQUNFLG9DQUFBO0FEK29CUixDQzVvQk07RUFDRSx3Q0FBQTtBRCtvQlIsQ0M1b0JNO0VBQ0UsMkNBQUE7QUQrb0JSLENDNW9CTTtFQUNFLHlDQUFBO0FEK29CUixDQzVvQk07RUFDRSwwQ0FBQTtBRCtvQlIsQ0M1b0JNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZncUNGLENDN3FCTTtFQUNFLHlCQUFBO0FEZ3JCUixDQzdxQk07RUFDRSxvQ0FBQTtBRGdyQlIsQ0M3cUJNO0VBQ0Usb0NBQUE7QURnckJSLENDN3FCTTtFQUNFLHdDQUFBO0FEZ3JCUixDQzdxQk07RUFDRSwyQ0FBQTtBRGdyQlIsQ0M3cUJNO0VBQ0UseUNBQUE7QURnckJSLENDN3FCTTtFQUNFLDBDQUFBO0FEZ3JCUixDQzdxQk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRmlzQ0YsQ0M5c0JNO0VBQ0UseUJBQUE7QURpdEJSLENDOXNCTTtFQUNFLG9DQUFBO0FEaXRCUixDQzlzQk07RUFDRSxvQ0FBQTtBRGl0QlIsQ0M5c0JNO0VBQ0Usd0NBQUE7QURpdEJSLENDOXNCTTtFQUNFLDJDQUFBO0FEaXRCUixDQzlzQk07RUFDRSx5Q0FBQTtBRGl0QlIsQ0M5c0JNO0VBQ0UsMENBQUE7QURpdEJSLENDOXNCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGa3VDRixDQy91Qk07RUFDRSx5QkFBQTtBRGt2QlIsQ0MvdUJNO0VBQ0Usb0NBQUE7QURrdkJSLENDL3VCTTtFQUNFLG9DQUFBO0FEa3ZCUixDQy91Qk07RUFDRSx3Q0FBQTtBRGt2QlIsQ0MvdUJNO0VBQ0UsMkNBQUE7QURrdkJSLENDL3VCTTtFQUNFLHlDQUFBO0FEa3ZCUixDQy91Qk07RUFDRSwwQ0FBQTtBRGt2QlIsQ0MvdUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZtd0NGLENDaHhCTTtFQUNFLHlCQUFBO0FEbXhCUixDQ2h4Qk07RUFDRSxvQ0FBQTtBRG14QlIsQ0NoeEJNO0VBQ0Usb0NBQUE7QURteEJSLENDaHhCTTtFQUNFLHdDQUFBO0FEbXhCUixDQ2h4Qk07RUFDRSwyQ0FBQTtBRG14QlIsQ0NoeEJNO0VBQ0UseUNBQUE7QURteEJSLENDaHhCTTtFQUNFLDBDQUFBO0FEbXhCUixDQ2h4Qk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm95Q0YsQ0NqekJNO0VBQ0UseUJBQUE7QURvekJSLENDanpCTTtFQUNFLG9DQUFBO0FEb3pCUixDQ2p6Qk07RUFDRSxvQ0FBQTtBRG96QlIsQ0NqekJNO0VBQ0Usd0NBQUE7QURvekJSLENDanpCTTtFQUNFLDJDQUFBO0FEb3pCUixDQ2p6Qk07RUFDRSx5Q0FBQTtBRG96QlIsQ0NqekJNO0VBQ0UsMENBQUE7QURvekJSLENDanpCTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGcTBDRixDQ2wxQk07RUFDRSx5QkFBQTtBRHExQlIsQ0NsMUJNO0VBQ0Usb0NBQUE7QURxMUJSLENDbDFCTTtFQUNFLG9DQUFBO0FEcTFCUixDQ2wxQk07RUFDRSx3Q0FBQTtBRHExQlIsQ0NsMUJNO0VBQ0UsMkNBQUE7QURxMUJSLENDbDFCTTtFQUNFLHlDQUFBO0FEcTFCUixDQ2wxQk07RUFDRSwwQ0FBQTtBRHExQlIsQ0NsMUJNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZzMkNGLENDenpDTTtFQUNFLG9DQUFBO0FENHpDUixDQzF6Q1E7O0VBRUUsNkJBQUE7QUQ0ekNWLENDdHpDUTtFQUNFLGdEQUFBO0VBQ0EseUJBQUE7QUR5ekNWLENDdnpDVTtFRzNEUixzREFBQTtBSnEzQ0YsQ0N0ekNVO0VBQ0UseUJBQUE7QUR3ekNaLENDcHpDVTtFQUNFLHlCQUFBO0FEc3pDWixDQy95Q1E7RUFDRSxnREFBQTtFQUNBLHlCQUFBO0FEa3pDVixDQy95Q1U7RUFFRSxzQ0FBQTtBRGd6Q1osQ0M3eUNVOztFQUVFLGdDQUFBO0FEK3lDWixDQzN5Q1k7RUFDRSwrQ0FBQTtBRDZ5Q2QsQ0MxeUNZO0VBQ0UsY0lFRDtBTDB5Q2IsQ0NweUNRO0VBQ0UseUJBQUE7QUR1eUNWLENDbHlDTTtFQUNFLG9DQUFBO0FEcXlDUixDQ2x5Q007RUFDRSw2QkFBQTtBRHF5Q1IsQ0NseUNNO0VBQ0UsZ0NBQUE7QURxeUNSLENDbHlDTTtFQUNFLDhCQUFBO0FEcXlDUixDQ2x5Q007RUFDRSwrQkFBQTtBRHF5Q1IsQ0M5eENROzs7RUFDRSxnQ0FBQTtBRG15Q1YsQ0MzeENVO0VBQ0UsMkNBQUE7RUFDQSx5QkFBQTtBRDh4Q1osQ0N4eENNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM3Q0YsQ0N2eENRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEMHhDVixDQ3h4Q1U7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRHd4Q1osQ0NyeENVO0VBQ0UsbUNBQUE7QUR1eENaLENDcHhDVTtFQUNFLGdCQUFBO0FEc3hDWixDQy93Q1E7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIMjFDVCxDQ2h4Q1U7RUFDRSxjRTVFSDtBSDgxQ1QsQ0Mvd0NVO0VBQ0UsMkNBQUE7QURpeENaLENDOXdDVTtFQUdFLDBDQUFBO0VBQ0EsY0V2Rkg7QUhxMkNULENDM3dDVTtFQUNFLCtTQUFBO0FENndDWixDQ3R3Q1E7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRHl3Q1YsQ0Nud0NZO0VBQ0UseUJBQUE7QURxd0NkLENDbHdDVTtFQUdFLHlCQUFBO0FEa3dDWixDQy92Q1U7RUFDRSxXSTlOSjtBTCs5Q1IsQ0MvdkNVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QURnd0NaLENDenZDUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSG00Q1QsQ0MxdkNVO0VBQ0UsMkNBQUE7RUFDQSxjRTNJSDtBSHU0Q1QsQ0MxdkNVO0VBQ0UsZ0JBQUE7QUQ0dkNaLENDMXZDVTtFQUdFLDBDQUFBO0VBQ0EsY0VwSkg7QUg4NENULENDdnZDVTtFQUNFLCtTQUFBO0FEeXZDWixDQ3R2Q1U7RUFDRSwwQ0FBQTtFQUNBLGNFN0pIO0FIcTVDVCxDQzl1Q1k7O0VBQ0UsNktBQUE7QURrdkNkLENDbnVDVTtFQUNFLHlCRXhMSDtBSDg1Q1QsQ0M1dENjO0VBQ0UsY0VuTVA7QUhrNkNULENDN3RDYztFQUNFLHlCQUFBO0FEK3RDaEIsQ0NudENjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTGloRFIsQ0NwdENnQjtFQUNFLFdJOVRWO0FMb2hEUixDQ2h0Q2M7RUFDRSxjRTlOUDtBSGc3Q1QsQ0M1c0NjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMMmhEUixDQ3RzQ2tCO0VBQ0UsMlRBQUE7QUR3c0NwQixDQzFyQ2tCO0VBQ0UsMlRBQUE7QUQ0ckNwQixDQzFxQ2M7RUFDRSxXSXhYUjtFSnlYUSxvQ0FBQTtFQUNBLHFCRW5SUDtFRm9STyxxREFBQTtBRDZxQ2hCLENDcHFDUTtFQUNFLDJDQUFBO0FEdXFDVixDQ3JxQ1U7RUFDRSx5QkVqU0g7QUh3OENULENDL3BDVTtFQUNFLGdDQUFBO0FEa3FDWixDQ2hxQ1k7O0VBRUUsMEJBQUE7QURrcUNkLENDL3BDWTtFQUNFLG9DQUFBO0FEaXFDZCxDQ2hxQ2M7RUFDRSxnREFBQTtBRGtxQ2hCLENDdnBDWTtFQUVFLGdDQUFBO0FEeXBDZCxDQy9vQ007RUFDRSxpRUFBQTtBRGtwQ1IsQ0M1b0NVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUhvK0NULENDM29DWTs7Ozs7RUFHRSwyREFBQTtBRCtvQ2QsQ0M1b0NVO0VBQ0Usc0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUQ4b0NaLENDNW9DVTtFQUNFLGdDQUFBO0FEOG9DWixDQ3RvQ1U7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEeW9DWixDQy9uQ2M7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FEa29DaEIsQ0MzbkNNO0VBQ0UseUJBQUE7QUQ4bkNSLENDM25DTTtFQUNFLG9DQUFBO0FEOG5DUixDQzNuQ007RUFDRSxvQ0FBQTtBRDhuQ1IsQ0MzbkNNO0VBQ0Usd0NBQUE7QUQ4bkNSLENDM25DTTtFQUNFLDJDQUFBO0FEOG5DUixDQzNuQ007RUFDRSx5Q0FBQTtBRDhuQ1IsQ0MzbkNNO0VBQ0UsMENBQUE7QUQ4bkNSLENDM25DTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGK29ERixDQzVwQ007RUFDRSx5QkFBQTtBRCtwQ1IsQ0M1cENNO0VBQ0Usb0NBQUE7QUQrcENSLENDNXBDTTtFQUNFLG9DQUFBO0FEK3BDUixDQzVwQ007RUFDRSx3Q0FBQTtBRCtwQ1IsQ0M1cENNO0VBQ0UsMkNBQUE7QUQrcENSLENDNXBDTTtFQUNFLHlDQUFBO0FEK3BDUixDQzVwQ007RUFDRSwwQ0FBQTtBRCtwQ1IsQ0M1cENNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZnckRGLENDN3JDTTtFQUNFLHlCQUFBO0FEZ3NDUixDQzdyQ007RUFDRSxvQ0FBQTtBRGdzQ1IsQ0M3ckNNO0VBQ0Usb0NBQUE7QURnc0NSLENDN3JDTTtFQUNFLHdDQUFBO0FEZ3NDUixDQzdyQ007RUFDRSwyQ0FBQTtBRGdzQ1IsQ0M3ckNNO0VBQ0UseUNBQUE7QURnc0NSLENDN3JDTTtFQUNFLDBDQUFBO0FEZ3NDUixDQzdyQ007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRml0REYsQ0M5dENNO0VBQ0UseUJBQUE7QURpdUNSLENDOXRDTTtFQUNFLG9DQUFBO0FEaXVDUixDQzl0Q007RUFDRSxvQ0FBQTtBRGl1Q1IsQ0M5dENNO0VBQ0Usd0NBQUE7QURpdUNSLENDOXRDTTtFQUNFLDJDQUFBO0FEaXVDUixDQzl0Q007RUFDRSx5Q0FBQTtBRGl1Q1IsQ0M5dENNO0VBQ0UsMENBQUE7QURpdUNSLENDOXRDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGlDQUFBO0FGa3ZERixDQy92Q007RUFDRSx5QkFBQTtBRGt3Q1IsQ0MvdkNNO0VBQ0Usb0NBQUE7QURrd0NSLENDL3ZDTTtFQUNFLG9DQUFBO0FEa3dDUixDQy92Q007RUFDRSx3Q0FBQTtBRGt3Q1IsQ0MvdkNNO0VBQ0UsMkNBQUE7QURrd0NSLENDL3ZDTTtFQUNFLHlDQUFBO0FEa3dDUixDQy92Q007RUFDRSwwQ0FBQTtBRGt3Q1IsQ0MvdkNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZteERGLENDaHlDTTtFQUNFLHlCQUFBO0FEbXlDUixDQ2h5Q007RUFDRSxvQ0FBQTtBRG15Q1IsQ0NoeUNNO0VBQ0Usb0NBQUE7QURteUNSLENDaHlDTTtFQUNFLHdDQUFBO0FEbXlDUixDQ2h5Q007RUFDRSwyQ0FBQTtBRG15Q1IsQ0NoeUNNO0VBQ0UseUNBQUE7QURteUNSLENDaHlDTTtFQUNFLDBDQUFBO0FEbXlDUixDQ2h5Q007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm96REYsQ0NqMENNO0VBQ0UseUJBQUE7QURvMENSLENDajBDTTtFQUNFLG9DQUFBO0FEbzBDUixDQ2owQ007RUFDRSxvQ0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0Usd0NBQUE7QURvMENSLENDajBDTTtFQUNFLDJDQUFBO0FEbzBDUixDQ2owQ007RUFDRSx5Q0FBQTtBRG8wQ1IsQ0NqMENNO0VBQ0UsMENBQUE7QURvMENSLENDajBDTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGcTFERixDQ2wyQ007RUFDRSx5QkFBQTtBRHEyQ1IsQ0NsMkNNO0VBQ0Usb0NBQUE7QURxMkNSLENDbDJDTTtFQUNFLG9DQUFBO0FEcTJDUixDQ2wyQ007RUFDRSx3Q0FBQTtBRHEyQ1IsQ0NsMkNNO0VBQ0UsMkNBQUE7QURxMkNSLENDbDJDTTtFQUNFLHlDQUFBO0FEcTJDUixDQ2wyQ007RUFDRSwwQ0FBQTtBRHEyQ1IsQ0NsMkNNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZzM0RGLENDbjRDTTtFQUNFLHlCQUFBO0FEczRDUixDQ240Q007RUFDRSxvQ0FBQTtBRHM0Q1IsQ0NuNENNO0VBQ0Usb0NBQUE7QURzNENSLENDbjRDTTtFQUNFLHdDQUFBO0FEczRDUixDQ240Q007RUFDRSwyQ0FBQTtBRHM0Q1IsQ0NuNENNO0VBQ0UseUNBQUE7QURzNENSLENDbjRDTTtFQUNFLDBDQUFBO0FEczRDUixDQ240Q007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnU1REYsQ0MxMkRNO0VBQ0Usb0NBQUE7QUQ2MkRSLENDMzJEUTs7RUFFRSw2QkFBQTtBRDYyRFYsQ0N2MkRRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBRDAyRFYsQ0N4MkRVO0VHM0RSLHFEQUFBO0FKczZERixDQ3YyRFU7RUFDRSx5QkFBQTtBRHkyRFosQ0NyMkRVO0VBQ0UseUJBQUE7QUR1MkRaLENDaDJEUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7QURtMkRWLENDaDJEVTtFQUVFLHFDQUFBO0FEaTJEWixDQzkxRFU7O0VBRUUsZ0NBQUE7QURnMkRaLENDNTFEWTtFQUNFLDhDQUFBO0FEODFEZCxDQzMxRFk7RUFDRSxjSUVEO0FMMjFEYixDQ3IxRFE7RUFDRSx5QkFBQTtBRHcxRFYsQ0NuMURNO0VBQ0Usb0NBQUE7QURzMURSLENDbjFETTtFQUNFLDZCQUFBO0FEczFEUixDQ24xRE07RUFDRSxnQ0FBQTtBRHMxRFIsQ0NuMURNO0VBQ0UsOEJBQUE7QURzMURSLENDbjFETTtFQUNFLCtCQUFBO0FEczFEUixDQy8wRFE7OztFQUNFLGdDQUFBO0FEbzFEVixDQzUwRFU7RUFDRSwwQ0FBQTtFQUNBLHlCQUFBO0FEKzBEWixDQ3owRE07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGdStERixDQ3gwRFE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUQyMERWLENDejBEVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEeTBEWixDQ3QwRFU7RUFDRSxtQ0FBQTtBRHcwRFosQ0NyMERVO0VBQ0UsZ0JBQUE7QUR1MERaLENDaDBEUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUg0NERULENDajBEVTtFQUNFLGNFNUVIO0FIKzREVCxDQ2gwRFU7RUFDRSwwQ0FBQTtBRGswRFosQ0MvekRVO0VBR0UseUNBQUE7RUFDQSxjRXZGSDtBSHM1RFQsQ0M1ekRVO0VBQ0UsK1NBQUE7QUQ4ekRaLENDdnpEUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEMHpEVixDQ3B6RFk7RUFDRSx5QkFBQTtBRHN6RGQsQ0NuekRVO0VBR0UseUJBQUE7QURtekRaLENDaHpEVTtFQUNFLFdJOU5KO0FMZ2hFUixDQ2h6RFU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGl6RFosQ0MxeURRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIbzdEVCxDQzN5RFU7RUFDRSwwQ0FBQTtFQUNBLGNFM0lIO0FIdzdEVCxDQzN5RFU7RUFDRSxnQkFBQTtBRDZ5RFosQ0MzeURVO0VBR0UseUNBQUE7RUFDQSxjRXBKSDtBSCs3RFQsQ0N4eURVO0VBQ0UsK1NBQUE7QUQweURaLENDdnlEVTtFQUNFLHlDQUFBO0VBQ0EsY0U3Skg7QUhzOERULENDL3hEWTs7RUFDRSx5S0FBQTtBRG15RGQsQ0NweERVO0VBQ0UseUJFeExIO0FIKzhEVCxDQzd3RGM7RUFDRSxjRW5NUDtBSG05RFQsQ0M5d0RjO0VBQ0UseUJBQUE7QURneERoQixDQ3B3RGM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMa2tFUixDQ3J3RGdCO0VBQ0UsV0k5VFY7QUxxa0VSLENDandEYztFQUNFLGNFOU5QO0FIaStEVCxDQzd2RGM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUw0a0VSLENDdnZEa0I7RUFDRSwyVEFBQTtBRHl2RHBCLENDM3VEa0I7RUFDRSwyVEFBQTtBRDZ1RHBCLENDM3REYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG9EQUFBO0FEOHREaEIsQ0NydERRO0VBQ0UsMENBQUE7QUR3dERWLENDdHREVTtFQUNFLHlCRWpTSDtBSHkvRFQsQ0NodERVO0VBQ0UsZ0NBQUE7QURtdERaLENDanREWTs7RUFFRSwwQkFBQTtBRG10RGQsQ0NodERZO0VBQ0Usb0NBQUE7QURrdERkLENDanREYztFQUNFLCtDQUFBO0FEbXREaEIsQ0N4c0RZO0VBRUUsZ0NBQUE7QUQwc0RkLENDaHNETTtFQUNFLGlFQUFBO0FEbXNEUixDQzdyRFU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSHFoRVQsQ0M1ckRZOzs7OztFQUdFLDBEQUFBO0FEZ3NEZCxDQzdyRFU7RUFDRSxxREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRCtyRFosQ0M3ckRVO0VBQ0UsZ0NBQUE7QUQrckRaLENDdnJEVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QUQwckRaLENDaHJEYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QURtckRoQixDQzVxRE07RUFDRSx5QkFBQTtBRCtxRFIsQ0M1cURNO0VBQ0Usb0NBQUE7QUQrcURSLENDNXFETTtFQUNFLG9DQUFBO0FEK3FEUixDQzVxRE07RUFDRSx3Q0FBQTtBRCtxRFIsQ0M1cURNO0VBQ0UsMkNBQUE7QUQrcURSLENDNXFETTtFQUNFLHlDQUFBO0FEK3FEUixDQzVxRE07RUFDRSwwQ0FBQTtBRCtxRFIsQ0M1cURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZnc0VGLENDN3NETTtFQUNFLHlCQUFBO0FEZ3REUixDQzdzRE07RUFDRSxvQ0FBQTtBRGd0RFIsQ0M3c0RNO0VBQ0Usb0NBQUE7QURndERSLENDN3NETTtFQUNFLHdDQUFBO0FEZ3REUixDQzdzRE07RUFDRSwyQ0FBQTtBRGd0RFIsQ0M3c0RNO0VBQ0UseUNBQUE7QURndERSLENDN3NETTtFQUNFLDBDQUFBO0FEZ3REUixDQzdzRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRml1RUYsQ0M5dURNO0VBQ0UseUJBQUE7QURpdkRSLENDOXVETTtFQUNFLG9DQUFBO0FEaXZEUixDQzl1RE07RUFDRSxvQ0FBQTtBRGl2RFIsQ0M5dURNO0VBQ0Usd0NBQUE7QURpdkRSLENDOXVETTtFQUNFLDJDQUFBO0FEaXZEUixDQzl1RE07RUFDRSx5Q0FBQTtBRGl2RFIsQ0M5dURNO0VBQ0UsMENBQUE7QURpdkRSLENDOXVETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGa3dFRixDQy93RE07RUFDRSx5QkFBQTtBRGt4RFIsQ0Mvd0RNO0VBQ0Usb0NBQUE7QURreERSLENDL3dETTtFQUNFLG9DQUFBO0FEa3hEUixDQy93RE07RUFDRSx3Q0FBQTtBRGt4RFIsQ0Mvd0RNO0VBQ0UsMkNBQUE7QURreERSLENDL3dETTtFQUNFLHlDQUFBO0FEa3hEUixDQy93RE07RUFDRSwwQ0FBQTtBRGt4RFIsQ0Mvd0RNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZteUVGLENDaHpETTtFQUNFLHlCQUFBO0FEbXpEUixDQ2h6RE07RUFDRSxvQ0FBQTtBRG16RFIsQ0NoekRNO0VBQ0Usb0NBQUE7QURtekRSLENDaHpETTtFQUNFLHdDQUFBO0FEbXpEUixDQ2h6RE07RUFDRSwyQ0FBQTtBRG16RFIsQ0NoekRNO0VBQ0UseUNBQUE7QURtekRSLENDaHpETTtFQUNFLDBDQUFBO0FEbXpEUixDQ2h6RE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm8wRUYsQ0NqMURNO0VBQ0UseUJBQUE7QURvMURSLENDajFETTtFQUNFLG9DQUFBO0FEbzFEUixDQ2oxRE07RUFDRSxvQ0FBQTtBRG8xRFIsQ0NqMURNO0VBQ0Usd0NBQUE7QURvMURSLENDajFETTtFQUNFLDJDQUFBO0FEbzFEUixDQ2oxRE07RUFDRSx5Q0FBQTtBRG8xRFIsQ0NqMURNO0VBQ0UsMENBQUE7QURvMURSLENDajFETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGcTJFRixDQ2wzRE07RUFDRSx5QkFBQTtBRHEzRFIsQ0NsM0RNO0VBQ0Usb0NBQUE7QURxM0RSLENDbDNETTtFQUNFLG9DQUFBO0FEcTNEUixDQ2wzRE07RUFDRSx3Q0FBQTtBRHEzRFIsQ0NsM0RNO0VBQ0UsMkNBQUE7QURxM0RSLENDbDNETTtFQUNFLHlDQUFBO0FEcTNEUixDQ2wzRE07RUFDRSwwQ0FBQTtBRHEzRFIsQ0NsM0RNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZzNEVGLENDbjVETTtFQUNFLHlCQUFBO0FEczVEUixDQ241RE07RUFDRSxvQ0FBQTtBRHM1RFIsQ0NuNURNO0VBQ0Usb0NBQUE7QURzNURSLENDbjVETTtFQUNFLHdDQUFBO0FEczVEUixDQ241RE07RUFDRSwyQ0FBQTtBRHM1RFIsQ0NuNURNO0VBQ0UseUNBQUE7QURzNURSLENDbjVETTtFQUNFLDBDQUFBO0FEczVEUixDQ241RE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRnU2RUYsQ0NwN0RNO0VBQ0UseUJBQUE7QUR1N0RSLENDcDdETTtFQUNFLG9DQUFBO0FEdTdEUixDQ3A3RE07RUFDRSxvQ0FBQTtBRHU3RFIsQ0NwN0RNO0VBQ0Usd0NBQUE7QUR1N0RSLENDcDdETTtFQUNFLDJDQUFBO0FEdTdEUixDQ3A3RE07RUFDRSx5Q0FBQTtBRHU3RFIsQ0NwN0RNO0VBQ0UsMENBQUE7QUR1N0RSLENDcDdETTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGdzhFRixDQ3I5RE07RUFDRSx5QkFBQTtBRHc5RFIsQ0NyOURNO0VBQ0Usb0NBQUE7QUR3OURSLENDcjlETTtFQUNFLG9DQUFBO0FEdzlEUixDQ3I5RE07RUFDRSx3Q0FBQTtBRHc5RFIsQ0NyOURNO0VBQ0UsMkNBQUE7QUR3OURSLENDcjlETTtFQUNFLHlDQUFBO0FEdzlEUixDQ3I5RE07RUFDRSwwQ0FBQTtBRHc5RFIsQ0NyOURNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZ5K0VGLENDdC9ETTtFQUNFLHlCQUFBO0FEeS9EUixDQ3QvRE07RUFDRSxvQ0FBQTtBRHkvRFIsQ0N0L0RNO0VBQ0Usb0NBQUE7QUR5L0RSLENDdC9ETTtFQUNFLHdDQUFBO0FEeS9EUixDQ3QvRE07RUFDRSwyQ0FBQTtBRHkvRFIsQ0N0L0RNO0VBQ0UseUNBQUE7QUR5L0RSLENDdC9ETTtFQUNFLDBDQUFBO0FEeS9EUixDQ3QvRE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRjBnRkYsQ0N2aEVNO0VBQ0UseUJBQUE7QUQwaEVSLENDdmhFTTtFQUNFLG9DQUFBO0FEMGhFUixDQ3ZoRU07RUFDRSxvQ0FBQTtBRDBoRVIsQ0N2aEVNO0VBQ0Usd0NBQUE7QUQwaEVSLENDdmhFTTtFQUNFLDJDQUFBO0FEMGhFUixDQ3ZoRU07RUFDRSx5Q0FBQTtBRDBoRVIsQ0N2aEVNO0VBQ0UsMENBQUE7QUQwaEVSLENDdmhFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMmlGRixDQ3hqRU07RUFDRSx5QkFBQTtBRDJqRVIsQ0N4akVNO0VBQ0Usb0NBQUE7QUQyakVSLENDeGpFTTtFQUNFLG9DQUFBO0FEMmpFUixDQ3hqRU07RUFDRSx3Q0FBQTtBRDJqRVIsQ0N4akVNO0VBQ0UsMkNBQUE7QUQyakVSLENDeGpFTTtFQUNFLHlDQUFBO0FEMmpFUixDQ3hqRU07RUFDRSwwQ0FBQTtBRDJqRVIsQ0N4akVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY0a0ZGLENDL2hGTTtFQUNFLG9DQUFBO0FEa2lGUixDQ2hpRlE7O0VBRUUsNkJBQUE7QURraUZWLENDNWhGUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QUQraEZWLENDN2hGVTtFRzNEUixvREFBQTtBSjJsRkYsQ0M1aEZVO0VBQ0UseUJBQUE7QUQ4aEZaLENDMWhGVTtFQUNFLHlCQUFBO0FENGhGWixDQ3JoRlE7RUFDRSw4Q0FBQTtFQUNBLHlCQUFBO0FEd2hGVixDQ3JoRlU7RUFFRSxvQ0FBQTtBRHNoRlosQ0NuaEZVOztFQUVFLGdDQUFBO0FEcWhGWixDQ2poRlk7RUFDRSw2Q0FBQTtBRG1oRmQsQ0NoaEZZO0VBQ0UsY0lFRDtBTGdoRmIsQ0MxZ0ZRO0VBQ0UseUJBQUE7QUQ2Z0ZWLENDeGdGTTtFQUNFLG9DQUFBO0FEMmdGUixDQ3hnRk07RUFDRSw2QkFBQTtBRDJnRlIsQ0N4Z0ZNO0VBQ0UsZ0NBQUE7QUQyZ0ZSLENDeGdGTTtFQUNFLDhCQUFBO0FEMmdGUixDQ3hnRk07RUFDRSwrQkFBQTtBRDJnRlIsQ0NwZ0ZROzs7RUFDRSxnQ0FBQTtBRHlnRlYsQ0NqZ0ZVO0VBQ0UseUNBQUE7RUFDQSx5QkFBQTtBRG9nRlosQ0M5L0VNO0VDMUpKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjRwRkYsQ0M3L0VRO0VBQ0UsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FEZ2dGVixDQzkvRVU7RUFHRSxXSTlKSjtFSitKSSxvQ0FBQTtBRDgvRVosQ0MzL0VVO0VBQ0UsbUNBQUE7QUQ2L0VaLENDMS9FVTtFQUNFLGdCQUFBO0FENC9FWixDQ3IvRVE7RUFDRSw2QkFBQTtFQUNBLGNFekVEO0FIaWtGVCxDQ3QvRVU7RUFDRSxjRTVFSDtBSG9rRlQsQ0NyL0VVO0VBQ0UseUNBQUE7QUR1L0VaLENDcC9FVTtFQUdFLHdDQUFBO0VBQ0EsY0V2Rkg7QUgya0ZULENDai9FVTtFQUNFLCtTQUFBO0FEbS9FWixDQzUrRVE7RUFDRSx5QkVuR0Q7RUZvR0Msa0RBQUE7RUFDQSxXSTVNRjtFSjZNRSx5QkFBQTtBRCsrRVYsQ0N6K0VZO0VBQ0UseUJBQUE7QUQyK0VkLENDeCtFVTtFQUdFLHlCQUFBO0FEdytFWixDQ3IrRVU7RUFDRSxXSTlOSjtBTHFzRlIsQ0NyK0VVO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QURzK0VaLENDLzlFUTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxjRXZJRDtBSHltRlQsQ0NoK0VVO0VBQ0UseUNBQUE7RUFDQSxjRTNJSDtBSDZtRlQsQ0NoK0VVO0VBQ0UsZ0JBQUE7QURrK0VaLENDaCtFVTtFQUdFLHdDQUFBO0VBQ0EsY0VwSkg7QUhvbkZULENDNzlFVTtFQUNFLCtTQUFBO0FEKzlFWixDQzU5RVU7RUFDRSx3Q0FBQTtFQUNBLGNFN0pIO0FIMm5GVCxDQ3A5RVk7O0VBQ0UscUtBQUE7QUR3OUVkLENDejhFVTtFQUNFLHlCRXhMSDtBSG9vRlQsQ0NsOEVjO0VBQ0UsY0VuTVA7QUh3b0ZULENDbjhFYztFQUNFLHlCQUFBO0FEcThFaEIsQ0N6N0VjO0VBQ0UsOEJBQUE7RUFDQSxXSTNUUjtBTHV2RlIsQ0MxN0VnQjtFQUNFLFdJOVRWO0FMMHZGUixDQ3Q3RWM7RUFDRSxjRTlOUDtBSHNwRlQsQ0NsN0VjO0VBQ0UsbUJFck9QO0VGc09PLFdJN1VSO0FMaXdGUixDQzU2RWtCO0VBQ0UsMlRBQUE7QUQ4NkVwQixDQ2g2RWtCO0VBQ0UsMlRBQUE7QURrNkVwQixDQ2g1RWM7RUFDRSxXSXhYUjtFSnlYUSxvQ0FBQTtFQUNBLHFCRW5SUDtFRm9STyxtREFBQTtBRG01RWhCLENDMTRFUTtFQUNFLHlDQUFBO0FENjRFVixDQzM0RVU7RUFDRSx5QkVqU0g7QUg4cUZULENDcjRFVTtFQUNFLGdDQUFBO0FEdzRFWixDQ3Q0RVk7O0VBRUUsMEJBQUE7QUR3NEVkLENDcjRFWTtFQUNFLG9DQUFBO0FEdTRFZCxDQ3Q0RWM7RUFDRSw4Q0FBQTtBRHc0RWhCLENDNzNFWTtFQUVFLGdDQUFBO0FEKzNFZCxDQ3IzRU07RUFDRSxpRUFBQTtBRHczRVIsQ0NsM0VVOztFQUVFLHFCRXBWSDtFRnFWRyx5QkVyVkg7QUgwc0ZULENDajNFWTs7Ozs7RUFHRSx5REFBQTtBRHEzRWQsQ0NsM0VVO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QURvM0VaLENDbDNFVTtFQUNFLGdDQUFBO0FEbzNFWixDQzUyRVU7RUFDRSxvQ0FBQTtFQUNBLFdJdGRKO0VKdWRJLDZCQUFBO0FEKzJFWixDQ3IyRWM7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0FEdzJFaEIsQ0NqMkVNO0VBQ0UseUJBQUE7QURvMkVSLENDajJFTTtFQUNFLG9DQUFBO0FEbzJFUixDQ2oyRU07RUFDRSxvQ0FBQTtBRG8yRVIsQ0NqMkVNO0VBQ0Usd0NBQUE7QURvMkVSLENDajJFTTtFQUNFLDJDQUFBO0FEbzJFUixDQ2oyRU07RUFDRSx5Q0FBQTtBRG8yRVIsQ0NqMkVNO0VBQ0UsMENBQUE7QURvMkVSLENDajJFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGcTNGRixDQ2w0RU07RUFDRSx5QkFBQTtBRHE0RVIsQ0NsNEVNO0VBQ0Usb0NBQUE7QURxNEVSLENDbDRFTTtFQUNFLG9DQUFBO0FEcTRFUixDQ2w0RU07RUFDRSx3Q0FBQTtBRHE0RVIsQ0NsNEVNO0VBQ0UsMkNBQUE7QURxNEVSLENDbDRFTTtFQUNFLHlDQUFBO0FEcTRFUixDQ2w0RU07RUFDRSwwQ0FBQTtBRHE0RVIsQ0NsNEVNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZzNUZGLENDbjZFTTtFQUNFLHlCQUFBO0FEczZFUixDQ242RU07RUFDRSxvQ0FBQTtBRHM2RVIsQ0NuNkVNO0VBQ0Usb0NBQUE7QURzNkVSLENDbjZFTTtFQUNFLHdDQUFBO0FEczZFUixDQ242RU07RUFDRSwyQ0FBQTtBRHM2RVIsQ0NuNkVNO0VBQ0UseUNBQUE7QURzNkVSLENDbjZFTTtFQUNFLDBDQUFBO0FEczZFUixDQ242RU07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRnU3RkYsQ0NwOEVNO0VBQ0UseUJBQUE7QUR1OEVSLENDcDhFTTtFQUNFLG9DQUFBO0FEdThFUixDQ3A4RU07RUFDRSxvQ0FBQTtBRHU4RVIsQ0NwOEVNO0VBQ0Usd0NBQUE7QUR1OEVSLENDcDhFTTtFQUNFLDJDQUFBO0FEdThFUixDQ3A4RU07RUFDRSx5Q0FBQTtBRHU4RVIsQ0NwOEVNO0VBQ0UsMENBQUE7QUR1OEVSLENDcDhFTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGdzlGRixDQ3IrRU07RUFDRSx5QkFBQTtBRHcrRVIsQ0NyK0VNO0VBQ0Usb0NBQUE7QUR3K0VSLENDcitFTTtFQUNFLG9DQUFBO0FEdytFUixDQ3IrRU07RUFDRSx3Q0FBQTtBRHcrRVIsQ0NyK0VNO0VBQ0UsMkNBQUE7QUR3K0VSLENDcitFTTtFQUNFLHlDQUFBO0FEdytFUixDQ3IrRU07RUFDRSwwQ0FBQTtBRHcrRVIsQ0NyK0VNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZ5L0ZGLENDdGdGTTtFQUNFLHlCQUFBO0FEeWdGUixDQ3RnRk07RUFDRSxvQ0FBQTtBRHlnRlIsQ0N0Z0ZNO0VBQ0Usb0NBQUE7QUR5Z0ZSLENDdGdGTTtFQUNFLHdDQUFBO0FEeWdGUixDQ3RnRk07RUFDRSwyQ0FBQTtBRHlnRlIsQ0N0Z0ZNO0VBQ0UseUNBQUE7QUR5Z0ZSLENDdGdGTTtFQUNFLDBDQUFBO0FEeWdGUixDQ3RnRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjBoR0YsQ0N2aUZNO0VBQ0UseUJBQUE7QUQwaUZSLENDdmlGTTtFQUNFLG9DQUFBO0FEMGlGUixDQ3ZpRk07RUFDRSxvQ0FBQTtBRDBpRlIsQ0N2aUZNO0VBQ0Usd0NBQUE7QUQwaUZSLENDdmlGTTtFQUNFLDJDQUFBO0FEMGlGUixDQ3ZpRk07RUFDRSx5Q0FBQTtBRDBpRlIsQ0N2aUZNO0VBQ0UsMENBQUE7QUQwaUZSLENDdmlGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGMmpHRixDQ3hrRk07RUFDRSx5QkFBQTtBRDJrRlIsQ0N4a0ZNO0VBQ0Usb0NBQUE7QUQya0ZSLENDeGtGTTtFQUNFLG9DQUFBO0FEMmtGUixDQ3hrRk07RUFDRSx3Q0FBQTtBRDJrRlIsQ0N4a0ZNO0VBQ0UsMkNBQUE7QUQya0ZSLENDeGtGTTtFQUNFLHlDQUFBO0FEMmtGUixDQ3hrRk07RUFDRSwwQ0FBQTtBRDJrRlIsQ0N4a0ZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUY0bEdGLENDem1GTTtFQUNFLHlCQUFBO0FENG1GUixDQ3ptRk07RUFDRSxvQ0FBQTtBRDRtRlIsQ0N6bUZNO0VBQ0Usb0NBQUE7QUQ0bUZSLENDem1GTTtFQUNFLHdDQUFBO0FENG1GUixDQ3ptRk07RUFDRSwyQ0FBQTtBRDRtRlIsQ0N6bUZNO0VBQ0UseUNBQUE7QUQ0bUZSLENDem1GTTtFQUNFLDBDQUFBO0FENG1GUixDQ3ptRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRjZuR0YsQ0Mxb0ZNO0VBQ0UseUJBQUE7QUQ2b0ZSLENDMW9GTTtFQUNFLG9DQUFBO0FENm9GUixDQzFvRk07RUFDRSxvQ0FBQTtBRDZvRlIsQ0Mxb0ZNO0VBQ0Usd0NBQUE7QUQ2b0ZSLENDMW9GTTtFQUNFLDJDQUFBO0FENm9GUixDQzFvRk07RUFDRSx5Q0FBQTtBRDZvRlIsQ0Mxb0ZNO0VBQ0UsMENBQUE7QUQ2b0ZSLENDMW9GTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGOHBHRixDQzNxRk07RUFDRSx5QkFBQTtBRDhxRlIsQ0MzcUZNO0VBQ0Usb0NBQUE7QUQ4cUZSLENDM3FGTTtFQUNFLG9DQUFBO0FEOHFGUixDQzNxRk07RUFDRSx3Q0FBQTtBRDhxRlIsQ0MzcUZNO0VBQ0UsMkNBQUE7QUQ4cUZSLENDM3FGTTtFQUNFLHlDQUFBO0FEOHFGUixDQzNxRk07RUFDRSwwQ0FBQTtBRDhxRlIsQ0MzcUZNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrckdGLENDNXNGTTtFQUNFLHlCQUFBO0FEK3NGUixDQzVzRk07RUFDRSxvQ0FBQTtBRCtzRlIsQ0M1c0ZNO0VBQ0Usb0NBQUE7QUQrc0ZSLENDNXNGTTtFQUNFLHdDQUFBO0FEK3NGUixDQzVzRk07RUFDRSwyQ0FBQTtBRCtzRlIsQ0M1c0ZNO0VBQ0UseUNBQUE7QUQrc0ZSLENDNXNGTTtFQUNFLDBDQUFBO0FEK3NGUixDQzVzRk07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmd1R0YsQ0M3dUZNO0VBQ0UseUJBQUE7QURndkZSLENDN3VGTTtFQUNFLG9DQUFBO0FEZ3ZGUixDQzd1Rk07RUFDRSxvQ0FBQTtBRGd2RlIsQ0M3dUZNO0VBQ0Usd0NBQUE7QURndkZSLENDN3VGTTtFQUNFLDJDQUFBO0FEZ3ZGUixDQzd1Rk07RUFDRSx5Q0FBQTtBRGd2RlIsQ0M3dUZNO0VBQ0UsMENBQUE7QURndkZSLENDN3VGTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGaXdHRixDQ3B0R007RUFDRSxvQ0FBQTtBRHV0R1IsQ0NydEdROztFQUVFLDZCQUFBO0FEdXRHVixDQ2p0R1E7RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0FEb3RHVixDQ2x0R1U7RUczRFIscURBQUE7QUpneEdGLENDanRHVTtFQUNFLHlCQUFBO0FEbXRHWixDQy9zR1U7RUFDRSx5QkFBQTtBRGl0R1osQ0Mxc0dRO0VBQ0UsK0NBQUE7RUFDQSx5QkFBQTtBRDZzR1YsQ0Mxc0dVO0VBRUUscUNBQUE7QUQyc0daLENDeHNHVTs7RUFFRSxnQ0FBQTtBRDBzR1osQ0N0c0dZO0VBQ0UsOENBQUE7QUR3c0dkLENDcnNHWTtFQUNFLGNJRUQ7QUxxc0diLENDL3JHUTtFQUNFLHlCQUFBO0FEa3NHVixDQzdyR007RUFDRSxvQ0FBQTtBRGdzR1IsQ0M3ckdNO0VBQ0UsNkJBQUE7QURnc0dSLENDN3JHTTtFQUNFLGdDQUFBO0FEZ3NHUixDQzdyR007RUFDRSw4QkFBQTtBRGdzR1IsQ0M3ckdNO0VBQ0UsK0JBQUE7QURnc0dSLENDenJHUTs7O0VBQ0UsZ0NBQUE7QUQ4ckdWLENDdHJHVTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7QUR5ckdaLENDbnJHTTtFQzFKSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsbUNBQUE7QUZpMUdGLENDbHJHUTtFQUNFLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBRHFyR1YsQ0NuckdVO0VBR0UsV0k5Sko7RUorSkksb0NBQUE7QURtckdaLENDaHJHVTtFQUNFLG1DQUFBO0FEa3JHWixDQy9xR1U7RUFDRSxnQkFBQTtBRGlyR1osQ0MxcUdRO0VBQ0UsNkJBQUE7RUFDQSxjRXpFRDtBSHN2R1QsQ0MzcUdVO0VBQ0UsY0U1RUg7QUh5dkdULENDMXFHVTtFQUNFLDBDQUFBO0FENHFHWixDQ3pxR1U7RUFHRSx5Q0FBQTtFQUNBLGNFdkZIO0FIZ3dHVCxDQ3RxR1U7RUFDRSwrU0FBQTtBRHdxR1osQ0NqcUdRO0VBQ0UseUJFbkdEO0VGb0dDLGtEQUFBO0VBQ0EsV0k1TUY7RUo2TUUseUJBQUE7QURvcUdWLENDOXBHWTtFQUNFLHlCQUFBO0FEZ3FHZCxDQzdwR1U7RUFHRSx5QkFBQTtBRDZwR1osQ0MxcEdVO0VBQ0UsV0k5Tko7QUwwM0dSLENDMXBHVTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FEMnBHWixDQ3BwR1E7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0V2SUQ7QUg4eEdULENDcnBHVTtFQUNFLDBDQUFBO0VBQ0EsY0UzSUg7QUhreUdULENDcnBHVTtFQUNFLGdCQUFBO0FEdXBHWixDQ3JwR1U7RUFHRSx5Q0FBQTtFQUNBLGNFcEpIO0FIeXlHVCxDQ2xwR1U7RUFDRSwrU0FBQTtBRG9wR1osQ0NqcEdVO0VBQ0UseUNBQUE7RUFDQSxjRTdKSDtBSGd6R1QsQ0N6b0dZOztFQUNFLHlLQUFBO0FENm9HZCxDQzluR1U7RUFDRSx5QkV4TEg7QUh5ekdULENDdm5HYztFQUNFLGNFbk1QO0FINnpHVCxDQ3huR2M7RUFDRSx5QkFBQTtBRDBuR2hCLENDOW1HYztFQUNFLDhCQUFBO0VBQ0EsV0kzVFI7QUw0NkdSLENDL21HZ0I7RUFDRSxXSTlUVjtBTCs2R1IsQ0MzbUdjO0VBQ0UsY0U5TlA7QUgyMEdULENDdm1HYztFQUNFLG1CRXJPUDtFRnNPTyxXSTdVUjtBTHM3R1IsQ0NqbUdrQjtFQUNFLDJUQUFBO0FEbW1HcEIsQ0NybEdrQjtFQUNFLDJUQUFBO0FEdWxHcEIsQ0Nya0djO0VBQ0UsV0l4WFI7RUp5WFEsb0NBQUE7RUFDQSxxQkVuUlA7RUZvUk8sb0RBQUE7QUR3a0doQixDQy9qR1E7RUFDRSwwQ0FBQTtBRGtrR1YsQ0Noa0dVO0VBQ0UseUJFalNIO0FIbTJHVCxDQzFqR1U7RUFDRSxnQ0FBQTtBRDZqR1osQ0MzakdZOztFQUVFLDBCQUFBO0FENmpHZCxDQzFqR1k7RUFDRSxvQ0FBQTtBRDRqR2QsQ0MzakdjO0VBQ0UsK0NBQUE7QUQ2akdoQixDQ2xqR1k7RUFFRSxnQ0FBQTtBRG9qR2QsQ0MxaUdNO0VBQ0UsaUVBQUE7QUQ2aUdSLENDdmlHVTs7RUFFRSxxQkVwVkg7RUZxVkcseUJFclZIO0FIKzNHVCxDQ3RpR1k7Ozs7O0VBR0UsMERBQUE7QUQwaUdkLENDdmlHVTtFQUNFLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FEeWlHWixDQ3ZpR1U7RUFDRSxnQ0FBQTtBRHlpR1osQ0NqaUdVO0VBQ0Usb0NBQUE7RUFDQSxXSXRkSjtFSnVkSSw2QkFBQTtBRG9pR1osQ0MxaEdjO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtBRDZoR2hCLENDdGhHTTtFQUNFLHlCQUFBO0FEeWhHUixDQ3RoR007RUFDRSxvQ0FBQTtBRHloR1IsQ0N0aEdNO0VBQ0Usb0NBQUE7QUR5aEdSLENDdGhHTTtFQUNFLHdDQUFBO0FEeWhHUixDQ3RoR007RUFDRSwyQ0FBQTtBRHloR1IsQ0N0aEdNO0VBQ0UseUNBQUE7QUR5aEdSLENDdGhHTTtFQUNFLDBDQUFBO0FEeWhHUixDQ3RoR007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixtQ0FBQTtBRjBpSEYsQ0N2akdNO0VBQ0UseUJBQUE7QUQwakdSLENDdmpHTTtFQUNFLG9DQUFBO0FEMGpHUixDQ3ZqR007RUFDRSxvQ0FBQTtBRDBqR1IsQ0N2akdNO0VBQ0Usd0NBQUE7QUQwakdSLENDdmpHTTtFQUNFLDJDQUFBO0FEMGpHUixDQ3ZqR007RUFDRSx5Q0FBQTtBRDBqR1IsQ0N2akdNO0VBQ0UsMENBQUE7QUQwakdSLENDdmpHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG1DQUFBO0FGMmtIRixDQ3hsR007RUFDRSx5QkFBQTtBRDJsR1IsQ0N4bEdNO0VBQ0Usb0NBQUE7QUQybEdSLENDeGxHTTtFQUNFLG9DQUFBO0FEMmxHUixDQ3hsR007RUFDRSx3Q0FBQTtBRDJsR1IsQ0N4bEdNO0VBQ0UsMkNBQUE7QUQybEdSLENDeGxHTTtFQUNFLHlDQUFBO0FEMmxHUixDQ3hsR007RUFDRSwwQ0FBQTtBRDJsR1IsQ0N4bEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUY0bUhGLENDem5HTTtFQUNFLHlCQUFBO0FENG5HUixDQ3puR007RUFDRSxvQ0FBQTtBRDRuR1IsQ0N6bkdNO0VBQ0Usb0NBQUE7QUQ0bkdSLENDem5HTTtFQUNFLHdDQUFBO0FENG5HUixDQ3puR007RUFDRSwyQ0FBQTtBRDRuR1IsQ0N6bkdNO0VBQ0UseUNBQUE7QUQ0bkdSLENDem5HTTtFQUNFLDBDQUFBO0FENG5HUixDQ3puR007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRjZvSEYsQ0MxcEdNO0VBQ0UseUJBQUE7QUQ2cEdSLENDMXBHTTtFQUNFLG9DQUFBO0FENnBHUixDQzFwR007RUFDRSxvQ0FBQTtBRDZwR1IsQ0MxcEdNO0VBQ0Usd0NBQUE7QUQ2cEdSLENDMXBHTTtFQUNFLDJDQUFBO0FENnBHUixDQzFwR007RUFDRSx5Q0FBQTtBRDZwR1IsQ0MxcEdNO0VBQ0UsMENBQUE7QUQ2cEdSLENDMXBHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGOHFIRixDQzNyR007RUFDRSx5QkFBQTtBRDhyR1IsQ0MzckdNO0VBQ0Usb0NBQUE7QUQ4ckdSLENDM3JHTTtFQUNFLG9DQUFBO0FEOHJHUixDQzNyR007RUFDRSx3Q0FBQTtBRDhyR1IsQ0MzckdNO0VBQ0UsMkNBQUE7QUQ4ckdSLENDM3JHTTtFQUNFLHlDQUFBO0FEOHJHUixDQzNyR007RUFDRSwwQ0FBQTtBRDhyR1IsQ0MzckdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUYrc0hGLENDNXRHTTtFQUNFLHlCQUFBO0FEK3RHUixDQzV0R007RUFDRSxvQ0FBQTtBRCt0R1IsQ0M1dEdNO0VBQ0Usb0NBQUE7QUQrdEdSLENDNXRHTTtFQUNFLHdDQUFBO0FEK3RHUixDQzV0R007RUFDRSwyQ0FBQTtBRCt0R1IsQ0M1dEdNO0VBQ0UseUNBQUE7QUQrdEdSLENDNXRHTTtFQUNFLDBDQUFBO0FEK3RHUixDQzV0R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRmd2SEYsQ0M3dkdNO0VBQ0UseUJBQUE7QURnd0dSLENDN3ZHTTtFQUNFLG9DQUFBO0FEZ3dHUixDQzd2R007RUFDRSxvQ0FBQTtBRGd3R1IsQ0M3dkdNO0VBQ0Usd0NBQUE7QURnd0dSLENDN3ZHTTtFQUNFLDJDQUFBO0FEZ3dHUixDQzd2R007RUFDRSx5Q0FBQTtBRGd3R1IsQ0M3dkdNO0VBQ0UsMENBQUE7QURnd0dSLENDN3ZHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGaXhIRixDQzl4R007RUFDRSx5QkFBQTtBRGl5R1IsQ0M5eEdNO0VBQ0Usb0NBQUE7QURpeUdSLENDOXhHTTtFQUNFLG9DQUFBO0FEaXlHUixDQzl4R007RUFDRSx3Q0FBQTtBRGl5R1IsQ0M5eEdNO0VBQ0UsMkNBQUE7QURpeUdSLENDOXhHTTtFQUNFLHlDQUFBO0FEaXlHUixDQzl4R007RUFDRSwwQ0FBQTtBRGl5R1IsQ0M5eEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZrekhGLENDL3pHTTtFQUNFLHlCQUFBO0FEazBHUixDQy96R007RUFDRSxvQ0FBQTtBRGswR1IsQ0MvekdNO0VBQ0Usb0NBQUE7QURrMEdSLENDL3pHTTtFQUNFLHdDQUFBO0FEazBHUixDQy96R007RUFDRSwyQ0FBQTtBRGswR1IsQ0MvekdNO0VBQ0UseUNBQUE7QURrMEdSLENDL3pHTTtFQUNFLDBDQUFBO0FEazBHUixDQy96R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm0xSEYsQ0NoMkdNO0VBQ0UseUJBQUE7QURtMkdSLENDaDJHTTtFQUNFLG9DQUFBO0FEbTJHUixDQ2gyR007RUFDRSxvQ0FBQTtBRG0yR1IsQ0NoMkdNO0VBQ0Usd0NBQUE7QURtMkdSLENDaDJHTTtFQUNFLDJDQUFBO0FEbTJHUixDQ2gyR007RUFDRSx5Q0FBQTtBRG0yR1IsQ0NoMkdNO0VBQ0UsMENBQUE7QURtMkdSLENDaDJHTTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbzNIRixDQ2o0R007RUFDRSx5QkFBQTtBRG80R1IsQ0NqNEdNO0VBQ0Usb0NBQUE7QURvNEdSLENDajRHTTtFQUNFLG9DQUFBO0FEbzRHUixDQ2o0R007RUFDRSx3Q0FBQTtBRG80R1IsQ0NqNEdNO0VBQ0UsMkNBQUE7QURvNEdSLENDajRHTTtFQUNFLHlDQUFBO0FEbzRHUixDQ2o0R007RUFDRSwwQ0FBQTtBRG80R1IsQ0NqNEdNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxNUhGLENDbDZHTTtFQUNFLHlCQUFBO0FEcTZHUixDQ2w2R007RUFDRSxvQ0FBQTtBRHE2R1IsQ0NsNkdNO0VBQ0Usb0NBQUE7QURxNkdSLENDbDZHTTtFQUNFLHdDQUFBO0FEcTZHUixDQ2w2R007RUFDRSwyQ0FBQTtBRHE2R1IsQ0NsNkdNO0VBQ0UseUNBQUE7QURxNkdSLENDbDZHTTtFQUNFLDBDQUFBO0FEcTZHUixDQ2w2R007RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM3SEYsQ0N6NEhNO0VBQ0Usb0NBQUE7QUQ0NEhSLENDMTRIUTs7RUFFRSw2QkFBQTtBRDQ0SFYsQ0N0NEhRO0VBQ0UsOENBQUE7RUFDQSx5QkFBQTtBRHk0SFYsQ0N2NEhVO0VHM0RSLG9EQUFBO0FKcThIRixDQ3Q0SFU7RUFDRSx5QkFBQTtBRHc0SFosQ0NwNEhVO0VBQ0UseUJBQUE7QURzNEhaLENDLzNIUTtFQUNFLDhDQUFBO0VBQ0EseUJBQUE7QURrNEhWLENDLzNIVTtFQUVFLG9DQUFBO0FEZzRIWixDQzczSFU7O0VBRUUsZ0NBQUE7QUQrM0haLENDMzNIWTtFQUNFLDZDQUFBO0FENjNIZCxDQzEzSFk7RUFDRSxjSUVEO0FMMDNIYixDQ3AzSFE7RUFDRSx5QkFBQTtBRHUzSFYsQ0NsM0hNO0VBQ0Usb0NBQUE7QURxM0hSLENDbDNITTtFQUNFLDZCQUFBO0FEcTNIUixDQ2wzSE07RUFDRSxnQ0FBQTtBRHEzSFIsQ0NsM0hNO0VBQ0UsOEJBQUE7QURxM0hSLENDbDNITTtFQUNFLCtCQUFBO0FEcTNIUixDQzkySFE7OztFQUNFLGdDQUFBO0FEbTNIVixDQzMySFU7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FEODJIWixDQ3gySE07RUMxSkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGc2dJRixDQ3YySFE7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUQwMkhWLENDeDJIVTtFQUdFLFdJOUpKO0VKK0pJLG9DQUFBO0FEdzJIWixDQ3IySFU7RUFDRSxtQ0FBQTtBRHUySFosQ0NwMkhVO0VBQ0UsZ0JBQUE7QURzMkhaLENDLzFIUTtFQUNFLDZCQUFBO0VBQ0EsY0V6RUQ7QUgyNkhULENDaDJIVTtFQUNFLGNFNUVIO0FIODZIVCxDQy8xSFU7RUFDRSx5Q0FBQTtBRGkySFosQ0M5MUhVO0VBR0Usd0NBQUE7RUFDQSxjRXZGSDtBSHE3SFQsQ0MzMUhVO0VBQ0UsK1NBQUE7QUQ2MUhaLENDdDFIUTtFQUNFLHlCRW5HRDtFRm9HQyxrREFBQTtFQUNBLFdJNU1GO0VKNk1FLHlCQUFBO0FEeTFIVixDQ24xSFk7RUFDRSx5QkFBQTtBRHExSGQsQ0NsMUhVO0VBR0UseUJBQUE7QURrMUhaLENDLzBIVTtFQUNFLFdJOU5KO0FMK2lJUixDQy8wSFU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBRGcxSFosQ0N6MEhRO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLGNFdklEO0FIbTlIVCxDQzEwSFU7RUFDRSx5Q0FBQTtFQUNBLGNFM0lIO0FIdTlIVCxDQzEwSFU7RUFDRSxnQkFBQTtBRDQwSFosQ0MxMEhVO0VBR0Usd0NBQUE7RUFDQSxjRXBKSDtBSDg5SFQsQ0N2MEhVO0VBQ0UsK1NBQUE7QUR5MEhaLENDdDBIVTtFQUNFLHdDQUFBO0VBQ0EsY0U3Skg7QUhxK0hULENDOXpIWTs7RUFDRSxxS0FBQTtBRGswSGQsQ0NuekhVO0VBQ0UseUJFeExIO0FIOCtIVCxDQzV5SGM7RUFDRSxjRW5NUDtBSGsvSFQsQ0M3eUhjO0VBQ0UseUJBQUE7QUQreUhoQixDQ255SGM7RUFDRSw4QkFBQTtFQUNBLFdJM1RSO0FMaW1JUixDQ3B5SGdCO0VBQ0UsV0k5VFY7QUxvbUlSLENDaHlIYztFQUNFLGNFOU5QO0FIZ2dJVCxDQzV4SGM7RUFDRSxtQkVyT1A7RUZzT08sV0k3VVI7QUwybUlSLENDdHhIa0I7RUFDRSwyVEFBQTtBRHd4SHBCLENDMXdIa0I7RUFDRSwyVEFBQTtBRDR3SHBCLENDMXZIYztFQUNFLFdJeFhSO0VKeVhRLG9DQUFBO0VBQ0EscUJFblJQO0VGb1JPLG1EQUFBO0FENnZIaEIsQ0NwdkhRO0VBQ0UseUNBQUE7QUR1dkhWLENDcnZIVTtFQUNFLHlCRWpTSDtBSHdoSVQsQ0MvdUhVO0VBQ0UsZ0NBQUE7QURrdkhaLENDaHZIWTs7RUFFRSwwQkFBQTtBRGt2SGQsQ0MvdUhZO0VBQ0Usb0NBQUE7QURpdkhkLENDaHZIYztFQUNFLDhDQUFBO0FEa3ZIaEIsQ0N2dUhZO0VBRUUsZ0NBQUE7QUR5dUhkLENDL3RITTtFQUNFLGlFQUFBO0FEa3VIUixDQzV0SFU7O0VBRUUscUJFcFZIO0VGcVZHLHlCRXJWSDtBSG9qSVQsQ0MzdEhZOzs7OztFQUdFLHlEQUFBO0FEK3RIZCxDQzV0SFU7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBRDh0SFosQ0M1dEhVO0VBQ0UsZ0NBQUE7QUQ4dEhaLENDdHRIVTtFQUNFLG9DQUFBO0VBQ0EsV0l0ZEo7RUp1ZEksNkJBQUE7QUR5dEhaLENDL3NIYztFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QURrdEhoQixDQzNzSE07RUFDRSx5QkFBQTtBRDhzSFIsQ0Mzc0hNO0VBQ0Usb0NBQUE7QUQ4c0hSLENDM3NITTtFQUNFLG9DQUFBO0FEOHNIUixDQzNzSE07RUFDRSx3Q0FBQTtBRDhzSFIsQ0Mzc0hNO0VBQ0UsMkNBQUE7QUQ4c0hSLENDM3NITTtFQUNFLHlDQUFBO0FEOHNIUixDQzNzSE07RUFDRSwwQ0FBQTtBRDhzSFIsQ0Mzc0hNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUYrdElGLENDNXVITTtFQUNFLHlCQUFBO0FEK3VIUixDQzV1SE07RUFDRSxvQ0FBQTtBRCt1SFIsQ0M1dUhNO0VBQ0Usb0NBQUE7QUQrdUhSLENDNXVITTtFQUNFLHdDQUFBO0FEK3VIUixDQzV1SE07RUFDRSwyQ0FBQTtBRCt1SFIsQ0M1dUhNO0VBQ0UseUNBQUE7QUQrdUhSLENDNXVITTtFQUNFLDBDQUFBO0FEK3VIUixDQzV1SE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixrQ0FBQTtBRmd3SUYsQ0M3d0hNO0VBQ0UseUJBQUE7QURneEhSLENDN3dITTtFQUNFLG9DQUFBO0FEZ3hIUixDQzd3SE07RUFDRSxvQ0FBQTtBRGd4SFIsQ0M3d0hNO0VBQ0Usd0NBQUE7QURneEhSLENDN3dITTtFQUNFLDJDQUFBO0FEZ3hIUixDQzd3SE07RUFDRSx5Q0FBQTtBRGd4SFIsQ0M3d0hNO0VBQ0UsMENBQUE7QURneEhSLENDN3dITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLGtDQUFBO0FGaXlJRixDQzl5SE07RUFDRSx5QkFBQTtBRGl6SFIsQ0M5eUhNO0VBQ0Usb0NBQUE7QURpekhSLENDOXlITTtFQUNFLG9DQUFBO0FEaXpIUixDQzl5SE07RUFDRSx3Q0FBQTtBRGl6SFIsQ0M5eUhNO0VBQ0UsMkNBQUE7QURpekhSLENDOXlITTtFQUNFLHlDQUFBO0FEaXpIUixDQzl5SE07RUFDRSwwQ0FBQTtBRGl6SFIsQ0M5eUhNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsa0NBQUE7QUZrMElGLENDLzBITTtFQUNFLHlCQUFBO0FEazFIUixDQy8wSE07RUFDRSxvQ0FBQTtBRGsxSFIsQ0MvMEhNO0VBQ0Usb0NBQUE7QURrMUhSLENDLzBITTtFQUNFLHdDQUFBO0FEazFIUixDQy8wSE07RUFDRSwyQ0FBQTtBRGsxSFIsQ0MvMEhNO0VBQ0UseUNBQUE7QURrMUhSLENDLzBITTtFQUNFLDBDQUFBO0FEazFIUixDQy8wSE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRm0ySUYsQ0NoM0hNO0VBQ0UseUJBQUE7QURtM0hSLENDaDNITTtFQUNFLG9DQUFBO0FEbTNIUixDQ2gzSE07RUFDRSxvQ0FBQTtBRG0zSFIsQ0NoM0hNO0VBQ0Usd0NBQUE7QURtM0hSLENDaDNITTtFQUNFLDJDQUFBO0FEbTNIUixDQ2gzSE07RUFDRSx5Q0FBQTtBRG0zSFIsQ0NoM0hNO0VBQ0UsMENBQUE7QURtM0hSLENDaDNITTtFQ2hoQkosbUJDaUhPLEVEakhhLGlCQUFBO0VBQ3BCLG9DQUFBO0FGbzRJRixDQ2o1SE07RUFDRSx5QkFBQTtBRG81SFIsQ0NqNUhNO0VBQ0Usb0NBQUE7QURvNUhSLENDajVITTtFQUNFLG9DQUFBO0FEbzVIUixDQ2o1SE07RUFDRSx3Q0FBQTtBRG81SFIsQ0NqNUhNO0VBQ0UsMkNBQUE7QURvNUhSLENDajVITTtFQUNFLHlDQUFBO0FEbzVIUixDQ2o1SE07RUFDRSwwQ0FBQTtBRG81SFIsQ0NqNUhNO0VDaGhCSixtQkNpSE8sRURqSGEsaUJBQUE7RUFDcEIsb0NBQUE7QUZxNklGLENDbDdITTtFQUNFLHlCQUFBO0FEcTdIUixDQ2w3SE07RUFDRSxvQ0FBQTtBRHE3SFIsQ0NsN0hNO0VBQ0Usb0NBQUE7QURxN0hSLENDbDdITTtFQUNFLHdDQUFBO0FEcTdIUixDQ2w3SE07RUFDRSwyQ0FBQTtBRHE3SFIsQ0NsN0hNO0VBQ0UseUNBQUE7QURxN0hSLENDbDdITTtFQUNFLDBDQUFBO0FEcTdIUixDQ2w3SE07RUNoaEJKLG1CQ2lITyxFRGpIYSxpQkFBQTtFQUNwQixvQ0FBQTtBRnM4SUYsQ00xNklROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRGVVLHlCQUFBO0FOczZJWixDTTE2SVk7O0VDWlYsMERBQUE7RUFDQSwyQkFBQTtFRGFZLHlCQUFBO0FOODZJZCxDTXI2SVU7OztFQUVFLFdEekNKO0FMaTlJUixDTXQ2SVU7O0VBQ0UsMkJBQUE7QU55NklaLENNdjZJVTs7RUFDRSx3QkFBQTtBTjA2SVosQ014NklVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTjA2SVosQ003OElROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTm84SVosQ01sOElVOzs7RUFFRSxXRHpDSjtBTDgrSVIsQ01uOElVOztFQUNFLDJCQUFBO0FOczhJWixDTXA4SVU7O0VBQ0Usd0JBQUE7QU51OElaLENNcjhJVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU51OElaLENNMStJUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU5pK0laLENNLzlJVTs7O0VBRUUsV0R6Q0o7QUwyZ0pSLENNaCtJVTs7RUFDRSwyQkFBQTtBTm0rSVosQ01qK0lVOztFQUNFLHdCQUFBO0FObytJWixDTWwrSVU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FObytJWixDTXZnSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FOOC9JWixDTTUvSVU7OztFQUVFLFdEekNKO0FMd2lKUixDTTcvSVU7O0VBQ0UsMkJBQUE7QU5nZ0paLENNOS9JVTs7RUFDRSx3QkFBQTtBTmlnSlosQ00vL0lVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTmlnSlosQ01waUpROztFQUVFLFdEckJGO0VDc0JFLHlCQUFBO0VDTlIsMERBQUE7RUFDQSwyQkFBQTtFRG9CVSx5QkFBQTtBTjJoSlosQ016aEpVOzs7RUFFRSxXRHpDSjtBTHFrSlIsQ00xaEpVOztFQUNFLDJCQUFBO0FONmhKWixDTTNoSlU7O0VBQ0Usd0JBQUE7QU44aEpaLENNNWhKVTs7O0VDakNSLDBEQUFBO0VBQ0EsMkJBQUE7RURxQ1UseUJBQUE7QU44aEpaLENNamtKUTs7RUFFRSxXRHJCRjtFQ3NCRSx5QkFBQTtFQ05SLDBEQUFBO0VBQ0EsMkJBQUE7RURvQlUseUJBQUE7QU53akpaLENNdGpKVTs7O0VBRUUsV0R6Q0o7QUxrbUpSLENNdmpKVTs7RUFDRSwyQkFBQTtBTjBqSlosQ014akpVOztFQUNFLHdCQUFBO0FOMmpKWixDTXpqSlU7OztFQ2pDUiwwREFBQTtFQUNBLDJCQUFBO0VEcUNVLHlCQUFBO0FOMmpKWixDTTlsSlE7O0VBRUUsV0RyQkY7RUNzQkUseUJBQUE7RUNOUiwwREFBQTtFQUNBLDJCQUFBO0VEb0JVLHlCQUFBO0FOcWxKWixDTW5sSlU7OztFQUVFLFdEekNKO0FMK25KUixDTXBsSlU7O0VBQ0UsMkJBQUE7QU51bEpaLENNcmxKVTs7RUFDRSx3QkFBQTtBTndsSlosQ010bEpVOzs7RUNqQ1IsMERBQUE7RUFDQSwyQkFBQTtFRHFDVSx5QkFBQTtBTndsSlosQ0Zwb0pNO0VBQ0UsdUJBQUE7QUV1b0pSLENGcG9KTTtFQUNFLHlCT2dLUTtFUC9KUix5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUVzb0pSLENGcG9KUTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FFc29KVixDRm5vSlE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FFcW9KVixDRmxvSlU7RUFDRSxpQkFBQTtBRW9vSlosQ0YvbkpNO0VBQ0UscUJPMEVPO0FMdWpKZixDRi9uSlE7RUFDRSw2QkFBQTtFQUFBLHlCQUFBO0FFaW9KVixDRjluSlE7RUFDRSx5Qk8vQ0E7RVBnREEsY08wQ0c7QUxzbEpiLENGNW5KVTtFQUNFLGlCQUFBO0FFOG5KWixDRjFuSlE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRTRuSlYsQ0Z4bkpNO0VBQ0Usc0JPbEVBO0VQbUVBLGNPOURHO0VQK0RILGdCQUFBO0VBQ0EsbUJBQUE7QUUwbkpSLENGdm5KVTtFQUNFLGNPcEVEO0VQcUVDLGlCQUFBO0FFeW5KWixDRnBuSmM7RUFFRSxtQkFBQTtBRXFuSmhCLENGcG5KZ0I7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUVzbkpsQixDRmxuSmdCO0VBQ0Usd0NBQUE7RUFDQSx5QkFBQTtBRW9uSmxCLENGL21KWTtFQUNFLG1DQUFBO0FFaW5KZCxDRi9tSmdCO0VBQ0Usc0JPdkdWO0VQd0dVLGNPbkdQO0FMb3RKWCxDRjVtSmdCO0VBQ0UsY09tREw7QUwyakpiLENGem1KVTtFQUNFLHlCTzhNSTtFUDdNSiw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUUybUpaLENGeG1KUTtFQUNFLGNPb0NHO0FMc2tKYixDRnJtSlE7RUFDRSx1QkFBQTtBRXVtSlYsQ0ZwbUpNO0VBQ0UsNEJBQUE7QUVzbUpSLENGL2xKQTtFQUNFO0lBQ0UsYUFBQTtFRWttSkY7RUYvbEpBO0lBQ0UsNkJBQUE7SUFDQSxvQkFBQTtFRWltSkY7QUFDRixDRjlsSkE7RUFDRTtJQUNFLGVBQUE7SUFBQSxnQkFBQTtFRWdtSkY7RUY3bEpBO0lBQ0UsYUFBQTtFRStsSkY7QUFDRixDRjVsSkE7RUFDRTtJQUNFLGFBQUE7RUU4bEpGO0VGM2xKQTtJQUNFLGVBQUE7SUFBQSxnQkFBQTtFRTZsSkY7QUFDRixDRnhsSkU7O0VBRUUsb0NBQUE7RUFDQSx3Q0FBQTtBRTBsSkosQ0Z0bEpJO0VBQ0Usb0NBQUE7QUV3bEpOLENGdmxKTTtFQUNFLGNPcExHO0FMNndKWCxDRnZsSk07RUFDRSxjVXJMZ0I7QVI4d0p4QixDRnBsSkU7RUFDRSxnQ0FBQTtBRXNsSkosQ0ZybEpJO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtBRXVsSk4sQ0ZubEpFO0VBQ0Usb0NBQUE7QUVxbEpKLENGbGxKRTtFQUNFLG9DQUFBO0FFb2xKSixDQTN5SkE7RUFDRSxzQkFBQTtBQTh5SkYiLCJmaWxlIjoiZGF0YXRhYmxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9ib290c3RyYXAuc2Nzcyc7XHJcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcclxuQGltcG9ydCAnQGNvcmUvc2Nzcy9iYXNlL2NvbG9ycyc7XHJcbkBpbXBvcnQgJ0Bjb3JlL3Njc3MvYmFzZS9jb21wb25lbnRzL2luY2x1ZGUnOyAvLyBDb21wb25lbnRzIGluY2x1ZGVzXHJcblxyXG4vLyB2YXJpYWJsZSBkZWNsYXJhdGlvblxyXG4kZGF0YXRhYmxlcy1iZy1oZWFkZXItY29sb3I6ICR0YWJsZS1oZWFkLWJnO1xyXG4kZGF0YXRhYmxlcy10ZXh0LWNvbG9yOiAkZ3JheS00MDA7XHJcbiRkYXRhdGFibGVzLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuJGRhdGF0YWJsZXMtZm9vdGVyLXRleHQtY29sb3I6ICR0ZXh0LW11dGVkO1xyXG4kZGF0YXRhYmxlcy1kYXJrLXRleHQtY29sb3I6ICR0aGVtZS1kYXJrLWJvZHktY29sb3I7XHJcbiRkYXRhdGFibGVzLWRhcmstZm9vdGVyLWJnLWNvbG9yOiAkdGhlbWUtZGFyay1jYXJkLWJnO1xyXG4kZGF0YXRhYmxlcy1kYXJrLWJvcmRlci1jb2xvcjogJHRoZW1lLWRhcmstYm9yZGVyLWNvbG9yO1xyXG4kZGF0YXRhYmxlcy1kYXJrLWhlYWRlci1iZy1jb2xvcjogJHRoZW1lLWRhcmstdGFibGUtaGVhZGVyLWJnO1xyXG4kZGF0YXRhYmxlcy1kYXJrLWJvZHktYmctY29sb3I6ICR0aGVtZS1kYXJrLXRhYmxlLWJnO1xyXG4kZGF0YXRhYmxlcy1kYXJrLWFjdGl2ZS1iZy1jb2xvcjogJHRoZW1lLWRhcmstY2FyZC1iZztcclxuXHJcbi5uZ3gtZGF0YXRhYmxlIHtcclxuICAmLmJvb3RzdHJhcCB7XHJcbiAgICAmLmNvcmUtYm9vdHN0cmFwIHtcclxuICAgICAgJi5oZWlnaHQtNzAtdmgge1xyXG4gICAgICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtYmctaGVhZGVyLWNvbG9yO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGVzLWJvcmRlci1jb2xvcjtcclxuXHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc29ydC1pY29uIHBvc2l0aW9uaW5nXHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNvcnQtYnRuIHtcclxuICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRkYXRhdGFibGVzLWJvcmRlci1jb2xvcjtcclxuXHJcbiAgICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTUwO1xyXG4gICAgICAgICAgY29sb3I6ICRib2R5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwtbGFiZWwge1xyXG4gICAgICAgICAgLmNlbGwtbGluZS1oZWlnaHQge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRhdGF0YWJsZS1mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgIC5kYXRhdGFibGUtcGFnZXIge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy10ZXh0LWNvbG9yO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIGxpOm5vdCguZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAmLmFjdGl2ZSxcclxuICAgICAgICAgICAgICAmLmFjdGl2ZTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMnB4IDBweCAxMXB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICY6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRkYXRhdGFibGVzLXRleHQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHRleHQtbXV0ZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGFnZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1iZztcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlLWNvdW50IHtcclxuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy1mb290ZXItdGV4dC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuaGVhZGVyLWhlaWdodC01MCB7XHJcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtZWRpYSBxdWVyeSBmb3IgU21hbGwgJiBNZWRpdW0gZGV2aWNlc1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucGFnZS1jb3VudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1wYWdlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZGVza3RvcC1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gIC5kZXNrdG9wLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZS1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRhcmsgbGF5b3V0IHN0eWxlXHJcbi5kYXJrLWxheW91dCB7XHJcbiAgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIsXHJcbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1oZWFkZXItYmctY29sb3IgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGF0YXRhYmxlcy1kYXJrLWJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwLmNvcmUtYm9vdHN0cmFwIHtcclxuICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZXMtZGFyay1mb290ZXItYmctY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgLmRhdGF0YWJsZS1wYWdlciB1bCBsaS5kaXNhYmxlZCBhIHtcclxuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZXMtdGV4dC1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAuZGF0YXRhYmxlLXBhZ2VyIGEge1xyXG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLXRleHQtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kYXRhdGFibGUtYm9keS1yb3cge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLWJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlcy1kYXJrLWFjdGl2ZS1iZy1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRhdGF0YWJsZS1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGVzLWRhcmstYm9keS1iZy1jb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnBhZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrLXBhZ2luYXRpb24tYmcgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLypcbmJvb3RzdHJhcCB0YWJsZSB0aGVtZVxuKi9cblxuLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZDRkNztcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtbGFiZWwge1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QxZDRkNztcbiAgICAgICYuZGF0YXRhYmxlLXJvdy1ldmVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIH1cbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0ODNmZjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG4gICAgfVxuICAgIC5lbXB0eS1yb3cge1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteTogMC43NXJlbSAhZGVmYXVsdDtcbiAgICAgICRhbGVydC1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nOiAkYWxlcnQtcGFkZGluZy15ICRhbGVydC1wYWRkaW5nLXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcbiAgICBjb2xvcjogI2VkZWRlZDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgfVxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgdWwge1xuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDU0NTQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIFN1bW1hcnkgcm93IHN0eWxlc1xuICAuZGF0YXRhYmxlLXN1bW1hcnktcm93IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICdAY29yZS9zY3NzL2FuZ3VsYXIvbGlicy9kYXRhdGFibGVzLmNvbXBvbmVudC5zY3NzJztcclxuXHJcbi5kYXRhdGFibGUtc2Nyb2xsIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgIEZpbGUgTmFtZTogcGFsbGV0dGUuc2Nzc1xyXG4vLyAgIERlc2NyaXB0aW9uOiBDdXN0b20gY29sb3Igc3lzdGVtIHN0eWxlcywgaW5jbHVkZXMgYmFja2dyb3VuZCwgYm9yZGVyIGFuZCB0ZXh0IGNvbG9yc1xyXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgV0FSTklORzogUExFQVNFIERPIE5PVCBDSEFOR0UgVEhJUyBWQVJJQUJMRSBGSUxFLlxyXG4vLyAgVEhJUyBGSUxFIFdJTEwgR0VUIE9WRVJXUklUVEVOIFdJVEggRUFDSCBWdWV4eSBIVE1MIFRFTVBMQVRFIFJFTEVBU0UuXHJcbi8vICBUSVA6XHJcbi8vICBXZSBzdWdnZXN0IHlvdSB0byB1c2UgdGhpcyAoYXNzZXRzL3Njc3MvY29sb3JzL3BhbGV0dGUuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb2xvciB2YXJpYWJsZXMuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vIHVzYWdlOiB0aGVtZS1jb2xvcihcIm5hbWVfb2ZfY29sb3JcIiwgXCJ0eXBlX29mX2NvbG9yXCIpXHJcbi8vIHRvIGF2b2lkIHRvIHJlcGVhdGluZyBtYXAtZ2V0KCRjb2xvcnMsIC4uLilcclxuXHJcbkBmdW5jdGlvbiBjb2xvci1mdW5jdGlvbigkY29sb3IsICR0eXBlKSB7XHJcbiAgQGlmIG1hcC1oYXMta2V5KCRjb2xvcnMsICRjb2xvcikge1xyXG4gICAgJGN1cnJfY29sb3I6IG1hcC1nZXQoJGNvbG9ycywgJGNvbG9yKTtcclxuICAgIEBpZiBtYXAtaGFzLWtleSgkY3Vycl9jb2xvciwgJHR5cGUpIHtcclxuICAgICAgQHJldHVybiBtYXAtZ2V0KCRjdXJyX2NvbG9yLCAkdHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBAd2FybiBcIlVua25vd24gYCN7bmFtZX1gIGluICRjb2xvcnMuXCI7XHJcbiAgQHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vLyBDb2xvciBwYWxldHRlc1xyXG5AaW1wb3J0ICdwYWxldHRlLXZhcmlhYmxlcyc7XHJcblxyXG4vLyBDb2xvciBDbGFzc2VzXHJcbi8vICAgVGV4dCBjb2xvcjogLmNvbG9yIC5saWdodGVuLSogLyAuZGFya2VuLSogLyAuYWNjZW50LSpcclxuLy8gICBCYWNrZ3JvdW5kOiAuYmctY29sb3IgLmJnLWxpZ2h0ZW4tKiAvIC5iZy1kYXJrZW4tKiAvIC5iZy1hY2NlbnQtKlxyXG4vLyAgIGJvcmRlcjogLmJvcmRlci1jb2xvciAuYm9yZGVyLWxpZ2h0ZW4tKiAvIC5ib3JkZXItZGFya2VuLSogLyAuYm9yZGVyLWFjY2VudC0qXHJcbi8vICAgYm9yZGVyLXRvcDogLmJvcmRlci10b3AtY29sb3IgLmJvcmRlci10b3AtbGlnaHRlbi0qIC8gLmJvcmRlci10b3AtZGFya2VuLSogLyAuYm9yZGVyLXRvcC1hY2NlbnQtKlxyXG4vLyAgIGJvcmRlci1ib3R0b206IC5ib3JkZXItYm90dG9tLWNvbG9yIC5ib3JkZXItYm90dG9tLWxpZ2h0ZW4tKiAvIC5ib3JkZXItYm90dG9tLWRhcmtlbi0qIC8gLmJvcmRlci1ib3R0b20tYWNjZW50LSpcclxuLy8gICBib3JkZXItbGVmdDogLmJvcmRlci1sZWZ0LWNvbG9yIC5ib3JkZXItbGVmdC1saWdodGVuLSogLyAuYm9yZGVyLWxlZnQtZGFya2VuLSogLyAuYm9yZGVyLWxlZnQtYWNjZW50LSpcclxuLy8gICBib3JkZXItcmlnaHQ6IC5ib3JkZXItcmlnaHQtY29sb3IgLmJvcmRlci1yaWdodC1saWdodGVuLSogLyAuYm9yZGVyLXJpZ2h0LWRhcmtlbi0qIC8gLmJvcmRlci1yaWdodC1hY2NlbnQtKlxyXG5cclxuQGVhY2ggJGNvbG9yX25hbWUsICRjb2xvciBpbiAkY29sb3JzIHtcclxuICBAZWFjaCAkY29sb3JfdHlwZSwgJGNvbG9yX3ZhbHVlIGluICRjb2xvciB7XHJcbiAgICBAaWYgJGNvbG9yX3R5cGU9PSAnYmFzZScge1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICAgIC5iZy0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5jYXJkLWhlYWRlcixcclxuICAgICAgICAuY2FyZC1mb290ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBbGVydFxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAuYWxlcnQtI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgLmFsZXJ0LWhlYWRpbmcge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbGVydC1oZWFkaW5nLWJzKCRjb2xvcl92YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFsZXJ0LWxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogZGFya2VuKCRjb2xvcl92YWx1ZSwgNSUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gY2xvc2FibGUgYWxlcnRcclxuICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGJnIGNvbG9yIGxpZ2h0ZW4gZm9yIHJnYmEgLSBvcGFjaXR5IHNldFxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xyXG4gICAgICAgIC5iZy1saWdodC0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcl92YWx1ZSwgMC4xMikgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAvLyBDYWxlbmRhciBiYWNrZ3JvdW5kLCBjb2xvciBhbmQgYm9yZGVyIGNvbG9yXHJcbiAgICAgICAgICAmLmZjLWgtZXZlbnQsXHJcbiAgICAgICAgICAmLmZjLXYtZXZlbnQge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5mYy1saXN0LWV2ZW50LWRvdCxcclxuICAgICAgICAgIC5mYy1kYXlncmlkLWV2ZW50LWRvdCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi5mYy1saXN0LWV2ZW50IHtcclxuICAgICAgICAgICAgJjpob3ZlciB0ZCB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkY29sb3JfdmFsdWUsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZjLWxpc3QtZXZlbnQtdGl0bGUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gYXZhdGFyIHdpdGggbGlnaHQgYmdcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcclxuICAgICAgICAuYXZhdGFyLmJnLWxpZ2h0LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEJvcmRlciBjb2xvcnNcclxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3JkZXItdG9wLSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm9yZGVyLWJvdHRvbS0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci1sZWZ0LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci1yaWdodC0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBiYWRnZSBnbG93IGNvbG9yc1xyXG4gICAgICAuYmctI3skY29sb3JfbmFtZX0sXHJcbiAgICAgIC5ib3JkZXItI3skY29sb3JfbmFtZX0sXHJcbiAgICAgIC5iYWRnZS0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgJi5iYWRnZS1nbG93IHtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCYWRnZSBCYWNrZ3JvdW5kIENvbG9yXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAvLyBCYWRnZSBMaWdodCBCYWNrZ3JvdW5kXHJcbiAgICAgICAgICAmLmJhZGdlLWxpZ2h0LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRjb2xvcl92YWx1ZSwgJGFscGhhOiAwLjEyKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT3ZlcmxheSBjb2xvcnNcclxuICAgICAgLm92ZXJsYXktI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLW9wYWNpdHkoJGNvbG9yX3ZhbHVlLCAwLjYpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCYXNpYyBidXR0b25zXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMScpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggLThweCByZ2JhKCRjb2xvci12YWx1ZSwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmU6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRm9yIEJ0biBGbGF0XHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tZmxhdC0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3ItdmFsdWU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItdmFsdWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXZhbHVlLCAwLjEyKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICYuYWN0aXZlLFxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksICcjJywgJyUyMycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvciBCdG4gUmVsaWVmXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5idG4tcmVsaWVmLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci12YWx1ZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTNweCAwIDAgcmdiYSgkYmxhY2ssIDAuMik7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAgIEBpZiAkY29sb3JfbmFtZSA9PSAnZGFyaycge1xyXG4gICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2Rhcmtlbi0zJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICAmOmhvdmVyOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1mdW5jdGlvbigkY29sb3JfbmFtZSwgJ2xpZ2h0ZW4tMScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICYuYWN0aXZlLFxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnZGFya2VuLTEnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoM3B4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE91dGxpbmUgYnV0dG9uc1xyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAuYnRuLW91dGxpbmUtI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcblxyXG4gICAgICAgICAgJjpob3Zlcjpub3QoLmRpc2FibGVkKTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4wNCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSxcclxuICAgICAgICAgICY6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCkuYWN0aXZlLFxyXG4gICAgICAgICAgJjpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4yKTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2Uoc3RyLXJlcGxhY2UoJGNoZXZyb24tZG93biwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksICcjJywgJyUyMycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHNwbGl0IHRvZ2dsZSBoYXZlIHNob3cgY2xhc3NcclxuICAgICAgICAgIC5zaG93ID4gJi5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGNvbG9yX3ZhbHVlLCAkYWxwaGE6IDAuMik7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBXYXZlIGVmZmVjdFxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAuYnRuLW91dGxpbmUtI3skY29sb3JfbmFtZX0sXHJcbiAgICAgICAgLmJ0bi1mbGF0LSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgICYud2F2ZXMtZWZmZWN0IHtcclxuICAgICAgICAgICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgcmdiYSgkY29sb3JfdmFsdWUsIDAuMikgMCxcclxuICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjMpIDQwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjQpIDUwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjUpIDYwJSxcclxuICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAwKSA3MCVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdWxsZXQgY29sb3JzIGZvciBlbWFpbCBhcHBcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLmJ1bGxldCB7XHJcbiAgICAgICAgICAmLmJ1bGxldC0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1vZGFsXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAmLm1vZGFsLSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGb3IgUGFnaW5hdGlvblxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScgYW5kICRjb2xvcl9uYW1lICE9ICdkYXJrJykge1xyXG4gICAgICAgIC5wYWdpbmF0aW9uLSN7JGNvbG9yLW5hbWV9IHtcclxuICAgICAgICAgIC5wYWdlLWl0ZW0ge1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGFnZS1saW5rIHtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnByZXYtaXRlbSxcclxuICAgICAgICAgICAgJi5uZXh0LWl0ZW0ge1xyXG4gICAgICAgICAgICAgIC5wYWdlLWxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5uZXh0LWl0ZW0sXHJcbiAgICAgICAgICAgICYubmV4dCB7XHJcbiAgICAgICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3RyLXJlcGxhY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHItcmVwbGFjZSgkY2hldnJvbi1yaWdodCwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAnIycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xyXG4gICAgICAgICAgICAgICAgICAgICkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5wcmV2LWl0ZW0sXHJcbiAgICAgICAgICAgICYucHJldiB7XHJcbiAgICAgICAgICAgICAgLnBhZ2UtbGluayB7XHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHN0ci1yZXBsYWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgc3RyLXJlcGxhY2UoJGNoZXZyb24tbGVmdCwgJ2N1cnJlbnRDb2xvcicsICRjb2xvcl92YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAnIycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAnJTIzJ1xyXG4gICAgICAgICAgICAgICAgICAgICkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvciBOYXYgUGlsbHNcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnIGFuZCAkY29sb3JfbmFtZSAhPSAnZGFyaycpIHtcclxuICAgICAgICAubmF2LXBpbGwtI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE4cHggLTRweCByZ2JhKCRjb2xvcl92YWx1ZSwgMC42NSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9ncmVzcyBCYXJzXHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5wcm9ncmVzcy1iYXItI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3JfdmFsdWUsIDAuMTIpO1xyXG5cclxuICAgICAgICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUaW1lbGluZVxyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAudGltZWxpbmUge1xyXG4gICAgICAgICAgLnRpbWVsaW5lLXBvaW50LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgc3Ryb2tlOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi50aW1lbGluZS1wb2ludC1pbmRpY2F0b3Ige1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAkY29sb3JfdmFsdWUsICRhbHBoYTogMC4xMikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERpdmlkZXJcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLmRpdmlkZXIuZGl2aWRlci0jeyRjb2xvci1uYW1lfSB7XHJcbiAgICAgICAgICAuZGl2aWRlci10ZXh0IHtcclxuICAgICAgICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEZvcm0gSW5wdXQgRWxlbWVudHNcclxuICAgICAgLy8gQ2hlY2tib3ggJiBSYWRpb1xyXG5cclxuICAgICAgLy8gdG9kbzogcmVtb3ZlIGl0IG9uY2UgY29uZmlybVxyXG4gICAgICBpbnB1dDpmb2N1cyB+IC5iZy0jeyRjb2xvcl9uYW1lfSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4wNzVyZW0gJHdoaXRlLCAwIDAgMCAwLjIxcmVtICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBDdXN0b20gQ2hlY2tib3ggJiBSYWRpb1xyXG4gICAgICBAaWYgKCRjb2xvcl9uYW1lICE9ICdsaWdodCcgYW5kICRjb2xvcl9uYW1lICE9ICdibGFjaycgYW5kICRjb2xvcl9uYW1lICE9ICd3aGl0ZScpIHtcclxuICAgICAgICAuY3VzdG9tLWNvbnRyb2wtI3skY29sb3JfbmFtZX0ge1xyXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDphY3RpdmUgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yX3ZhbHVlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLmN1c3RvbS1jaGVja2JveCxcclxuICAgICAgICAgICYuY3VzdG9tLXJhZGlvIHtcclxuICAgICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcclxuICAgICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmFjdGl2ZSB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlLFxyXG4gICAgICAgICAgICAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Zm9jdXMgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkY29sb3JfdmFsdWUsIDAuNCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmRpc2FibGVkOmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yX3ZhbHVlLCAwLjY1KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jdXN0b20tY29udHJvbC1pbnB1dDpmb2N1cyB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEJvb3RzdHJhcCBDdXN0b20gU3dpdGNoZXNcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLmN1c3RvbS1zd2l0Y2gtI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNlbGVjdDJcclxuICAgICAgQGlmICgkY29sb3JfbmFtZSAhPSAnbGlnaHQnIGFuZCAkY29sb3JfbmFtZSAhPSAnYmxhY2snIGFuZCAkY29sb3JfbmFtZSAhPSAnd2hpdGUnKSB7XHJcbiAgICAgICAgLnNlbGVjdDItI3skY29sb3ItbmFtZX0ge1xyXG4gICAgICAgICAgLnNlbGVjdDItY29udGFpbmVyLS1kZWZhdWx0IHtcclxuICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uLS1tdWx0aXBsZSB7XHJcbiAgICAgICAgICAgICAgLnNlbGVjdDItc2VsZWN0aW9uX19jaG9pY2Uge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIC50ZXh0LSN7JGNvbG9yX25hbWV9LnRleHQtI3skY29sb3JfdHlwZX0ge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJnLSN7JGNvbG9yX25hbWV9LmJnLSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci0jeyRjb2xvcl9uYW1lfS5ib3JkZXItI3skY29sb3JfdHlwZX0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm9yZGVyLXRvcC0jeyRjb2xvcl9uYW1lfS5ib3JkZXItdG9wLSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ib3JkZXItYm90dG9tLSN7JGNvbG9yX25hbWV9LmJvcmRlci1ib3R0b20tI3skY29sb3JfdHlwZX0ge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3JfdmFsdWUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJvcmRlci1sZWZ0LSN7JGNvbG9yX25hbWV9LmJvcmRlci1sZWZ0LSN7JGNvbG9yX3R5cGV9IHtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRjb2xvcl92YWx1ZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm9yZGVyLXJpZ2h0LSN7JGNvbG9yX25hbWV9LmJvcmRlci1yaWdodC0jeyRjb2xvcl90eXBlfSB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNvbG9yX3ZhbHVlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5vdmVybGF5LSN7JGNvbG9yX25hbWV9Lm92ZXJsYXktI3skY29sb3JfdHlwZX0ge1xyXG4gICAgICAgIEBpbmNsdWRlIGJnLW9wYWNpdHkoJGNvbG9yX3ZhbHVlLCAwLjYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBiZy1vcGFjaXR5KCRjb2xvciwgJG9wYWNpdHk6IDEpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7IC8qIFRoZSBGYWxsYmFjayAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuIiwiLy8gT3ZlcnJpZGVzIHVzZXIgX3ZhcmlhYmxlcy1jb21wb25lbnRzXHJcbkBpbXBvcnQgJy4uLy4uL2Jvb3RzdHJhcC1leHRlbmRlZC9pbmNsdWRlJztcclxuXHJcbi8vIEdvb2dsZSBDb2xvciBQYWxldHRlIGRlZmluZWQ6IGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9zdHlsZS9jb2xvci5odG1sXHJcblxyXG4kd2hpdGUtY29sb3I6IChcclxuICAnYmFzZSc6ICNmZmZmZmZcclxuKTtcclxuJGJsYWNrLWNvbG9yOiAoXHJcbiAgJ2Jhc2UnOiAjMDAwMDAwXHJcbik7XHJcbiRkYXJrLWNvbG9yOiAoXHJcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignZGFyaycpLFxyXG4gICdkYXJrZW4tMSc6ICMzNDM0MzQsXHJcbiAgJ2Rhcmtlbi0yJzogIzFlMWUxZSxcclxuICAnZGFya2VuLTMnOiAjNjI2MjYyXHJcbik7XHJcbiRsaWdodC1jb2xvcjogKFxyXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2xpZ2h0JylcclxuKTtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAoXHJcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgMjUlKSxcclxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCAyMCUpLFxyXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDE1JSksXHJcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3ByaW1hcnknKSwgMTAlKSxcclxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCA1JSksXHJcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcigncHJpbWFyeScpLFxyXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcigncHJpbWFyeScpLCA1JSksXHJcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDEwJSksXHJcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDE1JSksXHJcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdwcmltYXJ5JyksIDIwJSksXHJcbiAgJ2FjY2VudC0xJzogI2JkZmRmZixcclxuICAnYWNjZW50LTInOiAjOGFmYmZmLFxyXG4gICdhY2NlbnQtMyc6ICM1N2ZhZmYsXHJcbiAgJ2FjY2VudC00JzogIzNkZjlmZlxyXG4pO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAoXHJcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAyNSUpLFxyXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMjAlKSxcclxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDE1JSksXHJcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxMCUpLFxyXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgNSUpLFxyXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLFxyXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDUlKSxcclxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ3NlY29uZGFyeScpLCAxMCUpLFxyXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignc2Vjb25kYXJ5JyksIDE1JSksXHJcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdzZWNvbmRhcnknKSwgMjAlKVxyXG4pO1xyXG4kc3VjY2Vzcy1jb2xvcjogKFxyXG4gICdsaWdodGVuLTUnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDI1JSksXHJcbiAgJ2xpZ2h0ZW4tNCc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgMjAlKSxcclxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAxNSUpLFxyXG4gICdsaWdodGVuLTInOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdzdWNjZXNzJyksIDEwJSksXHJcbiAgJ2xpZ2h0ZW4tMSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgNSUpLFxyXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSxcclxuICAnZGFya2VuLTEnOiBkYXJrZW4odGhlbWUtY29sb3IoJ3N1Y2Nlc3MnKSwgNSUpLFxyXG4gICdkYXJrZW4tMic6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAxMCUpLFxyXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAxNSUpLFxyXG4gICdkYXJrZW4tNCc6IGRhcmtlbih0aGVtZS1jb2xvcignc3VjY2VzcycpLCAyMCUpLFxyXG4gICdhY2NlbnQtMSc6ICNlMWZmZjEsXHJcbiAgJ2FjY2VudC0yJzogI2FlZmZkOSxcclxuICAnYWNjZW50LTMnOiAjN2JmZmMxLFxyXG4gICdhY2NlbnQtNCc6ICM2MmZmYjVcclxuKTtcclxuJGluZm8tY29sb3I6IChcclxuICAnbGlnaHRlbi01JzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAyNSUpLFxyXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDIwJSksXHJcbiAgJ2xpZ2h0ZW4tMyc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTUlKSxcclxuICAnbGlnaHRlbi0yJzogbGlnaHRlbih0aGVtZS1jb2xvcignaW5mbycpLCAxMCUpLFxyXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDUlKSxcclxuICAnYmFzZSc6IHRoZW1lLWNvbG9yKCdpbmZvJyksXHJcbiAgJ2Rhcmtlbi0xJzogZGFya2VuKHRoZW1lLWNvbG9yKCdpbmZvJyksIDUlKSxcclxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTAlKSxcclxuICAnZGFya2VuLTMnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMTUlKSxcclxuICAnZGFya2VuLTQnOiBkYXJrZW4odGhlbWUtY29sb3IoJ2luZm8nKSwgMjAlKSxcclxuICAnYWNjZW50LTEnOiAjZmVmZmZmLFxyXG4gICdhY2NlbnQtMic6ICNjYmY1ZmYsXHJcbiAgJ2FjY2VudC0zJzogIzk4ZWNmZixcclxuICAnYWNjZW50LTQnOiAjN2ZlN2ZmXHJcbik7XHJcbiR3YXJuaW5nLWNvbG9yOiAoXHJcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgMjUlKSxcclxuICAnbGlnaHRlbi00JzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCAyMCUpLFxyXG4gICdsaWdodGVuLTMnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDE1JSksXHJcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ3dhcm5pbmcnKSwgMTAlKSxcclxuICAnbGlnaHRlbi0xJzogbGlnaHRlbih0aGVtZS1jb2xvcignd2FybmluZycpLCA1JSksXHJcbiAgJ2Jhc2UnOiB0aGVtZS1jb2xvcignd2FybmluZycpLFxyXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignd2FybmluZycpLCA1JSksXHJcbiAgJ2Rhcmtlbi0yJzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDEwJSksXHJcbiAgJ2Rhcmtlbi0zJzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDE1JSksXHJcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCd3YXJuaW5nJyksIDIwJSksXHJcbiAgJ2FjY2VudC0xJzogI2ZmZjVlZixcclxuICAnYWNjZW50LTInOiAjZmZlNWQ4LFxyXG4gICdhY2NlbnQtMyc6ICNmZmY2ZjMsXHJcbiAgJ2FjY2VudC00JzogI2ZmZTNkYVxyXG4pO1xyXG4kZGFuZ2VyLWNvbG9yOiAoXHJcbiAgJ2xpZ2h0ZW4tNSc6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAyNSUpLFxyXG4gICdsaWdodGVuLTQnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMjAlKSxcclxuICAnbGlnaHRlbi0zJzogbGlnaHRlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDE1JSksXHJcbiAgJ2xpZ2h0ZW4tMic6IGxpZ2h0ZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxMCUpLFxyXG4gICdsaWdodGVuLTEnOiBsaWdodGVuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgNSUpLFxyXG4gICdiYXNlJzogdGhlbWUtY29sb3IoJ2RhbmdlcicpLFxyXG4gICdkYXJrZW4tMSc6IGRhcmtlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDUlKSxcclxuICAnZGFya2VuLTInOiBkYXJrZW4odGhlbWUtY29sb3IoJ2RhbmdlcicpLCAxMCUpLFxyXG4gICdkYXJrZW4tMyc6IGRhcmtlbih0aGVtZS1jb2xvcignZGFuZ2VyJyksIDE1JSksXHJcbiAgJ2Rhcmtlbi00JzogZGFya2VuKHRoZW1lLWNvbG9yKCdkYW5nZXInKSwgMjAlKSxcclxuICAnYWNjZW50LTEnOiAjZmZlZWYxLFxyXG4gICdhY2NlbnQtMic6ICNmZmQ2ZGIsXHJcbiAgJ2FjY2VudC0zJzogI2ZmZWNlZSxcclxuICAnYWNjZW50LTQnOiAjZmZkM2Q3XHJcbik7XHJcblxyXG4kY29sb3JzOiAoXHJcbiAgJ3doaXRlJzogJHdoaXRlLWNvbG9yLFxyXG4gICdibGFjayc6ICRibGFjay1jb2xvcixcclxuICAnZGFyayc6ICRkYXJrLWNvbG9yLFxyXG4gICdsaWdodCc6ICRsaWdodC1jb2xvcixcclxuICAncHJpbWFyeSc6ICRwcmltYXJ5LWNvbG9yLFxyXG4gICdzZWNvbmRhcnknOiAkc2Vjb25kYXJ5LWNvbG9yLFxyXG4gICdzdWNjZXNzJzogJHN1Y2Nlc3MtY29sb3IsXHJcbiAgJ2luZm8nOiAkaW5mby1jb2xvcixcclxuICAnd2FybmluZyc6ICR3YXJuaW5nLWNvbG9yLFxyXG4gICdkYW5nZXInOiAkZGFuZ2VyLWNvbG9yXHJcbik7XHJcbiIsIi8vIEZvciBhbGVydCdzIGhlYWRpbmcgYm94LXNoYWRvd1xyXG5cclxuQG1peGluIGFsZXJ0LWhlYWRpbmctYnMoJGNvbG9yKSB7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgkY29sb3IsIDAuNCkgMHB4IDZweCAxNXB4IC03cHg7XHJcbn1cclxuIiwiLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAgRmlsZSBOYW1lOiB2YXJpYWJsZXMuc2Nzc1xyXG4vLyAgRGVzY3JpcHRpb246IEN1c3RvbSBvdmVycmlkZXMgb2YgQm9vdHN0cmFwIHZhcmlhYmxlc1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgSXRlbSBOYW1lOiBWdWV4eSAtIFZ1ZWpzLCBSZWFjdCwgQW5ndWxhciwgSFRNTCAmIExhcmF2ZWwgQWRtaW4gRGFzaGJvYXJkIFRlbXBsYXRlXHJcbi8vICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgQXV0aG9yIFVSTDogaHR0cDovL3d3dy50aGVtZWZvcmVzdC5uZXQvdXNlci9waXhpbnZlbnRcclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTUwOiAjZjZmNmY2ICFkZWZhdWx0O1xyXG4kZ3JheS0xMDA6ICNiYWJmYzcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0ZXN0XHJcbiRncmF5LTIwMDogI2VkZWRlZCAhZGVmYXVsdDsgLy8gJGdyYXktbGlnaHRlclxyXG4kZ3JheS0zMDA6ICNkYWUxZTcgIWRlZmF1bHQ7IC8vICRncmF5LWxpZ2h0XHJcbiRncmF5LTQwMDogIzYzNjM2MyAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICNiOGMyY2MgIWRlZmF1bHQ7IC8vICRncmF5XHJcbiRncmF5LTcwMDogIzRlNTE1NCAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMWUxZTFlICFkZWZhdWx0OyAvLyAkZ3JheS1kYXJrXHJcbiRncmF5LTkwMDogIzJhMmUzMCAhZGVmYXVsdDtcclxuJGJsYWNrOiAjMjIyOTJmICFkZWZhdWx0OyAvLyAyMzFmNDggMjIyOTJmXHJcblxyXG4kcHVycGxlOiAjNzM2N2YwICFkZWZhdWx0OyAvLyRwcmltYXJ5XHJcbiRncmVlbjogIzI4Yzc2ZiAhZGVmYXVsdDsgLy8kc3VjY2Vzc1xyXG4kYmx1ZTogIzAwY2ZlOCAhZGVmYXVsdDsgLy8kaW5mb1xyXG4kb3JhbmdlOiAjZmY5ZjQzICFkZWZhdWx0OyAvLyR3YXJuaW5nXHJcbiRyZWQ6ICNlYTU0NTUgIWRlZmF1bHQ7IC8vJGRhbmdlclxyXG5cclxuJHByaW1hcnk6ICRwdXJwbGUgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICM4Mjg2OGIgIWRlZmF1bHQ7XHJcbiRpbmZvOiAkYmx1ZSAhZGVmYXVsdDtcclxuJHdhcm5pbmc6ICRvcmFuZ2UgIWRlZmF1bHQ7XHJcbiRsaWdodDogJGdyYXktNTAgIWRlZmF1bHQ7XHJcbiRkYXJrOiAjNGI0YjRiICFkZWZhdWx0O1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbi8vIHNjc3MtZG9jcy1zdGFydCBjb250YWluZXItbWF4LXdpZHRoc1xyXG4kZ3JpZC1icmVha3BvaW50czogKFxyXG4gIHhzOiAwLFxyXG4gIHNtOiA1NzZweCxcclxuICBtZDogNzY4cHgsXHJcbiAgbGc6IDk5MnB4LFxyXG4gIHhsOiAxMjAwcHgsXHJcbiAgeHhsOiAxNDQwcHggLy8gQ3VzdG9tIHh4bCBzaXplXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4gIHh4bDogMTQ0MHB4IC8vIEN1c3RvbSB4eGwgc2l6ZVxyXG4pICFkZWZhdWx0O1xyXG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXHJcblxyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZVxyXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xyXG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIDI1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjI1XHJcbiAgICApLFxyXG4gICAgNTA6IChcclxuICAgICAgJHNwYWNlciAqIDAuNVxyXG4gICAgKSxcclxuICAgIDc1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjc1XHJcbiAgICApLFxyXG4gICAgMTogKFxyXG4gICAgICAkc3BhY2VyXHJcbiAgICApLFxyXG4gICAgMjogKFxyXG4gICAgICAkc3BhY2VyICogMS41XHJcbiAgICApLFxyXG4gICAgMzogKFxyXG4gICAgICAkc3BhY2VyICogM1xyXG4gICAgKSxcclxuICAgIDQ6IChcclxuICAgICAgJHNwYWNlciAqIDMuNVxyXG4gICAgKSxcclxuICAgIDU6IChcclxuICAgICAgJHNwYWNlciAqIDRcclxuICAgIClcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuJGJvZHktYmc6ICNmOGY4ZjggIWRlZmF1bHQ7XHJcbiRib2R5LWNvbG9yOiAjNmU2YjdiICFkZWZhdWx0O1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCA1JSkgIWRlZmF1bHQ7XHJcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XHJcblxyXG4vLyBHcmlkIGNvbHVtbnNcclxuLy9cclxuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXHJcblxyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDJyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS4yNSAhZGVmYXVsdDtcclxuJGxpbmUtaGVpZ2h0LXNtOiAxICFkZWZhdWx0O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xyXG4kYm9yZGVyLWNvbG9yOiAjZWJlOWYxICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC4zNTdyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjZyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gc2hhZG93XHJcbiRib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcbi8vIFR5cG9ncmFwaHlcclxuXHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgQXJpYWwsIHNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcclxuJGZvbnQtc2l6ZS1iYXNlOiAxcmVtICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLWxnOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDEuMjUpICFkZWZhdWx0O1xyXG4kZm9udC1zaXplLXNtOiBjZWlsKCRmb250LXNpemUtYmFzZSAqIDAuODUpICFkZWZhdWx0O1xyXG5cclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZDogNTAwICFkZWZhdWx0O1xyXG4kZm9udC13ZWlnaHQtYm9sZGVyOiA2MDAgIWRlZmF1bHQ7XHJcblxyXG4kbGluZS1oZWlnaHQtYmFzZTogMS40NSAhZGVmYXVsdDtcclxuXHJcbiRoMS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzE0ICFkZWZhdWx0O1xyXG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjg2ICFkZWZhdWx0O1xyXG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjA3ICFkZWZhdWx0O1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBpbmhlcml0ICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtY29sb3I6ICM1ZTU4NzMgIWRlZmF1bHQ7XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTItd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTMtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjE0ICFkZWZhdWx0O1xyXG4kbGVhZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcclxuXHJcbiRzbWFsbC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG5cclxuJHRleHQtbXV0ZWQ6ICNiOWI5YzMgIWRlZmF1bHQ7XHJcbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcblxyXG4vLyBUYWJsZXNcclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzJyZW0gIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYWNjZW50LWJnOiAjZmFmYWZjICFkZWZhdWx0O1xyXG4kdGFibGUtaG92ZXItYmc6ICNmNmY2ZjkgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJHRhYmxlLWhlYWQtYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kdGFibGUtZGFyay1iZzogJGRhcmsgIWRlZmF1bHQ7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogIzQwNDA0MCAhZGVmYXVsdDtcclxuXHJcbiR0YWJsZS10aC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4kYnRuLXBhZGRpbmcteTogMC43ODZyZW0gIWRlZmF1bHQ7XHJcbiRidG4tcGFkZGluZy14OiAxLjVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMnJlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LXNtOiAwLjQ4NnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDFyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLWJhc2UgKiAwLjkgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC44cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMnJlbSAhZGVmYXVsdDtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XHJcbiRidG4tbGluZS1oZWlnaHQ6IDEgIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYnRuLXRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZCAwcywgYm9yZGVyIDBzICFkZWZhdWx0O1xyXG5cclxuLy8gRm9ybXNcclxuJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjogI2Q4ZDZkZTtcclxuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuMjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6IDAuNDM4cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1zbTogMC4xODhyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtc206IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLXNtOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1wYWRkaW5nLXgtbGc6IDEuMTQzcmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAxLjE0M3JlbSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogI2VmZWZlZiAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIDAuMDc1KSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGlucHV0LWhlaWdodDogMi43MTRyZW0gIWRlZmF1bHQ7XHJcbiRpbnB1dC1oZWlnaHQtc206IDIuMTQycmVtICFkZWZhdWx0O1xyXG4kaW5wdXQtaGVpZ2h0LWxnOiAzLjI4NTdyZW0gIWRlZmF1bHQ7XHJcblxyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYmc6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDBzLCBib3JkZXItY29sb3IgMHMgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWJvcmRlci1jb2xvcjtcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDNweCAhZGVmYXVsdDtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogd2hpdGUgIWRlZmF1bHQ7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6IHdoaXRlICFkZWZhdWx0O1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDkuNSA3LjUnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScwLjc1IDQuMzUgNC4xOCA2Ljc1IDguNzUgMC43NScgc3R5bGU9J2ZpbGw6bm9uZTtzdHJva2U6JTIzZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MS41cHgnLyUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItbWludXMnJTNFJTNDbGluZSB4MT0nNScgeTE9JzEyJyB4Mj0nMTknIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIik7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtZGlzYWJsZWQtYmc6IHJnYmEoJHByaW1hcnksIDAuNjUpO1xyXG5cclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBub25lO1xyXG5cclxuJGN1c3RvbS1maWxlLWhlaWdodC1pbm5lcjogJGlucHV0LWhlaWdodCAhZGVmYXVsdDtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtICFkZWZhdWx0OyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRpbnB1dC1kaXNhYmxlZC1iZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogMTBweCAxMHB4ICFkZWZhdWx0OyAvLyBJbiBwaXhlbHMgYmVjYXVzZSBpbWFnZSBkaW1lbnNpb25zXHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzUnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246IGNlbnRlciByaWdodCAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpICFkZWZhdWx0O1xyXG4vLyAkY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc20gIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc20gIWRlZmF1bHQ7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGcgIWRlZmF1bHQ7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMDUpICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAwIDVweCAyNXB4IHJnYmEoJGJsYWNrLCAwLjEpICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiByZ2JhKCRwcmltYXJ5LCAwLjEyKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1kaXZpZGVyLWJnOiByZ2JhKCRibGFjaywgMC4wOCkgIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1mb250LXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcbiRkcm9wZG93bi1zcGFjZXI6IDAgIWRlZmF1bHQ7XHJcbiR6aW5kZXgtZHJvcGRvd246IDEwICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgNXB4IDI1cHggMCByZ2JhKCRibGFjaywgMC4xKSAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAxLjI4cmVtICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGhlYWRpbmdzLWNvbG9yICFkZWZhdWx0O1xyXG5cclxuJGRyb3Bkb3duX3NwYWNpbmc6IDAuNXJlbTsgLy8gY3VzdG9tXHJcblxyXG4vLyBQYWdpbmF0aW9uXHJcblxyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6IDAuNXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14OiAwLjg1cmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6IDAuNTU3NXJlbSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxcmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206IDAuNDQzcmVtICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNzQ1cmVtICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICNmM2YyZjcgIWRlZmF1bHQ7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogI2YzZjJmNyAhZGVmYXVsdDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1sZzogMS4xNHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZS1zbTogMC44NTdyZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQ2FyZHNcclxuJGNhcmQtc3BhY2VyLXk6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbSAhZGVmYXVsdDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogMC40MjhyZW0gIWRlZmF1bHQ7XHJcblxyXG4vL0FsZXJ0c1xyXG5cclxuJGFsZXJ0LXBhZGRpbmcteTogMC43MXJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LXBhZGRpbmcteDogMXJlbSAhZGVmYXVsdDtcclxuJGFsZXJ0LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kYWxlcnQtbGluay1mb250LXdlaWdodDogNzAwICFkZWZhdWx0O1xyXG5cclxuLy8gTGlzdCBncm91cFxyXG5cclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogJHByaW1hcnkgIWRlZmF1bHQ7XHJcblxyXG4vLyBOYXYgdGFic1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmcteTogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiRuYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAwLjI1ICFkZWZhdWx0O1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG5cclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuXHJcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xyXG5cclxuLy8gbmF2YmFyXHJcblxyXG4kZmxvYXRpbmctbmF2LW1hcmdpbjogMS4zcmVtO1xyXG5cclxuLy8gVG9vbHRpcHNcclxuXHJcbiR0b29sdGlwLWJnOiAjMzIzMjMyICFkZWZhdWx0O1xyXG4kdG9vbHRpcC1wYWRkaW5nLXk6IDAuNHJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtcGFkZGluZy14OiAwLjc3NXJlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtZm9udC1zaXplOiAwLjg1N3JlbSAhZGVmYXVsdDtcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XHJcbiR0b29sdGlwLW1heC13aWR0aDogMjIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgkYmxhY2ssIDAuMSkgIWRlZmF1bHQ7XHJcblxyXG4kcG9wb3Zlci1oZWFkZXItYmc6ICRwcmltYXJ5ICFkZWZhdWx0O1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICR3aGl0ZSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC42NXJlbSAhZGVmYXVsdDtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogMS4yMXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIFRvYXN0c1xyXG5cclxuJHRvYXN0LW1heC13aWR0aDogMzgwcHggIWRlZmF1bHQ7XHJcbiR0b2FzdC1wYWRkaW5nLXg6IDEuMTRyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMTVyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1mb250LXNpemU6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kdG9hc3QtY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yODZyZW0gIWRlZmF1bHQ7XHJcbiR0b2FzdC1ib3gtc2hhZG93OiAwIDJweCAyMHB4IDAgcmdiYSgkYmxhY2ssIDAuMDgpICFkZWZhdWx0O1xyXG5cclxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFkZWZhdWx0O1xyXG5cclxuLy8gUHJvZ3Jlc3NcclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDAuODU3cmVtICFkZWZhdWx0O1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogNXJlbSAhZGVmYXVsdDtcclxuJHByb2dyZXNzLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMC44NTcgIWRlZmF1bHQ7XHJcbiRwcm9ncmVzcy1iZzogcmdiYSgkcHJpbWFyeSwgMC4xMikgIWRlZmF1bHQ7XHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItZm9udC1zaXplOiAxcmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjNyZW0gIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC42cmVtICFkZWZhdWx0O1xyXG5cclxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMCAhZGVmYXVsdDtcclxuXHJcbiRicmVhZGNydW1iLWJnOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3IgIWRlZmF1bHQ7XHJcblxyXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAwICFkZWZhdWx0O1xyXG5cclxuLy8gQ2Fyb3VzZWxcclxuXHJcbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGUgIWRlZmF1bHQ7XHJcbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1sZWZ0XCI+PHBvbHlsaW5lIHBvaW50cz1cIjE1IDE4IDkgMTIgMTUgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XHJcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn1cIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodFwiPjxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+PC9zdmc+JykgIWRlZmF1bHQ7XHJcblxyXG4vLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcclxuJGJhZGdlLXBhZGRpbmcteTogMC4zcmVtICFkZWZhdWx0O1xyXG4kYmFkZ2UtcGFkZGluZy14OiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRiYWRnZS1mb250LXdlaWdodDogNjAwICFkZWZhdWx0O1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogMC4zNThyZW0gIWRlZmF1bHQ7XHJcblxyXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE1vZGFsXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAwLjhyZW0gMS40cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjA1KSAhZGVmYXVsdDtcclxuXHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwLjhyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxLjRyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6IDAuMzU4cmVtICFkZWZhdWx0O1xyXG5cclxuJG1vZGFsLXhsOiA5NCUgIWRlZmF1bHQ7XHJcbiRtb2RhbC1zbTogNDAwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyAgICBTbGlkZSBJbiBNb2RhbFxyXG4kbW9kYWwtc2xpZGUtaW4td2lkdGgtc206IDI1cmVtICFkZWZhdWx0OyAvLyBjdXN0b21cclxuJG1vZGFsLXNsaWRlLWluLXdpZHRoOiAyOHJlbSAhZGVmYXVsdDsgLy8gY3VzdG9tXHJcbiRtb2RhbC1zbGlkZS1pbi13aWR0aC1sZzogMzByZW0gIWRlZmF1bHQ7IC8vIGN1c3RvbVxyXG5cclxuLy8gQ2xvc2VcclxuXHJcbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDIgIWRlZmF1bHQ7XHJcbiRjbG9zZS1mb250LXdlaWdodDogNDAwICFkZWZhdWx0O1xyXG4kY2xvc2UtY29sb3I6ICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xyXG4ka2JkLWJnOiAjZWVlICFkZWZhdWx0O1xyXG5cclxuLy8gU3dpdGNoXHJcbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAzcmVtICFkZWZhdWx0O1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcclxuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6IDFyZW0gIWRlZmF1bHQ7XHJcblxyXG4vL3N2ZyBjb2xvclxyXG4kc3ZnLWNvbG9yLWxpZ2h0OiAjNjI2MjYyICFkZWZhdWx0O1xyXG5cclxuLy8gU1ZHIGljb25zXHJcbi8vIEZvciBCcmVhZGNydW1iXHJcbiRkb3VibGUtY2hldnJvbi1yaWdodDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbnMtcmlnaHQnJTNFJTNDcG9seWxpbmUgcG9pbnRzPScxMyAxNyAxOCAxMiAxMyA3JyUzRSUzQy9wb2x5bGluZSUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNiAxNyAxMSAxMiA2IDcnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4vLyBDaGV2cm9uIEljb25zXHJcbiRjaGV2cm9uLWxlZnQ6IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE1IDE4IDkgMTIgMTUgNiclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLXJpZ2h0OiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0JyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nOSAxOCAxNSAxMiA5IDYnJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2hldnJvbi11cDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzE4IDE1IDEyIDkgNiAxNSclM0UlM0MvcG9seWxpbmUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRjaGV2cm9uLWRvd246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biclM0UlM0Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzRSUzQy9wb2x5bGluZSUzRSUzQy9zdmclM0VcIjtcclxuXHJcbiRkb3dubG9hZDogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItZG93bmxvYWQnJTNFJTNDcGF0aCBkPSdNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCclM0UlM0MvcGF0aCUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nNyAxMCAxMiAxNSAxNyAxMCclM0UlM0MvcG9seWxpbmUlM0UlM0NsaW5lIHgxPScxMicgeTE9JzE1JyB4Mj0nMTInIHkyPSczJyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kcmVtb3ZlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci14JyUzRSUzQ2xpbmUgeDE9JzE4JyB5MT0nNicgeDI9JzYnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzYnIHkxPSc2JyB4Mj0nMTgnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuJGNoZWNrOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNoZWNrJyUzRSUzQ3BvbHlsaW5lIHBvaW50cz0nMjAgNiA5IDE3IDQgMTInJTNFJTNDL3BvbHlsaW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kY2lyY2xlOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWNpcmNsZSclM0UlM0NjaXJjbGUgY3g9JzEyJyBjeT0nMTInIHI9JzEwJyUzRSUzQy9jaXJjbGUlM0UlM0Mvc3ZnJTNFXCI7XHJcbiRpbmZvSWNvbjogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1pbmZvJyUzRSUzQ2NpcmNsZSBjeD0nMTInIGN5PScxMicgcj0nMTAnJTNFJTNDL2NpcmNsZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTYnIHgyPScxMicgeTI9JzEyJyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPSc4JyB4Mj0nMTIuMDEnIHkyPSc4JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kd2FybmluZ0ljb246IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyBmaWxsPSdub25lJyBzdHJva2U9J2N1cnJlbnRDb2xvcicgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIGNsYXNzPSdmZWF0aGVyIGZlYXRoZXItYWxlcnQtdHJpYW5nbGUnJTNFJTNDcGF0aCBkPSdNMTAuMjkgMy44NkwxLjgyIDE4YTIgMiAwIDAgMCAxLjcxIDNoMTYuOTRhMiAyIDAgMCAwIDEuNzEtM0wxMy43MSAzLjg2YTIgMiAwIDAgMC0zLjQyIDB6JyUzRSUzQy9wYXRoJTNFJTNDbGluZSB4MT0nMTInIHkxPSc5JyB4Mj0nMTInIHkyPScxMyclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzEyJyB5MT0nMTcnIHgyPScxMi4wMScgeTI9JzE3JyUzRSUzQy9saW5lJTNFJTNDL3N2ZyUzRVwiO1xyXG4kbWVudTogXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDI0IDI0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIGZpbGw9J25vbmUnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2Nzcy1pNmR6cTEnJTNFJTNDbGluZSB4MT0nMycgeTE9JzEyJyB4Mj0nMjEnIHkyPScxMiclM0UlM0MvbGluZSUzRSUzQ2xpbmUgeDE9JzMnIHkxPSc2JyB4Mj0nMjEnIHkyPSc2JyUzRSUzQy9saW5lJTNFJTNDbGluZSB4MT0nMycgeTE9JzE4JyB4Mj0nMjEnIHkyPScxOCclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIjtcclxuXHJcbiRjaGF0LWJnLWxpZ2h0OiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl6TGpBdU1Td2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3NkkwVXhSVEJGT1R0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xyXG4kY2hhdC1iZy1kYXJrOiAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBeU5qQWdNall3SWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TmpBZ01qWXdPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0NqeHpkSGxzWlNCMGVYQmxQU0owWlhoMEwyTnpjeUkrQ2drdWMzUXdlMlpwYkd3dGNuVnNaVHBsZG1WdWIyUmtPMk5zYVhBdGNuVnNaVHBsZG1WdWIyUmtPMlpwYkd3Nkl6RTNNVUV5TkR0OUNqd3ZjM1I1YkdVK0NqeG5QZ29KUEdjZ2FXUTlJbWt0YkdsclpTMW1iMjlrSWo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTWpRdU5Dd3hObU13TGpJc01DNDJMREF1TkN3eExqTXNNQzQxTERKb0xUTXVOMnd4TGpJc01pNHpiREF1TlN3d0xqbHNMVEF1TWl3d0xqRldNamhqTWk0eUxERXVOeXd5TGpjc05DNDRMREVzTndvSkNRbGpMVEF1T0N3eExURXVPU3d4TGpjdE15NHlMREV1T1ZZek4yTXRNQzQ1TERNdU5TMDBMakVzTmkwM0xqZ3NObWd0TWpCakxUTXVOaXd3TFRZdU9DMHlMalV0Tnk0M0xUWjJMVEF1TVdNdE1pNDNMVEF1TkMwMExqWXRNeTAwTGpJdE5TNDNZekF1TWkweExqTXNNQzQ1TFRJdU5Td3hMamt0TXk0eUNna0pDWFl0Tmk0NGJDMHdMamd0TVM0MmJDMHdMalF0TUM0NWJEQXVPUzB3TGpSTUxURTNMREU0YUMwelF5MHhOeTR5TERVdU5pMDBMamt0TWk0eUxEY3VOU3d3TGpaRE1UVXVOQ3d5TGpNc01qRXVPU3c0TGpJc01qUXVOQ3d4Tm5vZ1RTMHhNaTQwTERFNFl5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhDZ2tKQ1d3dE15NHhMREV1Tm13d0xqa3NNUzQ0YkRFdU15MHdMamRqTUM0NExUQXVOQ3d4TGpndE1DNDBMREl1Tnl3d2JESXVNaXd4TGpGak1DNHpMREF1TVN3d0xqWXNNQzR4TERBdU9Td3diREl1TWkweExqRmpNQzQ0TFRBdU5Dd3hMamd0TUM0MExESXVOeXd3YkRJdU1pd3hMakVLQ1FrSll6QXVNeXd3TGpFc01DNDJMREF1TVN3d0xqa3NNR3d5TGpJdE1TNHhZekF1T0Mwd0xqUXNNUzQ0TFRBdU5Dd3lMamNzTUd3eUxqSXNNUzR4UXpjdU5Dd3lNaXczTGpjc01qSXNPQ3d5TVM0NWJESXVPUzB4TGpOak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTUtDUWtKWXpBdU15d3dMakVzTUM0MkxEQXVNU3d3TGprc01Hd3pMakV0TVM0MWJDMHdMamt0TVM0NGJDMHhMalFzTUM0M1l5MHdMamdzTUM0MExURXVOeXd3TGpRdE1pNDJMREF1TVd3dE1pNDRMVEV1TWtNeE1pNHpMREU0TERFeUxqSXNNVGdzTVRJdU1Td3hPR3d3TERBS0NRa0pZeTB3TGpFc01DMHdMak1zTUMwd0xqUXNNQzR4YkMweUxqZ3NNUzR5WXkwd0xqZ3NNQzQwTFRFdU9Dd3dMak10TWk0MkxUQXVNVXcwTERFNExqRkRNeTQ1TERFNExETXVOeXd4T0N3ekxqWXNNVGhzTUN3d1l5MHdMaklzTUMwd0xqTXNNQzB3TGpRc01DNHhUREVzTVRrdU1nb0pDUWxqTFRBdU9Dd3dMalF0TVM0NExEQXVOQzB5TGpjc01Fd3ROQ3d4T0M0eFF5MDBMakVzTVRndE5DNHpMREU0TFRRdU5Dd3hPR3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRk1MVGNzTVRrdU1tTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4Q2drSkNVTXRNVEl1TVN3eE9DMHhNaTR6TERFNExURXlMalFzTVRoTUxURXlMalFzTVRoTUxURXlMalFzTVRoNklFMHRNVEl1TkN3eE5tZ3ROQzQ1UXkweE15NDFMRFV1TVMweExqVXRNQzQzTERrdU5Td3pMakpqTml3eUxqRXNNVEF1Tnl3MkxqZ3NNVEl1T0N3eE1pNDRhQzB5TGpGc0xUQXVNUzB3TGpFS0NRa0pUREU1TGprc01UWklMVEV5TGpSTUxURXlMalFzTVRaNklFMHhOeTQ1TERJekxqZHNNUzQwTFRBdU4yZ3hMak4yTW1ndE16WjJMVEV1TVd3d0xqTXRNQzR5YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZElMVE1LQ1FrSmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3dUREl1TXl3eU0yZ3lMalpzTVM0MExEQXVOMk13TGpjc01DNDBMREV1Tnl3d0xqUXNNaTQxTERCc01TNDNMVEF1TjJnekxqSnNNUzQzTERBdU4wTXhOaTR5TERJMExqRXNNVGN1TVN3eU5DNHhMREUzTGprc01qTXVOM29LQ1FrSklFMHRNVE11T0N3eU4yd3hOaTQwTERRdU9Vd3hPQzQ1TERJM1NDMHhNeTQ0ZWlCTkxURTBMalFzTWpsb01DNHpiREUyTGpjc05Xd3hOaTQzTFRWb01DNHpZekV1Tnl3d0xETXNNUzR6TERNc00zTXRNUzR6TERNdE15d3phQzB6TkdNdE1TNDNMREF0TXkweExqTXRNeTB6Q2drSkNVTXRNVGN1TkN3ek1DNHpMVEUyTGpFc01qa3RNVFF1TkN3eU9Yb2dUUzB4TXk0eExETTNZekF1T0N3eUxqUXNNeTR4TERRc05TNDNMRFJvTWpCak1pNDFMREFzTkM0NExURXVOaXcxTGpjdE5FTXhPQzR5TERNM0xURXpMakVzTXpjdE1UTXVNU3d6TjNvaUx6NEtDUWs4Y0dGMGFDQnBaRDBpY0dGMGFEWmZabWxzYkMxamIzQjVJaUJqYkdGemN6MGljM1F3SWlCa1BTSk5NamcwTGpRc01UWmpNQzR5TERBdU5pd3dMalFzTVM0ekxEQXVOU3d5YUMwekxqZHNNUzR5TERJdU0yd3dMalVzTUM0NWJDMHdMaklzTUM0eFZqSTRZekl1TWl3eExqY3NNaTQzTERRdU9Dd3hMRGNLQ1FrSll5MHdMamdzTVMweExqa3NNUzQzTFRNdU1pd3hMamxXTXpkakxUQXVPU3d6TGpVdE5DNHhMRFl0Tnk0NExEWm9MVEl3WXkwekxqWXNNQzAyTGpndE1pNDFMVGN1TnkwMmRpMHdMakZqTFRJdU55MHdMalF0TkM0MkxUTXROQzR5TFRVdU4yTXdMakl0TVM0ekxEQXVPUzB5TGpVc01TNDVMVE11TWdvSkNRbDJMVFl1T0d3dE1DNDRMVEV1Tm13dE1DNDBMVEF1T1d3d0xqa3RNQzQwVERJME15d3hPR2d0TTJNeUxqZ3RNVEl1TkN3eE5TNHhMVEl3TGpJc01qY3VOUzB4Tnk0MFF6STNOUzQwTERJdU15d3lPREV1T1N3NExqSXNNamcwTGpRc01UWjZJRTB5TkRjdU5Td3hPQW9KQ1FsakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVE11TVN3eExqWnNNQzQ1TERFdU9Hd3hMak10TUM0M1l6QXVPQzB3TGpRc01TNDRMVEF1TkN3eUxqY3NNR3d5TGpJc01TNHhZekF1TXl3d0xqRXNNQzQyTERBdU1Td3dMamtzTUd3eUxqSXRNUzR4Q2drSkNXTXdMamd0TUM0MExERXVPQzB3TGpRc01pNDNMREJzTWk0eUxERXVNV013TGpNc01DNHhMREF1Tml3d0xqRXNNQzQ1TERCc01pNHlMVEV1TVdNd0xqZ3RNQzQwTERFdU9DMHdMalFzTWk0M0xEQnNNaTR5TERFdU1XTXdMak1zTUM0eExEQXVOaXd3TGpFc01DNDVMREJzTWk0NUxURXVNd29KQ1Fsak1DNDRMVEF1TXl3eExqY3RNQzR6TERJdU5Dd3diREl1T1N3eExqTmpNQzR6TERBdU1Td3dMallzTUM0eExEQXVPU3d3YkRNdU1TMHhMalZzTFRBdU9TMHhMamhzTFRFdU5Dd3dMamRqTFRBdU9Dd3dMalF0TVM0M0xEQXVOQzB5TGpZc01DNHhiQzB5TGpndE1TNHlDZ2tKQ1dNdE1DNHhMVEF1TVMwd0xqTXRNQzR4TFRBdU5DMHdMakZzTUN3d1l5MHdMakVzTUMwd0xqTXNNQzB3TGpRc01DNHhiQzB5TGpnc01TNHlZeTB3TGpnc01DNDBMVEV1T0N3d0xqTXRNaTQyTFRBdU1Xd3RNaTR6TFRFdU1XTXRNQzR4TFRBdU1TMHdMak10TUM0eExUQXVOUzB3TGpGc01Dd3dDZ2tKQ1dNdE1DNHlMREF0TUM0ekxEQXRNQzQwTERBdU1Xd3RNaTR5TERFdU1XTXRNQzQ0TERBdU5DMHhMamdzTUM0MExUSXVOeXd3YkMweUxqSXRNUzR4WXkwd0xqRXRNQzR4TFRBdU15MHdMakV0TUM0MExUQXVNV3d3TERCakxUQXVNaXd3TFRBdU15d3dMVEF1TkN3d0xqRnNMVEl1TWl3eExqRUtDUWtKWXkwd0xqZ3NNQzQwTFRFdU9Dd3dMalF0TWk0M0xEQnNMVEl1TWkweExqRkRNalEzTGprc01UZ3NNalEzTGpjc01UZ3NNalEzTGpVc01UaE1NalEzTGpVc01UaE1NalEzTGpVc01UaDZJRTB5TkRjdU5Td3hObWd0TkM0NVl6TXVPUzB4TUM0NUxERTFMamt0TVRZdU55d3lOaTQ0TFRFeUxqZ0tDUWtKWXpZc01pNHhMREV3TGpjc05pNDRMREV5TGpnc01USXVPR2d0TWk0eGJDMHdMakV0TUM0eGJDMHdMak1zTUM0eFNESTBOeTQxVERJME55NDFMREUyZWlCTk1qYzNMamtzTWpNdU4yd3hMalF0TUM0M2FERXVNM1l5YUMwek5uWXRNUzR4YkRBdU15MHdMakpzTVM0MExUQXVOMmd5TGpZS0NRa0piREV1TkN3d0xqZGpNQzQ0TERBdU5Dd3hMamdzTUM0MExESXVOeXd3YkRFdU5DMHdMamRvTWk0MmJERXVOQ3d3TGpkak1DNDRMREF1TkN3eExqZ3NNQzQwTERJdU55d3diREV1TkMwd0xqZG9NaTQyYkRFdU5Dd3dMamRqTUM0NExEQXVOQ3d4TGpjc01DNDBMREl1Tml3d0xqRnNNUzQzTFRBdU53b0pDUWxvTXk0eWJERXVOeXd3TGpkRE1qYzJMaklzTWpRdU1Td3lOemN1TVN3eU5DNHhMREkzTnk0NUxESXpMamRNTWpjM0xqa3NNak11TjNvZ1RUSTBOaTR5TERJM2JERTJMalFzTkM0NVRESTNPU3d5TjBneU5EWXVNbm9nVFRJME5TNDFMREk1YURBdU0yd3hOaTQzTERWc01UWXVOeTAxYURBdU13b0pDUWxqTVM0M0xEQXNNeXd4TGpNc015d3pjeTB4TGpNc015MHpMRE5vTFRNMFl5MHhMamNzTUMwekxURXVNeTB6TFROVE1qUXpMamtzTWprc01qUTFMalVzTWpsNklFMHlORFl1T1N3ek4yTXdMamdzTWk0MExETXVNU3cwTERVdU5pdzBhREl3WXpJdU5Td3dMRFF1T0MweExqWXNOUzQzTFRRS0NRa0pTREkwTmk0NWVpSXZQZ29KQ1R4d1lYUm9JR05zWVhOelBTSnpkREFpSUdROUlrMHhOVGt1TlN3eU1XTXRNUzR6TFRNdU5pMDBMamN0TmkwNExqVXRObWd0TkRKakxUTXVPQ3d3TFRjdU1pd3lMalF0T0M0MUxEWmpMVE11TXl3d0xqTXROUzQ0TERNdU1pMDFMalVzTmk0MVl6QXVNaXd5TGprc01pNDJMRFV1TWl3MUxqVXNOUzQxQ2drSkNXTXRNUzQzTERRdU55d3dMamdzT1M0NExEVXVOQ3d4TVM0MVl6RXNNQzR6TERJc01DNDFMRE1zTUM0MWFEUXlZelVzTUN3NUxUUXNPUzA1WXpBdE1TMHdMakl0TWk0eExUQXVOUzB6WXpNdU15MHdMak1zTlM0NExUTXVNaXcxTGpVdE5pNDFDZ2tKQ1VNeE5qUXVOeXd5TXk0MkxERTJNaTQwTERJeExqTXNNVFU1TGpVc01qRjZJRTB4TlRFc01UZG9MVFF5WXkweUxqY3NNQzAxTGpJc01TNDJMVFl1TXl3MGFEVTBMamRETVRVMkxqSXNNVGd1Tml3eE5UTXVOeXd4Tnl3eE5URXNNVGQ2SUUweE5ERXVOeXcwTXdvSkNRbGpNaTR4TFRFdU55d3pMak10TkM0ekxETXVNeTAzYUMweVl6QXNNeTQ1TFRNdU1TdzNMVGNzTjJndE5DNHpZekl1TVMweExqY3NNeTR6TFRRdU15d3pMak10TjJndE1tTXdMRE11T1MwekxqRXNOeTAzTERkb0xUUXVNMk15TGpFdE1TNDNMRE11TXkwMExqTXNNeTR6TFRkb0xUSUtDUWtKWXpBc015NDVMVE11TVN3M0xUY3NOMmd0TjJNdE15NDVMREF0TnkwekxqRXROeTAzY3pNdU1TMDNMRGN0TjJnME1tTXpMamtzTUN3M0xETXVNU3czTERkekxUTXVNU3czTFRjc04wZ3hOREV1TjNvZ1RURXdPU3d5TjJNdE15d3dMVFV1T0N3eExqVXROeTQxTERSSU1UQXhDZ2tKQ1dNdE1pNHlMREF0TkMweExqZ3ROQzAwY3pFdU9DMDBMRFF0TkdnMU9HTXlMaklzTUN3MExERXVPQ3cwTERSekxURXVPQ3cwTFRRc05HZ3RNQzQxWXkweExqY3RNaTQxTFRRdU5TMDBMVGN1TlMwMFNERXdPWG9pTHo0S0NRazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTXprc01URTFZelF1TkN3d0xEZ3RNeTQyTERndE9ITXRNeTQyTFRndE9DMDRjeTA0TERNdU5pMDRMRGhUTXpRdU5pd3hNVFVzTXprc01URTFlaUJOTkRVc01UQTNZekFzTXk0ekxUSXVOeXcyTFRZc05uTXROaTB5TGpjdE5pMDJDZ2tKQ1hNeUxqY3ROaXcyTFRaVE5EVXNNVEF6TGpjc05EVXNNVEEzZWlCTk5ESXNOemgyTFRKb09IWXROa2cwTUdNdE1pNHlMREF0TkN3eExqZ3ROQ3cwZGpFd1NESXliQzB4TGpNc05Fd3lNQ3c1TUdneUxqSnNNeTQ0TERRd2FESTJiRE11T0MwME1FZzFPR3d0TUM0M0xUSk1OVFlzT0RSSU5ESldOemg2Q2drSkNTQk5NemdzTnpSMk1UQm9NbFkzTkdnNGRpMHlhQzA0UXpNNExqa3NOeklzTXpnc056SXVPU3d6T0N3M05Ib2dUVFF3TERnMmFERTBMalpzTUM0M0xESklNakl1T0d3d0xqY3RNa2cwTUhvZ1RUVXpMamdzT1RCSU1qUXVNbXd6TGpZc016aG9Nakl1TkV3MU15NDRMRGt3ZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweE1qa3NPVEpvTFRaMk5HZ3ROblkwYUMwMmRqRTBhQzB6YkRBdU1pd3liRE11T0N3ek1tZ3pObXd6TGpndE16SnNNQzR5TFRKb0xUTjJMVEUwYUMwMmRpMDBhQzAyZGkwMFNERXlPWG9nVFRFME55d3hNVFIyTFRFeWFDMDBkalJvTTNZNFNERTBOd29KQ1FsNklFMHhORFFzTVRFMGRpMDJhQzAwZGpaSU1UUTBlaUJOTVRNNExERXlNSFl0TVRab0xUUjJNVGt1TWtNeE16VXVOaXd4TWpJdU5Td3hNemNzTVRJeExqUXNNVE00TERFeU1Ib2dUVEV6TWl3eE1qTXVPRll4TURCb0xUUjJNak11T0FvSkNRbERNVEk1TGpNc01USTBMakVzTVRNd0xqY3NNVEkwTGpFc01UTXlMREV5TXk0NGVpQk5NVEkyTERFeU15NHlWakV3TkdndE5IWXhOa014TWpNc01USXhMalFzTVRJMExqUXNNVEl5TGpVc01USTJMREV5TXk0eWVpQk5NVEl3TERFeE5IWXRObWd0TkhZMlNERXlNSG9nVFRFeE5Dd3hNVFIyTFRob013b0pDUWwyTFRSb0xUUjJNVEpJTVRFMGVpQk5NVFF4TERFd01uWXROR2d0TkhZMGFETjJOR2d4VmpFd01ub2dUVEV6TlN3eE1ESjJMVGhvTFRSMk5HZ3pkalJJTVRNMWVpQk5NVEk1TERrNGRpMDBhQzAwZGpob01YWXRORWd4TWpsNklFMHhNak1zTVRBeWRpMDBhQzAwZGpob01YWXRORWd4TWpONkNna0pDU0JOTVRNd0xERXlObU0xTGprc01Dd3hNQzQ1TFRRdU1pd3hNUzQ0TFRFd2FEY3VPV3d0TXk0MUxETXdhQzB6TWk0MGJDMHpMalV0TXpCb055NDVRekV4T1M0eExERXlNUzQ0TERFeU5DNHhMREV5Tml3eE16QXNNVEkyZWlJdlBnb0pDVHh3WVhSb0lHTnNZWE56UFNKemREQWlJR1E5SWsweU1USXNPRFoyTW1ndE5IWXRNa2d5TVRKNklFMHlNVFlzT0Rab0xUSjJNbWd5VmpnMmVpQk5NVGsyTERnMlRERTVOaXc0Tm1NdE1pNDNMREF1TnkwMExqVXNNeTR6TFRNdU9TdzJZekF1TkN3eExqZ3NNUzQyTERNdU1pd3pMak1zTXk0NENna0pDV3d3TGpFc01DNHliREV1TVN3MExqVmpNQzR5TERBdU9Td3hMREV1TlN3eExqa3NNUzQxYkRBc01HdzNMREkwTGpaak1DNHlMREF1T1N3eExERXVOQ3d4TGprc01TNDBhRFZqTUM0NUxEQXNNUzQzTFRBdU5pd3hMamt0TVM0MGJEY3RNalF1Tm1Nd0xqa3NNQ3d4TGpjdE1DNDJMREV1T1MweExqVUtDUWtKYkRFdU1TMDBMalZzTUM0eExUQXVNbU15TGpZdE1DNDVMRFF1TVMwekxqY3NNeTR5TFRZdU0yTXRNQzQyTFRFdU55MHlMVE10TXk0NExUTXVNMVk0Tm1Nd0xUY3VOeTAyTGpNdE1UUXRNVFF0TVRSVE1UazJMRGM0TGpNc01UazJMRGcyZWlCTk1qQXdMRGcyYURaMk1tZ3RPUW9KQ1FsakxURXVOeXd3TFRNc01TNHpMVE1zTTNNeExqTXNNeXd6TEROb01qWmpNUzQzTERBc015MHhMak1zTXkwemN5MHhMak10TXkwekxUTm9MVE4yTFRKb01tTXdMVFl1TmkwMUxqUXRNVEl0TVRJdE1USnpMVEV5TERVdU5DMHhNaXd4TWtneU1EQjZJRTB4T1RndU5pd3hNREJzTFRFdE5HZ3lOQzQ1Q2drSkNXd3RNU3cwU0RFNU9DNDJlaUJOTWpBM0xqVXNNVEkyYkMwMkxqa3RNalJvTVRndU4yd3ROaTQ1TERJMFNESXdOeTQxZWlCTk1UVXdMREkwTW1NeE1pNHlMREFzTWpJdE9TNDRMREl5TFRJeWN5MDVMamd0TWpJdE1qSXRNakp6TFRJeUxEa3VPQzB5TWl3eU1nb0pDUWxUTVRNM0xqZ3NNalF5TERFMU1Dd3lOREo2SUUweE56UXNNakl3WXpBc01UTXVNeTB4TUM0M0xESTBMVEkwTERJMGN5MHlOQzB4TUM0M0xUSTBMVEkwYkRBc01HTXdMVEV6TGpNc01UQXVOeTB5TkN3eU5DMHlORk14TnpRc01qQTJMamNzTVRjMExESXlNSG9nVFRFME5TNDJMREl6Tnk0M0Nna0pDV3d5TFRBdU9XTXhMalV0TUM0MkxETXVNaTB3TGpZc05DNDNMREJzTWl3d0xqbGpNQzQ1TERBdU5Dd3lMREFzTWk0MUxUQXVPR3d4TGpFdE1TNDVZekF1T0MweExqUXNNaTR5TFRJdU5Dd3pMamd0TWk0NGJESXVNUzB3TGpWak1TMHdMaklzTVM0MkxURXVNU3d4TGpVdE1pNHhiQzB3TGpJdE1pNHlDZ2tKQ1dNdE1DNHhMVEV1Tml3d0xqUXRNeTR5TERFdU5DMDBMalZzTVM0MExURXVOMk13TGpjdE1DNDRMREF1TnkweExqa3NNQzB5TGpac0xURXVOQzB4TGpkakxURXVNUzB4TGpJdE1TNDJMVEl1T0MweExqUXROQzQxYkRBdU1pMHlMakpqTUM0eExURXRNQzQyTFRFdU9TMHhMall0TWk0eENna0pDV3d0TWk0eExUQXVOV010TVM0MkxUQXVOQzB6TFRFdU5DMHpMamd0TWk0NGJDMHhMakV0TVM0NVl5MHdMalV0TUM0NUxURXVOaTB4TGpJdE1pNDFMVEF1T0d3dE1pd3dMamxqTFRFdU5Td3dMall0TXk0eUxEQXVOaTAwTGpjc01Hd3RNaTB3TGpsakxUQXVPUzB3TGpRdE1pd3dMVEl1TlN3d0xqZ0tDUWtKYkMweExESXVNV010TUM0NExERXVOQzB5TGpJc01pNDBMVE11T0N3eUxqaHNMVEl1TVN3d0xqVmpMVEVzTUM0eUxURXVOaXd4TGpFdE1TNDFMREl1TVd3d0xqSXNNaTR5WXpBdU1Td3hMall0TUM0MExETXVNaTB4TGpRc05DNDFiQzB4TGpRc01TNDNDZ2tKQ1dNdE1DNDNMREF1T0Mwd0xqY3NNUzQ1TERBc01pNDJiREV1TkN3eExqZGpNUzR4TERFdU1pd3hMallzTWk0NExERXVOQ3cwTGpWc0xUQXVNaXd5TGpKakxUQXVNU3d4TERBdU5pd3hMamtzTVM0MkxESXVNV3d5TGpFc01DNDFZekV1Tml3d0xqUXNNeXd4TGpRc015NDRMREl1T0d3eExqRXNNUzQ1Q2drSkNVTXhORE11Tml3eU16Y3VPQ3d4TkRRdU55d3lNemd1TVN3eE5EVXVOaXd5TXpjdU4wd3hORFV1Tml3eU16Y3VOM29nVFRFME9DNDBMREl6T0M0M1l6RXRNQzQwTERJdU1TMHdMalFzTXk0eExEQnNNaXd3TGpsak1TNDRMREF1T0N3MExEQXVNU3cxTFRFdU5td3hMakV0TVM0NUNna0pDV013TGpZdE1DNDVMREV1TlMweExqWXNNaTQxTFRFdU9Hd3lMakV0TUM0MVl6RXVPUzB3TGpRc015NHpMVEl1TXl3ekxqRXROQzR5YkMwd0xqSXRNaTR5WXkwd0xqRXRNUzR4TERBdU15MHlMaklzTVMwemJERXVOQzB4TGpkak1TNHpMVEV1TlN3eExqTXRNeTQzTERBdE5TNHliQzB4TGpRdE1TNDNDZ2tKQ1dNdE1DNDNMVEF1T0MweExqRXRNUzQ1TFRFdE0yd3dMakl0TWk0eVl6QXVNaTB5TFRFdU1TMHpMamd0TXk0eExUUXVNbXd0TWk0eExUQXVOV010TVM0eExUQXVNaTB5TFRBdU9TMHlMalV0TVM0NGJDMHhMakV0TVM0NVl5MHhMVEV1TnkwekxqSXRNaTQwTFRVdE1TNDJiQzB5TERBdU9Rb0pDUWxqTFRFc01DNDBMVEl1TVN3d0xqUXRNeTR4TERCc0xUSXRNQzQ1WXkweExqZ3RNQzQ0TFRRdE1DNHhMVFVzTVM0MmJDMHhMakVzTVM0NVl5MHdMallzTUM0NUxURXVOU3d4TGpZdE1pNDFMREV1T0d3dE1pNHhMREF1TldNdE1TNDVMREF1TkMwekxqTXNNaTR6TFRNdU1TdzBMakpzTUM0eUxESXVNZ29KQ1Fsak1DNHhMREV1TVMwd0xqTXNNaTR5TFRFc00yd3RNUzQwTERFdU4yTXRNUzR6TERFdU5TMHhMak1zTXk0M0xEQXNOUzR5YkRFdU5Dd3hMamRqTUM0M0xEQXVPQ3d4TGpFc01TNDVMREVzTTJ3dE1DNHlMREl1TW1NdE1DNHlMRElzTVM0eExETXVPQ3d6TGpFc05DNHliREl1TVN3d0xqVUtDUWtKWXpFdU1Td3dMaklzTWl3d0xqa3NNaTQxTERFdU9Hd3hMakVzTVM0NVl6RXNNUzQzTERNdU1pd3lMalFzTlN3eExqWk1NVFE0TGpRc01qTTRMamQ2SUUweE5USXNNakEzWXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVFvSkNRbFRNVFV5TERJd055NDJMREUxTWl3eU1EZDZJRTB4TlRnc01qQTVZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TlRnc01qQTVMallzTVRVNExESXdPWG9nVFRFME55d3lNVEJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNUW9KQ1FsekxUQXVOQ3d4TFRFc01WTXhORGNzTWpFd0xqWXNNVFEzTERJeE1Ib2dUVEUwTVN3eU1UQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekUwTVN3eU1UQXVOaXd4TkRFc01qRXdlaUJOTVRRMExESXdOV013TFRBdU5pd3dMalF0TVN3eExURUtDUWtKY3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eFV6RTBOQ3d5TURVdU5pd3hORFFzTWpBMWVpQk5NVE0yTERJeE0yTXdMVEF1Tml3d0xqUXRNU3d4TFRGek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVE0yTERJeE15NDJMREV6Tml3eU1UTjZJRTB4TXprc01qRTVDZ2tKQ1dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGVE1UTTVMREl4T1M0MkxERXpPU3d5TVRsNklFMHhNemtzTWpJMVl6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhNemtzTWpJMUxqWXNNVE01TERJeU5Yb0tDUWtKSUUweE5ETXNNak15WXpBdE1DNDJMREF1TkMweExERXRNWE14TERBdU5Dd3hMREZ6TFRBdU5Dd3hMVEVzTVZNeE5ETXNNak15TGpZc01UUXpMREl6TW5vZ1RURTBPQ3d5TXpCak1DMHdMallzTUM0MExURXNNUzB4Y3pFc01DNDBMREVzTVhNdE1DNDBMREV0TVN3eENna0pDVk14TkRnc01qTXdMallzTVRRNExESXpNSG9nVFRFMU15d3lNelJqTUMwd0xqWXNNQzQwTFRFc01TMHhjekVzTUM0MExERXNNWE10TUM0MExERXRNU3d4VXpFMU15d3lNelF1Tml3eE5UTXNNak0wZWlCTk1UVTNMREl5T0dNd0xUQXVOaXd3TGpRdE1Td3hMVEZ6TVN3d0xqUXNNU3d4Q2drSkNYTXRNQzQwTERFdE1Td3hVekUxTnl3eU1qZ3VOaXd4TlRjc01qSTRlaUJOTVRZekxESXlOR013TFRBdU5pd3dMalF0TVN3eExURnpNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZUTVRZekxESXlOQzQyTERFMk15d3lNalI2SUUweE5Ua3NNakl4WXpBdE1DNDJMREF1TkMweExERXRNUW9KQ1Fsek1Td3dMalFzTVN3eGN5MHdMalFzTVMweExERlRNVFU1TERJeU1TNDJMREUxT1N3eU1qRjZJRTB4TmpNc01qRTRZekF0TUM0MkxEQXVOQzB4TERFdE1YTXhMREF1TkN3eExERnpMVEF1TkN3eExURXNNVk14TmpNc01qRTRMallzTVRZekxESXhPSG9nVFRFMU9Dd3lNVFFLQ1FrSll6QXRNQzQyTERBdU5DMHhMREV0TVhNeExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01WTXhOVGdzTWpFMExqWXNNVFU0TERJeE5Ib2dUVEV6TkN3eU1qQmpNQzB3TGpZc01DNDBMVEVzTVMweGN6RXNNQzQwTERFc01YTXRNQzQwTERFdE1Td3hVekV6TkN3eU1qQXVOaXd4TXpRc01qSXdlZ29KQ1FrZ1RURTFNQ3d5TWpWak1pNDRMREFzTlMweUxqSXNOUzAxY3kweUxqSXROUzAxTFRWekxUVXNNaTR5TFRVc05WTXhORGN1TWl3eU1qVXNNVFV3TERJeU5Yb2dUVEUxTnl3eU1qQmpNQ3d6TGprdE15NHhMRGN0Tnl3M2N5MDNMVE11TVMwM0xUZHpNeTR4TFRjc055MDNDZ2tKQ1ZNeE5UY3NNakUyTGpFc01UVTNMREl5TUhvZ1RUSTBNeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lORE42SUUweU5qSXNNakF3WXpBdE1DNDJMREF1TkMweExERXRNV2d5Q2drSkNXTXdMallzTUN3eExEQXVOQ3d4TERGekxUQXVOQ3d4TFRFc01XZ3RNa015TmpJdU5Dd3lNREVzTWpZeUxESXdNQzQyTERJMk1pd3lNREI2SUUweU5EZ3NNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRFS0NRa0pTREkwT0hvZ1RUSXlNeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lNak42SUUweU1qZ3NNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURJS0NRa0pZekF1Tml3d0xERXRNQzQwTERFdE1YTXRNQzQwTFRFdE1TMHhTREl5T0hvZ1RUSXpOeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNak0zTGpRc01qRXhMREl6Tnl3eU1UQXVOaXd5TXpjc01qRXdlZ29KQ1FrZ1RUSTFNaXd5TVRGak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRNalV5TGpRc01qRXlMREkxTWl3eU1URXVOaXd5TlRJc01qRXhlaUJOTWpZMExESXdPV010TUM0MkxEQXRNU3d3TGpRdE1Td3hjekF1TkN3eExERXNNV2d5Q2drSkNXTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3lOalI2SUUweU5UTXNNVGsxWXpBdE1DNDJMREF1TkMweExERXRNV2d5WXpBdU5pd3dMREVzTUM0MExERXNNWE10TUM0MExERXRNU3d4YUMweVF6STFNeTQwTERFNU5pd3lOVE1zTVRrMUxqWXNNalV6TERFNU5Yb0tDUWtKSUUweU16UXNNVGsxWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSU1qTTBlaUJOTWpRd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNUW9KQ1Fsb0xUSkRNalF3TGpRc01qQXhMREkwTUN3eU1EQXVOaXd5TkRBc01qQXdlaUJOTWpFMUxESXhOV013TFRBdU5Td3dMVEF1T1N3d0xURXVOR010TWk0MUxURXVNUzB6TGpjdE5DMHlMall0Tmk0Mll6QXVNaTB3TGpVc01DNDFMVEVzTUM0NUxURXVOR010TUM0NUxUSXNNQzAwTGpJc01TNDVMVFV1TWdvSkNRbGpMVEF1T0MweUxqWXNNQzQzTFRVdU5Dd3pMalF0Tmk0eWJEQXNNR013TGpRdE1DNDFMREF1T1Mwd0xqa3NNUzQxTFRFdU1XTXdMalV0TWk0M0xETXVNUzAwTGpVc05TNDRMVFF1TVdNd0xqY3NNQzR4TERFdU5Dd3dMalFzTWl3d0xqaGpOUzR6TFRNdU9Dd3hNUzQyTFRVdU9Td3hPQzR5TFRVdU9Rb0pDUWxqTmk0NExEQXNNVE11TVN3eUxqSXNNVGd1TWl3MUxqbGpNaTR6TFRFdU5pdzFMalF0TVN3M0xERXVNMk13TGpRc01DNDJMREF1Tnl3eExqTXNNQzQ0TERKak1DNDJMREF1TWl3eExqRXNNQzQyTERFdU5Td3hMakZqTWk0M0xEQXVPQ3cwTGpJc015NDFMRE11TkN3MkxqSnNNQ3d3Q2drSkNXTXhMamtzTVN3eUxqY3NNeTR5TERFdU9TdzFMakpqTVM0NUxESXNNUzQ0TERVdU1pMHdMaklzTjJNdE1DNDBMREF1TkMwd0xqa3NNQzQzTFRFdU5Td3hZekFzTUM0MUxEQXNNQzQ1TERBc01TNDBkakZvTFRZeWRpMHhTREl4TlhvZ1RUSXhOUzQ0TERJd055NDRDZ2tKQ1dNdE1DNHpMREV1TWkwd0xqVXNNaTQwTFRBdU5pd3pMalpqTFRFdU15MHhMVEV1TmkweUxqa3RNQzQyTFRRdU1td3dMREJETWpFMUxESXdOeTQxTERJeE5TNDBMREl3Tnk0M0xESXhOUzQ0TERJd055NDRUREl4TlM0NExESXdOeTQ0ZWlCTk1qRTNMak1zTWpBekxqSUtDUWtKWXkwd0xqUXNNQzQ1TFRBdU55d3hMamd0TVN3eUxqZGpMVEV0TUM0MExURXVOaTB4TGpVdE1TNHpMVEl1TldNd0xqSXRNQzQxTERBdU5pMHdMamtzTVM0eExURXVNa015TVRZdU5Td3lNREl1Tml3eU1UWXVPU3d5TURJdU9Td3lNVGN1TXl3eU1ETXVNa3d5TVRjdU15d3lNRE11TW5vS0NRa0pJRTB5TVRrdU5pd3hPVGd1TjJNdE1DNDFMREF1T1MweExERXVPQzB4TGpVc01pNDNZeTB4TGpNdE1TMHhMalV0TWk0NUxUQXVOUzAwTGpKak1DNHhMVEF1TWl3d0xqTXRNQzR6TERBdU5DMHdMalZETWpFNExqTXNNVGszTGpZc01qRTRMamtzTVRrNExqTXNNakU1TGpZc01UazRMamNLQ1FrSlRESXhPUzQyTERFNU9DNDNlaUJOTWpJd0xqZ3NNVGszWXpBdU5DMHdMalVzTUM0M0xURXNNUzR4TFRFdU5XTXRNQzR6TFRBdU5TMHdMamt0TUM0M0xURXVOQzB3TGpSekxUQXVOeXd3TGprdE1DNDBMREV1TkVNeU1qQXVNeXd4T1RZdU55d3lNakF1TlN3eE9UWXVPU3d5TWpBdU9Dd3hPVGNLQ1FrSlRESXlNQzQ0TERFNU4zb2dUVEl5Tmk0eExERTVNUzR5WXkweExEQXVPUzB5TERFdU9DMHlMamtzTWk0NFl5MHdMak10TUM0ekxUQXVOeTB3TGpZdE1TNHhMVEF1T0dNd0xqUXRNUzQyTERJdU1TMHlMalVzTXk0M0xUSXVNUW9KQ1FsRE1qSTFMamtzTVRreExqRXNNakkyTERFNU1TNHlMREl5Tmk0eExERTVNUzR5VERJeU5pNHhMREU1TVM0eWVpQk5Nalk0TGpnc01UazBZeTB3TGprdE1TMHhMamt0TVM0NUxUSXVPUzB5TGpoak1TNDFMVEF1Tml3ekxqTXNNQzR4TERNdU9Td3hMamNLQ1FrSll6QXNNQzR4TERBdU1Td3dMaklzTUM0eExEQXVNME15TmprdU5Td3hPVE11TkN3eU5qa3VNU3d4T1RNdU5pd3lOamd1T0N3eE9UUk1Nalk0TGpnc01UazBlaUJOTWpjd0xqRXNNVGsxTGpWak1DNDBMREF1TlN3d0xqZ3NNU3d4TGpFc01TNDBDZ2tKQ1dNd0xqVXRNQzR4TERBdU9TMHdMamNzTUM0NExURXVNbk10TUM0M0xUQXVPUzB4TGpJdE1DNDRRekkzTUM0MUxERTVOUzR4TERJM01DNHpMREU1TlM0ekxESTNNQzR4TERFNU5TNDFlaUJOTWpjekxqa3NNakF4TGpSakxUQXVOUzB3TGprdE1TMHhMamd0TVM0MUxUSXVOd29KQ1Fsak1DNDRMVEF1TkN3eExqUXRNUzR4TERFdU5pMHlZekV1TXl3eExqRXNNUzQwTERNc01DNDBMRFF1TWtNeU56UXVNaXd5TURFdU1Td3lOelFzTWpBeExqSXNNamN6TGprc01qQXhMalI2SUUweU56VXVOaXd5TURVdU9XTXRNQzR6TFRBdU9TMHdMall0TVM0NExURXRNaTQzQ2drSkNXTXdMalF0TUM0ekxEQXVPQzB3TGpZc01TNHlMVEZqTVN3d0xqVXNNUzQwTERFdU55d3hMREl1TjBNeU56WXVOaXd5TURVdU15d3lOell1TWl3eU1EVXVOeXd5TnpVdU5pd3lNRFV1T1hvZ1RUSTNOaTQ0TERJeE1TNDBZeTB3TGpFdE1TNHlMVEF1TkMweUxqUXRNQzQyTFRNdU5nb0pDUWxqTUM0MUxUQXVNU3d3TGprdE1DNDBMREV1TWkwd0xqWkRNamM0TGpRc01qQTRMalVzTWpjNExqRXNNakV3TGpRc01qYzJMamdzTWpFeExqUk1NamMyTGpnc01qRXhMalJNTWpjMkxqZ3NNakV4TGpSNklFMHlOelVzTWpFMFl5MHdMalV0TVRZdE1UTXVPUzB5T0M0MkxUSTVMamt0TWpndU1Rb0pDUWxqTFRFMUxqTXNNQzQxTFRJM0xqWXNNVEl1T0MweU9DNHhMREk0TGpGSU1qYzFUREkzTlN3eU1UUjZJRTAzTWk0ekxERTVPQzR4WXkwd0xqSXRNQzR6TFRBdU15MHdMamN0TUM0ekxURXVNWFl0TVRKb0xUSjJNVEpqTUN3eUxqSXNNUzQ0TERRc05DdzBDZ2tKQ1dNeExqSXNNQ3d5TGpNdE1DNDFMRE11TVMweExqUmpNQzQyTFRBdU55d3dMamt0TVM0MkxEQXVPUzB5TGpWMkxURXlhQzB5ZGpFeVl6QXNNUzR4TFRBdU9Td3lMVElzTW13d0xEQkROek11TXl3eE9Ua3NOekl1Tnl3eE9UZ3VOeXczTWk0ekxERTVPQzR4ZWlCTk56VXNNVGMyQ2drSkNXTXdMalFzTUN3d0xqY3NNQ3d4TGpFdE1DNHhZekF1TlN3eUxqSXNNaTQyTERNdU5TdzBMamdzTTJNd0xqVXRNQzR4TERFdE1DNHpMREV1TkMwd0xqWmpNUzR4TERJdU1Td3hMamNzTkM0MExERXVOeXcyTGpkMk1qUmpNQ3d6TGpNdE1pNDNMRFl0Tml3MmFDMHpkamtLQ1FrSll6QXNNaTQ0TFRJdU1pdzFMVFVzTlhNdE5TMHlMakl0TlMwMWRpMDVhQzB6WXkwekxqTXNNQzAyTFRJdU55MDJMVFoyTFRJMFl6QXROeTQzTERZdU15MHhOQ3d4TkMweE5FTTNNQ3d4TnpNdU9DdzNNaTR5TERFM05pdzNOU3d4TnpaNklFMDFPQ3d4T1RGMk1USUtDUWtKWXpBc01DNDRMREF1TlN3eExqVXNNUzR5TERFdU9HTXdMamtzTUM0MExERXVPU3d3TGpFc01pNDBMVEF1TjJNd0xqSXRNQzR6TERBdU15MHdMamNzTUM0ekxURXVNWFl0TVRKb01uWXhNbU13TERJdU1pMHhMamNzTkMwekxqa3NOR010TUM0MUxEQXRNUzB3TGpFdE1TNDBMVEF1TWdvSkNRbGpMVEF1TWkwd0xqRXRNQzQwTFRBdU1pMHdMamN0TUM0emRqSXVOV013TERJdU1pd3hMamdzTkN3MExEUm9NVFpqTWk0eUxEQXNOQzB4TGpnc05DMDBkaTB5TkdNd0xURXVOUzB3TGpJdE1pNDVMVEF1TnkwMExqSmpMVEF1TkN3d0xqRXRNQzQ1TERBdU1pMHhMak1zTUM0eUNna0pDV010TWk0eExEQXROQzR4TFRFdU1TMDFMakl0TTJNdE15MHdMakV0TlM0MkxUSXROaTQxTFRRdU9VTTJNaTQwTERFM05DdzFPQ3d4Tnprc05UZ3NNVGcxVmpFNU1Yb2dUVFkzTERJeE5YWTVZekFzTVM0M0xERXVNeXd6TERNc00zTXpMVEV1TXl3ekxUTjJMVGxJTmpkNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNQ0lnWkQwaVRTMHhOeXd4T1RGakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNVGQ2SUUweUxESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NZ29KQ1Fsak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGSU0wTXlMalFzTWpBeExESXNNakF3TGpZc01pd3lNREI2SUUwdE1USXNNakExWXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxURXllZ29KQ1FrZ1RTMHpOeXd5TURaakxUQXVOaXd3TFRFc01DNDBMVEVzTVhNd0xqUXNNU3d4TERGb01tTXdMallzTUN3eExUQXVOQ3d4TFRGekxUQXVOQzB4TFRFdE1VZ3RNemQ2SUUwdE16SXNNakV3WXkwd0xqWXNNQzB4TERBdU5DMHhMREZ6TUM0MExERXNNU3d4YURKak1DNDJMREFzTVMwd0xqUXNNUzB4Q2drSkNYTXRNQzQwTFRFdE1TMHhTQzB6TW5vZ1RTMHlNeXd5TVRCak1DMHdMallzTUM0MExURXNNUzB4YURKak1DNDJMREFzTVN3d0xqUXNNU3d4Y3kwd0xqUXNNUzB4TERGb0xUSkRMVEl5TGpZc01qRXhMVEl6TERJeE1DNDJMVEl6TERJeE1Ib2dUUzA0TERJeE1XTXdMVEF1Tml3d0xqUXRNU3d4TFRFS0NRa0phREpqTUM0MkxEQXNNU3d3TGpRc01Td3hjeTB3TGpRc01TMHhMREZvTFRKRExUY3VOaXd5TVRJdE9Dd3lNVEV1TmkwNExESXhNWG9nVFRRc01qQTVZeTB3TGpZc01DMHhMREF1TkMweExERnpNQzQwTERFc01Td3hhREpqTUM0MkxEQXNNUzB3TGpRc01TMHhjeTB3TGpRdE1TMHhMVEZJTkhvS0NRa0pJRTB0Tnl3eE9UVmpNQzB3TGpZc01DNDBMVEVzTVMweGFESmpNQzQyTERBc01Td3dMalFzTVN3eGN5MHdMalFzTVMweExERm9MVEpETFRZdU5pd3hPVFl0Tnl3eE9UVXVOaTAzTERFNU5Yb2dUUzB5Tml3eE9UVmpMVEF1Tml3d0xURXNNQzQwTFRFc01YTXdMalFzTVN3eExERm9NZ29KQ1Fsak1DNDJMREFzTVMwd0xqUXNNUzB4Y3kwd0xqUXRNUzB4TFRGSUxUSTJlaUJOTFRJd0xESXdNR013TFRBdU5pd3dMalF0TVN3eExURm9NbU13TGpZc01Dd3hMREF1TkN3eExERnpMVEF1TkN3eExURXNNV2d0TWtNdE1Ua3VOaXd5TURFdE1qQXNNakF3TGpZdE1qQXNNakF3ZWlCTkxUUTFMREl4TlFvSkNRbGpNQzB3TGpVc01DMHdMamtzTUMweExqUmpMVEl1TlMweExqRXRNeTQzTFRRdE1pNDJMVFl1Tm1Nd0xqSXRNQzQxTERBdU5TMHhMREF1T1MweExqUmpMVEF1T1MweUxEQXROQzR5TERFdU9TMDFMakpqTFRBdU9DMHlMallzTUM0M0xUVXVOQ3d6TGpRdE5pNHliREFzTUFvSkNRbGpNQzQwTFRBdU5Td3dMamt0TUM0NUxERXVOUzB4TGpGak1DNDFMVEl1Tnl3ekxqRXROQzQxTERVdU9DMDBMakZqTUM0M0xEQXVNU3d4TGpRc01DNDBMRElzTUM0NFl6VXVNeTB6TGpnc01URXVOaTAxTGprc01UZ3VNaTAxTGpsak5pNDRMREFzTVRNdU1Td3lMaklzTVRndU1pdzFMamtLQ1FrSll6SXVNeTB4TGpZc05TNDBMVEVzTnl3eExqTmpNQzQwTERBdU5pd3dMamNzTVM0ekxEQXVPQ3d5WXpBdU5pd3dMaklzTVM0eExEQXVOaXd4TGpVc01TNHhZekl1Tnl3d0xqZ3NOQzR5TERNdU5Td3pMalFzTmk0eWJEQXNNR014TGprc01Td3lMamNzTXk0eUxERXVPU3cxTGpJS0NRa0pZekV1T1N3eUxERXVPQ3cxTGpJdE1DNHlMRGRqTFRBdU5Dd3dMalF0TUM0NUxEQXVOeTB4TGpVc01XTXdMREF1TlN3d0xEQXVPU3d3TERFdU5IWXhhQzAyTW5ZdE1VZ3RORFY2SUUwdE5EUXVNaXd5TURjdU9HTXRNQzR6TERFdU1pMHdMalVzTWk0MExUQXVOaXd6TGpZS0NRa0pZeTB4TGpNdE1TMHhMall0TWk0NUxUQXVOaTAwTGpKc01Dd3dReTAwTlN3eU1EY3VOUzAwTkM0MkxESXdOeTQzTFRRMExqSXNNakEzTGpoTUxUUTBMaklzTWpBM0xqaDZJRTB0TkRJdU55d3lNRE11TW1NdE1DNDBMREF1T1Mwd0xqY3NNUzQ0TFRFc01pNDNDZ2tKQ1dNdE1TMHdMalF0TVM0MkxURXVOUzB4TGpNdE1pNDFZekF1TWkwd0xqVXNNQzQyTFRBdU9Td3hMakV0TVM0eVF5MDBNeTQxTERJd01pNDJMVFF6TGpFc01qQXlMamt0TkRJdU55d3lNRE11TWt3dE5ESXVOeXd5TURNdU1ub2dUUzAwTUM0MExERTVPQzQzQ2drSkNXTXRNQzQxTERBdU9TMHhMREV1T0MweExqVXNNaTQzWXkweExqTXRNUzB4TGpVdE1pNDVMVEF1TlMwMExqSmpNQzR4TFRBdU1pd3dMak10TUM0ekxEQXVOQzB3TGpWRExUUXhMamNzTVRrM0xqWXROREV1TVN3eE9UZ3VNeTAwTUM0MExERTVPQzQzZWlCTkxUTTVMaklzTVRrM0Nna0pDV013TGpNdE1DNDFMREF1TnkweExERXVNUzB4TGpWakxUQXVNeTB3TGpVdE1DNDVMVEF1TnkweExqUXRNQzQwY3kwd0xqY3NNQzQ1TFRBdU5Dd3hMalJETFRNNUxqY3NNVGsyTGpjdE16a3VOU3d4T1RZdU9TMHpPUzR5TERFNU4wd3RNemt1TWl3eE9UZDZJRTB0TXpNdU9Td3hPVEV1TWdvSkNRbGpMVEVzTUM0NUxUSXNNUzQ0TFRJdU9Td3lMamhqTFRBdU15MHdMak10TUM0M0xUQXVOaTB4TGpFdE1DNDRZekF1TkMweExqWXNNaTR4TFRJdU5Td3pMamN0TWk0eFF5MHpOQzR4TERFNU1TNHhMVE0wTERFNU1TNHlMVE16TGprc01Ua3hMakpNTFRNekxqa3NNVGt4TGpKNklFMDRMamdzTVRrMENna0pDV010TUM0NUxURXRNUzQ1TFRFdU9TMHlMamt0TWk0NFl6RXVOUzB3TGpZc015NHpMREF1TVN3ekxqa3NNUzQzWXpBc01DNHhMREF1TVN3d0xqSXNNQzR4TERBdU0wTTVMalVzTVRrekxqUXNPUzR4TERFNU15NDJMRGd1T0N3eE9UUk1PQzQ0TERFNU5Ib2dUVEV3TGpFc01UazFMalVLQ1FrSll6QXVOQ3d3TGpVc01DNDRMREVzTVM0eExERXVOR013TGpVdE1DNHhMREF1T1Mwd0xqY3NNQzQ0TFRFdU1tTXRNQzR4TFRBdU5TMHdMamN0TUM0NUxURXVNaTB3TGpoRE1UQXVOU3d4T1RVdU1Td3hNQzR6TERFNU5TNHpMREV3TGpFc01UazFMalY2SUUweE15NDVMREl3TVM0MENna0pDV010TUM0MUxUQXVPUzB3TGprdE1TNDRMVEV1TlMweUxqZGpNQzQ0TFRBdU5Dd3hMalF0TVM0eExERXVOaTB5WXpFdU15d3hMakVzTVM0MExETXNNQzQwTERRdU1rTXhOQzR5TERJd01TNHhMREUwTERJd01TNHlMREV6TGprc01qQXhMalI2SUUweE5TNDNMREl3TlM0NUNna0pDV010TUM0ekxUQXVPUzB3TGpZdE1TNDRMVEV0TWk0M1l6QXVOQzB3TGpNc01DNDRMVEF1Tml3eExqSXRNV014TERBdU5Td3hMalFzTVM0M0xERXNNaTQzUXpFMkxqWXNNakExTGpNc01UWXVNaXd5TURVdU55d3hOUzQzTERJd05TNDVlaUJOTVRZdU9Dd3lNVEV1TkFvSkNRbGpMVEF1TVMweExqSXRNQzQwTFRJdU5DMHdMall0TXk0Mll6QXVOUzB3TGpFc01DNDVMVEF1TkN3eExqSXRNQzQyUXpFNExqUXNNakE0TGpVc01UZ3VNU3d5TVRBdU5Dd3hOaTQ0TERJeE1TNDBUREUyTGpnc01qRXhMalJNTVRZdU9Dd3lNVEV1TkhvZ1RURTFMREl4TkFvSkNRbGpMVEF1TlMweE5pMHhNeTQ1TFRJNExqWXRNamt1T1MweU9DNHhZeTB4TlM0ekxEQXVOUzB5Tnk0MkxERXlMamd0TWpndU1Td3lPQzR4U0RFMVRERTFMREl4TkhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEsnO1xyXG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gICBGaWxlIE5hbWU6IHBhbGxldHRlLWdyYWRpZW50LnNjc3NcclxuLy8gICBEZXNjcmlwdGlvbjogZ3JhZGllbnQgY29sb3Igc3lzdGVtIHN0eWxlc1xyXG4vLyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gICBJdGVtIE5hbWU6IFZ1ZXh5IC0gVnVlanMsIFJlYWN0LCBBbmd1bGFyLCBIVE1MICYgTGFyYXZlbCBBZG1pbiBEYXNoYm9hcmQgVGVtcGxhdGVcclxuLy8gICBBdXRob3I6IFBJWElOVkVOVFxyXG4vLyAgIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGZ1bmN0aW9uIGNvbG9yLWZ1bmN0aW9uKCRjb2xvciwgJHR5cGUpIHtcclxuICBAaWYgbWFwLWhhcy1rZXkoJGNvbG9ycywgJGNvbG9yKSB7XHJcbiAgICAkY3Vycl9jb2xvcjogbWFwLWdldCgkY29sb3JzLCAkY29sb3IpO1xyXG4gICAgQGlmIG1hcC1oYXMta2V5KCRjdXJyX2NvbG9yLCAkdHlwZSkge1xyXG4gICAgICBAcmV0dXJuIG1hcC1nZXQoJGN1cnJfY29sb3IsICR0eXBlKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gQHdhcm4gXCJVbmtub3duIGAje25hbWV9YCBpbiAkY29sb3JzLlwiO1xyXG4gIEByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLy8gQ29sb3IgcGFsZXR0ZXNcclxuQGltcG9ydCAncGFsZXR0ZS12YXJpYWJsZXMnO1xyXG5cclxuQGltcG9ydCAnYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmFkaWVudHMnO1xyXG5AaW1wb3J0ICdib290c3RyYXAvc2Nzcy9taXhpbnMvZ3JhZGllbnRzJztcclxuXHJcbkBlYWNoICRjb2xvcl9uYW1lLCAkY29sb3IgaW4gJGNvbG9ycyB7XHJcbiAgQGVhY2ggJGNvbG9yX3R5cGUsICRjb2xvcl92YWx1ZSBpbiAkY29sb3Ige1xyXG4gICAgQGlmICRjb2xvcl90eXBlID09ICdiYXNlJyB7XHJcbiAgICAgIEBpZiAoJGNvbG9yX25hbWUgIT0gJ2xpZ2h0JyBhbmQgJGNvbG9yX25hbWUgIT0gJ2JsYWNrJyBhbmQgJGNvbG9yX25hbWUgIT0gJ3doaXRlJykge1xyXG4gICAgICAgIC5iZy1ncmFkaWVudC0jeyRjb2xvcl9uYW1lfSxcclxuICAgICAgICAuYnRuLWdyYWRpZW50LSN7JGNvbG9yX25hbWV9IHtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgICAgQGlmICRjb2xvcl9uYW1lID09ICdkYXJrJyB7XHJcbiAgICAgICAgICAgIEBpZiAoY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdiYXNlJykgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGdyYWRpZW50LWRpcmVjdGlvbmFsKG1hcC1nZXQoKCRjb2xvciksICdiYXNlJyksIG1hcC1nZXQoKCRjb2xvciksICdkYXJrZW4tMicpLCA0N2RlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZm9yIGRhcmsgbGF5b3V0XHJcbiAgICAgICAgICAgIC5kYXJrLWxheW91dCAmIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnZGFya2VuLTInKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgNDdkZWcpO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICAgIH0gQGVsc2Uge1xyXG4gICAgICAgICAgICBAaWYgKGNvbG9yLWZ1bmN0aW9uKCRjb2xvcl9uYW1lLCAnYmFzZScpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnYmFzZScpLCBtYXAtZ2V0KCgkY29sb3IpLCAnbGlnaHRlbi0yJyksIDQ3ZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICY6YWN0aXZlLFxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIEBpZiAoY29sb3ItZnVuY3Rpb24oJGNvbG9yX25hbWUsICdkYXJrZW4tMicpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBncmFkaWVudC1kaXJlY3Rpb25hbChtYXAtZ2V0KCgkY29sb3IpLCAnZGFya2VuLTInKSwgbWFwLWdldCgoJGNvbG9yKSwgJ2Jhc2UnKSwgNDdkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIEdyYWRpZW50c1xuXG5AbWl4aW4gZ3JhZGllbnQtYmcoJGNvbG9yKSB7XG4gIEBpZiAkZW5hYmxlLWdyYWRpZW50cyB7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIG1peCgkYm9keS1iZywgJGNvbG9yLCAxNSUpLCAkY29sb3IpIHJlcGVhdC14O1xuICB9IEBlbHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBncmFkaWVudCwgZnJvbSBsZWZ0IHRvIHJpZ2h0XG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbkBtaXhpbiBncmFkaWVudC14KCRzdGFydC1jb2xvcjogJGdyYXktNzAwLCAkZW5kLWNvbG9yOiAkZ3JheS04MDAsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gVmVydGljYWwgZ3JhZGllbnQsIGZyb20gdG9wIHRvIGJvdHRvbVxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG5AbWl4aW4gZ3JhZGllbnQteSgkc3RhcnQtY29sb3I6ICRncmF5LTcwMCwgJGVuZC1jb2xvcjogJGdyYXktODAwLCAkc3RhcnQtcGVyY2VudDogMCUsICRlbmQtcGVyY2VudDogMTAwJSkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkc3RhcnQtY29sb3IgJHN0YXJ0LXBlcmNlbnQsICRlbmQtY29sb3IgJGVuZC1wZXJjZW50KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG5AbWl4aW4gZ3JhZGllbnQtZGlyZWN0aW9uYWwoJHN0YXJ0LWNvbG9yOiAkZ3JheS03MDAsICRlbmQtY29sb3I6ICRncmF5LTgwMCwgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRkZWcsICRzdGFydC1jb2xvciwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cbkBtaXhpbiBncmFkaWVudC14LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yLCAkbWlkLWNvbG9yICRjb2xvci1zdG9wLCAkZW5kLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC15LXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICRibHVlLCAkbWlkLWNvbG9yOiAkcHVycGxlLCAkY29sb3Itc3RvcDogNTAlLCAkZW5kLWNvbG9yOiAkcmVkKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXJhZGlhbCgkaW5uZXItY29sb3I6ICRncmF5LTcwMCwgJG91dGVyLWNvbG9yOiAkZ3JheS04MDApIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgJGlubmVyLWNvbG9yLCAkb3V0ZXItY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuQG1peGluIGdyYWRpZW50LXN0cmlwZWQoJGNvbG9yOiByZ2JhKCR3aGl0ZSwgLjE1KSwgJGFuZ2xlOiA0NWRlZykge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGFuZ2xlLCAkY29sb3IgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDUwJSwgJGNvbG9yIDUwJSwgJGNvbG9yIDc1JSwgdHJhbnNwYXJlbnQgNzUlLCB0cmFuc3BhcmVudCk7XG59XG4iLCIvLyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vICBGaWxlIE5hbWU6IHZhcmlhYmxlcy1kYXJrLnNjc3NcclxuLy8gIERlc2NyaXB0aW9uOiBDdXN0b20gZGFyayB0aGVtZSB2YXJpYWJsZXNcclxuLy8gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEl0ZW0gTmFtZTogVnVleHkgLSBWdWVqcywgUmVhY3QsIEFuZ3VsYXIsIEhUTUwgJiBMYXJhdmVsIEFkbWluIERhc2hib2FyZCBUZW1wbGF0ZVxyXG4vLyAgQXV0aG9yOiBQSVhJTlZFTlRcclxuLy8gIEF1dGhvciBVUkw6IGh0dHA6Ly93d3cudGhlbWVmb3Jlc3QubmV0L3VzZXIvcGl4aW52ZW50XHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbi8vICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gIFdBUk5JTkc6IFBMRUFTRSBETyBOT1QgQ0hBTkdFIFRISVMgVkFSSUFCTEUgRklMRS5cclxuLy8gIFRISVMgRklMRSBXSUxMIEdFVCBPVkVSV1JJVFRFTiBXSVRIIEVBQ0ggVlVFWFkgSFRNTCBURU1QTEFURSBSRUxFQVNFLlxyXG4vLyAgVElQOlxyXG4vLyAgV2Ugc3VnZ2VzdCB5b3UgdG8gdXNlIHRoaXMgKGFzc2V0cy9zY3NzL3ZhcmlhYmxlcy9fdmFyaWFibGVzLWNvbXBvbmVudHMuc2NzcykgZmlsZSBmb3Igb3ZlcnJpZGluZyBjb21wb25lbnRzIHZhcmlhYmxlcy5cclxuLy8gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy9Cb2R5XHJcbiR0aGVtZS1kYXJrLWJvZHktYmc6ICMxNjFkMzEgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvZHktY29sb3I6ICNiNGI3YmQgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWJvcmRlci1jb2xvcjogIzNiNDI1MyAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY3VzdG9tLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAjNDQ0MDVlICFkZWZhdWx0O1xyXG5cclxuLy9UeXBvZ3JhcGh5XHJcbiR0aGVtZS1kYXJrLWhlYWRpbmdzLWNvbG9yOiAjZDBkMmQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1sYWJlbC1jb2xvcjogI2QwZDJkNiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGV4dC1tdXRlZC1jb2xvcjogIzY3NmQ3ZCAhZGVmYXVsdDtcclxuXHJcbi8vQ2FyZFxyXG4kdGhlbWUtZGFyay1jYXJkLWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay1ib3gtc2hhZG93OiAwIDRweCAyNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjQpO1xyXG5cclxuLy9JbnB1dFxyXG4kdGhlbWUtZGFyay1pbnB1dC1iZzogIzI4MzA0NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICM2NzZkN2QgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWJvcmRlci1jb2xvcjogIzQwNDY1NiAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstaW5wdXQtZGlzYWJsZWQtYmc6ICMyNDIzM2EgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLWlucHV0LWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzQ0NGI2MCAhZGVmYXVsdDtcclxuXHJcbi8vIFN3aXRjaFxyXG4kdGhlbWUtZGFyay1zd2l0Y2gtYmc6ICM1NDVhNmE7XHJcbiR0aGVtZS1kYXJrLXN3aXRjaC1iZy1kaXNhYmxlZDogIzFiMjMzNztcclxuXHJcbi8vVGFibGVcclxuJHRoZW1lLWRhcmstdGFibGUtYmc6ICMyODMwNDYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXRhYmxlLWhlYWRlci1iZzogIzM0M2Q1NSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtcm93LWJnOiAjMjgzMDQ2ICFkZWZhdWx0O1xyXG4kdGhlbWUtZGFyay10YWJsZS1ob3Zlci1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstdGFibGUtc3RyaXBlZC1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuXHJcbiR0aGVtZS1kYXJrLW1vZGFsLWhlYWRlci1iZzogIzE2MWQzMSAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstcGFnaW5hdGlvbi1iZzogIzI0MmIzZCAhZGVmYXVsdDtcclxuJHRoZW1lLWRhcmstY2hhcnQtYmc6ICMzODQwNTYgIWRlZmF1bHQ7XHJcbiR0aGVtZS1kYXJrLXdpZGdldC1iZzogIzM4NDA1NiAhZGVmYXVsdDtcclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 9960:
/*!*************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesModule": () => (/* binding */ DatatablesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ctrl/ngx-csv */ 30839);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 33935);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 76826);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/datatables/datatables.component */ 12716);
/* harmony import */ var app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/tables/datatables/datatables.service */ 7502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);












const routes = [
    {
        path: 'datatables',
        component: app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__.DatatablesComponent,
        resolve: {
            datatables: app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__.DatatablesService
        },
        data: { animation: 'datatables' }
    }
];
class DatatablesModule {
}
DatatablesModule.ɵfac = function DatatablesModule_Factory(t) { return new (t || DatatablesModule)(); };
DatatablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DatatablesModule });
DatatablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [app_main_tables_datatables_datatables_service__WEBPACK_IMPORTED_MODULE_4__.DatatablesService], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__.CsvModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DatatablesModule, { declarations: [app_main_tables_datatables_datatables_component__WEBPACK_IMPORTED_MODULE_3__.DatatablesComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule,
        app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule,
        _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__.NgxDatatableModule,
        _ctrl_ngx_csv__WEBPACK_IMPORTED_MODULE_10__.CsvModule] }); })();


/***/ }),

/***/ 7502:
/*!**************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatablesService": () => (/* binding */ DatatablesService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);



class DatatablesService {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onDatatablessChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route, state) {
        return new Promise((resolve, reject) => {
            Promise.all([this.getDataTableRows()]).then(() => {
                resolve();
            }, reject);
        });
    }
    /**
     * Get rows
     */
    getDataTableRows() {
        return new Promise((resolve, reject) => {
            this._httpClient.get('api/datatable-rows').subscribe((response) => {
                this.rows = response;
                this.onDatatablessChanged.next(this.rows);
                resolve(this.rows);
            }, reject);
        });
    }
}
DatatablesService.ɵfac = function DatatablesService_Factory(t) { return new (t || DatatablesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
DatatablesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatatablesService, factory: DatatablesService.ɵfac });


/***/ }),

/***/ 29239:
/*!******************************************************************!*\
  !*** ./src/app/main/tables/datatables/datatables.snippetcode.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "snippetCodeCustomCheckbox": () => (/* binding */ snippetCodeCustomCheckbox),
/* harmony export */   "snippetCodeInlineEditing": () => (/* binding */ snippetCodeInlineEditing),
/* harmony export */   "snippetCodeKitchenSink": () => (/* binding */ snippetCodeKitchenSink),
/* harmony export */   "snippetCodeMultilangual": () => (/* binding */ snippetCodeMultilangual),
/* harmony export */   "snippetCodeResponsive": () => (/* binding */ snippetCodeResponsive),
/* harmony export */   "snippetCodeRowDetails": () => (/* binding */ snippetCodeRowDetails)
/* harmony export */ });
const snippetCodeKitchenSink = {
    html: `
<div class="row">
  <div class="col-12 mb-50">
    <button class="btn btn-primary ml-1" rippleEffect>
      <i data-feather="plus" class="mr-0 mr-sm-1"></i
      ><span class="d-none d-sm-inline-block">Add New Record</span>
    </button>

    <a csvLink [data]="exportCSVData" class="btn btn-outline-secondary float-right mr-1" rippleEffect
      >Export CSV</a
    >
  </div>
  <div class="col-md-6 col-12">
    <div class="d-flex justify-content-between align-items-center m-1">
      <label class="d-flex align-items-center"
        >Show
        <select class="form-control mx-25" [(ngModel)]="basicSelectedOption">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries</label
      >
    </div>
  </div>
  <div class="col-md-6 col-12 d-flex justify-content-md-end">
    <div class="d-flex align-items-center justify-content-end pr-1 pb-1 pl-1 pl-md-0 pb-md-0">
      <label class="d-flex align-items-center"
        >Search<input
          type="search"
          placeholder="Search"
          class="form-control ml-25"
          (keyup)="filterUpdate($event)"
          (search)="filterUpdate($event)"
      /></label>
    </div>
  </div>
</div>
<ngx-datatable
  [rows]="kitchenSinkRows"
  [rowHeight]="58"
  class="bootstrap core-bootstrap"
  [limit]="10"
  [columnMode]="ColumnMode.force"
  [headerHeight]="40"
  [footerHeight]="50"
  [scrollbarH]="true"
  [selectionType]="SelectionType.checkbox"
  [limit]="basicSelectedOption"
  (activate)="onActivate($event)"
  (select)="onSelect($event)"
>
  <ngx-datatable-column
    [width]="50"
    [sortable]="false"
    [canAutoResize]="false"
    [draggable]="false"
    [resizeable]="false"
  >
    <ng-template
      ngx-datatable-header-template
      let-value="value"
      let-allRowsSelected="allRowsSelected"
      let-selectFn="selectFn"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          [checked]="allRowsSelected"
          (change)="selectFn(!allRowsSelected)"
          id="headerChkbxRef"
        />
        <label class="custom-control-label" for="headerChkbxRef"></label>
      </div>
    </ng-template>
    <ng-template
      ngx-datatable-cell-template
      let-rowIndex="rowIndex"
      let-value="value"
      let-isSelected="isSelected"
      let-onCheckboxChangeFn="onCheckboxChangeFn"
    >
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          [checked]="isSelected"
          (change)="onCheckboxChangeFn($event)"
          id="rowChkbxRef{{ rowIndex }}"
        />
        <label class="custom-control-label" for="rowChkbxRef{{ rowIndex }}"></label>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Name" prop="full_name" [width]="280">
    <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div *ngIf="row.avatar.length > 0; else customAvatar">
          <img
            class="rounded-circle mr-1"
            src="assets/images/portrait/small/{{ row.avatar }}"
            height="32"
            width="32"
            alt="datatable-avatar"
          />
        </div>
        <ng-template #customAvatar>
          <div
            class="avatar mr-1 ml-0"
            [ngClass]="{
              'bg-light-primary': row.status == '1',
              'bg-light-success': row.status == '2',
              'bg-light-danger': row.status == '3',
              'bg-light-warning': row.status == '4',
              'bg-light-info': row.status == '5'
            }"
          >
            <div class="avatar-content">{{ name | initials }}</div>
          </div>
        </ng-template>
        <div class="cell-line-height">
          <p class="font-medium-1 font-weight-bold line-height-1 mb-25">
            {{ name }}
          </p>
          <span class="text-muted font-small-2"> {{ row.post }}</span>
        </div>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
  <ngx-datatable-column name="Date" prop="start_date" [width]="120"></ngx-datatable-column>
  <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
  <ngx-datatable-column name="Status" prop="status" [width]="120">
    <ng-template let-status="value" ngx-datatable-cell-template>
      <div
        class="badge badge-pill"
        [ngClass]="{
          'badge-light-primary': status == '1',
          'badge-light-success': status == '2',
          'badge-light-danger': status == '3',
          'badge-light-warning': status == '4',
          'badge-light-info': status == '5'
        }"
      >
        {{
          status == 1
            ? 'Current'
            : status == 2
            ? 'Professional'
            : status == 3
            ? 'Rejected'
            : status == 4
            ? 'Resigned'
            : status == 5
            ? 'Applied'
            : 'Applied'
        }}
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `
  public kitchenSinkRows: any;
  public basicSelectedOption: number = 10;
  public SelectionType = SelectionType;

  /**
   * Method Search (filter)
   *
   * @param event
   */
  filterUpdate(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempData.filter(function (d) {
      return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.kitchenSinkRows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.kitchenSinkRows = this.rows;
      this.exportCSVData = this.rows;
    });
  }
  `
};
const snippetCodeInlineEditing = {
    html: `
<ngx-datatable
  class="bootstrap core-bootstrap"
  [headerHeight]="40"
  [rowHeight]="58"
  [limit]="10"
  [columnMode]="ColumnMode.force"
  [footerHeight]="50"
  [rows]="rows"
  [scrollbarH]="true"
>
  <ngx-datatable-column [width]="280" name="Name" prop="full_name">
    <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingName[rowIndex + '-full_name'] = true"
        *ngIf="!editingName[rowIndex + '-full_name']"
      >
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ value | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ value }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateName($event, 'full_name', rowIndex)"
        *ngIf="editingName[rowIndex + '-full_name']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="120" name="Status" prop="status">
    <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row" let-value="value">
      <div
        title="Double click to edit"
        (dblclick)="editingStatus[rowIndex + '-status'] = true"
        *ngIf="!editingStatus[rowIndex + '-status']"
      >
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': value == '1',
            'badge-light-success': value == '2',
            'badge-light-danger': value == '3',
            'badge-light-warning': value == '4',
            'badge-light-info': value == '5'
          }"
        >
          {{
            value == 1
              ? 'Current'
              : value == 2
              ? 'Professional'
              : value == 3
              ? 'Rejected'
              : value == 4
              ? 'Resigned'
              : value == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </div>
      <select
        *ngIf="editingStatus[rowIndex + '-status']"
        (blur)="editingStatus[rowIndex + '-status'] = false"
        (change)="inlineEditingUpdateStatus($event, 'status', rowIndex)"
        [value]="value"
        class="form-control form-control-sm"
      >
        <option value="1">Current</option>
        <option value="2">Professional</option>
        <option value="3">Rejected</option>
        <option value="4">Resigned</option>
        <option value="5">Applied</option>
      </select>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="50" name="Age" prop="age">
    <ng-template ngx-datatable-cell-template let-value="value" let-rowIndex="rowIndex" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingAge[rowIndex + '-age'] = true"
        *ngIf="!editingAge[rowIndex + '-age']"
      >
        {{ value }}
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateAge($event, 'age', rowIndex)"
        *ngIf="editingAge[rowIndex + '-age']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column [width]="100" name="Salary" prop="salary" [width]="120">
    <ng-template ngx-datatable-cell-template let-value="value" let-rowIndex="rowIndex" let-row="row">
      <div
        title="Double click to edit"
        (dblclick)="editingSalary[rowIndex + '-salary'] = true"
        *ngIf="!editingSalary[rowIndex + '-salary']"
      >
        {{ value }}
      </div>
      <input
        autofocus
        class="form-control form-control-sm"
        (blur)="inlineEditingUpdateSalary($event, 'salary', rowIndex)"
        *ngIf="editingSalary[rowIndex + '-salary']"
        type="text"
        [value]="value"
      />
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `

  public editingName = {};
  public editingStatus = {};
  public editingAge = {};
  public editingSalary = {};

  /**
   * Inline editing Name
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateName(event, cell, rowIndex) {
    this.editingName[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Age
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateAge(event, cell, rowIndex) {
    this.editingAge[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Salary
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateSalary(event, cell, rowIndex) {
    this.editingSalary[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * Inline editing Status
   *
   * @param event
   * @param cell
   * @param rowIndex
   */
  inlineEditingUpdateStatus(event, cell, rowIndex) {
    this.editingStatus[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeRowDetails = {
    html: `
  <!-- ngx-datatable-row-details -->
  <ngx-datatable
    #tableRowDetails
    class="bootstrap core-bootstrap"
    [columnMode]="ColumnMode.force"
    [headerHeight]="40"
    [footerHeight]="50"
    [rowHeight]="58"
    [limit]="10"
    [rows]="rows"
    [scrollbarH]="true"
  >
    <!-- Row Detail Template -->
    <ngx-datatable-row-detail [rowHeight]="50">
      <ng-template let-row="row" let-expanded="expanded" ngx-datatable-row-detail-template>
        <div class="ml-75 pl-5 pt-75">
          <div>
            <span><strong>City : </strong> {{ row.city }}</span
            ><span class="ml-1"><strong>Experience : </strong> {{ row.experience }}</span
            ><span class="ml-1"><strong>Start Date : </strong> {{ row.start_date }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-row-detail>
    <ngx-datatable-column
      [width]="50"
      [resizeable]="false"
      [sortable]="false"
      [draggable]="false"
      [canAutoResize]="false"
    >
      <ng-template let-row="row" let-expanded="expanded" ngx-datatable-cell-template>
        <a
          href="javascript:void(0)"
          [class.datatable-icon-right]="!expanded"
          [class.datatable-icon-down]="expanded"
          title="Expand/Collapse Row"
          (click)="rowDetailsToggleExpand(row)"
        >
        </a>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Name" prop="full_name" [width]="280">
      <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ name | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
    <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
    <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
    <ngx-datatable-column name="Status" prop="status" [width]="120">
      <ng-template let-status="value" ngx-datatable-cell-template>
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': status == '1',
            'badge-light-success': status == '2',
            'badge-light-danger': status == '3',
            'badge-light-warning': status == '4',
            'badge-light-info': status == '5'
          }"
        >
          {{
            status == 1
              ? 'Current'
              : status == 2
              ? 'Professional'
              : status == 3
              ? 'Rejected'
              : status == 4
              ? 'Resigned'
              : status == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
      <ng-template ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div ngbDropdown container="body">
            <a
              ngbDropdownToggle
              href="javascript:void(0);"
              class="hide-arrow"
              id="dropdownBrowserState"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
            </a>
            <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="file-text" class="mr-50"></i> Details</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="archive" class="mr-50"></i> Archive</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="trash-2" class="mr-50"></i> Delete</a
              >
            </div>
          </div>

          <i data-feather="edit" class="text-primary cursor-pointer"></i>
        </div>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
  <!-- ngx-datatable-row-details -->
  `,
    ts: `

  @ViewChild('tableRowDetails') tableRowDetails: any;

  public ColumnMode = ColumnMode;

  /**
   * rowDetailsToggleExpand
   *
   * @param row
   */
  rowDetailsToggleExpand(row) {
    this.tableRowDetails.rowDetail.toggleExpandRow(row);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeCustomCheckbox = {
    html: `
<!-- ngx-datatable-custom-checkbox -->
  <div class="row">
    <div class="col-12">
      <ngx-datatable
        class="bootstrap core-bootstrap"
        [rows]="rows"
        [columnMode]="ColumnMode.force"
        [headerHeight]="40"
        [footerHeight]="50"
        [rowHeight]="58"
        [limit]="10"
        [selected]="chkBoxSelected"
        [selectionType]="SelectionType.checkbox"
        (select)="customChkboxOnSelect($event)"
        [scrollbarH]="true"
        (activate)="onActivate($event)"
        (select)="onSelect($event)"
      >
        <ngx-datatable-column
          [width]="50"
          [sortable]="false"
          [canAutoResize]="false"
          [draggable]="false"
          [resizeable]="false"
        >
          <ng-template
            ngx-datatable-header-template
            let-value="value"
            let-allRowsSelected="allRowsSelected"
            let-selectFn="selectFn"
          >
            <div class="custom-control custom-control-primary custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                [checked]="allRowsSelected"
                (change)="selectFn(!allRowsSelected)"
                id="headerCustomChkbxRef"
              />
              <label class="custom-control-label" for="headerCustomChkbxRef"></label>
            </div>
          </ng-template>
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-isSelected="isSelected"
            let-onCheckboxChangeFn="onCheckboxChangeFn"
          >
            <div class="custom-control custom-control-primary custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                [checked]="isSelected"
                (change)="onCheckboxChangeFn($event)"
                id="rowCustomChkbxRef{{ rowIndex }}"
              />
              <label class="custom-control-label" for="rowCustomChkbxRef{{ rowIndex }}"></label>
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Name" prop="full_name" [width]="280">
          <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
            <div class="d-flex align-items-center">
              <div *ngIf="row.avatar.length > 0; else customAvatar">
                <img
                  class="rounded-circle mr-1"
                  src="assets/images/portrait/small/{{ row.avatar }}"
                  height="32"
                  width="32"
                  alt="datatable-avatar"
                />
              </div>
              <ng-template #customAvatar>
                <div
                  class="avatar mr-1 ml-0"
                  [ngClass]="{
                    'bg-light-primary': row.status == '1',
                    'bg-light-success': row.status == '2',
                    'bg-light-danger': row.status == '3',
                    'bg-light-warning': row.status == '4',
                    'bg-light-info': row.status == '5'
                  }"
                >
                  <div class="avatar-content">{{ name | initials }}</div>
                </div>
              </ng-template>
              <div class="cell-line-height">
                <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
                <span class="text-muted font-small-2"> {{ row.post }}</span>
              </div>
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
        <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
        <ngx-datatable-column name="Salary" prop="salary" [width]="120"></ngx-datatable-column>
        <ngx-datatable-column name="Status" prop="status" [width]="120">
          <ng-template let-status="value" ngx-datatable-cell-template>
            <div
              class="badge badge-pill"
              [ngClass]="{
                'badge-light-primary': status == '1',
                'badge-light-success': status == '2',
                'badge-light-danger': status == '3',
                'badge-light-warning': status == '4',
                'badge-light-info': status == '5'
              }"
            >
              {{
                status == 1
                  ? 'Current'
                  : status == 2
                  ? 'Professional'
                  : status == 3
                  ? 'Rejected'
                  : status == 4
                  ? 'Resigned'
                  : status == 5
                  ? 'Applied'
                  : 'Applied'
              }}
            </div>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Actions" [width]="120" [sortable]="false">
          <ng-template ngx-datatable-cell-template>
            <div class="d-flex align-items-center">
              <div ngbDropdown container="body">
                <a
                  ngbDropdownToggle
                  href="javascript:void(0);"
                  class="hide-arrow"
                  id="dropdownBrowserState"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
                </a>
                <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="file-text" class="mr-50"></i> Details</a
                  >
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="archive" class="mr-50"></i> Archive</a
                  >
                  <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                    ><i data-feather="trash-2" class="mr-50"></i> Delete</a
                  >
                </div>
              </div>

              <i data-feather="edit" class="text-primary cursor-pointer"></i>
            </div>
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
    <div class="selected-column col-12 mt-1">
      <hr class="w-100" />
      <h5 class="mx-1">
        Selections <small>({{ chkBoxSelected?.length }})</small>
      </h5>
      <ul>
        <li *ngFor="let sel of chkBoxSelected">
          {{ sel.full_name }}
        </li>
        <li *ngIf="!chkBoxSelected?.length">No Selections</li>
      </ul>
    </div>
  </div>
  <!--/ ngx-datatable-custom-checkbox -->
  `,
    ts: `

  @ViewChild('tableRowDetails') tableRowDetails: any;

  public ColumnMode = ColumnMode;

  public chkBoxSelected = [];

  /**
   * customChkboxOnSelect
   *
   * @param { selected }
   */
  customChkboxOnSelect({ selected }) {
    this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
    this.chkBoxSelected.push(...selected);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }

  `
};
const snippetCodeResponsive = {
    html: `
  <!-- ngx-datatables responsive -->
  <ngx-datatable
    #table
    class="bootstrap core-bootstrap"
    [columnMode]="ColumnMode.force"
    [headerHeight]="40"
    [rowHeight]="58"
    [footerHeight]="50"
    rowHeight="auto"
    [limit]="10"
    [rows]="rows"
    [scrollbarH]="true"
  >
    <ngx-datatable-column name="Name" prop="full_name" [width]="280">
      <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div *ngIf="row.avatar.length > 0; else customAvatar">
            <img
              class="rounded-circle mr-1"
              src="assets/images/portrait/small/{{ row.avatar }}"
              height="32"
              width="32"
              alt="datatable-avatar"
            />
          </div>
          <ng-template #customAvatar>
            <div
              class="avatar mr-1 ml-0"
              [ngClass]="{
                'bg-light-primary': row.status == '1',
                'bg-light-success': row.status == '2',
                'bg-light-danger': row.status == '3',
                'bg-light-warning': row.status == '4',
                'bg-light-info': row.status == '5'
              }"
            >
              <div class="avatar-content">{{ name | initials }}</div>
            </div>
          </ng-template>
          <div class="cell-line-height">
            <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
            <span class="text-muted font-small-2"> {{ row.post }}</span>
          </div>
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Email" prop="email" [width]="250"></ngx-datatable-column>
    <ngx-datatable-column name="Age" prop="age" [width]="50"></ngx-datatable-column>
    <ngx-datatable-column name="Status" prop="status" [width]="120">
      <ng-template let-status="value" ngx-datatable-cell-template>
        <div
          class="badge badge-pill"
          [ngClass]="{
            'badge-light-primary': status == '1',
            'badge-light-success': status == '2',
            'badge-light-danger': status == '3',
            'badge-light-warning': status == '4',
            'badge-light-info': status == '5'
          }"
        >
          {{
            status == 1
              ? 'Current'
              : status == 2
              ? 'Professional'
              : status == 3
              ? 'Rejected'
              : status == 4
              ? 'Resigned'
              : status == 5
              ? 'Applied'
              : 'Applied'
          }}
        </div>
      </ng-template>
    </ngx-datatable-column>
    <ngx-datatable-column name="Action" [width]="120" [sortable]="false">
      <ng-template ngx-datatable-cell-template>
        <div class="d-flex align-items-center">
          <div ngbDropdown container="body">
            <a
              ngbDropdownToggle
              href="javascript:void(0);"
              class="hide-arrow"
              id="dropdownBrowserState"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
            </a>
            <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="file-text" class="mr-50"></i> Details</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="archive" class="mr-50"></i> Archive</a
              >
              <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
                ><i data-feather="trash-2" class="mr-50"></i> Delete</a
              >
            </div>
          </div>

          <i data-feather="edit" class="text-primary cursor-pointer"></i>
        </div>
      </ng-template>
    </ngx-datatable-column>
  </ngx-datatable>
  <!--/ ngx-datatables responsive -->
  `,
    ts: `
  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};
const snippetCodeMultilangual = {
    html: `
  <ngx-datatable
  #table
  class="bootstrap core-bootstrap"
  [columnMode]="ColumnMode.force"
  [headerHeight]="40"
  [rowHeight]="58"
  [footerHeight]="50"
  rowHeight="auto"
  [limit]="10"
  [rows]="rows"
  [scrollbarH]="true"
>
  <ngx-datatable-column name="{{ 'HEADER.NAME' | translate }}" prop="full_name" [width]="280">
    <ng-template let-row="row" let-name="value" ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div *ngIf="row.avatar.length > 0; else customAvatar">
          <img
            class="rounded-circle mr-1"
            src="assets/images/portrait/small/{{ row.avatar }}"
            height="32"
            width="32"
            alt="datatable-avatar"
          />
        </div>
        <ng-template #customAvatar>
          <div
            class="avatar mr-1 ml-0"
            [ngClass]="{
              'bg-light-primary': row.status == '1',
              'bg-light-success': row.status == '2',
              'bg-light-danger': row.status == '3',
              'bg-light-warning': row.status == '4',
              'bg-light-info': row.status == '5'
            }"
          >
            <div class="avatar-content">{{ name | initials }}</div>
          </div>
        </ng-template>
        <div class="cell-line-height">
          <p class="font-medium-1 line-height-1 mb-0">{{ name }}</p>
          <span class="text-muted font-small-2"> {{ row.post }}</span>
        </div>
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column
    name="{{ 'HEADER.EMAIL' | translate }}"
    prop="email"
    [width]="250"
  ></ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.AGE' | translate }}" prop="age" [width]="50"></ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.STATUS' | translate }}" prop="status" [width]="120">
    <ng-template let-status="value" ngx-datatable-cell-template>
      <div
        class="badge badge-pill"
        [ngClass]="{
          'badge-light-primary': status == '1',
          'badge-light-success': status == '2',
          'badge-light-danger': status == '3',
          'badge-light-warning': status == '4',
          'badge-light-info': status == '5'
        }"
      >
        {{
          status == 1
            ? 'Current'
            : status == 2
            ? 'Professional'
            : status == 3
            ? 'Rejected'
            : status == 4
            ? 'Resigned'
            : status == 5
            ? 'Applied'
            : 'Applied'
        }}
      </div>
    </ng-template>
  </ngx-datatable-column>
  <ngx-datatable-column name="{{ 'HEADER.ACTIONS' | translate }}" [width]="120" [sortable]="false">
    <ng-template ngx-datatable-cell-template>
      <div class="d-flex align-items-center">
        <div ngbDropdown container="body">
          <a
            ngbDropdownToggle
            href="javascript:void(0);"
            class="hide-arrow"
            id="dropdownBrowserState"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i data-feather="more-vertical" class="text-primary cursor-pointer mr-50"></i>
          </a>
          <div ngbDropdownMenu class="dropdown-menu-right" aria-labelledby="dropdownBrowserState">
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="file-text" class="mr-50"></i> Details</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="archive" class="mr-50"></i> Archive</a
            >
            <a href="javascript:void(0)" ngbDropdownItem class="d-flex align-items-center"
              ><i data-feather="trash-2" class="mr-50"></i> Delete</a
            >
          </div>
        </div>

        <i data-feather="edit" class="text-primary cursor-pointer"></i>
      </div>
    </ng-template>
  </ngx-datatable-column>
</ngx-datatable>
  `,
    ts: `
  constructor( private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(english, french, german, portuguese);
  }

  /**
   * On init
   */
  ngOnInit() {
    this._datatablesService.onDatatablessChanged.pipe(takeUntil(this._unsubscribeAll)).subscribe(response => {
      this.rows = response;
      this.tempData = this.rows;
    });
  }
  `
};


/***/ }),

/***/ 67084:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/de.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'de',
    data: {
        HEADER: {
            NAME: 'NAME',
            EMAIL: 'EMAIL',
            AGE: 'ALTER',
            STATUS: 'STATUS',
            ACTIONS: 'AKTIONEN'
        }
    }
};


/***/ }),

/***/ 12228:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/en.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'en',
    data: {
        HEADER: {
            NAME: 'NAME',
            EMAIL: 'EMAIL',
            AGE: 'AGE',
            STATUS: 'STATUS',
            ACTIONS: 'ACTIONS'
        }
    }
};


/***/ }),

/***/ 18383:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/fr.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'fr',
    data: {
        HEADER: {
            NAME: 'NOM',
            EMAIL: 'EMAIL',
            AGE: 'ÂGE',
            STATUS: 'STATUT',
            ACTIONS: 'ACTIONS'
        }
    }
};


/***/ }),

/***/ 49767:
/*!***************************************************!*\
  !*** ./src/app/main/tables/datatables/i18n/pt.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locale": () => (/* binding */ locale)
/* harmony export */ });
const locale = {
    lang: 'pt',
    data: {
        HEADER: {
            NAME: 'NOME',
            EMAIL: 'O EMAIL',
            AGE: 'ERA',
            STATUS: 'STATUS',
            ACTIONS: 'AÇÕES'
        }
    }
};


/***/ }),

/***/ 13742:
/*!******************************************************!*\
  !*** ./src/app/main/tables/table/table.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableComponent": () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/layout/components/content-header/content-header.component */ 4810);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);




class TableComponent {
    constructor() { }
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ngOnInit() {
        // content header
        this.contentHeader = {
            headerTitle: 'Bootstrap Tables',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Table',
                        isLink: true,
                        link: '/'
                    },
                    {
                        name: 'Bootstrap Tables',
                        isLink: false
                    }
                ]
            }
        };
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
TableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], decls: 2354, vars: 1, consts: [[1, "content-wrapper", "container-xxl", "p-0"], [1, "content-body"], [3, "contentHeader"], ["id", "basic-table", 1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "table-responsive"], [1, "table"], ["src", "assets/images/icons/angular.svg", "height", "20", "width", "20", "alt", "Angular", 1, "mr-75"], [1, "font-weight-bold"], [1, "avatar-group"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "placement", "top", "container", "body", "title", "", "ngbTooltip", "Lilian Nenez", 1, "avatar", "pull-up", "my-0"], ["src", "assets/images/portrait/small/avatar-s-5.jpg", "alt", "Avatar", "height", "26", "width", "26"], ["data-toggle", "tooltip", "data-popup", "tooltip-custom", "placement", "top", "container", "body", "title", "", "ngbTooltip", "Alberto Glotzbach", 1, "avatar", "pull-up", "my-0"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "height", "26", "width", "26"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "height", "26", "width", "26"], [1, "badge", "badge-pill", "badge-light-primary", "mr-1"], [1, "overflow-hidden"], ["ngbDropdown", "", "container", "body"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "btn-sm", "hide-arrow"], ["data-feather", "more-vertical"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", "href", "javascript:void(0);"], ["data-feather", "edit-2", 1, "mr-50"], ["data-feather", "trash", 1, "mr-50"], ["src", "assets/images/icons/react.svg", "height", "20", "width", "20", "alt", "React", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-success", "mr-1"], ["src", "assets/images/icons/vuejs.svg", "height", "20", "width", "20", "alt", "Vuejs", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-info", "mr-1"], ["src", "assets/images/icons/bootstrap.svg", "height", "20", "width", "20", "alt", "Bootstrap", 1, "mr-75"], [1, "badge", "badge-pill", "badge-light-warning", "mr-1"], ["id", "dark-table", 1, "row"], [1, "table", "table-dark"], ["type", "button", "ngbDropdownToggle", "", "data-toggle", "dropdown", 1, "btn", "btn-sm", "text-white", "hide-arrow"], ["id", "table-head", 1, "row"], [1, "highlighter-rouge"], [1, "thead-dark"], [1, "card-body", "mt-2"], [1, "thead-light"], ["id", "table-striped", 1, "row"], [1, "table", "table-striped"], ["id", "table-striped-dark", 1, "row"], [1, "table", "table-striped", "table-dark"], ["id", "table-bordered", 1, "row"], [1, "table", "table-bordered"], ["id", "table-borderless", 1, "row"], [1, "table", "table-borderless"], ["id", "table-hover-row", 1, "row"], [1, "table", "table-hover"], ["id", "table-small", 1, "row"], [1, "table", "table-sm"], ["src", "assets/images/icons/angular.svg", "alt", "Angular", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/portrait/small/avatar-s-5.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/portrait/small/avatar-s-6.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/portrait/small/avatar-s-7.jpg", "alt", "Avatar", "height", "22", "width", "22"], ["src", "assets/images/icons/react.svg", "alt", "React", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/icons/vuejs.svg", "alt", "Vuejs", "width", "18", "height", "18", 1, "mr-75"], ["src", "assets/images/icons/bootstrap.svg", "alt", "Bootstrap", "width", "18", "height", "18", 1, "mr-75"], ["id", "table-contextual", 1, "row"], ["href", "https://getbootstrap.com/docs/4.3/content/tables/IDcontextual-classes", "target", "_blank"], [1, "table-default"], ["src", "assets/images/icons/figma.svg", "height", "20", "width", "20", "alt", "Figma", 1, "mr-75"], [1, "table-active"], [1, "table-primary"], [1, "table-secondary"], [1, "badge", "badge-pill", "badge-light-secondary", "mr-1"], [1, "table-success"], [1, "table-danger"], [1, "badge", "badge-pill", "badge-light-danger", "mr-1"], [1, "table-warning"], [1, "table-info"], [1, "table-light"], [1, "table-dark"], [1, "badge", "badge-pill", "badge-light-dark", "mr-1"], ["id", "table-without-card", 1, "row"], [1, "col-12", "my-2"], [1, "mb-1"], ["id", "table-responsive", 1, "row"], ["href", "https://getbootstrap.com/docs/4.3/content/tables/#responsive-tables", "target", "_blank"], [1, "alert", "alert-info"], [1, "alert-body"], [1, "text-warning"], [1, "table", "mb-0"], ["scope", "col", 1, "text-nowrap"], [1, "text-nowrap"], ["id", "table-hover-animation", 1, "row"], [1, "table", "table-hover-animation"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-content-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Table Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8)(10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Using the most basic table Leanne Grahamup, here\u2019s how ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " -based tables look in Bootstrap. You can use any example of below table for your table and it can be use with any type of bootstrap tables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10)(16, "table", 11)(17, "thead")(18, "tr")(19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody")(30, "tr")(31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td")(38, "div", 14)(39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td")(46, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td", 21)(49, "div", 22)(50, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25)(53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr")(62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "td")(69, "div", 14)(70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td")(77, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td", 21)(80, "div", 22)(81, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 25)(84, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tr")(93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "td")(100, "div", 14)(101, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td")(108, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "td", 21)(111, "div", 22)(112, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 25)(115, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "tr")(124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "td")(131, "div", 14)(132, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "td")(139, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td", 21)(142, "div", 22)(143, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 25)(146, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 35)(155, "div", 4)(156, "div", 5)(157, "div", 6)(158, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Dark Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 8)(161, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " You can also invert the colors\u2014with light text on dark backgrounds\u2014with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, ".table-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, " class. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 10)(170, "table", 36)(171, "thead")(172, "tr")(173, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "tbody")(184, "tr")(185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "td")(192, "div", 14)(193, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "td")(200, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "td")(203, "div", 22)(204, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 25)(207, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](208, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "tr")(216, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "td")(223, "div", 14)(224, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "td")(231, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "td")(234, "div", 22)(235, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 25)(238, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "tr")(247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "td")(254, "div", 14)(255, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "td")(262, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "td")(265, "div", 22)(266, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 25)(269, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](276, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "tr")(278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](279, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "td")(285, "div", 14)(286, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](287, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](289, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](291, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "td")(293, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](294, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "td")(296, "div", 22)(297, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](298, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "div", 25)(300, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](301, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](305, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "div", 38)(309, "div", 4)(310, "div", 5)(311, "div", 6)(312, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "Table head options");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 8)(315, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, " Similar to tables and dark tables, use the modifier classes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, ".thead-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, " to make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "<thead>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, " s appear dark. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "div", 10)(324, "table", 11)(325, "thead", 40)(326, "tr")(327, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](336, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "tbody")(338, "tr")(339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](340, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "td")(346, "div", 14)(347, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](348, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](350, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](352, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "td")(354, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "td", 21)(357, "div", 22)(358, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](359, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](360, "div", 25)(361, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](362, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](366, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "tr")(370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](375, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "td")(377, "div", 14)(378, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](379, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](383, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "td")(385, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "td", 21)(388, "div", 22)(389, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](390, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "div", 25)(392, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](393, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](395, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](397, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "tr")(401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](402, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](406, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "td")(408, "div", 14)(409, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](410, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](412, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](413, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](414, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "td")(416, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](417, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "td", 21)(419, "div", 22)(420, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](421, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 25)(423, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](424, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](428, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "tr")(432, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](433, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](437, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "td")(439, "div", 14)(440, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](441, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](443, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "td")(447, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "td", 21)(450, "div", 22)(451, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](452, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "div", 25)(454, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](455, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](459, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](461, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "div", 41)(463, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](464, " Use the modifier class ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](466, ".thead-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, " to make ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](468, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](469, "<thead>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](470, " s appear light. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](471, "div", 10)(472, "table", 11)(473, "thead", 42)(474, "tr")(475, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](476, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](480, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](481, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](482, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](483, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](484, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](485, "tbody")(486, "tr")(487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](488, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](490, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "td")(494, "div", 14)(495, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](496, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](498, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](500, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "td")(502, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](503, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "td", 21)(505, "div", 22)(506, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](507, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "div", 25)(509, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](510, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](511, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](512, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](514, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "tr")(518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](519, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](520, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](521, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](523, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](524, "td")(525, "div", 14)(526, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](527, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](528, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](529, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](530, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](531, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](532, "td")(533, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](534, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "td", 21)(536, "div", 22)(537, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](538, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "div", 25)(540, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](541, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](542, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](543, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](544, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](545, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](546, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](547, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "tr")(549, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](550, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](551, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](552, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](554, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](555, "td")(556, "div", 14)(557, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](558, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](559, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](560, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](562, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "td")(564, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](565, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](566, "td", 21)(567, "div", 22)(568, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](569, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](570, "div", 25)(571, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](572, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](574, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](575, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](576, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](577, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](578, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](579, "tr")(580, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](581, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](582, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](583, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](585, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](586, "td")(587, "div", 14)(588, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](589, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](590, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](591, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](592, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](593, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](594, "td")(595, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](596, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](597, "td", 21)(598, "div", 22)(599, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](600, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](601, "div", 25)(602, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](603, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](604, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](605, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](606, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](607, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](609, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](610, "div", 43)(611, "div", 4)(612, "div", 5)(613, "div", 6)(614, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](615, "Striped rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](616, "div", 8)(617, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](618, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](619, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](620, ".table-striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](621, " to add zebra-striping to any table row within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](622, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](623, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](624, " . This styling doesn't work in IE8 and below as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](625, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](626, ":nth-child");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](627, " CSS selector isn't supported. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](628, "div", 10)(629, "table", 44)(630, "thead")(631, "tr")(632, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](633, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](634, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](635, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](636, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](637, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](638, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](639, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](640, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](641, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](642, "tbody")(643, "tr")(644, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](645, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](646, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](647, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](648, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](649, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](650, "td")(651, "div", 14)(652, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](653, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](654, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](655, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](656, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](657, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](658, "td")(659, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](660, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](661, "td", 21)(662, "div", 22)(663, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](664, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](665, "div", 25)(666, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](667, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](669, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](670, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](671, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](672, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](673, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](674, "tr")(675, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](676, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](677, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](678, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](679, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](680, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](681, "td")(682, "div", 14)(683, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](684, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](685, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](686, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](687, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](688, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](689, "td")(690, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](691, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](692, "td", 21)(693, "div", 22)(694, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](695, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](696, "div", 25)(697, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](698, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](699, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](700, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](701, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](702, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](703, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](704, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](705, "tr")(706, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](707, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](708, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](709, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](710, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](711, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](712, "td")(713, "div", 14)(714, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](715, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](716, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](717, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](718, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](719, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](720, "td")(721, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](722, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](723, "td", 21)(724, "div", 22)(725, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](726, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](727, "div", 25)(728, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](729, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](730, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](731, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](732, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](733, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](734, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](735, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](736, "tr")(737, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](738, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](739, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](740, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](741, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](742, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](743, "td")(744, "div", 14)(745, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](746, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](747, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](748, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](749, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](750, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](751, "td")(752, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](753, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](754, "td", 21)(755, "div", 22)(756, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](757, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](758, "div", 25)(759, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](760, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](761, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](762, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](763, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](764, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](765, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](766, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](767, "div", 45)(768, "div", 4)(769, "div", 5)(770, "div", 6)(771, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](772, "Striped rows with inverse dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](773, "div", 8)(774, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](775, " Use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](776, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](777, ".table-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](778, " with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](779, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](780, ".table-striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](781, " to add zebra-striping to any inverse table row within the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](782, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](783, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](784, " . This styling doesn't work in IE8 and below as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](785, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](786, ":nth-child");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](787, " CSS selector isn't supported. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](788, "div", 10)(789, "table", 46)(790, "thead")(791, "tr")(792, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](793, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](794, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](795, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](796, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](797, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](798, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](799, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](800, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](801, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](802, "tbody")(803, "tr")(804, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](805, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](806, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](807, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](808, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](809, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](810, "td")(811, "div", 14)(812, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](813, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](814, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](815, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](816, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](817, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](818, "td")(819, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](820, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](821, "td")(822, "div", 22)(823, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](824, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](825, "div", 25)(826, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](827, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](828, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](829, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](830, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](831, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](832, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](833, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](834, "tr")(835, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](836, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](837, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](838, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](839, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](840, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](841, "td")(842, "div", 14)(843, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](844, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](845, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](846, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](847, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](848, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](849, "td")(850, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](851, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](852, "td")(853, "div", 22)(854, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](855, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](856, "div", 25)(857, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](858, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](859, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](860, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](861, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](862, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](863, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](864, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](865, "tr")(866, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](867, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](868, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](869, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](870, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](871, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](872, "td")(873, "div", 14)(874, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](875, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](876, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](877, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](878, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](879, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](880, "td")(881, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](882, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](883, "td")(884, "div", 22)(885, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](886, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](887, "div", 25)(888, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](889, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](890, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](891, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](892, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](893, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](894, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](895, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](896, "tr")(897, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](898, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](899, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](900, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](901, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](902, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](903, "td")(904, "div", 14)(905, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](906, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](907, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](908, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](909, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](910, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](911, "td")(912, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](913, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](914, "td")(915, "div", 22)(916, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](917, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](918, "div", 25)(919, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](920, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](921, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](922, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](923, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](924, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](925, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](926, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](927, "div", 47)(928, "div", 4)(929, "div", 5)(930, "div", 6)(931, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](932, "Bordered table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](933, "div", 8)(934, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](935, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](936, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](937, ".table-bordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](938, " for borders on all sides of the table and cells. For Inverse Dark Table, add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](939, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](940, ".table-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](941, " along with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](942, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](943, " .table-bordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](944, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](945, "div", 10)(946, "table", 48)(947, "thead")(948, "tr")(949, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](950, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](951, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](952, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](953, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](954, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](955, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](956, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](957, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](958, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](959, "tbody")(960, "tr")(961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](962, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](963, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](964, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](966, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](967, "td")(968, "div", 14)(969, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](970, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](971, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](972, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](973, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](974, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](975, "td")(976, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](977, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](978, "td", 21)(979, "div", 22)(980, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](981, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](982, "div", 25)(983, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](984, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](985, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](986, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](987, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](988, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](989, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](990, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](991, "tr")(992, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](993, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](994, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](995, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](997, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](998, "td")(999, "div", 14)(1000, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1001, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1002, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1003, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1004, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1005, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1006, "td")(1007, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1008, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1009, "td", 21)(1010, "div", 22)(1011, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1012, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1013, "div", 25)(1014, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1015, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1016, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1017, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1018, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1019, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1020, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1021, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1022, "tr")(1023, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1024, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1025, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1026, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1027, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1028, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1029, "td")(1030, "div", 14)(1031, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1032, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1033, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1034, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1035, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1036, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1037, "td")(1038, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1039, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1040, "td", 21)(1041, "div", 22)(1042, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1043, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1044, "div", 25)(1045, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1046, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1047, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1048, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1049, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1050, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1051, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1052, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1053, "tr")(1054, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1055, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1056, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1057, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1058, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1059, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1060, "td")(1061, "div", 14)(1062, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1063, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1064, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1065, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1066, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1067, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1068, "td")(1069, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1070, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1071, "td", 21)(1072, "div", 22)(1073, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1074, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1075, "div", 25)(1076, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1077, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1078, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1079, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1080, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1081, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1082, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1083, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1084, "div", 49)(1085, "div", 4)(1086, "div", 5)(1087, "div", 6)(1088, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1089, "Borderless Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1090, "div", 8)(1091, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1092, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1093, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1094, ".table-borderless");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1095, " for a table without borders. It can also be used on dark tables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1096, "div", 10)(1097, "table", 50)(1098, "thead")(1099, "tr")(1100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1101, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1103, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1104, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1105, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1106, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1107, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1108, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1109, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1110, "tbody")(1111, "tr")(1112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1113, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1114, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1115, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1117, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1118, "td")(1119, "div", 14)(1120, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1121, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1122, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1123, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1124, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1125, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1126, "td")(1127, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1128, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1129, "td", 21)(1130, "div", 22)(1131, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1132, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1133, "div", 25)(1134, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1135, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1136, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1137, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1138, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1139, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1141, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1142, "tr")(1143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1144, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1145, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1146, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1148, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1149, "td")(1150, "div", 14)(1151, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1152, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1153, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1154, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1155, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1156, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1157, "td")(1158, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1159, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1160, "td", 21)(1161, "div", 22)(1162, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1163, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1164, "div", 25)(1165, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1166, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1168, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1169, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1170, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1172, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1173, "tr")(1174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1175, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1176, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1177, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1179, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1180, "td")(1181, "div", 14)(1182, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1183, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1184, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1185, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1186, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1187, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1188, "td")(1189, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1190, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1191, "td", 21)(1192, "div", 22)(1193, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1194, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1195, "div", 25)(1196, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1197, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1199, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1200, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1201, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1202, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1203, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1204, "tr")(1205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1206, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1207, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1208, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1210, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1211, "td")(1212, "div", 14)(1213, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1214, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1215, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1216, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1217, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1218, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1219, "td")(1220, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1221, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1222, "td", 21)(1223, "div", 22)(1224, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1225, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1226, "div", 25)(1227, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1228, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1230, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1231, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1232, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1233, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1234, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1235, "div", 51)(1236, "div", 4)(1237, "div", 5)(1238, "div", 6)(1239, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1240, "Hoverable rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1241, "div", 8)(1242, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1243, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1244, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1245, ".table-hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1246, " to enable a hover state on table rows within a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1247, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1248, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1249, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1250, "div", 10)(1251, "table", 52)(1252, "thead")(1253, "tr")(1254, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1255, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1257, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1259, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1260, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1261, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1262, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1263, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1264, "tbody")(1265, "tr")(1266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1267, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1268, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1269, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1270, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1271, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1272, "td")(1273, "div", 14)(1274, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1275, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1276, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1277, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1278, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1279, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1280, "td")(1281, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1282, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1283, "td", 21)(1284, "div", 22)(1285, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1286, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1287, "div", 25)(1288, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1289, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1291, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1292, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1293, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1294, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1295, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1296, "tr")(1297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1298, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1299, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1300, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1301, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1302, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1303, "td")(1304, "div", 14)(1305, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1306, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1307, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1308, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1309, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1310, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1311, "td")(1312, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1313, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1314, "td", 21)(1315, "div", 22)(1316, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1317, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1318, "div", 25)(1319, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1320, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1321, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1322, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1323, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1324, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1325, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1326, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1327, "tr")(1328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1329, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1330, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1331, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1332, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1333, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1334, "td")(1335, "div", 14)(1336, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1337, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1338, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1339, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1340, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1341, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1342, "td")(1343, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1344, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1345, "td", 21)(1346, "div", 22)(1347, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1348, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1349, "div", 25)(1350, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1351, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1352, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1353, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1354, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1355, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1356, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1357, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1358, "tr")(1359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1360, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1361, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1362, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1364, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1365, "td")(1366, "div", 14)(1367, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1368, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1369, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1370, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1371, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1372, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1373, "td")(1374, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1375, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1376, "td", 21)(1377, "div", 22)(1378, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1379, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1380, "div", 25)(1381, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1382, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1383, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1384, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1385, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1386, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1387, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1388, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1389, "div", 53)(1390, "div", 4)(1391, "div", 5)(1392, "div", 6)(1393, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1394, "Small Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1395, "div", 8)(1396, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1397, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1398, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1399, ".table-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1400, " class with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1401, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1402, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1403, " to display small size table. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1404, "div", 10)(1405, "table", 54)(1406, "thead")(1407, "tr")(1408, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1409, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1410, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1411, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1412, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1413, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1414, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1415, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1416, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1417, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1418, "tbody")(1419, "tr")(1420, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1421, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1422, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1423, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1425, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1426, "td")(1427, "div", 14)(1428, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1429, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1430, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1431, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1432, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1433, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1434, "td")(1435, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1436, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1437, "td", 21)(1438, "div", 22)(1439, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1440, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1441, "div", 25)(1442, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1443, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1444, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1445, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1446, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1447, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1448, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1449, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1450, "tr")(1451, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1452, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1453, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1454, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1455, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1456, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1457, "td")(1458, "div", 14)(1459, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1460, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1461, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1462, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1463, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1464, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1465, "td")(1466, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1467, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1468, "td", 21)(1469, "div", 22)(1470, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1471, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1472, "div", 25)(1473, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1474, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1475, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1476, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1477, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1478, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1479, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1480, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1481, "tr")(1482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1483, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1484, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1485, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1487, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1488, "td")(1489, "div", 14)(1490, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1491, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1492, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1493, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1494, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1495, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1496, "td")(1497, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1498, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1499, "td", 21)(1500, "div", 22)(1501, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1502, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1503, "div", 25)(1504, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1505, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1506, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1507, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1508, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1509, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1510, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1511, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1512, "tr")(1513, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1514, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1515, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1516, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1518, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1519, "td")(1520, "div", 14)(1521, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1522, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1523, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1524, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1525, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1526, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1527, "td")(1528, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1529, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1530, "td", 21)(1531, "div", 22)(1532, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1533, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1534, "div", 25)(1535, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1536, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1537, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1538, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1539, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1540, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1541, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1542, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1543, "div", 62)(1544, "div", 4)(1545, "div", 5)(1546, "div", 6)(1547, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1548, "Contextual classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1549, "div", 8)(1550, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1551, " Use contextual classes to color table rows or individual cells. Read full documnetation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1552, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1553, "here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1554, "div", 10)(1555, "table", 11)(1556, "thead")(1557, "tr")(1558, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1559, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1560, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1561, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1562, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1563, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1564, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1565, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1566, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1567, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1568, "tbody")(1569, "tr", 64)(1570, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1571, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1572, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1573, "Figma Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1574, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1575, "Ronnie Shane");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1576, "td")(1577, "div", 14)(1578, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1579, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1580, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1581, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1582, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1583, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1584, "td")(1585, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1586, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1587, "td", 21)(1588, "div", 22)(1589, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1590, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1591, "div", 25)(1592, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1593, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1594, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1595, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1596, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1597, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1598, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1599, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1600, "tr", 66)(1601, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1602, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1603, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1604, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1606, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1607, "td")(1608, "div", 14)(1609, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1610, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1611, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1612, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1613, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1614, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1615, "td")(1616, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1617, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1618, "td", 21)(1619, "div", 22)(1620, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1621, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1622, "div", 25)(1623, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1624, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1625, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1626, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1627, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1628, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1629, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1630, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1631, "tr", 67)(1632, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1633, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1634, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1635, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1636, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1637, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1638, "td")(1639, "div", 14)(1640, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1641, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1642, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1643, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1644, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1645, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1646, "td")(1647, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1648, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1649, "td", 21)(1650, "div", 22)(1651, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1652, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1653, "div", 25)(1654, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1655, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1656, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1657, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1658, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1659, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1660, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1661, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1662, "tr", 68)(1663, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1664, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1665, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1666, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1667, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1668, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1669, "td")(1670, "div", 14)(1671, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1672, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1673, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1674, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1675, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1676, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1677, "td")(1678, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1679, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1680, "td", 21)(1681, "div", 22)(1682, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1683, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1684, "div", 25)(1685, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1686, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1687, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1688, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1689, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1690, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1691, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1692, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1693, "tr", 70)(1694, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1695, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1696, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1697, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1698, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1699, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1700, "td")(1701, "div", 14)(1702, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1703, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1704, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1705, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1706, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1707, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1708, "td")(1709, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1710, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1711, "td", 21)(1712, "div", 22)(1713, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1714, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1715, "div", 25)(1716, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1717, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1718, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1719, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1720, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1721, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1722, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1723, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1724, "tr", 71)(1725, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1726, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1727, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1728, "Figma Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1729, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1730, "Janne Ale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1731, "td")(1732, "div", 14)(1733, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1734, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1735, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1736, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1737, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1738, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1739, "td")(1740, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1741, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1742, "td", 21)(1743, "div", 22)(1744, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1745, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1746, "div", 25)(1747, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1748, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1749, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1750, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1751, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1752, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1753, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1754, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1755, "tr", 73)(1756, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1757, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1758, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1759, "React Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1760, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1761, "Ted Richer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1762, "td")(1763, "div", 14)(1764, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1765, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1766, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1767, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1768, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1769, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1770, "td")(1771, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1772, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1773, "td", 21)(1774, "div", 22)(1775, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1776, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1777, "div", 25)(1778, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1779, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1780, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1781, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1782, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1783, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1784, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1785, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1786, "tr", 74)(1787, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1788, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1789, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1790, "Latest Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1791, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1792, "Perry Parker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1793, "td")(1794, "div", 14)(1795, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1796, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1797, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1798, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1799, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1800, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1801, "td")(1802, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1803, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1804, "td", 21)(1805, "div", 22)(1806, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1807, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1808, "div", 25)(1809, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1810, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1811, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1812, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1813, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1814, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1815, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1816, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1817, "tr", 75)(1818, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1819, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1820, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1821, "Angular UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1822, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1823, "Ana Bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1824, "td")(1825, "div", 14)(1826, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1827, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1828, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1829, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1830, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1831, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1832, "td")(1833, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1834, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1835, "td", 21)(1836, "div", 22)(1837, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1838, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1839, "div", 25)(1840, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1841, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1842, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1843, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1844, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1845, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1846, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1847, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1848, "tr", 76)(1849, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1850, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1851, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1852, "Bootstrap UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1853, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1854, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1855, "td")(1856, "div", 14)(1857, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1858, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1859, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1860, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1861, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1862, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1863, "td")(1864, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1865, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1866, "td", 21)(1867, "div", 22)(1868, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1869, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1870, "div", 25)(1871, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1872, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1873, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1874, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1875, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1876, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1877, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1878, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1879, "div", 78)(1880, "div", 79)(1881, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1882, "Table without card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1883, "div", 10)(1884, "table", 11)(1885, "thead")(1886, "tr")(1887, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1888, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1889, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1890, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1891, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1892, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1893, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1894, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1895, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1896, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1897, "tbody")(1898, "tr")(1899, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1900, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1901, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1902, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1903, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1904, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1905, "td")(1906, "div", 14)(1907, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1908, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1909, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1910, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1911, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1912, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1913, "td")(1914, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1915, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1916, "td", 21)(1917, "div", 22)(1918, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1919, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1920, "div", 25)(1921, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1922, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1923, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1924, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1925, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1926, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1927, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1928, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1929, "tr")(1930, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1931, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1932, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1933, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1934, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1935, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1936, "td")(1937, "div", 14)(1938, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1939, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1940, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1941, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1942, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1943, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1944, "td")(1945, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1946, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1947, "td", 21)(1948, "div", 22)(1949, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1950, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1951, "div", 25)(1952, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1953, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1954, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1955, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1956, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1957, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1958, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1959, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1960, "tr")(1961, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1962, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1963, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1964, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1965, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1966, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1967, "td")(1968, "div", 14)(1969, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1970, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1971, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1972, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1973, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1974, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1975, "td")(1976, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1977, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1978, "td", 21)(1979, "div", 22)(1980, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1981, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1982, "div", 25)(1983, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1984, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1985, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1986, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1987, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1988, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1989, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1990, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1991, "tr")(1992, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1993, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1994, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1995, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1996, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1997, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1998, "td")(1999, "div", 14)(2000, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2001, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2002, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2003, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2004, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2005, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2006, "td")(2007, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2008, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2009, "td", 21)(2010, "div", 22)(2011, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2012, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2013, "div", 25)(2014, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2015, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2016, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2017, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2018, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2019, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2020, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2021, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2022, "div", 81)(2023, "div", 4)(2024, "div", 5)(2025, "div", 6)(2026, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2027, "Responsive tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2028, "div", 8)(2029, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2030, " Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2031, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2032, ".table-responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2033, " class on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2034, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2035, ".table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2036, " . Or, pick a maximum breakpoint with which to have a responsive table up to by adding ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2037, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2038, ".table-responsive{-sm|-md|-lg|-xl }");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2039, " . Read full documentation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2040, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2041, "here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2042, "div", 83)(2043, "div", 84)(2044, "h4", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2045, "Vertical clipping/truncation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2046, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2047, " Responsive tables make use of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2048, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2049, "overflow-y:hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2050, ", which clips off any content that goes beyond the bottom or top edges of the table. In particular, this can clip off dropdown menus and other third-party widgets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2051, "div", 10)(2052, "table", 86)(2053, "thead")(2054, "tr")(2055, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2056, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2057, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2058, "Heading 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2059, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2060, "Heading 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2061, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2062, "Heading 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2063, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2064, "Heading 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2065, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2066, "Heading 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2067, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2068, "Heading 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2069, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2070, "Heading 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2071, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2072, "Heading 8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2073, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2074, "Heading 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2075, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2076, "Heading 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2077, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2078, "Heading 11");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2079, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2080, "Heading 12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2081, "th", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2082, "Heading 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2083, "tbody")(2084, "tr")(2085, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2086, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2087, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2088, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2089, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2090, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2091, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2092, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2093, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2094, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2095, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2096, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2097, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2098, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2099, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2100, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2101, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2102, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2103, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2104, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2105, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2106, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2107, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2108, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2109, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2110, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2111, "td", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2112, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2113, "tr")(2114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2115, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2117, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2119, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2120, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2121, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2123, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2125, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2127, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2129, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2131, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2133, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2135, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2137, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2139, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2140, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2141, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2142, "tr")(2143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2144, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2146, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2148, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2150, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2152, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2154, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2155, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2156, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2158, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2160, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2162, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2164, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2166, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2168, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2170, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2171, "tr")(2172, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2173, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2175, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2177, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2179, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2181, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2182, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2183, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2185, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2187, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2189, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2191, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2193, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2195, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2197, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2198, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2199, "Table cell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2200, "div", 89)(2201, "div", 4)(2202, "div", 5)(2203, "div", 6)(2204, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2205, "Table Hover Animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2206, "div", 8)(2207, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2208, " Add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2209, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2210, ".table-hover-animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2211, " to enable a hover stat with animation on table rows within a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2212, "code", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2213, "<tbody>");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2214, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2215, "div", 10)(2216, "table", 90)(2217, "thead")(2218, "tr")(2219, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2220, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2221, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2222, "Client");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2223, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2224, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2225, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2226, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2227, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2228, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2229, "tbody")(2230, "tr")(2231, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2232, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2233, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2234, "Angular Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2235, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2236, "Peter Charls");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2237, "td")(2238, "div", 14)(2239, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2240, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2241, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2242, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2243, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2244, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2245, "td")(2246, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2247, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2248, "td", 21)(2249, "div", 22)(2250, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2251, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2252, "div", 25)(2253, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2254, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2255, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2256, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2257, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2258, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2260, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2261, "tr")(2262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2263, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2264, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2265, "React Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2266, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2267, "Ronald Frest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2268, "td")(2269, "div", 14)(2270, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2271, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2272, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2273, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2274, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2275, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2276, "td")(2277, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2278, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2279, "td", 21)(2280, "div", 22)(2281, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2282, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2283, "div", 25)(2284, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2285, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2286, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2287, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2288, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2289, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2290, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2291, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2292, "tr")(2293, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2294, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2295, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2296, "Vuejs Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2297, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2298, "Jack Obes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2299, "td")(2300, "div", 14)(2301, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2302, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2303, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2304, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2305, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2306, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2307, "td")(2308, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2309, "Scheduled");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2310, "td", 21)(2311, "div", 22)(2312, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2313, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2314, "div", 25)(2315, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2316, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2317, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2318, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2319, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2320, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2321, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2322, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2323, "tr")(2324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2325, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2326, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2327, "Bootstrap Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2329, "Jerry Milton");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2330, "td")(2331, "div", 14)(2332, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2333, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2334, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2335, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2336, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2337, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2338, "td")(2339, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2340, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2341, "td", 21)(2342, "div", 22)(2343, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2344, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2345, "div", 25)(2346, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2347, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2348, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2349, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2350, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2351, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2352, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2353, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("contentHeader", ctx.contentHeader);
    } }, dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, app_layout_components_content_header_content_header_component__WEBPACK_IMPORTED_MODULE_0__.ContentHeaderComponent, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_1__.FeatherIconDirective], encapsulation: 2 });


/***/ }),

/***/ 6122:
/*!***************************************************!*\
  !*** ./src/app/main/tables/table/table.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableModule": () => (/* binding */ TableModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/common.module */ 75078);
/* harmony import */ var _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/card-snippet/card-snippet.module */ 76826);
/* harmony import */ var app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/layout/components/content-header/content-header.module */ 50619);
/* harmony import */ var app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/tables/table/table.component */ 13742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);








const routes = [
    {
        path: 'table',
        component: app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent,
        data: { animation: 'table' }
    }
];
class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TableModule });
TableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TableModule, { declarations: [app_main_tables_table_table_component__WEBPACK_IMPORTED_MODULE_3__.TableComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, app_layout_components_content_header_content_header_module__WEBPACK_IMPORTED_MODULE_2__.ContentHeaderModule, _core_components_card_snippet_card_snippet_module__WEBPACK_IMPORTED_MODULE_1__.CardSnippetModule, _core_common_module__WEBPACK_IMPORTED_MODULE_0__.CoreCommonModule] }); })();


/***/ }),

/***/ 2341:
/*!**********************************************!*\
  !*** ./src/app/main/tables/tables.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/main/tables/table/table.module */ 6122);
/* harmony import */ var app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/main/tables/datatables/datatables.module */ 9960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class TablesModule {
}
TablesModule.ɵfac = function TablesModule_Factory(t) { return new (t || TablesModule)(); };
TablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TablesModule });
TablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DatatablesModule, app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_0__.TableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TablesModule, { imports: [app_main_tables_datatables_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DatatablesModule, app_main_tables_table_table_module__WEBPACK_IMPORTED_MODULE_0__.TableModule] }); })();


/***/ }),

/***/ 30839:
/*!**************************************************************************!*\
  !*** ./node_modules/@ctrl/ngx-csv/__ivy_ngcc__/fesm2015/ctrl-ngx-csv.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvDirective": () => (/* binding */ CsvDirective),
/* harmony export */   "CsvModule": () => (/* binding */ CsvModule),
/* harmony export */   "arrays2csv": () => (/* binding */ arrays2csv),
/* harmony export */   "blob": () => (/* binding */ blob),
/* harmony export */   "buildURI": () => (/* binding */ buildURI),
/* harmony export */   "elementOrEmpty": () => (/* binding */ elementOrEmpty),
/* harmony export */   "isArrays": () => (/* binding */ isArrays),
/* harmony export */   "isJsons": () => (/* binding */ isJsons),
/* harmony export */   "joiner": () => (/* binding */ joiner),
/* harmony export */   "jsons2arrays": () => (/* binding */ jsons2arrays),
/* harmony export */   "jsons2csv": () => (/* binding */ jsons2csv),
/* harmony export */   "jsonsHeaders": () => (/* binding */ jsonsHeaders),
/* harmony export */   "string2csv": () => (/* binding */ string2csv),
/* harmony export */   "toCSV": () => (/* binding */ toCSV)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);




const isJsons = array => Array.isArray(array) && array.every(row => typeof row === 'object' && !(row instanceof Array));
const isArrays = array => Array.isArray(array) && array.every(row => Array.isArray(row));
function jsonsHeaders(array) {
  return Array.from(new Set(array.map(item => Object.keys(item)).reduce((a, b) => [...a, ...b], [])));
}
function jsons2arrays(jsons, headers) {
  headers = headers || jsonsHeaders(jsons);
  // allow headers to have custom labels, defaulting to having the header data key be the label
  let headerLabels = headers;
  let headerKeys = headers;
  if (isJsons(headers)) {
    headerLabels = headers.map(header => header.label);
    headerKeys = headers.map(header => header.key);
  }
  const data = jsons.map(object => headerKeys.map(header => header in object ? object[header] : ''));
  return [headerLabels, ...data];
}
const elementOrEmpty = element => element || element === 0 ? element : '';
function joiner(data, delimiter = ',') {
  return data.map((row, index) => row.map(element => '"' + elementOrEmpty(element) + '"').join(delimiter)).join(`\n`);
}
function arrays2csv(data, headers, delimiter) {
  return joiner(headers ? [headers, ...data] : data, delimiter);
}
function jsons2csv(data, headers, delimiter) {
  return joiner(jsons2arrays(data, headers), delimiter);
}
function string2csv(data, headers, delimiter) {
  return headers ? `${headers.join(delimiter)}\n${data}` : data;
}
function toCSV(data, headers, delimiter) {
  if (isJsons(data)) {
    return jsons2csv(data, headers, delimiter);
  }
  if (isArrays(data)) {
    return arrays2csv(data, headers, delimiter);
  }
  if (typeof data === 'string') {
    return string2csv(data, headers, delimiter);
  }
  throw new TypeError(`Data should be a "String", "Array of arrays" OR "Array of objects" `);
}
function blob(data, uFEFF = true, headers, delimiter) {
  const csv = toCSV(data, headers, delimiter);
  return new Blob([uFEFF ? '\uFEFF' : '', csv], {
    type: 'text/csv'
  });
}
function buildURI(data, uFEFF = true, headers, delimiter) {
  return URL.createObjectURL(blob(data, uFEFF, headers, delimiter));
}
class CsvDirective {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    /** the body of the csv */
    this.data = [];
    /** Set the seperator between values */
    this.delimiter = ',';
    /** adds a Byte order mark to setup the csv as UTF-8  */
    this.uFEFF = true;
    /** filename */
    this.download = 'data.csv';
    this.target = this.isIEBrowser() ? '' : '_blank';
  }
  /** Set the filename of the csv. Default is `data.csv` */
  set filename(a) {
    this.download = a;
  }
  onClick() {
    // IE handling
    if (this.isIEBrowser()) {
      const file = blob(this.data, this.uFEFF, this.headers, this.delimiter);
      window.navigator.msSaveBlob(file, this.download);
    }
  }
  isIEBrowser() {
    return !!window.navigator.msSaveOrOpenBlob;
  }
  ngOnChanges() {
    this.href = this.sanitizer.bypassSecurityTrustResourceUrl(buildURI(this.data, this.uFEFF, this.headers, this.delimiter));
  }
}
CsvDirective.ɵfac = function CsvDirective_Factory(t) {
  return new (t || CsvDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
};
CsvDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CsvDirective,
  selectors: [["", "csvLink", ""]],
  hostVars: 3,
  hostBindings: function CsvDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CsvDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("download", ctx.download)("target", ctx.target)("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrlOrResourceUrl"]);
    }
  },
  inputs: {
    data: "data",
    delimiter: "delimiter",
    uFEFF: "uFEFF",
    target: "target",
    filename: "filename",
    headers: "headers"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
CsvDirective.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
}];
CsvDirective.propDecorators = {
  data: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  headers: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  delimiter: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  filename: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  uFEFF: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  href: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  download: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  target: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
  }],
  onClick: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
    args: ['click']
  }]
};
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[csvLink]'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    delimiter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    uFEFF: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    download: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    target: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    filename: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    href: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding
    }],
    headers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class CsvModule {}
CsvModule.ɵfac = function CsvModule_Factory(t) {
  return new (t || CsvModule)();
};
CsvModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CsvModule
});
CsvModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [CsvDirective],
      exports: [CsvDirective]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CsvModule, {
    declarations: [CsvDirective],
    exports: [CsvDirective]
  });
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_main_tables_tables_module_ts.js.map