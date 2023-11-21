const express = require('express');

const router = express.Router()
const memberController = require('./../controllers/memberController');

router.post('/member',memberController.insertMemberCtrl)

router.put('/member',memberController.updateMemberCtrl)

router.delete('/member',memberController.deleteMemberCtrl)

router.get('/member',memberController.getAllMemberCtrl)

module.exports = router