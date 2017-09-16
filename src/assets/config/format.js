let format={
  // 联系人QQ
  QQ:[
    {required: true, message: '请填写QQ号码', trigger: 'blur'},
    { type:"string",pattern: REGEXP.qq, message: 'QQ号码格式错误', trigger: 'blur' }
  ]
};

global.FORMMAT = format;
export default format
