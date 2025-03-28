"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesRoutes = void 0;
const express_1 = require("express");
const messages_controller_1 = require("./messages.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const messages_validation_1 = require("./messages.validation");
const parseData_1 = __importDefault(require("../../middleware/parseData"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const user_constants_1 = require("../user/user.constants");
const fileUpload_1 = __importDefault(require("../../middleware/fileUpload"));
const upload = (0, fileUpload_1.default)('./public/uploads/messages');
const router = (0, express_1.Router)();
// const storage = memoryStorage();
// const upload = multer({ storage });
router.post('/send-messages', (0, auth_1.default)(user_constants_1.USER_ROLE.user, user_constants_1.USER_ROLE.admin), upload.single('image'), (0, parseData_1.default)(), (0, validateRequest_1.default)(messages_validation_1.messagesValidation.sendMessageValidation), messages_controller_1.messagesController.createMessages);
router.patch('/seen/:chatId', (0, auth_1.default)(user_constants_1.USER_ROLE.user, user_constants_1.USER_ROLE.admin), messages_controller_1.messagesController.seenMessage);
router.patch('/update/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.user, user_constants_1.USER_ROLE.admin), upload.single('image'), (0, parseData_1.default)(), (0, validateRequest_1.default)(messages_validation_1.messagesValidation.updateMessageValidation), messages_controller_1.messagesController.updateMessages);
router.get('/my-messages/:chatId', messages_controller_1.messagesController.getMessagesByChatId);
router.delete('/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.user, user_constants_1.USER_ROLE.admin), messages_controller_1.messagesController.deleteMessages);
router.get('/:id', (0, auth_1.default)(user_constants_1.USER_ROLE.user, user_constants_1.USER_ROLE.admin), messages_controller_1.messagesController.getMessagesById);
router.get('/', (0, auth_1.default)(user_constants_1.USER_ROLE.user, user_constants_1.USER_ROLE.admin), messages_controller_1.messagesController.getAllMessages);
exports.messagesRoutes = router;
