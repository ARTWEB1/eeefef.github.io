
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
        let diop1 = Math.abs(numberOne % 22)
        // console.log(rr)
        if(diop1 === 0  ) {
            span1.textContent = 22        
        } else if (numberOne <= 22 && numberOne >= 1 ) {
            console.log() 
            span1.textContent = Number(numberOne)
        } else if (diop1 > 0)  {
            span1.textContent = diop1
        } 

        // span1.textContent = punktOne
        id1.append(span1)
        let p21 = numberOne.split('')
        let p22 = numberTwo.split('')
        let p23 = numberThee.split('')

        function punktTwo() {
            let span2 = document.createElement('span')
            let result = Number(p21[0]) + Number(p21[1]) + Number(p22[0]) + Number(p22[1]) +  Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3])
            let fihelP2 = Math.abs(result - 22)
            let diop2 = Math.abs(fihelP2 % 22)
            if(diop2 === 0) {
                span2.textContent = 22
            } else if (fihelP2 <= 22 && fihelP2 >= 1 ) {
                span2.textContent = fihelP2
            } else if (diop2 > 0) {
                span2.textContent = Math.abs(diop2)
            } 
            id2.append(span2)
            // console.log(result)
        }

        punktTwo()

        function punktThee() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne
            let result3 = result1 + result2
            let result4 = Math.abs(result1 + result3 - 22)
            console.log(result4)
            let span3 = document.createElement('span')
            let diop3 = Math.abs(result4 % 22)
            if(diop3 === 0) {
                span3.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                span3.textContent = result4
            } else if (diop3 > 0) {
                span3.textContent = Math.abs(diop3)
            } 
            // span3.textContent = result4
            id3.append(span3)
        }

        punktThee()

        function punktFor() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne
            let result3 = result1 + result2
            let result4 = Math.abs(Number(p22[1]) + result3 - 22)
            // console.log(result4)
            let span4 = document.createElement('span')
            let diop4 = Math.abs(result4 % 22)
            if(diop4 === 0) {
                span4.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                span4.textContent = Math.abs(result4)
            } else if (diop4 > 0) {
                span4.textContent = Math.abs(diop4)
            } 

            // span4.textContent = result4
            id4.append(span4)
        }


        punktFor()

        function punktFive() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Math.abs(Number(p22[1]) + result1)
            // console.log(result2)
            let span5 = document.createElement('span')
            let diop5 = Math.abs(result2 % 22)
            if(diop5 === 0) {
                span5.textContent = 22
            } else if (result2 <= 22 && result2 >= 1 ) {
                span5.textContent = Math.abs(result2)
            } else if (diop5 > 0) {
                span5.textContent = Math.abs(diop5)
            } 
            // span5.textContent = result2
            id5.append(span5)
        }


        punktFive()

        function punktsix() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            let result1 = Number(p22[1]) + yearResult
            let result2 = Number(p22[1]) + punktOne 
            let result4 = Math.abs(result1 + result2)
            // console.log(result4)
            let span6 = document.createElement('span')
            let diop6 = Math.abs(result4 % 22)
            if(diop6 === 0) {
                span6.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                span6.textContent = Math.abs(result4)
            } else if (diop6 > 0) {
                span6.textContent = Math.abs(diop6)
            } 
            // span6.textContent = result4
            id6.append(span6)
        }


        punktsix()

        function punktseven() {
            let yearResult =   Number(p23[0]) +  Number(p23[1]) + Number(p23[2]) + Number(p23[3]) - 22
            // let result1 = Number(p22[1]) + yearResult

            let result2 = Number(p22[1]) + punktOne 
            let result4 = Math.abs(yearResult + result2)
            // console.log(result4)
            let span7 = document.createElement('span')
            let diop7 = Math.abs(result4 % 22)
            if(diop7 === 0) {
                span7.textContent = 22
            } else if (result4 <= 22 && result4 >= 1 ) {
                span7.textContent = Math.abs(result4)
            } else if (diop7 > 0) {
                span7.textContent = Math.abs(diop7)
            } 
            // span7.textContent = result4
            id7.append(span7)
        }


        punktseven()

        
        // console.log(eee)
    }
    result()


})



































