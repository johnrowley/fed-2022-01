function init() {

    console.log(GetStudentResults());

    WriteStudentResults(GetStudentResults());
}

function GetStudentResults() {

    return [
        {
            name: "Bruce Wayne", exams: [
                { title: 'English', score: 80 },
                { title: 'Spanish', score: 80 },
                { title: 'Maths', score: 80 }
            ]
        },
        {
            name: "Tony Stark", exams: [
                { title: 'English', score: 67 },
                { title: 'Engineering', score: 89 },
                { title: 'Programming', score: 90 }]
        },
        {
            name: "Peter Parker", exams: [
                { title: 'Gymnastics', score: 78 },
                { title: 'Dance', score: 15 },
                { title: 'Climbing', score: 91 }
            ]
        }
    ]

}

function WriteStudentResults(studentResults) {
   
    for (const student of studentResults) {

        for (const exam of student.exams) {

            const success = exam.score >= 70 ? 'Pass' : 'Fail';
            
            console.log(`${student.name} - ${exam.title}- ${exam.score} - ${success}`);

        }
    }
}