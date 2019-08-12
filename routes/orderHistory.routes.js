const router = require("express").Router();
const {OrderHistoryController} = require("../controller")

router.get("",OrderHistoryController.getAll);
router.post("",OrderHistoryController.create);
router.get("/:id",OrderHistoryController.getOne);
router.put("/:id",OrderHistoryController.update);
router.delete("/:id",OrderHistoryController.delete);

module.exports = router;