function dateDiff(dateOfMonth) {        
    let today = new Date();
    let endDate = new Date(`${today.getMonth() + 1}/${dateOfMonth}/${today.getFullYear()}`);
    

    const diffInMs = Math.abs(endDate - today);
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
}
const diff_date = dateDiff(12)
console.log(diff_date); 