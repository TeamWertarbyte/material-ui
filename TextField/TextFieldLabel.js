'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = require('simple-assign');

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transitions = require('../styles/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    top: 38,
    transition: _transitions2.default.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    cursor: props.disabled ? 'not-allowed' : 'text',
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, props.shrinkStyle) : null;

  return {
    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
  };
}

var TextFieldLabel = function TextFieldLabel(props) {
  var muiTheme = props.muiTheme;
  var className = props.className;
  var children = props.children;
  var htmlFor = props.htmlFor;
  var isRequired = props.isRequired;
  var onTouchTap = props.onTouchTap;
  var asteriskStyle = props.asteriskStyle;
  var prepareStyles = muiTheme.prepareStyles;

  var styles = getStyles(props);

  return _react2.default.createElement(
    'label',
    {
      className: className,
      style: prepareStyles(styles.root),
      htmlFor: htmlFor,
      onTouchTap: onTouchTap
    },
    children,
    isRequired ? _react2.default.createElement(
      'span',
      { style: asteriskStyle },
      '\u2009',
      '*'
    ) : null
  );
};

process.env.NODE_ENV !== "production" ? TextFieldLabel.propTypes = {
  /**
   * Override the inline-styles of the asterisk element.
   */
  asteriskStyle: _react.PropTypes.object,
  /**
   * The label contents.
   */
  children: _react.PropTypes.node,
  /**
   * The css class name of the root element.
   */
  className: _react.PropTypes.string,
  /**
   * Disables the label if set to true.
   */
  disabled: _react.PropTypes.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: _react.PropTypes.string,
  /**
   * Whether the input value of this label's field is required.
   */
  isRequired: _react.PropTypes.bool,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _react.PropTypes.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   */
  onTouchTap: _react.PropTypes.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: _react.PropTypes.bool,
  /**
   * Override the inline-styles of the root element when focused.
   */
  shrinkStyle: _react.PropTypes.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _react.PropTypes.object
} : void 0;

TextFieldLabel.defaultProps = {
  disabled: false,
  isRequired: false,
  shrink: false
};

exports.default = TextFieldLabel;