import Platform from "react-native-web/dist/exports/Platform";
import "./font.css";

const ReactNative = require("react-native");
const Modal = require("./ModalComponent/Modal.web.js");

ReactNative.Modal = Modal;

// Platform.OS = "ios";

require("./main");
