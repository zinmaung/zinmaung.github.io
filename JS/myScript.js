         
(function(){
            
            var mb1 = new TimelineMax(); 
            mb1.from('#SiteHeader', 3, {top: -100, scale: 0.00001, opacity: 5, ease: SlowMo.ease.config(0.1, 0.1, false), y: -500 });
            
            var mb1 = new TimelineMax();
            mb1.from('#PlaygroundHeader', 10, {top: -100, scale: 0.1, ease: Elastic.easeOut });
            
            var mb1 = new TimelineMax();
            mb1.from('#cow', 3, {bottom: -100, scale: 0.00001, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), y: -500 })
               
            var mb1 = new TimelineMax();
            mb1.from('#bird', 3, {left: -100, scale: 0.00001, opacity: 0, ease: SteppedEase.config(12), y: 500 })
            
            var mb1 = new TimelineMax();
            mb1.from('#mario', 3, {left: -100, scale: 0.00001, opacity: 0, ease: Back.easeIn.config(1.7), y: 500 })
            
            var mb1 = new TimelineMax();
            mb1.from('#tiger', 3, {left: -100, scale: 0.00001, opacity: 0, ease: Back.easeIn.config(1.7), x: 500 })
         
            var mb1 = new TimelineMax();
            mb1.from('#yoda', 1, {bottom: -100, scale: 1, opacity: 1, ease: Bounce.easeOut, y: -500 });
            
            var mb1 = new TimelineMax();
            mb1.from('#penguin', 1., {bottom: -100, scale: 1, opacity: 1, ease: Bounce.easeOut, y: -500 });  
            
}());       
 