let default_size = 16
document.addEventListener("DOMContentLoaded",()=>{
    set_grid = document.getElementById("set-grid")
    set_grid.addEventListener("click",()=>{
        let grid_size = prompt("Enter the grid size from 16 to 100");
        if(grid_size >= default_size && grid_size < 100)
        {
            default_size = grid_size;
        }
        console.log(default_size)
    })
})