let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

for (let i = 0; i < coursesArray.length; i++) {
    let divContainer = document.createElement('div')
    document.body.appendChild(divContainer);
    let divTitle = document.createElement('div');
    divTitle.innerText = coursesArray[i].title;
    divTitle.style.textAlign = 'center';

    let divDurationMonth = document.createElement('div')
    divDurationMonth.innerText = coursesArray[i].monthDuration;

    let divDurationHours = document.createElement('div')
    divDurationHours.innerText = coursesArray[i].hourDuration;

    let divDuration = document.createElement('div')
    divDuration.style.display = 'flex';
    divDuration.style.flexDirection = 'row';
    divDuration.style.justifyContent = 'space-around';
    document.body.append(divDuration);
    divDuration.append(divDurationMonth,divDurationHours)
    divContainer.append(divTitle, divDuration);

    for (const module of coursesArray[i].modules) {
        let ulList = document.createElement('ul');
        let li = document.createElement('li');
        li.innerText = module;
        ulList.appendChild(li);
        divContainer.append(ulList);
    }
}


