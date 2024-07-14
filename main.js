
let form = document.getElementById('dd')


// let day;
// let month;
// let year;

let id1 = document.getElementById('id1') 
let id2 = document.getElementById('id2')
let id3 = document.getElementById('id3')
let id4 = document.getElementById('id4')
let id5 = document.getElementById('id5')
let id6 = document.getElementById('id6')
let id7 = document.getElementById('id7')







form.addEventListener('click',(e)=> {

    // e.preventDefault()
    let numberOne = document.getElementById('day').value
    let numberTwo = document.getElementById('month').value
    let numberThee = document.getElementById('year').value

    // day = numberOne.value
    // month = numberTwo.value
    // year = numberThee.value

    console.log(numberOne)
    console.log(numberTwo)
    console.log(numberThee)

    function result() {
        let span1 = document.createElement('span')
        let punktOne = Number(numberOne) - 22
        span1.textContent = punktOne
        id1.append(span1)
        let p21 = numberOne.split('')
        let p22 = numberTwo.split('')
        let p23 = numberThee.split('')

        function punktTwo() {
            let span2 = document.createElement('span')
            let result = Number(p21[0]) + Number(p21[1]) + Number(p22[0]) + Number(p22[1]) +  Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3])
            let fihelP2 = result - 22
            span2.textContent = fihelP2
            id2.append(span2)
            console.log(result)
        }

        punktTwo()

        function punktThee() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne
            let result3 = result1 + result2
            let result4 = result1 + result3 - 22
            let span3 = document.createElement('span')
            span3.textContent = result4
            id3.append(span3)
        }

        punktThee()

        function punktFor() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne
            let result3 = result1 + result2
            let result4 = Number(p22[1]) + result3 - 22
            console.log(result4)
            let span4 = document.createElement('span')
            span4.textContent = result4
            id4.append(span4)
        }


        punktFor()

        function punktFive() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + result1
            console.log(result2)
            let span5 = document.createElement('span')
            span5.textContent = result2
            id5.append(span5)
        }


        punktFive()

        function punktsix() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne 
            let result4 = result1 + result2
            console.log(result4)
            let span6 = document.createElement('span')
            span6.textContent = result4
            id6.append(span6)
        }


        punktsix()

        function punktseven() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne 
            let result4 = yearResult + result2
            console.log(result4)
            let span7 = document.createElement('span')
            span7.textContent = result4
            id7.append(span7)
        }


        punktseven()

        
        console.log(eee)
    }
    result()


})



































