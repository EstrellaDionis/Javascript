const seatingChart = [
    ['Kaitlyn', 'Mark', 'Brian'],
    ['Javier', 'Jay', 'Tim'],
    ['Anubis', 'Mariely', 'Jomar']
];

for(let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i]; //this represents the characters in their rows
    console.log(`Row #${i + 1}`) //this will display the ROW #. The reason we used i + 1 is because we display Row 0 since the loops start at 0; Will display Row # 1 - 3.
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}

// the reason why the nested loop shows the name is because its taking the row variable thats holding seatingChart[i] and iterating through it giving you the names for each row from each array.
