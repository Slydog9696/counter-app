let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


function increment() {
    count += 1
    countEl.textContent = count
}
increment()
console.log(count)

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
save()
console.log(count)
let countStr = 0
saveEl.textContent = "Previous entries: "
