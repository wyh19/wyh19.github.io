(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{584:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_SearchForm=__webpack_require__(713),_SearchForm2=_interopRequireDefault(_SearchForm),_DataTable=__webpack_require__(714),_DataTable2=_interopRequireDefault(_DataTable),_FormModal=__webpack_require__(715),_FormModal2=_interopRequireDefault(_FormModal);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}__webpack_require__(767),function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var Page=function(_PureComponent){function Page(){return _classCallCheck(this,Page),_possibleConstructorReturn(this,(Page.__proto__||Object.getPrototypeOf(Page)).apply(this,arguments))}return _inherits(Page,_PureComponent),_createClass(Page,[{key:"render",value:function(){return _react2.default.createElement(_react.Fragment,null,_react2.default.createElement(_SearchForm2.default,null),_react2.default.createElement(_DataTable2.default,null),_react2.default.createElement(_FormModal2.default,null))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Page}(_react.PureComponent),_default=Page;exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(Page,"Page","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/Page.jsx"),e.register(_default,"default","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/Page.jsx"),t(module))}()}).call(this,__webpack_require__(9)(module))},713:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _row=__webpack_require__(589),_row2=_interopRequireDefault(_row),_button=__webpack_require__(55),_button2=_interopRequireDefault(_button),_select=__webpack_require__(587),_select2=_interopRequireDefault(_select),_radio=__webpack_require__(585),_radio2=_interopRequireDefault(_radio),_col=__webpack_require__(590),_col2=_interopRequireDefault(_col),_input=__webpack_require__(279),_input2=_interopRequireDefault(_input),_form=__webpack_require__(280),_form2=_interopRequireDefault(_form),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_dec,_dec2,_class;__webpack_require__(591),__webpack_require__(80),__webpack_require__(588),__webpack_require__(586),__webpack_require__(592),__webpack_require__(278),__webpack_require__(281);var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(26),_userinfo=__webpack_require__(289);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var Item=_form2.default.Item,create=_form2.default.create,SearchForm=(_dec=(0,_reactRedux.connect)(function(e){return e.userinfo},{getList:_userinfo.getList,getOrgList:_userinfo.getOrgList,getGroupList:_userinfo.getGroupList}),_dec2=create({mapPropsToFields:function(e){if(e.searchForm){var t={};for(var r in e.searchForm)t[r]=_form2.default.createFormField({value:e.searchForm[r]});return t}}}),_dec(_class=_dec2(_class=function(_PureComponent){function SearchForm(){var e,t,r;_classCallCheck(this,SearchForm);for(var a=arguments.length,n=Array(a),_=0;_<a;_++)n[_]=arguments[_];return t=r=_possibleConstructorReturn(this,(e=SearchForm.__proto__||Object.getPrototypeOf(SearchForm)).call.apply(e,[this].concat(n))),r.handleSearch=function(e){e.preventDefault(),r.props.form.validateFields(function(e,t){e||(t.pagenum=1,t.pagesize=r.props.pagination.pageSize,r.props.getList(t))})},r.handleReset=function(){r.props.form.resetFields();var e={pagenum:1};e.pagesize=r.props.pagination.pageSize,r.props.getList(e)},_possibleConstructorReturn(r,t)}return _inherits(SearchForm,_PureComponent),_createClass(SearchForm,[{key:"componentDidMount",value:function(){this.props.getOrgList(),this.props.getGroupList();var e=this.props.searchForm;e.pagenum=this.props.pagination.current,e.pagesize=this.props.pagination.pageSize,this.props.getList(e)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return _react2.default.createElement(_form2.default,{onSubmit:this.handleSearch},_react2.default.createElement(_row2.default,{gutter:16},_react2.default.createElement(_col2.default,{span:6},_react2.default.createElement(Item,{label:"用户名"},e("name")(_react2.default.createElement(_input2.default,null)))),_react2.default.createElement(_col2.default,{span:6},_react2.default.createElement(Item,{label:"姓名"},e("realname")(_react2.default.createElement(_input2.default,null)))),_react2.default.createElement(_col2.default,{span:6},_react2.default.createElement(Item,{label:"状态"},e("status")(_react2.default.createElement(_radio2.default.Group,null,_react2.default.createElement(_radio2.default,{value:0},"启用"),_react2.default.createElement(_radio2.default,{value:1},"停用"))))),_react2.default.createElement(_col2.default,{span:6},_react2.default.createElement(Item,{label:"机构"},e("orgid")(_react2.default.createElement(_select2.default,{style:{width:170}},this.props.orgaList.map(function(e){return _react2.default.createElement(_select2.default.Option,{key:e.id,value:e.id},e.name)}))))),_react2.default.createElement(_col2.default,{span:6},_react2.default.createElement(Item,{label:"用户组"},e("groupid")(_react2.default.createElement(_select2.default,{style:{width:170}},this.props.groupList.map(function(e){return _react2.default.createElement(_select2.default.Option,{key:e.id,value:e.id},e.name)}))))),_react2.default.createElement(_col2.default,{span:6},_react2.default.createElement(_button2.default,{type:"primary",htmlType:"submit"},"查询"),_react2.default.createElement(_button2.default,{style:{marginLeft:8},onClick:this.handleReset},"重置"))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),SearchForm}(_react.PureComponent))||_class)||_class),_default=SearchForm;exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(Item,"Item","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/SearchForm.jsx"),e.register(create,"create","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/SearchForm.jsx"),e.register(SearchForm,"SearchForm","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/SearchForm.jsx"),e.register(_default,"default","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/SearchForm.jsx"),t(module))}()}).call(this,__webpack_require__(9)(module))},714:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _table=__webpack_require__(593),_table2=_interopRequireDefault(_table),_popconfirm=__webpack_require__(594),_popconfirm2=_interopRequireDefault(_popconfirm),_divider=__webpack_require__(595),_divider2=_interopRequireDefault(_divider),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_dec,_class;__webpack_require__(596),__webpack_require__(597),__webpack_require__(598);var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(26),_userinfo=__webpack_require__(289);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var DataTable=(_dec=(0,_reactRedux.connect)(function(e){return e.userinfo},{handleModalForm:_userinfo.handleModalForm,deleteInfo:_userinfo.deleteInfo,getList:_userinfo.getList}),_dec(_class=function(_PureComponent){function DataTable(){var e,t,r;_classCallCheck(this,DataTable);for(var a=arguments.length,n=Array(a),_=0;_<a;_++)n[_]=arguments[_];return t=r=_possibleConstructorReturn(this,(e=DataTable.__proto__||Object.getPrototypeOf(DataTable)).call.apply(e,[this].concat(n))),r.handleInfo=function(e,t,a){r.props.handleModalForm(e,t,a)},r.handleDelete=function(e){r.props.deleteInfo(e)},r.handleTableChange=function(e){var t=r.props.searchForm;t.pagenum=e.current,t.pagesize=e.pageSize,r.props.getList(t)},_possibleConstructorReturn(r,t)}return _inherits(DataTable,_PureComponent),_createClass(DataTable,[{key:"render",value:function(){var e,t=this,r=[{title:"用户名",dataIndex:"name",key:"name",align:"center"},{title:"姓名",dataIndex:"realname",key:"realname",align:"center"},{title:"性别",dataIndex:"gender",key:"gender",align:"center",render:function(e){return 1===e?_react2.default.createElement("div",null,"男"):_react2.default.createElement("div",null,"女")}},{title:"年龄",dataIndex:"age",key:"age",align:"center"},{title:"生日",dataIndex:"birthday",key:"birthday",align:"center"},{title:"岗位",dataIndex:"title",key:"title",align:"center"},{title:"状态",dataIndex:"status",key:"status",align:"center",render:function(e){return 0===e?_react2.default.createElement("div",null,"启用"):_react2.default.createElement("div",null,"停用")}},{title:"创建者",dataIndex:"creatorid",key:"creatorid",align:"center"},{title:"创建时间",dataIndex:"createtime",key:"createtime",align:"center"},{title:_react2.default.createElement("div",null,"操作",_react2.default.createElement(_divider2.default,{type:"vertical"}),_react2.default.createElement("a",{href:"javascript:;",onClick:function(){return t.handleInfo("add",!0)}},"新增")),key:"action",render:function(e,r){return _react2.default.createElement("span",null,_react2.default.createElement("a",{href:"javascript:;",onClick:function(){return t.handleInfo("update",!0,r)}},"编辑"),_react2.default.createElement(_divider2.default,{type:"vertical"}),_react2.default.createElement(_popconfirm2.default,{title:"确认删除?",onConfirm:function(){return t.handleDelete(r.id)}},_react2.default.createElement("a",{href:"javascript:;"},"删除")))}}];return _react2.default.createElement(_table2.default,(_defineProperty(e={rowKey:function(e){return e.id},dataSource:this.props.dataList,columns:r,pagination:!1},"pagination",this.props.pagination),_defineProperty(e,"onChange",this.handleTableChange),e))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),DataTable}(_react.PureComponent))||_class),_default=DataTable;exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(DataTable,"DataTable","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/DataTable.jsx"),e.register(_default,"default","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/DataTable.jsx"),t(module))}()}).call(this,__webpack_require__(9)(module))},715:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _modal=__webpack_require__(283),_modal2=_interopRequireDefault(_modal),_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_dec,_class;__webpack_require__(284);var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__(26),_userinfo=__webpack_require__(289),_InfoForm=__webpack_require__(716),_InfoForm2=_interopRequireDefault(_InfoForm);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var FormModal=(_dec=(0,_reactRedux.connect)(function(e){return e},{handleModalForm:_userinfo.handleModalForm,addInfo:_userinfo.addInfo,editInfo:_userinfo.editInfo}),_dec(_class=function(_PureComponent){function FormModal(){var e,t,r;_classCallCheck(this,FormModal);for(var a=arguments.length,n=Array(a),_=0;_<a;_++)n[_]=arguments[_];return t=r=_possibleConstructorReturn(this,(e=FormModal.__proto__||Object.getPrototypeOf(FormModal)).call.apply(e,[this].concat(n))),r.handleSubmit=function(){var e=r.refs.infoForm,t=r.props.auth.userid,a=r.props.userinfo.formType,n=r.props,_=n.addInfo,o=n.editInfo;e.validateFields(function(e,r){e||(r.creatorid=t,r.birthday=r.birthday.format("YYYY-MM-DD"),"add"===a?_(r):"update"===a&&o(r))})},_possibleConstructorReturn(r,t)}return _inherits(FormModal,_PureComponent),_createClass(FormModal,[{key:"render",value:function(){var e=this,t=this.props.userinfo,r=t.formType,a=t.modalOpen,n=t.formData;return _react2.default.createElement(_modal2.default,{title:"add"===r?"新增":"编辑",visible:a,okText:"确认",cancelText:"取消",maskClosable:!1,onOk:this.handleSubmit,onCancel:function(){e.props.handleModalForm(r,!1)}},_react2.default.createElement(_InfoForm2.default,{formType:r,formData:n,ref:"infoForm"}))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),FormModal}(_react.PureComponent))||_class),_default=FormModal;exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(FormModal,"FormModal","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/FormModal.jsx"),e.register(_default,"default","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/FormModal.jsx"),t(module))}()}).call(this,__webpack_require__(9)(module))},716:function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _datePicker=__webpack_require__(717),_datePicker2=_interopRequireDefault(_datePicker),_inputNumber=__webpack_require__(753),_inputNumber2=_interopRequireDefault(_inputNumber),_radio=__webpack_require__(585),_radio2=_interopRequireDefault(_radio),_row=__webpack_require__(589),_row2=_interopRequireDefault(_row),_col=__webpack_require__(590),_col2=_interopRequireDefault(_col),_input=__webpack_require__(279),_input2=_interopRequireDefault(_input),_select=__webpack_require__(587),_select2=_interopRequireDefault(_select),_form=__webpack_require__(280),_form2=_interopRequireDefault(_form),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_dec,_dec2,_class;__webpack_require__(755),__webpack_require__(764),__webpack_require__(586),__webpack_require__(591),__webpack_require__(592),__webpack_require__(278),__webpack_require__(588),__webpack_require__(281);var _react=__webpack_require__(1),_react2=_interopRequireDefault(_react),_moment=__webpack_require__(2),_moment2=_interopRequireDefault(_moment),_reactRedux=__webpack_require__(26);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}!function(){var e=__webpack_require__(3).enterModule;e&&e(module)}();var Item=_form2.default.Item,create=_form2.default.create,Option=_select2.default.Option,InfoForm=(_dec=create({mapPropsToFields:function(e){if("update"===e.formType){var t={};for(var r in e.formData)t[r]=_form2.default.createFormField({value:e.formData[r]}),"birthday"===r&&(t[r]=_form2.default.createFormField({value:(0,_moment2.default)(e.formData[r],"YYYY-MM-DD")}));return t}}}),_dec2=(0,_reactRedux.connect)(function(e){return e.userinfo}),_dec(_class=_dec2(_class=function(_PureComponent){function InfoForm(){return _classCallCheck(this,InfoForm),_possibleConstructorReturn(this,(InfoForm.__proto__||Object.getPrototypeOf(InfoForm)).apply(this,arguments))}return _inherits(InfoForm,_PureComponent),_createClass(InfoForm,[{key:"render",value:function(){var e={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}}},t=this.props,r=t.formType,a=t.form.getFieldDecorator;return _react2.default.createElement(_form2.default,null,"update"===r?_react2.default.createElement(Item,null,a("id")(_react2.default.createElement(_input2.default,{type:"hidden"}))):null,_react2.default.createElement(_row2.default,null,_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"用户名",hasFeedback:!0}),a("name",{rules:[{required:!0,message:"用户名不能为空"}]})(_react2.default.createElement(_input2.default,null)))),_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"姓名",hasFeedback:!0}),a("realname",{rules:[{required:!0,message:"姓名不能为空"}]})(_react2.default.createElement(_input2.default,null))))),_react2.default.createElement(_row2.default,null,_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"密码",hasFeedback:!0}),a("password",{rules:[{required:!0,message:"密码不能为空"}]})(_react2.default.createElement(_input2.default,null)))),_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"状态",hasFeedback:!0}),a("status",{rules:[{required:!0,message:"状态不能为空"}]})(_react2.default.createElement(_radio2.default.Group,null,_react2.default.createElement(_radio2.default,{value:0},"启用"),_react2.default.createElement(_radio2.default,{value:1},"停用")))))),_react2.default.createElement(_row2.default,null,_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"性别",hasFeedback:!0}),a("gender",{rules:[{required:!0,message:"性别不能为空"}]})(_react2.default.createElement(_radio2.default.Group,null,_react2.default.createElement(_radio2.default,{value:1},"男"),_react2.default.createElement(_radio2.default,{value:2},"女"))))),_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"年龄",hasFeedback:!0}),a("age",{rules:[{required:!0,message:"年龄不能为空"}]})(_react2.default.createElement(_inputNumber2.default,{min:18,max:100}))))),_react2.default.createElement(_row2.default,null,_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"生日",hasFeedback:!0}),a("birthday",{rules:[{required:!0,message:"生日不能为空"}]})(_react2.default.createElement(_datePicker2.default,null)))),_react2.default.createElement(_col2.default,{span:12},_react2.default.createElement(Item,_extends({},e,{label:"岗位",hasFeedback:!0}),a("title",{rules:[{required:!0,message:"岗位不能为空"}]})(_react2.default.createElement(_input2.default,null))))),_react2.default.createElement(Item,_extends({},e,{label:"组织机构",hasFeedback:!0}),a("orgid",{rules:[{required:!0,message:"组织机构不能为空"}]})(_react2.default.createElement(_select2.default,null,this.props.orgaList.map(function(e){return _react2.default.createElement(Option,{key:e.id,value:e.id},e.name)})))),_react2.default.createElement(Item,_extends({},e,{label:"用户组",hasFeedback:!0}),a("groupids",{rules:[{required:!0,message:"用户组不能为空"}]})(_react2.default.createElement(_select2.default,{mode:"multiple"},this.props.groupList.map(function(e){return _react2.default.createElement(Option,{key:e.id,value:e.id},e.name)})))))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),InfoForm}(_react.PureComponent))||_class)||_class),_default=InfoForm;exports.default=_default,function(){var e=__webpack_require__(3).default,t=__webpack_require__(3).leaveModule;e&&(e.register(Item,"Item","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/InfoForm.jsx"),e.register(create,"create","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/InfoForm.jsx"),e.register(Option,"Option","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/InfoForm.jsx"),e.register(InfoForm,"InfoForm","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/InfoForm.jsx"),e.register(_default,"default","/Users/wangyanhui/Documents/web-projects/query-platform/src/pages/userinfo/InfoForm.jsx"),t(module))}()}).call(this,__webpack_require__(9)(module))},767:function(e,t,r){}}]);