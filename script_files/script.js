let default_size = 16
function getRandomInt(min, max) {
  min = Math.ceil(min);   // round up
  max = Math.floor(max);  // round down
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded",()=>{
    set_grid = document.getElementById("set-grid")
    set_grid.addEventListener("click",()=>{
        let grid_size = prompt("Enter the grid size from 16 to 100");
        if(grid_size >= default_size && grid_size <= 100)
        {
            default_size = grid_size;
            // make ground for different size
            document.getElementById("draw-box").innerHTML = null;
            make_ground()
        }
        // console.log(default_size)
        else{
            document.getElementById("draw-box").innerHTML = null;
            make_ground()
        }
    })


    // Draw grid for draw-box id
    function make_ground()
    {
        let grid_ground = document.getElementById("draw-box")
    // let ground_height = grid_ground.offsetHeight

        for (let i = 1; i<= default_size; i++)
        {
            let grid_box = document.createElement("div")
            grid_box.setAttribute("class","row_box")

            // grid_box.style.height = `${ground_height*(default_size/100)}%`
            grid_box.style.height = `${100/default_size}%`
            grid_box.style.margin = "0%"
            // grid_box.style.border = "0.001px solid red";
            grid_box.style.display = "flex";
            grid_ground.appendChild(grid_box)
        }

    // add default number of grid in column in single row
        row_classes = document.querySelectorAll(".row_box")
        row_classes.forEach(element => {
            for (let i = 1; i<= default_size; i++){
            let col_grid_box = document.createElement("div")
            col_grid_box.setAttribute("class","col_box")
            col_grid_box.style.width = `${100/default_size}%`
            // col_grid_box.style.height = `${100/default_size}%`
            col_grid_box.style.margin = "0%";
            // col_grid_box.style.border = "0.001px solid red";
            // element.style.backgroundColor = "white";
            // Add hover effects 
            col_grid_box.addEventListener("mouseenter",()=>{
                // if (col_grid_box.style.backgroundColor != "green")
                // {
                //     col_grid_box.style.backgroundColor = "rgb(0, 255, 0)";
                // }
                // else
                // {
                //     col_grid_box.style.backgroundColor = "rgb(255, 255, 255)";
                // }
                let red = getRandomInt(0,255);
                let green = getRandomInt(0,255);
                let blue = getRandomInt(0,255);
                col_grid_box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                })
            element.appendChild(col_grid_box) 
            }
        });

    }
    make_ground()
})