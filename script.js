function generateStudentComponent(name, stuID, phone, qualification, age, query) {
    studentComponent.setAttribute('id', 'main-container');

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'main');

    const h1 = document.createElement('h1');
    h1.textContent = name;

    const stuIDPara = document.createElement('p');
    stuIDPara.textContent = `Stu ID: ${stuID}`;

    const componentsDiv = document.createElement('div');
    componentsDiv.setAttribute('class', 'components');

    const leftDiv = document.createElement('div');
    leftDiv.setAttribute('class', 'left');

    const phonePara = document.createElement('p');
    phonePara.textContent = 'Phone No: ' + phone;

    const qualificationPara = document.createElement('p');
    qualificationPara.textContent = 'Qualification: ' + qualification;

    const agePara = document.createElement('p');
    agePara.textContent = 'Age: ' + age;

    const queryPara = document.createElement('p');
    queryPara.setAttribute('class', 'que1');
    queryPara.textContent = 'Query: ' + query;

    const rightDiv = document.createElement('div');
    rightDiv.setAttribute('class', 'right');

    const meet = document.createElement('p');
    meet.textContent = 'Meet';

    const phoneNo = document.createElement('p');
    phoneNo.textContent = phone;

    const qual = document.createElement('p');
    qual.textContent = qualification;

    const studentAge = document.createElement('p');
    studentAge.textContent = age;

    const demo = document.createElement('p');
    demo.textContent = query;

    // Append elements to their respective parents
    leftDiv.append(phonePara);
    leftDiv.append(qualificationPara);
    leftDiv.append(agePara);
    leftDiv.append(queryPara);

    rightDiv.append(meet);
    rightDiv.append(phoneNo);
    rightDiv.append(qual);
    rightDiv.append(studentAge);
    rightDiv.append(demo);

    componentsDiv.append(leftDiv);
    componentsDiv.append(rightDiv);

    mainDiv.append(h1);
    mainDiv.append(stuIDPara);
    mainDiv.append(componentsDiv);


    const studentContainer = document.getElementById("main-container");
    studentContainer.append(mainDiv);


}
generateStudentComponent("Student Name", "001", "93563-93094", "12th", "19", "Demo");
// Generate the student component and append it to the container


