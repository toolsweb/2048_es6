import Grid from './Grid.js'
import Menu from './Menu.js'

class App
{
    constructor()
    {
        this.grid = new Grid(4);
        this.menu = new Menu(this.grid);
        this.keep = true;
        this.listenKeyDown();
        this.listenMouseSwitch();
    }

    listenKeyDown () 
    {
        $("body").keydown((e) => {
            this.menu.showIfGameOver();
             if (e.keyCode === 37)
                 this.moveAndMergeToDirection('left', -1);
             if (e.keyCode === 40)
                 this.moveAndMergeToDirection('bottom', this.grid.row_nb);
             this.grid.setColorCells();
             this.menu.showIfWinGame();

         }); 
    }

    getConditionsDirection(direction, val)
    {
        var condition;
        if (direction == 'bottom')
            condition = val + this.grid.row_nb < this.grid.row_nb * this.grid.row_nb;
        if (direction == 'right')
            condition = val % this.grid.row_nb !== this.grid.row_nb - 1;
        if (direction == 'left')
            condition = val % this.grid.row_nb !== 0;
        if (direction == 'top')
            condition = val / this.grid.row_nb >= 1;
        
        return condition;
    }

    moveAndMergeToDirection(direction, limit)
    {
        var clone = [];
        var final_clone = [];
        var condition;

        this.grid.grid.sort((a, b) => a - b );
        if (direction == 'bottom' || direction == 'right')
            this.grid.grid.reverse();
        this.move(this.grid.grid, clone, direction);
        clone.map((val, i) => {
            condition = this.getConditionsDirection(direction, val);
            if (this.grid.isset(val) && this.grid.isset(val) === this.grid.isset(val + limit) && condition)
                this.merge(i, val, clone, val + limit);
        });
        this.move(clone, final_clone, direction);
        if (!this.identique(this.grid.grid, final_clone)) {
            this.grid.grid = final_clone;
            this.grid.rand();
        }
    }

    move(tab1, tab2, direction) {
       
    }

    merge(index, valeur, tab2, move) 
    {
       
    }

    identique(tab1, tab2) {
        'use strict';
        if (tab1.every(e => tab2.includes(e)))
            return true;
        return false;

        // var i = 0;
        // if (tab1.length !== tab2.length)
        //     return false;
        // while (i < tab1.length) 
        // {
        //     if (tab1[i] !== tab2[i])
        //         return false;
        //     i += 1;
        // }
        // return true;
    }

    listenMouseSwitch()
    {
        var ok = false;
        var x;
        var y;
        var xx;
        var yy;
    
        $(".grid-container").on("mousedown", function (e) {
            e.preventDefault();
            xx = e.pageX - this.offsetLeft;
            yy = e.pageY - this.offsetTop;
    
            clearTimeout(this.downTimer);
            this.downTimer = setTimeout(() => {
                ok = true;
                return ok;
            }, 300);
        }).mouseup(function (e) {
            if (ok) {
                x = e.pageX - this.offsetLeft;
                y = e.pageY - this.offsetTop;
                if (xx > x + 100 && Math.abs(yy - y) < 50) {
                    e = jQuery.Event("keydown");
                    e.keyCode = 37;
                    $(".grid-container").trigger(e);
                } else if (xx < x + 100 && Math.abs(yy - y) < 50) {
                    e = jQuery.Event("keydown");
                    e.keyCode = 39;
                    $(".grid-container").trigger(e);
                }
                if (yy > y + 100 && Math.abs(xx - x) < 50) {
                    e = jQuery.Event("keydown");
                    e.keyCode = 38;
                    $(".grid-container").trigger(e);
                } else if (yy < y + 100 && Math.abs(xx - x) < 50) {
                    e = jQuery.Event("keydown");
                    e.keyCode = 40;
                    $(".grid-container").trigger(e);
                }
            }
            clearTimeout(setTimeout(() => {
                ok = false;
                return ok;
            }, 300));
            return ok;
        });
    }
}

export { App as default};
