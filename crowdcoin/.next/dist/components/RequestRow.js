'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/gnock/ethprojects/crowdcoin/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingApprove: false,
      loadingFinalize: false
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context.sent;
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loadingApprove: true });
              _context.prev = 5;
              _context.next = 8;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests'); //new to update page on success
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](5);

            case 13:
              _this.setState({ loadingApprove: false });

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[5, 11]]);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, campaign;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              campaign = (0, _campaign2.default)(_this.props.address);

              _this.setState({ loadingFinalize: true });
              _context2.prev = 5;
              _context2.next = 8;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 8:
              _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests'); //new to update page on success
              _context2.next = 13;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2['catch'](5);

            case 13:
              _this.setState({ loadingFinalize: false });

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[5, 11]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loadingApprove, color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loadingFinalize, color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZ0FwcHJvdmUiLCJsb2FkaW5nRmluYWxpemUiLCJvbkFwcHJvdmUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU87O0FBQ2YsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7b05BRUosQTtzQkFBUSxBQUNVLEFBQ2hCO3VCQUZNLEFBRVcsQTtBQUZYLEFBQ04sYSxBQUlGLHFGQUFZLG1CQUFBO29CQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUFBOzhCQUFBO3FCQUNhLGNBQUEsQUFBSyxJQURsQixBQUNhLEFBQVM7O2lCQUExQjtBQURJLGtDQUVKO0FBRkkseUJBRU8sd0JBQVMsTUFBQSxBQUFLLE1BRnJCLEFBRU8sQUFBb0IsQUFDckM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGdCQUhOLEFBR1YsQUFBYyxBQUFrQjs4QkFIdEI7OEJBQUE7OEJBS0osQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NCQUM3QyxTQU5FLEFBS0osQUFBb0QsQUFDbEQsQUFBUztBQUR5QyxBQUN4RCxlQURJOztpQkFHTjs2QkFBQSxBQUFPLDBCQUF3QixNQUFBLEFBQUssTUFBcEMsQUFBMEMsVUFSaEMsY0FBQSxBQVFxRDs4QkFSckQ7QUFBQTs7aUJBQUE7OEJBQUE7OENBQUE7O2lCQVdWO29CQUFBLEFBQUssU0FBUyxFQUFFLGdCQVhOLEFBV1YsQUFBYyxBQUFrQjs7aUJBWHRCO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0EsZUFlWixBLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUFBOytCQUFBO3FCQUNZLGNBQUEsQUFBSyxJQURqQixBQUNZLEFBQVM7O2lCQUExQjtBQURLLG1DQUVMO0FBRksseUJBRU0sd0JBQVMsTUFBQSxBQUFLLE1BRnBCLEFBRU0sQUFBb0IsQUFDckM7O29CQUFBLEFBQUssU0FBUyxFQUFFLGlCQUhMLEFBR1gsQUFBYyxBQUFtQjsrQkFIdEI7K0JBQUE7OEJBS0wsQUFBUyxRQUFULEFBQWlCLGdCQUFnQixNQUFBLEFBQUssTUFBdEMsQUFBNEMsSUFBNUMsQUFBZ0Q7c0JBQzlDLFNBTkcsQUFLTCxBQUFxRCxBQUNuRCxBQUFTO0FBRDBDLEFBQ3pELGVBREk7O2lCQUdOOzZCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQVIvQixjQUFBLEFBUW9EOytCQVJwRDtBQUFBOztpQkFBQTsrQkFBQTtnREFBQTs7aUJBV1g7b0JBQUEsQUFBSyxTQUFTLEVBQUUsaUJBWEwsQUFXWCxBQUFjLEFBQW1COztpQkFYdEI7aUJBQUE7K0JBQUE7O0FBQUE7Z0NBQUE7QTs7Ozs7NkJBZUo7VUFBQSxBQUNDLE1BREQsQUFDZSx1QkFEZixBQUNDO1VBREQsQUFDTSxPQUROLEFBQ2UsdUJBRGYsQUFDTTttQkFDeUIsS0FGL0IsQUFFb0M7VUFGcEMsQUFFQSxZQUZBLEFBRUE7VUFGQSxBQUVJLGlCQUZKLEFBRUk7VUFGSixBQUVhLHdCQUZiLEFBRWEsQUFDcEI7O1VBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBRS9EOzs2QkFDRyxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxRQUEvRCxBQUF1RTtvQkFBdkU7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsU0FERixBQUNFLEFBQ0EscUJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBRkYsQUFFRSxBQUFlLEFBQ2YsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsdUJBQU8sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQUhwQyxBQUdFLEFBQU8sQUFBa0MsQUFDekMsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSkYsQUFJRSxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBZSxlQUFnQixLQUxqQyxBQUtFLEFBQ0EsaUNBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDSTtBQURKO0FBQUEsaUJBQ0ksQUFBUSxXQUFSLEFBQW1CLHVCQUNuQixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLGdCQUFnQixPQUE1QyxBQUFrRCxTQUFRLE9BQTFELE1BQWdFLFNBQVMsS0FBekUsQUFBOEU7b0JBQTlFO3NCQUFBO0FBQUE7T0FBQSxFQVJOLEFBTUUsQUFFSSxBQUdKLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLGlCQUNJLEFBQVEsV0FBUixBQUFtQix1QkFDckIsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixpQkFBaUIsT0FBN0MsQUFBbUQsUUFBTyxPQUExRCxNQUFnRSxTQUFTLEtBQXpFLEFBQThFO29CQUE5RTtzQkFBQTtBQUFBO09BQUEsRUFkTixBQUNFLEFBV0UsQUFFRSxBQU9QOzs7OztBQS9Ec0IsQSxBQW1FekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9nbm9jay9ldGhwcm9qZWN0cy9jcm93ZGNvaW4ifQ==