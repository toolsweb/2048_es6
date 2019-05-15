class Grid
{
    constructor(nb)
    {
        this.row_nb;
        this.grid = [];
        this.init(nb);
    }

    init(nb)
    {
        let row_nb = localStorage.getItem('number');
        this.row_nb = row_nb ? parseInt(row_nb) : nb;
        $('#number').val(this.row_nb);
        this.createGrid();
        this.rand();
        this.rand();
    }

    createGrid()
    {

    }

    setColorCells() 
    {
 
    }

    isset(pos) 
    {
        'use strict';
        return $(".grid-cell").eq(pos).text();
    }
    
    rand() 
    {
       
    }

    overbook() 
    {
       
    }
   
}

export {Grid as default};

