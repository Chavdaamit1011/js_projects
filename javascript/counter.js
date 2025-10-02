 let count = 0

        const display = document.getElementById("counter")
        const incrementBtn = document.getElementById("increment")
        const decrementBtn = document.getElementById("decrement")
        const resetBtn=document.getElementById("reset")


        function counterdisplay() {
            display.innerText = count;
        }

        incrementBtn.addEventListener("click", () => {

            count++
            counterdisplay()
        })


        decrementBtn.addEventListener("click", () => {
            if (count > 0) {

                count--
            }
            counterdisplay()
        })

        resetBtn.addEventListener("click",()=>{

            document.getElementById("counter").textContent=0
            count=0
            
        })