import "./subject.css"
const Subject=({subject})=>{
    return(
        <div className="subject">
            <div><span>{subject.subject}</span></div>
            <div>{subject.semestr}</div>
            <div>{subject.formcontrol}</div>
            <div>{subject.credits}</div>
        </div>
    );
};
export default Subject;