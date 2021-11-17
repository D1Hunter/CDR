const AcademicSubjects=require('../models/AcademicSubjects');

const {validationResult} = require('express-validator');
const Groups = require('../models/Groups');

class curriculumService{
    async addSubjects(req,res){
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при добавлении", errors})
            }
            const {subject,semestr,formcontrol,credits}=req.body;
            const candidate = await AcademicSubjects.findOne({subject});
            if (candidate) {
                return res.status(400).json({message: "Предмет с таким названием уже существует"});
            }
            if(semestr!=1&&semestr!=2)
            {
                console.log(semestr);
                return res.status(400).json({message: "Номер семестра может быть только 1 или 2"})
            }
            if(formcontrol!="Exam"&&formcontrol!="Credit")
            {
                console.log(formcontrol);
                return res.status(400).json({message: "Форма контроля может быть только Credit(зачет) или Exam(Экзамен)"})
            }
            if(credits>10)
            {
                return res.status(400).json({message: "Кредитов не может быть больше 10"});
            }
            const Subject = new AcademicSubjects({subject,semestr,formcontrol,credits});
            await Subject.save()
            return res.json({message: "Предмет успешно добавлен"})
        }
        catch(e){
            console.log(e);
        }
    }
    async getSubjects(req, res){
        try{
            const Subjects=await AcademicSubjects.find();
            res.json(Subjects);
        }catch(e){
            console.log(e);
            req.send({message:"Server error"})
        }
    }
    async changeSubject(req,res){
        try{
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({message: "Ошибка при валидации", errors})
        }   
        const {subject,semestr,formcontrol,credits}=req.body;
        const Subject= await AcademicSubjects.findOne({subject});
        if(!Subject){
            return res.status(400).json({message: "Предмет с таким названием не существует"});
        }
        if(semestr!=""){
            Subject.semestr=semestr;
        }
        if(formcontrol!=""){
            Subject.formcontrol=formcontrol;
        }
        if(credits!=""){
            Subject.credits=credits;
        }
        await Subject.save();
        return res.json({message: "Предмет успешно изменён"})
        }catch(e){
            console.log(e);
            req.send({message:"Server error"})
        }
    }
 
    async CreateGroup(req,res){
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при добавлении", errors})
            }
            const {groupnumber}=req.body;
            const groupnum = await Groups.findOne({groupnumber});
            if (groupnum) {
                return res.status(400).json({message: "Группа с таким названием уже существует"});
            }
            const group = new Groups ({groupnumber});
            await group.save()
            return res.json({message: "Группа успешно добавлена"})
        }
        catch(e){
            console.log(e);
        }
    }
    async AddCurriculum(req,res){
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при добавлении", errors})
            }
            const {groupnumber,subject}=req.body;
            const group = await Groups.findOne({groupnumber});
            if (!group) {
                return res.status(400).json({message: "Группа с таким названием не существует"});
            }
            const academicSubjects = await AcademicSubjects.findOne({subject});
            if(!academicSubjects){
                return res.status(400).json({message: "Предмет с таким названием не существует"});
            }

            for(let i=0;i<group.curriculum.length;i++)
            {
                if(group.curriculum[i].equals(academicSubjects._id)){
                    return res.status(400).json({message: "Предмет уже присутствует в расписании"});
                }
            }
            group.curriculum.push(academicSubjects);
            await group.save();
            return res.json({message: "Расписанние даной группы успешно обновлено"})
        }
        catch(e){
            console.log(e);
        }
    }
    async getCurriculum(req, res){
        try{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при валидации", errors})
            }
            const {groupnumber}=req.query;
            const group=await Groups.findOne({groupnumber});
            if(!group){
                return res.status(400).json({message: "Группы нет в списке", errors})
            }
            let curriculums=[];
            for(let i=0;i<group.curriculum.length;i++)
            {
                console.log(group.curriculum[i]);
                curriculums.push(await AcademicSubjects.findById(group.curriculum[i]));
            }
            res.json(curriculums);
        }catch(e){
            console.log(e);
            req.send({message:"Server error"})
        }
    }
}

module.exports= new curriculumService();