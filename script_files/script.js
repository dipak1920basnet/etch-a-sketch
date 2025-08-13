let default_size = 16
document.addEventListener("DOMContentLoaded",()=>{
    set_grid = document.getElementById("set-grid")
    set_grid.addEventListener("click",()=>{
        let grid_size = prompt("Enter the grid size from 16 to 100");
        if(grid_size >= default_size && grid_size < 100)
        {
            default_size = grid_size;
            make_ground()
        }
        console.log(default_size)
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
        // grid_box.style.border = "0.001px red";
        grid_ground.appendChild(grid_box)
    }

    row_classes = document.querySelectorAll(".row_box")
    row_classes.forEach(element => {
        
        for (let i = 1; i<= default_size; i++){
        let col_grid_box = document.createElement("div")
        col_grid_box.setAttribute("class","col_box")
        col_grid_box.style.width = `${100/default_size}%`
        col_grid_box.style.margin = "0%";
        element.appendChild(col_grid_box) 
        }
    });

    }
    make_ground()
    console.log(100/default_size)
})