const Member = require("./../models/member");

//เพิ่ม
const insertMemberCtrl = async (req, res) => {
  const member = new Member({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    isActive: req.body.isActive,
  });

  try {
    const result = await Member.create(member);
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถบันทึกข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};
//แก้ไข
const updateMemberCtrl = async (req, res) => {
  const member = new Member({
    _id: req.body._id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    isActive: req.body.isActive,
  });

  try {
    const result = await Member.updateOne(
      { _id: member._id },
      {
        $set: {
          firstname: member.firstname,
          lastname: member.lastname,
          age: member.age,
          isActive: member.isActive,
        },
      }
    );
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถแก้ไขข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};
//ลบ
const deleteMemberCtrl = async (req, res) => {
    const member = new Member({
        _id: req.body._id
      });
    
      try {
        const result = await Member.deleteOne(
          { _id: member._id }
        );
        res.json(result);
      } catch (error) {
        res.json({
          message:
            "Error : ไม่สามารถลบข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
        });
      }
};
//ดึงข้อมูลทั้งหมด
const getAllMemberCtrl = async (req, res) => {
  try {
    const result = await Member.find();
    res.json(result);
  } catch (error) {
    res.json({
      message:
        "Error : ไม่สามารถดึงข้อมูลได้ กรุณาตรวจสอบหรือลองใหม่อีกครั้ง....",
    });
  }
};

module.exports = {
  insertMemberCtrl,
  updateMemberCtrl,
  deleteMemberCtrl,
  getAllMemberCtrl,
};
