const Router = require('express');
const router = new Router();
const controller = require ('./authController');
const curriculumService= require('./services/curriculumService')
const {check}=require('express-validator');
const authMiddleware=require('./middleware/authMiddleware');
const roleMiddleware=require('./middleware/roleMiddleware');

router.post('/registration',[check('username', "Имя пользователя не может быть пустым").notEmpty(),
check('password',"Пароль должен быть больше 4 и меньше 12 символов").isLength({min:4,max:12})], 
controller.registration);
router.post('/login',[check('username', "Имя пользователя не может быть пустым").notEmpty(),
check('password',"Пароль должен быть больше 4 и меньше 12 символов").isLength({min:4,max:12})], 
controller.login);
router.post('/addsubjects',roleMiddleware(['Admin']),[check('subject', "Название предмета не может быть пустым").notEmpty(),
check('semestr', "Семестр нужно ввести целым числом").isNumeric(),check('formcontrol',"Название формы контроля не должно быть пустым").notEmpty(),
check('credits', "Кредиты нужно ввести целым числом").isNumeric()], curriculumService.addSubjects);
router.get('/getsubjects',roleMiddleware(['Admin']),curriculumService.getSubjects);
router.patch('/changesubject',roleMiddleware(['Admin']),[check('subject',"Название предмета не может быть пустым").notEmpty()],curriculumService.changeSubject);
router.get('/auth',authMiddleware, controller.authorization);
router.post('/addgroup',roleMiddleware(['Admin']),[check('groupnumber',"Название группы не может быть пустым").notEmpty()],curriculumService.CreateGroup);
router.post('/addcurriculum',roleMiddleware(['Admin']),[check('groupnumber',"Название группы не может быть пустым").notEmpty(),
check('subject', "Название предмета не может быть пустым").notEmpty()],curriculumService.AddCurriculum);
router.get('/getcurriculum',[check('groupnumber', "Название группы не может быть пустым").notEmpty()],
curriculumService.getCurriculum);
router.get('/users',roleMiddleware(['Admin']), controller.getUsers);

module.exports=router;